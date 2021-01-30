(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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

/***/ "./components/common/site_name_and_description.tsx":
/*!*********************************************************!*\
  !*** ./components/common/site_name_and_description.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteNameAndDescription; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");


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


class SiteNameAndDescription extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  render() {
    const {
      customDescriptionText,
      siteName
    } = this.props;
    let description = null;

    if (customDescriptionText) {
      description = customDescriptionText;
    } else {
      description = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "web.root.signup_info",
        defaultMessage: "All team communication in one place, searchable and accessible anywhere"
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      id: "site_name"
    }, siteName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      id: "site_description",
      className: "color--light"
    }, description));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(SiteNameAndDescription, "propTypes", {
  customDescriptionText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});

_defineProperty(SiteNameAndDescription, "defaultProps", {
  siteName: 'Mattermost'
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SiteNameAndDescription, "SiteNameAndDescription", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/common/site_name_and_description.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/create_team/components/display_name.jsx":
/*!************************************************************!*\
  !*** ./components/create_team/components/display_name.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamSignupDisplayNamePage; });
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions/telemetry_actions.jsx */ "./actions/telemetry_actions.jsx");
/* harmony import */ var utils_constants_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/constants.jsx */ "./utils/constants.jsx");
/* harmony import */ var utils_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/url */ "./utils/url.tsx");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! images/logo.png */ "./images/logo.png");
/* harmony import */ var components_widgets_icons_fa_next_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/widgets/icons/fa_next_icon */ "./components/widgets/icons/fa_next_icon.tsx");


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








class TeamSignupDisplayNamePage extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    var _this$props$state$tea;

    super(props);

    _defineProperty(this, "submitNext", e => {
      e.preventDefault();
      Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_4__["trackEvent"])('display_name', 'click_next');
      var displayName = this.state.teamDisplayName.trim();

      if (!displayName) {
        this.setState({
          nameError: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "create_team.display_name.required",
            defaultMessage: "This field is required"
          })
        });
        return;
      } else if (displayName.length < utils_constants_jsx__WEBPACK_IMPORTED_MODULE_5__["default"].MIN_TEAMNAME_LENGTH || displayName.length > utils_constants_jsx__WEBPACK_IMPORTED_MODULE_5__["default"].MAX_TEAMNAME_LENGTH) {
        this.setState({
          nameError: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "create_team.display_name.charLength",
            defaultMessage: "Name must be {min} or more characters up to a maximum of {max}. You can add a longer team description later.",
            values: {
              min: utils_constants_jsx__WEBPACK_IMPORTED_MODULE_5__["default"].MIN_TEAMNAME_LENGTH,
              max: utils_constants_jsx__WEBPACK_IMPORTED_MODULE_5__["default"].MAX_TEAMNAME_LENGTH
            }
          })
        });
        return;
      }

      const newState = this.props.state;
      newState.wizard = 'team_url';
      newState.team.display_name = displayName;
      newState.team.name = Object(utils_url__WEBPACK_IMPORTED_MODULE_6__["cleanUpUrlable"])(displayName);
      this.props.updateParent(newState);
    });

    _defineProperty(this, "handleFocus", e => {
      e.preventDefault();
      e.currentTarget.select();
    });

    _defineProperty(this, "handleDisplayNameChange", e => {
      this.setState({
        teamDisplayName: e.target.value
      });
    });

    this.state = {
      teamDisplayName: ((_this$props$state$tea = this.props.state.team) === null || _this$props$state$tea === void 0 ? void 0 : _this$props$state$tea.display_name) || '' // eslint-disable-line camelcase

    };
  }

  componentDidMount() {
    Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_4__["trackEvent"])('signup', 'signup_team_01_name');
  }

  render() {
    var nameError = null;
    var nameDivClass = 'form-group';

    if (this.state.nameError) {
      nameError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "control-label"
      }, this.state.nameError);
      nameDivClass += ' has-error';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      alt: 'signup logo',
      className: "signup-team-logo",
      src: images_logo_png__WEBPACK_IMPORTED_MODULE_7__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "create_team.display_name.teamName",
      defaultMessage: "Team Name"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: nameDivClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-sm-9"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      id: "teamNameInput",
      type: "text",
      className: "form-control",
      placeholder: "",
      maxLength: "128",
      value: this.state.teamDisplayName,
      autoFocus: true,
      onFocus: this.handleFocus,
      onChange: this.handleDisplayNameChange,
      spellCheck: "false"
    }))), nameError), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "create_team.display_name.nameHelp",
      defaultMessage: "Name your team in any language. Your team name shows in menus and headings."
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      id: "teamNameNextButton",
      type: "submit",
      className: "btn btn-primary mt-8",
      onClick: this.submitNext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "create_team.display_name.next",
      defaultMessage: "Next"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_widgets_icons_fa_next_icon__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
