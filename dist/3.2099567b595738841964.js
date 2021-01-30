(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./components/logged_in/index.js":
/*!***************************************!*\
  !*** ./components/logged_in/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_timezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/actions/timezone */ "./node_modules/mattermost-redux/actions/timezone.js");
/* harmony import */ var mattermost_redux_actions_timezone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_timezone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/channels */ "./node_modules/mattermost-redux/selectors/entities/channels.js");
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var utils_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/route */ "./utils/route.jsx");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/utils */ "./utils/utils.jsx");
/* harmony import */ var _logged_in_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logged_in.jsx */ "./components/logged_in/logged_in.jsx");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.











function mapStateToProps(state, ownProps) {
  const license = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__["getLicense"])(state);
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__["getConfig"])(state);
  const showTermsOfService = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__["shouldShowTermsOfService"])(state);
  return {
    currentUser: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__["getCurrentUser"])(state),
    currentChannelId: Object(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_4__["getCurrentChannelId"])(state),
    mfaRequired: Object(utils_route__WEBPACK_IMPORTED_MODULE_8__["checkIfMFARequired"])(Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__["getCurrentUser"])(state), license, config, ownProps.match.url),
    enableTimezone: config.ExperimentalTimezone === 'true',
    showTermsOfService
  };
} // NOTE: suggestions where to keep this welcomed


const getChannelURLAction = (channel, teamId) => (dispatch, getState) => utils_browser_history__WEBPACK_IMPORTED_MODULE_7__["browserHistory"].push(Object(utils_utils__WEBPACK_IMPORTED_MODULE_9__["getChannelURL"])(getState(), channel, teamId));

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
      autoUpdateTimezone: mattermost_redux_actions_timezone__WEBPACK_IMPORTED_MODULE_3__["autoUpdateTimezone"],
      getChannelURLAction
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_logged_in_jsx__WEBPACK_IMPORTED_MODULE_10__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/logged_in/index.js");
  reactHotLoader.register(getChannelURLAction, "getChannelURLAction", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/logged_in/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/logged_in/index.js");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/logged_in/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/logged_in/logged_in.jsx":
/*!********************************************!*\
  !*** ./components/logged_in/logged_in.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoggedIn; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var mattermost_redux_actions_channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/actions/channels */ "./node_modules/mattermost-redux/actions/channels.js");
/* harmony import */ var mattermost_redux_actions_channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_channels__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semver */ "./node_modules/semver/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_global_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions/global_actions */ "./actions/global_actions.tsx");
/* harmony import */ var actions_websocket_actions_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! actions/websocket_actions.jsx */ "./actions/websocket_actions.jsx");
/* harmony import */ var utils_user_agent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/user_agent */ "./utils/user_agent.tsx");
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");
/* harmony import */ var utils_timezone_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/timezone.jsx */ "./utils/timezone.jsx");
/* harmony import */ var stores_redux_store_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! stores/redux_store.jsx */ "./stores/redux_store.jsx");
/* harmony import */ var client_web_websocket_client_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/web_websocket_client.jsx */ "./client/web_websocket_client.jsx");
/* harmony import */ var stores_browser_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stores/browser_store */ "./stores/browser_store.tsx");
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













