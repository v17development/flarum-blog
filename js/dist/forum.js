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
  discussion: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne("discussion"),
  featuredImage: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("featuredImage"),
  summary: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("summary"),
  isFeatured: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("isFeatured"),
  isSized: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("isSized"),
  isPendingReview: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("isPendingReview")
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
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @flarum/core/forum */ "@flarum/core/forum");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BlogItemSidebar_BlogAuthor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/BlogItemSidebar/BlogAuthor */ "./src/forum/components/BlogItemSidebar/BlogAuthor.js");
/* harmony import */ var _components_BlogItemSidebar_BlogItemSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BlogItemSidebar/BlogItemSidebar */ "./src/forum/components/BlogItemSidebar/BlogItemSidebar.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object.assign(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_0__["compat"], {
    "v17development/blog/components/BlogItemSidebar": _components_BlogItemSidebar_BlogItemSidebar__WEBPACK_IMPORTED_MODULE_2__["default"],
    "v17development/blog/components/BlogAuthor": _components_BlogItemSidebar_BlogAuthor__WEBPACK_IMPORTED_MODULE_1__["default"]
  });
});

/***/ }),

/***/ "./src/forum/components/ArticleSubscription.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/ArticleSubscription.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticleSubscription; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/extractText */ "flarum/utils/extractText");
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__);






var ArticleSubscription = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ArticleSubscription, _Component);

  function ArticleSubscription() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ArticleSubscription.prototype;

  _proto.view = function view() {
    var currentSubscriptionState = this.attrs.discussion.subscription();
    var preferences = app.session.user.preferences();
    var notifyEmail = preferences["notify_newPost_email"];
    var notifyTooltip = flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default()(app.translator.trans(notifyEmail ? "flarum-subscriptions.forum.sub_controls.notify_email_tooltip" : "flarum-subscriptions.forum.sub_controls.notify_alert_tooltip"));
    var title = app.translator.trans("flarum-subscriptions.forum.sub_controls.not_following_button");
    var icon = "far fa-star"; // Following

    if (currentSubscriptionState === "follow") {
      title = app.translator.trans("flarum-subscriptions.forum.sub_controls.following_button");
      icon = "fas fa-star";
    }

    return m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4___default.a, {
      text: notifyTooltip,
      position: "bottom"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button BlogArticleSubscription SubscriptionMenu-button--" + currentSubscriptionState,
      icon: icon,
      onclick: this.saveSubscription.bind(this, this.attrs.discussion, ["follow", "ignore"].indexOf(currentSubscriptionState) !== -1 ? null : "follow")
    }, title));
  };

  _proto.saveSubscription = function saveSubscription(discussion, subscription) {
    discussion.save({
      subscription: subscription
    });
  };

  return ArticleSubscription;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__);




var BlogCategories = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogCategories, _Component);

  function BlogCategories() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BlogCategories.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.blogCategories = app.forum.attribute("blogTags");
  };

  _proto.view = function view() {
    var _this = this;

    return m("div", {
      className: "BlogCategories BlogSideWidget"
    }, m("h3", null, app.translator.trans("v17development-flarum-blog.forum.categories")), this.blogCategories && this.blogCategories.map(function (tagId) {
      var tag = app.store.getById("tags", tagId);
      if (!tag) return null;
      var tags = [];
      var showSubTags = _this.blogCategories.length === 1 || tag.slug() === m.route.param("slug"); // Add tags

      app.store.all("tags").forEach(function (_tag) {
        if (_tag.isChild() && _tag.parent() === tag) {
          if (_tag.slug() === m.route.param("slug")) {
            showSubTags = true;
          }

          tags.push(_this.categoryItem(_tag));
        }
      });
      return showSubTags ? [_this.categoryItem(tag)].concat(tags) : _this.categoryItem(tag);
    }));
  } // Category item
  ;

  _proto.categoryItem = function categoryItem(tag) {
    return m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: app.route("blogCategory", {
        slug: tag.slug()
      }),
      className: "BlogSideWidget-item BlogSideWidget-item-" + tag.id() + " " + (tag.isChild() && app.forum.attribute("blogCategoryHierarchy") == true ? "BlogSideWidget-item-child" : "")
    }, m("span", {
      className: tag.icon() === "" ? "BlogSideWidget-item-colored" : "",
      style: {
        backgroundColor: tag.icon() === "" ? tag.color() : null
      }
    }, m("i", {
      className: tag.icon()
    })), tag.name());
  };

  return BlogCategories;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_5__);







