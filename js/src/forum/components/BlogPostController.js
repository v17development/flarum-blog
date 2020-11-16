import Component from 'flarum/Component';
import TagDiscussionModal from 'flarum/tags/components/TagDiscussionModal';
import DiscussionControls from 'flarum/utils/DiscussionControls';
import Alert from 'flarum/components/Alert';
import Button from 'flarum/components/Button';
import Dropdown from 'flarum/components/Dropdown';
import BlogPostSettingsModal from './Modals/BlogPostSettingsModal';
import EditPostComposer from 'flarum/components/EditPostComposer';
import extractText from 'flarum/utils/extractText';
import RenameArticleModal from './Modals/RenameArticleModal';

export default class BlogPostController extends Component {
  init() {
    this.loadedPost = false;
  }
  
  view() {
    const article = this.props.article;
    let buttons = [];

    // Rename article
    if(article.canRename()) {
      buttons.push(
        Button.component({
          className: 'Button',
          onclick: () => app.modal.show(new RenameArticleModal({ article })),
          icon: 'fas fa-pencil-alt',
          children: app.translator.trans('v17development-flarum-blog.forum.tools.rename_article')
        })
      );
    }

    const articlePost = article.firstPost() ? article.firstPost() : app.store.getById('posts', article.firstPostId());

    // Edit article
    buttons.push(
      Button.component({
        className: 'Button',
        disabled: !articlePost.canEdit(),
        onclick: () => {
          app.composer.load(new EditPostComposer({post: articlePost}));
          app.composer.show();
        },
        icon: 'fas fa-edit',
        children: app.translator.trans('v17development-flarum-blog.forum.tools.edit_article')
      })
    );

    // Article settings
    buttons.push(
      Button.component({
        className: 'Button',
        onclick: () => app.modal.show(new BlogPostSettingsModal({ article })),
        icon: 'fas fa-cogs',
        children: app.translator.trans('v17development-flarum-blog.forum.tools.article_settings')
      })
    );

    // Update categories
    if(article.canTag()) {
      buttons.push(
        Button.component({
          className: 'Button',
          onclick: () => app.modal.show(new TagDiscussionModal({ discussion: article })),
          icon: 'fas fa-tag',
          children: app.translator.trans('v17development-flarum-blog.forum.tools.update_category')
        })
      );
    }

    // Approve article
    if(article.blogMeta() && article.blogMeta().isPendingReview()) {
      buttons.push(<li className="Dropdown-separator"/>);

      buttons.push(
        Button.component({
          className: 'Button',
          disabled: !app.forum.attribute('canApproveBlogPosts'),
          onclick: () => {
            article.blogMeta().save({
              isPendingReview: false
            }).then(() => {
              app.alerts.show(new Alert({type: 'success', children: app.translator.trans('v17development-flarum-blog.forum.review_article.approve_article_approved')}));
            },
            response => {
              this.loading = false;
              this.handleErrors(response);
            });
          },
          icon: 'fas fa-thumbs-up',
          children: app.translator.trans('v17development-flarum-blog.forum.review_article.approve_article')
        })
      );
    }

    buttons.push(<li className="Dropdown-separator"/>);

    // Lock article
    if(article.canLock()) {
      buttons.push(
        Button.component({
          className: 'Button',
          onclick: DiscussionControls.lockAction.bind(article),
          icon: `fas ${article.isLocked() ? 'fa-comments' : 'fa-comment-slash'}`,
          children: article.isLocked() ? app.translator.trans('v17development-flarum-blog.forum.tools.enable_comments') : app.translator.trans('v17development-flarum-blog.forum.tools.disable_comments')
        })
      );
    }

    // Hide/show/delete
    if(article.canHide()) {
      // Article is hidden
      if(article.isHidden()) {
        // Recover article
        buttons.push(
          Button.component({
            className: 'Button',
            onclick: DiscussionControls.restoreAction.bind(article),
            icon: 'fas fa-eye',
            children: app.translator.trans('v17development-flarum-blog.forum.tools.recover_article')
          })
        );

        // Delete article
        if(article.canDelete()) {
          buttons.push(
            Button.component({
              className: 'Button',
              onclick: () => {
                // Confirm deletion
                if (confirm(extractText(app.translator.trans('core.forum.discussion_controls.delete_confirmation')))) {
                  // Redirect if the current page is an blog article
                  if (app.history.getCurrent().name === 'blogArticle') {
                    if(app.previous) {
                      app.history.back();
                    }else{
                      m.route(app.route('blog'));
                    }
                  }
            
                  return article.delete().then(() => {
                    m.redraw();
                  });
                }            
              },
              icon: 'far fa-trash-alt',
              children: app.translator.trans('v17development-flarum-blog.forum.tools.delete_forever')
            })
          );
        }
      }else{
        // Hide article
        buttons.push(
          Button.component({
            className: 'Button',
            onclick: DiscussionControls.hideAction.bind(article),
            icon: 'fas fa-eye-slash',
            children: app.translator.trans('v17development-flarum-blog.forum.tools.hide_article')
          })
        );
      }
    }

    return (
      <div className={"FlarumBlog-Article-Content-Edit-Button"}>
        <div className={"FlarumBlog-Article-Content-Edit-Dropdown"}>
          {Dropdown.component({
            icon: 'fas fa-cog',
            label: 'Manage',
            buttonClassName: 'Button',
            menuClassName: 'Dropdown-menu--right',
            children: buttons,
            onshow: () => {
              // Get post data to make sure they can edit the post
              if(articlePost && !articlePost.canEdit() && !this.loadedPost) {
                this.loadedPost = true;
                app.store
                  .find('posts', article.firstPost() ? article.firstPost().id() : article.firstPostId())
                  .then(() => {})
                  .catch(() => {})
                  .then(() => m.redraw())
              }     
            }
          })}
        </div>
      </div>
    )
  }
}