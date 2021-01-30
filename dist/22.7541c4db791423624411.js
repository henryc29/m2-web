(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./components/common/back_button.tsx":
/*!*******************************************!*\
  !*** ./components/common/back_button.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackButton; });
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class BackButton extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "back_button",
      className: "signup-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      onClick: this.props.onClick,
      to: this.props.url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "generic_icons.back",
      defaultMessage: "Back Icon"
    }, title => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      id: "back_button_icon",
      className: "fa fa-1x fa-angle-left",
      title: title.toString()
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "web.header.back",
      defaultMessage: "Back"
    })));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(BackButton, "propTypes", {
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

_defineProperty(BackButton, "defaultProps", {
  url: '/'
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BackButton, "BackButton", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/common/back_button.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/password_reset_send_link/index.ts":
/*!******************************************************!*\
  !*** ./components/password_reset_send_link/index.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _password_reset_send_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password_reset_send_link */ "./components/password_reset_send_link/password_reset_send_link.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const mapDispatchToProps = dispatch => ({
  actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
    sendPasswordResetEmail: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["sendPasswordResetEmail"]
  }, dispatch)
});

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(_password_reset_send_link__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/password_reset_send_link/index.ts");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/password_reset_send_link/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/password_reset_send_link/password_reset_send_link.tsx":
/*!**************************************************************************!*\
  !*** ./components/password_reset_send_link/password_reset_send_link.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PasswordResetSendLink; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/utils/helpers */ "./node_modules/mattermost-redux/utils/helpers.js");
/* harmony import */ var mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_common_back_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/common/back_button */ "./components/common/back_button.tsx");
/* harmony import */ var components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/localized_input/localized_input */ "./components/localized_input/localized_input.tsx");
/* harmony import */ var utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/i18n.jsx */ "./utils/i18n.jsx");





(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class PasswordResetSendLink extends react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      error: null,
      updateText: null
    });

    _defineProperty(this, "resetForm", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef());

    _defineProperty(this, "emailInput", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef());

    _defineProperty(this, "handleSendLink", async e => {
      e.preventDefault();
      const email = this.emailInput.current.value.trim().toLowerCase();

      if (!email || !Object(mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["isEmail"])(email)) {
        this.setState({
          error: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "password_send.error",
            defaultMessage: "Please enter a valid email address."
          })
        });
        return;
      } // End of error checking clear error


      this.setState({
        error: null
      });
      const {
        data,
        error
      } = await this.props.actions.sendPasswordResetEmail(email);

      if (data) {
        this.setState({
          error: null,
          updateText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            id: "passwordResetEmailSent",
            className: "reset-form alert alert-success"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "password_send.link",
            defaultMessage: "If the account exists, a password reset email will be sent to:"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "password_send.checkInbox",
            defaultMessage: "Please check your inbox."
          }))
        });

        if (this.resetForm.current) {
          this.resetForm.current.hidden = true;
        }
      } else if (error) {
        this.setState({
          error: error.message,
          updateText: null
        });
      }
    });
  }

  render() {
    let error = null;

    if (this.state.error) {
      error = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "form-group has-error"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
        className: "control-label"
      }, this.state.error));
    }

    let formClass = 'form-group';

    if (error) {
      formClass += ' has-error';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_common_back_button__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "signup-team__container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "password_send.title",
      defaultMessage: "Password Reset"
    })), this.state.updateText, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
      onSubmit: this.handleSendLink,
      ref: this.resetForm
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "password_send.description",
      defaultMessage: "To reset your password, enter the email address you used to sign up"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: formClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "passwordResetEmailInput",
      type: "email",
      className: "form-control",
      name: "email",
      placeholder: {
        id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_9__["t"])('password_send.email'),
        defaultMessage: 'Email'
      },
      ref: this.emailInput,
      spellCheck: "false",
      autoFocus: true
    })), error, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      id: "passwordResetButton",
      type: "submit",
      className: "btn btn-primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "password_send.reset",
      defaultMessage: "Reset my password"
    }))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(PasswordResetSendLink, "propTypes", {
  actions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    sendPasswordResetEmail: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PasswordResetSendLink, "PasswordResetSendLink", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/password_reset_send_link/password_reset_send_link.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=22.7541c4db791423624411.js.map