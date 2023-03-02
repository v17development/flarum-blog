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

    const tag_tiles_parent = findChild(markup, 'TagsPage-content', true);
    const tag_tiles = tag_tiles_parent?.children[0];

    if (!tag_tiles_parent || !tag_tiles) return markup;

    // Map through the tiles and remove tiles that are part of the blog
    tag_tiles.children = tag_tiles.children.map((tile, i) => {
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

function findChild(parent, childClass, recursive = false, maxDepth = 50, depth = 0) {
  const children = getChildren(parent);
  let child = null;

  for (let i = 0; i < children.length; i++) {
    const childClassName = children[i]?.attrs?.className || '';
    if (childClassName.includes(childClass)) {
      child = children[i];
      break;
    }
  }

  // Recursive search
  if (recursive && !child && depth < maxDepth) {
    for (let subParent of children) {
      const subChild = findChild(subParent, childClass, true, maxDepth, depth + 1);
      if (subChild) {
        return subChild;
      }
    }
  }

  return child;
}

function getChildren(parent) {
  if (Array.isArray(parent)) {
    return parent;
  }
  const children = parent?.children || [];
  if (!Array.isArray(children)) {
    return [];
  }
  return children;
}
