(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./actions/views/mfa.js":
/*!******************************!*\
  !*** ./actions/views/mfa.js ***!
  \******************************/
/*! exports provided: activateMfa, deactivateMfa, generateMfaSecret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateMfa", function() { return activateMfa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deactivateMfa", function() { return deactivateMfa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMfaSecret", function() { return generateMfaSecret; });
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


function activateMfa(code) {
  return (dispatch, getState) => {
    const currentUserId = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__["getCurrentUserId"])(getState());
    return dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__["updateUserMfa"](currentUserId, true, code));
  };
}
function deactivateMfa() {
  return (dispatch, getState) => {
    const currentUserId = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__["getCurrentUserId"])(getState());
    return dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__["updateUserMfa"](currentUserId, false));
  };
}
function generateMfaSecret() {
  return (dispatch, getState) => {
    const currentUserId = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__["getCurrentUserId"])(getState());
    return dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__["generateMfaSecret"](currentUserId));
  };
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(activateMfa, "activateMfa", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/actions/views/mfa.js");
  reactHotLoader.register(deactivateMfa, "deactivateMfa", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/actions/views/mfa.js");
  reactHotLoader.register(generateMfaSecret, "generateMfaSecret", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/actions/views/mfa.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/access_history_modal/access_history_modal.tsx":
/*!******************************************************************!*\
  !*** ./components/access_history_modal/access_history_modal.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccessHistoryModal; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_audit_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/audit_table */ "./components/audit_table/index.ts");
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");


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





class AccessHistoryModal extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onShow", () => {
      // public for testing
      this.props.actions.getUserAudits(this.props.currentUserId, 0, 200);
    });

    _defineProperty(this, "onHide", () => {
      // public for testing
      this.setState({
        show: false
      });
    });

    this.state = {
      show: true
    };
  }

  componentDidMount() {
    this.onShow();
  }

  render() {
    let content;

    if (this.props.userAudits.length === 0) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_5__["default"], null);
    } else {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_audit_table__WEBPACK_IMPORTED_MODULE_4__["default"], {
        audits: this.props.userAudits,
        showIp: true,
        showSession: true
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      dialogClassName: "a11y__modal modal--scroll",
      show: this.state.show,
      onHide: this.onHide,
      onExited: this.props.onHide,
      bsSize: "large",
      role: "dialog",
      "aria-labelledby": "accessHistoryModalLabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
      closeButton: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, {
      componentClass: "h1",
      id: "accessHistoryModalLabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "access_history.title",
      defaultMessage: "Access History"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, null, content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Footer, {
      className: "modal-footer--invisible"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      id: "closeModalButton",
      type: "button",
      className: "btn btn-link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "general_button.close",
      defaultMessage: "Close"
    }))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(AccessHistoryModal, "propTypes", {
  onHide: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    getUserAudits: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
  }).isRequired,
  userAudits: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any).isRequired,
  currentUserId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AccessHistoryModal, "AccessHistoryModal", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/access_history_modal/access_history_modal.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/access_history_modal/index.ts":
/*!**************************************************!*\
  !*** ./components/access_history_modal/index.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _access_history_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./access_history_modal */ "./components/access_history_modal/access_history_modal.tsx");
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
  return {
    currentUserId: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__["getCurrentUserId"])(state),
    userAudits: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__["getUserAudits"])(state) || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      getUserAudits: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["getUserAudits"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_access_history_modal__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/access_history_modal/index.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/access_history_modal/index.ts");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/access_history_modal/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/activity_log_modal/activity_log_modal.jsx":
/*!**************************************************************!*\
  !*** ./components/activity_log_modal/activity_log_modal.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActivityLogModal; });
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_activity_log_modal_components_activity_log_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/activity_log_modal/components/activity_log.jsx */ "./components/activity_log_modal/components/activity_log.jsx");
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");


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







class ActivityLogModal extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "submitRevoke", (altId, e) => {
      e.preventDefault();
      var modalContent = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).closest('.modal-content'); // eslint-disable-line jquery/no-closest

      modalContent.addClass('animation--highlight');
      setTimeout(() => {
        modalContent.removeClass('animation--highlight');
      }, 1500);
      this.props.actions.revokeSession(this.props.currentUserId, altId).then(() => {
        this.props.actions.getSessions(this.props.currentUserId);
      });
    });

    _defineProperty(this, "onShow", () => {
      this.props.actions.getSessions(this.props.currentUserId);
    });

    _defineProperty(this, "onHide", () => {
      this.setState({
        show: false
      });
    });

    this.state = {
      show: true
    };
  }

  componentDidMount() {
    this.onShow();
  }

  render() {
    let content;

    if (this.props.sessions.loading) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_7__["default"], null);
    } else {
      const activityList = this.props.sessions.reduce((array, currentSession, index) => {
        if (currentSession.props.type === 'UserAccessToken') {
          return array;
        }

        array.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_activity_log_modal_components_activity_log_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: currentSession.id,
          index: index,
          locale: this.props.locale,
          currentSession: currentSession,
          submitRevoke: this.submitRevoke
        }));
        return array;
      }, []);
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
        role: "form"
      }, activityList);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
      dialogClassName: "a11y__modal modal--scroll",
      show: this.state.show,
      onHide: this.onHide,
      onExited: this.props.onHide,
      bsSize: "large",
      role: "dialog",
      "aria-labelledby": "activityLogModalLabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
      closeButton: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, {
      componentClass: "h1",
      id: "activityLogModalLabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "activity_log.activeSessions",
      defaultMessage: "Active Sessions"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "session-help-text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "activity_log.sessionsDescription",
      defaultMessage: "Sessions are created when you log in through a new browser on a device. Sessions let you use Mattermost without having to log in again for a time period specified by the system administrator. To end the session sooner, use the 'Log Out' button."
    })), content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, {
      className: "modal-footer--invisible"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      id: "closeModalButton",
      type: "button",
      className: "btn btn-link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "general_button.close",
      defaultMessage: "Close"
    }))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(ActivityLogModal, "propTypes", {
  /**
   * The current user id
   */
  currentUserId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Current user's sessions
   */
  sessions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object]).isRequired,

  /**
   * Current user's locale
   */
  locale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Function that's called when user closes the modal
   */
  onHide: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    /**
     * Function to refresh sessions from server
     */
    getSessions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

    /**
     * Function to revoke a particular session
     */
    revokeSession: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ActivityLogModal, "ActivityLogModal", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/activity_log_modal/activity_log_modal.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/activity_log_modal/components/activity_log.jsx":
/*!*******************************************************************!*\
  !*** ./components/activity_log_modal/components/activity_log.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActivityLog; });
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var _more_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./more_info */ "./components/activity_log_modal/components/more_info.tsx");


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







class ActivityLog extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleMoreInfo", () => {
      this.setState({
        moreInfo: true
      });
    });

    _defineProperty(this, "submitRevoke", e => {
      this.props.submitRevoke(this.props.currentSession.id, e);
    });

    _defineProperty(this, "isMobileSession", session => {
      return session.device_id && (session.device_id.includes('apple') || session.device_id.includes('android'));
    });

    _defineProperty(this, "mobileSessionInfo", session => {
      let deviceTypeId;
      let deviceTypeMessage;
      let devicePicture;
      let deviceTitle;

      if (session.device_id.includes('apple')) {
        devicePicture = 'fa fa-apple';
        deviceTitle = Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"])('device_icons.apple', 'Apple Icon');
        deviceTypeId = Object(utils_i18n__WEBPACK_IMPORTED_MODULE_6__["t"])('activity_log_modal.iphoneNativeClassicApp');
        deviceTypeMessage = 'iPhone Native Classic App';

        if (session.device_id.includes(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4__["General"].PUSH_NOTIFY_APPLE_REACT_NATIVE)) {
          deviceTypeId = Object(utils_i18n__WEBPACK_IMPORTED_MODULE_6__["t"])('activity_log_modal.iphoneNativeApp');
          deviceTypeMessage = 'iPhone Native App';
        }
      } else if (session.device_id.includes('android')) {
        devicePicture = 'fa fa-android';
        deviceTitle = Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"])('device_icons.android', 'Android Icon');
        deviceTypeId = Object(utils_i18n__WEBPACK_IMPORTED_MODULE_6__["t"])('activity_log_modal.androidNativeClassicApp');
        deviceTypeMessage = 'Android Native Classic App';

        if (session.device_id.includes(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4__["General"].PUSH_NOTIFY_ANDROID_REACT_NATIVE)) {
          deviceTypeId = Object(utils_i18n__WEBPACK_IMPORTED_MODULE_6__["t"])('activity_log_modal.androidNativeApp');
          deviceTypeMessage = 'Android Native App';
        }
      }

      return {
        devicePicture,
        deviceTitle,
        devicePlatform: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: deviceTypeId,
          defaultMessage: deviceTypeMessage
        })
      };
    });

    this.state = {
      moreInfo: false
    };
  }

  render() {
    const {
      index,
      locale,
      currentSession
    } = this.props;
    const lastAccessTime = new Date(currentSession.last_activity_at);
    let devicePlatform = currentSession.props.platform;
    let devicePicture = '';
    let deviceTitle = '';

    if (currentSession.props.platform === 'Windows') {
      devicePicture = 'fa fa-windows';
      deviceTitle = Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"])('device_icons.windows', 'Windows Icon');
    } else if (this.isMobileSession(currentSession)) {
      const sessionInfo = this.mobileSessionInfo(currentSession);
      devicePicture = sessionInfo.devicePicture;
      devicePlatform = sessionInfo.devicePlatform;
    } else if (currentSession.props.platform === 'Macintosh' || currentSession.props.platform === 'iPhone') {
      devicePicture = 'fa fa-apple';
      deviceTitle = Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"])('device_icons.apple', 'Apple Icon');
    } else if (currentSession.props.platform === 'Linux') {
      if (currentSession.props.os.indexOf('Android') >= 0) {
        devicePlatform = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "activity_log_modal.android",
          defaultMessage: "Android"
        });
        devicePicture = 'fa fa-android';
        deviceTitle = Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"])('device_icons.android', 'Android Icon');
      } else {
        devicePicture = 'fa fa-linux';
        deviceTitle = Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"])('device_icons.linux', 'Linux Icon');
      }
    } else if (currentSession.props.os.indexOf('Linux') !== -1) {
      devicePicture = 'fa fa-linux';
      deviceTitle = Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"])('device_icons.linux', 'Linux Icon');
    }

    if (currentSession.props.browser.indexOf('Desktop App') !== -1) {
      devicePlatform = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "activity_log_modal.desktop",
        defaultMessage: "Native Desktop App"
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: 'activityLogEntryKey' + index,
      className: "activity-log__table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "activity-log__report"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "report__platform"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: devicePicture,
      title: deviceTitle
    }), devicePlatform), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "report__info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "activity_log.lastActivity",
      defaultMessage: "Last activity: {date}, {time}",
      values: {
        date: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedDate"], {
          value: lastAccessTime,
          day: "2-digit",
          month: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_6__["getMonthLong"])(locale),
          year: "numeric"
        }),
        time: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedTime"], {
          value: lastAccessTime,
          hour: "2-digit",
          minute: "2-digit"
        })
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_more_info__WEBPACK_IMPORTED_MODULE_7__["default"], {
      locale: locale,
      currentSession: currentSession,
      moreInfo: this.state.moreInfo,
      handleMoreInfo: this.handleMoreInfo
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "activity-log__action"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      onClick: this.submitRevoke,
      className: "btn btn-primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "activity_log.logout",
      defaultMessage: "Log Out"
    }))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(ActivityLog, "propTypes", {
  /**
   * The index of this instance within the list
   */
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,

  /**
   * The current locale of the user
   */
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * The session that's to be displayed
   */
  currentSession: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
   * Function to revoke session
   */
  submitRevoke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ActivityLog, "ActivityLog", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/activity_log_modal/components/activity_log.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/activity_log_modal/components/more_info.tsx":
/*!****************************************************************!*\
  !*** ./components/activity_log_modal/components/more_info.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoreInfo; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



function MoreInfo(props) {
  const {
    locale,
    currentSession,
    handleMoreInfo,
    moreInfo
  } = props;

  if (moreInfo) {
    const firstAccessTime = new Date(currentSession.create_at);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "activity_log.firstTime",
      defaultMessage: "First time active: {date}, {time}",
      values: {
        date: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedDate"], {
          value: firstAccessTime,
          day: "2-digit",
          month: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_3__["getMonthLong"])(locale),
          year: "numeric"
        }),
        time: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedTime"], {
          value: firstAccessTime,
          hour: "2-digit",
          minute: "2-digit"
        })
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "activity_log.os",
      defaultMessage: "OS: {os}",
      values: {
        os: currentSession.props.os
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "activity_log.browser",
      defaultMessage: "Browser: {browser}",
      values: {
        browser: currentSession.props.browser
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "activity_log.sessionId",
      defaultMessage: "Session ID: {id}",
      values: {
        id: currentSession.id
      }
    })));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "theme",
    href: "#",
    onClick: handleMoreInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "activity_log.moreInfo",
    defaultMessage: "More info"
  }));
}
MoreInfo.propTypes = {
  locale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  currentSession: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    props: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      os: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
      platform: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
      browser: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
    }).isRequired,
    create_at: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    last_activity_at: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
  }).isRequired,
  handleMoreInfo: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  moreInfo: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MoreInfo, "MoreInfo", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/activity_log_modal/components/more_info.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/activity_log_modal/index.js":
/*!************************************************!*\
  !*** ./components/activity_log_modal/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var selectors_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! selectors/i18n */ "./selectors/i18n.js");
/* harmony import */ var _activity_log_modal_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity_log_modal.jsx */ "./components/activity_log_modal/activity_log_modal.jsx");
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
  return {
    currentUserId: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__["getCurrentUserId"])(state),
    sessions: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__["getUserSessions"])(state),
    locale: Object(selectors_i18n__WEBPACK_IMPORTED_MODULE_4__["getCurrentLocale"])(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      getSessions: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["getSessions"],
      revokeSession: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["revokeSession"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_activity_log_modal_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/activity_log_modal/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/activity_log_modal/index.js");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/activity_log_modal/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/suggestion/timezone_provider.jsx":
/*!*****************************************************!*\
  !*** ./components/suggestion/timezone_provider.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimezoneProvider; });
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/utils/timezone_utils */ "./node_modules/mattermost-redux/utils/timezone_utils.js");
/* harmony import */ var mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/timezone */ "./utils/timezone.jsx");
/* harmony import */ var _provider_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./provider.jsx */ "./components/suggestion/provider.jsx");
/* harmony import */ var _suggestion_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suggestion.jsx */ "./components/suggestion/suggestion.jsx");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class TimezoneSuggestion extends _suggestion_jsx__WEBPACK_IMPORTED_MODULE_6__["default"] {
  render() {
    const {
      item,
      isSelection
    } = this.props;
    const timezone = item;
    let className = 'mentions__name';

    if (isSelection) {
      className += ' suggestion--selected';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({
      onClick: this.handleClick,
      className: className,
      ref: node => {
        this.node = node;
      }
    }, _suggestion_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].baseProps), timezone);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

class TimezoneProvider extends _provider_jsx__WEBPACK_IMPORTED_MODULE_5__["default"] {
  handlePretextChanged(timezonePrefix, resultsCallback) {
    if (timezonePrefix.length === 0) {
      this.displayAllTimezones(resultsCallback, timezonePrefix);
      return true;
    }

    if (timezonePrefix) {
      this.filterTimezones(resultsCallback, timezonePrefix);
      return true;
    }

    return false;
  }

  async displayAllTimezones(resultsCallback) {
    resultsCallback({
      matchedPretext: '',
      terms: Object(utils_timezone__WEBPACK_IMPORTED_MODULE_4__["getSupportedTimezones"])(),
      items: Object(utils_timezone__WEBPACK_IMPORTED_MODULE_4__["getSupportedTimezones"])(),
      component: TimezoneSuggestion
    });
  }

  async filterTimezones(resultsCallback, timezonePrefix) {
    const filteredTimezones = Object(utils_timezone__WEBPACK_IMPORTED_MODULE_4__["getSupportedTimezones"])().filter(t => Object(mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_3__["getTimezoneRegion"])(t).toLowerCase().indexOf(timezonePrefix) >= 0 || t.toLowerCase().indexOf(timezonePrefix) >= 0);
    resultsCallback({
      matchedPretext: timezonePrefix,
      terms: filteredTimezones,
      items: filteredTimezones,
      component: TimezoneSuggestion
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TimezoneSuggestion, "TimezoneSuggestion", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/suggestion/timezone_provider.jsx");
  reactHotLoader.register(TimezoneProvider, "TimezoneProvider", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/suggestion/timezone_provider.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/advanced/index.js":
/*!****************************************************!*\
  !*** ./components/user_settings/advanced/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/preferences */ "./node_modules/mattermost-redux/selectors/entities/preferences.js");
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/actions/preferences */ "./node_modules/mattermost-redux/actions/preferences.js");
/* harmony import */ var mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var _user_settings_advanced_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user_settings_advanced.jsx */ "./components/user_settings/advanced/user_settings_advanced.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










function makeMapStateToProps() {
  const getAdvancedSettingsCategory = Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_4__["makeGetCategory"])();
  return state => {
    const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__["getConfig"])(state);
    const enablePreviewFeatures = config.EnablePreviewFeatures === 'true';
    const enableUserDeactivation = config.EnableUserDeactivation === 'true';
    return {
      advancedSettingsCategory: getAdvancedSettingsCategory(state, utils_constants__WEBPACK_IMPORTED_MODULE_7__["Preferences"].CATEGORY_ADVANCED_SETTINGS),
      sendOnCtrlEnter: Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_4__["get"])(state, utils_constants__WEBPACK_IMPORTED_MODULE_7__["Preferences"].CATEGORY_ADVANCED_SETTINGS, 'send_on_ctrl_enter', 'false'),
      codeBlockOnCtrlEnter: Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_4__["get"])(state, utils_constants__WEBPACK_IMPORTED_MODULE_7__["Preferences"].CATEGORY_ADVANCED_SETTINGS, 'code_block_ctrl_enter', 'true'),
      formatting: Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_4__["get"])(state, utils_constants__WEBPACK_IMPORTED_MODULE_7__["Preferences"].CATEGORY_ADVANCED_SETTINGS, 'formatting', 'true'),
      joinLeave: Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_4__["get"])(state, utils_constants__WEBPACK_IMPORTED_MODULE_7__["Preferences"].CATEGORY_ADVANCED_SETTINGS, 'join_leave', 'true'),
      currentUser: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__["getCurrentUser"])(state),
      enablePreviewFeatures,
      enableUserDeactivation
    };
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      savePreferences: mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_5__["savePreferences"],
      updateUserActive: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_6__["updateUserActive"],
      revokeAllSessionsForUser: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_6__["revokeAllSessionsForUser"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(makeMapStateToProps, mapDispatchToProps)(_user_settings_advanced_jsx__WEBPACK_IMPORTED_MODULE_8__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(makeMapStateToProps, "makeMapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/advanced/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/advanced/index.js");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/advanced/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/advanced/join_leave_section/index.js":
/*!***********************************************************************!*\
  !*** ./components/user_settings/advanced/join_leave_section/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/preferences */ "./node_modules/mattermost-redux/actions/preferences.js");
/* harmony import */ var mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/preferences */ "./node_modules/mattermost-redux/selectors/entities/preferences.js");
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _join_leave_section_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./join_leave_section.jsx */ "./components/user_settings/advanced/join_leave_section/join_leave_section.jsx");
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
  const joinLeave = Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_4__["get"])(state, mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Preferences"].CATEGORY_ADVANCED_SETTINGS, mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Preferences"].ADVANCED_FILTER_JOIN_LEAVE, 'true');
  return {
    currentUserId: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_5__["getCurrentUserId"])(state),
    joinLeave
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      savePreferences: mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_2__["savePreferences"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_join_leave_section_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/advanced/join_leave_section/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/advanced/join_leave_section/index.js");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/advanced/join_leave_section/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/advanced/join_leave_section/join_leave_section.jsx":
/*!*************************************************************************************!*\
  !*** ./components/user_settings/advanced/join_leave_section/join_leave_section.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JoinLeaveSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/setting_item_max.jsx */ "./components/setting_item_max.jsx");
/* harmony import */ var components_setting_item_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/setting_item_min */ "./components/setting_item_min/index.ts");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
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







class JoinLeaveSection extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleOnChange", e => {
      const value = e.currentTarget.value;
      this.setState({
        joinLeaveState: value
      });
    });

    _defineProperty(this, "handleUpdateSection", section => {
      if (!section) {
        this.setState({
          joinLeaveState: this.props.joinLeave
        });
      }

      this.props.onUpdateSection(section);
    });

    _defineProperty(this, "handleSubmit", () => {
      const {
        actions,
        currentUserId,
        onUpdateSection
      } = this.props;
      const joinLeavePreference = {
        category: mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Preferences"].CATEGORY_ADVANCED_SETTINGS,
        user_id: currentUserId,
        name: mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Preferences"].ADVANCED_FILTER_JOIN_LEAVE,
        value: this.state.joinLeaveState
      };
      actions.savePreferences(currentUserId, [joinLeavePreference]);
      onUpdateSection();
    });

    this.state = {
      joinLeaveState: props.joinLeave
    };
  }

  render() {
    const {
      joinLeaveState
    } = this.state;

    if (this.props.activeSection === utils_constants__WEBPACK_IMPORTED_MODULE_6__["AdvancedSections"].JOIN_LEAVE) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "user.settings.advance.joinLeaveTitle",
          defaultMessage: "Enable Join/Leave Messages"
        }),
        inputs: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
          key: "joinLeaveSetting"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend", {
          className: "form-legend hidden-label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "user.settings.advance.joinLeaveTitle",
          defaultMessage: "Enable Join/Leave Messages"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          id: "joinLeaveOn",
          type: "radio",
          value: 'true',
          name: utils_constants__WEBPACK_IMPORTED_MODULE_6__["AdvancedSections"].JOIN_LEAVE,
          checked: joinLeaveState === 'true',
          onChange: this.handleOnChange
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "user.settings.advance.on",
          defaultMessage: "On"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          id: "joinLeaveOff",
          type: "radio",
          value: 'false',
          name: utils_constants__WEBPACK_IMPORTED_MODULE_6__["AdvancedSections"].JOIN_LEAVE,
          checked: joinLeaveState === 'false',
          onChange: this.handleOnChange
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "user.settings.advance.off",
          defaultMessage: "Off"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "mt-5"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "user.settings.advance.joinLeaveDesc",
          defaultMessage: "When \"On\", System Messages saying a user has joined or left a channel will be visible. When \"Off\", the System Messages about joining or leaving a channel will be hidden. A message will still show up when you are added to a channel, so you can receive a notification."
        })))],
        setting: utils_constants__WEBPACK_IMPORTED_MODULE_6__["AdvancedSections"].JOIN_LEAVE,
        submit: this.handleSubmit,
        saving: this.state.isSaving,
        server_error: this.state.serverError,
        updateSection: this.handleUpdateSection
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "user.settings.advance.joinLeaveTitle",
        defaultMessage: "Enable Join/Leave Messages"
      }),
      describe: this.props.renderOnOffLabel(joinLeaveState),
      section: utils_constants__WEBPACK_IMPORTED_MODULE_6__["AdvancedSections"].JOIN_LEAVE,
      updateSection: this.handleUpdateSection
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(JoinLeaveSection, "propTypes", {
  activeSection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  currentUserId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  joinLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onUpdateSection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  renderOnOffLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    savePreferences: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(JoinLeaveSection, "JoinLeaveSection", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/advanced/join_leave_section/join_leave_section.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/advanced/user_settings_advanced.jsx":
/*!**********************************************************************!*\
  !*** ./components/user_settings/advanced/user_settings_advanced.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdvancedSettingsDisplay; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var actions_global_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions/global_actions */ "./actions/global_actions.tsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/setting_item_max.jsx */ "./components/setting_item_max.jsx");
/* harmony import */ var components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/setting_item_min */ "./components/setting_item_min/index.ts");
/* harmony import */ var components_confirm_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/confirm_modal */ "./components/confirm_modal.tsx");
/* harmony import */ var components_widgets_icons_fa_back_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/widgets/icons/fa_back_icon */ "./components/widgets/icons/fa_back_icon.jsx");
/* harmony import */ var _join_leave_section__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./join_leave_section */ "./components/user_settings/advanced/join_leave_section/index.js");



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

/* eslint-disable react/no-string-refs */












const PreReleaseFeatures = utils_constants__WEBPACK_IMPORTED_MODULE_6__["default"].PRE_RELEASE_FEATURES;
class AdvancedSettingsDisplay extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "getStateFromProps", () => {
      const advancedSettings = this.props.advancedSettingsCategory;
      const settings = {
        send_on_ctrl_enter: this.props.sendOnCtrlEnter,
        code_block_ctrl_enter: this.props.codeBlockOnCtrlEnter,
        formatting: this.props.formatting,
        join_leave: this.props.joinLeave
      };
      const preReleaseFeaturesKeys = Object.keys(PreReleaseFeatures);
      let enabledFeatures = 0;

      for (const as of advancedSettings) {
        for (const key of preReleaseFeaturesKeys) {
          const feature = PreReleaseFeatures[key];

          if (as.name === utils_constants__WEBPACK_IMPORTED_MODULE_6__["default"].FeatureTogglePrefix + feature.label) {
            settings[as.name] = as.value;

            if (as.value === 'true') {
              enabledFeatures += 1;
            }
          }
        }
      }

