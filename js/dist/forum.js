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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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

/***/ "./src/common/Models/BlogMeta.js":
/*!***************************************!*\
  !*** ./src/common/Models/BlogMeta.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogMeta; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var BlogMeta = /*#__PURE__*/function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogMeta, _mixin);

  function BlogMeta() {
    return _mixin.apply(this, arguments) || this;
  }

  return BlogMeta;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  discussion: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('discussion'),
  featuredImage: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('featuredImage'),
  summary: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('summary'),
  isFeatured: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('isFeatured'),
  isSized: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('isSized'),
  isPendingReview: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('isPendingReview')
}));



/***/ }),

/***/ "./src/forum/compat.js":
/*!*****************************!*\
  !*** ./src/forum/compat.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @flarum/core/forum */ "@flarum/core/forum");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BlogItemSidebar_BlogAuthor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BlogItemSidebar/BlogAuthor */ "./src/forum/components/BlogItemSidebar/BlogAuthor.js");
/* harmony import */ var _components_BlogItemSidebar_BlogItemSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/BlogItemSidebar/BlogItemSidebar */ "./src/forum/components/BlogItemSidebar/BlogItemSidebar.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_1__["compat"], {
    "v17development/blog/components/BlogItemSidebar": _components_BlogItemSidebar_BlogItemSidebar__WEBPACK_IMPORTED_MODULE_3__["default"],
    "v17development/blog/components/BlogAuthor": _components_BlogItemSidebar_BlogAuthor__WEBPACK_IMPORTED_MODULE_2__["default"]
  });
});

/***/ }),

/***/ "./src/forum/components/BlogCategories.js":
/*!************************************************!*\
  !*** ./src/forum/components/BlogCategories.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogCategories; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);



var BlogCategories = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogCategories, _Component);

  function BlogCategories() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BlogCategories.prototype;

  _proto.init = function init() {
    this.blogCategories = app.forum.attribute('blogTags');
  };

  _proto.view = function view() {
    var _this = this;

    return m("div", {
      className: "BlogCategories"
    }, m("h3", null, app.translator.trans('v17development-flarum-blog.forum.categories')), this.blogCategories && this.blogCategories.map(function (tagId) {
      var tag = app.store.getById('tags', tagId);
      if (!tag) return null;
      var tags = []; // Add tag

      tags.push(_this.categoryItem(tag)); // Add tags

      app.store.all('tags').forEach(function (_tag) {
        if (_tag.isChild() && _tag.parent().id() === tag.id()) {
          tags.push(_this.categoryItem(_tag));
        }
      });
      return tags;
    }));
  } // Category item
  ;

  _proto.categoryItem = function categoryItem(tag) {
    return m("a", {
      href: app.route("blogCategory", {
        slug: tag.slug()
      }),
      className: "BlogCategories-item BlogCategories-item-" + tag.id() + " " + (tag.isChild() && app.forum.attribute('blogCategoryHierarchy') == true ? 'BlogCategories-item-child' : ''),
      config: m.route
    }, m("span", {
      className: tag.icon() === '' ? 'BlogCategories-item-colored' : '',
      style: {
        backgroundColor: tag.icon() === '' ? tag.color() : null
      }
    }, m("i", {
      className: tag.icon()
    })), tag.name());
  };

  return BlogCategories;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/BlogItemSidebar/BlogAuthor.js":
/*!************************************************************!*\
  !*** ./src/forum/components/BlogItemSidebar/BlogAuthor.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogAuthor; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__);






var BlogAuthor = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogAuthor, _Component);

  function BlogAuthor() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BlogAuthor.prototype;

  _proto.view = function view() {
    return m("div", {
      className: "FlarumBlog-Article-Author"
    }, m("div", {
      className: "FlarumBlog-Article-Author-background " + (this.props.loading ? 'FlarumBlog-Author-Ghost' : ''),
      style: {
        backgroundColor: this.props.article && this.props.article.user() ? this.props.article && this.props.article.user().color() : null
      }
    }), m("div", {
      className: "FlarumBlog-Article-Author-Avatar"
    }, this.props.article && this.props.article.user() ? flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(this.props.article.user()) : m("span", {
      className: "Avatar FlarumBlog-Author-Ghost"
    })), this.props.article && this.props.article.user() && m("div", {
      className: "FlarumBlog-Article-Author-Info"
    }, m("span", {
      className: "FlarumBlog-Article-Author-Name"
    }, this.props.article.user().displayName()), m("p", {
      className: "FlarumBlog-Article-Author-Bio"
    }, this.props.article.user().bio && this.props.article.user().bio()), m("ul", {
      className: "FlarumBlog-Article-Author-Extended"
    }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(this.items().toArray()))), this.props.loading && m("div", null, m("span", {
      className: "FlarumBlog-Article-Author-Name FlarumBlog-Author-Ghost"
    }, "\xA0"), m("p", {
      className: "FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost"
    }, "\xA0"), m("p", {
      className: "FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost"
    }, "\xA0"), m("p", {
      className: "FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost"
    }, "\xA0")));
  };

  _proto.items = function items() {
    return new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();
  };

  return BlogAuthor;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/BlogItemSidebar/BlogItemSidebar.js":
/*!*****************************************************************!*\
  !*** ./src/forum/components/BlogItemSidebar/BlogItemSidebar.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogItemSidebar; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BlogAuthor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlogAuthor */ "./src/forum/components/BlogItemSidebar/BlogAuthor.js");
/* harmony import */ var _BlogCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BlogCategories */ "./src/forum/components/BlogCategories.js");