var BlogAuthor = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogAuthor, _Component);

  function BlogAuthor() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BlogAuthor.prototype;

  _proto.view = function view() {
    var author = !this.attrs.loading ? this.attrs.article ? this.attrs.article.user() : this.attrs.user : null;
    return m("div", {
      className: "FlarumBlog-Article-Author"
    }, m("div", {
      className: "FlarumBlog-Article-Author-background " + (this.attrs.loading ? "FlarumBlog-Author-Ghost" : ""),
      style: {
        backgroundColor: author && author.color() ? author.color() : null
      }
    }), m("div", {
      className: "FlarumBlog-Article-Author-Avatar"
    }, author ? m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: app.route("user", {
        username: author.username()
      })
    }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(author)) : m("span", {
      className: "Avatar FlarumBlog-Author-Ghost"
    })), author && m("div", {
      className: "FlarumBlog-Article-Author-Info"
    }, m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: app.route("user", {
        username: author.username()
      }),
      className: "FlarumBlog-Article-Author-Name"
    }, author.displayName()), m("p", {
      className: "FlarumBlog-Article-Author-Bio"
    }, author.bio && author.bio()), m("ul", {
      className: "FlarumBlog-Article-Author-Extended"
    }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(this.items().toArray()))), this.attrs.loading && m("div", null, m("span", {
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
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BlogAuthor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlogAuthor */ "./src/forum/components/BlogItemSidebar/BlogAuthor.js");
/* harmony import */ var _BlogCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BlogCategories */ "./src/forum/components/BlogCategories.js");
/* harmony import */ var _ForumNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ForumNav */ "./src/forum/components/ForumNav.js");








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
    itemlist.add("author", _BlogAuthor__WEBPACK_IMPORTED_MODULE_4__["default"].component(this.attrs), 0);
    itemlist.add("categories", _BlogCategories__WEBPACK_IMPORTED_MODULE_5__["default"].component(this.attrs), 0);
    itemlist.add("nav", _ForumNav__WEBPACK_IMPORTED_MODULE_6__["default"].component(this.attrs), 0);
    return itemlist;
  };

  return BlogItemSidebar;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
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

    var article = this.attrs.article;
    var buttons = []; // Working for GlowingBlue version

    var LanguageDiscussionModal = flarum.extensions["fof-discussion-language"] && typeof flarum.extensions["fof-discussion-language"].components !== "undefined" ? flarum.extensions["fof-discussion-language"].components.LanguageDiscussionModal : null; // Rename article

    if (article.canRename()) {
      buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        className: "Button",
        onclick: function onclick() {
          return app.modal.show(_Modals_RenameArticleModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
            article: article
          });
        },
        icon: "fas fa-pencil-alt"
      }, app.translator.trans("v17development-flarum-blog.forum.tools.rename_article")));
    }

    var articlePost = article.firstPost() ? article.firstPost() : app.store.getById("posts", article.firstPostId()); // Edit article

    buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      className: "Button",
      disabled: !articlePost || !articlePost.canEdit(),
      onclick: function onclick() {
        app.composer.load(flarum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_8___default.a, {
          post: articlePost
        });
        app.composer.show();
      },
      icon: "fas fa-edit"
    }, app.translator.trans("v17development-flarum-blog.forum.tools.edit_article"))); // Article settings

    buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      className: "Button",
      onclick: function onclick() {
        return app.modal.show(_Modals_BlogPostSettingsModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
          article: article
        });
      },
      icon: "fas fa-cogs"
    }, app.translator.trans("v17development-flarum-blog.forum.tools.article_settings"))); // Update categories

    if (article.canTag()) {
      buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        className: "Button",
        onclick: function onclick() {
          return app.modal.show(flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_2___default.a, {
            discussion: article
          });
        },
        icon: "fas fa-tag"
      }, app.translator.trans("v17development-flarum-blog.forum.tools.update_category")));
    } // Approve article


    if (article.blogMeta() && article.blogMeta().isPendingReview()) {
      buttons.push(m("li", {
        className: "Dropdown-separator"
      }));
      buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        className: "Button",
        disabled: !app.forum.attribute("canApproveBlogPosts"),
        onclick: function onclick() {
          article.blogMeta().save({
            isPendingReview: false
          }).then(function () {
            app.alerts.show(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4___default.a, {
              type: "success"
            }, app.translator.trans("v17development-flarum-blog.forum.review_article.approve_article_approved"));
          }, function (response) {
            _this.loading = false;

            _this.handleErrors(response);
          });
        },
        icon: "fas fa-thumbs-up"
      }, app.translator.trans("v17development-flarum-blog.forum.review_article.approve_article")));
    } // Language


    if (article.canChangeLanguage && article.canChangeLanguage() && LanguageDiscussionModal) {
      buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        icon: "fas fa-globe",
        onclick: function onclick() {
          return app.modal.show(LanguageDiscussionModal, {
            discussion: article
          });
        }
      }, app.translator.trans("fof-discussion-language.forum.discussion_controls.change_language_button")));
    }

    buttons.push(m("li", {
      className: "Dropdown-separator"
    })); // Lock article

    if (article.canLock()) {
      buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        className: "Button",
        onclick: flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3___default.a.lockAction.bind(article),
        icon: "fas " + (article.isLocked() ? "fa-comments" : "fa-comment-slash")
      }, article.isLocked() ? app.translator.trans("v17development-flarum-blog.forum.tools.enable_comments") : app.translator.trans("v17development-flarum-blog.forum.tools.disable_comments")));
    } // Hide/show/delete


    if (article.canHide()) {
      // Article is hidden
      if (article.isHidden()) {
        // Recover article
        buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
          className: "Button",
          onclick: flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3___default.a.restoreAction.bind(article),
          icon: "fas fa-eye"
        }, app.translator.trans("v17development-flarum-blog.forum.tools.recover_article"))); // Delete article

        if (article.canDelete()) {
          buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
            className: "Button",
            onclick: function onclick() {
              // Confirm deletion
              if (confirm(flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_9___default()(app.translator.trans("core.forum.discussion_controls.delete_confirmation")))) {
                // Redirect if the current page is an blog article
                if (app.history.getCurrent().name === "blogArticle") {
                  if (app.previous) {
                    app.history.back();
                  } else {
                    m.route.set(app.route("blog"));
                  }
                }

                return article["delete"]().then(function () {
                  m.redraw();
                });
              }
            },
            icon: "far fa-trash-alt"
          }, app.translator.trans("v17development-flarum-blog.forum.tools.delete_forever")));
        }
      } else {
        // Hide article
        buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
          className: "Button",
          onclick: flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3___default.a.hideAction.bind(article),
          icon: "fas fa-eye-slash"
        }, app.translator.trans("v17development-flarum-blog.forum.tools.hide_article")));
      }
    }

    return m("div", {
      className: "FlarumBlog-Article-Content-Edit-Button"
    }, m("div", {
      className: "FlarumBlog-Article-Content-Edit-Dropdown"
    }, flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      icon: "fas fa-cog",
      label: "Manage",
      buttonClassName: "Button",
      menuClassName: "Dropdown-menu--right",
      onshow: function onshow() {
        // Get post data to make sure they can edit the post
        if (articlePost && !articlePost.canEdit() && !_this.loadedPost) {
          _this.loadedPost = true;
          app.store.find("posts", article.firstPost() ? article.firstPost().id() : article.firstPostId()).then(function () {})["catch"](function () {}).then(function () {
            return m.redraw();
          });
        }
      }
    }, buttons)));
  };

  return BlogPostController;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/Composer/Composer.js":
/*!***************************************************!*\
  !*** ./src/forum/components/Composer/Composer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Composer; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/ComposerBody */ "flarum/components/ComposerBody");
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ComposerPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ComposerPreview */ "./src/forum/components/Composer/ComposerPreview.js");






var Composer = /*#__PURE__*/function (_ComposerBody) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Composer, _ComposerBody);

  function Composer() {
    return _ComposerBody.apply(this, arguments) || this;
  }

  var _proto = Composer.prototype;

  _proto.oninit = function oninit(vnode) {
    _ComposerBody.prototype.oninit.call(this, vnode);

    this.previewContent = false;
  } // Render
  ;

  _proto.view = function view() {
    var _this = this;

    var hasContent = this.composer.fields.content() && this.composer.fields.content() !== "";
    var loading = this.loading || this.attrs.disabled;
    return m("div", {
      className: "Flarum-Blog-Composer " + (loading ? "Flarum-Blog-Composer-Loading" : "")
    }, m("div", {
      className: "Flarum-Blog-Composer-tabs"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: !this.previewContent && "AricleComposerButtonSelected",
      onclick: function onclick() {
        return _this.previewContent = false;
      }
    }, app.translator.trans("v17development-flarum-blog.forum.composer.write")), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: this.previewContent && "AricleComposerButtonSelected",
      onclick: function onclick() {
        return _this.previewContent = true;
      }
    }, app.translator.trans("v17development-flarum-blog.forum.composer.view"))), m("div", {
      className: "Composer Flarum-Blog-Composer-body " + (this.previewContent ? "Flarum-Blog-Composer-HideEditor" : "")
    }, this.previewContent && m("div", {
      className: "Flarum-Blog-Composer-preview"
    }, !hasContent && app.translator.trans("v17development-flarum-blog.forum.composer.nothing_to_preview"), m(_ComposerPreview__WEBPACK_IMPORTED_MODULE_4__["default"], {
      content: this.composer.fields.content()
    })), flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      submitLabel: this.attrs.submitLabel || app.translator.trans("core.forum.composer_edit.submit_button"),
      placeholder: this.attrs.placeholder,
      disabled: loading,
      composer: this.composer,
      preview: this.jumpToPreview && this.jumpToPreview.bind(this),
      onchange: this.composer.fields.content,
      onsubmit: this.onsubmit.bind(this),
      value: this.composer.fields.content()
    })));
  } // Submit trigger
  ;

  _proto.onsubmit = function onsubmit() {
    if (this.attrs.onsubmit) {
      this.attrs.onsubmit();
    }
  };

  return Composer;
}(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/Composer/ComposerPreview.js":
/*!**********************************************************!*\
  !*** ./src/forum/components/Composer/ComposerPreview.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ComposerPreview; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);



var ComposerPreview = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ComposerPreview, _Component);

  function ComposerPreview() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ComposerPreview.prototype;

  _proto.view = function view() {
    return m("div", null);
  };

  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);

    s9e.TextFormatter.preview(vnode.attrs.content || "", vnode.dom);
  };

  return ComposerPreview;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/ForumNav.js":
/*!******************************************!*\
  !*** ./src/forum/components/ForumNav.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForumNav; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/SelectDropdown */ "flarum/components/SelectDropdown");
