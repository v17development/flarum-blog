import Component from "flarum/Component";
import TagDiscussionModal from "flarum/tags/components/TagDiscussionModal";
import DiscussionControls from "flarum/utils/DiscussionControls";
import Alert from "flarum/components/Alert";
import Button from "flarum/components/Button";
import Dropdown from "flarum/components/Dropdown";
import BlogPostSettingsModal from "./Modals/BlogPostSettingsModal";
import EditPostComposer from "flarum/components/EditPostComposer";
import extractText from "flarum/utils/extractText";
import RenameArticleModal from "./Modals/RenameArticleModal";

export default class BlogPostController extends Component {
  init() {
    this.loadedPost = false;
  }

  view() {
    const article = this.attrs.article;
    let buttons = [];

    // Working for GlowingBlue version
    const LanguageDiscussionModal =
      flarum.extensions["fof-discussion-language"] &&
      typeof flarum.extensions["fof-discussion-language"].components !==
        "undefined"
        ? flarum.extensions["fof-discussion-language"].components
            .LanguageDiscussionModal
        : null;

    // Rename article
    if (article.canRename()) {
      buttons.push(
        Button.component(
          {
            className: "Button",
            onclick: () => app.modal.show(RenameArticleModal, { article }),
            icon: "fas fa-pencil-alt",
          },
          app.translator.trans(
            "v17development-flarum-blog.forum.tools.rename_article"
          )
        )
      );
    }

    const articlePost = article.firstPost()
      ? article.firstPost()
      : app.store.getById("posts", article.firstPostId());

    // Edit article
    buttons.push(
      Button.component(
        {
          className: "Button",
          disabled: !articlePost || !articlePost.canEdit(),
          onclick: () => {
            app.composer.load(EditPostComposer, { post: articlePost });
            app.composer.show();
          },
          icon: "fas fa-edit",
        },
        app.translator.trans(
          "v17development-flarum-blog.forum.tools.edit_article"
        )
      )
    );

    // Article settings
    buttons.push(
      Button.component(
        {
          className: "Button",
          onclick: () => app.modal.show(BlogPostSettingsModal, { article }),
          icon: "fas fa-cogs",
        },
        app.translator.trans(
          "v17development-flarum-blog.forum.tools.article_settings"
        )
      )
    );

    // Update categories
    if (article.canTag()) {
      buttons.push(
        Button.component(
          {
            className: "Button",
            onclick: () =>
              app.modal.show(TagDiscussionModal, { discussion: article }),
            icon: "fas fa-tag",
          },
          app.translator.trans(
            "v17development-flarum-blog.forum.tools.update_category"
          )
        )
      );
    }

    // Approve article
    if (article.blogMeta() && article.blogMeta().isPendingReview()) {
      buttons.push(<li className="Dropdown-separator" />);

      buttons.push(
        Button.component(
          {
            className: "Button",
            disabled: !app.forum.attribute("canApproveBlogPosts"),
            onclick: () => {
              article
                .blogMeta()
                .save({
                  isPendingReview: false,
                })
                .then(
                  () => {
                    app.alerts.show(
                      Alert,
                      { type: "success" },
                      app.translator.trans(
                        "v17development-flarum-blog.forum.review_article.approve_article_approved"
                      )
                    );
                  },
                  (response) => {
                    this.loading = false;
                    this.handleErrors(response);
                  }
                );
            },
            icon: "fas fa-thumbs-up",
          },
          app.translator.trans(
            "v17development-flarum-blog.forum.review_article.approve_article"
          )
        )
      );
    }

    // Language
    if (
      article.canChangeLanguage &&
      article.canChangeLanguage() &&
      LanguageDiscussionModal
    ) {
      buttons.push(
        Button.component(
          {
            icon: "fas fa-globe",
            onclick: () =>
              app.modal.show(LanguageDiscussionModal, { discussion: article }),
          },
          app.translator.trans(
            "fof-discussion-language.forum.discussion_controls.change_language_button"
          )
        )
      );
    }

    buttons.push(<li className="Dropdown-separator" />);

    // Lock article
    if (article.canLock()) {
      buttons.push(
        Button.component(
          {
            className: "Button",
            onclick: DiscussionControls.lockAction.bind(article),
            icon: `fas ${
              article.isLocked() ? "fa-comments" : "fa-comment-slash"
            }`,
          },
          article.isLocked()
            ? app.translator.trans(
                "v17development-flarum-blog.forum.tools.enable_comments"
              )
            : app.translator.trans(
                "v17development-flarum-blog.forum.tools.disable_comments"
              )
        )
      );
    }

    // Hide/show/delete
    if (article.canHide()) {
      // Article is hidden
      if (article.isHidden()) {
        // Recover article
        buttons.push(
          Button.component(
            {
              className: "Button",
              onclick: DiscussionControls.restoreAction.bind(article),
              icon: "fas fa-eye",
            },
            app.translator.trans(
              "v17development-flarum-blog.forum.tools.recover_article"
            )
          )
        );

        // Delete article
        if (article.canDelete()) {
          buttons.push(
            Button.component(
              {
                className: "Button",
                onclick: () => {
                  // Confirm deletion
                  if (
                    confirm(
                      extractText(
                        app.translator.trans(
                          "core.forum.discussion_controls.delete_confirmation"
                        )
                      )
                    )
                  ) {
                    // Redirect if the current page is an blog article
                    if (app.history.getCurrent().name === "blogArticle") {
                      if (app.previous) {
                        app.history.back();
                      } else {
                        m.route.set(app.route("blog"));
                      }
                    }

                    return article.delete().then(() => {
                      m.redraw();
                    });
                  }
                },
                icon: "far fa-trash-alt",
              },
              app.translator.trans(
                "v17development-flarum-blog.forum.tools.delete_forever"
              )
            )
          );
        }
      } else {
        // Hide article
        buttons.push(
          Button.component(
            {
              className: "Button",
              onclick: DiscussionControls.hideAction.bind(article),
              icon: "fas fa-eye-slash",
            },
            app.translator.trans(
              "v17development-flarum-blog.forum.tools.hide_article"
            )
          )
        );
      }
    }

    return (
      <div className={"FlarumBlog-Article-Content-Edit-Button"}>
        <div className={"FlarumBlog-Article-Content-Edit-Dropdown"}>
          {Dropdown.component(
            {
              icon: "fas fa-cog",
              label: "Manage",
              buttonClassName: "Button",
              menuClassName: "Dropdown-menu--right",
              onshow: () => {
                // Get post data to make sure they can edit the post
                if (articlePost && !articlePost.canEdit() && !this.loadedPost) {
                  this.loadedPost = true;
                  app.store
                    .find(
                      "posts",
                      article.firstPost()
                        ? article.firstPost().id()
                        : article.firstPostId()
                    )
                    .then(() => {})
                    .catch(() => {})
                    .then(() => m.redraw());
                }
              },
            },
            buttons
          )}
        </div>
      </div>
    );
  }
}
