import Page from "flarum/components/Page";
import Button from "flarum/components/Button";
import humanTime from "flarum/helpers/humanTime";
import BlogCategories from "../components/BlogCategories";
import Link from "flarum/components/Link";
import tooltip from "../utils/tooltip";
import LanguageDropdown from "../components/LanguageDropdown/LanguageDropdown";
import ForumNav from "../components/ForumNav";

export default class BlogOverview extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle(app.translator.trans("v17development-flarum-blog.forum.blog"));

    this.bodyClass = "BlogOverviewPage";

    this.isLoading = true;
    this.featuredPosts = [];
    this.posts = [];
    this.hasMore = null;
    this.isLoadingMore = false;

    this.languages = app.store.all("discussion-languages");

    this.currentSelectedLanguage = m.route.param("lang")
      ? m.route.param("lang")
      : app.translator.locale;

    // Send history push
    app.history.push("blog");

    this.loadBlogOverview();
  }

  // Load blog overview
  loadBlogOverview() {
    const preloadBlogOverview = app.preloadedApiDocument();

    if (preloadBlogOverview) {
      // We must wrap this in a setTimeout because if we are mounting this
      // component for the first time on page load, then any calls to m.redraw
      // will be ineffective and thus any configs (scroll code) will be run
      // before stuff is drawn to the page.
      setTimeout(this.show.bind(this, preloadBlogOverview), 0);
    } else {
      this.reloadData();
    }

    m.redraw();
  }

  reloadData() {
    let q = `is:blog${
      m.route.param("slug") ? ` tag:${m.route.param("slug")}` : ""
    }`;

    if (this.languages !== null && this.languages.length >= 1) {
      q += ` language:${this.currentSelectedLanguage}`;
    }

    app.store
      .find("discussions", {
        filter: {
          q,
        },
        sort: "-createdAt",
      })
      .then(this.show.bind(this))
      .catch(() => {
        m.redraw();
      });
  }

  // Show blog posts
  show(articles) {
    if (articles.length === 0) {
      this.isLoading = false;
      m.redraw();

      return;
    }

    // Set pagination
    this.hasMore =
      articles.payload.links && articles.payload.links.next
        ? articles.payload.links.next
        : null;

    this.featuredPosts = articles.slice(0, 3);
    this.posts = articles.length >= 4 ? articles.slice(3, articles.length) : [];

    this.isLoading = false;

    m.redraw();
  }

  // Load more blog posts
  loadMore() {
    this.isLoadingMore = true;

    app.store
      .find(this.hasMore.replace(app.forum.attribute("apiUrl"), ""))
      .then((data) => {
        data.map((article) => this.posts.push(article));

        // Update hasmore button
        this.hasMore =
          data.payload.links && data.payload.links.next
            ? data.payload.links.next
            : null;
      })
      .catch(() => {})
      .then(() => {
        this.isLoadingMore = false;
        m.redraw();
      });
  }

  title() {
    if (!m.route.param("slug")) {
      return (
        <h2>
          {app.translator.trans(
            "v17development-flarum-blog.forum.recent_posts"
          )}
        </h2>
      );
    }

    const tag = app.store
      .all("tags")
      .filter((tag) => tag.slug() === m.route.param("slug"));

    return (
      <h2>
        {tag && tag[0] && tag[0].name()}
        <small>
          {" "}
          -{" "}
          <Link href={app.route("blog")}>
            {app.translator.trans(
              "v17development-flarum-blog.forum.return_to_overview"
            )}
          </Link>
        </small>
      </h2>
    );
  }

  view() {
    const defaultImage = app.forum.attribute("blogDefaultImage")
      ? `url(${
          app.forum.attribute("baseUrl") +
          "/assets/" +
          app.forum.attribute("blogDefaultImage")
        })`
      : null;

    return (
      <div className={"FlarumBlogOverview"}>
        <div className={"container"}>
          <div className={"BlogFeatured"}>
            <div className={"BlogOverviewButtons"}>
              {app.forum.attribute("canWriteBlogPosts") && (
                <Button
                  className={"Button"}
                  onclick={() => this.newArticle()}
                  icon={"fas fa-pencil-alt"}
                >
                  {app.translator.trans(
                    "v17development-flarum-blog.forum.compose.write_article"
                  )}
                </Button>
              )}

              {this.languages !== null && this.languages.length >= 1 && (
                <LanguageDropdown
                  selected={this.currentSelectedLanguage}
                  onclick={(language) => {
                    this.currentSelectedLanguage = language;

                    m.route.set(document.location.pathname, {
                      lang: language,
                    });

                    this.reloadData();
                  }}
                />
              )}
            </div>

            {this.title()}

            <div style={{ clear: "both" }} />

            <div className={"BlogFeatured-list"}>
              {/* Ghost data */}
              {this.isLoading &&
                [0, 1, 2].map(() => (
                  <div
                    className={
                      "BlogFeatured-list-item BlogFeatured-list-item-ghost"
                    }
                  >
                    <div className={"BlogFeatured-list-item-details"}>
                      <h4>&nbsp;</h4>

                      <div className={"data"}>
                        <span>
                          <i className={"far fa-wave"} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

              {!this.isLoading &&
                this.featuredPosts.length >= 0 &&
                this.featuredPosts.map((article) => {
                  const blogImage =
                    article.blogMeta() && article.blogMeta().featuredImage()
                      ? `url(${article.blogMeta().featuredImage()})`
                      : defaultImage;
                  const blogTag = article.tags()
                    ? article.tags().filter((tag) => tag.isChild())
                    : [];

                  return (
                    <Link
                      href={app.route("blogArticle", {
                        id: `${article.slug()}`,
                      })}
                      className={
                        "BlogFeatured-list-item FlarumBlog-default-image"
                      }
                      style={{ backgroundImage: blogImage }}
                    >
                      <div className={"BlogFeatured-list-item-top"}>
                        {blogTag[0] && <span>{blogTag[0].name()}</span>}
                        {article.isSticky() && (
                          <span>
                            <i className={"fas fa-thumbtack"} />
                          </span>
                        )}
                        {((article.blogMeta() &&
                          article.blogMeta().isPendingReview() == true) ||
                          article.isHidden()) && (
                          <span>
                            <i className={"fas fa-eye-slash"} />
                          </span>
                        )}
                        {article.blogMeta() &&
                          article.blogMeta().isPendingReview() == true && (
                            <span
                              title={app.translator.trans(
                                "v17development-flarum-blog.forum.review_article.pending_review"
                              )}
                              config={tooltip.bind(this)}
                              data-placement={"bottom"}
                            >
                              <i className={"far fa-clock"} />{" "}
                              {app.translator.trans(
                                "v17development-flarum-blog.forum.review_article.pending_review_title"
                              )}
                            </span>
                          )}
                      </div>

                      <div className={"BlogFeatured-list-item-details"}>
                        <h4>{article.title()}</h4>

                        <div className={"data"}>
                          <span>
                            <i className={"far fa-clock"} />{" "}
                            {humanTime(article.createdAt())}
                          </span>
                          <span>
                            <i className={"far fa-user"} />{" "}
                            {article.user()
                              ? article.user().displayName()
                              : "[Deleted]"}
                          </span>
                          <span>
                            <i className={"far fa-comment"} />{" "}
                            {article.commentCount() - 1}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>

          <div className={"BlogScrubber"}>
            <div className={"BlogList"}>
              {this.isLoading &&
                [false, false, true, false].map((state) => {
                  return (
                    <div
                      className={`BlogList-item BlogList-item-${
                        state === true ? "sized" : "default"
                      } BlogList-item-ghost`}
                    >
                      <div
                        className={
                          "BlogList-item-photo FlarumBlog-default-image"
                        }
                      ></div>
                      <div className={"BlogList-item-content"}>
                        <h4>&nbsp;</h4>
                        <p>&nbsp;</p>

                        <div className={"data"}>
                          <span>
                            <i className={"far fa-wave"} />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {!this.isLoading &&
                this.posts.length >= 1 &&
                this.posts.map((article) => {
                  const blogImage =
                    article.blogMeta() && article.blogMeta().featuredImage()
                      ? `url(${article.blogMeta().featuredImage()})`
                      : defaultImage;
                  const isSized =
                    article.blogMeta() && article.blogMeta().isSized();
                  const summary =
                    article.blogMeta() && article.blogMeta().summary()
                      ? article.blogMeta().summary()
                      : "";

                  return (
                    <Link
                      href={app.route("blogArticle", {
                        id: `${article.slug()}`,
                      })}
                      className={`BlogList-item BlogList-item-${
                        isSized ? "sized" : "default"
                      }`}
                    >
                      <div
                        className={
                          "BlogList-item-photo FlarumBlog-default-image"
                        }
                        style={{ backgroundImage: blogImage }}
                      ></div>
                      <div className={"BlogList-item-content"}>
                        <h4>
                          {article.title()}
                          {((article.blogMeta() &&
                            article.blogMeta().isPendingReview() == true) ||
                            article.isHidden()) && (
                            <i className={"fas fa-eye-slash"} />
                          )}
                          {article.blogMeta() &&
                            article.blogMeta().isPendingReview() == true && (
                              <i
                                className={"far fa-clock"}
                                title={app.translator.trans(
                                  "v17development-flarum-blog.forum.review_article.pending_review"
                                )}
                                config={tooltip.bind(this)}
                              />
                            )}
                        </h4>
                        <p>{summary}</p>

                        <div className={"data"}>
                          <span>
                            <i className={"far fa-clock"} />{" "}
                            {humanTime(article.createdAt())}
                          </span>
                          <span>
                            <i className={"far fa-user"} />{" "}
                            {article.user()
                              ? article.user().displayName()
                              : "[Deleted]"}
                          </span>
                          <span>
                            <i className={"far fa-comment"} />{" "}
                            {article.commentCount() - 1}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}

              {!this.isLoading &&
                this.featuredPosts.length > 0 &&
                this.hasMore === null && (
                  <p className={"FlarumBlog-reached-end"}>
                    {app.translator.trans(
                      "v17development-flarum-blog.forum.no_more_posts"
                    )}
                  </p>
                )}

              {!this.isLoading &&
                this.featuredPosts.length === 0 &&
                this.posts.length === 0 && (
                  <p className={"FlarumBlog-reached-end"}>
                    {app.translator.trans(
                      "v17development-flarum-blog.forum.category_empty"
                    )}
                  </p>
                )}

              {!this.isLoading && this.hasMore !== null && (
                <div className={"FlarumBlog-reached-load-more"}>
                  <Button
                    className={"Button"}
                    onclick={() => this.loadMore()}
                    icon={"fas fa-chevron-down"}
                    loading={this.isLoadingMore}
                  >
                    {app.translator.trans(
                      "core.forum.discussion_list.load_more_button"
                    )}
                  </Button>
                </div>
              )}
            </div>

            <div className={"Sidebar"}>
              <BlogCategories />
              <ForumNav />
            </div>
          </div>
        </div>
      </div>
    );
  }

  newArticle() {
    let foundMainTag = false;
    let tags = [];

    const blogTags = app.forum.attribute("blogTags");

    // Pre-select selected tags
    app.store.all("tags").forEach((_tag) => {
      // Find main blog tag
      if (
        !foundMainTag &&
        !_tag.isChild() &&
        blogTags.indexOf(_tag.id()) >= 0
      ) {
        tags.push(_tag);
      }
    });

    // Get current category
    const currentCategory = app.store.getBy(
      "tags",
      "slug",
      m.route.param("slug")
    );

    if (currentCategory) {
      tags.push(currentCategory);
    }

    // Redirect to the composer
    m.route.set(
      app.route("blogComposer", {
        tags: tags.map((tag) => tag.id()).join(),
        lang:
          this.languages.length > 0 ? this.currentSelectedLanguage : undefined,
      })
    );
  }
}