/* harmony import */ var flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__);





var ForumNav = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ForumNav, _Component);

  function ForumNav() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ForumNav.prototype;

  _proto.view = function view() {
    return m("div", {
      className: "BlogForumNav BlogSideWidget"
    }, m("h3", null, app.translator.trans("v17development-flarum-blog.forum.forum_nav")), m("nav", {
      className: "IndexPage-nav sideNav"
    }, m(flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      buttonClassName: "Button",
      className: "App-titleControl"
    }, this.navItems().toArray())));
  };

  _proto.navItems = function navItems() {
    var items = flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.navItems(); // We want the active screen to show up in the top dropdown when on mobile.

    if (app.screen() !== "phone") {
      items.remove("blog");
    }

    return items;
  };

  return ForumNav;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);



var Language = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Language, _Component);

  function Language() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Language.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.languages = app.store.all("discussion-languages");
    this.options = this.languages.reduce(function (o, lang) {
      o[lang.code()] = m("span", null, m("i", {
        className: "fas fa-globe"
      }), " ", lang.name());
      return o;
    }, this.attrs.extra || {});
  };

  _proto.view = function view() {
    var _this$attrs = this.attrs,
        language = _this$attrs.language,
        uppercase = _this$attrs.uppercase;
    var name = language.name() || "";
    return m("span", null, m("i", {
      className: "fas fa-globe"
    }), "\xA0", uppercase ? name.toUpperCase() : name);
  };

  return Language;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
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

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.languages = app.store.all("discussion-languages");
    this.options = this.languages.reduce(function (o, lang) {
      o[lang.code()] = m(_Language__WEBPACK_IMPORTED_MODULE_4__["default"], {
        language: lang
      });
      return o;
    }, this.attrs.extra || {});
  };

  _proto.view = function view() {
    var _this = this;

    var selected = this.attrs.selected;
    return flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      buttonClassName: 'Button',
      label: this.options[selected] || this.options[this.attrs["default"]]
    }, Object.keys(this.options).map(function (key) {
      var defaultSelected;

      if (app.forum.attribute('fof-discussion-language.composerLocaleDefault')) {
        defaultSelected = 'any';
      } else {
        defaultSelected = app.translator.formatter.locale;
      }

      var isSelected = selected || defaultSelected;
      var active = key === isSelected;
      return flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        active: active,
        icon: active ? 'fas fa-check' : true,
        onclick: function onclick() {
          return _this.attrs.onclick(key);
        }
      }, _this.options[key]);
    }));
  };

  return LanguageDropdown;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5__);







var BlogPostSettingsModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogPostSettingsModal, _Modal);

  function BlogPostSettingsModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = BlogPostSettingsModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    if (this.attrs.article) {
      this.meta = this.attrs.article && this.attrs.article.blogMeta() ? this.attrs.article.blogMeta() : app.store.createRecord("blogMeta");
    } else {
      this.meta = this.attrs.meta ? this.attrs.meta : app.store.createRecord("blogMeta");
    }

    this.isNew = !this.meta.exists;
    this.summary = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()(this.meta.summary() || "");
    this.featuredImage = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()(this.meta.featuredImage() || "");
    this.isFeatured = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()(this.meta.isFeatured() || false);
    this.isSized = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()(this.meta.isSized() || false);
    this.isPendingReview = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()(this.meta.isPendingReview() || false);
  };

  _proto.className = function className() {
    return "Modal--small Support-Modal";
  };

  _proto.title = function title() {
    return "Blog post settings";
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
    items.add("summary", m("div", {
      className: "Form-group"
    }, m("label", null, "Article summary:"), m("textarea", {
      className: "FormControl",
      style: {
        maxWidth: "100%",
        minWidth: "100%",
        width: "100%",
        minHeight: "120px"
      },
      bidi: this.summary,
      placeholder: "Please enter a summary"
    }), m("small", null, "This summary will be visible on the blog overview page and will be used for SEO purposes.")), 30);
    items.add("image", m("div", {
      className: "Form-group"
    }, m("label", null, "Article image URL:"), m("input", {
      type: "text",
      className: "FormControl",
      bidi: this.featuredImage,
      placeholder: "https://"
    }), m("small", null, "Best image resolution for social media: 1200x630"), this.featuredImage() != "" && m("img", {
      src: this.featuredImage(),
      alt: "Article image",
      title: "Blog post image",
      width: "100%",
      style: {
        marginTop: "15px"
      }
    })), 30);
    items.add("sized", m("div", {
      className: "Form-group"
    }, flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      state: this.isSized() == true,
      onchange: function onchange(val) {
        _this.isSized(val);
      }
    }, [m("b", null, "Highlighted post"), m("div", {
      className: "helpText",
      style: {
        fontWeight: 500
      }
    }, "Give this post a big image on the blog overview page.")])), -10);
    items.add("submit", m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: "submit",
      className: "Button Button--primary SupportModal-save",
      loading: this.loading
    }, "Update")), -10);
    return items;
  };

  _proto.submitData = function submitData() {
    return {
      summary: this.summary(),
      featuredImage: this.featuredImage(),
      isFeatured: this.isFeatured(),
      isSized: this.isSized(),
      isPendingReview: this.isPendingReview(),
      relationships: this.isNew && !this.attrs.isComposer ? {
        discussion: this.attrs.article
      } : null
    };
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;

    e.preventDefault(); // Submit data

    if (this.attrs.onsubmit) {
      // Update attributes
      this.meta.pushData({
        attributes: this.submitData()
      }); // Push

      this.attrs.onsubmit(this.meta);
      this.hide();
      return;
    }

    this.loading = true;
    this.meta.save(this.submitData()).then(function () {
      if (_this2.attrs.article) {
        _this2.attrs.article.pushData({
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
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4__);






var RenameArticleModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RenameArticleModal, _Modal);

  function RenameArticleModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = RenameArticleModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.article = this.attrs.article;
    this.name = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()(this.article.title() || "");
    this.redirect = this.attrs.redirect;
  };

  _proto.className = function className() {
    return "Modal--small Support-Modal";
  };

  _proto.title = function title() {
    return app.translator.trans("v17development-flarum-blog.forum.tools.rename_article");
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.fields().toArray()));
  };

  _proto.fields = function fields() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();
    items.add("name", m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans("v17development-flarum-blog.forum.article.title"), ":"), m("input", {
      className: "FormControl",
      placeholder: app.translator.trans("v17development-flarum-blog.forum.article.title"),
      bidi: this.name
    })), 50);
    items.add("submit", m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: "submit",
      className: "Button Button--primary SupportModal-save",
      loading: this.loading
    }, "Update")), -10);
    return items;
  };

  _proto.submitData = function submitData() {
    return {
      title: this.name()
    };
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this = this;

    e.preventDefault();
    this.loading = true; // Do not save

    if (this.attrs.onChange) {
      this.attrs.onChange(this.name());
      this.hide();
      return;
    }

    this.article.save({
      title: this.name()
    }).then(function () {
      _this.hide(); // Redirect


      if (_this.redirect) {
        var url = "/blog/" + _this.article.slug();

        m.route.set(url, true);
        window.history.replaceState(null, document.title, url);
      }
    }, function (response) {
      _this.loading = false;

      _this.handleErrors(response);
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
/* harmony import */ var flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/tags/models/Tag */ "flarum/tags/models/Tag");
/* harmony import */ var flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/models/Discussion */ "flarum/models/Discussion");
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_BlogOverview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/BlogOverview */ "./src/forum/pages/BlogOverview.js");
/* harmony import */ var _utils_redirector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/redirector */ "./src/forum/utils/redirector.js");
/* harmony import */ var _common_Models_BlogMeta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Models/BlogMeta */ "./src/common/Models/BlogMeta.js");
/* harmony import */ var _utils_extendTagOverview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/extendTagOverview */ "./src/forum/utils/extendTagOverview.js");
/* harmony import */ var _utils_discussionRouting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/discussionRouting */ "./src/forum/utils/discussionRouting.js");
/* harmony import */ var _pages_BlogComposer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/BlogComposer */ "./src/forum/pages/BlogComposer.js");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./compat */ "./src/forum/compat.js");
/* harmony import */ var _utils_addSidebarNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/addSidebarNav */ "./src/forum/utils/addSidebarNav.js");











 // Register Flarum Blog

