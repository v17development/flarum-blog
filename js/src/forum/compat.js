import { compat } from "@flarum/core/forum";
import BlogAuthor from "./components/BlogItemSidebar/BlogAuthor";
import BlogItemSidebar from "./components/BlogItemSidebar/BlogItemSidebar";
import BlogPostController from "./components/BlogPostController";
import ForumNav from "./components/ForumNav";
import BlogItem from "./pages/BlogItem";
import BlogOverview from "./pages/BlogOverview";

export default () => {
  Object.assign(compat, {
    "v17development/blog/components/BlogItemSidebar": BlogItemSidebar,
    "v17development/blog/components/BlogAuthor": BlogAuthor,
    "v17development/blog/components/ForumNav": ForumNav,
    "v17development/blog/components/BlogOverview": BlogPostController,
    "v17development/blog/pages/BlogItem": BlogItem,
    "v17development/blog/pages/BlogOverview": BlogOverview,
  });
};