      const isSaving = false;
      const previewFeaturesEnabled = this.props.enablePreviewFeatures;
      const showDeactivateAccountModal = false;
      return {
        preReleaseFeatures: PreReleaseFeatures,
        settings,
        preReleaseFeaturesKeys,
        enabledFeatures,
        isSaving,
        previewFeaturesEnabled,
        showDeactivateAccountModal
      };
    });

    _defineProperty(this, "updateSetting", (setting, value) => {
      const settings = this.state.settings;
      settings[setting] = value;
      this.setState(settings);
    });

    _defineProperty(this, "toggleFeature", (feature, checked) => {
      const settings = this.state.settings;
      settings[utils_constants__WEBPACK_IMPORTED_MODULE_6__["default"].FeatureTogglePrefix + feature] = String(checked);
      let enabledFeatures = 0;
      Object.keys(this.state.settings).forEach(setting => {
        if (setting.lastIndexOf(utils_constants__WEBPACK_IMPORTED_MODULE_6__["default"].FeatureTogglePrefix) === 0 && this.state.settings[setting] === 'true') {
          enabledFeatures++;
        }
      });
      this.setState({
        settings,
        enabledFeatures
      });
    });

    _defineProperty(this, "saveEnabledFeatures", () => {
      const features = [];
      Object.keys(this.state.settings).forEach(setting => {
        if (setting.lastIndexOf(utils_constants__WEBPACK_IMPORTED_MODULE_6__["default"].FeatureTogglePrefix) === 0) {
          features.push(setting);
        }
      });
      this.handleSubmit(features);
    });

    _defineProperty(this, "handleSubmit", async settings => {
      const preferences = [];
      const {
        actions,
        currentUser
      } = this.props;
      const userId = currentUser.id; // this should be refactored so we can actually be certain about what type everything is

      (Array.isArray(settings) ? settings : [settings]).forEach(setting => {
        preferences.push({
          user_id: userId,
          category: utils_constants__WEBPACK_IMPORTED_MODULE_6__["default"].Preferences.CATEGORY_ADVANCED_SETTINGS,
          name: setting,
          value: this.state.settings[setting]
        });
      });
      this.setState({
        isSaving: true
      });
      await actions.savePreferences(userId, preferences);
      this.handleUpdateSection('');
    });

    _defineProperty(this, "handleDeactivateAccountSubmit", async () => {
      const userId = this.props.currentUser.id;
      this.setState({
        isSaving: true
      });
      this.props.actions.updateUserActive(userId, false).then(({
        error
      }) => {
        if (error) {
          this.setState({
            serverError: error.message
          });
        }
      });
      const {
        data,
        error
      } = await this.props.actions.revokeAllSessionsForUser(userId);

      if (data) {
        Object(actions_global_actions__WEBPACK_IMPORTED_MODULE_5__["emitUserLoggedOutEvent"])();
      } else if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    _defineProperty(this, "handleShowDeactivateAccountModal", () => {
      this.setState({
        showDeactivateAccountModal: true
      });
    });

    _defineProperty(this, "handleHideDeactivateAccountModal", () => {
      this.setState({
        showDeactivateAccountModal: false
      });
    });

    _defineProperty(this, "handleUpdateSection", section => {
      if (!section) {
        this.setState(this.getStateFromProps());
      }

      this.setState({
        isSaving: false
      });
      this.props.updateSection(section);
    });

    _defineProperty(this, "getCtrlSendText", () => {
      const description = {
        default: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.advance.sendDesc'),
          defaultMessage: 'When enabled, CTRL + ENTER will send the message and ENTER inserts a new line.'
        },
        mac: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.advance.sendDesc.mac'),
          defaultMessage: 'When enabled, ⌘ + ENTER will send the message and ENTER inserts a new line.'
        }
      };
      const title = {
        default: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.advance.sendTitle'),
          defaultMessage: 'Send Messages on CTRL+ENTER'
        },
        mac: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.advance.sendTitle.mac'),
          defaultMessage: 'Send Messages on ⌘+ENTER'
        }
      };

      if (utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["isMac"]()) {
        return {
          ctrlSendTitle: title.mac,
          ctrlSendDesc: description.mac
        };
      }

      return {
        ctrlSendTitle: title.default,
        ctrlSendDesc: description.default
      };
    });

    _defineProperty(this, "renderFormattingSection", () => {
      if (this.props.activeSection === 'formatting') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.advance.formattingTitle",
            defaultMessage: "Enable Post Formatting"
          }),
          inputs: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("fieldset", {
            key: "formattingSetting"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("legend", {
            className: "form-legend hidden-label"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.advance.formattingTitle",
            defaultMessage: "Enable Post Formatting"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
            id: "postFormattingOn",
            type: "radio",
            name: "formatting",
            checked: this.state.settings.formatting !== 'false',
            onChange: this.updateSetting.bind(this, 'formatting', 'true')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.advance.on",
            defaultMessage: "On"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
            id: "postFormattingOff",
            type: "radio",
            name: "formatting",
            checked: this.state.settings.formatting === 'false',
            onChange: this.updateSetting.bind(this, 'formatting', 'false')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.advance.off",
            defaultMessage: "Off"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
            className: "mt-5"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.advance.formattingDesc",
            defaultMessage: "If enabled, posts will be formatted to create links, show emoji, style the text, and add line breaks. By default, this setting is enabled."
          })))],
          setting: 'formatting',
          submit: this.handleSubmit,
          saving: this.state.isSaving,
          server_error: this.state.serverError,
          updateSection: this.handleUpdateSection
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.advance.formattingTitle",
          defaultMessage: "Enable Post Formatting"
        }),
        describe: this.renderOnOffLabel(this.state.settings.formatting),
        section: 'formatting',
        updateSection: this.handleUpdateSection
      });
    });

    this.state = this.getStateFromProps();
  }

  renderOnOffLabel(enabled) {
    if (enabled === 'false') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.advance.off",
        defaultMessage: "Off"
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "user.settings.advance.on",
      defaultMessage: "On"
    });
  }

  renderCtrlEnterLabel() {
    const ctrlEnter = this.state.settings.send_on_ctrl_enter;
    const codeBlockCtrlEnter = this.state.settings.code_block_ctrl_enter;

    if (ctrlEnter === 'false' && codeBlockCtrlEnter === 'false') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.advance.off",
        defaultMessage: "Off"
      });
    } else if (ctrlEnter === 'true' && codeBlockCtrlEnter === 'true') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.advance.onForAllMessages",
        defaultMessage: "On for all messages"
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "user.settings.advance.onForCode",
      defaultMessage: "On only for code blocks starting with ```"
    });
  }

  renderFeatureLabel(feature) {
    switch (feature) {
      case 'MARKDOWN_PREVIEW':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.advance.markdown_preview",
          defaultMessage: "Show markdown preview option in message input box"
        });

      default:
        return null;
    }
  }

  render() {
    const serverError = this.state.serverError || null;
    let ctrlSendSection;
    const {
      ctrlSendTitle,
      ctrlSendDesc
    } = this.getCtrlSendText();

    if (this.props.activeSection === 'advancedCtrlSend') {
      const ctrlSendActive = [this.state.settings.send_on_ctrl_enter === 'true', this.state.settings.send_on_ctrl_enter === 'false' && this.state.settings.code_block_ctrl_enter === 'true', this.state.settings.send_on_ctrl_enter === 'false' && this.state.settings.code_block_ctrl_enter === 'false'];
      const inputs = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("fieldset", {
        key: "ctrlSendSetting"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("legend", {
        className: "form-legend hidden-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], ctrlSendTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
        id: "ctrlSendOn",
        type: "radio",
        name: "sendOnCtrlEnter",
        checked: ctrlSendActive[0],
        onChange: () => {
          this.updateSetting('send_on_ctrl_enter', 'true');
          this.updateSetting('code_block_ctrl_enter', 'true');
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.advance.onForAllMessages",
        defaultMessage: "On for all messages"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
        id: "ctrlSendOnForCode",
        type: "radio",
        name: "sendOnCtrlEnter",
        checked: ctrlSendActive[1],
        onChange: () => {
          this.updateSetting('send_on_ctrl_enter', 'false');
          this.updateSetting('code_block_ctrl_enter', 'true');
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.advance.onForCode",
        defaultMessage: "On only for code blocks starting with ```"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
        id: "ctrlSendOff",
        type: "radio",
        name: "sendOnCtrlEnter",
        checked: ctrlSendActive[2],
        onChange: () => {
          this.updateSetting('send_on_ctrl_enter', 'false');
          this.updateSetting('code_block_ctrl_enter', 'false');
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.advance.off",
        defaultMessage: "Off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], ctrlSendDesc)))];
      ctrlSendSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], ctrlSendTitle),
        inputs: inputs,
        submit: this.handleSubmit.bind(this, ['send_on_ctrl_enter', 'code_block_ctrl_enter']),
        saving: this.state.isSaving,
        server_error: serverError,
        updateSection: this.handleUpdateSection
      });
    } else {
      ctrlSendSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], ctrlSendTitle),
        describe: this.renderCtrlEnterLabel(),
        section: 'advancedCtrlSend',
        updateSection: this.handleUpdateSection
      });
    }

    const formattingSection = this.renderFormattingSection();
    let formattingSectionDivider = null;

    if (formattingSection) {
      formattingSectionDivider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "divider-light"
      });
    }

    let previewFeaturesSection;
    let previewFeaturesSectionDivider;

    if (this.state.previewFeaturesEnabled && this.state.preReleaseFeaturesKeys.length > 0) {
      previewFeaturesSectionDivider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "divider-light"
      });

      if (this.props.activeSection === 'advancedPreviewFeatures') {
        const inputs = [];
        this.state.preReleaseFeaturesKeys.forEach(key => {
          const feature = this.state.preReleaseFeatures[key];
          inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
            key: 'advancedPreviewFeatures_' + feature.label
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
            className: "checkbox"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
            id: 'advancedPreviewFeatures' + feature.label,
            type: "checkbox",
            checked: this.state.settings[utils_constants__WEBPACK_IMPORTED_MODULE_6__["default"].FeatureTogglePrefix + feature.label] === 'true',
            onChange: e => {
              this.toggleFeature(feature.label, e.target.checked);
            }
          }), this.renderFeatureLabel(key)))));
        });
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          key: "advancedPreviewFeatures_helptext"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.advance.preReleaseDesc",
          defaultMessage: "Check any pre-released features you'd like to preview.  You may also need to refresh the page before the setting will take effect."
        })));
        previewFeaturesSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.advance.preReleaseTitle",
            defaultMessage: "Preview Pre-release Features"
          }),
          inputs: inputs,
          submit: this.saveEnabledFeatures,
          saving: this.state.isSaving,
          server_error: serverError,
          updateSection: this.handleUpdateSection
        });
      } else {
        previewFeaturesSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__["default"], {
          title: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["localizeMessage"]('user.settings.advance.preReleaseTitle', 'Preview Pre-release Features'),
          describe: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.advance.enabledFeatures",
            defaultMessage: "{count, number} {count, plural, one {Feature} other {Features}} Enabled",
            values: {
              count: this.state.enabledFeatures
            }
          }),
          section: 'advancedPreviewFeatures',
          updateSection: this.handleUpdateSection
        });
      }
    }

    let deactivateAccountSection = '';
    let makeConfirmationModal = '';
    const currentUser = this.props.currentUser;

    if (currentUser.auth_service === '' && this.props.enableUserDeactivation) {
      if (this.props.activeSection === 'deactivateAccount') {
        deactivateAccountSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.advance.deactivateAccountTitle",
            defaultMessage: "Deactivate Account"
          }),
          inputs: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
            key: "formattingSetting"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.advance.deactivateDesc",
            defaultMessage: "Deactivating your account removes your ability to log in to this server and disables all email and mobile notifications. To reactivate your account, contact your System Administrator."
          })))],
          saveButtonText: 'Deactivate',
          setting: 'deactivateAccount',
          submit: this.handleShowDeactivateAccountModal,
          saving: this.state.isSaving,
          server_error: this.state.serverError,
          updateSection: this.handleUpdateSection
        });
      } else {
        deactivateAccountSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__["default"], {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.advance.deactivateAccountTitle",
            defaultMessage: "Deactivate Account"
          }),
          describe: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.advance.deactivateDescShort",
            defaultMessage: "Click 'Edit' to deactivate your account"
          }),
          section: 'deactivateAccount',
          updateSection: this.handleUpdateSection
        });
      }

      const confirmButtonClass = 'btn btn-danger';
      const deactivateMemberButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.advance.deactivate_member_modal.deactivateButton",
        defaultMessage: "Yes, deactivate my account"
      });
      makeConfirmationModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_confirm_modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        show: this.state.showDeactivateAccountModal,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.advance.confirmDeactivateAccountTitle",
          defaultMessage: "Confirm Deactivation"
        }),
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.advance.confirmDeactivateDesc",
          defaultMessage: "Are you sure you want to deactivate your account? This can only be reversed by your System Administrator."
        }),
        confirmButtonClass: confirmButtonClass,
        confirmButtonText: deactivateMemberButton,
        onConfirm: this.handleDeactivateAccountSubmit,
        onCancel: this.handleHideDeactivateAccountModal
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      id: "closeButton",
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.props.closeModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      "aria-hidden": "true"
    }, '×')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
      className: "modal-title",
      ref: "title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "modal-back"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      onClick: this.props.collapseModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_widgets_icons_fa_back_icon__WEBPACK_IMPORTED_MODULE_12__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "user.settings.advance.title",
      defaultMessage: "Advanced Settings"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "user-settings"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
      className: "tab-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "user.settings.advance.title",
      defaultMessage: "Advanced Settings"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "divider-dark first"
    }), ctrlSendSection, formattingSectionDivider, formattingSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "divider-light"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_join_leave_section__WEBPACK_IMPORTED_MODULE_13__["default"], {
      activeSection: this.props.activeSection,
      onUpdateSection: this.handleUpdateSection,
      renderOnOffLabel: this.renderOnOffLabel
    }), previewFeaturesSectionDivider, previewFeaturesSection, formattingSectionDivider, deactivateAccountSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "divider-dark"
    }), makeConfirmationModal));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
/* eslint-enable react/no-string-refs */

_defineProperty(AdvancedSettingsDisplay, "propTypes", {
  currentUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  advancedSettingsCategory: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  sendOnCtrlEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  codeBlockOnCtrlEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  formatting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  joinLeave: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  updateSection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  activeSection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  closeModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  collapseModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  enablePreviewFeatures: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  enableUserDeactivation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    savePreferences: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    updateUserActive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    revokeAllSessionsForUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PreReleaseFeatures, "PreReleaseFeatures", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/advanced/user_settings_advanced.jsx");
  reactHotLoader.register(AdvancedSettingsDisplay, "AdvancedSettingsDisplay", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/advanced/user_settings_advanced.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/display/index.ts":
/*!***************************************************!*\
  !*** ./components/user_settings/display/index.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/preferences */ "./node_modules/mattermost-redux/actions/preferences.js");
/* harmony import */ var mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_actions_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/actions/general */ "./node_modules/mattermost-redux/actions/general.js");
/* harmony import */ var mattermost_redux_actions_general__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_general__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_actions_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/actions/timezone */ "./node_modules/mattermost-redux/actions/timezone.js");
/* harmony import */ var mattermost_redux_actions_timezone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_timezone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mattermost-redux/selectors/entities/preferences */ "./node_modules/mattermost-redux/selectors/entities/preferences.js");
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mattermost_redux_selectors_entities_timezone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mattermost-redux/selectors/entities/timezone */ "./node_modules/mattermost-redux/selectors/entities/timezone.js");
/* harmony import */ var mattermost_redux_selectors_entities_timezone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_timezone__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mattermost-redux/utils/timezone_utils */ "./node_modules/mattermost-redux/utils/timezone_utils.js");
/* harmony import */ var mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var _user_settings_display__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user_settings_display */ "./components/user_settings/display/user_settings_display.tsx");
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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__["getConfig"])(state);
  const timezones = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__["getSupportedTimezones"])(state);
  const currentUserId = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__["getCurrentUserId"])(state);
  const userTimezone = Object(mattermost_redux_selectors_entities_timezone__WEBPACK_IMPORTED_MODULE_8__["getUserTimezone"])(state, currentUserId);
  const automaticTimezoneNotSet = userTimezone && userTimezone.useAutomaticTimezone && !userTimezone.automaticTimezone;
  const shouldAutoUpdateTimezone = !userTimezone || automaticTimezoneNotSet;
  const allowCustomThemes = config.AllowCustomThemes === 'true';
  const enableLinkPreviews = config.EnableLinkPreviews === 'true';
  const defaultClientLocale = config.DefaultClientLocale;
  const enableThemeSelection = config.EnableThemeSelection === 'true';
  const enableTimezone = config.ExperimentalTimezone === 'true';
  const lockTeammateNameDisplay = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__["getLicense"])(state).LockTeammateNameDisplay === 'true' && config.LockTeammateNameDisplay === 'true';
  const configTeammateNameDisplay = config.TeammateNameDisplay;
  return {
    lockTeammateNameDisplay,
    allowCustomThemes,
    configTeammateNameDisplay,
    enableLinkPreviews,
    defaultClientLocale,
    enableThemeSelection,
    enableTimezone,
    timezones,
    userTimezone,
    shouldAutoUpdateTimezone,
    currentUserTimezone: Object(mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_9__["getUserCurrentTimezone"])(userTimezone),
    militaryTime: Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_7__["get"])(state, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].CATEGORY_DISPLAY_SETTINGS, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].USE_MILITARY_TIME, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].USE_MILITARY_TIME_DEFAULT),
    teammateNameDisplay: Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_7__["get"])(state, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].CATEGORY_DISPLAY_SETTINGS, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].NAME_NAME_FORMAT, configTeammateNameDisplay),
    channelDisplayMode: Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_7__["get"])(state, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].CATEGORY_DISPLAY_SETTINGS, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].CHANNEL_DISPLAY_MODE, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].CHANNEL_DISPLAY_MODE_DEFAULT),
    messageDisplay: Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_7__["get"])(state, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].CATEGORY_DISPLAY_SETTINGS, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].MESSAGE_DISPLAY, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].MESSAGE_DISPLAY_DEFAULT),
    collapseDisplay: Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_7__["get"])(state, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].CATEGORY_DISPLAY_SETTINGS, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].COLLAPSE_DISPLAY, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].COLLAPSE_DISPLAY_DEFAULT),
    linkPreviewDisplay: Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_7__["get"])(state, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].CATEGORY_DISPLAY_SETTINGS, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].LINK_PREVIEW_DISPLAY, utils_constants__WEBPACK_IMPORTED_MODULE_10__["Preferences"].LINK_PREVIEW_DISPLAY_DEFAULT)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      getSupportedTimezones: mattermost_redux_actions_general__WEBPACK_IMPORTED_MODULE_3__["getSupportedTimezones"],
      autoUpdateTimezone: mattermost_redux_actions_timezone__WEBPACK_IMPORTED_MODULE_4__["autoUpdateTimezone"],
      savePreferences: mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_2__["savePreferences"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_user_settings_display__WEBPACK_IMPORTED_MODULE_11__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/index.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/index.ts");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/display/manage_languages/index.ts":
/*!********************************************************************!*\
  !*** ./components/user_settings/display/manage_languages/index.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _manage_languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage_languages */ "./components/user_settings/display/manage_languages/manage_languages.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      updateMe: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["updateMe"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(_manage_languages__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/manage_languages/index.ts");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/manage_languages/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/display/manage_languages/manage_languages.tsx":
/*!********************************************************************************!*\
  !*** ./components/user_settings/display/manage_languages/manage_languages.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ManageLanguage; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var i18n_i18n_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18n/i18n.jsx */ "./i18n/i18n.jsx");
/* harmony import */ var components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/setting_item_max.jsx */ "./components/setting_item_max.jsx");
/* harmony import */ var components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/formatted_markdown_message.jsx */ "./components/formatted_markdown_message.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class ManageLanguage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "reactSelectContainer", void 0);

    _defineProperty(this, "handleContainerKeyDown", e => {
      const modalBody = document.querySelector('.modal-body');

      if (Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["isKeyPressed"])(e, utils_constants__WEBPACK_IMPORTED_MODULE_8__["default"].KeyCodes.ESCAPE) && this.state.openMenu) {
        modalBody === null || modalBody === void 0 ? void 0 : modalBody.classList.remove('no-scroll');
        this.setState({
          openMenu: false
        });
        e.stopPropagation();
      }
    });

    _defineProperty(this, "handleKeyDown", e => {
      const modalBody = document.querySelector('.modal-body');

      if (Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["isKeyPressed"])(e, utils_constants__WEBPACK_IMPORTED_MODULE_8__["default"].KeyCodes.ENTER)) {
        modalBody === null || modalBody === void 0 ? void 0 : modalBody.classList.add('no-scroll');
        this.setState({
          openMenu: true
        });
      }
    });

    _defineProperty(this, "setLanguage", selectedOption => {
      if (selectedOption && 'value' in selectedOption) {
        this.setState({
          locale: selectedOption.value,
          selectedOption
        });
      }
    });

    _defineProperty(this, "changeLanguage", () => {
      if (this.props.user.locale === this.state.locale) {
        this.props.updateSection('');
      } else {
        this.submitUser(_objectSpread(_objectSpread({}, this.props.user), {}, {
          locale: this.state.locale
        }));
      }
    });

    _defineProperty(this, "submitUser", user => {
      this.setState({
        isSaving: true
      });
      this.props.actions.updateMe(user).then(res => {
        if ('data' in res) {// Do nothing since changing the locale essentially refreshes the page
        } else if ('error' in res) {
          let serverError;
          const {
            error
          } = res;

          if (error instanceof Error) {
            serverError = error.message;
          } else {
            serverError = error;
          }

          this.setState({
            serverError,
            isSaving: false
          });
        }
      });
    });

    _defineProperty(this, "handleMenuClose", () => {
      const modalBody = document.querySelector('.modal-body');

      if (modalBody) {
        modalBody.classList.remove('no-scroll');
      }

      this.setState({
        openMenu: false
      });
    });

    _defineProperty(this, "handleMenuOpen", () => {
      const modalBody = document.querySelector('.modal-body');

      if (modalBody) {
        modalBody.classList.add('no-scroll');
      }

      this.setState({
        openMenu: true
      });
    });

    const locales = i18n_i18n_jsx__WEBPACK_IMPORTED_MODULE_4__["getLanguages"]();
    const userLocale = props.locale;
    const _selectedOption = {
      value: locales[userLocale].value,
      label: locales[userLocale].name
    };
    this.reactSelectContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.state = {
      locale: props.locale,
      selectedOption: _selectedOption,
      isSaving: false,
      openMenu: false
    };
  }

  componentDidMount() {
    const reactSelectContainer = this.reactSelectContainer.current;

    if (reactSelectContainer) {
      reactSelectContainer.addEventListener('keydown', this.handleContainerKeyDown);
    }
  }

  componentWillUnmount() {
    if (this.reactSelectContainer.current) {
      this.reactSelectContainer.current.removeEventListener('keydown', this.handleContainerKeyDown);
    }
  }

  render() {
    let serverError;

    if (this.state.serverError) {
      serverError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "has-error"
      }, this.state.serverError);
    }

    const options = [];
    const locales = i18n_i18n_jsx__WEBPACK_IMPORTED_MODULE_4__["getLanguages"]();
    const languages = Object.keys(locales).map(l => {
      return {
        value: locales[l].value,
        name: locales[l].name,
        order: locales[l].order
      };
    }).sort((a, b) => a.order - b.order);
    languages.forEach(lang => {
      options.push({
        value: lang.value,
        label: lang.name
      });
    });
    const reactStyles = {
      menuPortal: provided => _objectSpread(_objectSpread({}, provided), {}, {
        zIndex: 9999
      })
    };
    const input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: "changeLanguage"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "control-label",
      id: "changeInterfaceLanguageLabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "user.settings.languages.change",
      defaultMessage: "Change interface language"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      ref: this.reactSelectContainer,
      className: "pt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "react-select react-select-top",
      classNamePrefix: "react-select",
      id: "displayLanguage",
      menuIsOpen: this.state.openMenu,
      menuPortalTarget: document.body,
      styles: reactStyles,
      options: options,
      clearable: false,
      onChange: this.setLanguage,
      onKeyDown: this.handleKeyDown,
      value: this.state.selectedOption,
      onMenuClose: this.handleMenuClose,
      onMenuOpen: this.handleMenuOpen,
      "aria-labelledby": "changeInterfaceLanguageLabel"
    }), serverError), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "user.settings.languages.promote",
      defaultMessage: "Select which language Mattermost displays in the user interface.\\n \\nWould you like to help with translations? Join the [Mattermost Translation Server](!http://translate.mattermost.com/) to contribute."
    })));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "user.settings.display.language",
        defaultMessage: "Language"
      }),
      width: "medium",
      submit: this.changeLanguage,
      saving: this.state.isSaving,
      inputs: [input],
      updateSection: this.props.updateSection
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(ManageLanguage, "propTypes", {
  user: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any.isRequired,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  updateSection: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    updateMe: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ManageLanguage, "ManageLanguage", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/manage_languages/manage_languages.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/display/manage_timezones/index.ts":
/*!********************************************************************!*\
  !*** ./components/user_settings/display/manage_timezones/index.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _manage_timezones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage_timezones */ "./components/user_settings/display/manage_timezones/manage_timezones.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      updateMe: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["updateMe"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(_manage_timezones__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/manage_timezones/index.ts");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/manage_timezones/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/display/manage_timezones/manage_timezones.tsx":
/*!********************************************************************************!*\
  !*** ./components/user_settings/display/manage_timezones/manage_timezones.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ManageTimezones; });
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/utils/timezone_utils */ "./node_modules/mattermost-redux/utils/timezone_utils.js");
/* harmony import */ var mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/setting_item_max.jsx */ "./components/setting_item_max.jsx");
/* harmony import */ var utils_timezone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/timezone */ "./utils/timezone.jsx");
/* harmony import */ var components_suggestion_suggestion_box_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/suggestion/suggestion_box.jsx */ "./components/suggestion/suggestion_box.jsx");
/* harmony import */ var components_suggestion_suggestion_list_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/suggestion/suggestion_list.jsx */ "./components/suggestion/suggestion_list.jsx");
/* harmony import */ var components_suggestion_timezone_provider_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/suggestion/timezone_provider.jsx */ "./components/suggestion/timezone_provider.jsx");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class ManageTimezones extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChange", e => {
      this.setState({
        manualTimezoneInput: e.target.value
      });
    });

    _defineProperty(this, "handleTimezoneSelected", selected => {
      if (!selected) {
        return;
      }

      this.setState({
        manualTimezone: selected,
        manualTimezoneInput: selected
      });
    });

    _defineProperty(this, "timezoneNotChanged", () => {
      const {
        useAutomaticTimezone,
        automaticTimezone,
        manualTimezone
      } = this.state;
      const {
        useAutomaticTimezone: oldUseAutomaticTimezone,
        automaticTimezone: oldAutomaticTimezone,
        manualTimezone: oldManualTimezone
      } = this.props;
      return useAutomaticTimezone === oldUseAutomaticTimezone && automaticTimezone === oldAutomaticTimezone && manualTimezone === oldManualTimezone;
    });

    _defineProperty(this, "changeTimezone", () => {
      if (this.timezoneNotChanged()) {
        this.props.updateSection('');
        return;
      }

      this.submitUser();
    });

    _defineProperty(this, "submitUser", () => {
      const {
        user,
        actions
      } = this.props;
      const {
        useAutomaticTimezone,
        automaticTimezone,
        manualTimezone
      } = this.state;
      const timezone = {
        useAutomaticTimezone: useAutomaticTimezone.toString(),
        automaticTimezone,
        manualTimezone
      };

      const updatedUser = _objectSpread(_objectSpread({}, user), {}, {
        timezone
      });

      actions.updateMe(updatedUser).then(res => {
        if ('data' in res) {
          this.props.updateSection('');
        } else if ('error' in res) {
          const {
            error
          } = res;
          let serverError;

          if (error instanceof Error) {
            serverError = error.message;
          } else {
            serverError = error;
          }

          this.setState({
            serverError,
            isSaving: false
          });
        }
      });
    });

    _defineProperty(this, "handleAutomaticTimezone", e => {
      const useAutomaticTimezone = e.target.checked;
      let automaticTimezone = '';

      if (useAutomaticTimezone) {
        automaticTimezone = Object(utils_timezone__WEBPACK_IMPORTED_MODULE_6__["getBrowserTimezone"])();
      }

      this.setState({
        useAutomaticTimezone,
        automaticTimezone
      });
    });

    _defineProperty(this, "handleManualTimezone", e => {
      this.setState({
        manualTimezone: e.target.value
      });
    });

    this.state = {
      useAutomaticTimezone: props.useAutomaticTimezone,
      automaticTimezone: props.automaticTimezone,
      manualTimezone: props.manualTimezone,
      manualTimezoneInput: props.manualTimezone,
      isSaving: false
    };
  }

  render() {
    const {
      timezones
    } = this.props;
    const {
      useAutomaticTimezone,
      automaticTimezone
    } = this.state;
    let serverError;

    if (this.state.serverError) {
      serverError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "has-error"
      }, this.state.serverError);
    }

    const inputs = [];
    const timezoneRegion = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "section-describe pt-2"
    }, useAutomaticTimezone && Object(mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_3__["getTimezoneRegion"])(automaticTimezone));
    const noTimezonesFromServer = timezones.length === 0;
    const automaticTimezoneInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      id: "automaticTimezoneInput",
      type: "checkbox",
      checked: useAutomaticTimezone,
      onChange: this.handleAutomaticTimezone,
      disabled: noTimezonesFromServer
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "user.settings.timezones.automatic",
      defaultMessage: "Set automatically"
    }), timezoneRegion));
    const providers = [new components_suggestion_timezone_provider_jsx__WEBPACK_IMPORTED_MODULE_9__["default"]()];
    const manualTimezoneInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: "changeTimezone"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "user.settings.timezones.change",
      defaultMessage: "Change timezone"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "pt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_suggestion_suggestion_box_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "form-control focused",
      type: "search",
      onChange: this.onChange,
      value: this.state.manualTimezoneInput,
      onItemSelected: this.handleTimezoneSelected,
      listComponent: components_suggestion_suggestion_list_jsx__WEBPACK_IMPORTED_MODULE_8__["default"],
      maxLength: "64",
      requiredCharacters: 0,
      providers: providers,
      listStyle: "bottom",
      completeOnTab: false,
      renderDividers: false,
      openOnFocus: true,
      disabled: noTimezonesFromServer
    }), serverError));
    inputs.push(automaticTimezoneInput);

    if (!useAutomaticTimezone) {
      inputs.push(manualTimezoneInput);
    }

    inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "user.settings.timezones.promote",
      defaultMessage: "Select the time zone used for timestamps in the user interface and email notifications."
    })));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.display.timezone",
        defaultMessage: "Timezone"
      }),
      containerStyle: "timezone-container",
      width: "medium",
      submit: this.changeTimezone,
      saving: this.state.isSaving,
      inputs: inputs,
      updateSection: this.props.updateSection
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(ManageTimezones, "propTypes", {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  updateSection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  useAutomaticTimezone: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  automaticTimezone: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  manualTimezone: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  timezones: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string).isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    updateMe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ManageTimezones, "ManageTimezones", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/manage_timezones/manage_timezones.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/display/user_settings_display.tsx":
/*!********************************************************************!*\
  !*** ./components/user_settings/display/user_settings_display.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserSettingsDisplay; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/utils/timezone_utils */ "./node_modules/mattermost-redux/utils/timezone_utils.js");
/* harmony import */ var mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_timezone_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/timezone.jsx */ "./utils/timezone.jsx");
/* harmony import */ var i18n_i18n_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! i18n/i18n.jsx */ "./i18n/i18n.jsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/setting_item_max.jsx */ "./components/setting_item_max.jsx");
/* harmony import */ var components_setting_item_min__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/setting_item_min */ "./components/setting_item_min/index.ts");
/* harmony import */ var components_user_settings_display_user_settings_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/user_settings/display/user_settings_theme */ "./components/user_settings/display/user_settings_theme/index.js");
/* harmony import */ var components_widgets_icons_fa_back_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/widgets/icons/fa_back_icon */ "./components/widgets/icons/fa_back_icon.jsx");
/* harmony import */ var _manage_timezones__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./manage_timezones */ "./components/user_settings/display/manage_timezones/index.ts");
/* harmony import */ var _manage_languages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manage_languages */ "./components/user_settings/display/manage_languages/index.ts");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable react/no-string-refs */














const Preferences = utils_constants__WEBPACK_IMPORTED_MODULE_6__["default"].Preferences;

function getDisplayStateFromProps(props) {
  return {
    militaryTime: props.militaryTime,
    teammateNameDisplay: props.teammateNameDisplay,
    channelDisplayMode: props.channelDisplayMode,
    messageDisplay: props.messageDisplay,
    collapseDisplay: props.collapseDisplay,
    linkPreviewDisplay: props.linkPreviewDisplay
  };
}

