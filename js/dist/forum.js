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
    return m("div", {
      className: "BlogCategories"
    }, m("h3", null, "Categories"), this.blogCategories && this.blogCategories.map(function (tagId) {
      var tag = app.store.getById('tags', tagId);
      if (!tag) return null;
      var tags = []; // Add tag

      tags.push(m("a", {
        href: app.route("blogCategory", {
          slug: tag.slug()
        }),
        className: "BlogCategories-item",
        config: m.route
      }, m("span", null, m("i", {
        className: tag.icon()
      })), " ", tag.name())); // Add tags

      app.store.all('tags').forEach(function (_tag) {
        if (_tag.isChild() && _tag.parent().id() === tag.id()) {
          tags.push(m("a", {
            href: app.route("blogCategory", {
              slug: _tag.slug()
            }),
            className: "BlogCategories-item",
            config: m.route
          }, m("span", null, m("i", {
            className: _tag.icon()
          })), " ", _tag.name()));
        }
      });
      return tags;
    }));
  };

  return BlogCategories;
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
/* harmony import */ var _Modals_RenameArticleModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modals/RenameArticleModal */ "./src/forum/components/Modals/RenameArticleModal.js");











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
    var buttons = []; // Rename article

    if (article.canRename()) {
      buttons.push(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        className: 'Button',
        onclick: function onclick() {
          return app.modal.show(new _Modals_RenameArticleModal__WEBPACK_IMPORTED_MODULE_9__["default"]({
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
      disabled: !articlePost.canEdit(),
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
              if (confirm(extractText(app.translator.trans('core.forum.discussion_controls.delete_confirmation')))) {
                // Redirect if the current page is an knowledge base article
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
    }), this.featuredImage() != "" && m("img", {
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
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.blogMeta = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('blogMeta');
  Object(_utils_redirector__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

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
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/ReplyComposer */ "flarum/components/ReplyComposer");
/* harmony import */ var flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_PostStream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/PostStream */ "flarum/components/PostStream");
/* harmony import */ var flarum_components_PostStream__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PostStream__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_BlogCategories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BlogCategories */ "./src/forum/components/BlogCategories.js");
/* harmony import */ var _components_BlogPostController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BlogPostController */ "./src/forum/components/BlogPostController.js");









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
      app.store.find('discussions', m.route.param('id').split('-')[0], {
        include: 'user,tags,firstPost,blogMeta,posts,posts.discussion,posts.user'
      }).then(this.show.bind(this))["catch"](function () {
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
      console.log(article.payload.included);
      includedPosts = article.payload.included.filter(function (record) {
        return record.type === 'posts' && record.relationships && record.relationships.discussion && record.relationships.discussion.data.id === articleId;
      }).map(function (record) {
        return app.store.getById('posts', record.id);
      }).sort(function (a, b) {
        return a.id() - b.id();
      }).slice(0, 20);
    }

    console.log(includedPosts);
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
    }), this.article && app.session.user && (app.session.user.canEdit() || this.article.canRename() || this.article.posts() && this.article.posts()[0].canEdit()) && m(_components_BlogPostController__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
    }), m("div", {
      className: "Post-body"
    }, !this.loading && this.article.blogMeta() && this.article.blogMeta().isPendingReview() && m("blockquote", {
      "class": "uncited",
      style: {
        fontSize: '16px'
      }
    }, m("div", null, m("span", {
      className: "far fa-clock",
      style: {
        marginRight: '5px'
      }
    }), " ", app.translator.trans('v17development-flarum-blog.forum.review_article.pending_review'))), !this.loading && articlePost && m.trust(articlePost.contentHtml())))), m("div", {
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
    }), " ", app.translator.trans('v17development-flarum-blog.forum.comment_section.locked')))), !this.loading && this.stream && this.stream.render())), m("div", {
      className: "FlarumBlog-Article-Author"
    }, m("div", {
      className: "FlarumBlog-Article-Author-Info"
    }, m("div", {
      className: "FlarumBlog-Article-Author-background " + (this.loading ? 'FlarumBlog-Author-Ghost' : ''),
      style: {
        backgroundColor: this.article && this.article.user() ? this.article && this.article.user().color() : null
      }
    }), m("div", {
      className: "FlarumBlog-Article-Author-Avatar"
    }, this.article && this.article.user() ? flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default()(this.article.user()) : m("span", {
      className: "Avatar FlarumBlog-Author-Ghost"
    })), this.article && this.article.user() && m("div", {
      style: {
        padding: '0 20px 20px'
      }
    }, m("span", {
      className: "FlarumBlog-Article-Author-Name"
    }, this.article.user().displayName()), m("p", {
      className: "FlarumBlog-Article-Author-Bio"
    }, this.article.user().bio())), this.loading && m("div", null, m("span", {
      className: "FlarumBlog-Article-Author-Name FlarumBlog-Author-Ghost"
    }, "\xA0"), m("p", {
      className: "FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost"
    }, "\xA0"), m("p", {
      className: "FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost"
    }, "\xA0"), m("p", {
      className: "FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost"
    }, "\xA0"))), m(_components_BlogCategories__WEBPACK_IMPORTED_MODULE_6__["default"], null)))));
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
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_BlogCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlogCategories */ "./src/forum/components/BlogCategories.js");





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
    this.hasMore = null; // Send history push

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
      app.store.find('discussions', {
        filter: {
          q: 'is:blog'
        },
        include: 'user,tags,firstPost,blogMeta'
      }).then(this.show.bind(this))["catch"](function () {
        m.redraw();
      });
    }

    m.lazyRedraw();
  } // Show blog posts
  ;

  _proto.show = function show(articles) {
    if (articles.length === 0) return;
    this.featuredPosts = articles.slice(0, 3);
    this.posts = articles.length >= 4 ? articles.slice(3, articles.length) : [];
    this.isLoading = false;
    m.lazyRedraw();
  };

  _proto.view = function view() {
    return m("div", {
      className: "FlarumBlogOverview"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "BlogFeatured"
    }, m("h2", null, "Recent blog posts"), m("div", {
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
      }))), m("div", {
        className: "BlogFeatured-list-item-details"
      }, m("h4", null, article.title()), m("div", {
        className: "data"
      }, m("span", null, m("i", {
        className: "far fa-clock"
      }), " ", flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_2___default()(article.createdAt())), m("span", null, m("i", {
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
      }, m("h4", null, article.title()), m("p", null, summary), m("div", {
        className: "data"
      }, m("span", null, m("i", {
        className: "far fa-clock"
      }), " ", flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_2___default()(article.createdAt())), m("span", null, m("i", {
        className: "far fa-user"
      }), " ", article.user() ? article.user().displayName() : '[Deleted]'), m("span", null, m("i", {
        className: "far fa-comment"
      }), " ", article.commentCount()))));
    }), !this.isLoading && this.posts.length === 0 && m("p", {
      className: "FlarumBlog-reached-end"
    }, "No more blog posts.")), m("div", {
      className: "Sidebar"
    }, m(_components_BlogCategories__WEBPACK_IMPORTED_MODULE_3__["default"], null)))));
  };

  return BlogOverview;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Redirect tag to blog category
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_3__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0___default.a.prototype, 'config', function () {
    var tag = this.currentTag();
    var tagRedirectEnabled = app.forum.attribute('blogRedirectsEnabled') === 'both' || app.forum.attribute('blogRedirectsEnabled') === 'tags_only'; // Only trigger when it's a tag page and the redirects are enabled

    if (tag && tagRedirectEnabled) {
      var blogTags = app.forum.attribute('blogTags'); // Tag is inside list

      if (blogTags.indexOf(tag.id()) >= 0 || tag.parent() && blogTags.indexOf(tag.parent().id()) >= 0) {
        m.route(app.route('blog'));
      }
    }
  }); // Redirect discussion to blog article

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_3__["override"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function (original) {
    var discussionRedirectEnabled = app.forum.attribute('blogRedirectsEnabled') === 'both' || app.forum.attribute('blogRedirectsEnabled') === 'discussions_only';

    if (discussionRedirectEnabled && this.discussion && this.discussion && this.discussion.tags().length > 0) {
      var blogTags = app.forum.attribute('blogTags');
      var foundTags = this.discussion.tags().filter(function (tag) {
        return blogTags.indexOf(tag.id()) >= 0 || tag.parent() && blogTags.indexOf(tag.parent().id()) >= 0;
      }); // Only redirect if the discussion has blog tags

      if (foundTags.length > 0) {
        // Redirect to discussion
        var url = app.route('blogArticle', {
          id: this.discussion.id() + "-" + this.discussion.slug()
        });
        document.location.href = url;
        return m("div", {
          style: {
            textAlign: 'center',
            padding: '40px 20px'
          }
        }, m(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default.a, {
          size: "large"
        }), m("h2", {
          style: {
            marginTop: '40px'
          }
        }, app.translator.trans('v17development-flarum-support.forum.utils.redirect.title')), app.translator.trans('v17development-flarum-support.forum.utils.redirect.link', {
          a: m("a", {
            href: url
          })
        }));
      }
    }

    return original();
  });
});

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

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

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