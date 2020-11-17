import Component from 'flarum/Component';

export default class BlogCategories extends Component {
  init() {
    this.blogCategories = app.forum.attribute('blogTags');
  }
  
  view() {
    return (
      <div className={"BlogCategories"}>
        <h3>{app.translator.trans('v17development-flarum-blog.forum.categories')}</h3>

        {this.blogCategories && this.blogCategories.map(tagId => {
          const tag = app.store.getById('tags', tagId);

          if(!tag) return null; 

          const tags = [];

          // Add tag
          tags.push(
            this.categoryItem(tag)
          );

          // Add tags
          app.store.all('tags').forEach(_tag => {
            if(_tag.isChild() && _tag.parent().id() === tag.id()) {
              tags.push(this.categoryItem(_tag));
            }
          });
          
          return tags;
        })}
      </div>
    )
  }

  // Category item
  categoryItem(tag) {
    return (
      <a 
        href={app.route("blogCategory", { slug: tag.slug() })} 
        className={`BlogCategories-item BlogCategories-item-${tag.id()} ${tag.isChild() && app.forum.attribute('blogCategoryHierarchy') == true ? 'BlogCategories-item-child' : ''}`} 
        config={m.route}
        >
        <span className={tag.icon() === '' ? 'BlogCategories-item-colored' : ''} style={{ backgroundColor: tag.icon() === '' ? tag.color() : null }}>
          <i className={tag.icon()} />
        </span>
        {tag.name()}
      </a>
    )
  }
}