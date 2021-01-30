(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./components/error_page/error_message.tsx":
/*!*************************************************!*\
  !*** ./components/error_page/error_message.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var _error_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error_link */ "./components/error_page/error_link.tsx");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const ErrorMessage = ({
  type,
  message,
  service,
  isGuest
}) => {
  let errorMessage = null;

  if (type) {
    switch (type) {
      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].LOCAL_STORAGE:
        errorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.local_storage.message",
          defaultMessage: "Mattermost was unable to load because a setting in your browser prevents the use of its local storage features. To allow Mattermost to load, try the following actions:"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.local_storage.help1",
          defaultMessage: "Enable cookies"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.local_storage.help2",
          defaultMessage: "Turn off private browsing"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.local_storage.help3",
          defaultMessage: "Use a supported browser (IE 11, Chrome 61+, Firefox 60+, Safari 12+, Edge 42+)"
        }))));
        break;

      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].PERMALINK_NOT_FOUND:
        errorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "permalink.error.access",
          defaultMessage: "Permalink belongs to a deleted message or to a channel to which you do not have access."
        }));
        break;

      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].TEAM_NOT_FOUND:
        errorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.team_not_found.message",
          defaultMessage: "The team you're requesting is private or does not exist. Please contact your Administrator for an invitation."
        }));
        break;

      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].CHANNEL_NOT_FOUND:
        errorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, isGuest ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.channel_not_found.message_guest",
          defaultMessage: "Your guest account has no channels assigned. Please contact an administrator."
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.channel_not_found.message",
          defaultMessage: "The channel you're requesting is private or does not exist. Please contact an Administrator to be added to the channel."
        }));
        break;

      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].OAUTH_MISSING_CODE:
        errorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.oauth_missing_code",
          defaultMessage: "The service provider {service} did not provide an authorization code in the redirect URL.",
          values: {
            service
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.oauth_missing_code.google",
          defaultMessage: "For {link} make sure your administrator enabled the Google+ API.",
          values: {
            link: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_error_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
              url: 'https://docs.mattermost.com/deployment/sso-google.html',
              messageId: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('error.oauth_missing_code.google.link'),
              defaultMessage: 'Google Apps'
            })
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.oauth_missing_code.office365",
          defaultMessage: "For {link} make sure the administrator of your Microsoft organization has enabled the Mattermost app.",
          values: {
            link: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_error_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
              url: 'https://docs.mattermost.com/deployment/sso-office.html',
              messageId: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('error.oauth_missing_code.office365.link'),
              defaultMessage: 'Office 365'
            })
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.oauth_missing_code.gitlab",
          defaultMessage: "For {link} please make sure you followed the setup instructions.",
          values: {
            link: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_error_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
              url: 'https://docs.mattermost.com/deployment/sso-gitlab.html',
              messageId: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('error.oauth_missing_code.gitlab.link'),
              defaultMessage: 'GitLab'
            })
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.oauth_missing_code.forum",
          defaultMessage: "If you reviewed the above and are still having trouble with configuration, you may post in our {link} where we'll be happy to help with issues during setup.",
          values: {
            link: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_error_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
              url: 'https://forum.mattermost.org/c/trouble-shoot',
              messageId: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('error.oauth_missing_code.forum.link'),
              defaultMessage: 'Troubleshooting forum'
            })
          }
        })));
        break;

      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].OAUTH_ACCESS_DENIED:
        errorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.oauth_access_denied",
          defaultMessage: "You must authorize Mattermost to log in with {service}.",
          values: {
            service
          }
        }));
        break;

      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].OAUTH_INVALID_REDIRECT_URL:
      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].OAUTH_INVALID_PARAM:
        errorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, message);
        break;

      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].PAGE_NOT_FOUND:
      default:
        errorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.not_found.message",
          defaultMessage: "The page you were trying to reach does not exist"
        }));
    }
  } else if (message) {
    errorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, message);
  } else {
    errorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "error.generic.message",
      defaultMessage: "An error has occurred."
    }));
  }

  return errorMessage;
};