class UserSettingsDisplay extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "prevSections", void 0);

    _defineProperty(this, "handleSubmit", async () => {
      const userId = this.props.user.id;
      const timePreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.USE_MILITARY_TIME,
        value: this.state.militaryTime
      };
      const teammateNameDisplayPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.NAME_NAME_FORMAT,
        value: this.state.teammateNameDisplay
      };
      const channelDisplayModePreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.CHANNEL_DISPLAY_MODE,
        value: this.state.channelDisplayMode
      };
      const messageDisplayPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.MESSAGE_DISPLAY,
        value: this.state.messageDisplay
      };
      const collapseDisplayPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.COLLAPSE_DISPLAY,
        value: this.state.collapseDisplay
      };
      const linkPreviewDisplayPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.LINK_PREVIEW_DISPLAY,
        value: this.state.linkPreviewDisplay
      };
      this.setState({
        isSaving: true
      });
      const preferences = [timePreference, channelDisplayModePreference, messageDisplayPreference, collapseDisplayPreference, linkPreviewDisplayPreference, teammateNameDisplayPreference];
      await this.props.actions.savePreferences(userId, preferences);
      this.updateSection('');
    });

    _defineProperty(this, "handleClockRadio", militaryTime => {
      this.setState({
        militaryTime
      });
    });

    _defineProperty(this, "handleTeammateNameDisplayRadio", teammateNameDisplay => {
      this.setState({
        teammateNameDisplay
      });
    });

    _defineProperty(this, "updateSection", section => {
      this.updateState();
      this.props.updateSection(section);
    });

    _defineProperty(this, "updateState", () => {
      const newState = getDisplayStateFromProps(this.props);

      if (!utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["areObjectsEqual"](newState, this.state)) {
        this.setState(newState);
      }

      this.setState({
        isSaving: false
      });
    });

    this.state = _objectSpread(_objectSpread({}, getDisplayStateFromProps(props)), {}, {
      isSaving: false
    });

    if (props.timezones.length === 0) {
      props.actions.getSupportedTimezones();
    }

    this.prevSections = {
      theme: 'dummySectionName',
      // dummy value that should never match any section name
      clock: 'theme',
      linkpreview: 'clock',
      message_display: 'linkpreview',
      channel_display_mode: 'message_display',
      languages: 'channel_display_mode'
    };
  }

  componentDidMount() {
    const {
      actions,
      enableTimezone,
      shouldAutoUpdateTimezone
    } = this.props;

    if (enableTimezone && shouldAutoUpdateTimezone) {
      actions.autoUpdateTimezone(Object(utils_timezone_jsx__WEBPACK_IMPORTED_MODULE_8__["getBrowserTimezone"])());
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.teammateNameDisplay !== prevProps.teammateNameDisplay) {
      this.updateState();
    }
  }

  handleChannelDisplayModeRadio(channelDisplayMode) {
    this.setState({
      channelDisplayMode
    });
  }

  handlemessageDisplayRadio(messageDisplay) {
    this.setState({
      messageDisplay
    });
  }

  handleCollapseRadio(collapseDisplay) {
    this.setState({
      collapseDisplay
    });
  }

  handleLinkPreviewRadio(linkPreviewDisplay) {
    this.setState({
      linkPreviewDisplay
    });
  }

  handleOnChange(display) {
    this.setState(_objectSpread({}, display));
  }

  createSection(props) {
    const {
      section,
      display,
      value,
      title,
      firstOption,
      secondOption,
      thirdOption,
      description,
      disabled
    } = props;
    let extraInfo = null;
    let submit = this.handleSubmit;
    const firstMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: firstOption.radionButtonText.id,
      defaultMessage: firstOption.radionButtonText.message
    });
    let moreColon;
    let firstMessageMore;

    if (firstOption.radionButtonText.moreId) {
      moreColon = ': ';
      firstMessageMore = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "font-weight--normal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: firstOption.radionButtonText.moreId,
        defaultMessage: firstOption.radionButtonText.moreMessage
      }));
    }

    const secondMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: secondOption.radionButtonText.id,
      defaultMessage: secondOption.radionButtonText.message
    });
    let secondMessageMore;

    if (secondOption.radionButtonText.moreId) {
      secondMessageMore = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "font-weight--normal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: secondOption.radionButtonText.moreId,
        defaultMessage: secondOption.radionButtonText.moreMessage
      }));
    }

    let thirdMessage;

    if (thirdOption) {
      thirdMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: thirdOption.radionButtonText.id,
        defaultMessage: thirdOption.radionButtonText.message
      });
    }

    const messageTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: title.id,
      defaultMessage: title.message
    });
    const messageDesc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: description.id,
      defaultMessage: description.message
    });

    if (this.props.activeSection === section) {
      const format = [false, false, false];

      if (value === firstOption.value) {
        format[0] = true;
      } else if (value === secondOption.value) {
        format[1] = true;
      } else {
        format[2] = true;
      }

      const name = section + 'Format';
      const key = section + 'UserDisplay';
      const firstDisplay = {
        [display]: firstOption.value
      };
      const secondDisplay = {
        [display]: secondOption.value
      };
      let thirdSection;

      if (thirdOption && thirdMessage) {
        const thirdDisplay = {
          [display]: thirdOption.value
        };
        thirdSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
          id: name + 'C',
          type: "radio",
          name: name,
          checked: format[2],
          onChange: () => this.handleOnChange(thirdDisplay)
        }), thirdMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null));
      }

      let inputs = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("fieldset", {
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("legend", {
        className: "form-legend hidden-label"
      }, messageTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
        id: name + 'A',
        type: "radio",
        name: name,
        checked: format[0],
        onChange: () => this.handleOnChange(firstDisplay)
      }), firstMessage, moreColon, firstMessageMore), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
        id: name + 'B',
        type: "radio",
        name: name,
        checked: format[1],
        onChange: () => this.handleOnChange(secondDisplay)
      }), secondMessage, moreColon, secondMessageMore), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null)), thirdSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), messageDesc))];

      if (display === 'teammateNameDisplay' && disabled) {
        extraInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.display.teammateNameDisplay",
          defaultMessage: "This field is handled through your System Administrator. If you want to change it, you need to do so through your System Administrator."
        }));
        submit = null;
        inputs = [];
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: messageTitle,
        inputs: inputs,
        submit: submit,
        saving: this.state.isSaving,
        server_error: this.state.serverError,
        updateSection: this.updateSection,
        extraInfo: extraInfo
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "divider-dark"
      }));
    }

    let describe;

    if (value === firstOption.value) {
      describe = firstMessage;
    } else if (value === secondOption.value) {
      describe = secondMessage;
    } else {
      describe = thirdMessage;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_12__["default"], {
      title: messageTitle,
      describe: describe,
      section: section,
      updateSection: this.updateSection
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "divider-dark"
    }));
  }

  render() {
    const collapseSection = this.createSection({
      section: 'collapse',
      display: 'collapseDisplay',
      value: this.state.collapseDisplay,
      defaultDisplay: 'false',
      title: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.collapseDisplay'),
        message: 'Default Appearance of Image Previews'
      },
      firstOption: {
        value: 'false',
        radionButtonText: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.collapseOn'),
          message: 'On'
        }
      },
      secondOption: {
        value: 'true',
        radionButtonText: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.collapseOff'),
          message: 'Off'
        }
      },
      description: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.collapseDesc'),
        message: 'Set whether previews of image links and image attachment thumbnails show as expanded or collapsed by default. This setting can also be controlled using the slash commands /expand and /collapse.'
      }
    });
    let linkPreviewSection = null;

    if (this.props.enableLinkPreviews) {
      linkPreviewSection = this.createSection({
        section: 'linkpreview',
        display: 'linkPreviewDisplay',
        value: this.state.linkPreviewDisplay,
        defaultDisplay: 'true',
        title: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.linkPreviewDisplay'),
          message: 'Website Link Previews'
        },
        firstOption: {
          value: 'true',
          radionButtonText: {
            id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.linkPreviewOn'),
            message: 'On'
          }
        },
        secondOption: {
          value: 'false',
          radionButtonText: {
            id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.linkPreviewOff'),
            message: 'Off'
          }
        },
        description: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.linkPreviewDesc'),
          message: 'When available, the first web link in a message will show a preview of the website content below the message.'
        }
      });
      this.prevSections.message_display = 'linkpreview';
    } else {
      this.prevSections.message_display = this.prevSections.linkpreview;
    }

    const clockSection = this.createSection({
      section: 'clock',
      display: 'militaryTime',
      value: this.state.militaryTime,
      defaultDisplay: 'false',
      title: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.clockDisplay'),
        message: 'Clock Display'
      },
      firstOption: {
        value: 'false',
        radionButtonText: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.normalClock'),
          message: '12-hour clock (example: 4:00 PM)'
        }
      },
      secondOption: {
        value: 'true',
        radionButtonText: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.militaryClock'),
          message: '24-hour clock (example: 16:00)'
        }
      },
      description: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.preferTime'),
        message: 'Select how you prefer time displayed.'
      }
    });
    const teammateNameDisplaySection = this.createSection({
      section: Preferences.NAME_NAME_FORMAT,
      display: 'teammateNameDisplay',
      value: this.props.lockTeammateNameDisplay ? this.props.configTeammateNameDisplay : this.state.teammateNameDisplay,
      defaultDisplay: this.props.configTeammateNameDisplay,
      title: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.teammateNameDisplayTitle'),
        message: 'Teammate Name Display'
      },
      firstOption: {
        value: utils_constants__WEBPACK_IMPORTED_MODULE_6__["default"].TEAMMATE_NAME_DISPLAY.SHOW_USERNAME,
        radionButtonText: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.teammateNameDisplayUsername'),
          message: 'Show username'
        }
      },
      secondOption: {
        value: utils_constants__WEBPACK_IMPORTED_MODULE_6__["default"].TEAMMATE_NAME_DISPLAY.SHOW_NICKNAME_FULLNAME,
        radionButtonText: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.teammateNameDisplayNicknameFullname'),
          message: 'Show nickname if one exists, otherwise show first and last name'
        }
      },
      thirdOption: {
        value: utils_constants__WEBPACK_IMPORTED_MODULE_6__["default"].TEAMMATE_NAME_DISPLAY.SHOW_FULLNAME,
        radionButtonText: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.teammateNameDisplayFullname'),
          message: 'Show first and last name'
        }
      },
      description: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.teammateNameDisplayDescription'),
        message: 'Set how to display other user\'s names in posts and the Direct Messages list.'
      },
      disabled: this.props.lockTeammateNameDisplay
    });
    let timezoneSelection;

    if (this.props.enableTimezone && !this.props.shouldAutoUpdateTimezone) {
      const userTimezone = this.props.userTimezone;

      if (this.props.activeSection === 'timezone') {
        timezoneSelection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_manage_timezones__WEBPACK_IMPORTED_MODULE_15__["default"], {
          user: this.props.user,
          timezones: this.props.timezones,
          useAutomaticTimezone: Boolean(userTimezone.useAutomaticTimezone),
          automaticTimezone: userTimezone.automaticTimezone,
          manualTimezone: userTimezone.manualTimezone,
          updateSection: this.updateSection
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "divider-dark"
        }));
      } else {
        timezoneSelection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_12__["default"], {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.display.timezone",
            defaultMessage: "Timezone"
          }),
          describe: Object(mattermost_redux_utils_timezone_utils__WEBPACK_IMPORTED_MODULE_4__["getTimezoneRegion"])(this.props.currentUserTimezone),
          section: 'timezone',
          updateSection: this.updateSection
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "divider-dark"
        }));
      }
    }

    const messageDisplaySection = this.createSection({
      section: Preferences.MESSAGE_DISPLAY,
      display: 'messageDisplay',
      value: this.state.messageDisplay,
      defaultDisplay: Preferences.MESSAGE_DISPLAY_CLEAN,
      title: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.messageDisplayTitle'),
        message: 'Message Display'
      },
      firstOption: {
        value: Preferences.MESSAGE_DISPLAY_CLEAN,
        radionButtonText: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.messageDisplayClean'),
          message: 'Standard',
          moreId: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.messageDisplayCleanDes'),
          moreMessage: 'Easy to scan and read.'
        }
      },
      secondOption: {
        value: Preferences.MESSAGE_DISPLAY_COMPACT,
        radionButtonText: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.messageDisplayCompact'),
          message: 'Compact',
          moreId: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.messageDisplayCompactDes'),
          moreMessage: 'Fit as many messages on the screen as we can.'
        }
      },
      description: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.messageDisplayDescription'),
        message: 'Select how messages in a channel should be displayed.'
      }
    });
    const channelDisplayModeSection = this.createSection({
      section: Preferences.CHANNEL_DISPLAY_MODE,
      display: 'channelDisplayMode',
      value: this.state.channelDisplayMode,
      defaultDisplay: Preferences.CHANNEL_DISPLAY_MODE_FULL_SCREEN,
      title: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.channelDisplayTitle'),
        message: 'Channel Display'
      },
      firstOption: {
        value: Preferences.CHANNEL_DISPLAY_MODE_FULL_SCREEN,
        radionButtonText: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.fullScreen'),
          message: 'Full width'
        }
      },
      secondOption: {
        value: Preferences.CHANNEL_DISPLAY_MODE_CENTERED,
        radionButtonText: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.fixedWidthCentered'),
          message: 'Fixed width, centered'
        }
      },
      description: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.display.channeldisplaymode'),
        message: 'Select the width of the center channel.'
      }
    });
    let languagesSection;
    let userLocale = this.props.user.locale;

    if (this.props.activeSection === 'languages') {
      if (!i18n_i18n_jsx__WEBPACK_IMPORTED_MODULE_9__["isLanguageAvailable"](userLocale)) {
        userLocale = this.props.defaultClientLocale;
      }

      languagesSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_manage_languages__WEBPACK_IMPORTED_MODULE_16__["default"], {
        user: this.props.user,
        locale: userLocale,
        updateSection: this.updateSection
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "divider-dark"
      }));
    } else {
      let locale;

      if (i18n_i18n_jsx__WEBPACK_IMPORTED_MODULE_9__["isLanguageAvailable"](userLocale)) {
        locale = i18n_i18n_jsx__WEBPACK_IMPORTED_MODULE_9__["getLanguageInfo"](userLocale).name;
      } else {
        locale = i18n_i18n_jsx__WEBPACK_IMPORTED_MODULE_9__["getLanguageInfo"](this.props.defaultClientLocale).name;
      }

      languagesSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.display.language",
          defaultMessage: "Language"
        }),
        describe: locale,
        section: 'languages',
        updateSection: this.updateSection
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "divider-dark"
      }));
    }

    if (Object.keys(i18n_i18n_jsx__WEBPACK_IMPORTED_MODULE_9__["getLanguages"]()).length === 1) {
      languagesSection = null;
    }

    let themeSection;

    if (this.props.enableThemeSelection) {
      themeSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_user_settings_display_user_settings_theme__WEBPACK_IMPORTED_MODULE_13__["default"], {
        selected: this.props.activeSection === 'theme',
        updateSection: this.updateSection,
        setRequireConfirm: this.props.setRequireConfirm,
        setEnforceFocus: this.props.setEnforceFocus,
        allowCustomThemes: this.props.allowCustomThemes
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "divider-dark"
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      id: "displaySettings"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      id: "closeButton",
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.props.closeModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      "aria-hidden": "true"
    }, '×')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
      className: "modal-title",
      ref: "title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "modal-back"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      onClick: this.props.collapseModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_widgets_icons_fa_back_icon__WEBPACK_IMPORTED_MODULE_14__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "user.settings.display.title",
      defaultMessage: "Display Settings"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "user-settings"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
      id: "displaySettingsTitle",
      className: "tab-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "user.settings.display.title",
      defaultMessage: "Display Settings"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "divider-dark first"
    }), themeSection, clockSection, teammateNameDisplaySection, timezoneSelection, linkPreviewSection, collapseSection, messageDisplaySection, channelDisplayModeSection, languagesSection));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
/* eslint-enable react/no-string-refs */

_defineProperty(UserSettingsDisplay, "propTypes", {
  user: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,
  updateSection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  activeSection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  closeModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  collapseModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  setRequireConfirm: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  setEnforceFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  timezones: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string).isRequired,
  userTimezone: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,
  allowCustomThemes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  enableLinkPreviews: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  defaultClientLocale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  enableThemeSelection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  configTeammateNameDisplay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  currentUserTimezone: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  enableTimezone: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  shouldAutoUpdateTimezone: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  lockTeammateNameDisplay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  militaryTime: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  teammateNameDisplay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  channelDisplayMode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  messageDisplay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  collapseDisplay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  linkPreviewDisplay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    savePreferences: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    getSupportedTimezones: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    autoUpdateTimezone: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Preferences, "Preferences", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/user_settings_display.tsx");
  reactHotLoader.register(getDisplayStateFromProps, "getDisplayStateFromProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/user_settings_display.tsx");
  reactHotLoader.register(UserSettingsDisplay, "UserSettingsDisplay", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/user_settings_display.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/display/user_settings_theme/color_chooser.tsx":
/*!********************************************************************************!*\
  !*** ./components/user_settings/display/user_settings_theme/color_chooser.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorChooser; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_color_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/color_input */ "./components/color_input.tsx");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


function ColorChooser(props) {
  const handleChange = newColor => {
    var _props$onChange;

    (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, props.id, newColor);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "custom-label"
  }, props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_color_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: props.id,
    value: props.value,
    onChange: handleChange
  }));
}
ColorChooser.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ColorChooser, "ColorChooser", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/user_settings_theme/color_chooser.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/display/user_settings_theme/custom_theme_chooser.jsx":
/*!***************************************************************************************!*\
  !*** ./components/user_settings/display/user_settings_theme/custom_theme_chooser.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomThemeChooser; });
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var mattermost_redux_utils_theme_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/utils/theme_utils */ "./node_modules/mattermost-redux/utils/theme_utils.js");
/* harmony import */ var mattermost_redux_utils_theme_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_utils_theme_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var components_localized_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/localized_icon */ "./components/localized_icon.tsx");
/* harmony import */ var components_overlay_trigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/overlay_trigger */ "./components/overlay_trigger.tsx");
/* harmony import */ var components_widgets_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/widgets/popover */ "./components/widgets/popover/index.tsx");
/* harmony import */ var _color_chooser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./color_chooser */ "./components/user_settings/display/user_settings_theme/color_chooser.tsx");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable react/no-string-refs */










const COPY_SUCCESS_INTERVAL = 3000;
const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["defineMessages"])({
  sidebarBg: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.sidebarBg'),
    defaultMessage: 'Sidebar BG'
  },
  sidebarText: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.sidebarText'),
    defaultMessage: 'Sidebar Text'
  },
  sidebarHeaderBg: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.sidebarHeaderBg'),
    defaultMessage: 'Sidebar Header BG'
  },
  sidebarHeaderTextColor: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.sidebarHeaderTextColor'),
    defaultMessage: 'Sidebar Header Text'
  },
  sidebarUnreadText: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.sidebarUnreadText'),
    defaultMessage: 'Sidebar Unread Text'
  },
  sidebarTextHoverBg: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.sidebarTextHoverBg'),
    defaultMessage: 'Sidebar Text Hover BG'
  },
  sidebarTextActiveBorder: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.sidebarTextActiveBorder'),
    defaultMessage: 'Sidebar Text Active Border'
  },
  sidebarTextActiveColor: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.sidebarTextActiveColor'),
    defaultMessage: 'Sidebar Text Active Color'
  },
  onlineIndicator: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.onlineIndicator'),
    defaultMessage: 'Online Indicator'
  },
  awayIndicator: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.awayIndicator'),
    defaultMessage: 'Away Indicator'
  },
  dndIndicator: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.dndIndicator'),
    defaultMessage: 'Do Not Disturb Indicator'
  },
  mentionBg: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.mentionBg'),
    defaultMessage: 'Mention Jewel BG'
  },
  mentionColor: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.mentionColor'),
    defaultMessage: 'Mention Jewel Text'
  },
  centerChannelBg: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.centerChannelBg'),
    defaultMessage: 'Center Channel BG'
  },
  centerChannelColor: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.centerChannelColor'),
    defaultMessage: 'Center Channel Text'
  },
  newMessageSeparator: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.newMessageSeparator'),
    defaultMessage: 'New Message Separator'
  },
  linkColor: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.linkColor'),
    defaultMessage: 'Link Color'
  },
  buttonBg: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.buttonBg'),
    defaultMessage: 'Button BG'
  },
  buttonColor: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.buttonColor'),
    defaultMessage: 'Button Text'
  },
  errorTextColor: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.errorTextColor'),
    defaultMessage: 'Error Text Color'
  },
  mentionHighlightBg: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.mentionHighlightBg'),
    defaultMessage: 'Mention Highlight BG'
  },
  mentionHighlightLink: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.mentionHighlightLink'),
    defaultMessage: 'Mention Highlight Link'
  },
  codeTheme: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('user.settings.custom_theme.codeTheme'),
    defaultMessage: 'Code Theme'
  }
});
class CustomThemeChooser extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleColorChange", (settingId, color) => {
      const {
        updateTheme,
        theme
      } = this.props;

      if (theme[settingId] !== color) {
        const newTheme = _objectSpread(_objectSpread({}, theme), {}, {
          type: 'custom',
          [settingId]: color
        }); // For backwards compatability


        if (settingId === 'mentionBg') {
          newTheme.mentionBj = color;
        }

        updateTheme(newTheme);
        const copyTheme = this.setCopyTheme(newTheme);
        this.setState({
          copyTheme
        });
      }
    });

    _defineProperty(this, "pasteBoxChange", e => {
      let text = '';

      if (window.clipboardData && window.clipboardData.getData) {
        // IE
        text = window.clipboardData.getData('Text');
      } else {
        text = e.clipboardData.getData('Text'); //e.clipboardData.getData('text/plain');
      }

      if (text.length === 0) {
        return;
      }

      let theme;

      try {
        theme = JSON.parse(text);
      } catch (err) {
        return;
      }

      Object(mattermost_redux_utils_theme_utils__WEBPACK_IMPORTED_MODULE_4__["setThemeDefaults"])(theme);
      this.setState({
        copyTheme: JSON.stringify(theme)
      });
      theme.type = 'custom';
      this.props.updateTheme(theme);
    });

    _defineProperty(this, "onChangeHandle", e => {
      e.stopPropagation();
    });

    _defineProperty(this, "selectTheme", () => {
      const textarea = this.refs.textarea;
      textarea.focus();
      textarea.setSelectionRange(0, this.state.copyTheme.length);
    });

    _defineProperty(this, "toggleSidebarStyles", e => {
      e.preventDefault();
      this.refs.sidebarStylesHeader.classList.toggle('open');
      this.toggleSection(this.refs.sidebarStyles);
    });

    _defineProperty(this, "toggleCenterChannelStyles", e => {
      e.preventDefault();
      this.refs.centerChannelStylesHeader.classList.toggle('open');
      this.toggleSection(this.refs.centerChannelStyles);
    });

    _defineProperty(this, "toggleLinkAndButtonStyles", e => {
      e.preventDefault();
      this.refs.linkAndButtonStylesHeader.classList.toggle('open');
      this.toggleSection(this.refs.linkAndButtonStyles);
    });

    _defineProperty(this, "onCodeThemeChange", e => {
      const theme = _objectSpread(_objectSpread({}, this.props.theme), {}, {
        type: 'custom',
        codeTheme: e.target.value
      });

      this.props.updateTheme(theme);
    });

    _defineProperty(this, "copyTheme", () => {
      this.selectTheme();
      document.execCommand('copy');
      this.showCopySuccess();
    });

    _defineProperty(this, "showCopySuccess", () => {
      const copySuccess = document.querySelector('.copy-theme-success');
      copySuccess.style.display = 'inline-block';
      setTimeout(() => {
        copySuccess.style.display = 'none';
      }, COPY_SUCCESS_INTERVAL);
    });

    const _copyTheme = this.setCopyTheme(this.props.theme);

    this.state = {
      copyTheme: _copyTheme
    };
  }

  setCopyTheme(theme) {
    const copyTheme = Object.assign({}, theme);
    delete copyTheme.type;
    delete copyTheme.image;
    return JSON.stringify(copyTheme);
  }

  toggleSection(node) {
    node.classList.toggle('open'); // set overflow after animation, so the colorchooser is fully shown

    node.ontransitionend = () => {
      if (node.classList.contains('open')) {
        node.style.overflowY = 'inherit';
      } else {
        node.style.overflowY = 'hidden';
      }
    };
  }

  render() {
    const theme = this.props.theme;
    const sidebarElements = [];
    const centerChannelElements = [];
    const linkAndButtonElements = [];
    utils_constants__WEBPACK_IMPORTED_MODULE_6__["default"].THEME_ELEMENTS.forEach((element, index) => {
      if (element.id === 'codeTheme') {
        const codeThemeOptions = [];
        let codeThemeURL = '';
        element.themes.forEach((codeTheme, codeThemeIndex) => {
          if (codeTheme.id === theme[element.id]) {
            codeThemeURL = codeTheme.iconURL;
          }

          codeThemeOptions.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
            key: 'code-theme-key' + codeThemeIndex,
            value: codeTheme.id
          }, codeTheme.uiName));
        });
        var popoverContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_widgets_popover__WEBPACK_IMPORTED_MODULE_9__["default"], {
          popoverStyle: "info",
          id: "code-popover",
          className: "code-popover"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          width: "200",
          alt: 'code theme image',
          src: codeThemeURL
        }));
        centerChannelElements.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "col-sm-6 form-group",
          key: 'custom-theme-key' + index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
          className: "custom-label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], messages[element.id])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "input-group theme-group group--code dropdown",
          id: element.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
          id: "codeThemeSelect",
          className: "form-control",
          type: "text",
          defaultValue: theme[element.id],
          onChange: this.onCodeThemeChange
        }, codeThemeOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_overlay_trigger__WEBPACK_IMPORTED_MODULE_8__["default"], {
          placement: "top",
          overlay: popoverContent,
          ref: "headerOverlay"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          className: "input-group-addon"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          alt: 'code theme image',
          src: codeThemeURL
        }))))));
      } else if (element.group === 'centerChannelElements') {
        centerChannelElements.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "col-sm-6 form-group element",
          key: 'custom-theme-key' + index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_color_chooser__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: element.id,
          label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], messages[element.id]),
          value: theme[element.id],
          onChange: this.handleColorChange
        })));
      } else if (element.group === 'sidebarElements') {
        // Need to support old typo mentionBj element for mentionBg
        let color = theme[element.id];

        if (!color && element.id === 'mentionBg') {
          color = theme.mentionBj;
        }

        sidebarElements.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "col-sm-6 form-group element",
          key: 'custom-theme-key' + index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_color_chooser__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: element.id,
          label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], messages[element.id]),
          value: color,
          onChange: this.handleColorChange
        })));
      } else {
        linkAndButtonElements.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "col-sm-6 form-group element",
          key: 'custom-theme-key' + index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_color_chooser__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: element.id,
          label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], messages[element.id]),
          value: theme[element.id],
          onChange: this.handleColorChange
        })));
      }
    });
    const pasteBox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "custom-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "user.settings.custom_theme.copyPaste",
      defaultMessage: "Copy to share or paste theme colors here:"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
      ref: "textarea",
      className: "form-control",
      id: "pasteBox",
      value: this.state.copyTheme,
      onCopy: this.showCopySuccess,
      onPaste: this.pasteBoxChange,
      onChange: this.onChangeHandle,
      onClick: this.selectTheme
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "btn btn-link copy-theme-button",
      onClick: this.copyTheme
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "user.settings.custom_theme.copyThemeColors",
      defaultMessage: "Copy Theme Colors"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "alert alert-success copy-theme-success",
      role: "alert",
      style: {
        display: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "user.settings.custom_theme.copied",
      defaultMessage: "\u2714 Copied"
    }))));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "appearance-section pt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "theme-elements row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      ref: "sidebarStylesHeader",
      id: "sidebarStyles",
      className: "theme-elements__header",
      onClick: this.toggleSidebarStyles
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "user.settings.custom_theme.sidebarTitle",
      defaultMessage: "Sidebar Styles"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "header__icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "fa fa-plus",
      title: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('generic_icons.expand'),
        defaultMessage: 'Expand Icon'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "fa fa-minus",
      title: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('generic_icons.collapse'),
        defaultMessage: 'Collapse Icon'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      ref: "sidebarStyles",
      className: "theme-elements__body"
    }, sidebarElements)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "theme-elements row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      ref: "centerChannelStylesHeader",
      id: "centerChannelStyles",
      className: "theme-elements__header",
      onClick: this.toggleCenterChannelStyles
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "user.settings.custom_theme.centerChannelTitle",
      defaultMessage: "Center Channel Styles"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "header__icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "fa fa-plus",
      title: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('generic_icons.expand'),
        defaultMessage: 'Expand Icon'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "fa fa-minus",
      title: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('generic_icons.collapse'),
        defaultMessage: 'Collapse Icon'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      ref: "centerChannelStyles",
      id: "centerChannelStyles",
      className: "theme-elements__body"
    }, centerChannelElements)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "theme-elements row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      ref: "linkAndButtonStylesHeader",
      id: "linkAndButtonsStyles",
      className: "theme-elements__header",
      onClick: this.toggleLinkAndButtonStyles
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "user.settings.custom_theme.linkButtonTitle",
      defaultMessage: "Link and Button Styles"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "header__icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "fa fa-plus",
      title: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('generic_icons.expand'),
        defaultMessage: 'Expand Icon'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "fa fa-minus",
      title: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('generic_icons.collapse'),
        defaultMessage: 'Collapse Icon'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      ref: "linkAndButtonStyles",
      className: "theme-elements__body"
    }, linkAndButtonElements)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "row mt-3"
    }, pasteBox));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
/* eslint-enable react/no-string-refs */

_defineProperty(CustomThemeChooser, "propTypes", {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  updateTheme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(COPY_SUCCESS_INTERVAL, "COPY_SUCCESS_INTERVAL", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/user_settings_theme/custom_theme_chooser.jsx");
  reactHotLoader.register(messages, "messages", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/user_settings_theme/custom_theme_chooser.jsx");
  reactHotLoader.register(CustomThemeChooser, "CustomThemeChooser", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/user_settings_theme/custom_theme_chooser.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/display/user_settings_theme/index.js":
/*!***********************************************************************!*\
  !*** ./components/user_settings/display/user_settings_theme/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/preferences */ "./node_modules/mattermost-redux/selectors/entities/preferences.js");
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/teams */ "./node_modules/mattermost-redux/selectors/entities/teams.js");
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/actions/preferences */ "./node_modules/mattermost-redux/actions/preferences.js");
/* harmony import */ var mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var _user_settings_theme_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user_settings_theme.jsx */ "./components/user_settings/display/user_settings_theme/user_settings_theme.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function makeMapStateToProps() {
  const getThemeCategory = Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_2__["makeGetCategory"])();
  return state => {
    return {
      currentTeamId: Object(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__["getCurrentTeamId"])(state),
      theme: Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_2__["getTheme"])(state),
      applyToAllTeams: getThemeCategory(state, utils_constants__WEBPACK_IMPORTED_MODULE_5__["Preferences"].CATEGORY_THEME).length <= 1,
      showAllTeamsCheckbox: Object(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__["getMyTeamsCount"])(state) > 1
    };
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      saveTheme: mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_4__["saveTheme"],
      deleteTeamSpecificThemes: mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_4__["deleteTeamSpecificThemes"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(makeMapStateToProps, mapDispatchToProps)(_user_settings_theme_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(makeMapStateToProps, "makeMapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/user_settings_theme/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/user_settings_theme/index.js");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/user_settings_theme/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/display/user_settings_theme/premade_theme_chooser/index.js":
/*!*********************************************************************************************!*\
  !*** ./components/user_settings/display/user_settings_theme/premade_theme_chooser/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _premade_theme_chooser_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./premade_theme_chooser.jsx */ "./components/user_settings/display/user_settings_theme/premade_theme_chooser/premade_theme_chooser.jsx");


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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__["getConfig"])(state);
  const allowedThemes = config.AllowedThemes && config.AllowedThemes.split(',') || [];
  return {
    allowedThemes
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(_premade_theme_chooser_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/user_settings_theme/premade_theme_chooser/index.js");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/user_settings_theme/premade_theme_chooser/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/display/user_settings_theme/premade_theme_chooser/premade_theme_chooser.jsx":
/*!**************************************************************************************************************!*\
  !*** ./components/user_settings/display/user_settings_theme/premade_theme_chooser/premade_theme_chooser.jsx ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PremadeThemeChooser; });
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




class PremadeThemeChooser extends react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent {
  render() {
    const theme = this.props.theme;
    const premadeThemes = [];
    const allowedThemes = this.props.allowedThemes;
    const hasAllowedThemes = allowedThemes.length > 1 || allowedThemes[0] && allowedThemes[0].trim().length > 0;

    for (const k in utils_constants__WEBPACK_IMPORTED_MODULE_5__["default"].THEMES) {
      if (utils_constants__WEBPACK_IMPORTED_MODULE_5__["default"].THEMES.hasOwnProperty(k)) {
        if (hasAllowedThemes && allowedThemes.indexOf(k) < 0) {
          continue;
        }

        const premadeTheme = Object.assign({}, utils_constants__WEBPACK_IMPORTED_MODULE_5__["default"].THEMES[k]);
        let activeClass = '';

        if (premadeTheme.type === theme.type) {
          activeClass = 'active';
        }

        premadeThemes.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "col-xs-6 col-sm-3 premade-themes",
          key: 'premade-theme-key' + k
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          id: "premadeTheme".concat(premadeTheme.type.replace(' ', '')),
          className: activeClass,
          onClick: () => this.props.updateTheme(premadeTheme)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
          alt: 'premade theme ' + k,
          className: "img-responsive",
          src: premadeTheme.image
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "theme-label"
        }, utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__["toTitleCase"](premadeTheme.type))))));
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "row appearance-section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "clearfix"
    }, premadeThemes));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
PremadeThemeChooser.propTypes = {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  updateTheme: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  allowedThemes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string)
};
PremadeThemeChooser.defaultProps = {
  allowedThemes: []
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PremadeThemeChooser, "PremadeThemeChooser", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/user_settings_theme/premade_theme_chooser/premade_theme_chooser.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/display/user_settings_theme/user_settings_theme.jsx":
/*!**************************************************************************************!*\
  !*** ./components/user_settings/display/user_settings_theme/user_settings_theme.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeSetting; });
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var dispatcher_app_dispatcher_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dispatcher/app_dispatcher.jsx */ "./dispatcher/app_dispatcher.jsx");
/* harmony import */ var components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/setting_item_max.jsx */ "./components/setting_item_max.jsx");
/* harmony import */ var components_setting_item_min__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/setting_item_min */ "./components/setting_item_min/index.ts");
/* harmony import */ var _custom_theme_chooser_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom_theme_chooser.jsx */ "./components/user_settings/display/user_settings_theme/custom_theme_chooser.jsx");
/* harmony import */ var _premade_theme_chooser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./premade_theme_chooser */ "./components/user_settings/display/user_settings_theme/premade_theme_chooser/index.js");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable react/no-string-refs */












