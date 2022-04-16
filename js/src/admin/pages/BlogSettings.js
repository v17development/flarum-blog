import app from "flarum/admin/app";

import ExtensionPage from "flarum/admin/components/ExtensionPage";
import saveSettings from "flarum/admin/utils/saveSettings";
import Alert from "flarum/common/components/Alert";
import Button from "flarum/common/components/Button";
import FieldSet from "flarum/common/components/FieldSet";
import Switch from "flarum/common/components/Switch";
import SelectCategoriesModal from "../components/Modals/SelectCategoriesModal";
import UploadImageButton from "flarum/admin/components/UploadImageButton";

export default class BlogSettings extends ExtensionPage {
  oninit(attrs) {
    super.oninit(attrs);

    // Form
    this.hasChanges = false;
    this.isSaving = false;

    // Settings
    this.redirectsEnabled = app.data.settings.blog_redirects_enabled ?? "both";
    this.hideTagsInList = app.data.settings.blog_hide_tags ?? true;
    this.allowComments = app.data.settings.blog_allow_comments ?? true;
    this.hideOnDiscussionList =
      app.data.settings.blog_filter_discussion_list ?? false;
    this.requiresReviewOnPost = app.data.settings.blog_requires_review ?? false;
    this.addCategoryHierarchy =
      app.data.settings.blog_category_hierarchy ?? true;
    this.addSidebarNav = app.data.settings.blog_add_sidebar_nav ?? true;
    this.featuredCount = app.data.settings.blog_featured_count ?? 3;

    app.forum.data.attributes.blog_default_imageUrl = `${app.forum.attribute(
      "baseUrl"
    )}/assets/${app.data.settings.blog_default_image_path}`;
  }

