import Component from 'flarum/common/Component';
import TagDiscussionModal from 'flarum/tags/components/TagDiscussionModal';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import Alert from 'flarum/common/components/Alert';
import Button from 'flarum/common/components/Button';
import Dropdown from 'flarum/common/components/Dropdown';
import BlogPostSettingsModal from './Modals/BlogPostSettingsModal';
import EditPostComposer from 'flarum/forum/components/EditPostComposer';
import extractText from 'flarum/common/utils/extractText';
import ItemList from 'flarum/common/utils/ItemList';
import RenameArticleModal from './Modals/RenameArticleModal';
import app from 'flarum/forum/app';

export default class BlogPostController extends Component {
  init() {
    this.loadedPost = false;
  }

  manageArticleButtons() {
    const article = this.attrs.article;
    const items = new ItemList();

    // Working for GlowingBlue version
    const LanguageDiscussionModal =
      flarum.extensions['fof-discussion-language'] && typeof flarum.extensions['fof-discussion-language'].components !== 'undefined'
        ? flarum.extensions['fof-discussion-language'].components.LanguageDiscussionModal
        : null;

    // Rename article
    if (article.canRename()) {
      items.add(
        'rename',
        Button.component(
          {
            className: 'Button',
            onclick: () => app.modal.show(RenameArticleModal, { article }),
            icon: 'fas fa-pencil-alt',
          },
          app.translator.trans('v17development-flarum-blog.forum.tools.rename_article')
        ),
        100
      );
    }

    const articlePost = article.firstPost();

    // Edit article
    items.add(
      'edit',
      Button.component(
        {
          className: 'Button',
          disabled: !articlePost || !articlePost.canEdit(),
          onclick: () => {
            app.composer.load(EditPostComposer, { post: articlePost });
            app.composer.show();
          },
          icon: 'fas fa-edit',
        },
        app.translator.trans('v17development-flarum-blog.forum.tools.edit_article')
      ),
      90
    );

    // Article settings
    items.add(
      'articleSettings',
      Button.component(
        {
          className: 'Button',
          onclick: () => app.modal.show(BlogPostSettingsModal, { article }),
          icon: 'fas fa-cogs',
        },
        app.translator.trans('v17development-flarum-blog.forum.tools.article_settings')
      ),
      80
    );

    // Update categories
    if (article.canTag()) {
      items.add(
        'tag',
        Button.component(
          {
            className: 'Button',
            onclick: () => app.modal.show(TagDiscussionModal, { discussion: article }),
            icon: 'fas fa-tag',
          },
          app.translator.trans('v17development-flarum-blog.forum.tools.update_category')
        ),
        70
      );
    }

    // Approve article
    if (article.blogMeta() && article.blogMeta().isPendingReview()) {
      items.add('separator1', <li className="Dropdown-separator" />, 65);

      items.add(
        'approve',
        Button.component(
          {
            className: 'Button',
            disabled: !app.forum.attribute('canApproveBlogPosts'),
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
                      { type: 'success' },
                      app.translator.trans('v17development-flarum-blog.forum.review_article.approve_article_approved')
                    );
                  },
                  (response) => {
                    this.loading = false;
                    this.handleErrors(response);
                  }
                );
            },
            icon: 'fas fa-thumbs-up',
          },
          app.translator.trans('v17development-flarum-blog.forum.review_article.approve_article')
        ),
        60
      );
    }

    // Language
    if (article.canChangeLanguage && article.canChangeLanguage() && LanguageDiscussionModal) {
      items.add(
        'lang',
        Button.component(
          {
            icon: 'fas fa-globe',
            onclick: () => app.modal.show(LanguageDiscussionModal, { discussion: article }),
          },
          app.translator.trans('fof-discussion-language.forum.discussion_controls.change_language_button')
        ),
        50
      );
    }

    items.add('separator2', <li className="Dropdown-separator" />, 40);

    // Lock article
    if (article.canLock()) {
      items.add(
        'lock',
        Button.component(
          {
            className: 'Button',
            onclick: DiscussionControls.lockAction.bind(article),
            icon: `fas ${article.isLocked() ? 'fa-comments' : 'fa-comment-slash'}`,
          },
          article.isLocked()
            ? app.translator.trans('v17development-flarum-blog.forum.tools.enable_comments')
            : app.translator.trans('v17development-flarum-blog.forum.tools.disable_comments')
        ),
        30
      );
    }

    // Hide/show/delete
    if (article.canHide()) {
      // Article is hidden
      if (article.isHidden()) {
        // Recover article
        items.add(
          'recover',
          Button.component(
            {
              className: 'Button',
              onclick: DiscussionControls.restoreAction.bind(article),
              icon: 'fas fa-eye',
            },
            app.translator.trans('v17development-flarum-blog.forum.tools.recover_article')
          ),
          20
        );

        // Delete article
        if (article.canDelete()) {
          items.add(
            'delete',
            Button.component(
              {
                className: 'Button',
                onclick: () => {
                  // Confirm deletion
                  if (confirm(extractText(app.translator.trans('core.forum.discussion_controls.delete_confirmation')))) {
                    // Redirect if the current page is an blog article
                    if (app.history.getCurrent().name === 'blogArticle') {
                      if (app.previous) {
                        app.history.back();
                      } else {
                        m.route.set(app.route('blog'));
                      }
                    }

                    return article.delete().then(() => {
                      m.redraw();
                    });
                  }
                },
                icon: 'far fa-trash-alt',
              },
              app.translator.trans('v17development-flarum-blog.forum.tools.delete_forever')
            ),
            10
          );
        }
      } else {
        // Hide article
        items.add(
          'hide',
          Button.component(
            {
              className: 'Button',
              onclick: DiscussionControls.hideAction.bind(article),
              icon: 'fas fa-eye-slash',
            },
            app.translator.trans('v17development-flarum-blog.forum.tools.hide_article')
          ),
          0
        );
      }
    }

    return items;
  }

  view() {
    const article = this.attrs.article;

    const articlePost = article.firstPost();

    return (
      <div className={'FlarumBlog-Article-Content-Edit-Button'}>
        <div className={'FlarumBlog-Article-Content-Edit-Dropdown'}>
          {Dropdown.component(
            {
              icon: 'fas fa-cog',
              label: 'Manage',
              buttonClassName: 'Button',
              menuClassName: 'Dropdown-menu--right',
              onshow: () => {
                // Get post data to make sure they can edit the post
                if (articlePost && !articlePost.canEdit() && !this.loadedPost) {
                  this.loadedPost = true;
                  m.redraw();
                }
              },
            },
            this.manageArticleButtons().toArray()
          )}
        </div>
      </div>
    );
  }
}
