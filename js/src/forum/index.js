import BlogItem from "./pages/BlogItem";
import Model from 'flarum/Model';
import Discussion from 'flarum/models/Discussion';

import BlogOverview from "./pages/BlogOverview";
import redirector from "./utils/redirector";
import BlogMeta from "../common/Models/BlogMeta";
import extendTagOverview from "./utils/extendTagOverview";

// Register Flarum Blog
app.initializers.add('v17development-flarum-blog', app => {
  app.routes.blog = { path: '/blog', component: BlogOverview.component() };
  
  app.routes.blogCategory = { path: '/blog/category/:slug', component: BlogOverview.component() };

  app.routes.blogArticle = { path: '/blog/:id', component: BlogItem.component() };

  app.store.models.blogMeta = BlogMeta;

  Discussion.prototype.blogMeta = Model.hasOne('blogMeta');

  // Redirect discussions/tags to their blog post/overview
  redirector();

  // Extend tag overview.
  // Hide tags which are used as blog category
  extendTagOverview();
});