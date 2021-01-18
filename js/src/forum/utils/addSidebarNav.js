import { extend } from "flarum/extend";
import IndexPage from "flarum/components/IndexPage";
import LinkButton from "flarum/components/LinkButton";

export default function addSidebarNav() {
  extend(IndexPage.prototype, "navItems", function (items) {
    if (
      app.forum.attribute("blogAddSidebarNav") &&
      app.forum.attribute("blogAddSidebarNav") !== "0"
    ) {
      items.add(
        "blog",
        <LinkButton icon="fas fa-comment" href={app.route("blog")}>
          {app.translator.trans("v17development-flarum-blog.forum.blog")}
        </LinkButton>,
        15
      );
    }

    return items;
  });
}