var BlogItemSidebar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogItemSidebar, _Component);

  function BlogItemSidebar() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BlogItemSidebar.prototype;

  _proto.view = function view() {
    return m("div", {
      className: "FlarumBlog-Article-Sidebar"
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(this.items().toArray())));
  };

  _proto.items = function items() {
    var itemlist = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();
    itemlist.add("author", _BlogAuthor__WEBPACK_IMPORTED_MODULE_4__["default"].component(this.props), 0);
    itemlist.add("categories", _BlogCategories__WEBPACK_IMPORTED_MODULE_5__["default"].component(this.props), 0);
    return itemlist;
  };

  return BlogItemSidebar;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/BlogPostController.js":
/*!****************************************************!*\
  !*** ./src/forum/components/BlogPostController.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogPostController; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/tags/components/TagDiscussionModal */ "flarum/tags/components/TagDiscussionModal");
/* harmony import */ var flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/DiscussionControls */ "flarum/utils/DiscussionControls");
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Modals_BlogPostSettingsModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modals/BlogPostSettingsModal */ "./src/forum/components/Modals/BlogPostSettingsModal.js");
/* harmony import */ var flarum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/EditPostComposer */ "flarum/components/EditPostComposer");
/* harmony import */ var flarum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/utils/extractText */ "flarum/utils/extractText");
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Modals_RenameArticleModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Modals/RenameArticleModal */ "./src/forum/components/Modals/RenameArticleModal.js");












var BlogPostController = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogPostController, _Component);

  function BlogPostController() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BlogPostController.prototype;

  _proto.init = function init() {
    this.loadedPost = false;
  };

  _proto.view = function view() {
    var _this = this;

    var article = this.props.article;
    var buttons = []; // Working for GlowingBlue version

    var LanguageDiscussionModal = flarum.extensions['fof-discussion-language'] && typeof flarum.extensions['fof-discussion-language'].components !== "undefined" ? flarum.extensions['fof-discussion-language'].components.LanguageDiscussionModal : null; // Rename article

    if (article.canRename()) {
      buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        className: 'Button',
        onclick: function onclick() {
          return app.modal.show(new _Modals_RenameArticleModal__WEBPACK_IMPORTED_MODULE_10__["default"]({
            article: article
          }));
        },
        icon: 'fas fa-pencil-alt',
        children: app.translator.trans('v17development-flarum-blog.forum.tools.rename_article')
      }));
    }

    var articlePost = article.firstPost() ? article.firstPost() : app.store.getById('posts', article.firstPostId()); // Edit article

    buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      className: 'Button',
      disabled: !articlePost || !articlePost.canEdit(),
      onclick: function onclick() {
        app.composer.load(new flarum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_8___default.a({
          post: articlePost
        }));
        app.composer.show();
      },
      icon: 'fas fa-edit',
      children: app.translator.trans('v17development-flarum-blog.forum.tools.edit_article')
    })); // Article settings

    buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      className: 'Button',
      onclick: function onclick() {
        return app.modal.show(new _Modals_BlogPostSettingsModal__WEBPACK_IMPORTED_MODULE_7__["default"]({
          article: article
        }));
      },
      icon: 'fas fa-cogs',
      children: app.translator.trans('v17development-flarum-blog.forum.tools.article_settings')
    })); // Update categories

    if (article.canTag()) {
      buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        className: 'Button',
        onclick: function onclick() {
          return app.modal.show(new flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_2___default.a({
            discussion: article
          }));
        },
        icon: 'fas fa-tag',
        children: app.translator.trans('v17development-flarum-blog.forum.tools.update_category')
      }));
    } // Approve article


    if (article.blogMeta() && article.blogMeta().isPendingReview()) {
      buttons.push(m("li", {
        className: "Dropdown-separator"
      }));
      buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        className: 'Button',
        disabled: !app.forum.attribute('canApproveBlogPosts'),
        onclick: function onclick() {
          article.blogMeta().save({
            isPendingReview: false
          }).then(function () {
            app.alerts.show(new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4___default.a({
              type: 'success',
              children: app.translator.trans('v17development-flarum-blog.forum.review_article.approve_article_approved')
            }));
          }, function (response) {
            _this.loading = false;

            _this.handleErrors(response);
          });
        },
        icon: 'fas fa-thumbs-up',
        children: app.translator.trans('v17development-flarum-blog.forum.review_article.approve_article')
      }));
    } // Language


    if (article.canChangeLanguage && article.canChangeLanguage() && LanguageDiscussionModal) {
      buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        children: app.translator.trans('fof-discussion-language.forum.discussion_controls.change_language_button'),
        icon: 'fas fa-globe',
        onclick: function onclick() {
          return app.modal.show(new LanguageDiscussionModal({
            discussion: article
          }));
        }
      }));
    }

    buttons.push(m("li", {
      className: "Dropdown-separator"
    })); // Lock article

    if (article.canLock()) {
      buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        className: 'Button',
        onclick: flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3___default.a.lockAction.bind(article),
        icon: "fas " + (article.isLocked() ? 'fa-comments' : 'fa-comment-slash'),
        children: article.isLocked() ? app.translator.trans('v17development-flarum-blog.forum.tools.enable_comments') : app.translator.trans('v17development-flarum-blog.forum.tools.disable_comments')
      }));
    } // Hide/show/delete


    if (article.canHide()) {
      // Article is hidden
      if (article.isHidden()) {
        // Recover article
        buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
          className: 'Button',
          onclick: flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3___default.a.restoreAction.bind(article),
          icon: 'fas fa-eye',
          children: app.translator.trans('v17development-flarum-blog.forum.tools.recover_article')
        })); // Delete article

        if (article.canDelete()) {
          buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
            className: 'Button',
            onclick: function onclick() {
              // Confirm deletion
              if (confirm(flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_9___default()(app.translator.trans('core.forum.discussion_controls.delete_confirmation')))) {
                // Redirect if the current page is an blog article
                if (app.history.getCurrent().name === 'blogArticle') {
                  if (app.previous) {
                    app.history.back();
                  } else {
                    m.route(app.route('blog'));
                  }
                }

                return article["delete"]().then(function () {
                  m.redraw();
                });
              }
            },
            icon: 'far fa-trash-alt',
            children: app.translator.trans('v17development-flarum-blog.forum.tools.delete_forever')
          }));
        }
      } else {
        // Hide article
        buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
          className: 'Button',
          onclick: flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3___default.a.hideAction.bind(article),
          icon: 'fas fa-eye-slash',
          children: app.translator.trans('v17development-flarum-blog.forum.tools.hide_article')
        }));
      }
    }

    return m("div", {
      className: "FlarumBlog-Article-Content-Edit-Button"
    }, m("div", {
      className: "FlarumBlog-Article-Content-Edit-Dropdown"
    }, flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      icon: 'fas fa-cog',
      label: 'Manage',
      buttonClassName: 'Button',
      menuClassName: 'Dropdown-menu--right',
      children: buttons,
      onshow: function onshow() {
        // Get post data to make sure they can edit the post
        if (articlePost && !articlePost.canEdit() && !_this.loadedPost) {
          _this.loadedPost = true;
          app.store.find('posts', article.firstPost() ? article.firstPost().id() : article.firstPostId()).then(function () {})["catch"](function () {}).then(function () {
            return m.redraw();
          });
        }
      }
    })));
  };

  return BlogPostController;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/LanguageDropdown/Language.js":