ErrorMessage.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([null])]),
  message: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  service: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  isGuest: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
};
const _default = ErrorMessage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorMessage, "ErrorMessage", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/error_page/error_message.tsx");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/error_page/error_message.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/error_page/error_page.tsx":
/*!**********************************************!*\
  !*** ./components/error_page/error_page.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorPage; });
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto */ "./node_modules/crypto-browserify/index.js");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var components_widgets_icons_fa_warning_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/widgets/icons/fa_warning_icon */ "./components/widgets/icons/fa_warning_icon.tsx");
/* harmony import */ var _error_title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error_title */ "./components/error_page/error_title.tsx");
/* harmony import */ var _error_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error_message */ "./components/error_page/error_message.tsx");






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








class ErrorPage extends react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent {
  componentDidMount() {
    document.body.setAttribute('class', 'sticky error');
  }

  componentWillUnmount() {
    document.body.removeAttribute('class');
  }

  render() {
    const {
      isGuest
    } = this.props;
    const params = new URLSearchParams(this.props.location.search);
    const signature = params.get('s');
    let trustParams = false;

    if (signature) {
      params.delete('s');
      const key = this.props.asymmetricSigningPublicKey;
      const keyPEM = '-----BEGIN PUBLIC KEY-----\n' + key + '\n-----END PUBLIC KEY-----';
      const verify = crypto__WEBPACK_IMPORTED_MODULE_5___default.a.createVerify('sha256');
      verify.update('/error?' + params.toString());
      trustParams = verify.verify(keyPEM, signature, 'base64');
    }

    const type = params.get('type');
    const title = trustParams && params.get('title') || '';
    const message = trustParams && params.get('message') || '';
    const service = trustParams && params.get('service') || '';
    const returnTo = trustParams && params.get('returnTo') || '';
    let backButton;

    if (type === utils_constants__WEBPACK_IMPORTED_MODULE_9__["ErrorPageTypes"].PERMALINK_NOT_FOUND && returnTo) {
      backButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        to: returnTo
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "error.generic.link",
        defaultMessage: "Back to Mattermost"
      }));
    } else if (type === utils_constants__WEBPACK_IMPORTED_MODULE_9__["ErrorPageTypes"].TEAM_NOT_FOUND) {
      backButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        to: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "error.generic.link",
        defaultMessage: "Back to {siteName}",
        values: {
          siteName: this.props.siteName
        }
      }));
    } else if (type === utils_constants__WEBPACK_IMPORTED_MODULE_9__["ErrorPageTypes"].CHANNEL_NOT_FOUND && isGuest) {
      backButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        to: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "error.channelNotFound.guest_link",
        defaultMessage: "Back"
      }));
    } else if (type === utils_constants__WEBPACK_IMPORTED_MODULE_9__["ErrorPageTypes"].CHANNEL_NOT_FOUND) {
      backButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        to: params.get('returnTo')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "error.channelNotFound.link",
        defaultMessage: "Back to {defaultChannelName}",
        values: {
          defaultChannelName: utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].DEFAULT_CHANNEL_UI_NAME
        }
      }));
    } else if (type === utils_constants__WEBPACK_IMPORTED_MODULE_9__["ErrorPageTypes"].OAUTH_ACCESS_DENIED || type === utils_constants__WEBPACK_IMPORTED_MODULE_9__["ErrorPageTypes"].OAUTH_MISSING_CODE) {
      backButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        to: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "error.generic.link_login",
        defaultMessage: "Back to Login Page"
      }));
    } else if (type === utils_constants__WEBPACK_IMPORTED_MODULE_9__["ErrorPageTypes"].OAUTH_INVALID_PARAM || type === utils_constants__WEBPACK_IMPORTED_MODULE_9__["ErrorPageTypes"].OAUTH_INVALID_REDIRECT_URL) {
      backButton = null;
    } else {
      backButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        to: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "error.generic.link",
        defaultMessage: "Back to {siteName}",
        values: {
          siteName: this.props.siteName
        }
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "container-fluid"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "error__container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "error__icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_widgets_icons_fa_warning_icon__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
      "data-testid": "errorMessageTitle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_error_title__WEBPACK_IMPORTED_MODULE_11__["default"], {
      type: type,
      title: title
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_error_message__WEBPACK_IMPORTED_MODULE_12__["default"], {
      type: type,
      message: message,
      service: service,
      isGuest: isGuest
    }), backButton));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(ErrorPage, "propTypes", {
  location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    search: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
  }).isRequired,
  asymmetricSigningPublicKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  isGuest: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorPage, "ErrorPage", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/error_page/error_page.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/error_page/error_title.tsx":