/* eslint-disable react/no-string-refs */

_defineProperty(TeamSignupDisplayNamePage, "propTypes", {
  /*
   * Object containing team's display_name and name
   */
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /*
   * Function that updates parent component with state props
   */
  updateParent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TeamSignupDisplayNamePage, "TeamSignupDisplayNamePage", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/create_team/components/display_name.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/create_team/components/team_url/index.ts":
/*!*************************************************************!*\
  !*** ./components/create_team/components/team_url/index.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/teams */ "./node_modules/mattermost-redux/actions/teams.js");
/* harmony import */ var mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _team_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team_url */ "./components/create_team/components/team_url/team_url.tsx");
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
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      checkIfTeamExists: mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_2__["checkIfTeamExists"],
      createTeam: mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_2__["createTeam"],
      searchTeams: mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_2__["getTeams"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(_team_url__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/create_team/components/team_url/index.ts");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/create_team/components/team_url/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/create_team/components/team_url/team_url.tsx":
/*!*****************************************************************!*\
  !*** ./components/create_team/components/team_url/team_url.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamUrl; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var stores_redux_store_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stores/redux_store.jsx */ "./stores/redux_store.jsx");
/* harmony import */ var actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! actions/telemetry_actions.jsx */ "./actions/telemetry_actions.jsx");
/* harmony import */ var utils_constants_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/constants.jsx */ "./utils/constants.jsx");
/* harmony import */ var utils_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/url */ "./utils/url.tsx");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! images/logo.png */ "./images/logo.png");
/* harmony import */ var components_overlay_trigger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/overlay_trigger */ "./components/overlay_trigger.tsx");





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








 // import FormattedMarkdownMessage from 'components/formatted_markdown_message.jsx';


