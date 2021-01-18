import { extend } from 'flarum/extend';
import BasicsPage from 'flarum/components/BasicsPage';
import PermissionGrid from 'flarum/components/PermissionGrid';
import BlogSettings from './pages/BlogSettings';

app.initializers.add('v17development-flarum-blog', () => {
  // Register extension settings page
  app.extensionData.for('v17development-blog').registerPage(BlogSettings);

  app.extensionData.for('v17development-blog')
    .registerPermission({
      icon: 'fas fa-pencil-alt',
      label: "Write and edit blog articles",
      permission: 'blog.writeArticles',
    }, 'blog', 90)
    .registerPermission({
      icon: 'far fa-star',
      label: "Auto approve articles",
      permission: 'blog.autoApprovePosts'
    }, 'blog', 90)
    .registerPermission({
      icon: 'far fa-thumbs-up',
      label: "Can approve blog articles",
      permission: 'blog.canApprovePosts'
    }, 'blog', 90);

  // Add addPermissions
  extend(PermissionGrid.prototype, 'permissionItems', function(items) {
    // Add knowledge base permissions
    items.add('blog', {
      label: "Blog",
      children: 
        this.attrs.extensionId ? 
          app.extensionData.getExtensionPermissions(this.extensionId, 'blog').toArray() : 
          app.extensionData.getAllExtensionPermissions('blog').toArray()
    }, 80);
  });

  extend(BasicsPage.prototype, 'homePageItems', (items) => {
    items.add('blog', {
      path: '/blog',
      label: 'Blog',
    });
  });
});