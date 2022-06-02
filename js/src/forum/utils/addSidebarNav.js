import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import LinkButton from 'flarum/common/components/LinkButton';

export default function addSidebarNav() {
  extend(IndexPage.prototype, 'navItems', function (items) {
    if (app.forum.attribute('blogAddSidebarNav') && app.forum.attribute('blogAddSidebarNav') !== '0') {
      items.add(
        'blog',
        <LinkButton icon="fas fa-comment" href={app.route('blog')}>
          {app.translator.trans('v17development-flarum-blog.forum.blog')}
        </LinkButton>,
        15
      );
    }

    return items;
  });
}