  content() {
    const blogCategoriesCount = app.data.settings.blog_tags
      ? app.data.settings.blog_tags.split("|").length
      : 0;

    return (
      <div className="BasicsPage FlarumBlog">
        <div className="container">
          <div className={"FlarumBlog-SelectCategories"}>
            {blogCategoriesCount === 0
              ? app.translator.trans(
                  "v17development-flarum-blog.admin.settings.no_categories_selected"
                )
              : app.translator.trans(
                  "v17development-flarum-blog.admin.settings.selected_category_count",
                  { count: blogCategoriesCount }
                )}

            <Button
              className="Button"
              onclick={() => app.modal.show(SelectCategoriesModal)}
            >
              {app.translator.trans(
                "v17development-flarum-blog.admin.settings.select_categories_button"
              )}
            </Button>
          </div>

          {FieldSet.component(
            {
              label: app.translator.trans(
                "v17development-flarum-blog.admin.settings.blog_heading"
              ),
            },
            [
              Switch.component(
                {
                  state: this.allowComments == true,
                  onchange: (val) => {
                    this.allowComments = val;
                    this.hasChanges = true;
                  },
                },
                [
                  <b>
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.allow_comments_label"
                    )}
                  </b>,
                  <div className="helpText">
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.allow_comments_text"
                    )}
                  </div>,
                ]
              ),
              Switch.component(
                {
                  state: this.requiresReviewOnPost == true,
                  onchange: (val) => {
                    this.requiresReviewOnPost = val;
                    this.hasChanges = true;
                  },
                },
                [
                  <b>
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.require_review_label"
                    )}
                  </b>,
                  <div className="helpText">
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.require_review_text"
                    )}
                  </div>,
                ]
              ),
              Switch.component(
                {
                  state: this.hideOnDiscussionList == true,
                  onchange: (val) => {
                    this.hideOnDiscussionList = val;
                    this.hasChanges = true;
                  },
                },
                [
                  <b>
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.hide_on_discussion_list_label"
                    )}
                  </b>,
                  <div className="helpText">
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.hide_on_discussion_list_text"
                    )}
                  </div>,
                ]
              ),
              Switch.component(
                {
                  state: this.addSidebarNav == true,
                  onchange: (val) => {
                    this.addSidebarNav = val;
                    this.hasChanges = true;
                  },
                },
                [
                  <b>
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.add_sidebar_nav_label"
                    )}
                  </b>,
                  <div className="helpText">
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.add_sidebar_nav_text"
                    )}
                  </div>,
                ]
              ),
              <div className="Form-group">
                {
                  <label>
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.featured_count_label"
                    )}
                  </label>
                }
                <div className="helpText">
                  {app.translator.trans(
                    "v17development-flarum-blog.admin.settings.featured_count_text"
                  )}
                </div>
                <input
                  class="FormControl"
                  value={this.featuredCount}
                  oninput={(e) => {
                    this.featuredCount = e.target.value;
                    this.hasChanges = true;
                  }}
                  placeholder="3"
                  type="number"
                />
              </div>,
            ]
          )}

          {FieldSet.component(
            {
              label: app.translator.trans(
                "v17development-flarum-blog.admin.settings.categories_heading"
              ),
            },
            [
              Switch.component(
                {
                  state: this.hideTagsInList == true,
                  onchange: (val) => {
                    this.hideTagsInList = val;
                    this.hasChanges = true;
                  },
                },
                [
                  <b>
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.hide_tags_in_taglist_label"
                    )}
                  </b>,
                  <div className="helpText">
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.hide_tags_in_taglist_text"
                    )}
                  </div>,
                ]
              ),
              Switch.component(
                {
                  state: this.addCategoryHierarchy == true,
                  onchange: (val) => {
                    this.addCategoryHierarchy = val;
                    this.hasChanges = true;
                  },
                },
                [
                  <b>
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.show_tag_hierarchy_label"
                    )}
                  </b>,
                  <div className="helpText">
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.show_tag_hierarchy_text"
                    )}
                  </div>,
                ]
              ),
            ]
          )}

          {FieldSet.component(
            {
              label: app.translator.trans(
                "v17development-flarum-blog.admin.settings.redirects_heading"
              ),
            },
            [
              Switch.component(
                {
                  state:
                    this.redirectsEnabled === "both" ||
                    this.redirectsEnabled === "discussions_only",
                  onchange: (val) => {
                    if (val) {
                      // Add
                      if (this.redirectsEnabled === "tags_only") {
                        this.redirectsEnabled = "both";
                      } else if (this.redirectsEnabled === "none") {
                        this.redirectsEnabled = "discussions_only";
                      }
                    } else {
                      if (this.redirectsEnabled === "discussions_only") {
                        this.redirectsEnabled = "none";
                      } else {
                        this.redirectsEnabled = "tags_only";
                      }
                    }

                    this.hasChanges = true;
                  },
                },
                [
                  <b>
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.redirect_articles_label"
                    )}
                  </b>,
                  <div className="helpText">
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.redirect_articles_text"
                    )}
                  </div>,
                ]
              ),
              Switch.component(
                {
                  state:
                    this.redirectsEnabled === "both" ||
                    this.redirectsEnabled === "tags_only",
                  onchange: (val) => {
                    if (val) {
                      // Add
                      if (this.redirectsEnabled === "discussions_only") {
                        this.redirectsEnabled = "both";
                      } else if (this.redirectsEnabled === "none") {
                        this.redirectsEnabled = "tags_only";
                      }
                    } else {
                      if (this.redirectsEnabled === "tags_only") {
                        this.redirectsEnabled = "none";
                      } else {
                        this.redirectsEnabled = "discussions_only";
                      }
                    }

                    this.hasChanges = true;
                  },
                },
                [
                  <b>
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.redirect_tags_label"
                    )}
                  </b>,
                  <div className="helpText">
                    {app.translator.trans(
                      "v17development-flarum-blog.admin.settings.redirect_tags_text"
                    )}
                  </div>,
                ]
              ),
            ]
          )}

          {FieldSet.component(
            {
              label: app.translator.trans(
                "v17development-flarum-blog.admin.settings.default_article_image_label"
              ),
            },
            [
              <div className="helpText">
                {app.translator.trans(
                  "v17development-flarum-blog.admin.settings.default_article_image_text"
                )}
              </div>,
              UploadImageButton.component({
                name: "blog_default_image",
              }),
            ]
          )}

          <Button
            loading={this.isSaving}
            className={"Button Button--primary"}
            onclick={() => this.save()}
            disabled={!this.hasChanges}
          >
            {app.translator.trans("core.admin.settings.submit_button")}
          </Button>
        </div>
      </div>
    );
  }

  /**
   * Save data
   */
  save() {
    this.isSaving = true;

    saveSettings({
      blog_add_sidebar_nav: this.addSidebarNav,
      blog_redirects_enabled: this.redirectsEnabled,
      blog_hide_tags: this.hideTagsInList,
      blog_requires_review: this.requiresReviewOnPost,
      blog_allow_comments: this.allowComments,
      blog_category_hierarchy: this.addCategoryHierarchy,
      blog_filter_discussion_list: this.hideOnDiscussionList,
      blog_featured_count: this.featuredCount,
    })
      .then(() => {
        this.hasChanges = false;

        // Show saved message
        app.alerts.show(
          Alert,
          { type: "success" },
          app.translator.trans("core.admin.settings.saved_message")
        );
      })
      .catch(() => {})
      .then(() => {
        this.isSaving = false;
        m.redraw();
      });
  }
}
