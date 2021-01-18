import Component from "flarum/Component";
import ItemList from "flarum/utils/ItemList";
import listItems from "flarum/helpers/listItems";
import BlogAuthor from "./BlogAuthor";
import BlogCategories from "../BlogCategories";
import ForumNav from "../ForumNav";

export default class BlogItemSidebar extends Component {
  view() {
    return (
      <div className={"FlarumBlog-Article-Sidebar"}>
        <ul>{listItems(this.items().toArray())}</ul>
      </div>
    );
  }

  items() {
    const itemlist = new ItemList();

    itemlist.add("author", BlogAuthor.component(this.attrs), 0);

    itemlist.add("categories", BlogCategories.component(this.attrs), 0);

    itemlist.add("nav", ForumNav.component(this.attrs), 0);

    return itemlist;
  }
}