class ThemeSetting extends react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "submitTheme", async () => {
      const teamId = this.state.applyToAllTeams ? '' : this.props.currentTeamId;
      this.setState({
        isSaving: true
      });
      await this.props.actions.saveTheme(teamId, this.state.theme);

      if (this.state.applyToAllTeams) {
        await this.props.actions.deleteTeamSpecificThemes();
      }

      this.props.setRequireConfirm(false);
      this.originalTheme = Object.assign({}, this.state.theme);
      this.props.updateSection('');
      this.setState({
        isSaving: false
      });
    });

    _defineProperty(this, "updateTheme", theme => {
      let themeChanged = this.state.theme.length === theme.length;

      if (!themeChanged) {
        for (const field in theme) {
          if (theme.hasOwnProperty(field)) {
            if (this.state.theme[field] !== theme[field]) {
              themeChanged = true;
              break;
            }
          }
        }
      }

      this.props.setRequireConfirm(themeChanged);
      this.setState({
        theme
      });
      utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["applyTheme"](theme);
    });

    _defineProperty(this, "resetFields", () => {
      const state = this.getStateFromProps();
      state.serverError = null;
      this.setState(state);
      utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["applyTheme"](state.theme);
      this.props.setRequireConfirm(false);
    });

    _defineProperty(this, "handleImportModal", () => {
      dispatcher_app_dispatcher_jsx__WEBPACK_IMPORTED_MODULE_9__["default"].handleViewAction({
        type: utils_constants__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].TOGGLE_IMPORT_THEME_MODAL,
        value: true,
        callback: this.updateTheme
      });
      this.props.setEnforceFocus(false);
    });

    _defineProperty(this, "handleUpdateSection", section => {
      this.props.updateSection(section);
    });

    this.state = _objectSpread(_objectSpread({}, this.getStateFromProps(props)), {}, {
      isSaving: false
    });
    this.originalTheme = Object.assign({}, this.state.theme);
  }

  componentDidMount() {
    if (this.props.selected) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(this.refs[this.state.theme])).addClass('active-border'); // eslint-disable-line jquery/no-class
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selected && !this.props.selected) {
      this.resetFields();
    }

    if (this.props.selected) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.color-btn').removeClass('active-border'); // eslint-disable-line jquery/no-class

      jquery__WEBPACK_IMPORTED_MODULE_2___default()(react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(this.refs[this.state.theme])).addClass('active-border'); // eslint-disable-line jquery/no-class
    }
  }

  componentWillUnmount() {
    if (this.props.selected) {
      utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["applyTheme"](this.props.theme);
    }
  }

  getStateFromProps(props = this.props) {
    const theme = _objectSpread({}, props.theme);

    if (!theme.codeTheme) {
      theme.codeTheme = utils_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].DEFAULT_CODE_THEME;
    }

    return {
      theme,
      type: theme.type || 'premade',
      showAllTeamsCheckbox: props.showAllTeamsCheckbox,
      applyToAllTeams: props.applyToAllTeams
    };
  }

  updateType(type) {
    this.setState({
      type
    });
  }

  render() {
    let serverError;

    if (this.state.serverError) {
      serverError = this.state.serverError;
    }

    const displayCustom = this.state.type === 'custom';
    let custom;
    let premade;

    if (displayCustom && this.props.allowCustomThemes) {
      custom = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        key: "customThemeChooser"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_custom_theme_chooser_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
        theme: this.state.theme,
        updateTheme: this.updateTheme
      }));
    } else {
      premade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        key: "premadeThemeChooser"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_premade_theme_chooser__WEBPACK_IMPORTED_MODULE_13__["default"], {
        theme: this.state.theme,
        updateTheme: this.updateTheme
      }));
    }

    let themeUI;

    if (this.props.selected) {
      const inputs = [];

      if (this.props.allowCustomThemes) {
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "radio",
          key: "premadeThemeColorLabel"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
          id: "standardThemes",
          type: "radio",
          name: "theme",
          checked: !displayCustom,
          onChange: this.updateType.bind(this, 'premade')
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.display.theme.themeColors",
          defaultMessage: "Theme Colors"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null)));
      }

      inputs.push(premade);

      if (this.props.allowCustomThemes) {
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "radio",
          key: "customThemeColorLabel"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
          id: "customThemes",
          type: "radio",
          name: "theme",
          checked: displayCustom,
          onChange: this.updateType.bind(this, 'custom')
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.display.theme.customTheme",
          defaultMessage: "Custom Theme"
        }))));
        inputs.push(custom);
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          key: "otherThemes"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
          id: "otherThemes",
          href: "http://docs.mattermost.com/help/settings/theme-colors.html#custom-theme-examples",
          target: "_blank",
          rel: "noopener noreferrer"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.display.theme.otherThemes",
          defaultMessage: "See other themes"
        }))));
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          key: "importSlackThemeButton",
          className: "pt-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
          id: "slackImportTheme",
          className: "theme style--none color--link",
          onClick: this.handleImportModal
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.display.theme.import",
          defaultMessage: "Import theme colors from Slack"
        }))));
      }

      let allTeamsCheckbox = null;

      if (this.state.showAllTeamsCheckbox) {
        allTeamsCheckbox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "checkbox user-settings__submit-checkbox"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
          id: "applyThemeToAllTeams",
          type: "checkbox",
          checked: this.state.applyToAllTeams,
          onChange: e => this.setState({
            applyToAllTeams: e.target.checked
          })
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.display.theme.applyToAllTeams",
          defaultMessage: "Apply new theme to all my teams"
        })));
      }

      themeUI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        inputs: inputs,
        submitExtra: allTeamsCheckbox,
        submit: this.submitTheme,
        disableEnterSubmit: true,
        saving: this.state.isSaving,
        server_error: serverError,
        width: "full",
        updateSection: this.handleUpdateSection
      });
    } else {
      themeUI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.display.theme.title",
          defaultMessage: "Theme"
        }),
        describe: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.display.theme.describe",
          defaultMessage: "Open to manage your theme"
        }),
        section: 'theme',
        updateSection: this.handleUpdateSection,
        focused: this.props.focused
      });
    }

    return themeUI;
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
/* eslint-enable react/no-string-refs */

_defineProperty(ThemeSetting, "propTypes", {
  actions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    saveTheme: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
    deleteTeamSpecificThemes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
  }).isRequired,
  currentTeamId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  updateSection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  setRequireConfirm: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  setEnforceFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  allowCustomThemes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  focused: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ThemeSetting, "ThemeSetting", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/display/user_settings_theme/user_settings_theme.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/general/index.ts":
/*!***************************************************!*\
  !*** ./components/user_settings/general/index.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_actions_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/actions/errors */ "./node_modules/mattermost-redux/actions/errors.js");
/* harmony import */ var mattermost_redux_actions_errors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_errors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_settings_general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user_settings_general */ "./components/user_settings/general/user_settings_general.tsx");
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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_4__["getConfig"])(state);
  const requireEmailVerification = config.RequireEmailVerification === 'true';
  const maxFileSize = parseInt(config.MaxFileSize, 10);
  const ldapFirstNameAttributeSet = config.LdapFirstNameAttributeSet === 'true';
  const ldapLastNameAttributeSet = config.LdapLastNameAttributeSet === 'true';
  const samlFirstNameAttributeSet = config.SamlFirstNameAttributeSet === 'true';
  const samlLastNameAttributeSet = config.SamlLastNameAttributeSet === 'true';
  const ldapNicknameAttributeSet = config.LdapNicknameAttributeSet === 'true';
  const samlNicknameAttributeSet = config.SamlNicknameAttributeSet === 'true';
  const samlPositionAttributeSet = config.SamlPositionAttributeSet === 'true';
  const ldapPositionAttributeSet = config.LdapPositionAttributeSet === 'true';
  const ldapPictureAttributeSet = config.LdapPictureAttributeSet === 'true';
  return {
    requireEmailVerification,
    maxFileSize,
    ldapFirstNameAttributeSet,
    ldapLastNameAttributeSet,
    samlFirstNameAttributeSet,
    samlLastNameAttributeSet,
    ldapNicknameAttributeSet,
    samlNicknameAttributeSet,
    samlPositionAttributeSet,
    ldapPositionAttributeSet,
    ldapPictureAttributeSet
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      logError: mattermost_redux_actions_errors__WEBPACK_IMPORTED_MODULE_3__["logError"],
      clearErrors: mattermost_redux_actions_errors__WEBPACK_IMPORTED_MODULE_3__["clearErrors"],
      getMe: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["getMe"],
      updateMe: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["updateMe"],
      sendVerificationEmail: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["sendVerificationEmail"],
      setDefaultProfileImage: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["setDefaultProfileImage"],
      uploadProfileImage: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["uploadProfileImage"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_user_settings_general__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/general/index.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/general/index.ts");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/general/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/general/user_settings_general.tsx":
/*!********************************************************************!*\
  !*** ./components/user_settings/general/user_settings_general.tsx ***!
  \********************************************************************/
/*! exports provided: UserSettingsGeneralTab, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsGeneralTab", function() { return UserSettingsGeneralTab; });
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mattermost-redux/utils/helpers */ "./node_modules/mattermost-redux/utils/helpers.js");
/* harmony import */ var mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! actions/telemetry_actions.jsx */ "./actions/telemetry_actions.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/setting_item_max.jsx */ "./components/setting_item_max.jsx");
/* harmony import */ var components_setting_item_min__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/setting_item_min */ "./components/setting_item_min/index.ts");
/* harmony import */ var components_setting_picture_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/setting_picture.jsx */ "./components/setting_picture.jsx");
/* harmony import */ var components_widgets_loading_loading_wrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/widgets/loading/loading_wrapper */ "./components/widgets/loading/loading_wrapper.tsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");






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

/* eslint-disable react/no-string-refs */











const holders = Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["defineMessages"])({
  usernameReserved: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.usernameReserved'),
    defaultMessage: 'This username is reserved, please choose a new one.'
  },
  usernameRestrictions: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.usernameRestrictions'),
    defaultMessage: "Username must begin with a letter, and contain between {min} to {max} lowercase characters made up of numbers, letters, and the symbols '.', '-', and '_'."
  },
  validEmail: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.validEmail'),
    defaultMessage: 'Please enter a valid email address.'
  },
  emailMatch: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.emailMatch'),
    defaultMessage: 'The new emails you entered do not match.'
  },
  incorrectPassword: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.incorrectPassword'),
    defaultMessage: 'Your password is incorrect.'
  },
  emptyPassword: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.emptyPassword'),
    defaultMessage: 'Please enter your current password.'
  },
  validImage: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.validImage'),
    defaultMessage: 'Only BMP, JPG or PNG images may be used for profile pictures'
  },
  imageTooLarge: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.imageTooLarge'),
    defaultMessage: 'Unable to upload profile image. File is too large.'
  },
  uploadImage: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.uploadImage'),
    defaultMessage: "Click 'Edit' to upload an image."
  },
  uploadImageMobile: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.mobile.uploadImage'),
    defaultMessage: 'Click to upload an image'
  },
  fullName: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.fullName'),
    defaultMessage: 'Full Name'
  },
  nickname: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.nickname'),
    defaultMessage: 'Nickname'
  },
  username: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.username'),
    defaultMessage: 'Username'
  },
  profilePicture: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.profilePicture'),
    defaultMessage: 'Profile Picture'
  },
  close: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.close'),
    defaultMessage: 'Close'
  },
  position: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_10__["t"])('user.settings.general.position'),
    defaultMessage: 'Position'
  }
});
class UserSettingsGeneralTab extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "submitActive", false);

    _defineProperty(this, "handleEmailResend", email => {
      this.setState({
        resendStatus: 'sending',
        showSpinner: true
      });
      this.props.actions.sendVerificationEmail(email).then(({
        data,
        error: err
      }) => {
        if (data) {
          this.setState({
            resendStatus: 'success'
          });
        } else if (err) {
          this.setState({
            resendStatus: 'failure'
          });
        }
      });
    });

    _defineProperty(this, "createEmailResendLink", email => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "resend-verification-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_widgets_loading_loading_wrapper__WEBPACK_IMPORTED_MODULE_14__["default"], {
        loading: this.state.showSpinner,
        text: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["localizeMessage"]('user.settings.general.sending', 'Sending')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        onClick: () => {
          this.handleEmailResend(email);
          setTimeout(() => {
            this.setState({
              showSpinner: false
            });
          }, 500);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "user.settings.general.sendAgain",
        defaultMessage: "Send again"
      }))));
    });

    _defineProperty(this, "submitUsername", () => {
      const user = Object.assign({}, this.props.user);
      const username = this.state.username.trim().toLowerCase();
      const {
        formatMessage
      } = this.props.intl;
      const usernameError = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["isValidUsername"](username);

      if (usernameError) {
        let errObj;

        if (usernameError.id === utils_constants__WEBPACK_IMPORTED_MODULE_15__["ValidationErrors"].RESERVED_NAME) {
          errObj = {
            clientError: formatMessage(holders.usernameReserved),
            serverError: ''
          };
        } else {
          errObj = {
            clientError: formatMessage(holders.usernameRestrictions, {
              min: utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].MIN_USERNAME_LENGTH,
              max: utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].MAX_USERNAME_LENGTH
            }),
            serverError: ''
          };
        }

        this.setState(errObj);
        return;
      }

      if (user.username === username) {
        this.updateSection('');
        return;
      }

      user.username = username;
      Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_8__["trackEvent"])('settings', 'user_settings_update', {
        field: 'username'
      });
      this.submitUser(user, false);
    });

    _defineProperty(this, "submitNickname", () => {
      const user = Object.assign({}, this.props.user);
      const nickname = this.state.nickname.trim();

      if (user.nickname === nickname) {
        this.updateSection('');
        return;
      }

      user.nickname = nickname;
      Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_8__["trackEvent"])('settings', 'user_settings_update', {
        field: 'nickname'
      });
      this.submitUser(user, false);
    });

    _defineProperty(this, "submitName", () => {
      const user = Object.assign({}, this.props.user);
      const firstName = this.state.firstName.trim();
      const lastName = this.state.lastName.trim();

      if (user.first_name === firstName && user.last_name === lastName) {
        this.updateSection('');
        return;
      }

      user.first_name = firstName;
      user.last_name = lastName;
      Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_8__["trackEvent"])('settings', 'user_settings_update', {
        field: 'fullname'
      });
      this.submitUser(user, false);
    });

    _defineProperty(this, "submitEmail", () => {
      const user = Object.assign({}, this.props.user);
      const email = this.state.email.trim().toLowerCase();
      const confirmEmail = this.state.confirmEmail.trim().toLowerCase();
      const currentPassword = this.state.currentPassword;
      const {
        formatMessage
      } = this.props.intl;

      if (email === user.email && (confirmEmail === '' || confirmEmail === user.email)) {
        this.updateSection('');
        return;
      }

      if (email === '' || !Object(mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isEmail"])(email)) {
        this.setState({
          emailError: formatMessage(holders.validEmail),
          clientError: '',
          serverError: ''
        });
        return;
      }

      if (email !== confirmEmail) {
        this.setState({
          emailError: formatMessage(holders.emailMatch),
          clientError: '',
          serverError: ''
        });
        return;
      }

      if (currentPassword === '') {
        this.setState({
          emailError: formatMessage(holders.emptyPassword),
          clientError: '',
          serverError: ''
        });
        return;
      }

      user.email = email;
      user.password = currentPassword;
      Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_8__["trackEvent"])('settings', 'user_settings_update', {
        field: 'email'
      });
      this.submitUser(user, true);
    });

    _defineProperty(this, "submitUser", (user, emailUpdated) => {
      const {
        formatMessage
      } = this.props.intl;
      this.setState({
        sectionIsSaving: true
      });
      this.props.actions.updateMe(user).then(({
        data,
        error: err
      }) => {
        if (data) {
          this.updateSection('');
          this.props.actions.getMe();
          const verificationEnabled = this.props.requireEmailVerification && emailUpdated;

          if (verificationEnabled) {
            this.props.actions.clearErrors();
            this.props.actions.logError({
              message: utils_constants__WEBPACK_IMPORTED_MODULE_15__["AnnouncementBarMessages"].EMAIL_VERIFICATION_REQUIRED,
              type: utils_constants__WEBPACK_IMPORTED_MODULE_15__["AnnouncementBarTypes"].SUCCESS
            }, true);
          }
        } else if (err) {
          let serverError;

          if (err.server_error_id && err.server_error_id === 'api.user.check_user_password.invalid.app_error') {
            serverError = formatMessage(holders.incorrectPassword);
          } else if (err.message) {
            serverError = err.message;
          } else {
            serverError = err;
          }

          this.setState({
            serverError,
            emailError: '',
            clientError: '',
            sectionIsSaving: false
          });
        }
      });
    });

    _defineProperty(this, "setDefaultProfilePicture", async () => {
      try {
        await this.props.actions.setDefaultProfileImage(this.props.user.id);
        this.updateSection('');
        this.submitActive = false;
      } catch (err) {
        let serverError;

        if (err.message) {
          serverError = err.message;
        } else {
          serverError = err;
        }

        this.setState({
          serverError,
          emailError: '',
          clientError: '',
          sectionIsSaving: false
        });
      }
    });

    _defineProperty(this, "submitPicture", () => {
      if (!this.state.pictureFile) {
        return;
      }

      if (!this.submitActive) {
        return;
      }

      Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_8__["trackEvent"])('settings', 'user_settings_update', {
        field: 'picture'
      });
      const {
        formatMessage
      } = this.props.intl;
      const file = this.state.pictureFile;

      if (!utils_constants__WEBPACK_IMPORTED_MODULE_15__["AcceptedProfileImageTypes"].includes(file.type)) {
        this.setState({
          clientError: formatMessage(holders.validImage),
          serverError: ''
        });
        return;
      } else if (file.size > this.props.maxFileSize) {
        this.setState({
          clientError: formatMessage(holders.imageTooLarge),
          serverError: ''
        });
        return;
      }

      this.setState({
        loadingPicture: true
      });
      this.props.actions.uploadProfileImage(this.props.user.id, file).then(({
        data,
        error: err
      }) => {
        if (data) {
          this.updateSection('');
          this.submitActive = false;
        } else if (err) {
          const state = this.setupInitialState(this.props);
          state.serverError = err.message;
          this.setState(state);
        }
      });
    });

    _defineProperty(this, "submitPosition", () => {
      const user = Object.assign({}, this.props.user);
      const position = this.state.position.trim();

      if (user.position === position) {
        this.updateSection('');
        return;
      }

      user.position = position;
      Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_8__["trackEvent"])('settings', 'user_settings_update', {
        field: 'position'
      });
      this.submitUser(user, false);
    });

    _defineProperty(this, "updateUsername", e => {
      this.setState({
        username: e.target.value
      });
    });

    _defineProperty(this, "updateFirstName", e => {
      this.setState({
        firstName: e.target.value
      });
    });

    _defineProperty(this, "updateLastName", e => {
      this.setState({
        lastName: e.target.value
      });
    });

    _defineProperty(this, "updateNickname", e => {
      this.setState({
        nickname: e.target.value
      });
    });

    _defineProperty(this, "updatePosition", e => {
      this.setState({
        position: e.target.value
      });
    });

    _defineProperty(this, "updateEmail", e => {
      this.setState({
        email: e.target.value
      });
    });

    _defineProperty(this, "updateConfirmEmail", e => {
      this.setState({
        confirmEmail: e.target.value
      });
    });

    _defineProperty(this, "updateCurrentPassword", e => {
      this.setState({
        currentPassword: e.target.value
      });
    });

    _defineProperty(this, "updatePicture", e => {
      if (e.target.files && e.target.files[0]) {
        this.setState({
          pictureFile: e.target.files[0]
        });
        this.submitActive = true;
        this.setState({
          clientError: null
        });
      } else {
        this.setState({
          pictureFile: null
        });
      }
    });

    _defineProperty(this, "updateSection", section => {
      this.setState(Object.assign({}, this.setupInitialState(this.props), {
        clientError: '',
        serverError: '',
        emailError: '',
        sectionIsSaving: false
      }));
      this.submitActive = false;
      this.props.updateSection(section);
    });

    this.state = this.setupInitialState(props);
  }

  setupInitialState(props) {
    const user = props.user;
    return {
      username: user.username,
      firstName: user.first_name,
      lastName: user.last_name,
      nickname: user.nickname,
      position: user.position,
      originalEmail: user.email,
      email: '',
      confirmEmail: '',
      currentPassword: '',
      pictureFile: null,
      loadingPicture: false,
      sectionIsSaving: false,
      showSpinner: false,
      serverError: ''
    };
  }

  createEmailSection() {
    const {
      formatMessage
    } = this.props.intl;
    let emailSection;

    if (this.props.activeSection === 'email') {
      const emailVerificationEnabled = this.props.requireEmailVerification;
      const inputs = [];
      let helpText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "user.settings.general.emailHelp1",
        defaultMessage: "Email is used for sign-in, notifications, and password reset. Email requires verification if changed."
      });

      if (!emailVerificationEnabled) {
        helpText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.emailHelp3",
          defaultMessage: "Email is used for sign-in, notifications, and password reset."
        });
      }

      let submit = null;

      if (this.props.user.auth_service === '') {
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "currentEmailSetting"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.currentEmail",
          defaultMessage: "Current Email"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          className: "control-label word-break--all text-left"
        }, this.state.originalEmail)))));
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "emailSetting"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.newEmail",
          defaultMessage: "New Email"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          autoFocus: true,
          id: "primaryEmail",
          className: "form-control",
          type: "email",
          onChange: this.updateEmail,
          maxLength: utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].MAX_EMAIL_LENGTH,
          value: this.state.email,
          "aria-label": formatMessage({
            id: 'user.settings.general.newEmail',
            defaultMessage: 'New Email'
          })
        })))));
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "confirmEmailSetting"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.confirmEmail",
          defaultMessage: "Confirm Email"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          id: "confirmEmail",
          className: "form-control",
          type: "email",
          onChange: this.updateConfirmEmail,
          maxLength: utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].MAX_EMAIL_LENGTH,
          value: this.state.confirmEmail,
          "aria-label": formatMessage({
            id: 'user.settings.general.confirmEmail',
            defaultMessage: 'Confirm Email'
          })
        })))));
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "currentPassword"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.currentPassword",
          defaultMessage: "Current Password"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          id: "currentPassword",
          className: "form-control",
          type: "password",
          onChange: this.updateCurrentPassword,
          value: this.state.currentPassword,
          "aria-label": formatMessage({
            id: 'user.settings.general.currentPassword',
            defaultMessage: 'Current Password'
          })
        }))), helpText));
        submit = this.submitEmail;
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].GITLAB_SERVICE) {
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "oauthEmailInfo",
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "setting-list__hint pb-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.emailGitlabCantUpdate",
          defaultMessage: "Login occurs through GitLab. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        })), helpText));
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].GOOGLE_SERVICE) {
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "oauthEmailInfo",
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "setting-list__hint pb-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.emailGoogleCantUpdate",
          defaultMessage: "Login occurs through Google Apps. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        })), helpText));
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].OFFICE365_SERVICE) {
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "oauthEmailInfo",
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "setting-list__hint pb-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.emailOffice365CantUpdate",
          defaultMessage: "Login occurs through Office 365. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        })), helpText));
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].OPENID_SERVICE) {
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "oauthEmailInfo",
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "setting-list__hint pb-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.emailOpenIdCantUpdate",
          defaultMessage: "Login occurs through OpenID Connect. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        })), helpText));
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].LDAP_SERVICE) {
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "oauthEmailInfo",
          className: "pb-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "setting-list__hint pb-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.emailLdapCantUpdate",
          defaultMessage: "Login occurs through AD/LDAP. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        }))));
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].SAML_SERVICE) {
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "oauthEmailInfo",
          className: "pb-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "setting-list__hint pb-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.emailSamlCantUpdate",
          defaultMessage: "Login occurs through SAML. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        })), helpText));
      }

      emailSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.email",
          defaultMessage: "Email"
        }),
        inputs: inputs,
        submit: submit,
        saving: this.state.sectionIsSaving,
        serverError: this.state.serverError,
        clientError: this.state.emailError,
        updateSection: this.updateSection
      });
    } else {
      let describe = '';

      if (this.props.user.auth_service === '') {
        describe = this.props.user.email;
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].GITLAB_SERVICE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.loginGitlab",
          defaultMessage: "Login done through GitLab ({email})",
          values: {
            email: this.state.originalEmail
          }
        });
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].GOOGLE_SERVICE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.loginGoogle",
          defaultMessage: "Login done through Google Apps ({email})",
          values: {
            email: this.state.originalEmail
          }
        });
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].OFFICE365_SERVICE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.loginOffice365",
          defaultMessage: "Login done through Office 365 ({email})",
          values: {
            email: this.state.originalEmail
          }
        });
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].LDAP_SERVICE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.loginLdap",
          defaultMessage: "Login done through AD/LDAP ({email})",
          values: {
            email: this.state.originalEmail
          }
        });
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].SAML_SERVICE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.loginSaml",
          defaultMessage: "Login done through SAML ({email})",
          values: {
            email: this.state.originalEmail
          }
        });
      }

      emailSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.email",
          defaultMessage: "Email"
        }),
        describe: describe,
        section: 'email',
        updateSection: this.updateSection
      });
    }

    return emailSection;
  }

  render() {
    const user = this.props.user;
    const {
      formatMessage
    } = this.props.intl;
    let clientError = null;

    if (this.state.clientError) {
      clientError = this.state.clientError;
    }

    let serverError = null;

    if (this.state.serverError) {
      serverError = this.state.serverError;
    }

    let nameSection;
    const inputs = [];

    if (this.props.activeSection === 'name') {
      let extraInfo;
      let submit = null;

      if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].LDAP_SERVICE && (this.props.ldapFirstNameAttributeSet || this.props.ldapLastNameAttributeSet) || this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].SAML_SERVICE && (this.props.samlFirstNameAttributeSet || this.props.samlLastNameAttributeSet) || utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].OAUTH_SERVICES.includes(this.props.user.auth_service)) {
        extraInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.field_handled_externally",
          defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so through your login provider."
        }));
      } else {
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "firstNameSetting",
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.firstName",
          defaultMessage: "First Name"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          id: "firstName",
          autoFocus: true,
          className: "form-control",
          type: "text",
          onChange: this.updateFirstName,
          maxLength: utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].MAX_FIRSTNAME_LENGTH,
          value: this.state.firstName,
          onFocus: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["moveCursorToEnd"],
          "aria-label": formatMessage({
            id: 'user.settings.general.firstName',
            defaultMessage: 'First Name'
          })
        }))));
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "lastNameSetting",
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.lastName",
          defaultMessage: "Last Name"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          id: "lastName",
          className: "form-control",
          type: "text",
          onChange: this.updateLastName,
          maxLength: utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].MAX_LASTNAME_LENGTH,
          value: this.state.lastName,
          "aria-label": formatMessage({
            id: 'user.settings.general.lastName',
            defaultMessage: 'Last Name'
          })
        }))));

        const notifClick = e => {
          e.preventDefault();
          this.updateSection('');
          this.props.updateTab('notifications');
        };

        const notifLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "#",
          onClick: notifClick.bind(this)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.notificationsLink",
          defaultMessage: "Notifications"
        }));
        extraInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.notificationsExtra",
          defaultMessage: "By default, you will receive mention notifications when someone types your first name. Go to {notify} settings to change this default.",
          values: {
            notify: notifLink
          }
        }));
        submit = this.submitName;
      }

      nameSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: formatMessage(holders.fullName),
        inputs: inputs,
        submit: submit,
        saving: this.state.sectionIsSaving,
        serverError: serverError,
        clientError: clientError,
        updateSection: this.updateSection,
        extraInfo: extraInfo
      });
    } else {
      let describe = '';

      if (user.first_name && user.last_name) {
        describe = user.first_name + ' ' + user.last_name;
      } else if (user.first_name) {
        describe = user.first_name;
      } else if (user.last_name) {
        describe = user.last_name;
      } else {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.emptyName",
          defaultMessage: "Click 'Edit' to add your full name"
        });

        if (utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["isMobile"]()) {
          describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "user.settings.general.mobile.emptyName",
            defaultMessage: "Click to add your full name"
          });
        }
      }

      nameSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: formatMessage(holders.fullName),
        describe: describe,
        section: 'name',
        updateSection: this.updateSection
      });
    }

    let nicknameSection;

    if (this.props.activeSection === 'nickname') {
      let extraInfo;
      let submit = null;

      if (this.props.user.auth_service === 'ldap' && this.props.ldapNicknameAttributeSet || this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].SAML_SERVICE && this.props.samlNicknameAttributeSet) {
        extraInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.field_handled_externally",
          defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so through your login provider."
        }));
      } else {
        let nicknameLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.nickname",
          defaultMessage: "Nickname"
        });

        if (utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["isMobile"]()) {
          nicknameLabel = '';
        }

        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "nicknameSetting",
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, nicknameLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          id: "nickname",
          autoFocus: true,
          className: "form-control",
          type: "text",
          onChange: this.updateNickname,
          value: this.state.nickname,
          maxLength: utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].MAX_NICKNAME_LENGTH,
          autoCapitalize: "off",
          "aria-label": formatMessage({
            id: 'user.settings.general.nickname',
            defaultMessage: 'Nickname'
          })
        }))));
        extraInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.nicknameExtra",
          defaultMessage: "Use Nickname for a name you might be called that is different from your first name and username. This is most often used when two or more people have similar sounding names and usernames."
        }));
        submit = this.submitNickname;
      }

      nicknameSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: formatMessage(holders.nickname),
        inputs: inputs,
        submit: submit,
        saving: this.state.sectionIsSaving,
        serverError: serverError,
        clientError: clientError,
        updateSection: this.updateSection,
        extraInfo: extraInfo
      });
    } else {
      let describe = '';

      if (user.nickname) {
        describe = user.nickname;
      } else {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.emptyNickname",
          defaultMessage: "Click 'Edit' to add a nickname"
        });

        if (utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["isMobile"]()) {
          describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "user.settings.general.mobile.emptyNickname",
            defaultMessage: "Click to add a nickname"
          });
        }
      }

      nicknameSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: formatMessage(holders.nickname),
        describe: describe,
        section: 'nickname',
        updateSection: this.updateSection
      });
    }

    let usernameSection;

    if (this.props.activeSection === 'username') {
      let extraInfo;
      let submit = null;

      if (this.props.user.auth_service === '') {
        let usernameLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.username",
          defaultMessage: "Username"
        });

        if (utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["isMobile"]()) {
          usernameLabel = '';
        }

        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "usernameSetting",
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, usernameLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          id: "username",
          autoFocus: true,
          maxLength: utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].MAX_USERNAME_LENGTH,
          className: "form-control",
          type: "text",
          onChange: this.updateUsername,
          value: this.state.username,
          autoCapitalize: "off",
          onFocus: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["moveCursorToEnd"],
          "aria-label": formatMessage({
            id: 'user.settings.general.username',
            defaultMessage: 'Username'
          })
        }))));
        extraInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.usernameInfo",
          defaultMessage: "Pick something easy for teammates to recognize and recall."
        }));
        submit = this.submitUsername;
      } else {
        extraInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.field_handled_externally",
          defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so through your login provider."
        }));
      }

      usernameSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: formatMessage(holders.username),
        inputs: inputs,
        submit: submit,
        saving: this.state.sectionIsSaving,
        serverError: serverError,
        clientError: clientError,
        updateSection: this.updateSection,
        extraInfo: extraInfo
      });
    } else {
      usernameSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: formatMessage(holders.username),
        describe: this.props.user.username,
        section: 'username',
        updateSection: this.updateSection
      });
    }

    let positionSection;

    if (this.props.activeSection === 'position') {
      let extraInfo;
      let submit = null;

      if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].LDAP_SERVICE && this.props.ldapPositionAttributeSet || this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].SAML_SERVICE && this.props.samlPositionAttributeSet) {
        extraInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.field_handled_externally",
          defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so through your login provider."
        }));
      } else {
        let positionLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.position",
          defaultMessage: "Position"
        });

        if (utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["isMobile"]()) {
          positionLabel = '';
        }

        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "positionSetting",
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, positionLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          id: "position",
          autoFocus: true,
          className: "form-control",
          type: "text",
          onChange: this.updatePosition,
          value: this.state.position,
          maxLength: utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].MAX_POSITION_LENGTH,
          autoCapitalize: "off",
          onFocus: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["moveCursorToEnd"],
          "aria-label": formatMessage({
            id: 'user.settings.general.position',
            defaultMessage: 'Position'
          })
        }))));
        extraInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.positionExtra",
          defaultMessage: "Use Position for your role or job title. This will be shown in your profile popover."
        }));
        submit = this.submitPosition;
      }

      positionSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: formatMessage(holders.position),
        inputs: inputs,
        submit: submit,
        saving: this.state.sectionIsSaving,
        serverError: serverError,
        clientError: clientError,
        updateSection: this.updateSection,
        extraInfo: extraInfo
      });
    } else {
      let describe = '';

      if (user.position) {
        describe = user.position;
      } else {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.emptyPosition",
          defaultMessage: "Click 'Edit' to add your job title / position"
        });

        if (utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["isMobile"]()) {
          describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "user.settings.general.mobile.emptyPosition",
            defaultMessage: "Click to add your job title / position"
          });
        }
      }

      positionSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: formatMessage(holders.position),
        describe: describe,
        section: 'position',
        updateSection: this.updateSection
      });
    }

    const emailSection = this.createEmailSection();
    let pictureSection;

    if (this.props.activeSection === 'picture') {
      let submit = null;
      let setDefault = null;
      let helpText = null;
      let imgSrc = null;

      if ((this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].LDAP_SERVICE || this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].SAML_SERVICE) && this.props.ldapPictureAttributeSet) {
        helpText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.field_handled_externally",
          defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so through your login provider."
        }));
      } else {
        submit = this.submitPicture;
        setDefault = user.last_picture_update > 0 ? this.setDefaultProfilePicture : null;
        imgSrc = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["imageURLForUser"](user.id, user.last_picture_update);
        helpText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: 'setting_picture.help.profile',
          defaultMessage: "Upload a picture in BMP, JPG or PNG format. Maximum file size: {max}",
          values: {
            max: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["fileSizeToString"](this.props.maxFileSize)
          }
        });
      }

      pictureSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_setting_picture_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: formatMessage(holders.profilePicture),
        onSubmit: submit,
        onSetDefault: setDefault,
        src: imgSrc,
        defaultImageSrc: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["defaultImageURLForUser"](user.id),
        serverError: serverError,
        clientError: clientError,
        updateSection: e => {
          this.updateSection('');
          e.preventDefault();
        },
        file: this.state.pictureFile,
        onFileChange: this.updatePicture,
        submitActive: this.submitActive,
        loadingPicture: this.state.loadingPicture,
        maxFileSize: this.props.maxFileSize,
        helpText: helpText
      });
    } else {
      let minMessage = formatMessage(holders.uploadImage);

      if (utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["isMobile"]()) {
        minMessage = formatMessage(holders.uploadImageMobile);
      }

      if (user.last_picture_update) {
        minMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "user.settings.general.imageUpdated",
          defaultMessage: "Image last updated {date}",
          values: {
            date: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedDate"], {
              value: new Date(user.last_picture_update),
              day: "2-digit",
              month: "short",
              year: "numeric"
            })
          }
        });
      }

      pictureSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: formatMessage(holders.profilePicture),
        describe: minMessage,
        section: 'picture',
        updateSection: this.updateSection
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      id: "generalSettings"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
      id: "closeUserSettings",
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": formatMessage(holders.close),
      onClick: this.props.closeModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      "aria-hidden": "true"
    }, '×')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
      className: "modal-title",
      ref: "title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "modal-back"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "generic_icons.collapse",
      defaultMessage: "Collapse Icon"
    }, title => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
      className: "fa fa-angle-left",
      title: title,
      onClick: this.props.collapseModal
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "user.settings.general.title",
      defaultMessage: "General Settings"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "user-settings"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
      id: "generalSettingsTitle",
      className: "tab-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "user.settings.general.title",
      defaultMessage: "General Settings"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "divider-dark first"
    }), nameSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "divider-light"
    }), usernameSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "divider-light"
    }), nicknameSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "divider-light"
    }), positionSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "divider-light"
    }), emailSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "divider-light"
    }), pictureSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "divider-dark"
    })));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(UserSettingsGeneralTab, "propTypes", {
  intl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,
  updateSection: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  updateTab: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  activeSection: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  closeModal: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  collapseModal: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  maxFileSize: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    logError: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
    clearErrors: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
    getMe: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
    updateMe: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
    sendVerificationEmail: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
    setDefaultProfileImage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
    uploadProfileImage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
  }).isRequired,
  requireEmailVerification: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  ldapFirstNameAttributeSet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  ldapLastNameAttributeSet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  samlFirstNameAttributeSet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  samlLastNameAttributeSet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  ldapNicknameAttributeSet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  samlNicknameAttributeSet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  ldapPositionAttributeSet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  samlPositionAttributeSet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  ldapPictureAttributeSet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
});