app.initializers.add("v17development-flarum-blog", function (app) {
  app.routes.blog = {
    path: "/blog",
    component: _pages_BlogOverview__WEBPACK_IMPORTED_MODULE_4__["default"]
  };
  app.routes.blogCategory = {
    path: "/blog/category/:slug",
    component: _pages_BlogOverview__WEBPACK_IMPORTED_MODULE_4__["default"]
  };
  app.routes.blogComposer = {
    path: "/blog/compose",
    component: _pages_BlogComposer__WEBPACK_IMPORTED_MODULE_9__["default"]
  };
  app.routes.blogArticle = {
    path: "/blog/:id",
    component: _pages_BlogItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
  app.routes["blogArticle.near"] = {
    path: "/blog/:id/:near",
    component: _pages_BlogItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
  app.store.models.blogMeta = _common_Models_BlogMeta__WEBPACK_IMPORTED_MODULE_6__["default"];
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.blogMeta = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne("blogMeta");
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.isBlog = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("isBlog"); // Redirect discussions/tags to their blog post/overview

  Object(_utils_redirector__WEBPACK_IMPORTED_MODULE_5__["default"])(); // Extend tag overview.
  // Hide tags which are used as blog category

  Object(_utils_extendTagOverview__WEBPACK_IMPORTED_MODULE_7__["default"])(); // Make that blog articles have a blog route and not a discussion route

  Object(_utils_discussionRouting__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Add a link to the blog to the IndexPage sidebar, if enabled.

  Object(_utils_addSidebarNav__WEBPACK_IMPORTED_MODULE_11__["default"])();
});
Object(_compat__WEBPACK_IMPORTED_MODULE_10__["default"])();

/***/ }),

/***/ "./src/forum/pages/BlogComposer.js":
/*!*****************************************!*\
  !*** ./src/forum/pages/BlogComposer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogComposer; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BlogItemSidebar_BlogAuthor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogItemSidebar/BlogAuthor */ "./src/forum/components/BlogItemSidebar/BlogAuthor.js");
/* harmony import */ var _components_Modals_RenameArticleModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modals/RenameArticleModal */ "./src/forum/components/Modals/RenameArticleModal.js");
/* harmony import */ var flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/tags/components/TagDiscussionModal */ "flarum/tags/components/TagDiscussionModal");
/* harmony import */ var flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Modals_BlogPostSettingsModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Modals/BlogPostSettingsModal */ "./src/forum/components/Modals/BlogPostSettingsModal.js");
/* harmony import */ var _components_Composer_Composer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Composer/Composer */ "./src/forum/components/Composer/Composer.js");
/* harmony import */ var _components_LanguageDropdown_LanguageDropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/LanguageDropdown/LanguageDropdown */ "./src/forum/components/LanguageDropdown/LanguageDropdown.js");