const getState = stores_redux_store_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].getState;
class TeamUrl extends react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "getTeamName", async () => {
      const state = getState();
      const currentUser = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_7__["getCurrentUser"])(state);
      let teamName = "".concat(currentUser.roles.includes('system_admin') ? 'o' : 'u', "-uet");
      const teamList = await this.props.actions.searchTeams('', {});

      if (teamList !== null && teamList !== void 0 && teamList.data) {
        const teamListWithName = teamList.data.map(value => value.name).filter(value => value.includes('o-uet'));
        teamName = "".concat(teamName, "-").concat(teamListWithName.length + 1);
      }

      this.setState({
        teamName
      });
    });

    _defineProperty(this, "submitBack", e => {
      e.preventDefault();
      Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_9__["trackEvent"])('signup', 'click_back');
      const newState = this.props.state;
      newState.wizard = 'display_name';
      this.props.updateParent(newState);
    });

    _defineProperty(this, "submitNext", async e => {
      e.preventDefault();
      Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_9__["trackEvent"])('signup', 'click_finish');
      const name = this.state.teamURL.trim();
      const cleanedName = utils_url__WEBPACK_IMPORTED_MODULE_11__["cleanUpUrlable"](name);
      const urlRegex = /^[a-z]+([a-z\-0-9]+|(__)?)[a-z0-9]+$/g;
      const {
        actions: {
          checkIfTeamExists,
          createTeam
        }
      } = this.props;

      if (!name) {
        this.setState({
          nameError: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "create_team.team_url.required",
            defaultMessage: "This field is required"
          })
        });
        return;
      }

      if (cleanedName.length < utils_constants_jsx__WEBPACK_IMPORTED_MODULE_10__["default"].MIN_TEAMNAME_LENGTH || cleanedName.length > utils_constants_jsx__WEBPACK_IMPORTED_MODULE_10__["default"].MAX_TEAMNAME_LENGTH) {
        this.setState({
          nameError: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "create_team.team_url.charLength",
            defaultMessage: "Name must be {min} or more characters up to a maximum of {max}",
            values: {
              min: utils_constants_jsx__WEBPACK_IMPORTED_MODULE_10__["default"].MIN_TEAMNAME_LENGTH,
              max: utils_constants_jsx__WEBPACK_IMPORTED_MODULE_10__["default"].MAX_TEAMNAME_LENGTH
            }
          })
        });
        return;
      }

      if (cleanedName !== name || !urlRegex.test(name)) {
        this.setState({
          nameError: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "create_team.team_url.regex",
            defaultMessage: "Use only lower case letters, numbers and dashes. Must start with a letter and can't end in a dash."
          })
        });
        return;
      } // for (let index = 0; index < Constants.RESERVED_TEAM_NAMES.length; index++) {
      //     if (cleanedName.indexOf(Constants.RESERVED_TEAM_NAMES[index]) === 0) {
      //         this.setState({nameError: (
      //             <FormattedMarkdownMessage
      //                 id='create_team.team_url.taken'
      //                 defaultMessage='This URL [starts with a reserved word](!https://docs.mattermost.com/help/getting-started/creating-teams.html#team-url) or is unavailable. Please try another.'
      //             />),
      //         });
      //         return;
      //     }
      // }


      this.setState({
        isLoading: true
      });
      const teamSignup = JSON.parse(JSON.stringify(this.props.state));
      teamSignup.team.type = 'O';
      teamSignup.team.name = this.state.teamName;
      const checkIfTeamExistsData = await checkIfTeamExists(name);
      const exists = checkIfTeamExistsData.exists;

      if (exists) {
        this.setState({
          nameError: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "create_team.team_url.unavailable",
            defaultMessage: "This URL is taken or unavailable. Please try another."
          })
        });
        this.setState({
          isLoading: false
        });
        return;
      }

      const createTeamData = await createTeam(teamSignup.team);
      const data = createTeamData.data;
      const error = createTeamData.error;

      if (data) {
        this.props.history.push('/' + data.name + '/channels/' + utils_constants_jsx__WEBPACK_IMPORTED_MODULE_10__["default"].DEFAULT_CHANNEL);
        Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_9__["trackEvent"])('signup', 'signup_team_03_complete');
      } else if (error) {
        this.setState({
          nameError: error.message
        });
        this.setState({
          isLoading: false
        });
      }
    });

    _defineProperty(this, "handleFocus", e => {
      e.preventDefault();
      e.currentTarget.select();
    });

    _defineProperty(this, "handleTeamURLInputChange", e => {
      this.setState({
        teamURL: e.target.value
      });
    });

    this.state = {
      nameError: '',
      isLoading: false,
      teamURL: props.state.team.name,
      teamName: ''
    };
  }

  componentDidMount() {
    Object(actions_telemetry_actions_jsx__WEBPACK_IMPORTED_MODULE_9__["trackEvent"])('signup', 'signup_team_02_url');
    this.getTeamName();
  }

  render() {
    let nameError = null;
    let nameDivClass = 'form-group';

    if (this.state.nameError) {
      nameError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
        className: "control-label"
      }, this.state.nameError);
      nameDivClass += ' has-error';
    }

    const title = "".concat(utils_url__WEBPACK_IMPORTED_MODULE_11__["getSiteURL"](), "/");
    const urlTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
      id: "urlTooltip"
    }, title);
    let finishMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "create_team.team_url.finish",
      defaultMessage: "Finish"
    });

    if (this.state.isLoading) {
      finishMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "create_team.team_url.creatingTeam",
        defaultMessage: "Creating team..."
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: images_logo_png__WEBPACK_IMPORTED_MODULE_12__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "create_team.team_url.teamUrl",
      defaultMessage: "Team URL"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: nameDivClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "col-sm-11"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "input-group input-group--limit"
    }, this.state.teamName !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_overlay_trigger__WEBPACK_IMPORTED_MODULE_13__["default"], {
      delayShow: utils_constants_jsx__WEBPACK_IMPORTED_MODULE_10__["default"].OVERLAY_TIME_DELAY,
      placement: "top",
      overlay: urlTooltip // eslint-disable-next-line react/jsx-closing-bracket-location

    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "input-group-addon"
    }, title + this.state.teamName))))), nameError), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "mt-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      id: "teamURLFinishButton",
      type: "submit",
      bsStyle: "primary",
      disabled: this.state.isLoading,
      onClick: e => this.submitNext(e)
    }, finishMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "mt-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "#",
      onClick: this.submitBack
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "create_team.team_url.back",
      defaultMessage: "Back to previous step"
    })))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
