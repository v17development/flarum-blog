module.exports=function(t){var e={};function a(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,a),s.l=!0,s.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=39)}([function(t,e,a){"use strict";function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}a.d(e,"a",(function(){return n}))},function(t,e){t.exports=flarum.core.compat["components/Button"]},,function(t,e){t.exports=flarum.core.compat["components/Switch"]},function(t,e){t.exports=flarum.core.compat.extend},,,function(t,e){t.exports=flarum.core.compat["components/Alert"]},,,,function(t,e){t.exports=flarum.core.compat["components/Modal"]},,,,,function(t,e){t.exports=flarum.core.compat["utils/saveSettings"]},,function(t,e){t.exports=flarum.core.compat["components/FieldSet"]},,,,,,,,,,,,,,,,,function(t,e){t.exports=flarum.core.compat["components/BasicsPage"]},function(t,e){t.exports=flarum.core.compat["components/PermissionGrid"]},function(t,e){t.exports=flarum.core.compat["components/ExtensionPage"]},,function(t,e,a){"use strict";a.r(e);var n=a(4),s=a(35),o=a.n(s),i=a(36),r=a.n(i),l=a(0),p=a(37),d=a.n(p),c=a(16),g=a.n(c),u=a(7),b=a.n(u),h=a(1),_=a.n(h),v=a(18),f=a.n(v),y=a(3),x=a.n(y),C=a(11),w=function(t){function e(){return t.apply(this,arguments)||this}Object(l.a)(e,t);var a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),this.blogCategoriesOriginal=app.data.settings.blog_tags?app.data.settings.blog_tags.split("|"):[],this.blogCategories=app.data.settings.blog_tags?app.data.settings.blog_tags.split("|"):[],this.isSaving=!1,this.hasChanges=!1},a.title=function(){return"Select blog categories"},a.className=function(){return"Modal modal-dialog FlarumBlog-TagsModal"},a.content=function(){var t=this;return m("div",null,m("div",{className:"Modal-body"},m("p",null,"Please select one or more tags that are considered blog tags."," ",m("a",{href:app.forum.attribute("baseUrl")+"/blog",target:"_blank"},"Visit your blog.")),m("table",{className:"FlarumBlog-TagsTable"},m("thead",null,m("th",{width:"35"}),m("th",null,"Tag name"),m("th",{width:"50"})),m("tbody",null,0===app.store.all("tags").length&&m("tr",null,m("td",{colspan:"3"},"You currently have no tags.")),app.store.all("tags").map((function(e){if(!e.parent()){var a=function(){var a=t.blogCategories.indexOf(e.id());t.hasChanges=!0,a>=0?t.blogCategories.splice(a,1):t.blogCategories.push(e.id())};return m("tr",null,m("td",null,m("i",{className:e.icon()})),m("td",{onclick:a},e.name()),m("td",null,m(x.a,{state:t.blogCategories.indexOf(e.id())>=0,onchange:a})))}}))))),m("div",{style:"padding: 25px 30px; text-align: center;"},m(_.a,{type:"submit",className:"Button Button--primary",loading:this.loading},this.hasChanges?"Save changes":"Close")))},a.onsubmit=function(t){var e=this;t.preventDefault(),this.hasChanges?(this.isSaving=!0,g()({blog_tags:this.blogCategories.join("|")}).then((function(){app.alerts.show(b.a,{type:"success"},app.translator.trans("core.admin.basics.saved_message")),e.hide()})).catch((function(){app.alerts.show(b.a,{type:"error"},app.translator.trans("core.lib.error.generic_message"))})).then((function(){e.isSaving=!1}))):this.hide()},e}(a.n(C).a),E=function(t){function e(){return t.apply(this,arguments)||this}Object(l.a)(e,t);var a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),this.hasChanges=!1,this.isSaving=!1,this.blogCategories=app.data.settings.blog_tags?app.data.settings.blog_tags.split("|"):[],this.redirectsEnabled=app.data.settings.blog_redirects_enabled?app.data.settings.blog_redirects_enabled:"both",this.hideTagsInList=!app.data.settings.blog_hide_tags||app.data.settings.blog_hide_tags,this.allowComments=!app.data.settings.blog_allow_comments||app.data.settings.blog_allow_comments,this.hideOnDiscussionList=!!app.data.settings.blog_filter_discussion_list&&app.data.settings.blog_filter_discussion_list,this.requiresReviewOnPost=!!app.data.settings.blog_requires_review&&app.data.settings.blog_requires_review,this.addCategoryHierarchy=!app.data.settings.blog_category_hierarchy||app.data.settings.blog_category_hierarchy,this.addSidebarNav=!app.data.settings.blog_add_sidebar_nav||app.data.settings.blog_add_sidebar_nav},a.content=function(){var t=this;return m("div",{className:"BasicsPage FlarumBlog"},m("div",{className:"container"},m("div",{className:"FlarumBlog-SelectCategories"},0===this.blogCategories.length?app.translator.transChoice("v17development-flarum-blog.admin.settings.no_categories_selected"):app.translator.transChoice("v17development-flarum-blog.admin.settings.selected_category_count",this.blogCategories.length,{count:this.blogCategories.length}),m(_.a,{className:"Button",onclick:function(){return app.modal.show(w)}},app.translator.trans("v17development-flarum-blog.admin.settings.select_categories_button"))),f.a.component({label:app.translator.trans("v17development-flarum-blog.admin.settings.blog_heading")},[x.a.component({state:1==this.allowComments,onchange:function(e){t.allowComments=e,t.hasChanges=!0}},[m("b",null,app.translator.trans("v17development-flarum-blog.admin.settings.allow_comments_label")),m("div",{className:"helpText"},app.translator.trans("v17development-flarum-blog.admin.settings.allow_comments_text"))]),x.a.component({state:1==this.requiresReviewOnPost,onchange:function(e){t.requiresReviewOnPost=e,t.hasChanges=!0}},[m("b",null,app.translator.trans("v17development-flarum-blog.admin.settings.require_review_label")),m("div",{className:"helpText"},app.translator.trans("v17development-flarum-blog.admin.settings.require_review_text"))]),x.a.component({state:1==this.hideOnDiscussionList,onchange:function(e){t.hideOnDiscussionList=e,t.hasChanges=!0}},[m("b",null,app.translator.trans("v17development-flarum-blog.admin.settings.hide_on_discussion_list_label")),m("div",{className:"helpText"},app.translator.trans("v17development-flarum-blog.admin.settings.hide_on_discussion_list_text"))]),x.a.component({state:1==this.addSidebarNav,onchange:function(e){t.addSidebarNav=e,t.hasChanges=!0}},[m("b",null,app.translator.trans("v17development-flarum-blog.admin.settings.add_sidebar_nav_label")),m("div",{className:"helpText"},app.translator.trans("v17development-flarum-blog.admin.settings.add_sidebar_nav_text"))])]),f.a.component({label:app.translator.trans("v17development-flarum-blog.admin.settings.categories_heading")},[x.a.component({state:1==this.hideTagsInList,onchange:function(e){t.hideTagsInList=e,t.hasChanges=!0}},[m("b",null,app.translator.trans("v17development-flarum-blog.admin.settings.hide_tags_in_taglist_label")),m("div",{className:"helpText"},app.translator.trans("v17development-flarum-blog.admin.settings.hide_tags_in_taglist_text"))]),x.a.component({state:1==this.addCategoryHierarchy,onchange:function(e){t.addCategoryHierarchy=e,t.hasChanges=!0}},[m("b",null,app.translator.trans("v17development-flarum-blog.admin.settings.show_tag_hierarchy_label")),m("div",{className:"helpText"},app.translator.trans("v17development-flarum-blog.admin.settings.show_tag_hierarchy_text"))])]),f.a.component({label:app.translator.trans("v17development-flarum-blog.admin.settings.redirects_heading")},[x.a.component({state:"both"===this.redirectsEnabled||"discussions_only"===this.redirectsEnabled,onchange:function(e){e?"tags_only"===t.redirectsEnabled?t.redirectsEnabled="both":"none"===t.redirectsEnabled&&(t.redirectsEnabled="discussions_only"):"discussions_only"===t.redirectsEnabled?t.redirectsEnabled="none":t.redirectsEnabled="tags_only",t.hasChanges=!0}},[m("b",null,app.translator.trans("v17development-flarum-blog.admin.settings.redirect_articles_label")),m("div",{className:"helpText"},app.translator.trans("v17development-flarum-blog.admin.settings.redirect_articles_text"))]),x.a.component({state:"both"===this.redirectsEnabled||"tags_only"===this.redirectsEnabled,onchange:function(e){e?"discussions_only"===t.redirectsEnabled?t.redirectsEnabled="both":"none"===t.redirectsEnabled&&(t.redirectsEnabled="tags_only"):"tags_only"===t.redirectsEnabled?t.redirectsEnabled="none":t.redirectsEnabled="discussions_only",t.hasChanges=!0}},[m("b",null,app.translator.trans("v17development-flarum-blog.admin.settings.redirect_tags_label")),m("div",{className:"helpText"},app.translator.trans("v17development-flarum-blog.admin.settings.redirect_tags_text"))])]),m(_.a,{loading:this.isSaving,className:"Button Button--primary",onclick:function(){return t.save()},disabled:!this.hasChanges},app.translator.trans("core.admin.basics.submit_button"))))},a.save=function(){var t=this;this.isSaving=!0,g()({blog_add_sidebar_nav:this.addSidebarNav,blog_redirects_enabled:this.redirectsEnabled,blog_hide_tags:this.hideTagsInList,blog_requires_review:this.requiresReviewOnPost,blog_allow_comments:this.allowComments,blog_category_hierarchy:this.addCategoryHierarchy,blog_filter_discussion_list:this.hideOnDiscussionList}).then((function(){t.hasChanges=!1,app.alerts.show(b.a,{type:"success"},app.translator.trans("core.admin.basics.saved_message"))})).catch((function(){})).then((function(){t.isSaving=!1,m.redraw()}))},e}(d.a);app.initializers.add("v17development-flarum-blog",(function(){app.extensionData.for("v17development-blog").registerPage(E),app.extensionData.for("v17development-blog").registerPermission({icon:"fas fa-pencil-alt",label:app.translator.trans("v17development-flarum-blog.admin.permissions.write_articles"),permission:"blog.writeArticles"},"blog",90).registerPermission({icon:"far fa-star",label:app.translator.trans("v17development-flarum-blog.admin.permissions.auto_approve_posts"),permission:"blog.autoApprovePosts"},"blog",90).registerPermission({icon:"far fa-thumbs-up",label:app.translator.trans("v17development-flarum-blog.admin.permissions.approve_posts"),permission:"blog.canApprovePosts"},"blog",90),Object(n.extend)(r.a.prototype,"permissionItems",(function(t){t.add("blog",{label:app.translator.trans("v17development-flarum-blog.admin.blog"),children:this.attrs.extensionId?app.extensionData.getExtensionPermissions(this.extensionId,"blog").toArray():app.extensionData.getAllExtensionPermissions("blog").toArray()},80)})),Object(n.extend)(o.a.prototype,"homePageItems",(function(t){t.add("blog",{path:"/blog",label:app.translator.trans("v17development-flarum-blog.admin.blog")})}))}))}]);
//# sourceMappingURL=admin.js.map