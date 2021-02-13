export default function () {
  // Save the original function before we override it
  const original_discussion_route = app.route.discussion;

  /**
   * Generate a URL to a discussion OR a Blog Article.
   *
   * CORE_CODE_OVERRIDE: This overrides the standard function from flarum/core.
   * The code is inspired from js/src/forum/routes.js and now handles different types of discussions.
   * It will try to keep the original function executed if the discussion being
   * processed isn't a blog article.
   *
   * @param {Discussion} discussion
   * @param {Integer} [near]
   * @return {String}
   */
  app.route.discussion = (discussion, near) => {
    const discussionRedirectEnabled =
      app.forum.attribute("blogRedirectsEnabled") === "both" ||
      app.forum.attribute("blogRedirectsEnabled") === "discussions_only";
    let shouldRedirect = false;
    if (discussionRedirectEnabled && discussion.tags().length > 0) {
      const blogTags = app.forum.attribute("blogTags");

      const foundTags = discussion.tags().filter((tag) => {
        return (
          blogTags.indexOf(tag.id()) >= 0 ||
          (tag.parent() && blogTags.indexOf(tag.parent().id()) >= 0)
        );
      });

      if (foundTags.length > 0) {
        shouldRedirect = true;
      }
    }
    if (shouldRedirect) {
      return discussion.lastReadPostNumber() > 1
        ? app.route("blogArticle.near", {
            id: discussion.slug(),
            near: discussion.lastReadPostNumber(),
          })
        : app.route("blogArticle", {
            id: discussion.slug(),
          });
    } else {
      return original_discussion_route(discussion, near);
    }
  };
}
