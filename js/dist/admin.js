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
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/admin/Components/Header/Header.js":
/*!***********************************************!*\
  !*** ./src/admin/Components/Header/Header.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);



var Header = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Header, _Component);

  function Header() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Header.prototype;

  _proto.view = function view() {
    return m("div", null, m("div", {
      className: "FlarumBlog-header"
    }, m("div", {
      className: "header-container"
    }, m("h2", null, "Flarum Blog"), m("p", null, "Adds a blog to your forum"), m("div", {
      className: "clear"
    }))), m("div", {
      className: "container"
    }, m("p", null, "Welcome to the Flarum Blog settings. If you have found a bug, have feedback or an idea, join the ", m("a", {
      href: "https://join.slack.com/t/v17dev/shared_invite/zt-g6ky1fd3-RreB9UB~636jL~QjDGfZHg"
    }, "V17 Development Slack workspace"), ". Also, for tips & tricks, check our ", m("a", {
      href: "https://community.v17.dev/knowledgebase/category/flarum-blog",
      target: "_blank"
    }, "knowledge base"), ". Do you want to contribute? Check the ", m("a", {
      href: "https://github.com/v17development/flarum-blog"
    }, "GitHub repository")), m("h2", {
      style: {
        marginTop: '25px'
      }
    }, "Blog settings")));
  };

  return Header;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/addPermissions.js":
/*!*************************************!*\
  !*** ./src/admin/addPermissions.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blogPermissions; });
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_0__);

function blogPermissions() {
  var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_0___default.a();
  items.add('writeArticles', {
    icon: 'fas fa-pencil-alt',
    label: "Write and edit blog articles",
    permission: 'blog.writeArticles'
  }, 100);
  items.add('autoApprovePosts', {
    icon: 'far fa-star',
    label: "Auto approve articles",
    permission: 'blog.autoApprovePosts'
  }, 90);
  items.add('approvePreview', {
    icon: 'far fa-thumbs-up',
    label: "Can approve blog articles",
    permission: 'blog.canApprovePosts'
  }, 90);
  return items;
}

/***/ }),

/***/ "./src/admin/addRoutes.js":
/*!********************************!*\
  !*** ./src/admin/addRoutes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_BlogSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/BlogSettings */ "./src/admin/pages/BlogSettings.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Main page
  app.routes.blog = {
    path: '/blog',
    component: _pages_BlogSettings__WEBPACK_IMPORTED_MODULE_0__["default"].component()
  };
});
;

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

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.blogCategoriesOriginal = app.data.settings.blog_tags ? app.data.settings.blog_tags.split("|") : [];
    this.blogCategories = app.data.settings.blog_tags ? app.data.settings.blog_tags.split("|") : [];
    this.isSaving = false;
    this.hasChanges = false;
  };

  _proto.title = function title() {
    return 'Select blog categories';
  };

  _proto.className = function className() {
    return 'Modal modal-dialog FlarumBlog-TagsModal';
  };

  _proto.content = function content() {
    var _this = this;

    return m("div", null, m("div", {
      className: "Modal-body"
    }, m("p", null, "Please select one or more tags that are considered blog tags. ", m("a", {
      href: app.forum.attribute('baseUrl') + "/blog",
      target: "_blank"
    }, "Visit your blog.")), m("table", {
      className: "FlarumBlog-TagsTable"
    }, m("thead", null, m("th", {
      width: "35"
    }), m("th", null, "Tag name"), m("th", {
      width: "50"
    })), m("tbody", null, app.store.all('tags').length === 0 && m("tr", null, m("td", {
      colspan: "3"
    }, "You currently have no tags.")), app.store.all('tags').map(function (obj) {
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
    }, this.hasChanges ? 'Save changes' : 'Close')));
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
      blog_tags: this.blogCategories.join('|')
    }).then(function () {
      app.alerts.show(new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3___default.a({
        type: 'success',
        children: app.translator.trans('core.admin.basics.saved_message')
      }));

      _this2.hide();
    })["catch"](function () {
      app.alerts.show(new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3___default.a({
        type: 'error',
        children: app.translator.trans('core.lib.error.generic_message')
      }));
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
/* harmony import */ var _addRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoutes */ "./src/admin/addRoutes.js");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/AdminNav */ "flarum/components/AdminNav");
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/AdminLinkButton */ "flarum/components/AdminLinkButton");
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_BasicsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/BasicsPage */ "flarum/components/BasicsPage");
/* harmony import */ var flarum_components_BasicsPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_BasicsPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/PermissionGrid */ "flarum/components/PermissionGrid");
/* harmony import */ var flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _addPermissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addPermissions */ "./src/admin/addPermissions.js");






 // import { knowledgeBasePermissions, supportTicketPermissions } from './addPermissions';

