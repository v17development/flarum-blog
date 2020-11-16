import IndexPage from 'flarum/components/IndexPage';
import DiscussionPage from 'flarum/components/DiscussionPage';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import { extend, override } from 'flarum/extend';

export default function() {
  // Redirect tag to blog category
  extend(IndexPage.prototype, 'config', function() {
    const tag = this.currentTag();
    const tagRedirectEnabled = app.forum.attribute('blogRedirectsEnabled') === 'both' || app.forum.attribute('blogRedirectsEnabled') === 'tags_only';

    // Only trigger when it's a tag page and the redirects are enabled
    if(tag && tagRedirectEnabled) {
      const blogTags = app.forum.attribute('blogTags');

      // Tag is inside list
      if(blogTags.indexOf(tag.id()) >= 0 || (tag.parent() && blogTags.indexOf(tag.parent().id()) >= 0)) {
        m.route(app.route('blog'));
      }
    }
  });

  // Redirect discussion to blog article
  override(DiscussionPage.prototype, 'view', function(original) {
    const discussionRedirectEnabled = app.forum.attribute('blogRedirectsEnabled') === 'both' || app.forum.attribute('blogRedirectsEnabled') === 'discussions_only';
    if(discussionRedirectEnabled && this.discussion && this.discussion && this.discussion.tags().length > 0) {
      const blogTags = app.forum.attribute('blogTags');

      const foundTags = this.discussion.tags().filter(tag => {
        return blogTags.indexOf(tag.id()) >= 0 ||  (tag.parent() && blogTags.indexOf(tag.parent().id()) >= 0)
      });

      // Only redirect if the discussion has blog tags
      if(foundTags.length > 0) {
        // Redirect to discussion
        const url = app.route('blogArticle', {
          id: `${this.discussion.id()}-${this.discussion.slug()}`
        });

        document.location.href = url;

        return (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <LoadingIndicator size={"large"} />
            
            <h2 style={{ marginTop: '40px' }}>{app.translator.trans('v17development-flarum-support.forum.utils.redirect.title')}</h2>
            {app.translator.trans('v17development-flarum-support.forum.utils.redirect.link', {
              a: <a href={url} />
            })}
          </div>
        );
      }
    }

    return original();
  });
}