var BlogComposer = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogComposer, _Page);

  function BlogComposer() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = BlogComposer.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _Page.prototype.oninit.call(this, vnode);

    app.setTitle(app.translator.trans("v17development-flarum-blog.forum.blog")); // User cannot write blogs

    if (!app.forum.attribute("canWriteBlogPosts")) {
      m.route.set(app.route("blog"));
      return;
    } // Send history push


    app.history.push("blogComposer"); // Get languages (if enabled)

    this.languages = app.store.all("discussion-languages") || []; // Set body class

    this.bodyClass = "BlogItemPage"; // Article data

    this.articleLanguage = m.route.param("lang") ? m.route.param("lang") : app.translator.locale;
    this.article = app.store.createRecord("discussions");
    this.blogMeta = null;
    this.tags = []; // Pre-select tags

    if (m.route.param().tags) {
      var tagList = Array.isArray(m.route.param().tags) ? m.route.param().tags : m.route.param().tags.split(",");

      if (m.route.param().tags.length > 0) {
        tagList.forEach(function (tagId) {
          var foundTag = app.store.getById("tags", tagId);

          if (foundTag) {
            _this.tags.push(foundTag);
          }
        });
      }
    }

    this.isSaving = false;
  };

  _proto.openTagsModal = function openTagsModal(e) {
    var _this2 = this;

    if (e === void 0) {
      e = null;
    }

    if (e) {
      e.preventDefault();
    }

    if (this.isSaving) return;
    app.modal.show(flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_6___default.a, {
      selectedTags: this.tags,
      onsubmit: function onsubmit(tags) {
        _this2.tags = tags;
      }
    });
  };

  _proto.openNameArticleModal = function openNameArticleModal(e) {
    var _this3 = this;

    if (e === void 0) {
      e = null;
    }

    if (e) {
      e.preventDefault();
    }

    if (this.isSaving) return;
    app.modal.show(_components_Modals_RenameArticleModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      article: this.article,
      onChange: function onChange(title) {
        _this3.article.pushData({
          attributes: {
            title: title
          }
        });
      }
    });
  };

  _proto.openBlogSettings = function openBlogSettings(e) {
    var _this4 = this;

    e.preventDefault();
    if (this.isSaving) return;
    app.modal.show(_components_Modals_BlogPostSettingsModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      meta: this.blogMeta,
      onsubmit: function onsubmit(meta) {
        return _this4.blogMeta = meta;
      }
    });
  };

  _proto.view = function view() {
    var _this5 = this;

    var defaultImage = app.forum.attribute("blogDefaultImage") ? "url(" + (app.forum.attribute("baseUrl") + "/assets/" + app.forum.attribute("blogDefaultImage")) + ")" : null;
    var blogImage = this.blogMeta && this.blogMeta.featuredImage() ? "url(" + this.blogMeta.featuredImage() + ")" : defaultImage;
    return m("div", {
      className: "FlarumBlogItem"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "FlarumBlog-ToolButtons"
    }, m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: app.route("blog"),
      className: "Button",
      loading: this.isSaving,
      icon: "fas fa-angle-left"
    }, m("i", {
      "class": "icon fas fa-angle-left Button-icon"
    }), m("span", {
      "class": "Button-label"
    }, app.translator.trans("v17development-flarum-blog.forum.return_to_overview")))), m("div", {
      className: "FlarumBlog-Article"
    }, m("div", {
      className: "FlarumBlog-Article-Container"
    }, m("div", {
      className: "FlarumBlog-Article-Content"
    }, m("div", {
      className: "FlarumBlog-Article-Image FlarumBlog-default-image",
      style: {
        backgroundImage: blogImage,
        cursor: "pointer"
      },
      onclick: function onclick(e) {
        return _this5.openBlogSettings(e);
      }
    }), m("div", {
      className: "FlarumBlog-Article-Content-Edit-Button"
    }, m("div", {
      className: this.languages.length === 0 ? "FlarumBlog-Article-Content-Edit-Dropdown" : "FlarumBlog-Article-Content-EditButtons"
    }, this.languages !== null && this.languages.length >= 1 && m(_components_LanguageDropdown_LanguageDropdown__WEBPACK_IMPORTED_MODULE_9__["default"], {
      selected: this.articleLanguage,
      onclick: function onclick(language) {
        return _this5.articleLanguage = language;
      }
    }), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button",
      onclick: function onclick(e) {
        return _this5.openBlogSettings(e);
      },
      icon: "fas fa-pencil-alt",
      loading: this.isSaving
    }, app.translator.trans("v17development-flarum-blog.forum.composer.update_settings")))), m("div", {
      className: "FlarumBlog-Article-Categories"
    }, this.tags.map(function (tag) {
      return m("a", {
        href: "#",
        onclick: function onclick(e) {
          return _this5.openTagsModal(e);
        }
      }, tag.name());
    }), m("a", {
      href: "#",
      onclick: function onclick(e) {
        return _this5.openTagsModal(e);
      }
    }, this.tags.length === 0 ? app.translator.trans("v17development-flarum-blog.forum.composer.select_category") : app.translator.trans("v17development-flarum-blog.forum.composer.edit_categories"), " ", m("i", {
      className: "fas fa-edit"
    }))), m("div", {
      className: "FlarumBlog-Article-Post"
    }, m("h3", {
      onclick: function onclick() {
        return _this5.openNameArticleModal();
      },
      className: "FlarumBlog-Article-Title",
      style: {
        cursor: "pointer"
      }
    }, this.article && this.article.title() && this.article.title() !== "" ? this.article.title() : app.translator.trans("v17development-flarum-blog.forum.composer.no_title"), m("a", {
      href: "#",
      onclick: function onclick(e) {
        return e.preventDefault();
      }
    }, m("i", {
      className: "fas fa-edit"
    }))), m("div", {
      className: "Post-body"
    }, m(_components_Composer_Composer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      composer: app.composer,
      originalContent: "",
      submitLabel: app.translator.trans("v17development-flarum-blog.forum.composer.post_article"),
      placeholder: app.translator.trans("v17development-flarum-blog.forum.composer.enter_message_here"),
      onsubmit: function onsubmit() {
        return _this5.create();
      },
      disabled: this.isSaving
    })))), m("div", {
      className: "FlarumBlog-Article-Comments"
    }, m("h4", null, app.translator.trans("v17development-flarum-blog.forum.comment_section.comments"), " ", "(0)"), m("div", {
      className: "Post-body"
    }, m("blockquote", {
      "class": "uncited"
    }, m("div", null, m("span", {
      className: "fas fa-ban",
      style: {
        marginRight: "5px"
      }
    }), " ", app.translator.trans("v17development-flarum-blog.forum.composer.comment_section")))))), m("div", {
      className: "FlarumBlog-Article-Sidebar"
    }, m(_components_BlogItemSidebar_BlogAuthor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: app.session.user
    })))));
  };

  _proto.create = function create() {
    var _this6 = this;

    var blogTags = app.forum.attribute("blogTags") || []; // Force tags

    if (this.tags.length === 0) {
      this.openTagsModal();
      return;
    } // Force title


    if (!this.article.title() || this.article.title() === "") {
      this.openNameArticleModal();
      return;
    } // Find knowledge base tags


    var findblogTags = this.tags.filter(function (tag) {
      return blogTags.indexOf(tag.id()) >= 0;
    }); // No knowledge base tags selected

    if (findblogTags.length === 0) {
      alert(app.translator.trans("v17development-flarum-blog.forum.composer.no_blog_tags_selected"));
      return;
    }

    if ((this.blogMeta === null || !this.blogMeta.featuredImage() && !app.forum.attribute("blogDefaultImage") || !this.blogMeta.summary()) && !confirm(app.translator.trans("v17development-flarum-blog.forum.composer.post_without_blog_info"))) {
      return;
    }

    var relationships = {
      tags: this.tags
    }; // Add languages if possible

    if (this.languages.length > 0) {
      relationships.language = app.store.getBy("discussion-languages", "code", this.articleLanguage);
    }

    var data = {
      title: this.article.title(),
      content: app.composer.fields.content(),
      relationships: relationships,
      blogMeta: this.blogMeta !== null ? {
        featuredImage: this.blogMeta.featuredImage(),
        summary: this.blogMeta.summary(),
        isSized: this.blogMeta.isSized()
      } : null
    };
    this.isSaving = true;
    this.article.save(data).then(function (article) {
      setTimeout(function () {
        // Redirect to the article
        m.route.set(app.route("blogArticle", {
          id: "" + article.slug()
        }));
      }, 500);
    })["catch"](function () {
      _this6.isSaving = false;
      m.redraw();
    });
  };

  return BlogComposer;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_PostStream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/PostStream */ "flarum/components/PostStream");
/* harmony import */ var flarum_components_PostStream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PostStream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_states_PostStreamState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/states/PostStreamState */ "flarum/states/PostStreamState");
/* harmony import */ var flarum_states_PostStreamState__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_states_PostStreamState__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_BlogPostController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BlogPostController */ "./src/forum/components/BlogPostController.js");
/* harmony import */ var _components_BlogItemSidebar_BlogItemSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BlogItemSidebar/BlogItemSidebar */ "./src/forum/components/BlogItemSidebar/BlogItemSidebar.js");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _BlogOverview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BlogOverview */ "./src/forum/pages/BlogOverview.js");
/* harmony import */ var flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/helpers/fullTime */ "flarum/helpers/fullTime");
/* harmony import */ var flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ArticleSubscription__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ArticleSubscription */ "./src/forum/components/ArticleSubscription.js");