/*!***********************************************************!*\
  !*** ./src/forum/components/LanguageDropdown/Language.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Language; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);



var Language = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Language, _Component);

  function Language() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Language.prototype;

  _proto.init = function init() {
    this.languages = app.store.all('discussion-languages');
    this.options = this.languages.reduce(function (o, lang) {
      o[lang.code()] = m("span", null, m("i", {
        className: "fas fa-globe"
      }), " ", lang.name());
      return o;
    }, this.props.extra || {});
  };

  _proto.view = function view() {
    var _this$props = this.props,
        language = _this$props.language,
        uppercase = _this$props.uppercase;
    var name = language.name() || '';
    return m("span", null, m("i", {
      className: "fas fa-globe"
    }), "\xA0", uppercase ? name.toUpperCase() : name);
  };

  return Language;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/LanguageDropdown/LanguageDropdown.js":
/*!*******************************************************************!*\
  !*** ./src/forum/components/LanguageDropdown/LanguageDropdown.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LanguageDropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Language */ "./src/forum/components/LanguageDropdown/Language.js");






var LanguageDropdown = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LanguageDropdown, _Component);

  function LanguageDropdown() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = LanguageDropdown.prototype;

  _proto.init = function init() {
    this.languages = app.store.all('discussion-languages');
    this.options = this.languages.reduce(function (o, lang) {
      o[lang.code()] = m(_Language__WEBPACK_IMPORTED_MODULE_4__["default"], {
        language: lang
      });
      return o;
    }, this.props.extra || {});
  };

  _proto.view = function view() {
    var _this = this;

    var selected = this.props.selected;
    return flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      buttonClassName: 'Button',
      label: this.options[selected] || this.options[this.props["default"]],
      menuClassName: 'Dropdown-menu--right',
      children: Object.keys(this.options).map(function (key) {
        var isSelected = selected || 'any';
        var active = key === isSelected;
        return flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
          active: active,
          children: _this.options[key],
          icon: active ? 'fas fa-check' : true,
          onclick: function onclick() {
            return _this.props.onclick(key);
          }
        });
      })
    });
  };

  return LanguageDropdown;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/Modals/BlogPostSettingsModal.js":
