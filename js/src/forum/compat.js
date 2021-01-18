import { compat } from "@flarum/core/forum";
import BlogAuthor from "./components/BlogItemSidebar/BlogAuthor";
import BlogItemSidebar from "./components/BlogItemSidebar/BlogItemSidebar";

export default () => {
  Object.assign(compat, {
    "v17development/blog/components/BlogItemSidebar": BlogItemSidebar,
    "v17development/blog/components/BlogAuthor": BlogAuthor,
  });
};