var BlogItem = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogItem, _Page);

  function BlogItem() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = BlogItem.prototype;

  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);

    app.setTitle(app.translator.trans("v17development-flarum-blog.forum.blog")); // Send history push

    app.history.push("blogArticle");
    this.bodyClass = "BlogItemPage";
    this.near = m.route.param("near") || 0;
    this.loading = true;
    this.found = false;
    this.article = null;
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
      app.store.find("discussions", m.route.param("id").split("-")[0]).then(this.show.bind(this))["catch"](function () {
        m.redraw();
      });
    }

    m.redraw();
  } // Show blog post
  ;

  _proto.show = function show(article) {
    // Set article data
    this.article = article; // Update title

    app.setTitle(article.title() + " - " + app.translator.trans("v17development-flarum-blog.forum.blog"));
    this.loading = false;
    var includedPosts = [];

    if (article.payload && article.payload.included) {
      var articleId = article.id();
      includedPosts = article.payload.included.filter(function (record) {
        return record.type === "posts" && record.relationships && record.relationships.discussion && record.relationships.discussion.data.id === articleId;
      }).map(function (record) {
        return app.store.getById("posts", record.id);
      }).sort(function (a, b) {
        return a.id() - b.id();
      }).slice(0, 20);
    }

    this.stream = new flarum_states_PostStreamState__WEBPACK_IMPORTED_MODULE_4___default.a(article, includedPosts); // Scroll to specific post

    if (this.near) {
      this.stream.goToNumber(this.near, true);
    }

    m.redraw();
  };

  _proto.view = function view() {
    var defaultImage = app.forum.attribute("blogDefaultImage") ? "url(" + (app.forum.attribute("baseUrl") + "/assets/" + app.forum.attribute("blogDefaultImage")) + ")" : null;
    var blogImage = this.article && this.article.blogMeta() && this.article.blogMeta().featuredImage() ? "url(" + this.article.blogMeta().featuredImage() + ")" : defaultImage;
    var articlePost = null;

    if (!this.loading && this.article) {
      articlePost = this.article.firstPost() ? this.article.firstPost() : app.store.getById("posts", this.article.firstPostId());
    }

    return m("div", {
      className: "FlarumBlogItem"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "FlarumBlog-ToolButtons"
    }, m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: app.route("blog"),
      className: "Button",
      onclick: function onclick(e) {
        if (app.previous.matches(_BlogOverview__WEBPACK_IMPORTED_MODULE_8__["default"])) {
          e.preventDefault();
          history.back();
        }
      }
    }, m("i", {
      "class": "icon fas fa-angle-left Button-icon"
    }), m("span", {
      "class": "Button-label"
    }, app.translator.trans("v17development-flarum-blog.forum.return_to_overview")))), m("div", {
      className: "FlarumBlog-Article"
    }, m("div", {
      className: "FlarumBlog-Article-Container"
    }, m("div", {
      className: "FlarumBlog-Article-Content"
    }, m("div", {
      className: "FlarumBlog-Article-Image FlarumBlog-default-image " + (this.loading ? "FlarumBlog-Article-GhostImage" : ""),
      style: {
        backgroundImage: blogImage,
        opacity: this.article && this.article.isHidden() ? 0.4 : null
      }
    }), this.article && app.session.user && (app.session.user.canEdit() || this.article.canRename() || this.article.posts() && this.article.posts()[0].canEdit()) && m(_components_BlogPostController__WEBPACK_IMPORTED_MODULE_5__["default"], {
      article: this.article
    }), m("div", {
      className: "FlarumBlog-Article-Categories"
    }, !this.loading && this.article && this.article.tags() && this.article.tags().map(function (tag) {
      return m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: app.route("blogCategory", {
          slug: tag.slug()
        })
      }, tag.name());
    }), this.loading && [0, 1].map(function () {
      return m("span", {
        className: "FlarumBlog-Article-GhostCategory"
      }, "Category");
    })), m("div", {
      className: "FlarumBlog-Article-Post"
    }, m("h3", {
      className: "FlarumBlog-Article-Title " + (this.loading ? "FlarumBlog-Article-GhostTitle" : "")
    }, this.article ? this.article.title() : "Ghost title", this.article && this.article.isHidden() && "(" + app.translator.trans("v17development-flarum-blog.forum.hidden") + ")"), m("div", {
      className: "FlarumBlog-Article-PublishDate " + (this.loading ? "FlarumBlog-Article-GhostPublishDate" : "")
    }, this.article ? flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_9___default()(this.article.createdAt()) : m("span", null, "\xA0")), this.loading && [0, 1, 2].map(function () {
      return m("div", null, m("p", {
        className: "FlarumBlog-Article-GhostParagraph"
      }, "\xA0"), m("p", {
        className: "FlarumBlog-Article-GhostParagraph"
      }, "\xA0"), m("p", {
        className: "FlarumBlog-Article-GhostParagraph"
      }, "\xA0"), m("p", null, "\xA0"));
    }), !this.loading && this.article.blogMeta() && this.article.blogMeta().isPendingReview() == true && m("div", {
      className: "Post-body"
    }, m("blockquote", {
      "class": "uncited",
      style: {
        fontSize: "16px"
      }
    }, m("div", null, m("span", {
      className: "far fa-clock",
      style: {
        marginRight: "5px"
      }
    }), " ", app.translator.trans("v17development-flarum-blog.forum.review_article.pending_review")))), !this.loading && articlePost && m(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a, {
      post: articlePost
    }))), m("div", {
      className: "FlarumBlog-Article-Comments"
    }, !this.loading && app.session.user && this.article.subscription && (!this.article.isLocked || this.article.isLocked && !this.article.isLocked()) && m(_components_ArticleSubscription__WEBPACK_IMPORTED_MODULE_10__["default"], {
      discussion: this.article
    }), m("h4", null, app.translator.trans("v17development-flarum-blog.forum.comment_section.comments"), " ", "(", this.article ? this.article.commentCount() - 1 : 0, ")"), !this.loading && this.article.isLocked && this.article.isLocked() && m("div", {
      className: "Post-body"
    }, m("blockquote", {
      "class": "uncited"
    }, m("div", null, m("span", {
      className: "far fa-lock",
      style: {
        marginRight: "5px"
      }
    }), " ", app.translator.trans("v17development-flarum-blog.forum.comment_section.locked")))), !this.loading && this.article && flarum_components_PostStream__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      discussion: this.article,
      stream: this.stream,
      onPositionChange: this.positionChanged.bind(this)
    }))), m(_components_BlogItemSidebar_BlogItemSidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_BlogCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BlogCategories */ "./src/forum/components/BlogCategories.js");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_LanguageDropdown_LanguageDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LanguageDropdown/LanguageDropdown */ "./src/forum/components/LanguageDropdown/LanguageDropdown.js");
/* harmony import */ var _components_ForumNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ForumNav */ "./src/forum/components/ForumNav.js");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_9__);











