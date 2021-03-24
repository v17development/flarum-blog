import Page from "flarum/components/Page";
import CommentPost from "flarum/components/CommentPost";
import PostStream from "flarum/components/PostStream";
import PostStreamState from "flarum/states/PostStreamState";
import BlogPostController from "../components/BlogPostController";
import BlogItemSidebar from "../components/BlogItemSidebar/BlogItemSidebar";
import Link from "flarum/components/Link";
import BlogOverview from "./BlogOverview";
import fullTime from "flarum/helpers/fullTime";
import ArticleSubscription from "../components/ArticleSubscription";

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
      this.stream.goToNumber(this.near, true);
    }

    m.redraw();
  }

  view() {
    const defaultImage = app.forum.attribute("blogDefaultImage")
      ? `url(${
          app.forum.attribute("baseUrl") +
          "/assets/" +
          app.forum.attribute("blogDefaultImage")
        })`
      : null;
    const blogImage =
      this.article &&
      this.article.blogMeta() &&
      this.article.blogMeta().featuredImage()
        ? `url(${this.article.blogMeta().featuredImage()})`
        : defaultImage;
    let articlePost = null;

    if (!this.loading && this.article) {
      articlePost = this.article.firstPost()
        ? this.article.firstPost()
        : app.store.getById("posts", this.article.firstPostId());
    }

    return (
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
              <div className={"FlarumBlog-Article-Content"}>
                <div
                  className={`FlarumBlog-Article-Image FlarumBlog-default-image ${
                    this.loading ? "FlarumBlog-Article-GhostImage" : ""
                  }`}
                  style={{
                    backgroundImage: blogImage,
                    opacity:
                      this.article && this.article.isHidden() ? 0.4 : null,
                  }}
                />

                {this.article &&
                  app.session.user &&
                  (app.session.user.canEdit() ||
                    this.article.canRename() ||
                    (this.article.posts() &&
                      this.article.posts()[0].canEdit())) && (
                    <BlogPostController article={this.article} />
                  )}

                {/* Article Categories */}
                <div className={"FlarumBlog-Article-Categories"}>
                  {!this.loading &&
                    this.article &&
                    this.article.tags() &&
                    this.article
                      .tags()
                      .map((tag) => (
                        <Link
                          href={app.route("blogCategory", { slug: tag.slug() })}
                        >
                          {tag.name()}
                        </Link>
                      ))}

                  {this.loading &&
                    [0, 1].map(() => (
                      <span className={"FlarumBlog-Article-GhostCategory"}>
                        Category
                      </span>
                    ))}
                </div>

                <div className={"FlarumBlog-Article-Post"}>
                  {/* Article name */}
                  <h3
                    className={`FlarumBlog-Article-Title ${
                      this.loading ? "FlarumBlog-Article-GhostTitle" : ""
                    }`}
                  >
                    {this.article ? this.article.title() : "Ghost title"}
                    {this.article &&
                      this.article.isHidden() &&
                      `(${app.translator.trans(
                        "v17development-flarum-blog.forum.hidden"
                      )})`}
                  </h3>

                  <div
                    className={`FlarumBlog-Article-PublishDate ${
                      this.loading ? "FlarumBlog-Article-GhostPublishDate" : ""
                    }`}
                  >
                    {this.article ? (
                      fullTime(this.article.createdAt())
                    ) : (
                      <span>&nbsp;</span>
                    )}
                  </div>

                  {this.loading &&
                    [0, 1, 2].map(() => (
                      <div>
                        <p className={"FlarumBlog-Article-GhostParagraph"}>
                          &nbsp;
                        </p>
                        <p className={"FlarumBlog-Article-GhostParagraph"}>
                          &nbsp;
                        </p>
                        <p className={"FlarumBlog-Article-GhostParagraph"}>
                          &nbsp;
                        </p>
                        <p>&nbsp;</p>
                      </div>
                    ))}

                  {!this.loading &&
                    this.article.blogMeta() &&
                    this.article.blogMeta().isPendingReview() == true && (
                      <div className={"Post"}>
                        <blockquote
                          class="uncited"
                          style={{ fontSize: "16px" }}
                        >
                          <div>
                            <span
                              className={"far fa-clock"}
                              style={{ marginRight: "5px" }}
                            />{" "}
                            {app.translator.trans(
                              "v17development-flarum-blog.forum.review_article.pending_review"
                            )}
                          </div>
                        </blockquote>
                      </div>
                    )}

                  {!this.loading && articlePost && (
                    <CommentPost post={articlePost} />
                  )}
                </div>
              </div>

              <div className={"FlarumBlog-Article-Comments"}>
                {/* Show subscription state */}
                {!this.loading &&
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
                {!this.loading &&
                  this.article.isLocked &&
                  this.article.isLocked() && (
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
              </div>
            </div>

            <BlogItemSidebar article={this.article} loading={this.loading} />
          </div>
        </div>
      </div>
    );
  }

  positionChanged(startNumber, endNumber) {
    const article = this.article;

    if (app.session.user && endNumber > (article.lastReadPostNumber() || 0)) {
      article.save({ lastReadPostNumber: endNumber });
      m.redraw();
    }
  }
}
