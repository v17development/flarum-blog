import Component from 'flarum/Component';
import ItemList from 'flarum/utils/ItemList';
import listItems from 'flarum/helpers/listItems';
import avatar from 'flarum/helpers/avatar';

export default class BlogAuthor extends Component {  
  view() {
    const author = !this.props.loading ? (this.props.article ? this.props.article.user() : this.props.user) : null;

    return (
      <div className={"FlarumBlog-Article-Author"}>
        <div className={`FlarumBlog-Article-Author-background ${this.props.loading ? 'FlarumBlog-Author-Ghost' : ''}`} style={{ backgroundColor: author && author.color() ? author.color() : null }} />

        <div className={"FlarumBlog-Article-Author-Avatar"}>{author ? avatar(author) : <span className={"Avatar FlarumBlog-Author-Ghost"} />}</div>

        {author && (
          <div className={"FlarumBlog-Article-Author-Info"}>
            <span className={"FlarumBlog-Article-Author-Name"}>{author.displayName()}</span>
            <p className={"FlarumBlog-Article-Author-Bio"}>{author.bio && author.bio()}</p>

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