var BlogOverview = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogOverview, _Page);

  function BlogOverview() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = BlogOverview.prototype;

  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);

    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.setTitle(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("v17development-flarum-blog.forum.blog"));
    this.bodyClass = "BlogOverviewPage";
    this.isLoading = true;
    this.featuredPosts = [];
    this.posts = [];
    this.hasMore = null;
    this.isLoadingMore = false;
    this.languages = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.all("discussion-languages");
    this.currentSelectedLanguage = m.route.param("lang") ? m.route.param("lang") : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.formatter.locale; // Send history push

    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.history.push("blog");
    this.loadBlogOverview();
  } // Load blog overview
  ;

  _proto.loadBlogOverview = function loadBlogOverview() {
    var preloadBlogOverview = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.preloadedApiDocument();

    if (preloadBlogOverview) {
      // We must wrap this in a setTimeout because if we are mounting this
      // component for the first time on page load, then any calls to m.redraw
      // will be ineffective and thus any configs (scroll code) will be run
      // before stuff is drawn to the page.
      setTimeout(this.show.bind(this, preloadBlogOverview), 0);
    } else {
      this.reloadData();
    }

    m.redraw();
  };

  _proto.reloadData = function reloadData() {
    var q = "is:blog" + (m.route.param("slug") ? " tag:" + m.route.param("slug") : "");

    if (this.languages !== null && this.languages.length >= 1) {
      q += " language:" + this.currentSelectedLanguage;
    }

    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.find("discussions", {
      filter: {
        q: q
      },
      sort: "-createdAt"
    }).then(this.show.bind(this))["catch"](function () {
      m.redraw();
    });
  } // Show blog posts
  ;

  _proto.show = function show(articles) {
    if (articles.length === 0) {
      this.isLoading = false;
      m.redraw();
      return;
    } // Set pagination


    this.hasMore = articles.payload.links && articles.payload.links.next ? articles.payload.links.next : null;
    this.featuredPosts = articles.slice(0, 3);
    this.posts = articles.length >= 4 ? articles.slice(3, articles.length) : [];
    this.isLoading = false;
    m.redraw();
  } // Load more blog posts
  ;

  _proto.loadMore = function loadMore() {
    var _this = this;

    this.isLoadingMore = true;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.find(this.hasMore.replace(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute("apiUrl"), "")).then(function (data) {
      data.map(function (article) {
        return _this.posts.push(article);
      }); // Update hasmore button

      _this.hasMore = data.payload.links && data.payload.links.next ? data.payload.links.next : null;
    })["catch"](function () {}).then(function () {
      _this.isLoadingMore = false;
      m.redraw();
    });
  };

  _proto.title = function title() {
    if (!m.route.param("slug")) {
      return m("h2", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("v17development-flarum-blog.forum.recent_posts"));
    }

    var tag = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.all("tags").filter(function (tag) {
      return tag.slug() === m.route.param("slug");
    });
    return m("h2", null, tag && tag[0] && tag[0].name(), m("small", null, " ", "-", " ", m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route("blog")
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("v17development-flarum-blog.forum.return_to_overview"))));
  };

  _proto.view = function view() {
    var _this2 = this;

    var defaultImage = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute("blogDefaultImage") ? "url(" + (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute("baseUrl") + "/assets/" + flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute("blogDefaultImage")) + ")" : null;
    return m("div", {
      className: "FlarumBlogOverview"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "BlogFeatured"
    }, m("div", {
      className: "BlogOverviewButtons"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute("canWriteBlogPosts") && m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "Button",
      onclick: function onclick() {
        return _this2.newArticle();
      },
      icon: "fas fa-pencil-alt"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("v17development-flarum-blog.forum.compose.write_article")), this.languages !== null && this.languages.length >= 1 && m(_components_LanguageDropdown_LanguageDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
      selected: this.currentSelectedLanguage,
      onclick: function onclick(language) {
        _this2.currentSelectedLanguage = language;
        m.route.set(document.location.pathname, {
          lang: language
        });

        _this2.reloadData();
      }
    })), this.title(), m("div", {
      style: {
        clear: "both"
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
      var blogImage = article.blogMeta() && article.blogMeta().featuredImage() ? "url(" + article.blogMeta().featuredImage() + ")" : defaultImage;
      var blogTag = article.tags() ? article.tags().filter(function (tag) {
        return tag.isChild();
      }) : [];
      return m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route("blogArticle", {
          id: "" + article.slug()
        }),
        className: "BlogFeatured-list-item FlarumBlog-default-image",
        style: {
          backgroundImage: blogImage
        }
      }, m("div", {
        className: "BlogFeatured-list-item-top"
      }, blogTag[0] && m("span", null, blogTag[0].name()), article.isSticky() && m("span", null, m("i", {
        className: "fas fa-thumbtack"
      })), (article.blogMeta() && article.blogMeta().isPendingReview() == true || article.isHidden()) && m("span", null, m("i", {
        className: "fas fa-eye-slash"
      })), article.blogMeta() && article.blogMeta().isPendingReview() == true && m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_9___default.a, {
        text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("v17development-flarum-blog.forum.review_article.pending_review"),
        position: "bottom"
      }, m("span", null, m("i", {
        className: "far fa-clock"
      }), " ", flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("v17development-flarum-blog.forum.review_article.pending_review_title")))), m("div", {
        className: "BlogFeatured-list-item-details"
      }, m("h4", null, article.title()), m("div", {
        className: "data"
      }, m("span", null, m("i", {
        className: "far fa-clock"
      }), " ", flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default()(article.createdAt())), m("span", null, m("i", {
        className: "far fa-user"
      }), " ", article.user() ? article.user().displayName() : "[Deleted]"), m("span", null, m("i", {
        className: "far fa-comment"
      }), " ", article.commentCount() - 1))));
    }))), m("div", {
      className: "BlogScrubber"
    }, m("div", {
      className: "BlogList"
    }, this.isLoading && [false, false, true, false].map(function (state) {
      return m("div", {
        className: "BlogList-item BlogList-item-" + (state === true ? "sized" : "default") + " BlogList-item-ghost"
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
      var blogImage = article.blogMeta() && article.blogMeta().featuredImage() ? "url(" + article.blogMeta().featuredImage() + ")" : defaultImage;
      var isSized = article.blogMeta() && article.blogMeta().isSized();
      var summary = article.blogMeta() && article.blogMeta().summary() ? article.blogMeta().summary() : "";
      return m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route("blogArticle", {
          id: "" + article.slug()
        }),
        className: "BlogList-item BlogList-item-" + (isSized ? "sized" : "default")
      }, m("div", {
        className: "BlogList-item-photo FlarumBlog-default-image",
        style: {
          backgroundImage: blogImage
        }
      }), m("div", {
        className: "BlogList-item-content"
      }, m("h4", null, article.title(), (article.blogMeta() && article.blogMeta().isPendingReview() == true || article.isHidden()) && m("i", {
        className: "fas fa-eye-slash"
      }), article.blogMeta() && article.blogMeta().isPendingReview() == true && m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_9___default.a, {
        text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("v17development-flarum-blog.forum.review_article.pending_review")
      }, m("i", {
        className: "far fa-clock"
      }))), m("p", null, summary), m("div", {
        className: "data"
      }, m("span", null, m("i", {
        className: "far fa-clock"
      }), " ", flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default()(article.createdAt())), m("span", null, m("i", {
        className: "far fa-user"
      }), " ", article.user() ? article.user().displayName() : "[Deleted]"), m("span", null, m("i", {
        className: "far fa-comment"
      }), " ", article.commentCount() - 1))));
    }), !this.isLoading && this.featuredPosts.length > 0 && this.hasMore === null && m("p", {
      className: "FlarumBlog-reached-end"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("v17development-flarum-blog.forum.no_more_posts")), !this.isLoading && this.featuredPosts.length === 0 && this.posts.length === 0 && m("p", {
      className: "FlarumBlog-reached-end"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("v17development-flarum-blog.forum.category_empty")), !this.isLoading && this.hasMore !== null && m("div", {
      className: "FlarumBlog-reached-load-more"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "Button",
      onclick: function onclick() {
        return _this2.loadMore();
      },
      icon: "fas fa-chevron-down",
      loading: this.isLoadingMore
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("core.forum.discussion_list.load_more_button")))), m("div", {
      className: "Sidebar"
    }, m(_components_BlogCategories__WEBPACK_IMPORTED_MODULE_5__["default"], null), m(_components_ForumNav__WEBPACK_IMPORTED_MODULE_8__["default"], null)))));
  };

  _proto.newArticle = function newArticle() {
    var foundMainTag = false;
    var tags = [];
    var blogTags = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute("blogTags"); // Pre-select selected tags

    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.all("tags").forEach(function (_tag) {
      // Find main blog tag
      if (!foundMainTag && !_tag.isChild() && blogTags.indexOf(_tag.id()) >= 0) {
        tags.push(_tag);
      }
    }); // Get current category

    var currentCategory = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.getBy("tags", "slug", m.route.param("slug"));

    if (currentCategory) {
      tags.push(currentCategory);
    } // Redirect to the composer


    m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route("blogComposer", {
      tags: tags.map(function (tag) {
        return tag.id();
      }).join(),
      lang: this.languages.length > 0 ? this.currentSelectedLanguage : undefined
    }));
  };

  return BlogOverview;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/utils/addSidebarNav.js":