/* eslint-enable react/no-string-refs */

_defineProperty(TeamUrl, "propTypes", {
  state: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    team: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,
    wizard: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
  }).isRequired,
  updateParent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    checkIfTeamExists: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
    createTeam: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
    searchTeams: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
  }).isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({}).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getState, "getState", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/create_team/components/team_url/team_url.tsx");
  reactHotLoader.register(TeamUrl, "TeamUrl", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/create_team/components/team_url/team_url.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/create_team/create_team.tsx":
/*!************************************************!*\
  !*** ./components/create_team/create_team.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateTeam; });
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_announcement_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/announcement_bar */ "./components/announcement_bar/index.js");
/* harmony import */ var components_common_back_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/common/back_button */ "./components/common/back_button.tsx");
/* harmony import */ var components_create_team_components_display_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/create_team/components/display_name */ "./components/create_team/components/display_name.jsx");
/* harmony import */ var components_common_site_name_and_description__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/common/site_name_and_description */ "./components/common/site_name_and_description.tsx");
/* harmony import */ var components_create_team_components_team_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/create_team/components/team_url */ "./components/create_team/components/team_url/index.ts");




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







class CreateTeam extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateParent", state => {
      this.setState(state);
      this.props.history.push('/create_team/' + state.wizard);
    });

    this.state = {
      team: {},
      wizard: 'display_name'
    };
  }

  render() {
    const {
      currentChannel,
      currentTeam,
      customDescriptionText,
      match,
      siteName
    } = this.props;
    let url = '/select_team';

    if (currentTeam) {
      url = "/".concat(currentTeam.name);

      if (currentChannel) {
        url += "/channels/".concat(currentChannel.name);
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_announcement_bar__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_common_back_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      url: url
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "signup-team__container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_common_site_name_and_description__WEBPACK_IMPORTED_MODULE_8__["default"], {
      customDescriptionText: customDescriptionText,
      siteName: siteName
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "signup__content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      path: "".concat(this.props.match.url, "/display_name"),
      render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_create_team_components_display_name__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({
        state: this.state,
        updateParent: this.updateParent
      }, props))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      path: "".concat(this.props.match.url, "/team_url"),
      render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_create_team_components_team_url__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({
        state: this.state,
        updateParent: this.updateParent
      }, props))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
      to: "".concat(match.url, "/display_name")
    }))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(CreateTeam, "propTypes", {
  currentTeam: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,
  currentChannel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,
  customDescriptionText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  match: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CreateTeam, "CreateTeam", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/create_team/create_team.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/create_team/index.js":
/*!*****************************************!*\
  !*** ./components/create_team/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/channels */ "./node_modules/mattermost-redux/selectors/entities/channels.js");
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/teams */ "./node_modules/mattermost-redux/selectors/entities/teams.js");
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _create_team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create_team */ "./components/create_team/create_team.tsx");
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
  const currentChannel = Object(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_2__["getCurrentChannel"])(state);
  const currentTeam = Object(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__["getCurrentTeam"])(state);
  const customDescriptionText = config.CustomDescriptionText;
  const siteName = config.SiteName;
  return {
    currentChannel,
    currentTeam,
    customDescriptionText,
    siteName
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_create_team__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/create_team/index.js");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/create_team/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "files/ab8aa80cba445eb0fb75e6611c292567.png");

/***/ })

}]);
//# sourceMappingURL=15.7f14690c8983a09f8940.js.map