const dispatch = stores_redux_store_jsx__WEBPACK_IMPORTED_MODULE_10__["default"].dispatch;
const getState = stores_redux_store_jsx__WEBPACK_IMPORTED_MODULE_10__["default"].getState;
const BACKSPACE_CHAR = 8;
class LoggedIn extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onDesktopMessageListener", ({
      origin,
      data: {
        type,
        message = {}
      } = {}
    } = {}) => {
      if (!this.props.currentUser) {
        return;
      }

      if (origin !== window.location.origin) {
        return;
      }

      switch (type) {
        case 'register-desktop':
          {
            const {
              version
            } = message;

            if (!window.desktop) {
              window.desktop = {};
            }

            window.desktop.version = semver__WEBPACK_IMPORTED_MODULE_4___default.a.valid(semver__WEBPACK_IMPORTED_MODULE_4___default.a.coerce(version));
            break;
          }

        case 'user-activity-update':
          {
            const {
              userIsActive,
              manual
            } = message; // update the server with the users current away status

            if (userIsActive === true || userIsActive === false) {
              client_web_websocket_client_jsx__WEBPACK_IMPORTED_MODULE_11__["default"].userUpdateActiveStatus(userIsActive, manual);
            }

            break;
          }

        case 'notification-clicked':
          {
            const {
              channel,
              teamId
            } = message;
            window.focus(); // navigate to the appropriate channel

            this.props.actions.getChannelURLAction(channel, teamId);
            break;
          }
      }
    });

    _defineProperty(this, "handleBackSpace", e => {
      const excludedElements = ['input', 'textarea'];

      if (e.which === BACKSPACE_CHAR && !excludedElements.includes(e.target.tagName.toLowerCase())) {
        e.preventDefault();
      }
    });

    _defineProperty(this, "handleBeforeUnload", () => {
      // remove the event listener to prevent getting stuck in a loop
      window.removeEventListener('beforeunload', this.handleBeforeUnload);

      if (document.cookie.indexOf('MMUSERID=') > -1) {
        Object(mattermost_redux_actions_channels__WEBPACK_IMPORTED_MODULE_3__["viewChannel"])('', this.props.currentChannelId || '')(dispatch, getState);
      }

      actions_websocket_actions_jsx__WEBPACK_IMPORTED_MODULE_6__["close"]();
    });

    const root = document.getElementById('root');

    if (root) {
      root.className += ' channel-view';
    }
  }

  isValidState() {
    return this.props.currentUser != null;
  }

  componentDidMount() {
    // Initialize websocket
    actions_websocket_actions_jsx__WEBPACK_IMPORTED_MODULE_6__["initialize"]();

    if (this.props.enableTimezone) {
      this.props.actions.autoUpdateTimezone(Object(utils_timezone_jsx__WEBPACK_IMPORTED_MODULE_9__["getBrowserTimezone"])());
    } // Make sure the websockets close and reset version


    window.addEventListener('beforeunload', this.handleBeforeUnload); // Listen for focused tab/window state

    window.addEventListener('focus', this.onFocusListener);
    window.addEventListener('blur', this.onBlurListener);

    if (!document.hasFocus()) {
      actions_global_actions__WEBPACK_IMPORTED_MODULE_5__["emitBrowserFocus"](false);
    } // Listen for messages from the desktop app


    window.addEventListener('message', this.onDesktopMessageListener); // Tell the desktop app the webapp is ready

    window.postMessage({
      type: 'webapp-ready'
    }, window.location.origin); // Device tracking setup

    if (utils_user_agent__WEBPACK_IMPORTED_MODULE_7__["isIos"]()) {
      document.body.classList.add('ios');
    } else if (utils_user_agent__WEBPACK_IMPORTED_MODULE_7__["isAndroid"]()) {
      document.body.classList.add('android');
    }

    if (!this.props.currentUser) {
      const rootEl = document.getElementById('root');

      if (rootEl) {
        rootEl.setAttribute('class', '');
      }

      actions_global_actions__WEBPACK_IMPORTED_MODULE_5__["emitUserLoggedOutEvent"]('/login?redirect_to=' + encodeURIComponent(this.props.location.pathname), true, false);
    } // Prevent backspace from navigating back a page


    window.addEventListener('keydown', this.handleBackSpace);

    if (this.isValidState()) {
      stores_browser_store__WEBPACK_IMPORTED_MODULE_12__["default"].signalLogin();
    }
  }

  componentWillUnmount() {
    actions_websocket_actions_jsx__WEBPACK_IMPORTED_MODULE_6__["close"]();
    window.removeEventListener('keydown', this.handleBackSpace);
    window.removeEventListener('focus', this.onFocusListener);
    window.removeEventListener('blur', this.onBlurListener);
    window.removeEventListener('message', this.onDesktopMessageListener);
  }

  render() {
    if (!this.isValidState()) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_8__["default"], null);
    }

    if (this.props.mfaRequired) {
      if (this.props.location.pathname !== '/mfa/setup') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
          to: '/mfa/setup'
        });
      }
    } else if (this.props.location.pathname === '/mfa/confirm') {// Nothing to do. Wait for MFA flow to complete before prompting TOS.
    } else if (this.props.showTermsOfService) {
      if (this.props.location.pathname !== '/terms_of_service') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
          to: '/terms_of_service?redirect_to=' + encodeURIComponent(this.props.location.pathname)
        });
      }
    }

    return this.props.children;
  }

  onFocusListener() {
    actions_global_actions__WEBPACK_IMPORTED_MODULE_5__["emitBrowserFocus"](true);
  }

  onBlurListener() {
    actions_global_actions__WEBPACK_IMPORTED_MODULE_5__["emitBrowserFocus"](false);
  } // listen for messages from the desktop app


  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(LoggedIn, "propTypes", {
  currentUser: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  currentChannelId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  mfaRequired: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  enableTimezone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    autoUpdateTimezone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    getChannelURLAction: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
  }).isRequired,
  showTermsOfService: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(dispatch, "dispatch", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/logged_in/logged_in.jsx");
  reactHotLoader.register(getState, "getState", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/logged_in/logged_in.jsx");
  reactHotLoader.register(BACKSPACE_CHAR, "BACKSPACE_CHAR", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/logged_in/logged_in.jsx");
  reactHotLoader.register(LoggedIn, "LoggedIn", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/logged_in/logged_in.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/mattermost-redux/actions/timezone.js":
/*!***********************************************************!*\
  !*** ./node_modules/mattermost-redux/actions/timezone.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
var users_1 = __webpack_require__(/*! ../selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
var timezone_1 = __webpack_require__(/*! ../selectors/entities/timezone */ "./node_modules/mattermost-redux/selectors/entities/timezone.js");
var users_2 = __webpack_require__(/*! ./users */ "./node_modules/mattermost-redux/actions/users.js");
function autoUpdateTimezone(deviceTimezone) {
    var _this = this;
    return function (dispatch, getState) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var currentUer, currentTimezone, newTimezoneExists, timezone, updatedUser;
        return tslib_1.__generator(this, function (_a) {
            currentUer = users_1.getCurrentUser(getState());
            currentTimezone = timezone_1.getUserTimezone(getState(), currentUer.id);
            newTimezoneExists = currentTimezone.automaticTimezone !== deviceTimezone;
            if (currentTimezone.useAutomaticTimezone && newTimezoneExists) {
                timezone = {
                    useAutomaticTimezone: 'true',
                    automaticTimezone: deviceTimezone,
                    manualTimezone: currentTimezone.manualTimezone,
                };
                updatedUser = tslib_1.__assign(tslib_1.__assign({}, currentUer), { timezone: timezone });
                users_2.updateMe(updatedUser)(dispatch, getState);
            }
            return [2 /*return*/];
        });
    }); };
}
exports.autoUpdateTimezone = autoUpdateTimezone;
//# sourceMappingURL=timezone.js.map

/***/ })

}]);
//# sourceMappingURL=3.2099567b595738841964.js.map