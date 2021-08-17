module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/admin/components/Modals/SelectCategoriesModal.js":
/*!**************************************************************!*\
  !*** ./src/admin/components/Modals/SelectCategoriesModal.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectCategoriesModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/saveSettings */ "flarum/utils/saveSettings");
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5__);







var SelectCategoriesModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SelectCategoriesModal, _Modal);

  function SelectCategoriesModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = SelectCategoriesModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.blogCategoriesOriginal = app.data.settings.blog_tags ? app.data.settings.blog_tags.split("|") : [];
    this.blogCategories = app.data.settings.blog_tags ? app.data.settings.blog_tags.split("|") : [];
    this.isSaving = false;
    this.hasChanges = false;
  };

  _proto.title = function title() {
    return "Select blog categories";
  };

  _proto.className = function className() {
    return "Modal modal-dialog FlarumBlog-TagsModal";
  };

  _proto.content = function content() {
    var _this = this;

    return m("div", null, m("div", {
      className: "Modal-body"
    }, m("p", null, "Please select one or more tags that are considered blog tags.", " ", m("a", {
      href: app.forum.attribute("baseUrl") + "/blog",
      target: "_blank"
    }, "Visit your blog.")), m("table", {
      className: "FlarumBlog-TagsTable"
    }, m("thead", null, m("th", {
      width: "35"
    }), m("th", null, "Tag name"), m("th", {
      width: "50"
    })), m("tbody", null, app.store.all("tags").length === 0 && m("tr", null, m("td", {
      colspan: "3"
    }, "You currently have no tags.")), app.store.all("tags").map(function (obj) {
      // Skip all tags who aren't main categories
      if (obj.parent()) {
        return;
      } // Toggle tag


      var toggleTag = function toggleTag() {
        var currentIndex = _this.blogCategories.indexOf(obj.id());

        _this.hasChanges = true; // Remove tag

        if (currentIndex >= 0) {
          _this.blogCategories.splice(currentIndex, 1);
        } else {
          // Add tag
          _this.blogCategories.push(obj.id());
        }
      };

      return m("tr", null, m("td", null, m("i", {
        className: obj.icon()
      })), m("td", {
        onclick: toggleTag
      }, obj.name()), m("td", null, m(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5___default.a, {
        state: _this.blogCategories.indexOf(obj.id()) >= 0,
        onchange: toggleTag
      })));
    })))), m("div", {
      style: "padding: 25px 30px; text-align: center;"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "submit",
      className: "Button Button--primary",
      loading: this.loading
    }, this.hasChanges ? "Save changes" : "Close")));
  } // Close or save setting
  ;

  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;

    e.preventDefault();

    if (!this.hasChanges) {
      this.hide();
      return;
    }

    this.isSaving = true;
    flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4___default()({
      blog_tags: this.blogCategories.join("|")
    }).then(function () {
      app.alerts.show(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "success"
      }, app.translator.trans("core.admin.settings.saved_message"));

      _this2.hide();
    })["catch"](function () {
      app.alerts.show(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "error"
      }, app.translator.trans("core.lib.error.generic_message"));
    }).then(function () {
      _this2.isSaving = false;
    });
  };

  return SelectCategoriesModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/BasicsPage */ "flarum/components/BasicsPage");
/* harmony import */ var flarum_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/PermissionGrid */ "flarum/components/PermissionGrid");
/* harmony import */ var flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_BlogSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/BlogSettings */ "./src/admin/pages/BlogSettings.js");




app.initializers.add("v17development-flarum-blog", function () {
  // Register extension settings page
  app.extensionData["for"]("v17development-blog").registerPage(_pages_BlogSettings__WEBPACK_IMPORTED_MODULE_3__["default"]);
  app.extensionData["for"]("v17development-blog").registerPermission({
    icon: "fas fa-pencil-alt",
    label: app.translator.trans("v17development-flarum-blog.admin.permissions.write_articles"),
    permission: "blog.writeArticles"
  }, "blog", 90).registerPermission({
    icon: "far fa-star",
    label: app.translator.trans("v17development-flarum-blog.admin.permissions.auto_approve_posts"),
    permission: "blog.autoApprovePosts"
  }, "blog", 90).registerPermission({
    icon: "far fa-thumbs-up",
    label: app.translator.trans("v17development-flarum-blog.admin.permissions.approve_posts"),
    permission: "blog.canApprovePosts"
  }, "blog", 90); // Add addPermissions

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, "permissionItems", function (items) {
    // Add knowledge base permissions
    items.add("blog", {
      label: app.translator.trans("v17development-flarum-blog.admin.blog"),
      children: this.attrs.extensionId ? app.extensionData.getExtensionPermissions(this.extensionId, "blog").toArray() : app.extensionData.getAllExtensionPermissions("blog").toArray()
    }, 80);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, "homePageItems", function (items) {
    items.add("blog", {
      path: "/blog",
      label: app.translator.trans("v17development-flarum-blog.admin.blog")
    });
  });
});

