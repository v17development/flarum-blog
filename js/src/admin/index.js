import { extend } from "flarum/extend";
import BasicsPage from "flarum/components/BasicsPage";
import PermissionGrid from "flarum/components/PermissionGrid";
import BlogSettings from "./pages/BlogSettings";

app.initializers.add("v17development-flarum-blog", () => {
  // Register extension settings page
  app.extensionData.for("v17development-blog").registerPage(BlogSettings);

  app.extensionData
    .for("v17development-blog")
    .registerPermission(
      {
        icon: "fas fa-pencil-alt",
        label: app.translator.trans(
          "v17development-flarum-blog.admin.permissions.write_articles"
        ),
        permission: "blog.writeArticles",
      },
      "blog",
      90
    )
    .registerPermission(
      {
        icon: "far fa-star",
        label: app.translator.trans(
          "v17development-flarum-blog.admin.permissions.auto_approve_posts"
        ),
        permission: "blog.autoApprovePosts",
      },
      "blog",
      90
    )
    .registerPermission(
      {
        icon: "far fa-thumbs-up",
        label: app.translator.trans(
          "v17development-flarum-blog.admin.permissions.approve_posts"
        ),
        permission: "blog.canApprovePosts",
      },
      "blog",
      90
    );

  // Add addPermissions
  extend(PermissionGrid.prototype, "permissionItems", function (items) {
    // Add knowledge base permissions
    items.add(
      "blog",
      {
        label: app.translator.trans("v17development-flarum-blog.admin.blog"),
        children: this.attrs.extensionId
          ? app.extensionData
              .getExtensionPermissions(this.extensionId, "blog")
              .toArray()
          : app.extensionData.getAllExtensionPermissions("blog").toArray(),
      },
      80
    );
  });

  extend(BasicsPage.prototype, "homePageItems", (items) => {
    items.add("blog", {
      path: "/blog",
      label: app.translator.trans("v17development-flarum-blog.admin.blog"),
    });
  });
});
