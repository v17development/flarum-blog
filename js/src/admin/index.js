import addRoutes from './addRoutes';
import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';
import BasicsPage from 'flarum/components/BasicsPage';
import PermissionGrid from 'flarum/components/PermissionGrid';
import blogPermissions from './addPermissions';
// import { knowledgeBasePermissions, supportTicketPermissions } from './addPermissions';

app.initializers.add('v17development-flarum-blog', () => {
  addRoutes();

  // Add home page option
  extend(BasicsPage.prototype, 'homePageItems', items => {
    items.add('v17development-flarum-blog', {
      path: '/blog',
      label: 'Blog',
    });
  });

  // Add Admin navigation
  extend(AdminNav.prototype, 'items', items => {
    items.add(
      'blog',
      AdminLinkButton.component({
        href: app.route('blog'),
        icon: 'fas fa-blog',
        children: 'Blog',
        description: 'Configure your forum\'s blog.',
      })
    );
  });

  // Add addPermissions
  extend(PermissionGrid.prototype, 'permissionItems', items => {
    items.add('v17-development-blog', {
      label: "Blog",
      children: blogPermissions().toArray()
    }, 80);
  });
});