const _default = Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["injectIntl"])(UserSettingsGeneralTab);

/* harmony default export */ __webpack_exports__["default"] = (_default);
/* eslint-enable react/no-string-refs */

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(holders, "holders", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/general/user_settings_general.tsx");
  reactHotLoader.register(UserSettingsGeneralTab, "UserSettingsGeneralTab", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/general/user_settings_general.tsx");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/general/user_settings_general.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/index.ts":
/*!*******************************************!*\
  !*** ./components/user_settings/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user_settings */ "./components/user_settings/user_settings.tsx");
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
  return {
    user: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__["getCurrentUser"])(state)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_user_settings__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/index.ts");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/notifications/desktop_notification_settings.jsx":
/*!**********************************************************************************!*\
  !*** ./components/user_settings/notifications/desktop_notification_settings.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DesktopNotificationSettings; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semver */ "./node_modules/semver/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/i18n.jsx */ "./utils/i18n.jsx");
/* harmony import */ var components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/setting_item_max.jsx */ "./components/setting_item_max.jsx");
/* harmony import */ var components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/setting_item_min */ "./components/setting_item_min/index.ts");
/* harmony import */ var utils_user_agent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/user_agent */ "./utils/user_agent.tsx");


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











class DesktopNotificationSettings extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleMinUpdateSection", section => {
      this.props.updateSection(section);
      this.props.cancel();
    });

    _defineProperty(this, "handleMaxUpdateSection", section => {
      this.props.updateSection(section);
    });

    _defineProperty(this, "handleOnChange", e => {
      const key = e.currentTarget.getAttribute('data-key');
      const value = e.currentTarget.getAttribute('data-value');
      this.props.setParentState(key, value);
    });

    _defineProperty(this, "setDesktopNotificationSound", selectedOption => {
      this.props.setParentState('desktopNotificationSound', selectedOption.value);
      this.setState({
        selectedOption
      });
      utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["tryNotificationSound"](selectedOption.value);
    });

    _defineProperty(this, "buildMaximizedSetting", () => {
      const inputs = [];
      const activityRadio = [false, false, false];

      if (this.props.activity === utils_constants__WEBPACK_IMPORTED_MODULE_6__["NotificationLevels"].MENTION) {
        activityRadio[1] = true;
      } else if (this.props.activity === utils_constants__WEBPACK_IMPORTED_MODULE_6__["NotificationLevels"].NONE) {
        activityRadio[2] = true;
      } else {
        activityRadio[0] = true;
      }

      let soundSection;
      let notificationSelection;

      if (this.props.activity !== utils_constants__WEBPACK_IMPORTED_MODULE_6__["NotificationLevels"].NONE) {
        const soundRadio = [false, false];

        if (this.props.sound === 'false') {
          soundRadio[1] = true;
        } else {
          soundRadio[0] = true;
        }

        if (this.props.sound === 'true') {
          const sounds = Array.from(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["notificationSounds"].keys());
          const options = sounds.map(sound => {
            return {
              value: sound,
              label: sound
            };
          });

          if (!Object(utils_user_agent__WEBPACK_IMPORTED_MODULE_11__["isDesktopApp"])() || window.desktop && semver__WEBPACK_IMPORTED_MODULE_5___default.a.gte(window.desktop.version, '4.6.0')) {
            notificationSelection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
              className: "pt-2"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
              className: "react-select notification-sound-dropdown",
              classNamePrefix: "react-select",
              id: "displaySoundNotification",
              options: options,
              clearable: false,
              onChange: this.setDesktopNotificationSound,
              value: this.state.selectedOption,
              isSearchable: false,
              ref: this.dropdownSoundRef
            }));
          }
        }

        if (utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["hasSoundOptions"]()) {
          soundSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("legend", {
            className: "form-legend"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.notifications.desktop.sound",
            defaultMessage: "Notification sound"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
            id: "soundOn",
            type: "radio",
            name: "notificationSounds",
            checked: soundRadio[0],
            "data-key": 'desktopSound',
            "data-value": 'true',
            onChange: this.handleOnChange
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.notifications.on",
            defaultMessage: "On"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
            id: "soundOff",
            type: "radio",
            name: "notificationSounds",
            checked: soundRadio[1],
            "data-key": 'desktopSound',
            "data-value": 'false',
            onChange: this.handleOnChange
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.notifications.off",
            defaultMessage: "Off"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null)), notificationSelection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "mt-5"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.notifications.sounds_info",
            defaultMessage: "Notification sounds are available on Firefox, Edge, Safari, Chrome and Mattermost Desktop Apps."
          })));
        } else {
          soundSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("legend", {
            className: "form-legend"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.notifications.desktop.sound",
            defaultMessage: "Notification sound"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.notifications.soundConfig",
            defaultMessage: "Please configure notification sounds in your browser settings"
          }));
        }
      }

      inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        key: "userNotificationLevelOption"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("legend", {
        className: "form-legend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.notifications.desktop",
        defaultMessage: "Send desktop notifications"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        id: "desktopNotificationAllActivity",
        type: "radio",
        name: "desktopNotificationLevel",
        checked: activityRadio[0],
        "data-key": 'desktopActivity',
        "data-value": utils_constants__WEBPACK_IMPORTED_MODULE_6__["NotificationLevels"].ALL,
        onChange: this.handleOnChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.notifications.allActivity",
        defaultMessage: "For all activity"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        id: "desktopNotificationMentions",
        type: "radio",
        name: "desktopNotificationLevel",
        checked: activityRadio[1],
        "data-key": 'desktopActivity',
        "data-value": utils_constants__WEBPACK_IMPORTED_MODULE_6__["NotificationLevels"].MENTION,
        onChange: this.handleOnChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.notifications.onlyMentions",
        defaultMessage: "Only for mentions and direct messages"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        id: "desktopNotificationNever",
        type: "radio",
        name: "desktopNotificationLevel",
        checked: activityRadio[2],
        "data-key": 'desktopActivity',
        "data-value": utils_constants__WEBPACK_IMPORTED_MODULE_6__["NotificationLevels"].NONE,
        onChange: this.handleOnChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.notifications.never",
        defaultMessage: "Never"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.notifications.info",
        defaultMessage: "Desktop notifications are available on Edge, Firefox, Safari, Chrome and Mattermost Desktop Apps."
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", null), soundSection));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["localizeMessage"]('user.settings.notifications.desktop.title', 'Desktop Notifications'),
        inputs: inputs,
        submit: this.props.submit,
        saving: this.props.saving,
        server_error: this.props.error,
        updateSection: this.handleMaxUpdateSection
      });
    });

    _defineProperty(this, "buildMinimizedSetting", () => {
      let formattedMessageProps;
      const hasSoundOption = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["hasSoundOptions"]();

      if (this.props.activity === utils_constants__WEBPACK_IMPORTED_MODULE_6__["NotificationLevels"].MENTION) {
        if (hasSoundOption && this.props.sound !== 'false') {
          formattedMessageProps = {
            id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.notifications.desktop.mentionsSound'),
            defaultMessage: 'For mentions and direct messages, with sound'
          };
        } else if (hasSoundOption && this.props.sound === 'false') {
          formattedMessageProps = {
            id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.notifications.desktop.mentionsNoSound'),
            defaultMessage: 'For mentions and direct messages, without sound'
          };
        } else {
          formattedMessageProps = {
            id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.notifications.desktop.mentionsSoundHidden'),
            defaultMessage: 'For mentions and direct messages'
          };
        }
      } else if (this.props.activity === utils_constants__WEBPACK_IMPORTED_MODULE_6__["NotificationLevels"].NONE) {
        formattedMessageProps = {
          id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.notifications.off'),
          defaultMessage: 'Off'
        };
      } else {
        if (hasSoundOption && this.props.sound !== 'false') {
          //eslint-disable-line no-lonely-if
          formattedMessageProps = {
            id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.notifications.desktop.allSound'),
            defaultMessage: 'For all activity, with sound'
          };
        } else if (hasSoundOption && this.props.sound === 'false') {
          formattedMessageProps = {
            id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.notifications.desktop.allNoSound'),
            defaultMessage: 'For all activity, without sound'
          };
        } else {
          formattedMessageProps = {
            id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.notifications.desktop.allSoundHidden'),
            defaultMessage: 'For all activity'
          };
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["localizeMessage"]('user.settings.notifications.desktop.title', 'Desktop Notifications'),
        describe: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], formattedMessageProps),
        focused: this.props.focused,
        section: 'desktop',
        updateSection: this.handleMinUpdateSection
      });
    });

    const _selectedOption = {
      value: props.selectedSound,
      label: props.selectedSound
    };
    this.state = {
      selectedOption: _selectedOption,
      blurDropdown: false
    };
    this.dropdownSoundRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
  }

  blurDropdown() {
    if (!this.state.blurDropdown) {
      this.setState({
        blurDropdown: true
      });

      if (this.dropdownSoundRef.current) {
        this.dropdownSoundRef.current.blur();
      }
    }
  }

  componentDidUpdate() {
    this.blurDropdown();
  }

  render() {
    if (this.props.active) {
      return this.buildMaximizedSetting();
    }

    return this.buildMinimizedSetting();
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
DesktopNotificationSettings.propTypes = {
  activity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  sound: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  updateSection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  setParentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  submit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  cancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  saving: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  focused: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  selectedSound: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DesktopNotificationSettings, "DesktopNotificationSettings", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/notifications/desktop_notification_settings.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/notifications/email_notification_setting/email_notification_setting.tsx":
/*!**********************************************************************************************************!*\
  !*** ./components/user_settings/notifications/email_notification_setting/email_notification_setting.tsx ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmailNotificationSetting; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var mattermost_redux_utils_notify_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/utils/notify_props */ "./node_modules/mattermost-redux/utils/notify_props.js");
/* harmony import */ var mattermost_redux_utils_notify_props__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_utils_notify_props__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/setting_item_max.jsx */ "./components/setting_item_max.jsx");
/* harmony import */ var components_setting_item_min__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/setting_item_min */ "./components/setting_item_min/index.ts");




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







const SECONDS_PER_MINUTE = 60;
class EmailNotificationSetting extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", e => {
      const enableEmail = e.currentTarget.getAttribute('data-enable-email');
      const newInterval = parseInt(e.currentTarget.getAttribute('data-email-interval'), 10);
      this.setState({
        enableEmail,
        newInterval
      });
      this.props.onChange(enableEmail);
    });

    _defineProperty(this, "handleSubmit", async () => {
      const {
        newInterval
      } = this.state;

      if (this.props.emailInterval === newInterval && this.props.enableEmail === this.state.enableEmail) {
        this.props.updateSection('');
      } else {
        // until the rest of the notification settings are moved to preferences, we have to do this separately
        const {
          currentUserId,
          actions
        } = this.props;
        const emailIntervalPreference = {
          user_id: currentUserId,
          category: utils_constants__WEBPACK_IMPORTED_MODULE_6__["Preferences"].CATEGORY_NOTIFICATIONS,
          name: utils_constants__WEBPACK_IMPORTED_MODULE_6__["Preferences"].EMAIL_INTERVAL,
          value: newInterval.toString()
        };
        await actions.savePreferences(currentUserId, [emailIntervalPreference]);
        this.props.onSubmit();
      }
    });

    _defineProperty(this, "handleUpdateSection", section => {
      if (section) {
        this.props.updateSection(section);
      } else {
        this.props.updateSection('');
        this.setState({
          enableEmail: this.props.enableEmail,
          newInterval: this.props.emailInterval
        });
        this.props.onCancel();
      }
    });

    _defineProperty(this, "renderMinSettingView", () => {
      const {
        enableEmail,
        sendEmailNotifications
      } = this.props;
      const {
        newInterval
      } = this.state;
      let description;

      if (!sendEmailNotifications) {
        description = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.notifications.email.disabled",
          defaultMessage: "Email notifications are not enabled"
        });
      } else if (enableEmail) {
        switch (newInterval) {
          case utils_constants__WEBPACK_IMPORTED_MODULE_6__["Preferences"].INTERVAL_IMMEDIATE:
            description = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
              id: "user.settings.notifications.email.immediately",
              defaultMessage: "Immediately"
            });
            break;

          case utils_constants__WEBPACK_IMPORTED_MODULE_6__["Preferences"].INTERVAL_HOUR:
            description = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
              id: "user.settings.notifications.email.everyHour",
              defaultMessage: "Every hour"
            });
            break;

          case utils_constants__WEBPACK_IMPORTED_MODULE_6__["Preferences"].INTERVAL_FIFTEEN_MINUTES:
            description = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
              id: "user.settings.notifications.email.everyXMinutes",
              defaultMessage: "Every {count, plural, one {minute} other {{count, number} minutes}}",
              values: {
                count: newInterval / SECONDS_PER_MINUTE
              }
            });
            break;

          default:
            description = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
              id: "user.settings.notifications.email.never",
              defaultMessage: "Never"
            });
        }
      } else {
        description = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.notifications.email.never",
          defaultMessage: "Never"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["localizeMessage"])('user.settings.notifications.emailNotifications', 'Email Notifications'),
        describe: description,
        section: 'email',
        updateSection: this.handleUpdateSection
      });
    });

    _defineProperty(this, "renderMaxSettingView", () => {
      if (!this.props.sendEmailNotifications) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
          title: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["localizeMessage"])('user.settings.notifications.emailNotifications', 'Email Notifications'),
          inputs: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
            key: "oauthEmailInfo",
            className: "pt-2"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "user.settings.notifications.email.disabled_long",
            defaultMessage: "Email notifications have not been enabled by your System Administrator."
          }))],
          server_error: this.props.serverError,
          section: 'email',
          updateSection: this.handleUpdateSection
        });
      }

      const {
        newInterval
      } = this.state;
      let batchingOptions = null;
      let batchingInfo = null;

      if (this.props.enableEmailBatching) {
        batchingOptions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
          id: "emailNotificationMinutes",
          type: "radio",
          name: "emailNotifications",
          checked: newInterval === utils_constants__WEBPACK_IMPORTED_MODULE_6__["Preferences"].INTERVAL_FIFTEEN_MINUTES,
          "data-enable-email": 'true',
          "data-email-interval": utils_constants__WEBPACK_IMPORTED_MODULE_6__["Preferences"].INTERVAL_FIFTEEN_MINUTES,
          onChange: this.handleChange
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.notifications.email.everyXMinutes",
          defaultMessage: "Every {count} minutes",
          values: {
            count: utils_constants__WEBPACK_IMPORTED_MODULE_6__["Preferences"].INTERVAL_FIFTEEN_MINUTES / SECONDS_PER_MINUTE
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
          id: "emailNotificationHour",
          type: "radio",
          name: "emailNotifications",
          checked: newInterval === utils_constants__WEBPACK_IMPORTED_MODULE_6__["Preferences"].INTERVAL_HOUR,
          "data-enable-email": 'true',
          "data-email-interval": utils_constants__WEBPACK_IMPORTED_MODULE_6__["Preferences"].INTERVAL_HOUR,
          onChange: this.handleChange
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.notifications.email.everyHour",
          defaultMessage: "Every hour"
        }))));
        batchingInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.notifications.emailBatchingInfo",
          defaultMessage: "Notifications received over the time period selected are combined and sent in a single email."
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["localizeMessage"])('user.settings.notifications.emailNotifications', 'Email Notifications'),
        inputs: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("fieldset", {
          key: "userNotificationEmailOptions"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("legend", {
          className: "form-legend"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.notifications.email.send",
          defaultMessage: "Send email notifications"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
          id: "emailNotificationImmediately",
          type: "radio",
          name: "emailNotifications",
          checked: newInterval === utils_constants__WEBPACK_IMPORTED_MODULE_6__["Preferences"].INTERVAL_IMMEDIATE,
          "data-enable-email": 'true',
          "data-email-interval": utils_constants__WEBPACK_IMPORTED_MODULE_6__["Preferences"].INTERVAL_IMMEDIATE,
          onChange: this.handleChange
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.notifications.email.immediately",
          defaultMessage: "Immediately"
        }))), batchingOptions, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
          id: "emailNotificationNever",
          type: "radio",
          name: "emailNotifications",
          checked: newInterval === utils_constants__WEBPACK_IMPORTED_MODULE_6__["Preferences"].INTERVAL_NEVER,
          "data-enable-email": 'false',
          "data-email-interval": utils_constants__WEBPACK_IMPORTED_MODULE_6__["Preferences"].INTERVAL_NEVER,
          onChange: this.handleChange
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.notifications.email.never",
          defaultMessage: "Never"
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "mt-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.notifications.emailInfo",
          defaultMessage: "Email notifications are sent for mentions and direct messages when you are offline or away for more than 5 minutes."
        }), ' ', batchingInfo))],
        submit: this.handleSubmit,
        saving: this.props.saving,
        server_error: this.props.serverError,
        updateSection: this.handleUpdateSection
      });
    });

    const {
      emailInterval,
      enableEmail: _enableEmail,
      enableEmailBatching,
      sendEmailNotifications: _sendEmailNotifications,
      activeSection
    } = props;
    this.state = {
      activeSection,
      emailInterval,
      enableEmail: _enableEmail,
      enableEmailBatching,
      sendEmailNotifications: _sendEmailNotifications,
      newInterval: Object(mattermost_redux_utils_notify_props__WEBPACK_IMPORTED_MODULE_5__["getEmailInterval"])(JSON.parse(_enableEmail) && _sendEmailNotifications, enableEmailBatching, emailInterval)
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      emailInterval,
      enableEmail,
      enableEmailBatching,
      sendEmailNotifications,
      activeSection
    } = nextProps; // If we're re-opening this section, reset to defaults from props

    if (activeSection === 'email' && prevState.activeSection !== 'email') {
      return {
        activeSection,
        emailInterval,
        enableEmail,
        enableEmailBatching,
        sendEmailNotifications,
        newInterval: Object(mattermost_redux_utils_notify_props__WEBPACK_IMPORTED_MODULE_5__["getEmailInterval"])(JSON.parse(enableEmail) && sendEmailNotifications, enableEmailBatching, emailInterval)
      };
    }

    if (sendEmailNotifications !== prevState.sendEmailNotifications || enableEmailBatching !== prevState.enableEmailBatching || emailInterval !== prevState.emailInterval || activeSection !== prevState.activeSection) {
      return {
        activeSection,
        emailInterval,
        enableEmail,
        enableEmailBatching,
        sendEmailNotifications,
        newInterval: Object(mattermost_redux_utils_notify_props__WEBPACK_IMPORTED_MODULE_5__["getEmailInterval"])(JSON.parse(enableEmail) && sendEmailNotifications, enableEmailBatching, emailInterval)
      };
    }

    return null;
  }

  render() {
    if (this.props.activeSection !== 'email') {
      return this.renderMinSettingView();
    }

    return this.renderMaxSettingView();
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(EmailNotificationSetting, "propTypes", {
  currentUserId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  activeSection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  updateSection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  enableEmail: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  emailInterval: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  serverError: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  saving: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  sendEmailNotifications: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  enableEmailBatching: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    savePreferences: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SECONDS_PER_MINUTE, "SECONDS_PER_MINUTE", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/notifications/email_notification_setting/email_notification_setting.tsx");
  reactHotLoader.register(EmailNotificationSetting, "EmailNotificationSetting", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/notifications/email_notification_setting/email_notification_setting.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/notifications/email_notification_setting/index.ts":
/*!************************************************************************************!*\
  !*** ./components/user_settings/notifications/email_notification_setting/index.ts ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/actions/preferences */ "./node_modules/mattermost-redux/actions/preferences.js");
/* harmony import */ var mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_selectors_entities_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/selectors/entities/common */ "./node_modules/mattermost-redux/selectors/entities/common.js");
/* harmony import */ var mattermost_redux_selectors_entities_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mattermost-redux/selectors/entities/preferences */ "./node_modules/mattermost-redux/selectors/entities/preferences.js");
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _email_notification_setting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./email_notification_setting */ "./components/user_settings/notifications/email_notification_setting/email_notification_setting.tsx");


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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__["getConfig"])(state);
  const emailInterval = parseInt(Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_7__["get"])(state, mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Preferences"].CATEGORY_NOTIFICATIONS, mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Preferences"].EMAIL_INTERVAL, mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Preferences"].INTERVAL_NOT_SET.toString()), 10);
  return {
    currentUserId: Object(mattermost_redux_selectors_entities_common__WEBPACK_IMPORTED_MODULE_5__["getCurrentUserId"])(state),
    emailInterval,
    enableEmailBatching: config.EnableEmailBatching === 'true',
    sendEmailNotifications: config.SendEmailNotifications === 'true'
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
      savePreferences: mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_4__["savePreferences"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_email_notification_setting__WEBPACK_IMPORTED_MODULE_8__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/notifications/email_notification_setting/index.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/notifications/email_notification_setting/index.ts");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/notifications/email_notification_setting/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/notifications/index.js":
/*!*********************************************************!*\
  !*** ./components/user_settings/notifications/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_settings_notifications_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user_settings_notifications.jsx */ "./components/user_settings/notifications/user_settings_notifications.jsx");
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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3__["getConfig"])(state);
  const sendPushNotifications = config.SendPushNotifications === 'true';
  const enableAutoResponder = config.ExperimentalEnableAutomaticReplies === 'true';
  return {
    sendPushNotifications,
    enableAutoResponder
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      updateMe: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["updateMe"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_user_settings_notifications_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/notifications/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/notifications/index.js");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/notifications/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/notifications/manage_auto_responder.jsx":
/*!**************************************************************************!*\
  !*** ./components/user_settings/notifications/manage_auto_responder.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ManageAutoResponder; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_autosize_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/autosize_textarea */ "./components/autosize_textarea.tsx");
/* harmony import */ var components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/setting_item_max.jsx */ "./components/setting_item_max.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");


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






