import Component from 'flarum/common/Component';
import IndexPage from 'flarum/forum/components/IndexPage';
import SelectDropdown from 'flarum/common/components/SelectDropdown';

export default class ForumNav extends Component {
  view() {
    return (
      <div className="BlogForumNav BlogSideWidget">
        <h3>{app.translator.trans('v17development-flarum-blog.forum.forum_nav')}</h3>
        <nav className="IndexPage-nav sideNav">
          <SelectDropdown buttonClassName="Button" className="App-titleControl">
            {this.navItems().toArray()}
          </SelectDropdown>
        </nav>
      </div>
    );
  }

  navItems() {
    return IndexPage.prototype.navItems();
  }
}