/*!***********************************************!*\
  !*** ./components/error_page/error_title.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const ErrorTitle = ({
  type,
  title
}) => {
  let errorTitle = null;

  if (type) {
    switch (type) {
      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].LOCAL_STORAGE:
        errorTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.local_storage.title",
          defaultMessage: "Cannot Load Mattermost"
        });
        break;

      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].PERMALINK_NOT_FOUND:
        errorTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "permalink.error.title",
          defaultMessage: "Message Not Found"
        });
        break;

      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].OAUTH_ACCESS_DENIED:
        errorTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.oauth_access_denied.title",
          defaultMessage: "Authorization Error"
        });
        break;

      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].OAUTH_MISSING_CODE:
        errorTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.oauth_missing_code.title",
          defaultMessage: "Mattermost Needs Your Help"
        });
        break;

      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].OAUTH_INVALID_REDIRECT_URL:
      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].OAUTH_INVALID_PARAM:
        errorTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.oauth_invalid_param.title",
          defaultMessage: "OAuth Parameter Error"
        });
        break;

      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].TEAM_NOT_FOUND:
        errorTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.team_not_found.title",
          defaultMessage: "Team Not Found"
        });
        break;

      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].CHANNEL_NOT_FOUND:
        errorTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.channel_not_found.title",
          defaultMessage: "Channel Not Found"
        });
        break;

      case utils_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorPageTypes"].PAGE_NOT_FOUND:
      default:
        errorTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "error.not_found.title",
          defaultMessage: "Page Not Found"
        });
    }
  } else if (title) {
    errorTitle = title;
  } else {
    errorTitle = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__["localizeMessage"]('error.generic.title', 'Error');
  }

  return errorTitle;
};

ErrorTitle.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([null])]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
};
const _default = ErrorTitle;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorTitle, "ErrorTitle", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/error_page/error_title.tsx");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/error_page/error_title.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/error_page/index.tsx":
/*!*****************************************!*\
  !*** ./components/error_page/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mattermost_redux_selectors_entities_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/common */ "./node_modules/mattermost-redux/selectors/entities/common.js");
/* harmony import */ var mattermost_redux_selectors_entities_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var _error_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error_page */ "./components/error_page/error_page.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function mapStateToProps(state) {
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__["getConfig"])(state);
  const user = Object(mattermost_redux_selectors_entities_common__WEBPACK_IMPORTED_MODULE_2__["getCurrentUser"])(state);
  return {
    siteName: config.SiteName,
    asymmetricSigningPublicKey: config.AsymmetricSigningPublicKey,
    isGuest: Boolean(user && Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__["isGuest"])(user))
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_error_page__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/error_page/index.tsx");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/error_page/index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/widgets/icons/fa_warning_icon.tsx":
/*!******************************************************!*\
  !*** ./components/widgets/icons/fa_warning_icon.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WarningIcon; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_localized_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/localized_icon */ "./components/localized_icon.tsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");


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



class WarningIcon extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  render() {
    const className = 'fa fa-warning' + (this.props.additionalClassName ? ' ' + this.props.additionalClassName : '');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_localized_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: className,
      title: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_3__["t"])('generic_icons.warning'),
        defaultMessage: 'Warning Icon'
      }
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(WarningIcon, "propTypes", {
  additionalClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([null])])
});

_defineProperty(WarningIcon, "defaultProps", {
  additionalClassName: null
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WarningIcon, "WarningIcon", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/widgets/icons/fa_warning_icon.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 10:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 15:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 16:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 17:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=10.50865894f1be716d8ddb.js.map