const MESSAGE_MAX_LENGTH = 200;
class ManageAutoResponder extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleAutoResponderChecked", e => {
      this.props.setParentState('autoResponderActive', e.target.checked);
    });

    _defineProperty(this, "onMessageChanged", e => {
      this.props.setParentState('autoResponderMessage', e.target.value);
    });
  }

  render() {
    const {
      autoResponderActive,
      autoResponderMessage
    } = this.props;
    let serverError;

    if (this.props.error) {
      serverError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "has-error"
      }, this.props.error);
    }

    const inputs = [];
    const activeToggle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "autoResponderCheckbox",
      key: "autoResponderCheckbox",
      className: "checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      id: "autoResponderActive",
      type: "checkbox",
      checked: autoResponderActive,
      onChange: this.handleAutoResponderChecked
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "user.settings.notifications.autoResponderEnabled",
      defaultMessage: "Enabled"
    })));
    const message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "autoResponderMessage",
      key: "autoResponderMessage"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "pt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_autosize_textarea__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        resize: 'none'
      },
      id: "autoResponderMessageInput",
      className: "form-control",
      rows: "5",
      placeholder: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__["localizeMessage"])('user.settings.notifications.autoResponderPlaceholder', 'Message'),
      value: autoResponderMessage,
      maxLength: MESSAGE_MAX_LENGTH,
      onChange: this.onMessageChanged
    }), serverError));
    inputs.push(activeToggle);

    if (autoResponderActive) {
      inputs.push(message);
    }

    inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: "autoResponderHint",
      className: "mt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "user.settings.notifications.autoResponderHint",
      defaultMessage: "Set a custom message that will be automatically sent in response to Direct Messages. Mentions in Public and Private Channels will not trigger the automated reply. Enabling Automatic Replies sets your status to Out of Office and disables email and push notifications."
    })));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "user.settings.notifications.autoResponder",
        defaultMessage: "Automatic Direct Message Replies"
      }),
      width: "medium",
      shiftEnter: true,
      submit: this.props.submit,
      saving: this.props.saving,
      inputs: inputs,
      updateSection: this.props.updateSection
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(ManageAutoResponder, "propTypes", {
  autoResponderActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  autoResponderMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  updateSection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setParentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  submit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  saving: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MESSAGE_MAX_LENGTH, "MESSAGE_MAX_LENGTH", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/notifications/manage_auto_responder.jsx");
  reactHotLoader.register(ManageAutoResponder, "ManageAutoResponder", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/notifications/manage_auto_responder.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/notifications/user_settings_notifications.jsx":
/*!********************************************************************************!*\
  !*** ./components/user_settings/notifications/user_settings_notifications.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotificationsTab; });
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semver */ "./node_modules/semver/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/setting_item_max.jsx */ "./components/setting_item_max.jsx");
/* harmony import */ var components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/setting_item_min */ "./components/setting_item_min/index.ts");
/* harmony import */ var utils_user_agent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/user_agent */ "./utils/user_agent.tsx");
/* harmony import */ var _desktop_notification_settings_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./desktop_notification_settings.jsx */ "./components/user_settings/notifications/desktop_notification_settings.jsx");
/* harmony import */ var _email_notification_setting__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./email_notification_setting */ "./components/user_settings/notifications/email_notification_setting/index.ts");
/* harmony import */ var _manage_auto_responder_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./manage_auto_responder.jsx */ "./components/user_settings/notifications/manage_auto_responder.jsx");




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













function getNotificationsStateFromProps(props) {
  const user = props.user;
  let desktop = utils_constants__WEBPACK_IMPORTED_MODULE_7__["NotificationLevels"].MENTION;
  let sound = 'true';
  let desktopNotificationSound = 'Bing';
  let comments = 'never';
  let enableEmail = 'true';
  let pushActivity = utils_constants__WEBPACK_IMPORTED_MODULE_7__["NotificationLevels"].MENTION;
  let pushStatus = utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].UserStatuses.AWAY;
  let autoResponderActive = false;
  let autoResponderMessage = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.notifications.autoResponderDefault', 'Hello, I am out of office and unable to respond to messages.');

  if (user.notify_props) {
    if (user.notify_props.desktop) {
      desktop = user.notify_props.desktop;
    }

    if (user.notify_props.desktop_sound) {
      sound = user.notify_props.desktop_sound;
    }

    if (user.notify_props.desktop_notification_sound) {
      desktopNotificationSound = user.notify_props.desktop_notification_sound;
    }

    if (user.notify_props.comments) {
      comments = user.notify_props.comments;
    }

    if (user.notify_props.email) {
      enableEmail = user.notify_props.email;
    }

    if (user.notify_props.push) {
      pushActivity = user.notify_props.push;
    }

    if (user.notify_props.push_status) {
      pushStatus = user.notify_props.push_status;
    }

    if (user.notify_props.auto_responder_active) {
      autoResponderActive = user.notify_props.auto_responder_active === 'true';
    }

    if (user.notify_props.auto_responder_message) {
      autoResponderMessage = user.notify_props.auto_responder_message;
    }
  }

  let usernameKey = false;
  let customKeys = '';
  let firstNameKey = false;
  let channelKey = false;

  if (user.notify_props) {
    if (user.notify_props.mention_keys) {
      const keys = user.notify_props.mention_keys.split(',');

      if (keys.indexOf(user.username) === -1) {
        usernameKey = false;
      } else {
        usernameKey = true;
        keys.splice(keys.indexOf(user.username), 1);

        if (keys.indexOf("@".concat(user.username)) !== -1) {
          keys.splice(keys.indexOf("@".concat(user.username)), 1);
        }
      }

      customKeys = keys.join(',');
    }

    if (user.notify_props.first_name) {
      firstNameKey = user.notify_props.first_name === 'true';
    }

    if (user.notify_props.channel) {
      channelKey = user.notify_props.channel === 'true';
    }
  }

  return {
    desktopActivity: desktop,
    enableEmail,
    pushActivity,
    pushStatus,
    desktopSound: sound,
    desktopNotificationSound,
    usernameKey,
    customKeys,
    customKeysChecked: customKeys.length > 0,
    firstNameKey,
    channelKey,
    autoResponderActive,
    autoResponderMessage,
    notifyCommentsLevel: comments,
    isSaving: false
  };
}

class NotificationsTab extends react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", () => {
      const data = {};
      data.email = this.state.enableEmail;
      data.desktop_sound = this.state.desktopSound;

      if (!Object(utils_user_agent__WEBPACK_IMPORTED_MODULE_11__["isDesktopApp"])() || window.desktop && semver__WEBPACK_IMPORTED_MODULE_6___default.a.gte(window.desktop.version, '4.6.0')) {
        data.desktop_notification_sound = this.state.desktopNotificationSound;
      }

      data.desktop = this.state.desktopActivity;
      data.push = this.state.pushActivity;
      data.push_status = this.state.pushStatus;
      data.comments = this.state.notifyCommentsLevel;
      data.auto_responder_active = this.state.autoResponderActive.toString();
      data.auto_responder_message = this.state.autoResponderMessage;

      if (!data.auto_responder_message || data.auto_responder_message === '') {
        data.auto_responder_message = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.notifications.autoResponderDefault', 'Hello, I am out of office and unable to respond to messages.');
      }

      const mentionKeys = [];

      if (this.state.usernameKey) {
        mentionKeys.push(this.props.user.username);
      }

      let stringKeys = mentionKeys.join(',');

      if (this.state.customKeys.length > 0 && this.state.customKeysChecked) {
        stringKeys += ',' + this.state.customKeys;
      }

      data.mention_keys = stringKeys;
      data.first_name = this.state.firstNameKey.toString();
      data.channel = this.state.channelKey.toString();
      this.setState({
        isSaving: true
      });
      this.props.actions.updateMe({
        notify_props: data
      }).then(({
        data: result,
        error: err
      }) => {
        if (result) {
          this.handleUpdateSection('');
          this.setState(getNotificationsStateFromProps(this.props));
        } else if (err) {
          this.setState({
            serverError: err.message,
            isSaving: false
          });
        }
      });
    });

    _defineProperty(this, "handleCancel", e => {
      if (e) {
        e.preventDefault();
      }

      this.setState(getNotificationsStateFromProps(this.props));
    });

    _defineProperty(this, "handleUpdateSection", section => {
      if (section) {
        this.props.updateSection(section);
      } else {
        this.props.updateSection('');
      }

      this.setState({
        isSaving: false
      });
      this.handleCancel();
    });

    _defineProperty(this, "setStateValue", (key, value) => {
      const data = {};
      data[key] = value;
      this.setState(data);
    });

    _defineProperty(this, "handleEmailRadio", enableEmail => {
      this.setState({
        enableEmail
      });
    });

    _defineProperty(this, "updateUsernameKey", val => {
      this.setState({
        usernameKey: val
      });
    });

    _defineProperty(this, "updateFirstNameKey", val => {
      this.setState({
        firstNameKey: val
      });
    });

    _defineProperty(this, "updateChannelKey", val => {
      this.setState({
        channelKey: val
      });
    });

    _defineProperty(this, "updateCustomMentionKeys", () => {
      const checked = this.customCheckRef.current.checked;

      if (checked) {
        const text = this.customMentionsRef.current.value; // remove all spaces and split string into individual keys

        this.setState({
          customKeys: text.replace(/ /g, ''),
          customKeysChecked: true
        });
      } else {
        this.setState({
          customKeys: '',
          customKeysChecked: false
        });
      }
    });

    _defineProperty(this, "onCustomChange", () => {
      this.customCheckRef.current.checked = true;
      this.updateCustomMentionKeys();
    });

    _defineProperty(this, "createPushNotificationSection", () => {
      if (this.props.activeSection === 'push') {
        const inputs = [];
        let extraInfo = null;
        let submit = null;

        if (this.props.sendPushNotifications) {
          const pushActivityRadio = [false, false, false];

          if (this.state.pushActivity === utils_constants__WEBPACK_IMPORTED_MODULE_7__["NotificationLevels"].ALL) {
            pushActivityRadio[0] = true;
          } else if (this.state.pushActivity === utils_constants__WEBPACK_IMPORTED_MODULE_7__["NotificationLevels"].NONE) {
            pushActivityRadio[2] = true;
          } else {
            pushActivityRadio[1] = true;
          }

          const pushStatusRadio = [false, false, false];

          if (this.state.pushStatus === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].UserStatuses.ONLINE) {
            pushStatusRadio[0] = true;
          } else if (this.state.pushStatus === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].UserStatuses.AWAY) {
            pushStatusRadio[1] = true;
          } else {
            pushStatusRadio[2] = true;
          }

          let pushStatusSettings;

          if (this.state.pushActivity !== utils_constants__WEBPACK_IMPORTED_MODULE_7__["NotificationLevels"].NONE) {
            pushStatusSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("legend", {
              className: "form-legend"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
              id: "user.settings.notifications.push_notification.status",
              defaultMessage: "Trigger push notifications when"
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              className: "radio"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
              id: "pushNotificationOnline",
              type: "radio",
              name: "pushNotificationStatus",
              checked: pushStatusRadio[0],
              onChange: this.handlePushStatusRadio.bind(this, utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].UserStatuses.ONLINE)
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
              id: "user.settings.push_notification.online",
              defaultMessage: "Online, away or offline"
            }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              className: "radio"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
              id: "pushNotificationAway",
              type: "radio",
              name: "pushNotificationStatus",
              checked: pushStatusRadio[1],
              onChange: this.handlePushStatusRadio.bind(this, utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].UserStatuses.AWAY)
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
              id: "user.settings.push_notification.away",
              defaultMessage: "Away or offline"
            }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              className: "radio"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
              id: "pushNotificationOffline",
              type: "radio",
              name: "pushNotificationStatus",
              checked: pushStatusRadio[2],
              onChange: this.handlePushStatusRadio.bind(this, utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].UserStatuses.OFFLINE)
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
              id: "user.settings.push_notification.offline",
              defaultMessage: "Offline"
            }))));
            extraInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
              id: "user.settings.push_notification.status_info",
              defaultMessage: "Notification alerts are only pushed to your mobile device when your online status matches the selection above."
            }));
          }

          inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("fieldset", {
            key: "userNotificationLevelOption"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("legend", {
            className: "form-legend"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.push_notification.send",
            defaultMessage: "Send mobile push notifications"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            id: "pushNotificationAllActivity",
            type: "radio",
            name: "pushNotificationLevel",
            checked: pushActivityRadio[0],
            onChange: this.handlePushRadio.bind(this, utils_constants__WEBPACK_IMPORTED_MODULE_7__["NotificationLevels"].ALL)
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.push_notification.allActivity",
            defaultMessage: "For all activity"
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            id: "pushNotificationMentions",
            type: "radio",
            name: "pushNotificationLevel",
            checked: pushActivityRadio[1],
            onChange: this.handlePushRadio.bind(this, utils_constants__WEBPACK_IMPORTED_MODULE_7__["NotificationLevels"].MENTION)
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.push_notification.onlyMentions",
            defaultMessage: "For mentions and direct messages"
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            id: "pushNotificationNever",
            type: "radio",
            name: "pushNotificationLevel",
            checked: pushActivityRadio[2],
            onChange: this.handlePushRadio.bind(this, utils_constants__WEBPACK_IMPORTED_MODULE_7__["NotificationLevels"].NONE)
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.notifications.never",
            defaultMessage: "Never"
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "mt-5"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.push_notification.info",
            defaultMessage: "Notification alerts are pushed to your mobile device when there is activity in Mattermost."
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", null), pushStatusSettings));
          submit = this.handleSubmit;
        } else {
          inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            key: "oauthEmailInfo",
            className: "pt-2"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.push_notification.disabled_long",
            defaultMessage: "Push notifications have not been enabled by your System Administrator."
          })));
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
          title: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.notifications.push', 'Mobile Push Notifications'),
          extraInfo: extraInfo,
          inputs: inputs,
          submit: submit,
          server_error: this.state.serverError,
          updateSection: this.handleUpdateSection
        });
      }

      let describe = '';

      if (this.state.pushActivity === utils_constants__WEBPACK_IMPORTED_MODULE_7__["NotificationLevels"].ALL) {
        if (this.state.pushStatus === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].UserStatuses.AWAY) {
          describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.push_notification.allActivityAway",
            defaultMessage: "For all activity when away or offline"
          });
        } else if (this.state.pushStatus === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].UserStatuses.OFFLINE) {
          describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.push_notification.allActivityOffline",
            defaultMessage: "For all activity when offline"
          });
        } else {
          describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.push_notification.allActivityOnline",
            defaultMessage: "For all activity when online, away or offline"
          });
        }
      } else if (this.state.pushActivity === utils_constants__WEBPACK_IMPORTED_MODULE_7__["NotificationLevels"].NONE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.notifications.never",
          defaultMessage: "Never"
        });
      } else if (this.props.sendPushNotifications) {
        if (this.state.pushStatus === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].UserStatuses.AWAY) {
          //eslint-disable-line no-lonely-if
          describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.push_notification.onlyMentionsAway",
            defaultMessage: "For mentions and direct messages when away or offline"
          });
        } else if (this.state.pushStatus === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].UserStatuses.OFFLINE) {
          describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.push_notification.onlyMentionsOffline",
            defaultMessage: "For mentions and direct messages when offline"
          });
        } else {
          describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.push_notification.onlyMentionsOnline",
            defaultMessage: "For mentions and direct messages when online, away or offline"
          });
        }
      } else {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.push_notification.disabled",
          defaultMessage: "Push notifications are not enabled"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.notifications.push', 'Mobile Push Notifications'),
        describe: describe,
        section: 'push',
        updateSection: this.handleUpdateSection
      });
    });

    this.state = getNotificationsStateFromProps(props);
    this.customCheckRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef();
    this.customMentionsRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef();
    this.drawerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef();
    this.wrapperRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef();
  }

  handleNotifyCommentsRadio(notifyCommentsLevel) {
    this.setState({
      notifyCommentsLevel
    });
  }

  handlePushRadio(pushActivity) {
    this.setState({
      pushActivity
    });
  }

  handlePushStatusRadio(pushStatus) {
    this.setState({
      pushStatus
    });
  }

  render() {
    const serverError = this.state.serverError;
    const user = this.props.user;
    let keysSection;

    if (this.props.activeSection === 'keys') {
      const inputs = [];

      if (user.first_name) {
        const handleUpdateFirstNameKey = e => {
          this.updateFirstNameKey(e.target.checked);
        };

        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          key: "userNotificationFirstNameOption"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "checkbox"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
          id: "notificationTriggerFirst",
          type: "checkbox",
          checked: this.state.firstNameKey,
          onChange: handleUpdateFirstNameKey
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.notifications.sensitiveName",
          defaultMessage: "Your case sensitive first name \"{first_name}\"",
          values: {
            first_name: user.first_name
          }
        })))));
      }

      const handleUpdateUsernameKey = e => {
        this.updateUsernameKey(e.target.checked);
      };

      inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        key: "userNotificationUsernameOption"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "checkbox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
        id: "notificationTriggerUsername",
        type: "checkbox",
        checked: this.state.usernameKey,
        onChange: handleUpdateUsernameKey
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.notifications.sensitiveUsername",
        defaultMessage: "Your non case-sensitive username \"{username}\"",
        values: {
          username: user.username
        }
      })))));

      const handleUpdateChannelKey = e => {
        this.updateChannelKey(e.target.checked);
      };

      inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        key: "userNotificationChannelOption"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "checkbox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
        id: "notificationTriggerShouts",
        type: "checkbox",
        checked: this.state.channelKey,
        onChange: handleUpdateChannelKey
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.notifications.channelWide",
        defaultMessage: "Channel-wide mentions \"@channel\", \"@all\", \"@here\""
      })))));
      inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        key: "userNotificationCustomOption"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "checkbox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
        id: "notificationTriggerCustom",
        ref: this.customCheckRef,
        type: "checkbox",
        checked: this.state.customKeysChecked,
        onChange: this.updateCustomMentionKeys
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.notifications.sensitiveWords",
        defaultMessage: "Other non-case sensitive words, separated by commas:"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
        id: "notificationTriggerCustomText",
        autoFocus: this.state.customKeysChecked,
        ref: this.customMentionsRef,
        className: "form-control mentions-input",
        type: "text",
        defaultValue: this.state.customKeys,
        onChange: this.onCustomChange,
        onFocus: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["moveCursorToEnd"],
        "aria-labelledby": "notificationTriggerCustom"
      })));
      const extraInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.notifications.mentionsInfo",
        defaultMessage: "Mentions trigger when someone sends a message that includes your username (@{username}) or any of the options selected above.",
        values: {
          username: user.username
        }
      }));
      keysSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.notifications.wordsTrigger', 'Words That Trigger Mentions'),
        inputs: inputs,
        submit: this.handleSubmit,
        saving: this.state.isSaving,
        server_error: serverError,
        updateSection: this.handleUpdateSection,
        extraInfo: extraInfo
      });
    } else {
      let keys = ['@' + user.username];

      if (this.state.firstNameKey) {
        keys.push(user.first_name);
      }

      if (this.state.usernameKey) {
        keys.push(user.username);
      }

      if (this.state.channelKey) {
        keys.push('@channel');
        keys.push('@all');
        keys.push('@here');
      }

      if (this.state.customKeys.length > 0) {
        keys = keys.concat(this.state.customKeys.split(','));
      }

      let describe = '';

      for (let i = 0; i < keys.length; i++) {
        if (keys[i] !== '') {
          describe += '"' + keys[i] + '", ';
        }
      }

      if (describe.length > 0) {
        describe = describe.substring(0, describe.length - 2);
      } else {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.notifications.noWords",
          defaultMessage: "No words configured"
        });
      }

      keysSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.notifications.wordsTrigger', 'Words That Trigger Mentions'),
        describe: describe,
        section: 'keys',
        updateSection: this.handleUpdateSection
      });
    }

    let commentsSection;

    if (this.props.activeSection === 'comments') {
      const commentsActive = [false, false, false];

      if (this.state.notifyCommentsLevel === 'never') {
        commentsActive[2] = true;
      } else if (this.state.notifyCommentsLevel === 'root') {
        commentsActive[1] = true;
      } else {
        commentsActive[0] = true;
      }

      const inputs = [];
      inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("fieldset", {
        key: "userNotificationLevelOption"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("legend", {
        className: "form-legend hidden-label"
      }, utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.notifications.comments', 'Reply notifications')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
        id: "notificationCommentsAny",
        type: "radio",
        name: "commentsNotificationLevel",
        checked: commentsActive[0],
        onChange: this.handleNotifyCommentsRadio.bind(this, 'any')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.notifications.commentsAny",
        defaultMessage: "Trigger notifications on messages in reply threads that I start or participate in"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
        id: "notificationCommentsRoot",
        type: "radio",
        name: "commentsNotificationLevel",
        checked: commentsActive[1],
        onChange: this.handleNotifyCommentsRadio.bind(this, 'root')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.notifications.commentsRoot",
        defaultMessage: "Trigger notifications on messages in threads that I start"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
        id: "notificationCommentsNever",
        type: "radio",
        name: "commentsNotificationLevel",
        checked: commentsActive[2],
        onChange: this.handleNotifyCommentsRadio.bind(this, 'never')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.notifications.commentsNever",
        defaultMessage: "Do not trigger notifications on messages in reply threads unless I'm mentioned"
      })))));
      const extraInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.notifications.commentsInfo",
        defaultMessage: "In addition to notifications for when you're mentioned, select if you would like to receive notifications on reply threads."
      }));
      commentsSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.notifications.comments', 'Reply notifications'),
        extraInfo: extraInfo,
        inputs: inputs,
        submit: this.handleSubmit,
        saving: this.state.isSaving,
        server_error: serverError,
        updateSection: this.handleUpdateSection
      });
    } else {
      let describe = '';

      if (this.state.notifyCommentsLevel === 'never') {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.notifications.commentsNever",
          defaultMessage: "Do not trigger notifications on messages in reply threads unless I'm mentioned"
        });
      } else if (this.state.notifyCommentsLevel === 'root') {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.notifications.commentsRoot",
          defaultMessage: "Trigger notifications on messages in threads that I start"
        });
      } else {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.notifications.commentsAny",
          defaultMessage: "Trigger notifications on messages in reply threads that I start or participate in"
        });
      }

      commentsSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.notifications.comments', 'Reply notifications'),
        describe: describe,
        section: 'comments',
        updateSection: this.handleUpdateSection
      });
    }

    let autoResponderSection;

    if (this.props.enableAutoResponder) {
      if (this.props.activeSection === 'auto-responder') {
        autoResponderSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_manage_auto_responder_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], {
          autoResponderActive: this.state.autoResponderActive,
          autoResponderMessage: this.state.autoResponderMessage,
          updateSection: this.handleUpdateSection,
          setParentState: this.setStateValue,
          submit: this.handleSubmit,
          error: this.state.serverError,
          saving: this.state.isSaving
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "divider-dark"
        }));
      } else {
        const describe = this.state.autoResponderActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.notifications.autoResponderEnabled",
          defaultMessage: "Enabled"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.notifications.autoResponderDisabled",
          defaultMessage: "Disabled"
        });
        autoResponderSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__["default"], {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.notifications.autoResponder",
            defaultMessage: "Automatic Direct Message Replies"
          }),
          width: "medium",
          describe: describe,
          section: 'auto-responder',
          updateSection: this.handleUpdateSection
        });
      }
    }

    const pushNotificationSection = this.createPushNotificationSection();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      id: "notificationSettings"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      id: "closeButton",
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      onClick: this.props.closeModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      "aria-hidden": "true"
    }, '×')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
      className: "modal-title",
      ref: this.drawerRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "modal-back"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "generic_icons.collapse",
      defaultMessage: "Collapse Icon"
    }, title => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-angle-left",
      title: title,
      onClick: this.props.collapseModal
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "user.settings.notifications.title",
      defaultMessage: "Notification Settings"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      ref: this.wrapperRef,
      className: "user-settings"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
      id: "notificationSettingsTitle",
      className: "tab-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "user.settings.notifications.header",
      defaultMessage: "Notifications"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "divider-dark first"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_desktop_notification_settings_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
      activity: this.state.desktopActivity,
      sound: this.state.desktopSound,
      updateSection: this.handleUpdateSection,
      setParentState: this.setStateValue,
      submit: this.handleSubmit,
      saving: this.state.isSaving,
      cancel: this.handleCancel,
      error: this.state.serverError,
      active: this.props.activeSection === 'desktop',
      selectedSound: this.state.desktopNotificationSound
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "divider-light"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_email_notification_setting__WEBPACK_IMPORTED_MODULE_13__["default"], {
      activeSection: this.props.activeSection,
      updateSection: this.handleUpdateSection,
      enableEmail: this.state.enableEmail === 'true',
      onSubmit: this.handleSubmit,
      onCancel: this.handleCancel,
      onChange: this.handleEmailRadio,
      saving: this.state.isSaving,
      serverError: this.state.serverError
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "divider-light"
    }), pushNotificationSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "divider-light"
    }), keysSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "divider-light"
    }), commentsSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "divider-light"
    }), autoResponderSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "divider-dark"
    })));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
/* eslint-enable react/no-string-refs */

_defineProperty(NotificationsTab, "propTypes", {
  user: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  updateSection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  activeSection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  closeModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  collapseModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  sendPushNotifications: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  enableAutoResponder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    updateMe: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
  }).isRequired
});

_defineProperty(NotificationsTab, "defaultProps", {
  user: null,
  activeSection: '',
  activeTab: ''
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getNotificationsStateFromProps, "getNotificationsStateFromProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/notifications/user_settings_notifications.jsx");
  reactHotLoader.register(NotificationsTab, "NotificationsTab", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/notifications/user_settings_notifications.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/security/index.ts":
/*!****************************************************!*\
  !*** ./components/user_settings/security/index.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/actions/integrations */ "./node_modules/mattermost-redux/actions/integrations.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_utils_user_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/utils/user_utils */ "./node_modules/mattermost-redux/utils/user_utils.js");
/* harmony import */ var mattermost_redux_utils_user_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_utils_user_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/selectors/entities/preferences */ "./node_modules/mattermost-redux/selectors/entities/preferences.js");
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var _user_settings_security__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user_settings_security */ "./components/user_settings/security/user_settings_security.tsx");
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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__["getConfig"])(state);
  const tokensEnabled = config.EnableUserAccessTokens === 'true';
  const userHasTokenRole = mattermost_redux_utils_user_utils__WEBPACK_IMPORTED_MODULE_4__["hasUserAccessTokenRole"](ownProps.user.roles) || mattermost_redux_utils_user_utils__WEBPACK_IMPORTED_MODULE_4__["isSystemAdmin"](ownProps.user.roles);
  const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';
  const enableSignUpWithEmail = config.EnableSignUpWithEmail === 'true';
  const enableSignUpWithGitLab = config.EnableSignUpWithGitLab === 'true';
  const enableSignUpWithGoogle = config.EnableSignUpWithGoogle === 'true';
  const enableSignUpWithOpenId = config.EnableSignUpWithOpenId === 'true';
  const enableLdap = config.EnableLdap === 'true';
  const enableSaml = config.EnableSaml === 'true';
  const enableSignUpWithOffice365 = config.EnableSignUpWithOffice365 === 'true';
  const experimentalEnableAuthenticationTransfer = config.ExperimentalEnableAuthenticationTransfer === 'true';
  return {
    canUseAccessTokens: tokensEnabled && userHasTokenRole,
    enableOAuthServiceProvider,
    enableSignUpWithEmail,
    enableSignUpWithGitLab,
    enableSignUpWithGoogle,
    enableSignUpWithOpenId,
    enableLdap,
    enableSaml,
    enableSignUpWithOffice365,
    experimentalEnableAuthenticationTransfer,
    passwordConfig: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["getPasswordConfig"])(config),
    militaryTime: Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_6__["getBool"])(state, utils_constants__WEBPACK_IMPORTED_MODULE_8__["Preferences"].CATEGORY_DISPLAY_SETTINGS, utils_constants__WEBPACK_IMPORTED_MODULE_8__["Preferences"].USE_MILITARY_TIME, false)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      getMe: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["getMe"],
      updateUserPassword: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["updateUserPassword"],
      getAuthorizedOAuthApps: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_3__["getAuthorizedOAuthApps"],
      deauthorizeOAuthApp: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_3__["deauthorizeOAuthApp"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_user_settings_security__WEBPACK_IMPORTED_MODULE_9__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/index.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/index.ts");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/security/mfa_section/index.ts":
/*!****************************************************************!*\
  !*** ./components/user_settings/security/mfa_section/index.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_views_mfa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions/views/mfa */ "./actions/views/mfa.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var _mfa_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mfa_section */ "./components/user_settings/security/mfa_section/mfa_section.tsx");
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
  const license = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__["getLicense"])(state);
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__["getConfig"])(state);
  const mfaLicensed = license && license.IsLicensed === 'true' && license.MFA === 'true';
  const mfaEnabled = config.EnableMultifactorAuthentication === 'true';
  const mfaEnforced = mfaLicensed && config.EnforceMultifactorAuthentication === 'true';
  const user = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__["getCurrentUser"])(state);
  let mfaActive = false;
  let mfaAvailable = false;

  if (user) {
    mfaActive = user.mfa_active;
    mfaAvailable = mfaEnabled && (user.auth_service === '' || user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_5__["default"].LDAP_SERVICE);
  }

  return {
    mfaActive,
    mfaAvailable,
    mfaEnforced
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      deactivateMfa: actions_views_mfa__WEBPACK_IMPORTED_MODULE_4__["deactivateMfa"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_mfa_section__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/mfa_section/index.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/mfa_section/index.ts");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/mfa_section/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/security/mfa_section/mfa_section.tsx":
/*!***********************************************************************!*\
  !*** ./components/user_settings/security/mfa_section/mfa_section.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MfaSection; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_setting_item_max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/setting_item_max */ "./components/setting_item_max.jsx");
/* harmony import */ var components_setting_item_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/setting_item_min */ "./components/setting_item_min/index.ts");
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");



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





