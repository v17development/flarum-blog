import Page from 'flarum/components/Page';
import saveSettings from 'flarum/utils/saveSettings';
import Alert from 'flarum/components/Alert';
import Header from '../Components/Header/Header';
import Button from 'flarum/components/Button';
import FieldSet from 'flarum/components/FieldSet';
import Switch from 'flarum/components/Switch';
import SelectCategoriesModal from '../components/Modals/SelectCategoriesModal';

export default class BlogSettings extends Page {
  init() {
    // Form
    this.hasChanges = false;
    this.isSaving = false;

    // Settings
    this.blogCategories = app.data.settings.blog_tags ? app.data.settings.blog_tags.split("|") : [];
    this.redirectsEnabled = app.data.settings.blog_redirects_enabled ? app.data.settings.blog_redirects_enabled : 'both';
    this.hideTagsInList = app.data.settings.blog_hide_tags ? app.data.settings.blog_hide_tags : true;
    this.allowComments = app.data.settings.blog_allow_comments ? app.data.settings.blog_allow_comments : true;
    this.hideOnDiscussionList = app.data.settings.blog_filter_discussion_list ? app.data.settings.blog_filter_discussion_list : true;
    this.requiresReviewOnPost = app.data.settings.blog_requires_review ? app.data.settings.blog_requires_review : false;
    this.addCategoryHierarchy = app.data.settings.blog_category_hierarchy ? app.data.settings.blog_category_hierarchy : true;
  }

  view() {
    return (
      <div className="BasicsPage FlarumBlog">
        {Header.component()}

        <div className="container">
          <div className={"FlarumBlog-SelectCategories"}>
            {this.blogCategories.length >= 1 ? `You have ${this.blogCategories.length} categories selected` : 'No categories selected'}

            <Button 
              className="Button"
              onclick={() => {
                app.modal.show(new SelectCategoriesModal());
              }}
              >
              Select blog categories
            </Button>
          </div>

          {FieldSet.component({
            label: "Blog",
            children: [
              Switch.component({
                state: this.allowComments == true,
                onchange: (val) => {
                  this.allowComments = val;
                  this.hasChanges = true;
                },
                children: [
                  <b>Allow comments</b>, 
                  <div className="helpText">By default, allow comments on blog posts. When disabled, it can be enabled individually per blog post. <b>Note:</b> Changing this setting will not affect pre-existing blog posts.</div>,
                ]
              }),
              Switch.component({
                state: this.requiresReviewOnPost == true,
                onchange: (val) => {
                  this.requiresReviewOnPost = val;
                  this.hasChanges = true;
                },
                children: [
                  <b>Blog posts requires review</b>, 
                  <div className="helpText">When posting an article, it will not be visible directly and needs to be reviewed by a moderator.</div>,
                ]
              }),
              Switch.component({
                state: this.hideOnDiscussionList == true,
                onchange: (val) => {
                  this.hideOnDiscussionList = val;
                  this.hasChanges = true;
                },
                children: [
                  <b>Don't show on discussion list</b>, 
                  <div className="helpText">Hide blog posts from the discussions list.</div>,
                ]
              })
            ]
          })}
            
          {FieldSet.component({
            label: "Categories",
            children: [
              Switch.component({
                state: this.hideTagsInList == true,
                onchange: (val) => {
                  this.hideTagsInList = val;
                  this.hasChanges = true;
                },
                children: [
                  <b>Hide tags in taglist</b>, 
                  <div className="helpText">When enabled, this extension will hide the blog tags from your homepage. After changing this setting, clear the cache of your forum.</div>,
                ]
              }),
              Switch.component({
                state: this.addCategoryHierarchy == true,
                onchange: (val) => {
                  this.addCategoryHierarchy = val;
                  this.hasChanges = true;
                },
                children: [
                  <b>Show tag hierarchy</b>, 
                  <div className="helpText">Add spacing to child-categories and give the category-list a hierarchy.</div>,
                ]
              }),
            ]
          })}

          {FieldSet.component({
            label: "Redirects",
            children: [
              Switch.component({
                state: this.redirectsEnabled === 'both' || this.redirectsEnabled === 'discussions_only',
                onchange: (val) => {
                  if(val) {
                    // Add
                    if(this.redirectsEnabled === 'tags_only') {
                      this.redirectsEnabled = 'both';
                    }else if(this.redirectsEnabled === 'none') {
                      this.redirectsEnabled = 'discussions_only';
                    }
                  }else{
                    if(this.redirectsEnabled === 'discussions_only') {
                      this.redirectsEnabled = 'none';
                    }else {
                      this.redirectsEnabled = 'tags_only';
                    }
                  }

                  this.hasChanges = true;
                },
                children: [
                  <b>Redirect blog articles</b>, 
                  <div className="helpText">When enabled, this extension will redirect original discussion URLs to their blog URL.</div>
                ],
              }),
              Switch.component({
                state: this.redirectsEnabled === 'both' || this.redirectsEnabled === 'tags_only',
                onchange: (val) => {
                  if(val) {
                    // Add
                    if(this.redirectsEnabled === 'discussions_only') {
                      this.redirectsEnabled = 'both';
                    }else if(this.redirectsEnabled === 'none') {
                      this.redirectsEnabled = 'tags_only';
                    }
                  }else{
                    if(this.redirectsEnabled === 'tags_only') {
                      this.redirectsEnabled = 'none';
                    }else {
                      this.redirectsEnabled = 'discussions_only';
                    }
                  }

                  this.hasChanges = true;
                },
                children: [
                  <b>Redirect blog tags</b>, 
                  <div className="helpText">When enabled, this extension redirects blog tag URLs to the blog category URL.</div>
                ],
              })
            ]
          })}

          <Button 
            loading={this.isSaving}
            className={"Button Button--primary"}
            onclick={() => this.save()}
            disabled={!this.hasChanges}>
            {app.translator.trans('core.admin.basics.submit_button')}
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
      blog_redirects_enabled: this.redirectsEnabled,
      blog_hide_tags: this.hideTagsInList,
      blog_requires_review: this.requiresReviewOnPost,
      blog_allow_comments: this.allowComments,
      blog_category_hierarchy: this.addCategoryHierarchy,
      blog_filter_discussion_list: this.hideOnDiscussionList
    })
      .then(() => {
        this.hasChanges = false;

        // Show saved message
        app.alerts.show(this.successAlert = new Alert({type: 'success', children: app.translator.trans('core.admin.basics.saved_message')}));
      })
      .catch(() => {})
      .then(() => {
        this.isSaving = false;
        m.redraw();
      });
  }
}