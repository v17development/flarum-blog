import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import TagsPage from 'flarum/tags/components/TagsPage';

export default function extendTagOverview() {
  extend(TagsPage.prototype, 'view', function (markup) {
    // Pending xhr to load all tags, throw back loading indicator.
    if (this.loading) {
      return markup;
    }

    if (app.forum.attribute('blogHideTags') == false) return markup;

    // Get blog tag ID's
    const blogTags = app.forum.attribute('blogTags') || [];

    // Get tiles
    let tag_tiles = markup.children[1].children[1].children[0].children;

    // Map through the tiles and remove tiles that are part of the blog
    markup.children[1].children[1].children[0].children = tag_tiles.map((tile, i) => {
      return blogTags.indexOf(this.tags[i].id()) >= 0 ? null : tile;
    });

    return markup;
  });

  extend(IndexPage.prototype, 'navItems', function (items) {
    if (app.forum.attribute('blogHideTags') == false) return items;

    const blogTags = app.forum.attribute('blogTags') || [];

    blogTags.forEach((id) => {
      items.remove(`tag${id}`);
    });

    return items;
  });
}