/*!**************************************************************!*\
  !*** ./src/forum/components/Modals/BlogPostSettingsModal.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogPostSettingsModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4__);






var BlogPostSettingsModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogPostSettingsModal, _Modal);

  function BlogPostSettingsModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = BlogPostSettingsModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.isNew = this.props.article.blogMeta() ? false : true;
    this.meta = this.props.article.blogMeta() ? this.props.article.blogMeta() : app.store.createRecord('blogMeta');
    this.summary = m.prop(this.meta.summary() || '');
    this.featuredImage = m.prop(this.meta.featuredImage() || '');
    this.isFeatured = m.prop(this.meta.isFeatured() || false);
    this.isSized = m.prop(this.meta.isSized() || false);
    this.isPendingReview = m.prop(this.meta.isPendingReview() || false);
  };

  _proto.className = function className() {
    return 'Modal--small Support-Modal';
  };

  _proto.title = function title() {
    return 'Blog post settings';
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.fields().toArray()));
  };

  _proto.fields = function fields() {
    var _this = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();
    items.add('summary', m("div", {
      className: "Form-group"
    }, m("label", null, "Article summary:"), m("textarea", {
      className: "FormControl",
      style: {
        maxWidth: '100%',
        minWidth: '100%',
        width: '100%',
        minHeight: '120px'
      },
      value: this.summary(),
      placeholder: "Please enter a summary",
      oninput: m.withAttr('value', this.summary)
    }), m("small", null, "This summary will be visible on the blog overview page and will be used for SEO purposes.")), 30);
    items.add('image', m("div", {
      className: "Form-group"
    }, m("label", null, "Article image URL:"), m("input", {
      type: "text",
      className: "FormControl",
      value: this.featuredImage(),
      placeholder: "https://",
      oninput: m.withAttr('value', this.featuredImage)
    }), m("small", null, "Best image resolution for social media: 1200x630"), this.featuredImage() != "" && m("img", {
      src: this.featuredImage(),
      alt: this.props.article.title(),
      title: "Blog post image",
      width: "100%",
      style: {
        marginTop: '15px'
      }
    })), 30);
    items.add('sized', m("div", {
      className: "Form-group"
    }, flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      state: this.isSized() == true,
      onchange: function onchange(val) {
        _this.isSized(val);
      },
      children: [m("b", null, "Highlighted post"), m("div", {
        className: "helpText",
        style: {
          fontWeight: 500
        }
      }, "Give this post a big image on the blog overview page.")]
    })), -10);
    items.add('submit', m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: 'submit',
      className: 'Button Button--primary SupportModal-save',
      loading: this.loading,
      children: 'Update'
    })), -10);
    return items;
  };

  _proto.submitData = function submitData() {
    return {
      summary: this.summary(),
      featuredImage: this.featuredImage(),
      isFeatured: this.isFeatured(),
      isSized: this.isSized(),
      isPendingReview: this.isPendingReview(),
      relationships: this.isNew && {
        discussion: this.props.article
      }
    };
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;

    e.preventDefault();
    this.loading = true;
    this.meta.save(this.submitData()).then(function () {
      if (_this2.isNew) {
        _this2.props.article.pushData({
          relationships: {
            blogMeta: _this2.meta
          }
        });
      }

      _this2.hide();

      m.redraw();
    }, function (response) {
      _this2.loading = false;

      _this2.handleErrors(response);
    });
  };

  return BlogPostSettingsModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/Modals/RenameArticleModal.js":
/*!***********************************************************!*\
  !*** ./src/forum/components/Modals/RenameArticleModal.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RenameArticleModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_4__);






var RenameArticleModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RenameArticleModal, _Modal);

  function RenameArticleModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = RenameArticleModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.article = this.props.article;
    this.name = m.prop(this.article.title() || '');
    this.slug = m.prop(this.article.slug() || '');
    this.redirect = this.props.redirect;
  };

  _proto.className = function className() {
    return 'Modal--small Support-Modal';
  };

  _proto.title = function title() {
    return app.translator.trans('v17development-flarum-blog.forum.tools.rename_article');
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.fields().toArray()));
  };

  _proto.fields = function fields() {
    var _this = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();
    items.add('name', m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('v17development-flarum-blog.forum.article.title'), ":"), m("input", {
      className: "FormControl",
      placeholder: app.translator.trans('v17development-flarum-blog.forum.article.title'),
      value: this.name(),
      oninput: function oninput(e) {
        _this.name(e.target.value);

        _this.slug(Object(flarum_utils_string__WEBPACK_IMPORTED_MODULE_4__["slug"])(e.target.value));
      }
    })), 50);
    items.add('slug', m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('v17development-flarum-blog.forum.article.slug'), ":"), m("input", {
      className: "FormControl",
      placeholder: app.translator.trans('v17development-flarum-blog.forum.article.slug'),
      value: this.slug(),
      oninput: m.withAttr('value', this.slug)
    })), 40);
    items.add('submit', m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: 'submit',
      className: 'Button Button--primary SupportModal-save',
      loading: this.loading,
      children: 'Update'
    })), -10);
    return items;
  };

  _proto.submitData = function submitData() {
    return {
      title: this.name(),
      slug: this.slug()
    };
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;

    e.preventDefault();
    this.loading = true;
    this.article.save({
      title: this.name(),
      slug: this.slug()
    }).then(function () {
      _this2.hide(); // Redirect


      if (_this2.redirect) {
        var url = "/knowledgebase/" + _this2.article.id() + "-" + _this2.slug();

        m.route(url, true);
        window.history.replaceState(null, document.title, url);
      }
    }, function (response) {
      _this2.loading = false;

      _this2.handleErrors(response);
    });
  };

  return RenameArticleModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_BlogItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/BlogItem */ "./src/forum/pages/BlogItem.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/models/Discussion */ "flarum/models/Discussion");
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_BlogOverview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/BlogOverview */ "./src/forum/pages/BlogOverview.js");
/* harmony import */ var _utils_redirector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/redirector */ "./src/forum/utils/redirector.js");
/* harmony import */ var _common_Models_BlogMeta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Models/BlogMeta */ "./src/common/Models/BlogMeta.js");
/* harmony import */ var _utils_extendTagOverview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/extendTagOverview */ "./src/forum/utils/extendTagOverview.js");
/* harmony import */ var _utils_discussionRouting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/discussionRouting */ "./src/forum/utils/discussionRouting.js");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compat */ "./src/forum/compat.js");








 // Register Flarum Blog

app.initializers.add('v17development-flarum-blog', function (app) {
  app.routes.blog = {
    path: '/blog',
    component: _pages_BlogOverview__WEBPACK_IMPORTED_MODULE_3__["default"].component()
  };
  app.routes.blogCategory = {
    path: '/blog/category/:slug',
    component: _pages_BlogOverview__WEBPACK_IMPORTED_MODULE_3__["default"].component()
  };
  app.routes.blogArticle = {
    path: '/blog/:id',
    component: _pages_BlogItem__WEBPACK_IMPORTED_MODULE_0__["default"].component()
  };
  app.store.models.blogMeta = _common_Models_BlogMeta__WEBPACK_IMPORTED_MODULE_5__["default"];
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.blogMeta = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('blogMeta'); // Redirect discussions/tags to their blog post/overview

  Object(_utils_redirector__WEBPACK_IMPORTED_MODULE_4__["default"])(); // Extend tag overview.
  // Hide tags which are used as blog category

  Object(_utils_extendTagOverview__WEBPACK_IMPORTED_MODULE_6__["default"])(); // Make that blog articles have a blog route and not a discussion route

  Object(_utils_discussionRouting__WEBPACK_IMPORTED_MODULE_7__["default"])();
});
Object(_compat__WEBPACK_IMPORTED_MODULE_8__["default"])();

/***/ }),

/***/ "./src/forum/pages/BlogItem.js":
/*!*************************************!*\
  !*** ./src/forum/pages/BlogItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogItem; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/ReplyComposer */ "flarum/components/ReplyComposer");
