import BlogSettings from './pages/BlogSettings';

export default function() {
  // Main page
  app.routes.blog = {
    path: '/blog',
    component: BlogSettings.component()
  };
};