/*!******************************************!*\
  !*** ./src/forum/utils/addSidebarNav.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addSidebarNav; });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__);



function addSidebarNav() {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, "navItems", function (items) {
    if (app.forum.attribute("blogAddSidebarNav") && app.forum.attribute("blogAddSidebarNav") !== "0") {
      items.add("blog", m(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
        icon: "fas fa-comment",
        href: app.route("blog")
      }, app.translator.trans("v17development-flarum-blog.forum.blog")), 15);
    }

    return items;
  });
}

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
    var discussionRedirectEnabled = app.forum.attribute("blogRedirectsEnabled") === "both" || app.forum.attribute("blogRedirectsEnabled") === "discussions_only";
    var shouldRedirect = false;

    if (discussionRedirectEnabled && discussion.tags().length > 0) {
      var blogTags = app.forum.attribute("blogTags");
      var foundTags = discussion.tags().filter(function (tag) {
        return blogTags.indexOf(tag.id()) >= 0 || tag.parent() && blogTags.indexOf(tag.parent().id()) >= 0;
      });

      if (foundTags.length > 0) {
        shouldRedirect = true;
      }
    }

    if (shouldRedirect) {
      return discussion.lastReadPostNumber() > 1 ? app.route("blogArticle.near", {
        id: discussion.slug(),
        near: discussion.lastReadPostNumber()
      }) : app.route("blogArticle", {
        id: discussion.slug()
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
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/tags/components/TagsPage */ "flarum/tags/components/TagsPage");
/* harmony import */ var flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_2__);



function extendTagOverview() {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, "view", function (markup) {
    var _this = this;

    // Pending xhr to load all tags, throw back loading indicator.
    if (this.loading) {
      return markup;
    }

    if (app.forum.attribute("blogHideTags") === false) return markup; // Get knowledge base tag ID's

    var knowledgeBaseTags = app.forum.attribute("blogTags") || []; // Get tiles

    var tag_tiles = markup.children[1].children[1].children[0].children; // Map through the tiles and remove tiles that are part of the knowledge base

    markup.children[1].children[1].children[0].children = tag_tiles.map(function (tile, i) {
      return knowledgeBaseTags.indexOf(_this.tags[i].id()) >= 0 ? null : tile;
    });
    return markup;
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, "navItems", function (items) {
    if (app.forum.attribute("blogHideTags") === false) return items;
    var blogTags = app.forum.attribute("blogTags") || [];
    blogTags.forEach(function (id) {
      items.remove("tag" + id);
    });
    return items;
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
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0___default.a.prototype, "oncreate", function () {
    var tag = this.currentTag();
    var tagRedirectEnabled = app.forum.attribute("blogRedirectsEnabled") === "both" || app.forum.attribute("blogRedirectsEnabled") === "tags_only"; // Only trigger when it's a tag page and the redirects are enabled

    if (tag && tagRedirectEnabled) {
      var blogTags = app.forum.attribute("blogTags"); // Tag is inside list

      if (blogTags.indexOf(tag.id()) >= 0 || tag.parent() && blogTags.indexOf(tag.parent().id()) >= 0) {
        m.route.set(app.route("blog"));
      }
    }
  }); // Redirect discussion to blog article

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, "show", function (original, discussion) {
    var discussionRedirectEnabled = app.forum.attribute("blogRedirectsEnabled") === "both" || app.forum.attribute("blogRedirectsEnabled") === "discussions_only";

    if (discussionRedirectEnabled && discussion && discussion && discussion.tags().length > 0) {
      var blogTags = app.forum.attribute("blogTags");
      var foundTags = discussion.tags().filter(function (tag) {
        return blogTags.indexOf(tag.id()) >= 0 || tag.parent() && blogTags.indexOf(tag.parent().id()) >= 0;
      }); // Only redirect if the discussion has blog tags

      if (foundTags.length > 0) {
        // Redirect to blog article
        var url = app.route("blogArticle", {
          id: discussion.slug()
        }); // Setting the 3rd argument to true replaces the current state in the browser history, that way the browser back button works as expected.

        m.route.set(url, null, true);
        return null;
      }
    }

    return original(discussion);
  });
});

/***/ }),

/***/ "@flarum/core/forum":
/*!******************************!*\
  !*** external "flarum.core" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core;

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Tooltip'];

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

/***/ "flarum/components/ComposerBody":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/ComposerBody']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ComposerBody'];

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

/***/ "flarum/components/Link":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Link']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Link'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

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

/***/ "flarum/components/SelectDropdown":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/SelectDropdown']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SelectDropdown'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/components/TextEditor":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditor']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditor'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/fullTime":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/fullTime']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/fullTime'];

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

/***/ "flarum/states/PostStreamState":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['states/PostStreamState']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['states/PostStreamState'];

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

/***/ "flarum/tags/models/Tag":
/*!********************************************************!*\
  !*** external "flarum.core.compat['tags/models/Tag']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/models/Tag'];

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

/***/ "flarum/utils/Stream":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/Stream']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/Stream'];

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

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map