/***/ }),

/***/ "./src/admin/pages/BlogSettings.js":
/*!*****************************************!*\
  !*** ./src/admin/pages/BlogSettings.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogSettings; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/ExtensionPage */ "flarum/components/ExtensionPage");
/* harmony import */ var flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/saveSettings */ "flarum/utils/saveSettings");
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/FieldSet */ "flarum/components/FieldSet");
/* harmony import */ var flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Modals_SelectCategoriesModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Modals/SelectCategoriesModal */ "./src/admin/components/Modals/SelectCategoriesModal.js");
/* harmony import */ var flarum_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/UploadImageButton */ "flarum/components/UploadImageButton");
/* harmony import */ var flarum_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_8__);










var BlogSettings = /*#__PURE__*/function (_ExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogSettings, _ExtensionPage);

  function BlogSettings() {
    return _ExtensionPage.apply(this, arguments) || this;
  }

  var _proto = BlogSettings.prototype;

  _proto.oninit = function oninit(attrs) {
    _ExtensionPage.prototype.oninit.call(this, attrs); // Form


    this.hasChanges = false;
    this.isSaving = false; // Settings

    this.redirectsEnabled = app.data.settings.blog_redirects_enabled ? app.data.settings.blog_redirects_enabled : "both";
    this.hideTagsInList = app.data.settings.blog_hide_tags ? app.data.settings.blog_hide_tags : true;
    this.allowComments = app.data.settings.blog_allow_comments ? app.data.settings.blog_allow_comments : true;
    this.hideOnDiscussionList = app.data.settings.blog_filter_discussion_list ? app.data.settings.blog_filter_discussion_list : false;
    this.requiresReviewOnPost = app.data.settings.blog_requires_review ? app.data.settings.blog_requires_review : false;
    this.addCategoryHierarchy = app.data.settings.blog_category_hierarchy ? app.data.settings.blog_category_hierarchy : true;
    this.addSidebarNav = app.data.settings.blog_add_sidebar_nav ? app.data.settings.blog_add_sidebar_nav : true;
    app.forum.data.attributes.blog_default_imageUrl = app.forum.attribute("baseUrl") + "/assets/" + app.data.settings.blog_default_image_path;
  };

  _proto.content = function content() {
    var _this = this;

    var blogCategoriesCount = app.data.settings.blog_tags ? app.data.settings.blog_tags.split("|").length : 0;
    return m("div", {
      className: "BasicsPage FlarumBlog"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "FlarumBlog-SelectCategories"
    }, blogCategoriesCount === 0 ? app.translator.trans("v17development-flarum-blog.admin.settings.no_categories_selected") : app.translator.trans("v17development-flarum-blog.admin.settings.selected_category_count", {
      count: blogCategoriesCount
    }), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "Button",
      onclick: function onclick() {
        return app.modal.show(_components_Modals_SelectCategoriesModal__WEBPACK_IMPORTED_MODULE_7__["default"]);
      }
    }, app.translator.trans("v17development-flarum-blog.admin.settings.select_categories_button"))), flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      label: app.translator.trans("v17development-flarum-blog.admin.settings.blog_heading")
    }, [flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      state: this.allowComments == true,
      onchange: function onchange(val) {
        _this.allowComments = val;
        _this.hasChanges = true;
      }
    }, [m("b", null, app.translator.trans("v17development-flarum-blog.admin.settings.allow_comments_label")), m("div", {
      className: "helpText"
    }, app.translator.trans("v17development-flarum-blog.admin.settings.allow_comments_text"))]), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      state: this.requiresReviewOnPost == true,
      onchange: function onchange(val) {
        _this.requiresReviewOnPost = val;
        _this.hasChanges = true;
      }
    }, [m("b", null, app.translator.trans("v17development-flarum-blog.admin.settings.require_review_label")), m("div", {
      className: "helpText"
    }, app.translator.trans("v17development-flarum-blog.admin.settings.require_review_text"))]), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      state: this.hideOnDiscussionList == true,
      onchange: function onchange(val) {
        _this.hideOnDiscussionList = val;
        _this.hasChanges = true;
      }
    }, [m("b", null, app.translator.trans("v17development-flarum-blog.admin.settings.hide_on_discussion_list_label")), m("div", {
      className: "helpText"
    }, app.translator.trans("v17development-flarum-blog.admin.settings.hide_on_discussion_list_text"))]), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      state: this.addSidebarNav == true,
      onchange: function onchange(val) {
        _this.addSidebarNav = val;
        _this.hasChanges = true;
      }
    }, [m("b", null, app.translator.trans("v17development-flarum-blog.admin.settings.add_sidebar_nav_label")), m("div", {
      className: "helpText"
    }, app.translator.trans("v17development-flarum-blog.admin.settings.add_sidebar_nav_text"))])]), flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      label: app.translator.trans("v17development-flarum-blog.admin.settings.categories_heading")
    }, [flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      state: this.hideTagsInList == true,
      onchange: function onchange(val) {
        _this.hideTagsInList = val;
        _this.hasChanges = true;
      }
    }, [m("b", null, app.translator.trans("v17development-flarum-blog.admin.settings.hide_tags_in_taglist_label")), m("div", {
      className: "helpText"
    }, app.translator.trans("v17development-flarum-blog.admin.settings.hide_tags_in_taglist_text"))]), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      state: this.addCategoryHierarchy == true,
      onchange: function onchange(val) {
        _this.addCategoryHierarchy = val;
        _this.hasChanges = true;
      }
    }, [m("b", null, app.translator.trans("v17development-flarum-blog.admin.settings.show_tag_hierarchy_label")), m("div", {
      className: "helpText"
    }, app.translator.trans("v17development-flarum-blog.admin.settings.show_tag_hierarchy_text"))])]), flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      label: app.translator.trans("v17development-flarum-blog.admin.settings.redirects_heading")
    }, [flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      state: this.redirectsEnabled === "both" || this.redirectsEnabled === "discussions_only",
      onchange: function onchange(val) {
        if (val) {
          // Add
          if (_this.redirectsEnabled === "tags_only") {
            _this.redirectsEnabled = "both";
          } else if (_this.redirectsEnabled === "none") {
            _this.redirectsEnabled = "discussions_only";
          }
        } else {
          if (_this.redirectsEnabled === "discussions_only") {
            _this.redirectsEnabled = "none";
          } else {
            _this.redirectsEnabled = "tags_only";
          }
        }

        _this.hasChanges = true;
      }
    }, [m("b", null, app.translator.trans("v17development-flarum-blog.admin.settings.redirect_articles_label")), m("div", {
      className: "helpText"
    }, app.translator.trans("v17development-flarum-blog.admin.settings.redirect_articles_text"))]), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      state: this.redirectsEnabled === "both" || this.redirectsEnabled === "tags_only",
      onchange: function onchange(val) {
        if (val) {
          // Add
          if (_this.redirectsEnabled === "discussions_only") {
            _this.redirectsEnabled = "both";
          } else if (_this.redirectsEnabled === "none") {
            _this.redirectsEnabled = "tags_only";
          }
        } else {
          if (_this.redirectsEnabled === "tags_only") {
            _this.redirectsEnabled = "none";
          } else {
            _this.redirectsEnabled = "discussions_only";
          }
        }

        _this.hasChanges = true;
      }
    }, [m("b", null, app.translator.trans("v17development-flarum-blog.admin.settings.redirect_tags_label")), m("div", {
      className: "helpText"
    }, app.translator.trans("v17development-flarum-blog.admin.settings.redirect_tags_text"))])]), flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      label: app.translator.trans("v17development-flarum-blog.admin.settings.default_article_image_label")
    }, [m("div", {
      className: "helpText"
    }, app.translator.trans("v17development-flarum-blog.admin.settings.default_article_image_text")), flarum_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      name: "blog_default_image"
    })]), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      loading: this.isSaving,
      className: "Button Button--primary",
      onclick: function onclick() {
        return _this.save();
      },
      disabled: !this.hasChanges
    }, app.translator.trans("core.admin.settings.submit_button"))));
  }
  /**
   * Save data
   */
  ;

  _proto.save = function save() {
    var _this2 = this;

    this.isSaving = true;
    flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2___default()({
      blog_add_sidebar_nav: this.addSidebarNav,
      blog_redirects_enabled: this.redirectsEnabled,
      blog_hide_tags: this.hideTagsInList,
      blog_requires_review: this.requiresReviewOnPost,
      blog_allow_comments: this.allowComments,
      blog_category_hierarchy: this.addCategoryHierarchy,
      blog_filter_discussion_list: this.hideOnDiscussionList
    }).then(function () {
      _this2.hasChanges = false; // Show saved message

      app.alerts.show(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "success"
      }, app.translator.trans("core.admin.settings.saved_message"));
    })["catch"](function () {}).then(function () {
      _this2.isSaving = false;
      m.redraw();
    });
  };

  return BlogSettings;
}(flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/BasicsPage":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/BasicsPage']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/BasicsPage'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/ExtensionPage":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/ExtensionPage']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ExtensionPage'];

/***/ }),

/***/ "flarum/components/FieldSet":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/FieldSet']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/FieldSet'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/PermissionGrid":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/PermissionGrid']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/PermissionGrid'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/components/UploadImageButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['components/UploadImageButton']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/UploadImageButton'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/utils/saveSettings":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/saveSettings']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/saveSettings'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map