const SECTION_MFA = 'mfa';
class MfaSection extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "setupMfa", e => {
      e.preventDefault();
      utils_browser_history__WEBPACK_IMPORTED_MODULE_6__["browserHistory"].push('/mfa/setup');
    });

    _defineProperty(this, "removeMfa", async e => {
      e.preventDefault();
      const {
        error
      } = await this.props.actions.deactivateMfa();

      if (error) {
        this.setState({
          serverError: error.message
        });
        return;
      }

      if (this.props.mfaEnforced) {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_6__["browserHistory"].push('/mfa/setup');
        return;
      }

      this.props.updateSection('');
      this.setState({
        serverError: null
      });
    });

    _defineProperty(this, "renderTitle", () => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "user.settings.mfa.title",
        defaultMessage: "Multi-factor Authentication"
      });
    });

    _defineProperty(this, "renderDescription", () => {
      if (this.props.mfaActive) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.security.active",
          defaultMessage: "Active"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "user.settings.security.inactive",
        defaultMessage: "Inactive"
      });
    });

    _defineProperty(this, "renderContent", () => {
      let content;

      if (this.props.mfaActive) {
        let buttonText;

        if (this.props.mfaEnforced) {
          buttonText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.mfa.reset",
            defaultMessage: "Reset MFA on Account"
          });
        } else {
          buttonText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.mfa.remove",
            defaultMessage: "Remove MFA from Account"
          });
        }

        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          className: "btn btn-primary",
          href: "#",
          onClick: this.removeMfa
        }, buttonText);
      } else {
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          className: "btn btn-primary",
          href: "#",
          onClick: this.setupMfa
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.mfa.add",
          defaultMessage: "Add MFA to Account"
        }));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "pt-2"
      }, content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null));
    });

    _defineProperty(this, "renderHelpText", () => {
      if (this.props.mfaActive) {
        if (this.props.mfaEnforced) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.mfa.requiredHelp",
            defaultMessage: "Multi-factor authentication is required on this server. Resetting is only recommended when you need to switch code generation to a new mobile device. You will be required to set it up again immediately."
          });
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.mfa.removeHelp",
          defaultMessage: "Removing multi-factor authentication means you will no longer require a phone-based passcode to sign-in to your account."
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "user.settings.mfa.addHelp",
        defaultMessage: "Adding multi-factor authentication will make your account more secure by requiring a code from your mobile phone each time you sign in."
      });
    });

    this.state = {
      serverError: null
    };
  }

  render() {
    const title = this.renderTitle();

    if (!this.props.mfaAvailable) {
      return null;
    }

    if (!this.props.active) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: title,
        describe: this.renderDescription(),
        section: SECTION_MFA,
        updateSection: this.props.updateSection
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_setting_item_max__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: title,
      inputs: this.renderContent(),
      extraInfo: this.renderHelpText(),
      serverError: this.state.serverError,
      updateSection: this.props.updateSection,
      width: "medium"
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(MfaSection, "propTypes", {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  mfaActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  mfaAvailable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  mfaEnforced: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  updateSection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    deactivateMfa: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SECTION_MFA, "SECTION_MFA", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/mfa_section/mfa_section.tsx");
  reactHotLoader.register(MfaSection, "MfaSection", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/mfa_section/mfa_section.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/security/user_access_token_section/index.ts":
/*!******************************************************************************!*\
  !*** ./components/user_settings/security/user_access_token_section/index.ts ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_access_token_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user_access_token_section */ "./components/user_settings/security/user_access_token_section/user_access_token_section.tsx");
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
  return {
    userAccessTokens: state.entities.users.myUserAccessTokens
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      getUserAccessTokensForUser: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["getUserAccessTokensForUser"],
      createUserAccessToken: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["createUserAccessToken"],
      revokeUserAccessToken: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["revokeUserAccessToken"],
      enableUserAccessToken: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["enableUserAccessToken"],
      disableUserAccessToken: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["disableUserAccessToken"],
      clearUserAccessTokens: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["clearUserAccessTokens"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_user_access_token_section__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/user_access_token_section/index.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/user_access_token_section/index.ts");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/user_access_token_section/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/security/user_access_token_section/user_access_token_section.tsx":
/*!***************************************************************************************************!*\
  !*** ./components/user_settings/security/user_access_token_section/user_access_token_section.tsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserAccessTokenSection; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var mattermost_redux_utils_user_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/utils/user_utils */ "./node_modules/mattermost-redux/utils/user_utils.js");
/* harmony import */ var mattermost_redux_utils_user_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_utils_user_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! actions/telemetry_actions.jsx */ "./actions/telemetry_actions.jsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_user_agent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/user_agent */ "./utils/user_agent.tsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var components_confirm_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/confirm_modal */ "./components/confirm_modal.tsx");
/* harmony import */ var components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/setting_item_max.jsx */ "./components/setting_item_max.jsx");
/* harmony import */ var components_setting_item_min__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/setting_item_min */ "./components/setting_item_min/index.ts");
/* harmony import */ var components_save_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/save_button */ "./components/save_button.tsx");
/* harmony import */ var components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/formatted_markdown_message.jsx */ "./components/formatted_markdown_message.jsx");
/* harmony import */ var components_widgets_icons_fa_warning_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/widgets/icons/fa_warning_icon */ "./components/widgets/icons/fa_warning_icon.tsx");




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













const SECTION_TOKENS = 'tokens';
const TOKEN_CREATING = 'creating';
const TOKEN_CREATED = 'created';
const TOKEN_NOT_CREATING = 'not_creating';
class UserAccessTokenSection extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "newtokendescriptionRef", void 0);

    _defineProperty(this, "startCreatingToken", () => {
      this.setState({
        tokenCreationState: TOKEN_CREATING
      });
    });

    _defineProperty(this, "stopCreatingToken", () => {
      this.setState({
        tokenCreationState: TOKEN_NOT_CREATING,
        saving: false
      });
    });

    _defineProperty(this, "handleCreateToken", async () => {
      this.handleCancelConfirm();
      const description = this.newtokendescriptionRef ? this.newtokendescriptionRef.current.value : '';

      if (description === '') {
        this.setState({
          tokenError: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["localizeMessage"]('user.settings.tokens.nameRequired', 'Please enter a description.')
        });
        return;
      }

      this.setState({
        tokenError: '',
        saving: true
      });
      this.props.setRequireConfirm(true, this.confirmCopyToken);
      const userId = this.props.user ? this.props.user.id : '';
      const {
        data,
        error
      } = await this.props.actions.createUserAccessToken(userId, description);

      if (data && this.state.tokenCreationState === TOKEN_CREATING) {
        this.setState({
          tokenCreationState: TOKEN_CREATED,
          newToken: data,
          saving: false
        });
      } else if (error) {
        this.setState({
          serverError: error.message,
          saving: false
        });
      }
    });

    _defineProperty(this, "confirmCopyToken", confirmAction => {
      this.setState({
        showConfirmModal: true,
        confirmTitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.tokens.confirmCopyTitle",
          defaultMessage: "Copied Your Token?"
        }),
        confirmMessage: state => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.tokens.confirmCopyMessage",
          defaultMessage: "Make sure you have copied and saved the access token below. You won't be able to see it again!"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), state.tokenCreationState === TOKEN_CREATING ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
          className: "word-break--all"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.tokens.token",
          defaultMessage: "Access Token: "
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.tokens.tokenLoading",
          defaultMessage: "Loading..."
        })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
          className: "word-break--all"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.tokens.token",
          defaultMessage: "Access Token: "
        }), state.newToken.token)),
        confirmButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.tokens.confirmCopyButton",
          defaultMessage: "Yes, I have copied the token"
        }),
        confirmComplete: () => {
          this.handleCancelConfirm();
          confirmAction();
        },
        confirmHideCancel: true
      });
    });

    _defineProperty(this, "handleCancelConfirm", () => {
      this.setState({
        showConfirmModal: false,
        confirmTitle: null,
        confirmMessage: null,
        confirmButton: null,
        confirmComplete: null,
        confirmHideCancel: false
      });
    });

    _defineProperty(this, "confirmCreateToken", () => {
      if (!mattermost_redux_utils_user_utils__WEBPACK_IMPORTED_MODULE_5__["isSystemAdmin"](this.props.user.roles)) {
        this.handleCreateToken();
        return;
      }

      this.setState({
        showConfirmModal: true,
        confirmTitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.tokens.confirmCreateTitle",
          defaultMessage: "Create System Admin Personal Access Token"
        }),
        confirmMessage: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "alert alert-danger"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.tokens.confirmCreateMessage",
          defaultMessage: "You are generating a personal access token with System Admin permissions. Are you sure want to create this token?"
        })),
        confirmButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.tokens.confirmCreateButton",
          defaultMessage: "Yes, Create"
        }),
        confirmComplete: () => {
          this.handleCreateToken();
          Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_6__["trackEvent"])('settings', 'system_admin_create_user_access_token');
        }
      });
    });

    _defineProperty(this, "saveTokenKeyPress", e => {
      if (utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["isKeyPressed"](e, utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].KeyCodes.ENTER)) {
        this.confirmCreateToken();
      }
    });

    _defineProperty(this, "confirmRevokeToken", tokenId => {
      const token = this.props.userAccessTokens[tokenId];
      this.setState({
        showConfirmModal: true,
        confirmTitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.tokens.confirmDeleteTitle",
          defaultMessage: "Delete Token?"
        }),
        confirmMessage: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "alert alert-danger"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], {
          id: "user.settings.tokens.confirmDeleteMessage",
          defaultMessage: "Any integrations using this token will no longer be able to access the Mattermost API. You cannot undo this action. \\n \\nAre you sure want to delete the **{description}** token?",
          values: {
            description: token.description
          }
        })),
        confirmButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.tokens.confirmDeleteButton",
          defaultMessage: "Yes, Delete"
        }),
        confirmComplete: () => {
          this.revokeToken(tokenId);
          Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_6__["trackEvent"])('settings', 'revoke_user_access_token');
        }
      });
    });

    _defineProperty(this, "revokeToken", async tokenId => {
      const {
        error
      } = await this.props.actions.revokeUserAccessToken(tokenId);

      if (error) {
        this.setState({
          serverError: error.message
        });
      }

      this.handleCancelConfirm();
    });

    _defineProperty(this, "activateToken", async tokenId => {
      const {
        error
      } = await this.props.actions.enableUserAccessToken(tokenId);

      if (error) {
        this.setState({
          serverError: error.message
        });
      } else {
        Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_6__["trackEvent"])('settings', 'activate_user_access_token');
      }
    });

    _defineProperty(this, "deactivateToken", async tokenId => {
      const {
        error
      } = await this.props.actions.disableUserAccessToken(tokenId);

      if (error) {
        this.setState({
          serverError: error.message
        });
      } else {
        Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_6__["trackEvent"])('settings', 'deactivate_user_access_token');
      }
    });

    this.state = {
      active: this.props.active,
      showConfirmModal: false,
      newToken: null,
      tokenCreationState: TOKEN_NOT_CREATING,
      tokenError: '',
      serverError: null,
      saving: false
    };
    this.newtokendescriptionRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
  }

  componentDidMount() {
    this.props.actions.clearUserAccessTokens();
    const userId = this.props.user ? this.props.user.id : '';
    this.props.actions.getUserAccessTokensForUser(userId, 0, 200);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.active && prevState.active) {
      return {
        active: nextProps.active,
        showConfirmModal: false,
        newToken: null,
        tokenCreationState: TOKEN_NOT_CREATING,
        tokenError: '',
        serverError: null,
        saving: false
      };
    }

    return {
      active: nextProps.active
    };
  }

  render() {
    let tokenListClass = '';

    if (!this.props.active) {
      const describe = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["localizeMessage"]('user.settings.tokens.clickToEdit', "Click 'Edit' to manage your personal access tokens");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["localizeMessage"]('user.settings.tokens.title', 'Personal Access Tokens'),
        describe: describe,
        section: SECTION_TOKENS,
        updateSection: this.props.updateSection
      });
    }

    const tokenList = [];
    Object.values(this.props.userAccessTokens).forEach(token => {
      if (this.state.newToken && this.state.newToken.id === token.id) {
        return;
      }

      let activeLink;
      let activeStatus;

      if (token.is_active) {
        activeLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
          id: token.id + '_deactivate',
          href: "#",
          onClick: e => {
            e.preventDefault();
            this.deactivateToken(token.id);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.tokens.deactivate",
          defaultMessage: "Disable"
        }));
      } else {
        activeStatus = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
          className: "has-error setting-box__inline-error"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.tokens.deactivatedWarning",
          defaultMessage: "(Disabled)"
        }));
        activeLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
          id: token.id + '_activate',
          href: "#",
          onClick: e => {
            e.preventDefault();
            this.activateToken(token.id);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.tokens.activate",
          defaultMessage: "Enable"
        }));
      }

      tokenList.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        key: token.id,
        className: "setting-box__item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.tokens.tokenDesc",
        defaultMessage: "Token Description: "
      }), token.description, activeStatus), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "setting-box__token-id whitespace--nowrap overflow--ellipsis"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.tokens.tokenId",
        defaultMessage: "Token ID: "
      }), token.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, activeLink, ' - ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        id: token.id + '_delete',
        href: "#",
        onClick: e => {
          e.preventDefault();
          this.confirmRevokeToken(token.id);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.tokens.delete",
        defaultMessage: "Delete"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
        className: "mb-3 mt-3"
      })));
    });
    let noTokenText;

    if (tokenList.length === 0) {
      noTokenText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        key: "notokens",
        id: "user.settings.tokens.userAccessTokensNone",
        defaultMessage: "No personal access tokens."
      });
    }

    let extraInfo;

    if (Object(utils_user_agent__WEBPACK_IMPORTED_MODULE_8__["isMobile"])()) {
      extraInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: "user.settings.tokens.description_mobile",
        defaultMessage: "[Personal access tokens](!https://about.mattermost.com/default-user-access-tokens) function similarly to session tokens and can be used by integrations to [authenticate against the REST API](!https://about.mattermost.com/default-api-authentication). Create new tokens on your desktop."
      }));
    } else {
      extraInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: "user.settings.tokens.description",
        defaultMessage: "[Personal access tokens](!https://about.mattermost.com/default-user-access-tokens) function similarly to session tokens and can be used by integrations to [authenticate against the REST API](!https://about.mattermost.com/default-api-authentication)."
      }));
    }

    let newTokenSection;

    if (this.state.tokenCreationState === TOKEN_CREATING) {
      newTokenSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "pl-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
        className: "col-sm-auto control-label pr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.tokens.name",
        defaultMessage: "Token Description: "
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "col-sm-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
        autoFocus: true,
        ref: this.newtokendescriptionRef,
        className: "form-control",
        type: "text",
        maxLength: 64,
        onKeyPress: this.saveTokenKeyPress
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "pt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.tokens.nameHelp",
        defaultMessage: "Enter a description for your token to remember what it does."
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
        id: "clientError",
        className: "has-error mt-2 mb-2"
      }, this.state.tokenError)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_save_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
        btnClass: "btn-primary",
        savingMessage: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "user.settings.tokens.save",
          defaultMessage: "Save"
        }),
        saving: this.state.saving,
        onClick: this.confirmCreateToken
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        className: "btn btn-link",
        onClick: this.stopCreatingToken
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.tokens.cancel",
        defaultMessage: "Cancel"
      }))));
    } else if (this.state.tokenCreationState === TOKEN_CREATED) {
      if (tokenList.length === 0) {
        tokenListClass = ' hidden';
      }

      newTokenSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "alert alert-warning"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_widgets_icons_fa_warning_icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
        additionalClassName: "mr-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.tokens.copy",
        defaultMessage: "Please copy the access token below. You won't be able to see it again!"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.tokens.name",
        defaultMessage: "Token Description: "
      }), this.state.newToken.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.tokens.id",
        defaultMessage: "Token ID: "
      }), this.state.newToken.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
        className: "word-break--all"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.tokens.token",
        defaultMessage: "Access Token: "
      }), this.state.newToken.token));
    } else {
      newTokenSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        className: "btn btn-primary",
        href: "#",
        onClick: this.startCreatingToken
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.tokens.create",
        defaultMessage: "Create Token"
      }));
    }

    const inputs = [];
    inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: "tokensSetting",
      className: "pt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: "tokenList"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: 'alert alert-transparent' + tokenListClass
    }, tokenList, noTokenText), newTokenSection)));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["localizeMessage"]('user.settings.tokens.title', 'Personal Access Tokens'),
      inputs: inputs,
      extraInfo: extraInfo,
      infoPosition: "top",
      serverError: this.state.serverError,
      updateSection: this.props.updateSection,
      width: "full",
      saving: this.state.saving,
      cancelButtonText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "user.settings.security.close",
        defaultMessage: "Close"
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_confirm_modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: this.state.confirmTitle,
      message: this.state.confirmMessage ? this.state.confirmMessage(this.state) : null,
      confirmButtonText: this.state.confirmButton,
      show: this.state.showConfirmModal,
      onConfirm: this.state.confirmComplete || (() => null),
      onCancel: this.handleCancelConfirm,
      hideCancel: this.state.confirmHideCancel
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
/* eslint-enable react/no-string-refs */

_defineProperty(UserAccessTokenSection, "propTypes", {
  user: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,
  active: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  updateSection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  userAccessTokens: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    is_active: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
  })).isRequired,
  setRequireConfirm: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    getUserAccessTokensForUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    createUserAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    revokeUserAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    enableUserAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    disableUserAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    clearUserAccessTokens: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SECTION_TOKENS, "SECTION_TOKENS", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/user_access_token_section/user_access_token_section.tsx");
  reactHotLoader.register(TOKEN_CREATING, "TOKEN_CREATING", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/user_access_token_section/user_access_token_section.tsx");
  reactHotLoader.register(TOKEN_CREATED, "TOKEN_CREATED", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/user_access_token_section/user_access_token_section.tsx");
  reactHotLoader.register(TOKEN_NOT_CREATING, "TOKEN_NOT_CREATING", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/user_access_token_section/user_access_token_section.tsx");
  reactHotLoader.register(UserAccessTokenSection, "UserAccessTokenSection", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/user_access_token_section/user_access_token_section.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/security/user_settings_security.tsx":
/*!**********************************************************************!*\
  !*** ./components/user_settings/security/user_settings_security.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecurityTab; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var images_icon50x50_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! images/icon50x50.png */ "./images/icon50x50.png");
/* harmony import */ var components_access_history_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/access_history_modal */ "./components/access_history_modal/index.ts");
/* harmony import */ var components_activity_log_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/activity_log_modal */ "./components/activity_log_modal/index.js");
/* harmony import */ var components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/setting_item_max.jsx */ "./components/setting_item_max.jsx");
/* harmony import */ var components_setting_item_min__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/setting_item_min */ "./components/setting_item_min/index.ts");
/* harmony import */ var components_toggle_modal_button_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/toggle_modal_button.jsx */ "./components/toggle_modal_button.jsx");
/* harmony import */ var _mfa_section__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mfa_section */ "./components/user_settings/security/mfa_section/index.ts");
/* harmony import */ var _user_access_token_section__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user_access_token_section */ "./components/user_settings/security/user_access_token_section/index.ts");





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

/* eslint-disable react/no-string-refs */













const SECTION_MFA = 'mfa';
const SECTION_PASSWORD = 'password';
const SECTION_SIGNIN = 'signin';
const SECTION_APPS = 'apps';
const SECTION_TOKENS = 'tokens';
class SecurityTab extends react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "loadAuthorizedOAuthApps", async () => {
      const res = await this.props.actions.getAuthorizedOAuthApps();

      if ('data' in res) {
        const {
          data
        } = res;
        this.setState({
          authorizedApps: data,
          serverError: null
        }); //eslint-disable-line react/no-did-mount-set-state
      } else if ('error' in res) {
        const {
          error
        } = res;
        this.setState({
          serverError: error.message
        }); //eslint-disable-line react/no-did-mount-set-state
      }
    });

    _defineProperty(this, "submitPassword", async () => {
      const user = this.props.user;
      const currentPassword = this.state.currentPassword;
      const newPassword = this.state.newPassword;
      const confirmPassword = this.state.confirmPassword;

      if (currentPassword === '') {
        this.setState({
          passwordError: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.security.currentPasswordError', 'Please enter your current password.'),
          serverError: ''
        });
        return;
      }

      const {
        valid,
        error
      } = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["isValidPassword"](newPassword, this.props.passwordConfig);

      if (!valid && error) {
        this.setState({
          passwordError: error,
          serverError: ''
        });
        return;
      }

      if (newPassword !== confirmPassword) {
        const defaultState = Object.assign(this.getDefaultState(), {
          passwordError: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.security.passwordMatchError', 'The new passwords you entered do not match.'),
          serverError: ''
        });
        this.setState(defaultState);
        return;
      }

      this.setState({
        savingPassword: true
      });
      const res = await this.props.actions.updateUserPassword(user.id, currentPassword, newPassword);

      if ('data' in res) {
        this.props.updateSection('');
        this.props.actions.getMe();
        this.setState(this.getDefaultState());
      } else if ('error' in res) {
        const {
          error: err
        } = res;
        const state = this.getDefaultState();

        if (err.message) {
          state.serverError = err.message;
        } else {
          state.serverError = err;
        }

        state.passwordError = '';
        this.setState(state);
      }
    });

    _defineProperty(this, "updateCurrentPassword", e => {
      this.setState({
        currentPassword: e.target.value
      });
    });

    _defineProperty(this, "updateNewPassword", e => {
      this.setState({
        newPassword: e.target.value
      });
    });

    _defineProperty(this, "updateConfirmPassword", e => {
      this.setState({
        confirmPassword: e.target.value
      });
    });

    _defineProperty(this, "deauthorizeApp", async e => {
      e.preventDefault();
      const appId = e.currentTarget.getAttribute('data-app');
      const res = await this.props.actions.deauthorizeOAuthApp(appId);

      if ('data' in res) {
        const authorizedApps = this.state.authorizedApps.filter(app => {
          return app.id !== appId;
        });
        this.setState({
          authorizedApps,
          serverError: null
        });
      } else if ('error' in res) {
        const {
          error
        } = res;
        this.setState({
          serverError: error.message
        });
      }
    });

    _defineProperty(this, "handleUpdateSection", section => {
      if (section) {
        this.props.updateSection(section);
      } else {
        switch (this.props.activeSection) {
          case SECTION_MFA:
          case SECTION_SIGNIN:
          case SECTION_TOKENS:
          case SECTION_APPS:
            this.setState({
              serverError: null
            });
            break;

          case SECTION_PASSWORD:
            this.setState({
              currentPassword: '',
              newPassword: '',
              confirmPassword: '',
              serverError: null,
              passwordError: null
            });
            break;

          default:
        }

        this.props.updateSection('');
      }
    });

    _defineProperty(this, "createPasswordSection", () => {
      if (this.props.activeSection === SECTION_PASSWORD) {
        const inputs = [];
        let submit;

        if (this.props.user.auth_service === '') {
          submit = this.submitPassword;
          inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            key: "currentPasswordUpdateForm",
            className: "form-group"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            className: "col-sm-5 control-label"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.security.currentPassword",
            defaultMessage: "Current Password"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "col-sm-7"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            id: "currentPassword",
            autoFocus: true,
            className: "form-control",
            type: "password",
            onChange: this.updateCurrentPassword,
            value: this.state.currentPassword,
            "aria-label": utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.security.currentPassword', 'Current Password')
          }))));
          inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            key: "newPasswordUpdateForm",
            className: "form-group"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            className: "col-sm-5 control-label"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.security.newPassword",
            defaultMessage: "New Password"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "col-sm-7"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            id: "newPassword",
            className: "form-control",
            type: "password",
            onChange: this.updateNewPassword,
            value: this.state.newPassword,
            "aria-label": utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.security.newPassword', 'New Password')
          }))));
          inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            key: "retypeNewPasswordUpdateForm",
            className: "form-group"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            className: "col-sm-5 control-label"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.security.retypePassword",
            defaultMessage: "Retype New Password"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "col-sm-7"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            id: "confirmPassword",
            className: "form-control",
            type: "password",
            onChange: this.updateConfirmPassword,
            value: this.state.confirmPassword,
            "aria-label": utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.security.retypePassword', 'Retype New Password')
          }))));
        } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].GITLAB_SERVICE) {
          inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            key: "oauthEmailInfo",
            className: "form-group"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "pb-3"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.security.passwordGitlabCantUpdate",
            defaultMessage: "Login occurs through GitLab. Password cannot be updated."
          }))));
        } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].LDAP_SERVICE) {
          inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            key: "oauthEmailInfo",
            className: "form-group"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "pb-3"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.security.passwordLdapCantUpdate",
            defaultMessage: "Login occurs through AD/LDAP. Password cannot be updated."
          }))));
        } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].SAML_SERVICE) {
          inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            key: "oauthEmailInfo",
            className: "form-group"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "pb-3"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.security.passwordSamlCantUpdate",
            defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so through your login provider."
          }))));
        } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].GOOGLE_SERVICE) {
          inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            key: "oauthEmailInfo",
            className: "form-group"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "pb-3"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.security.passwordGoogleCantUpdate",
            defaultMessage: "Login occurs through Google Apps. Password cannot be updated."
          }))));
        } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].OFFICE365_SERVICE) {
          inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            key: "oauthEmailInfo",
            className: "form-group"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "pb-3"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.security.passwordOffice365CantUpdate",
            defaultMessage: "Login occurs through Office 365. Password cannot be updated."
          }))));
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.security.password",
            defaultMessage: "Password"
          }),
          inputs: inputs,
          submit: submit,
          saving: this.state.savingPassword,
          serverError: this.state.serverError,
          clientError: this.state.passwordError,
          updateSection: this.handleUpdateSection
        });
      }

      let describe;

      if (this.props.user.auth_service === '') {
        const d = new Date(this.props.user.last_password_update);
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.security.lastUpdated",
          defaultMessage: "Last updated {date} at {time}",
          values: {
            date: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedDate"], {
              value: d,
              day: "2-digit",
              month: "short",
              year: "numeric"
            }),
            time: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedTime"], {
              value: d,
              hour12: !this.props.militaryTime,
              hour: "2-digit",
              minute: "2-digit"
            })
          }
        });
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].GITLAB_SERVICE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.security.loginGitlab",
          defaultMessage: "Login done through GitLab"
        });
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].LDAP_SERVICE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.security.loginLdap",
          defaultMessage: "Login done through AD/LDAP"
        });
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].SAML_SERVICE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.security.loginSaml",
          defaultMessage: "Login done through SAML"
        });
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].GOOGLE_SERVICE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.security.loginGoogle",
          defaultMessage: "Login done through Google Apps"
        });
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].OFFICE365_SERVICE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.security.loginOffice365",
          defaultMessage: "Login done through Office 365"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.security.password",
          defaultMessage: "Password"
        }),
        describe: describe,
        section: SECTION_PASSWORD,
        updateSection: this.handleUpdateSection
      });
    });

    _defineProperty(this, "createSignInSection", () => {
      const user = this.props.user;

      if (this.props.activeSection === SECTION_SIGNIN) {
        let emailOption;
        let gitlabOption;
        let googleOption;
        let office365Option;
        let openidOption;
        let ldapOption;
        let samlOption;

        if (user.auth_service === '') {
          if (this.props.enableSignUpWithGitLab) {
            gitlabOption = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              className: "pb-3"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].GITLAB_SERVICE
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
              id: "user.settings.security.switchGitlab",
              defaultMessage: "Switch to Using GitLab SSO"
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null));
          }

          if (this.props.enableSignUpWithGoogle) {
            googleOption = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              className: "pb-3"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].GOOGLE_SERVICE
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
              id: "user.settings.security.switchGoogle",
              defaultMessage: "Switch to Using Google SSO"
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null));
          }

          if (this.props.enableSignUpWithOffice365) {
            office365Option = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              className: "pb-3"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].OFFICE365_SERVICE
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
              id: "user.settings.security.switchOffice365",
              defaultMessage: "Switch to Using Office 365 SSO"
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null));
          }

          if (this.props.enableSignUpWithOpenId) {
            openidOption = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              className: "pb-3"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].OPENID_SERVICE
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
              id: "user.settings.security.switchOpenId",
              defaultMessage: "Switch to Using OpenID SSO"
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null));
          }

          if (this.props.enableLdap) {
            ldapOption = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              className: "pb-3"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
              className: "btn btn-primary",
              to: '/claim/email_to_ldap?email=' + encodeURIComponent(user.email)
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
              id: "user.settings.security.switchLdap",
              defaultMessage: "Switch to Using AD/LDAP"
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null));
          }

          if (this.props.enableSaml) {
            samlOption = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              className: "pb-3"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].SAML_SERVICE
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
              id: "user.settings.security.switchSaml",
              defaultMessage: "Switch to Using SAML SSO"
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null));
          }
        } else if (this.props.enableSignUpWithEmail) {
          let link;

          if (user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].LDAP_SERVICE) {
            link = '/claim/ldap_to_email?email=' + encodeURIComponent(user.email);
          } else {
            link = '/claim/oauth_to_email?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service;
          }

          emailOption = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "pb-3"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
            className: "btn btn-primary",
            to: link
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.security.switchEmail",
            defaultMessage: "Switch to Using Email and Password"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null));
        }

        const inputs = [];
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          key: "userSignInOption"
        }, emailOption, gitlabOption, googleOption, office365Option, openidOption, ldapOption, samlOption));
        const extraInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.security.oneSignin",
          defaultMessage: "You may only have one sign-in method at a time. Switching sign-in method will send an email notifying you if the change was successful."
        }));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
          title: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.security.method', 'Sign-in Method'),
          extraInfo: extraInfo,
          inputs: inputs,
          serverError: this.state.serverError,
          updateSection: this.handleUpdateSection
        });
      }

      let describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.security.emailPwd",
        defaultMessage: "Email and Password"
      });

      if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].GITLAB_SERVICE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.security.gitlab",
          defaultMessage: "GitLab"
        });
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].GOOGLE_SERVICE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.security.google",
          defaultMessage: "Google"
        });
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].OFFICE365_SERVICE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.security.office365",
          defaultMessage: "Office 365"
        });
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].LDAP_SERVICE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.security.ldap",
          defaultMessage: "AD/LDAP"
        });
      } else if (this.props.user.auth_service === utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].SAML_SERVICE) {
        describe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.security.saml",
          defaultMessage: "SAML"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.security.method', 'Sign-in Method'),
        describe: describe,
        section: SECTION_SIGNIN,
        updateSection: this.handleUpdateSection
      });
    });

    _defineProperty(this, "createOAuthAppsSection", () => {
      if (this.props.activeSection === SECTION_APPS) {
        let apps;

        if (this.state.authorizedApps && this.state.authorizedApps.length > 0) {
          apps = this.state.authorizedApps.map(app => {
            const homepage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
              href: app.homepage,
              target: "_blank",
              rel: "noopener noreferrer"
            }, app.homepage);
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              key: app.id,
              className: "pb-3 authorized-app"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              className: "col-sm-10"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              className: "authorized-app__name"
            }, app.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
              className: "authorized-app__url"
            }, ' -', " ", homepage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              className: "authorized-app__description"
            }, app.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              className: "authorized-app__deauthorize"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
              href: "#",
              "data-app": app.id,
              onClick: this.deauthorizeApp
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
              id: "user.settings.security.deauthorize",
              defaultMessage: "Deauthorize"
            })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              className: "col-sm-2 pull-right"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
              alt: app.name,
              src: app.icon_url || images_icon50x50_png__WEBPACK_IMPORTED_MODULE_9__["default"]
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null));
          });
        } else {
          apps = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "pb-3 authorized-app"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "setting-list__hint"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.security.noApps",
            defaultMessage: "No OAuth 2.0 Applications are authorized."
          })));
        }

        const inputs = [];
        let wrapperClass;
        let helpText;

        if (Array.isArray(apps)) {
          wrapperClass = 'authorized-apps__wrapper';
          helpText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "authorized-apps__help"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.security.oauthAppsHelp",
            defaultMessage: "Applications act on your behalf to access your data based on the permissions you grant them."
          }));
        }

        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: wrapperClass,
          key: "authorizedApps"
        }, apps));
        const title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.security.oauthApps",
          defaultMessage: "OAuth 2.0 Applications"
        }), helpText);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
          title: title,
          inputs: inputs,
          serverError: this.state.serverError,
          updateSection: this.handleUpdateSection,
          width: "full",
          cancelButtonText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "user.settings.security.close",
            defaultMessage: "Close"
          })
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('user.settings.security.oauthApps', 'OAuth 2.0 Applications'),
        describe: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.security.oauthAppsDescription",
          defaultMessage: "Click 'Edit' to manage your OAuth 2.0 Applications"
        }),
        section: SECTION_APPS,
        updateSection: this.handleUpdateSection
      });
    });

    this.state = this.getDefaultState();
  }

  getDefaultState() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      passwordError: '',
      serverError: '',
      tokenError: '',
      authService: this.props.user.auth_service,
      savingPassword: false,
      authorizedApps: []
    };
  }

  componentDidMount() {
    if (this.props.enableOAuthServiceProvider) {
      this.loadAuthorizedOAuthApps();
    }
  }

  render() {
    const user = this.props.user;
    const passwordSection = this.createPasswordSection();
    let numMethods = 0;
    numMethods = this.props.enableSignUpWithGitLab ? numMethods + 1 : numMethods;
    numMethods = this.props.enableSignUpWithGoogle ? numMethods + 1 : numMethods;
    numMethods = this.props.enableSignUpWithOffice365 ? numMethods + 1 : numMethods;
    numMethods = this.props.enableLdap ? numMethods + 1 : numMethods;
    numMethods = this.props.enableSaml ? numMethods + 1 : numMethods; // If there are other sign-in methods and either email is enabled or the user's account is email, then allow switching

    let signInSection;

    if ((this.props.enableSignUpWithEmail || user.auth_service === '') && numMethods > 0 && this.props.experimentalEnableAuthenticationTransfer) {
      signInSection = this.createSignInSection();
    }

    let oauthSection;

    if (this.props.enableOAuthServiceProvider) {
      oauthSection = this.createOAuthAppsSection();
    }

    let tokensSection;

    if (this.props.canUseAccessTokens) {
      tokensSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_user_access_token_section__WEBPACK_IMPORTED_MODULE_16__["default"], {
        user: this.props.user,
        active: this.props.activeSection === SECTION_TOKENS,
        updateSection: this.handleUpdateSection,
        setRequireConfirm: this.props.setRequireConfirm
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "user.settings.security.close",
      defaultMessage: "Close"
    }, ariaLabel => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": ariaLabel,
      onClick: this.props.closeModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      "aria-hidden": "true"
    }, '×'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
      className: "modal-title",
      ref: "title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "modal-back"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "generic_icons.collapse",
      defaultMessage: "Collapse Icon"
    }, title => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-angle-left",
      title: title,
      onClick: this.props.collapseModal
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "user.settings.security.title",
      defaultMessage: "Security Settings"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "user-settings"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
      className: "tab-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "user.settings.security.title",
      defaultMessage: "Security Settings"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "divider-dark first"
    }), passwordSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "divider-light"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_mfa_section__WEBPACK_IMPORTED_MODULE_15__["default"], {
      active: this.props.activeSection === SECTION_MFA,
      updateSection: this.handleUpdateSection
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "divider-light"
    }), oauthSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "divider-light"
    }), tokensSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "divider-light"
    }), signInSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "divider-dark"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_toggle_modal_button_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], {
      className: "security-links color--link",
      dialogType: components_access_history_modal__WEBPACK_IMPORTED_MODULE_10__["default"],
      id: "viewAccessHistory"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "user.settings.security.viewHistory.icon",
      defaultMessage: "Access History Icon"
    }, title => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-clock-o",
      title: title
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "user.settings.security.viewHistory",
      defaultMessage: "View Access History"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_toggle_modal_button_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], {
      className: "security-links color--link mt-2",
      dialogType: components_activity_log_modal__WEBPACK_IMPORTED_MODULE_11__["default"],
      id: "viewAndLogOutOfActiveSessions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "user.settings.security.logoutActiveSessions.icon",
      defaultMessage: "Active Sessions Icon"
    }, title => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-clock-o",
      title: title
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "user.settings.security.logoutActiveSessions",
      defaultMessage: "View and Log Out of Active Sessions"
    }))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
