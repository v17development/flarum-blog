import Page from "flarum/common/components/Page";
import IndexPage from "flarum/components/IndexPage";
import CommentPost from "flarum/forum/components/CommentPost";
import PostStream from "flarum/forum/components/PostStream";
import PostStreamState from "flarum/forum/states/PostStreamState";
import BlogPostController from "../components/BlogPostController";
import BlogItemSidebar from "../components/BlogItemSidebar/BlogItemSidebar";
import Link from "flarum/common/components/Link";
import BlogOverview from "./BlogOverview";
import fullTime from "flarum/common/helpers/fullTime";
import ArticleSubscription from "../components/ArticleSubscription";
import classList from "flarum/common/utils/classList";
import ItemList from "flarum/common/utils/ItemList";
import icon from "flarum/common/helpers/icon";
import app from "flarum/forum/app";

export default class BlogItem extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle(app.translator.trans("v17development-flarum-blog.forum.blog"));

    // Send history push
    app.history.push("blogArticle");

    this.bodyClass = "BlogItemPage";

    this.near = m.route.param("near") || 0;

    this.loading = true;
    this.found = false;
    this.article = null;

    this.loadBlogItem();
  }

  // Load blog overview
  loadBlogItem() {
    const preloadBlogOverview = app.preloadedApiDocument();

    if (preloadBlogOverview) {
      // We must wrap this in a setTimeout because if we are mounting this
      // component for the first time on page load, then any calls to m.redraw
      // will be ineffective and thus any configs (scroll code) will be run
      // before stuff is drawn to the page.
      setTimeout(this.show.bind(this, preloadBlogOverview), 0);
    } else {
      app.store
        .find("discussions", m.route.param("id").split("-")[0])
        .then(this.show.bind(this))
        .catch(() => {
          m.redraw();
        });
    }

    m.redraw();
  }

  // Show blog post
  show(article) {
    // Set article data
    this.article = article;

    // Update title
    app.setTitle(
      `${article.title()} - ${app.translator.trans(
        "v17development-flarum-blog.forum.blog"
      )}`
    );

    this.loading = false;

    let includedPosts = [];
    if (article.payload && article.payload.included) {
      const articleId = article.id();

      includedPosts = article.payload.included
        .filter(
          (record) =>
            record.type === "posts" &&
            record.relationships &&
            record.relationships.discussion &&
            record.relationships.discussion.data.id === articleId
        )
        .map((record) => app.store.getById("posts", record.id))
        .sort((a, b) => a.id() - b.id())
        .slice(0, 20);
    }

    this.stream = new PostStreamState(article, includedPosts);

    // Scroll to specific post
    if (this.near) {
      this.stream.goToNumber(this.near || 0, true).then(() => {
        app.current.set("discussion", article);
        app.current.set("stream", this.stream);
      });
    }

    // Read post on load
    if (app.session.user && !article.lastReadPostNumber()) {
      article.save({ lastReadPostNumber: 1 });
    }

    m.redraw();
  }

  postItems() {
    let articlePost = null;

    if (!this.loading && this.article) {
      articlePost = this.article?.firstPost?.();
    }

    const items = new ItemList();

    items.add(
      "title",
      <h3
        className={classList("FlarumBlog-Article-Title", {
          "FlarumBlog-Article-GhostTitle": this.loading,
        })}
      >
        {this?.article?.title?.() || "Ghost title"}
        {this.article?.isHidden?.() &&
          `(${app.translator.trans(
            "v17development-flarum-blog.forum.hidden"
          )})`}
      </h3>,
      100
    );

    items.add(
      "publishDate",
      <div
        className={classList("FlarumBlog-Article-PublishDate", {
          "FlarumBlog-Article-GhostPublishDate": this.loading,
        })}
      >
        {this.article ? (
          fullTime(this.article.createdAt())
        ) : (
          <span>&nbsp;</span>
        )}
      </div>,
      80
    );

    if (this.loading) {
      items.add(
        "skeleton",
        [0, 1, 2].map(() => (
          <div>
            <p className={"FlarumBlog-Article-GhostParagraph"}>&nbsp;</p>
            <p className={"FlarumBlog-Article-GhostParagraph"}>&nbsp;</p>
            <p className={"FlarumBlog-Article-GhostParagraph"}>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        )),
        60
      );
    }

    if (!this.loading) {
      if (this.article.blogMeta?.()?.isPendingReview?.()) {
        items.add(
          "review",
          <div className={"Post-body"}>
            <blockquote class="uncited" style={{ fontSize: "16px" }}>
              <div>
                {icon("far fa-clock", { style: { marginRight: "5px" } })}{" "}
                {app.translator.trans(
                  "v17development-flarum-blog.forum.review_article.pending_review"
                )}
              </div>
            </blockquote>
          </div>,
          60
        );
      }

      if (articlePost) {
        items.add("post", <CommentPost post={articlePost} />, 40);
      }
    }

    return items;
  }

  contentItems() {
    const defaultImage = app.forum.attribute("blogDefaultImage")
      ? `url(${app.forum.attribute("baseUrl")}/assets/${app.forum.attribute(
          "blogDefaultImage"
        )})`
      : null;

    const blogImage = this.article?.blogMeta()?.featuredImage?.()
      ? `url(${this.article.blogMeta().featuredImage()})`
      : defaultImage;

    const items = new ItemList();

    items.add(
      "image",
      <div
        className={classList(
          "FlarumBlog-Article-Image FlarumBlog-default-image",
          { "FlarumBlog-Article-GhostImage": this.loading }
        )}
        style={{
          backgroundImage: blogImage,
          opacity: this.article?.isHidden?.() ? 0.4 : null,
        }}
      />,
      100
    );

    if (
      this.article &&
      (app.session.user?.canEdit?.() ||
        this.article?.canRename?.() ||
        this.article?.posts?.()?.[0]?.canEdit?.())
    ) {
      items.add(
        "editArticle",
        <BlogPostController article={this.article} />,
        80
      );
    }

    // Article Categories
    items.add(
      "categories",
      <div className="FlarumBlog-Article-Categories">
        {!this.loading &&
          this.article
            ?.tags?.()
            ?.map((tag) => (
              <Link href={app.route("blogCategory", { slug: tag.slug() })}>
                {tag.name()}
              </Link>
            ))}

        {this.loading &&
          [0, 1].map(() => (
            <span className="FlarumBlog-Article-GhostCategory">Category</span>
          ))}
      </div>,
      60
    );

    items.add(
      "post",
      <div className={"FlarumBlog-Article-Post"}>
        {this.postItems().toArray()}
      </div>,
      40
    );

    return items;
  }

  articleItems() {
    const items = new ItemList();

    items.add(
      "content",
      <div className="FlarumBlog-Article-Content">
        {this.contentItems().toArray()}
      </div>,
      100
    );

    if (
      !(this?.article?.isLocked?.() && this?.article?.commentCount?.() === 1)
    ) {
      items.add(
        "comments",
        <div className={"FlarumBlog-Article-Comments"}>
          {/* Show subscription state */}
          {!this.loading &&
            app.session.user &&
            this.article.subscription &&
            (!this.article.isLocked ||
              (this.article.isLocked && !this.article.isLocked())) && (
              <ArticleSubscription discussion={this.article} />
            )}

          <h4>
            {app.translator.trans(
              "v17development-flarum-blog.forum.comment_section.comments"
            )}{" "}
            ({this.article ? this.article.commentCount() - 1 : 0})
          </h4>

          {/* Locked */}
          {!this.loading && this.article?.isLocked?.() && (
            <div className={"Post-body"}>
              <blockquote class="uncited">
                <div>
                  <span
                    className={"far fa-lock"}
                    style={{ marginRight: "5px" }}
                  />{" "}
                  {app.translator.trans(
                    "v17development-flarum-blog.forum.comment_section.locked"
                  )}
                </div>
              </blockquote>
            </div>
          )}

          {!this.loading &&
            this.article &&
            PostStream.component({
              discussion: this.article,
              stream: this.stream,
              onPositionChange: this.positionChanged.bind(this),
            })}
        </div>,
        75
      );
    }

    return items;
  }

  view() {
    return [
      app.forum.attribute("blogAddHero") == true && IndexPage.prototype.hero(),
      <div className={"FlarumBlogItem"}>
        <div className={"container"}>
          <div className={"FlarumBlog-ToolButtons"}>
            <Link
              href={app.route("blog")}
              className={"Button"}
              onclick={(e) => {
                if (app.previous.matches(BlogOverview)) {
                  e.preventDefault();
                  history.back();
                }
              }}
            >
              <i class="icon fas fa-angle-left Button-icon"></i>
              <span class="Button-label">
                {app.translator.trans(
                  "v17development-flarum-blog.forum.return_to_overview"
                )}
              </span>
            </Link>
          </div>
          <div className={"FlarumBlog-Article"}>
            <div className={"FlarumBlog-Article-Container"}>
              {this.articleItems().toArray()}
            </div>

            <BlogItemSidebar article={this.article} loading={this.loading} />
          </div>
        </div>
      </div>,
    ];
  }

  positionChanged(startNumber, endNumber) {
    const article = this.article;

    if (app.session.user && endNumber > (article.lastReadPostNumber() || 0)) {
      article.save({ lastReadPostNumber: endNumber });
      m.redraw();
    }
  }
}
