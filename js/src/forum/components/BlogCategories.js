import Component from "flarum/Component";
import Link from "flarum/components/Link";

export default class BlogCategories extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.blogCategories = app.forum.attribute("blogTags");
  }

  view() {
    return (
      <div className="BlogCategories BlogSideWidget">
        <h3>
          {app.translator.trans("v17development-flarum-blog.forum.categories")}
        </h3>

        {this.blogCategories &&
          this.blogCategories.map((tagId) => {
            const tag = app.store.getById("tags", tagId);

            if (!tag) return null;

            const tags = [];

            // Add tag
            tags.push(this.categoryItem(tag));

            // Add tags
            app.store.all("tags").forEach((_tag) => {
              if (_tag.isChild() && _tag.parent().id() === tag.id()) {
                tags.push(this.categoryItem(_tag));
              }
            });

            return tags;
          })}
      </div>
    );
  }

  // Category item
  categoryItem(tag) {
    return (
      <Link
        href={app.route("blogCategory", { slug: tag.slug() })}
        className={`BlogSideWidget-item BlogSideWidget-item-${tag.id()} ${
          tag.isChild() && app.forum.attribute("blogCategoryHierarchy") == true
            ? "BlogSideWidget-item-child"
            : ""
        }`}
      >
        <span
          className={tag.icon() === "" ? "BlogSideWidget-item-colored" : ""}
          style={{ backgroundColor: tag.icon() === "" ? tag.color() : null }}
        >
          <i className={tag.icon()} />
        </span>
        {tag.name()}
      </Link>
    );
  }
}
