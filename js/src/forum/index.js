import BlogItem from './pages/BlogItem';
import Model from 'flarum/common/Model';
import Tag from 'flarum/tags/models/Tag';
import Discussion from 'flarum/common/models/Discussion';
import BlogOverview from './pages/BlogOverview';
import redirector from './utils/redirector';
import BlogMeta from '../common/Models/BlogMeta';
import extendTagOverview from './utils/extendTagOverview';
import discussionRouting from './utils/discussionRouting';
import BlogComposer from './pages/BlogComposer';
import compat from './compat';
import addSidebarNav from './utils/addSidebarNav';
import app from 'flarum/forum/app';

// Create our own modal manager
import OverrideModalState from './states/OverrideModalState';
import overrideModalManager from './utils/overrideModalManager';

// Register Flarum Blog
app.initializers.add(
  'v17development-flarum-blog',
  (app) => {
    app.routes.blog = { path: '/blog', component: BlogOverview };

    app.routes.blogCategory = {
      path: '/blog/category/:slug',
      component: BlogOverview,
    };

    app.routes.blogComposer = {
      path: '/blog/compose',
      component: BlogComposer,
    };

    app.routes.blogArticle = { path: '/blog/:id', component: BlogItem };

    app.routes['blogArticle.near'] = {
      path: '/blog/:id/:near',
      component: BlogItem,
    };

    app.store.models.blogMeta = BlogMeta;

    Discussion.prototype.blogMeta = Model.hasOne('blogMeta');
    Tag.prototype.isBlog = Model.attribute('isBlog');

    // Redirect discussions/tags to their blog post/overview
    redirector();

    // Extend tag overview.
    // Hide tags which are used as blog category
    extendTagOverview();

    // Make that blog articles have a blog route and not a discussion route
    discussionRouting();

    // Add a link to the blog to the IndexPage sidebar, if enabled.
    addSidebarNav();

    /**
     * Notice from V17: Temporary override due to lack of multi-dialogs!
     *
     * We'll open a PR to support multi-dialog to the Flarum main repo
     */
    overrideModalManager();
    app.modal = new OverrideModalState();
  },
  -100000
);

compat();
