import Component from 'flarum/Component';
import ItemList from 'flarum/utils/ItemList';
import listItems from 'flarum/helpers/listItems';
import avatar from 'flarum/helpers/avatar';

export default class BlogAuthor extends Component {  
  view() {
    return (
      <div className={"FlarumBlog-Article-Author"}>
        <div className={`FlarumBlog-Article-Author-background ${this.props.loading ? 'FlarumBlog-Author-Ghost' : ''}`} style={{ backgroundColor: this.props.article && this.props.article.user() ? this.props.article && this.props.article.user().color() : null }} />

        <div className={"FlarumBlog-Article-Author-Avatar"}>{this.props.article && this.props.article.user() ? avatar(this.props.article.user()) : <span className={"Avatar FlarumBlog-Author-Ghost"} />}</div>

        {this.props.article && this.props.article.user() && (
          <div className={"FlarumBlog-Article-Author-Info"}>
            <span className={"FlarumBlog-Article-Author-Name"}>{this.props.article.user().displayName()}</span>
            <p className={"FlarumBlog-Article-Author-Bio"}>{this.props.article.user().bio && this.props.article.user().bio()}</p>

            <ul className={"FlarumBlog-Article-Author-Extended"}>
              {listItems(this.items().toArray())}
            </ul>
          </div>
        )}

        {this.props.loading && (
          <div>
            <span className={"FlarumBlog-Article-Author-Name FlarumBlog-Author-Ghost"}>&nbsp;</span>
            <p className={"FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost"}>&nbsp;</p>
            <p className={"FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost"}>&nbsp;</p>
            <p className={"FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost"}>&nbsp;</p>
          </div>
        )}
      </div>
    );
  }

  items() {
    return new ItemList();
  }
}