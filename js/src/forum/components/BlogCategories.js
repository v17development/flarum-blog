import Component from 'flarum/Component';

export default class BlogCategories extends Component {
  init() {
    this.blogCategories = app.forum.attribute('blogTags');
  }
  
  view() {
    return (
      <div className={"BlogCategories"}>
        <h3>Categories</h3>

        {this.blogCategories && this.blogCategories.map(tagId => {
          const tag = app.store.getById('tags', tagId);

          if(!tag) return null; 

          const tags = [];

          // Add tag
          tags.push(
            <a href={app.route("blogCategory", { slug: tag.slug() })} className={"BlogCategories-item"} config={m.route}><span><i className={tag.icon()} /></span> {tag.name()}</a>
          );

          // Add tags
          app.store.all('tags').forEach(_tag => {
            if(_tag.isChild() && _tag.parent().id() === tag.id()) {
              tags.push(
                <a href={app.route("blogCategory", { slug: _tag.slug() })} className={"BlogCategories-item"} config={m.route}><span><i className={_tag.icon()} /></span> {_tag.name()}</a>
              );
            }
          });
          
          return tags;
        })}
      </div>
    )
  }
}