/* harmony import */ var flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_PostStream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/PostStream */ "flarum/components/PostStream");
/* harmony import */ var flarum_components_PostStream__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PostStream__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_BlogPostController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BlogPostController */ "./src/forum/components/BlogPostController.js");
/* harmony import */ var _components_BlogItemSidebar_BlogItemSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BlogItemSidebar/BlogItemSidebar */ "./src/forum/components/BlogItemSidebar/BlogItemSidebar.js");









var BlogItem = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogItem, _Page);

  function BlogItem() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = BlogItem.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    app.setTitle(app.translator.trans('v17development-flarum-blog.forum.blog')); // Send history push

    app.history.push('blogArticle');
    this.bodyClass = 'BlogItemPage';
    this.loading = true;
    this.found = false;
    this.article = null; // this.posts = [];

    this.loadBlogItem();
  } // Load blog overview
  ;

  _proto.loadBlogItem = function loadBlogItem() {
    var preloadBlogOverview = app.preloadedApiDocument();

    if (preloadBlogOverview) {
      // We must wrap this in a setTimeout because if we are mounting this
      // component for the first time on page load, then any calls to m.redraw
      // will be ineffective and thus any configs (scroll code) will be run
      // before stuff is drawn to the page.
      setTimeout(this.show.bind(this, preloadBlogOverview), 0);
    } else {
      app.store.find('discussions', m.route.param('id').split('-')[0]).then(this.show.bind(this))["catch"](function () {
        m.redraw();
      });
    }

    m.lazyRedraw();
  } // Show blog post
  ;

  _proto.show = function show(article) {
    // Set article data
    this.article = article; // Update title

    app.setTitle(article.title() + " - " + app.translator.trans('v17development-flarum-blog.forum.blog'));
    this.loading = false;
    var includedPosts = [];

    if (article.payload && article.payload.included) {
      var articleId = article.id();
      includedPosts = article.payload.included.filter(function (record) {
        return record.type === 'posts' && record.relationships && record.relationships.discussion && record.relationships.discussion.data.id === articleId;
      }).map(function (record) {
        return app.store.getById('posts', record.id);
      }).sort(function (a, b) {
        return a.id() - b.id();
      }).slice(0, 20);
    }

    this.stream = new flarum_components_PostStream__WEBPACK_IMPORTED_MODULE_5___default.a({
      discussion: article,
      includedPosts: includedPosts
    });
    this.stream.on('positionChanged', this.positionChanged.bind(this));
    m.lazyRedraw();
  };

  _proto.view = function view() {
    var blogImage = this.article && this.article.blogMeta() && this.article.blogMeta().featuredImage() ? "url(" + this.article.blogMeta().featuredImage() + ")" : null;
    var articlePost = null;

    if (!this.loading && this.article) {
      articlePost = this.article.firstPost() ? this.article.firstPost() : app.store.getById('posts', this.article.firstPostId());
    }

    return m("div", {
      className: "FlarumBlogItem"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "FlarumBlog-ToolButtons"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button",
      onclick: function onclick() {
        if (app.previous && app.previous.props.routeName === "blog") {
          app.history.back();
        } else {
          m.route(app.route("blog"));
        }
      },
      icon: "fas fa-angle-left"
    }, app.translator.trans('v17development-flarum-blog.forum.return_to_overview'))), m("div", {
      className: "FlarumBlog-Article"
    }, m("div", {
      className: "FlarumBlog-Article-Container"
    }, m("div", {
      className: "FlarumBlog-Article-Content"
    }, m("div", {
      className: "FlarumBlog-Article-Image FlarumBlog-default-image " + (this.loading ? 'FlarumBlog-Article-GhostImage' : ''),
      style: {
        backgroundImage: blogImage,
        opacity: this.article && this.article.isHidden() ? 0.4 : null
      }
    }), this.article && app.session.user && (app.session.user.canEdit() || this.article.canRename() || this.article.posts() && this.article.posts()[0].canEdit()) && m(_components_BlogPostController__WEBPACK_IMPORTED_MODULE_6__["default"], {
      article: this.article
    }), m("div", {
      className: "FlarumBlog-Article-Categories"
    }, !this.loading && this.article && this.article.tags() && this.article.tags().map(function (tag) {
      return m("a", {
        href: app.route("blogCategory", {
          slug: tag.slug()
        }),
        config: m.route
      }, tag.name());
    }), this.loading && [0, 1].map(function () {
      return m("span", {
        className: "FlarumBlog-Article-GhostCategory"
      }, "Category");
    })), m("div", {
      className: "FlarumBlog-Article-Post"
    }, m("h3", {
      className: this.loading ? 'FlarumBlog-Article-GhostTitle' : null
    }, this.article ? this.article.title() : 'Ghost title', this.article && this.article.isHidden() && "(" + app.translator.trans('v17development-flarum-blog.forum.hidden') + ")"), this.loading && [0, 1, 2].map(function () {
      return m("div", null, m("p", {
        className: "FlarumBlog-Article-GhostParagraph"
      }, "\xA0"), m("p", {
        className: "FlarumBlog-Article-GhostParagraph"
      }, "\xA0"), m("p", {
        className: "FlarumBlog-Article-GhostParagraph"
      }, "\xA0"), m("p", null, "\xA0"));
    }), !this.loading && this.article.blogMeta() && this.article.blogMeta().isPendingReview() == true && m("div", {
      className: "Post"
    }, m("blockquote", {
      "class": "uncited",
      style: {
        fontSize: '16px'
      }
    }, m("div", null, m("span", {
      className: "far fa-clock",
      style: {
        marginRight: '5px'
      }
    }), " ", app.translator.trans('v17development-flarum-blog.forum.review_article.pending_review')))), !this.loading && articlePost && m(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3___default.a, {
      post: articlePost
    }))), m("div", {
      className: "FlarumBlog-Article-Comments"
    }, m("h4", null, app.translator.trans('v17development-flarum-blog.forum.comment_section.comments'), " (", this.article ? this.article.commentCount() - 1 : 0, ")"), !this.loading && this.article.isLocked && this.article.isLocked() && m("div", {
      className: "Post-body"
    }, m("blockquote", {
      "class": "uncited"
    }, m("div", null, m("span", {
      className: "far fa-lock",
      style: {
        marginRight: '5px'
      }
    }), " ", app.translator.trans('v17development-flarum-blog.forum.comment_section.locked')))), !this.loading && this.stream && this.stream.render())), m(_components_BlogItemSidebar_BlogItemSidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      article: this.article,
      loading: this.loading
    }))));
  };

  _proto.positionChanged = function positionChanged(startNumber, endNumber) {
    var article = this.article;

    if (app.session.user && endNumber > (article.lastReadPostNumber() || 0)) {
      article.save({
        lastReadPostNumber: endNumber
      });
      m.redraw();
    }
  };

  return BlogItem;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/pages/BlogOverview.js":