/* eslint-enable react/no-string-refs */

_defineProperty(SecurityTab, "propTypes", {
  user: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,
  activeSection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  updateSection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  closeModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  collapseModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  setRequireConfirm: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  canUseAccessTokens: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  enableOAuthServiceProvider: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  enableSignUpWithEmail: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  enableSignUpWithGitLab: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  enableSignUpWithGoogle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  enableSignUpWithOpenId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  enableLdap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  enableSaml: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  enableSignUpWithOffice365: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  experimentalEnableAuthenticationTransfer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  passwordConfig: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,
  militaryTime: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    getMe: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
    updateUserPassword: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
    getAuthorizedOAuthApps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
    deauthorizeOAuthApp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SECTION_MFA, "SECTION_MFA", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/user_settings_security.tsx");
  reactHotLoader.register(SECTION_PASSWORD, "SECTION_PASSWORD", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/user_settings_security.tsx");
  reactHotLoader.register(SECTION_SIGNIN, "SECTION_SIGNIN", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/user_settings_security.tsx");
  reactHotLoader.register(SECTION_APPS, "SECTION_APPS", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/user_settings_security.tsx");
  reactHotLoader.register(SECTION_TOKENS, "SECTION_TOKENS", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/user_settings_security.tsx");
  reactHotLoader.register(SecurityTab, "SecurityTab", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/security/user_settings_security.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/sidebar/index.ts":
/*!***************************************************!*\
  !*** ./components/user_settings/sidebar/index.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/preferences */ "./node_modules/mattermost-redux/actions/preferences.js");
/* harmony import */ var mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/selectors/entities/preferences */ "./node_modules/mattermost-redux/selectors/entities/preferences.js");
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _user_settings_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user_settings_sidebar */ "./components/user_settings/sidebar/user_settings_sidebar.tsx");
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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_4__["getConfig"])(state);
  const closeUnusedDirectMessages = Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_5__["get"])(state, mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Preferences"].CATEGORY_SIDEBAR_SETTINGS, 'close_unused_direct_messages', 'after_seven_days');
  const channelSwitcherOption = Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_5__["get"])(state, mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Preferences"].CATEGORY_SIDEBAR_SETTINGS, 'channel_switcher_section', 'true');
  const channelSidebarOrganizationOption = Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_5__["getNewSidebarPreference"])(state);
  const sidebarPreference = Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_5__["getSidebarPreferences"])(state);
  return {
    closeUnusedDirectMessages,
    sidebarPreference,
    unreadsAtTop: sidebarPreference.unreads_at_top,
    favoriteAtTop: sidebarPreference.favorite_at_top,
    channelSwitcherOption,
    channelSidebarOrganizationOption: String(channelSidebarOrganizationOption),
    showChannelOrganization: config.ExperimentalChannelOrganization === 'true',
    showChannelSidebarOrganization: config.ExperimentalChannelSidebarOrganization !== 'disabled' && config.ExperimentalChannelSidebarOrganization !== 'always_on',
    showUnusedOption: config.CloseUnusedDirectMessages === 'true',
    user: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__["getCurrentUser"])(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      savePreferences: mattermost_redux_actions_preferences__WEBPACK_IMPORTED_MODULE_2__["savePreferences"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_user_settings_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/sidebar/index.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/sidebar/index.ts");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/sidebar/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/sidebar/user_settings_sidebar.tsx":
/*!********************************************************************!*\
  !*** ./components/user_settings/sidebar/user_settings_sidebar.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserSettingsSidebar; });
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions/telemetry_actions.jsx */ "./actions/telemetry_actions.jsx");
/* harmony import */ var components_localized_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/localized_icon */ "./components/localized_icon.tsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/setting_item_max.jsx */ "./components/setting_item_max.jsx");
/* harmony import */ var components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/setting_item_min */ "./components/setting_item_min/index.ts");
/* harmony import */ var components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/formatted_markdown_message.jsx */ "./components/formatted_markdown_message.jsx");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable react/no-string-refs */










var Settings;

(function (Settings) {
  Settings["CloseUnusedDirectMessages"] = "close_unused_direct_messages";
  Settings["ChannelSwitcherSection"] = "channel_switcher_section";
  Settings["ChannelSidebarOrganization"] = "channel_sidebar_organization";
  Settings["Grouping"] = "grouping";
  Settings["UnreadsAtTop"] = "unreadsAtTop";
  Settings["FavoriteAtTop"] = "favoriteAtTop";
  Settings["Sorting"] = "sorting";
  Settings["NewSidebar"] = "newSidebar";
  Settings["ChannelGrouping"] = "channel_grouping";
  Settings["ChannelSorting"] = "channel_sorting";
})(Settings || (Settings = {}));

class UserSettingsSidebar extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "getStateFromProps", () => {
      const {
        closeUnusedDirectMessages,
        channelSwitcherOption,
        channelSidebarOrganizationOption,
        sidebarPreference: {
          grouping,
          sorting
        },
        unreadsAtTop,
        favoriteAtTop
      } = this.props;
      return {
        settings: {
          close_unused_direct_messages: closeUnusedDirectMessages,
          channel_switcher_section: channelSwitcherOption,
          channel_sidebar_organization: channelSidebarOrganizationOption,
          grouping,
          unreadsAtTop,
          favoriteAtTop,
          sorting
        },
        isSaving: false
      };
    });

    _defineProperty(this, "handleSubmit", setting => {
      const {
        actions,
        user
      } = this.props;
      const preferences = [];

      if (setting === Settings.ChannelGrouping || setting === Settings.ChannelSorting) {
        const updatedSidebarSettings = {
          grouping: this.state.settings.grouping,
          unreads_at_top: this.state.settings.unreadsAtTop,
          favorite_at_top: this.state.settings.favoriteAtTop,
          sorting: this.state.settings.sorting
        };
        preferences.push({
          user_id: user.id,
          category: utils_constants__WEBPACK_IMPORTED_MODULE_6__["default"].Preferences.CATEGORY_SIDEBAR_SETTINGS,
          name: '',
          value: JSON.stringify(updatedSidebarSettings)
        });
        this.trackSettingChangeIfNecessary(Settings.Grouping);
        this.trackSettingChangeIfNecessary(Settings.Sorting);
        this.trackSettingChangeIfNecessary(Settings.UnreadsAtTop);
        this.trackSettingChangeIfNecessary(Settings.FavoriteAtTop);
        this.trackSettingChangeIfNecessary(Settings.NewSidebar);
      } else {
        preferences.push({
          user_id: user.id,
          category: utils_constants__WEBPACK_IMPORTED_MODULE_6__["default"].Preferences.CATEGORY_SIDEBAR_SETTINGS,
          name: setting,
          value: this.state.settings[setting]
        });
        Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_4__["trackEvent"])('settings', 'user_settings_update', {
          field: 'sidebar.' + setting,
          value: this.state.settings[setting]
        });
      }

      this.setState({
        isSaving: true
      });
      actions.savePreferences(user.id, preferences).then(() => {
        this.updateSection('');
      });
    });

    _defineProperty(this, "getPreviousSection", sectionName => {
      const {
        showChannelOrganization,
        channelSidebarOrganizationOption
      } = this.props;

      switch (sectionName) {
        case 'autoCloseDM':
          return channelSidebarOrganizationOption === 'true' ? 'channelSidebarOrganization' : 'channelSwitcher';

        case 'groupChannels':
          return 'dummySectionName';

        case 'channelSidebarOrganization':
          return 'dummySectionName';

        case 'channelSwitcher':
          return showChannelOrganization ? 'groupChannels' : 'dummySectionName';

        default:
          return null;
      }
    });

    _defineProperty(this, "updateSection", section => {
      if (this.props.updateSection) {
        this.setState(this.getStateFromProps());
        this.setState({
          isSaving: false
        });
        this.props.updateSection(section);
      }
    });

    _defineProperty(this, "renderAutoCloseDMLabel", value => {
      if (value === 'after_seven_days') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.sidebar.after_seven_days",
          defaultMessage: "After 7 days with no new messages"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "user.settings.sidebar.never",
        defaultMessage: "Never"
      });
    });

    _defineProperty(this, "renderAutoCloseDMSection", () => {
      let contents;

      if (this.props.activeSection === 'autoCloseDM') {
        contents = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.sidebar.autoCloseDMTitle",
            defaultMessage: "Automatically Close Direct Messages"
          }),
          inputs: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
            key: "autoCloseDMSetting"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
            id: "autoCloseDMAfterSevenDays",
            type: "radio",
            name: "autoCloseDM",
            checked: this.state.settings.close_unused_direct_messages === 'after_seven_days',
            onChange: this.updateSetting.bind(this, Settings.CloseUnusedDirectMessages, 'after_seven_days')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.sidebar.after_seven_days",
            defaultMessage: "After 7 days with no new messages"
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
            id: "autoCloseDMNever",
            type: "radio",
            name: "autoCloseDM",
            checked: this.state.settings.close_unused_direct_messages === 'never',
            onChange: this.updateSetting.bind(this, Settings.CloseUnusedDirectMessages, 'never')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.sidebar.never",
            defaultMessage: "Never"
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "mt-5"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.sidebar.autoCloseDMDesc",
            defaultMessage: "Direct Message conversations can be reopened with the \u201C+\u201D button in the sidebar or using the Channel Switcher (CTRL+K)."
          })))],
          setting: 'close_unused_direct_messages',
          submit: this.handleSubmit,
          saving: this.state.isSaving,
          server_error: this.state.serverError,
          updateSection: this.updateSection
        });
      } else {
        contents = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__["default"], {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.sidebar.autoCloseDMTitle",
            defaultMessage: "Automatically Close Direct Messages"
          }),
          describe: this.renderAutoCloseDMLabel(this.state.settings.close_unused_direct_messages),
          section: 'autoCloseDM',
          updateSection: this.updateSection
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, contents, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "divider-dark"
      }));
    });

    _defineProperty(this, "renderOrganizationLabel", () => {
      const {
        sidebarPreference: {
          sorting,
          grouping
        },
        unreadsAtTop,
        favoriteAtTop
      } = this.props;
      const messages = [];

      if (grouping === 'by_type') {
        messages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          key: "by_type",
          id: "user.settings.sidebar.groupByTypeShort",
          defaultMessage: "Group by channel type"
        }));
      } else {
        messages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          key: "none",
          id: "user.settings.sidebar.groupByNoneShort",
          defaultMessage: "No grouping"
        }));
      }

      let sortingId;
      let sortingDefaultMessage;

      if (sorting === 'alpha') {
        sortingId = Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.sidebar.sortAlphaShort');
        sortingDefaultMessage = 'sorted alphabetically';
      } else {
        sortingId = Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.sidebar.sortRecentShort');
        sortingDefaultMessage = 'sorted by recency';
      }

      messages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        key: "comma"
      }, ', '));
      messages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        key: "sorting",
        id: sortingId,
        defaultMessage: sortingDefaultMessage
      }));
      let atTopId = null;
      let atTopDefaultMessage = null;

      if (unreadsAtTop === 'true' && favoriteAtTop === 'false') {
        atTopId = Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.sidebar.unreadsShort');
        atTopDefaultMessage = 'Unreads grouped separately';
      } else if (unreadsAtTop === 'false' && favoriteAtTop === 'true') {
        atTopId = Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.sidebar.favoritesShort');
        atTopDefaultMessage = 'Favorites grouped separately';
      } else if (unreadsAtTop === 'true' && favoriteAtTop === 'true') {
        atTopId = Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.sidebar.unreadsFavoritesShort');
        atTopDefaultMessage = 'Unreads and favorites grouped separately';
      }

      if (atTopId) {
        messages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
          key: "break"
        }));
        messages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          key: "atTop",
          id: atTopId,
          defaultMessage: atTopDefaultMessage
        }));
      }

      return messages;
    });

    _defineProperty(this, "renderChannelSwitcherLabel", value => {
      if (value === 'true') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.sidebar.on",
          defaultMessage: "On"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "user.settings.sidebar.off",
        defaultMessage: "Off"
      });
    });

    _defineProperty(this, "renderChannelSidebarOrganizationSection", () => {
      const helpChannelSidebarOrganizationText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.sidebar.channelSidebarOrganizationSection.desc'),
        defaultMessage: 'When enabled, access experimental channel sidebar features, including collapsible sections and unreads filtering. [Learn more](!https://about.mattermost.com/default-sidebar/) or [give us feedback](!https://about.mattermost.com/default-sidebar-survey/)'
      });
      let contents = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.sidebar.channelSidebarOrganizationSectionTitle'),
          defaultMessage: "Experimental Sidebar Features"
        }),
        describe: this.renderChannelSwitcherLabel(this.props.channelSidebarOrganizationOption),
        section: 'channelSidebarOrganization',
        updateSection: this.updateSection
      });

      if (this.props.activeSection === 'channelSidebarOrganization') {
        contents = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.sidebar.channelSidebarOrganizationSectionTitle'),
            defaultMessage: "Experimental Sidebar Features"
          }),
          inputs: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
            key: "channelSidebarOrganizationSectionSetting"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("legend", {
            className: "form-legend hidden-label"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.sidebar.channelSidebarOrganizationSectionTitle'),
            defaultMessage: "Experimental Sidebar Features"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            id: "channelSidebarOrganizationRadioOn",
            className: "radio"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
            id: "channelSidebarOrganizationSectionEnabled",
            type: "radio",
            name: "channelSidebarOrganization",
            checked: this.state.settings.channel_sidebar_organization === 'true',
            onChange: this.updateSetting.bind(this, Settings.ChannelSidebarOrganization, 'true')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.sidebar.on",
            defaultMessage: "On"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            id: "channelSidebarOrganizationRadioOff",
            className: "radio"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
            id: "channelSidebarOrganizationSectionOff",
            type: "radio",
            name: "channelSidebarOrganization",
            checked: this.state.settings.channel_sidebar_organization === 'false',
            onChange: this.updateSetting.bind(this, Settings.ChannelSidebarOrganization, 'false')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.sidebar.off",
            defaultMessage: "Off"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            id: "channelSidebarOrganizationelpText"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), helpChannelSidebarOrganizationText))],
          setting: 'channel_sidebar_organization',
          submit: this.handleSubmit,
          saving: this.state.isSaving,
          server_error: this.state.serverError,
          updateSection: this.updateSection
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, contents, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "divider-light"
      }));
    });

    _defineProperty(this, "renderChannelOrganizationSection", () => {
      const {
        grouping,
        sorting
      } = this.state.settings;
      let contents;

      if (this.props.activeSection === 'groupChannels') {
        const inputs = [];
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
          key: "groupingSectionSetting"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("legend", {
          className: "form-legend"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.sidebar.groupChannelsTitle",
          defaultMessage: "Channel grouping"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
          id: "byTypeOption",
          type: "radio",
          name: "groupChannels",
          checked: grouping === 'by_type',
          onChange: this.updateSetting.bind(this, Settings.Grouping, 'by_type')
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.sidebar.groupByType",
          defaultMessage: "Channels grouped by type"
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
          id: "noneOption",
          type: "radio",
          name: "groupChannels",
          checked: grouping === 'none',
          onChange: this.updateSetting.bind(this, Settings.Grouping, 'none')
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.sidebar.groupByNone",
          defaultMessage: "Combine all channel types"
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "mt-5"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.sidebar.groupDesc",
          defaultMessage: "Group channels by type, or combine all types into a list."
        }))));
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
          key: "sortingDivider"
        }));
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
          key: "sortingOptions"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("legend", {
          className: "form-legend"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.sidebar.sortChannelsTitle",
          defaultMessage: "Channel sorting"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
          id: "recentSectionEnabled",
          type: "radio",
          name: "sortChannels",
          checked: sorting === 'recent',
          onChange: this.updateSetting.bind(this, Settings.Sorting, 'recent')
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.sidebar.sortRecent",
          defaultMessage: "Recency"
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
          id: "alphaSectionEnabled",
          type: "radio",
          name: "sortChannels",
          checked: sorting === 'alpha',
          onChange: this.updateSetting.bind(this, Settings.Sorting, 'alpha')
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.sidebar.sortAlpha",
          defaultMessage: "Alphabetically"
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "mt-5"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.sidebar.sortDesc",
          defaultMessage: "Sort channels alphabetically, or by most recent post."
        }))));
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
          key: "divider"
        }));
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
          key: "unreadOption"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "checkbox"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
          id: "unreadAtTopOption",
          type: "checkbox",
          checked: this.state.settings.unreadsAtTop === 'true',
          onChange: e => this.updateSetting(Settings.UnreadsAtTop, e.target.checked.toString())
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.sidebar.unreads",
          defaultMessage: "Unreads grouped separately"
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "mt-5"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.sidebar.unreadsDesc",
          defaultMessage: "Group unread channels separately until read."
        }))));
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
          key: "groupingDivider"
        }));
        inputs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
          key: "favoriteOption"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "checkbox"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
          id: "favoriteAtTopOption",
          type: "checkbox",
          checked: this.state.settings.favoriteAtTop === 'true',
          onChange: e => this.updateSetting(Settings.FavoriteAtTop, e.target.checked.toString())
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.sidebar.favorites",
          defaultMessage: "Favorites grouped separately"
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.sidebar.favoritesDesc",
          defaultMessage: "Channels marked as favorites will be grouped separately."
        }))));
        contents = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.sidebar.groupAndSortChannelsTitle",
            defaultMessage: "Channel Grouping and Sorting"
          }),
          inputs: inputs,
          setting: 'channel_grouping',
          submit: this.handleSubmit,
          saving: this.state.isSaving,
          server_error: this.state.serverError,
          updateSection: this.updateSection
        });
      } else {
        contents = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__["default"], {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.sidebar.groupAndSortChannelsTitle",
            defaultMessage: "Channel Grouping and Sorting"
          }),
          describe: this.renderOrganizationLabel(),
          section: 'groupChannels',
          updateSection: this.updateSection
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, contents, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "divider-light"
      }));
    });

    _defineProperty(this, "renderChannelSwitcherSection", () => {
      let channelSwitcherSectionDescId = Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.sidebar.channelSwitcherSectionDesc.windows');
      let channelSwitcherSectionDescDefault = 'The channel switcher is shown at the bottom of the sidebar and is used to jump between channels quickly. It can also be accessed using CTRL + K.';

      if (Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["isMac"])()) {
        channelSwitcherSectionDescId = Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('user.settings.sidebar.channelSwitcherSectionDesc.mac');
        channelSwitcherSectionDescDefault = 'The channel switcher is shown at the bottom of the sidebar and is used to jump between channels quickly. It can also be accessed using CMD + K.';
      }

      const helpChannelSwitcherText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: channelSwitcherSectionDescId,
        defaultMessage: channelSwitcherSectionDescDefault
      });

      if (this.props.activeSection === 'channelSwitcher') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_setting_item_max_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.sidebar.channelSwitcherSectionTitle",
            defaultMessage: "Channel Switcher"
          }),
          inputs: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
            key: "channelSwitcherSectionSetting"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("legend", {
            className: "form-legend hidden-label"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.sidebar.channelSwitcherSectionTitle",
            defaultMessage: "Channel Switcher"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            id: "channelSwitcherRadioOn",
            className: "radio"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
            id: "channelSwitcherSectionEnabled",
            type: "radio",
            name: "channelSwitcher",
            checked: this.state.settings.channel_switcher_section === 'true',
            onChange: this.updateSetting.bind(this, Settings.ChannelSwitcherSection, 'true')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.sidebar.on",
            defaultMessage: "On"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            id: "channelSwitcherRadioOff",
            className: "radio"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
            id: "channelSwitcherSectionOff",
            type: "radio",
            name: "channelSwitcher",
            checked: this.state.settings.channel_switcher_section === 'false',
            onChange: this.updateSetting.bind(this, Settings.ChannelSwitcherSection, 'false')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "user.settings.sidebar.off",
            defaultMessage: "Off"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            id: "channelSwitcherHelpText"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), helpChannelSwitcherText))],
          setting: 'channel_switcher_section',
          submit: this.handleSubmit,
          saving: this.state.isSaving,
          server_error: this.state.serverError,
          updateSection: this.updateSection
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_setting_item_min__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "user.settings.sidebar.channelSwitcherSectionTitle",
          defaultMessage: "Channel Switcher"
        }),
        describe: this.renderChannelSwitcherLabel(this.props.channelSwitcherOption),
        section: 'channelSwitcher',
        updateSection: this.updateSection
      });
    });

    this.state = this.getStateFromProps();
  }

  trackSettingChangeIfNecessary(setting) {
    if (this.state.settings[setting] !== this.props.sidebarPreference[setting]) {
      Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_4__["trackEvent"])('settings', 'user_settings_update', {
        field: 'sidebar.' + setting,
        value: this.state.settings[setting]
      });
    }
  }

  updateSetting(setting, value) {
    const settings = _objectSpread(_objectSpread({}, this.state.settings), {}, {
      [setting]: value
    });

    this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
      settings
    }));
  }

  render() {
    const {
      showUnusedOption,
      showChannelOrganization,
      showChannelSidebarOrganization,
      channelSidebarOrganizationOption
    } = this.props;
    const channelSidebarOrganizationDisabled = channelSidebarOrganizationOption === 'false';
    const channelOrganizationSection = showChannelOrganization && channelSidebarOrganizationDisabled ? this.renderChannelOrganizationSection() : null;
    const channelSidebarOrganizationSection = showChannelSidebarOrganization ? this.renderChannelSidebarOrganizationSection() : null;
    const autoCloseDMSection = showUnusedOption ? this.renderAutoCloseDMSection() : null;
    const channelSwitcherSection = channelSidebarOrganizationDisabled ? this.renderChannelSwitcherSection() : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      id: "closeButton",
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.props.closeModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      "aria-hidden": "true"
    }, '×')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      className: "modal-title",
      ref: "title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "modal-back",
      onClick: this.props.collapseModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "fa fa-angle-left",
      title: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('generic_icons.collapse'),
        defaultMessage: 'Collapse Icon'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "user.settings.sidebar.title",
      defaultMessage: "Sidebar Settings"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "sidebarTitle",
      className: "user-settings"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
      className: "tab-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "user.settings.sidebar.title",
      defaultMessage: "Sidebar Settings"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "divider-dark first"
    }), channelSidebarOrganizationSection, channelOrganizationSection, channelSwitcherSection, showUnusedOption ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "divider-light"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "divider-dark"
    }), autoCloseDMSection));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
/* eslint-disable react/no-string-refs */

_defineProperty(UserSettingsSidebar, "propTypes", {
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    savePreferences: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  closeUnusedDirectMessages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  showUnusedOption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  showChannelOrganization: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  showChannelSidebarOrganization: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  channelSwitcherOption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  channelSidebarOrganizationOption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  sidebarPreference: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  unreadsAtTop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  favoriteAtTop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  updateSection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  activeSection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  closeModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  collapseModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserSettingsSidebar, "UserSettingsSidebar", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/sidebar/user_settings_sidebar.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/user_settings/user_settings.tsx":
/*!****************************************************!*\
  !*** ./components/user_settings/user_settings.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserSettings; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _advanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced */ "./components/user_settings/advanced/index.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display */ "./components/user_settings/display/index.ts");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general */ "./components/user_settings/general/index.ts");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications */ "./components/user_settings/notifications/index.js");
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security */ "./components/user_settings/security/index.ts");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar */ "./components/user_settings/sidebar/index.ts");


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







class UserSettings extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  render() {
    if (this.props.activeTab === 'general') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_general__WEBPACK_IMPORTED_MODULE_4__["default"], {
        user: this.props.user,
        activeSection: this.props.activeSection,
        updateSection: this.props.updateSection,
        updateTab: this.props.updateTab,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal
      }));
    } else if (this.props.activeTab === 'security') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_security__WEBPACK_IMPORTED_MODULE_6__["default"], {
        user: this.props.user,
        activeSection: this.props.activeSection,
        updateSection: this.props.updateSection,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal,
        setRequireConfirm: this.props.setRequireConfirm
      }));
    } else if (this.props.activeTab === 'notifications') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_notifications__WEBPACK_IMPORTED_MODULE_5__["default"], {
        user: this.props.user,
        activeSection: this.props.activeSection,
        updateSection: this.props.updateSection,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal
      }));
    } else if (this.props.activeTab === 'display') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_display__WEBPACK_IMPORTED_MODULE_3__["default"], {
        user: this.props.user,
        activeSection: this.props.activeSection,
        updateSection: this.props.updateSection,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal,
        setEnforceFocus: this.props.setEnforceFocus,
        setRequireConfirm: this.props.setRequireConfirm
      }));
    } else if (this.props.activeTab === 'sidebar') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        activeSection: this.props.activeSection,
        updateSection: this.props.updateSection,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal
      }));
    } else if (this.props.activeTab === 'advanced') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_advanced__WEBPACK_IMPORTED_MODULE_2__["default"], {
        activeSection: this.props.activeSection,
        updateSection: this.props.updateSection,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(UserSettings, "propTypes", {
  user: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any.isRequired,
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  activeSection: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  updateSection: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  updateTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  closeModal: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  collapseModal: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  setEnforceFocus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  setRequireConfirm: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserSettings, "UserSettings", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/user_settings/user_settings.tsx");
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

/***/ }),

/***/ "./node_modules/mattermost-redux/utils/notify_props.js":
/*!*************************************************************!*\
  !*** ./node_modules/mattermost-redux/utils/notify_props.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/mattermost-redux/constants/index.js");
function getEmailInterval(enableEmailNotification, enableEmailBatching, emailIntervalPreference) {
    var INTERVAL_NEVER = constants_1.Preferences.INTERVAL_NEVER, INTERVAL_IMMEDIATE = constants_1.Preferences.INTERVAL_IMMEDIATE, INTERVAL_FIFTEEN_MINUTES = constants_1.Preferences.INTERVAL_FIFTEEN_MINUTES, INTERVAL_HOUR = constants_1.Preferences.INTERVAL_HOUR;
    var validValuesWithEmailBatching = [INTERVAL_IMMEDIATE, INTERVAL_NEVER, INTERVAL_FIFTEEN_MINUTES, INTERVAL_HOUR];
    var validValuesWithoutEmailBatching = [INTERVAL_IMMEDIATE, INTERVAL_NEVER];
    if (!enableEmailNotification) {
        return INTERVAL_NEVER;
    }
    else if (enableEmailBatching && validValuesWithEmailBatching.indexOf(emailIntervalPreference) === -1) {
        // When email batching is enabled, the default interval is 15 minutes
        return INTERVAL_FIFTEEN_MINUTES;
    }
    else if (!enableEmailBatching && validValuesWithoutEmailBatching.indexOf(emailIntervalPreference) === -1) {
        // When email batching is not enabled, the default interval is immediately
        return INTERVAL_IMMEDIATE;
    }
    else if (enableEmailNotification && emailIntervalPreference === INTERVAL_NEVER) {
        // When email notification is enabled, the default interval is immediately
        return INTERVAL_IMMEDIATE;
    }
    return emailIntervalPreference;
}
exports.getEmailInterval = getEmailInterval;
//# sourceMappingURL=notify_props.js.map

/***/ })

}]);
//# sourceMappingURL=9.e3f6a211cb0160b267bb.js.map