app.initializers.add('v17development-flarum-blog', function () {
  Object(_addRoutes__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Add home page option

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_BasicsPage__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'homePageItems', function (items) {
    items.add('v17development-flarum-blog', {
      path: '/blog',
      label: 'Blog'
    });
  }); // Add Admin navigation

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'items', function (items) {
    items.add('blog', flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      href: app.route('blog'),
      icon: 'fas fa-blog',
      children: 'Blog',
      description: 'Configure your forum\'s blog.'
    }));
  }); // Add addPermissions

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, 'permissionItems', function (items) {
    items.add('v17-development-blog', {
      label: "Blog",
      children: Object(_addPermissions__WEBPACK_IMPORTED_MODULE_6__["default"])().toArray()
    }, 80);
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
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/saveSettings */ "flarum/utils/saveSettings");
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Header/Header */ "./src/admin/Components/Header/Header.js");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/FieldSet */ "flarum/components/FieldSet");
/* harmony import */ var flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Modals_SelectCategoriesModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Modals/SelectCategoriesModal */ "./src/admin/components/Modals/SelectCategoriesModal.js");










var BlogSettings = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogSettings, _Page);

  function BlogSettings() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = BlogSettings.prototype;

  _proto.init = function init() {
    // Form
    this.hasChanges = false;
    this.isSaving = false; // Settings

    this.blogCategories = app.data.settings.blog_tags ? app.data.settings.blog_tags.split("|") : [];
    this.redirectsEnabled = app.data.settings.blog_redirects_enabled ? app.data.settings.blog_redirects_enabled : 'both';
    this.hideTagsInList = app.data.settings.blog_hide_tags ? app.data.settings.blog_hide_tags : true;
    this.allowComments = app.data.settings.blog_allow_comments ? app.data.settings.blog_allow_comments : true;
    this.requiresReviewOnPost = app.data.settings.blog_requires_review ? app.data.settings.blog_requires_review : false;
    this.addCategoryHierarchy = app.data.settings.blog_category_hierarchy ? app.data.settings.blog_category_hierarchy : true;
  };

  _proto.view = function view() {
    var _this = this;

    return m("div", {
      className: "BasicsPage FlarumBlog"
    }, _Components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"].component(), m("div", {
      className: "container"
    }, m("div", {
      className: "FlarumBlog-SelectCategories"
    }, this.blogCategories.length >= 1 ? "You have " + this.blogCategories.length + " categories selected" : 'No categories selected', m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "Button",
      onclick: function onclick() {
        app.modal.show(new _components_Modals_SelectCategoriesModal__WEBPACK_IMPORTED_MODULE_8__["default"]());
      }
    }, "Select blog categories")), flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      label: "Blog",
      children: [flarum_components_Switch__WEBPACK_IMPORTED_MODULE_7___default.a.component({
        state: this.allowComments == true,
        onchange: function onchange(val) {
          _this.allowComments = val;
          _this.hasChanges = true;
        },
        children: [m("b", null, "Allow comments"), m("div", {
          className: "helpText"
        }, "By default, allow comments on blog posts. When disabled, it can be enabled individually per blog post. ", m("b", null, "Note:"), " Changing this setting will not affect pre-existing blog posts.")]
      }), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_7___default.a.component({
        state: this.requiresReviewOnPost == true,
        onchange: function onchange(val) {
          _this.requiresReviewOnPost = val;
          _this.hasChanges = true;
        },
        children: [m("b", null, "Blog posts requires review"), m("div", {
          className: "helpText"
        }, "When posting an article, it will not be visible directly and needs to be reviewed by a moderator.")]
      })]
    }), flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      label: "Categories",
      children: [flarum_components_Switch__WEBPACK_IMPORTED_MODULE_7___default.a.component({
        state: this.hideTagsInList == true,
        onchange: function onchange(val) {
          _this.hideTagsInList = val;
          _this.hasChanges = true;
        },
        children: [m("b", null, "Hide tags in taglist"), m("div", {
          className: "helpText"
        }, "When enabled, this extension will hide the blog tags from your homepage. After changing this setting, clear the cache of your forum.")]
      }), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_7___default.a.component({
        state: this.addCategoryHierarchy == true,
        onchange: function onchange(val) {
          _this.addCategoryHierarchy = val;
          _this.hasChanges = true;
        },
        children: [m("b", null, "Show tag hierarchy"), m("div", {
          className: "helpText"
        }, "Add spacing to child-categories and give the category-list a hierarchy.")]
      })]
    }), flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      label: "Redirects",
      children: [flarum_components_Switch__WEBPACK_IMPORTED_MODULE_7___default.a.component({
        state: this.redirectsEnabled === 'both' || this.redirectsEnabled === 'discussions_only',
        onchange: function onchange(val) {
          if (val) {
            // Add
            if (_this.redirectsEnabled === 'tags_only') {
              _this.redirectsEnabled = 'both';
            } else if (_this.redirectsEnabled === 'none') {
              _this.redirectsEnabled = 'discussions_only';
            }
          } else {
            if (_this.redirectsEnabled === 'discussions_only') {
              _this.redirectsEnabled = 'none';
            } else {
              _this.redirectsEnabled = 'tags_only';
            }
          }

          _this.hasChanges = true;
        },
        children: [m("b", null, "Redirect blog articles"), m("div", {
          className: "helpText"
        }, "When enabled, this extension will redirect original discussion URLs to their blog URL.")]
      }), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_7___default.a.component({
        state: this.redirectsEnabled === 'both' || this.redirectsEnabled === 'tags_only',
        onchange: function onchange(val) {
          if (val) {
            // Add
            if (_this.redirectsEnabled === 'discussions_only') {
              _this.redirectsEnabled = 'both';
            } else if (_this.redirectsEnabled === 'none') {
              _this.redirectsEnabled = 'tags_only';
            }
          } else {
            if (_this.redirectsEnabled === 'tags_only') {
              _this.redirectsEnabled = 'none';
            } else {
              _this.redirectsEnabled = 'discussions_only';
            }
          }

          _this.hasChanges = true;
        },
        children: [m("b", null, "Redirect blog tags"), m("div", {
          className: "helpText"
        }, "When enabled, this extension redirects blog tag URLs to the blog category URL.")]
      })]
    }), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      loading: this.isSaving,
      className: "Button Button--primary",
      onclick: function onclick() {
        return _this.save();
      },
      disabled: !this.hasChanges
    }, app.translator.trans('core.admin.basics.submit_button'))));
  }
  /**
   * Save data
   */
  ;

  _proto.save = function save() {
    var _this2 = this;

    this.isSaving = true;
    flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2___default()({
      blog_redirects_enabled: this.redirectsEnabled,
      blog_hide_tags: this.hideTagsInList,
      blog_requires_review: this.requiresReviewOnPost,
      blog_allow_comments: this.allowComments,
      blog_category_hierarchy: this.addCategoryHierarchy
    }).then(function () {
      _this2.hasChanges = false; // Show saved message

      app.alerts.show(_this2.successAlert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3___default.a({
        type: 'success',
        children: app.translator.trans('core.admin.basics.saved_message')
      }));
    })["catch"](function () {}).then(function () {
      _this2.isSaving = false;
      m.redraw();
    });
  };

  return BlogSettings;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/components/AdminLinkButton":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/AdminLinkButton']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminLinkButton'];

/***/ }),

/***/ "flarum/components/AdminNav":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/AdminNav']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminNav'];

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

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

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

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

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