/*!*****************************************!*\
  !*** ./src/forum/pages/BlogOverview.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogOverview; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BlogCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogCategories */ "./src/forum/components/BlogCategories.js");
/* harmony import */ var _utils_BlogComposer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/BlogComposer */ "./src/forum/utils/BlogComposer.js");
/* harmony import */ var _utils_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/tooltip */ "./src/forum/utils/tooltip.js");
/* harmony import */ var _components_LanguageDropdown_LanguageDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LanguageDropdown/LanguageDropdown */ "./src/forum/components/LanguageDropdown/LanguageDropdown.js");









var BlogOverview = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogOverview, _Page);

  function BlogOverview() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = BlogOverview.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    app.setTitle(app.translator.trans('v17development-flarum-blog.forum.blog'));
    this.bodyClass = 'BlogOverviewPage';
    this.isLoading = true;
    this.featuredPosts = [];
    this.posts = [];
    this.hasMore = null;
    this.languages = app.store.all('discussion-languages');
    this.currentSelectedLanguage = m.route.param('lang') ? m.route.param('lang') : app.translator.locale; // Send history push

    app.history.push('blog');
    this.loadBlogOverview();
  } // Load blog overview
  ;

  _proto.loadBlogOverview = function loadBlogOverview() {
    var preloadBlogOverview = app.preloadedApiDocument();

    if (preloadBlogOverview) {
      // We must wrap this in a setTimeout because if we are mounting this
      // component for the first time on page load, then any calls to m.redraw
      // will be ineffective and thus any configs (scroll code) will be run
      // before stuff is drawn to the page.
      setTimeout(this.show.bind(this, preloadBlogOverview), 0);
    } else {
      this.reloadData();
    }

    m.lazyRedraw();
  };

  _proto.reloadData = function reloadData() {
    var q = "is:blog" + (m.route.param('slug') ? " tag:" + m.route.param('slug') : '');

    if (this.languages !== null && this.languages.length >= 1) {
      q += " language:" + this.currentSelectedLanguage;
    }

    app.store.find('discussions', {
      filter: {
        q: q
      },
      sort: '-createdAt'
    }).then(this.show.bind(this))["catch"](function () {
      m.redraw();
    });
  } // Show blog posts
  ;

  _proto.show = function show(articles) {
    if (articles.length === 0) {
      this.isLoading = false;
      m.lazyRedraw();
      return;
    }

    this.featuredPosts = articles.slice(0, 3);
    this.posts = articles.length >= 4 ? articles.slice(3, articles.length) : [];
    this.isLoading = false;
    m.lazyRedraw();
  };

  _proto.title = function title() {
    if (!m.route.param('slug')) {
      return m("h2", null, app.translator.trans('v17development-flarum-blog.forum.recent_posts'));
    }

    var tag = app.store.all('tags').filter(function (tag) {
      return tag.slug() === m.route.param('slug');
    });
    return m("h2", null, tag && tag[0] && tag[0].name(), m("small", null, " - ", m("a", {
      href: app.route("blog"),
      config: m.route
    }, app.translator.trans('v17development-flarum-blog.forum.return_to_overview'))));
  };

  _proto.view = function view() {
    var _this = this;

    return m("div", {
      className: "FlarumBlogOverview"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "BlogFeatured"
    }, m("div", {
      className: "BlogOverviewButtons"
    }, app.forum.attribute('canWriteBlogPosts') && m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button",
      onclick: function onclick() {
        return _this.newArticle();
      },
      icon: "fas fa-pencil"
    }, app.translator.trans('v17development-flarum-blog.forum.compose.write_article')), this.languages !== null && this.languages.length >= 1 && m(_components_LanguageDropdown_LanguageDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
      selected: this.currentSelectedLanguage,
      onclick: function onclick(language) {
        _this.currentSelectedLanguage = language;
        m.route(document.location.pathname, {
          lang: language
        });

        _this.reloadData();
      }
    })), this.title(), m("div", {
      style: {
        clear: 'both'
      }
    }), m("div", {
      className: "BlogFeatured-list"
    }, this.isLoading && [0, 1, 2].map(function () {
      return m("div", {
        className: "BlogFeatured-list-item BlogFeatured-list-item-ghost"
      }, m("div", {
        className: "BlogFeatured-list-item-details"
      }, m("h4", null, "\xA0"), m("div", {
        className: "data"
      }, m("span", null, m("i", {
        className: "far fa-wave"
      })))));
    }), !this.isLoading && this.featuredPosts.length >= 0 && this.featuredPosts.map(function (article) {
      var blogImage = article.blogMeta() && article.blogMeta().featuredImage() ? "url(" + article.blogMeta().featuredImage() + ")" : null;
      var blogTag = article.tags() ? article.tags().filter(function (tag) {
        return tag.isChild();
      }) : [];
      return m("a", {
        href: app.route("blogArticle", {
          id: article.id() + "-" + article.slug()
        }),
        className: "BlogFeatured-list-item FlarumBlog-default-image",
        style: {
          backgroundImage: blogImage
        },
        config: m.route
      }, m("div", {
        className: "BlogFeatured-list-item-top"
      }, blogTag[0] && m("span", null, blogTag[0].name()), article.isSticky() && m("span", null, m("i", {
        className: "fas fa-thumbtack"
      })), (article.blogMeta() && article.blogMeta().isPendingReview() == true || article.isHidden()) && m("span", null, m("i", {
        className: "fas fa-eye-slash"
      })), article.blogMeta() && article.blogMeta().isPendingReview() == true && m("span", {
        title: app.translator.trans('v17development-flarum-blog.forum.review_article.pending_review'),
        config: _utils_tooltip__WEBPACK_IMPORTED_MODULE_6__["default"].bind(_this),
        "data-placement": "bottom"
      }, m("i", {
        className: "far fa-clock"
      }), " ", app.translator.trans('v17development-flarum-blog.forum.review_article.pending_review_title'))), m("div", {
        className: "BlogFeatured-list-item-details"
      }, m("h4", null, article.title()), m("div", {
        className: "data"
      }, m("span", null, m("i", {
        className: "far fa-clock"
      }), " ", flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3___default()(article.createdAt())), m("span", null, m("i", {
        className: "far fa-user"
      }), " ", article.user() ? article.user().displayName() : '[Deleted]'), m("span", null, m("i", {
        className: "far fa-comment"
      }), " ", article.commentCount()))));
    }))), m("div", {
      className: "BlogScrubber"
    }, m("div", {
      className: "BlogList"
    }, this.isLoading && [false, false, true, false].map(function (state) {
      return m("div", {
        className: "BlogList-item BlogList-item-" + (state === true ? 'sized' : 'default') + " BlogList-item-ghost"
      }, m("div", {
        className: "BlogList-item-photo FlarumBlog-default-image"
      }), m("div", {
        className: "BlogList-item-content"
      }, m("h4", null, "\xA0"), m("p", null, "\xA0"), m("div", {
        className: "data"
      }, m("span", null, m("i", {
        className: "far fa-wave"
      })))));
    }), !this.isLoading && this.posts.length >= 1 && this.posts.map(function (article) {
      var blogImage = article.blogMeta() && article.blogMeta().featuredImage() ? "url(" + article.blogMeta().featuredImage() + ")" : null;
      var isSized = article.blogMeta() && article.blogMeta().isSized();
      var summary = article.blogMeta() && article.blogMeta().summary() ? article.blogMeta().summary() : "";
      return m("a", {
        href: app.route("blogArticle", {
          id: article.id() + "-" + article.slug()
        }),
        className: "BlogList-item BlogList-item-" + (isSized ? 'sized' : 'default'),
        config: m.route
      }, m("div", {
        className: "BlogList-item-photo FlarumBlog-default-image",
        style: {
          backgroundImage: blogImage
        }
      }), m("div", {
        className: "BlogList-item-content"
      }, m("h4", null, article.title(), (article.blogMeta() && article.blogMeta().isPendingReview() == true || article.isHidden()) && m("i", {
        className: "fas fa-eye-slash"
      }), article.blogMeta() && article.blogMeta().isPendingReview() == true && m("i", {
        className: "far fa-clock",
        title: app.translator.trans('v17development-flarum-blog.forum.review_article.pending_review'),
        config: _utils_tooltip__WEBPACK_IMPORTED_MODULE_6__["default"].bind(_this)
      })), m("p", null, summary), m("div", {
        className: "data"
      }, m("span", null, m("i", {
        className: "far fa-clock"
      }), " ", flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3___default()(article.createdAt())), m("span", null, m("i", {
        className: "far fa-user"
      }), " ", article.user() ? article.user().displayName() : '[Deleted]'), m("span", null, m("i", {
        className: "far fa-comment"
      }), " ", article.commentCount()))));
    }), !this.isLoading && this.featuredPosts.length > 0 && this.posts.length === 0 && m("p", {
      className: "FlarumBlog-reached-end"
    }, app.translator.trans('v17development-flarum-blog.forum.no_more_posts')), !this.isLoading && this.featuredPosts.length === 0 && this.posts.length === 0 && m("p", {
      className: "FlarumBlog-reached-end"
    }, app.translator.trans('v17development-flarum-blog.forum.category_empty'))), m("div", {
      className: "Sidebar"
    }, m(_components_BlogCategories__WEBPACK_IMPORTED_MODULE_4__["default"], null)))));
  };

  _proto.newArticle = function newArticle() {
    var component = new _utils_BlogComposer__WEBPACK_IMPORTED_MODULE_5__["default"]({
      user: app.session.user
    });
    var tags = [];
    app.forum.attribute('blogTags').forEach(function (tagId) {
      var tag = app.store.getById('tags', tagId);

      if (tag && tags.length === 0 && !tag.isChild()) {
        tags.push(tag);
      }
    }); // Update tags

    component.tags = tags;
    app.composer.load(component);
    app.composer.show();
  };

  return BlogOverview;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/utils/BlogComposer.js":
