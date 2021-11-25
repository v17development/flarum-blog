import { compat } from "@flarum/core/forum";
import BlogAuthor from "./components/BlogItemSidebar/BlogAuthor";
import BlogItemSidebar from "./components/BlogItemSidebar/BlogItemSidebar";
import ForumNav from "./components/ForumNav";
import BlogItem from "./pages/BlogItem";

export default () => {
  Object.assign(compat, {
    "v17development/blog/components/BlogItemSidebar": BlogItemSidebar,
    "v17development/blog/components/BlogAuthor": BlogAuthor,
    "v17development/blog/components/ForumNav": ForumNav,
    "v17development/blog/pages/BlogItem": BlogItem,
  });
};
