import Component from "flarum/Component";
import IndexPage from "flarum/components/IndexPage";
import SelectDropdown from "flarum/components/SelectDropdown";

export default class ForumNav extends Component {
  view() {
    return (
      <div className="BlogForumNav BlogSideWidget">
        <h3>
          {app.translator.trans("v17development-flarum-blog.forum.forum_nav")}
        </h3>
        <nav className="IndexPage-nav sideNav">
          <SelectDropdown buttonClassName="Button" className="App-titleControl">
            {this.navItems().toArray()}
          </SelectDropdown>
        </nav>
      </div>
    );
  }

  navItems() {
    const items = IndexPage.prototype.navItems();

    // We want the active screen to show up in the top dropdown when on mobile.
    if (app.screen() !== "phone") {
      items.remove("blog");
    }

    return items;
  }
}