/*!*****************************************!*\
  !*** ./src/forum/utils/BlogComposer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogComposer; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionComposer */ "flarum/components/DiscussionComposer");
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1__);



var BlogComposer = /*#__PURE__*/function (_DiscussionComposer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogComposer, _DiscussionComposer);

  function BlogComposer() {
    return _DiscussionComposer.apply(this, arguments) || this;
  }

  var _proto = BlogComposer.prototype;

  _proto.onsubmit = function onsubmit() {
    this.loading = true;
    var data = this.data();
    app.store.createRecord('discussions').save(data).then(function (article) {
      app.composer.hide();
      m.route(app.route('blogArticle', {
        id: article.id() + '-' + article.slug()
      }));
    }, this.loaded.bind(this));
  };

  return BlogComposer;
}(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/utils/discussionRouting.js":
/*!**********************************************!*\
  !*** ./src/forum/utils/discussionRouting.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Save the original function before we override it
  var original_discussion_route = app.route.discussion;
  /**
   * Generate a URL to a discussion OR a Blog Article.
   *
   * CORE_CODE_OVERRIDE: This overrides the standard function from flarum/core.
   * The code is inspired from js/src/forum/routes.js and now handles different types of discussions.
   * It will try to keep the original function executed if the discussion being
   * processed isn't a blog article.
   *
   * @param {Discussion} discussion
   * @param {Integer} [near]
   * @return {String}
   */

  app.route.discussion = function (discussion, near) {
    var discussionRedirectEnabled = app.forum.attribute('blogRedirectsEnabled') === 'both' || app.forum.attribute('blogRedirectsEnabled') === 'discussions_only';
    var shouldRedirect = false;

    if (discussionRedirectEnabled && discussion.tags().length > 0) {
      var blogTags = app.forum.attribute('blogTags');
      var foundTags = discussion.tags().filter(function (tag) {
        return blogTags.indexOf(tag.id()) >= 0 || tag.parent() && blogTags.indexOf(tag.parent().id()) >= 0;
      });

      if (foundTags.length > 0) {
        shouldRedirect = true;
      }
    }

    if (shouldRedirect) {
      var slug = discussion.slug();
      return app.route('blogArticle', {
        id: discussion.id() + (slug.trim() ? '-' + slug : '')
      });
    } else {
      return original_discussion_route(discussion, near);
    }
  };
});

