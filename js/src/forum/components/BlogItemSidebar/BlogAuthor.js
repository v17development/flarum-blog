import Component from 'flarum/common/Component';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';
import avatar from 'flarum/common/helpers/avatar';
import Link from 'flarum/common/components/Link';

export default class BlogAuthor extends Component {
  view() {
    const author = !this.attrs.loading ? (this.attrs.article ? this.attrs.article.user() : this.attrs.user) : null;

    return (
      <div className={'FlarumBlog-Article-Author'}>
        <div
          className={`FlarumBlog-Article-Author-background ${this.attrs.loading ? 'FlarumBlog-Author-Ghost' : ''}`}
          style={{
            backgroundColor: author && author.color() ? author.color() : null,
          }}
        />

        <div className={'FlarumBlog-Article-Author-Avatar'}>
          {author ? (
            <Link href={app.route('user', { username: author.username() })}>{avatar(author)}</Link>
          ) : (
            <span className={'Avatar FlarumBlog-Author-Ghost'} />
          )}
        </div>

        {author && (
          <div className={'FlarumBlog-Article-Author-Info'}>
            <Link href={app.route('user', { username: author.username() })} className={'FlarumBlog-Article-Author-Name'}>
              {author.displayName()}
            </Link>
            <p className={'FlarumBlog-Article-Author-Bio'}>{author.bio && author.bio()}</p>

            <ul className={'FlarumBlog-Article-Author-Extended'}>{listItems(this.items().toArray())}</ul>
          </div>
        )}

        {this.attrs.loading && (
          <div>
            <span className={'FlarumBlog-Article-Author-Name FlarumBlog-Author-Ghost'}>&nbsp;</span>
            <p className={'FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost'}>&nbsp;</p>
            <p className={'FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost'}>&nbsp;</p>
            <p className={'FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost'}>&nbsp;</p>
          </div>
        )}
      </div>
    );
  }

  items() {
    return new ItemList();
  }
}