/***/ }),

/***/ "./src/forum/utils/extendTagOverview.js":
/*!**********************************************!*\
  !*** ./src/forum/utils/extendTagOverview.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return extendTagOverview; });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/tags/components/TagsPage */ "flarum/tags/components/TagsPage");
/* harmony import */ var flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_1__);


function extendTagOverview() {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function (markup) {
    var _this = this;

    if (app.forum.attribute('blogHideTags') == false) return markup; // Get knowledge base tag ID's

    var knowledgeBaseTags = app.forum.attribute('blogTags') || []; // Get tiles

    var tag_tiles = markup.children[1].children[1].children[0].children; // Map through the tiles and remove tiles that are part of the knowledge base 

    markup.children[1].children[1].children[0].children = tag_tiles.map(function (tile, i) {
      return knowledgeBaseTags.indexOf(_this.tags[i].id()) >= 0 ? null : tile;
    });
    return markup;
  });
}

/***/ }),

/***/ "./src/forum/utils/redirector.js":
/*!***************************************!*\
  !*** ./src/forum/utils/redirector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Redirect tag to blog category
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0___default.a.prototype, 'config', function () {
    var tag = this.currentTag();
    var tagRedirectEnabled = app.forum.attribute('blogRedirectsEnabled') === 'both' || app.forum.attribute('blogRedirectsEnabled') === 'tags_only'; // Only trigger when it's a tag page and the redirects are enabled

    if (tag && tagRedirectEnabled) {
      var blogTags = app.forum.attribute('blogTags'); // Tag is inside list

      if (blogTags.indexOf(tag.id()) >= 0 || tag.parent() && blogTags.indexOf(tag.parent().id()) >= 0) {
        m.route(app.route('blog'));
      }
    }
  }); // Redirect discussion to blog article

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'show', function (original, discussion) {
    var discussionRedirectEnabled = app.forum.attribute('blogRedirectsEnabled') === 'both' || app.forum.attribute('blogRedirectsEnabled') === 'discussions_only';

    if (discussionRedirectEnabled && discussion && discussion && discussion.tags().length > 0) {
      var blogTags = app.forum.attribute('blogTags');
      var foundTags = discussion.tags().filter(function (tag) {
        return blogTags.indexOf(tag.id()) >= 0 || tag.parent() && blogTags.indexOf(tag.parent().id()) >= 0;
      }); // Only redirect if the discussion has blog tags

      if (foundTags.length > 0) {
        // Redirect to blog article
        var url = app.route('blogArticle', {
          id: discussion.id() + "-" + discussion.slug()
        }); // Setting the 3rd argument to true replaces the current state in the browser history, that way the browser back button works as expected.

        m.route(url, null, true);
        return null;
      }
    }

    return original(discussion);
  });
});

/***/ }),

/***/ "./src/forum/utils/tooltip.js":
/*!************************************!*\
  !*** ./src/forum/utils/tooltip.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tooltip; });
function tooltip(element) {
  $(element).tooltip();
}

/***/ }),

/***/ "@flarum/core/forum":
/*!******************************!*\
  !*** external "flarum.core" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core;

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/DiscussionComposer":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionComposer']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionComposer'];

/***/ }),

/***/ "flarum/components/DiscussionPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionPage']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionPage'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/EditPostComposer":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/EditPostComposer']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/EditPostComposer'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

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

/***/ "flarum/components/PostStream":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/PostStream']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/PostStream'];

/***/ }),

/***/ "flarum/components/ReplyComposer":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/ReplyComposer']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ReplyComposer'];

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

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ }),

/***/ "flarum/models/Discussion":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['models/Discussion']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Discussion'];

/***/ }),

/***/ "flarum/tags/components/TagDiscussionModal":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['tags/components/TagDiscussionModal']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/components/TagDiscussionModal'];

/***/ }),

/***/ "flarum/tags/components/TagsPage":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['tags/components/TagsPage']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/components/TagsPage'];

/***/ }),

/***/ "flarum/utils/DiscussionControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['utils/DiscussionControls']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/DiscussionControls'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/extractText":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['utils/extractText']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/extractText'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ }),

/***/ "flarum/utils/string":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/string']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/string'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map