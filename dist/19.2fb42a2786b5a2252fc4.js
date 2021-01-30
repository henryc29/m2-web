(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./components/linking_landing_page/index.tsx":
/*!***************************************************!*\
  !*** ./components/linking_landing_page/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/client */ "./node_modules/mattermost-redux/client/index.js");
/* harmony import */ var mattermost_redux_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/preferences */ "./node_modules/mattermost-redux/selectors/entities/preferences.js");
/* harmony import */ var mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _linking_landing_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linking_landing_page */ "./components/linking_landing_page/linking_landing_page.tsx");
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
  return {
    desktopAppLink: config.AppDownloadLink,
    iosAppLink: config.IosAppDownloadLink,
    androidAppLink: config.AndroidAppDownloadLink,
    defaultTheme: Object(mattermost_redux_selectors_entities_preferences__WEBPACK_IMPORTED_MODULE_3__["getTheme"])(state),
    siteUrl: config.SiteURL,
    siteName: config.SiteName,
    brandImageUrl: mattermost_redux_client__WEBPACK_IMPORTED_MODULE_1__["Client4"].getBrandImageUrl('0'),
    enableCustomBrand: config.EnableCustomBrand === 'true'
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_linking_landing_page__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/linking_landing_page/index.tsx");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/linking_landing_page/index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/linking_landing_page/linking_landing_page.tsx":
/*!******************************************************************!*\
  !*** ./components/linking_landing_page/linking_landing_page.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkingLandingPage; });
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var images_deep_linking_deeplinking_desktop_img_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! images/deep-linking/deeplinking-desktop-img.png */ "./images/deep-linking/deeplinking-desktop-img.png");
/* harmony import */ var images_deep_linking_deeplinking_mobile_img_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! images/deep-linking/deeplinking-mobile-img.png */ "./images/deep-linking/deeplinking-mobile-img.png");
/* harmony import */ var images_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! images/logo.svg */ "./images/logo.svg");
/* harmony import */ var components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/formatted_markdown_message */ "./components/formatted_markdown_message.jsx");
/* harmony import */ var components_widgets_icons_checkbox_checked_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/widgets/icons/checkbox_checked_icon */ "./components/widgets/icons/checkbox_checked_icon.jsx");
/* harmony import */ var stores_browser_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! stores/browser_store */ "./stores/browser_store.tsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/utils */ "./utils/utils.jsx");
/* harmony import */ var utils_user_agent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/user_agent */ "./utils/user_agent.tsx");



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











class LinkingLandingPage extends react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "clearLandingPreferenceIfNotChecked", () => {
      if (!this.state.navigating) {
        stores_browser_store__WEBPACK_IMPORTED_MODULE_9__["default"].clearLandingPreference(this.props.siteUrl);
      }
    });

    _defineProperty(this, "checkLandingPreferenceBrowser", () => {
      const landingPreference = stores_browser_store__WEBPACK_IMPORTED_MODULE_9__["default"].getLandingPreference(this.props.siteUrl);
      return landingPreference && landingPreference === utils_constants__WEBPACK_IMPORTED_MODULE_10__["LandingPreferenceTypes"].BROWSER;
    });

    _defineProperty(this, "checkLandingPreferenceApp", () => {
      const landingPreference = stores_browser_store__WEBPACK_IMPORTED_MODULE_9__["default"].getLandingPreference(this.props.siteUrl);
      return landingPreference && landingPreference === utils_constants__WEBPACK_IMPORTED_MODULE_10__["LandingPreferenceTypes"].MATTERMOSTAPP;
    });

    _defineProperty(this, "handleChecked", () => {
      // If it was checked, and now we're unchecking it, clear the preference
      if (this.state.rememberChecked) {
        stores_browser_store__WEBPACK_IMPORTED_MODULE_9__["default"].clearLandingPreference(this.props.siteUrl);
      }

      this.setState({
        rememberChecked: !this.state.rememberChecked
      });
    });

    _defineProperty(this, "setPreference", (pref, clearIfNotChecked) => {
      if (!this.state.rememberChecked) {
        if (clearIfNotChecked) {
          stores_browser_store__WEBPACK_IMPORTED_MODULE_9__["default"].clearLandingPreference(this.props.siteUrl);
        }

        return;
      }

      switch (pref) {
        case utils_constants__WEBPACK_IMPORTED_MODULE_10__["LandingPreferenceTypes"].MATTERMOSTAPP:
          stores_browser_store__WEBPACK_IMPORTED_MODULE_9__["default"].setLandingPreferenceToMattermostApp(this.props.siteUrl);
          break;

        case utils_constants__WEBPACK_IMPORTED_MODULE_10__["LandingPreferenceTypes"].BROWSER:
          stores_browser_store__WEBPACK_IMPORTED_MODULE_9__["default"].setLandingPreferenceToBrowser(this.props.siteUrl);
          break;

        default:
          break;
      }
    });

    _defineProperty(this, "openMattermostApp", () => {
      this.setPreference(utils_constants__WEBPACK_IMPORTED_MODULE_10__["LandingPreferenceTypes"].MATTERMOSTAPP);
      this.setState({
        redirectPage: true
      });
      window.location.href = this.state.nativeLocation;
    });

    _defineProperty(this, "openInBrowser", () => {
      this.setPreference(utils_constants__WEBPACK_IMPORTED_MODULE_10__["LandingPreferenceTypes"].BROWSER);
      window.location.href = this.state.location;
    });

    _defineProperty(this, "renderSystemDialogMessage", () => {
      const isMobile = utils_user_agent__WEBPACK_IMPORTED_MODULE_12__["isMobile"]();

      if (isMobile) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "get_app.systemDialogMessageMobile",
          defaultMessage: "View in App"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "get_app.systemDialogMessage",
        defaultMessage: "View in Desktop App"
      });
    });

    _defineProperty(this, "renderGoNativeAppMessage", () => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: utils_utils__WEBPACK_IMPORTED_MODULE_11__["isMobile"]() ? '#' : this.state.nativeLocation,
        onMouseDown: () => {
          this.setPreference(utils_constants__WEBPACK_IMPORTED_MODULE_10__["LandingPreferenceTypes"].MATTERMOSTAPP, true);
        },
        onClick: () => {
          this.setState({
            redirectPage: true,
            navigating: true
          });

          if (utils_utils__WEBPACK_IMPORTED_MODULE_11__["isMobile"]()) {
            if (utils_user_agent__WEBPACK_IMPORTED_MODULE_12__["isAndroidWeb"]()) {
              const timeout = setTimeout(() => {
                window.location.replace(this.getDownloadLink());
              }, 2000);
              window.addEventListener('blur', () => {
                clearTimeout(timeout);
              });
            }

            window.location.replace(this.state.nativeLocation);
          }
        },
        className: "btn btn-primary btn-lg get-app__download"
      }, this.renderSystemDialogMessage());
    });

    _defineProperty(this, "getDownloadLink", () => {
      if (utils_user_agent__WEBPACK_IMPORTED_MODULE_12__["isIosWeb"]()) {
        return this.props.iosAppLink;
      } else if (utils_user_agent__WEBPACK_IMPORTED_MODULE_12__["isAndroidWeb"]()) {
        return this.props.androidAppLink;
      }

      return this.props.desktopAppLink;
    });

    _defineProperty(this, "handleBrandImageError", () => {
      this.setState({
        brandImageError: true
      });
    });

    _defineProperty(this, "renderCheckboxIcon", () => {
      if (this.state.rememberChecked) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_widgets_icons_checkbox_checked_icon__WEBPACK_IMPORTED_MODULE_8__["default"], null);
      }

      return null;
    });

    _defineProperty(this, "renderGraphic", () => {
      const isMobile = utils_user_agent__WEBPACK_IMPORTED_MODULE_12__["isMobile"]();

      if (isMobile) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          src: images_deep_linking_deeplinking_mobile_img_png__WEBPACK_IMPORTED_MODULE_5__["default"]
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: images_deep_linking_deeplinking_desktop_img_png__WEBPACK_IMPORTED_MODULE_4__["default"]
      });
    });

    _defineProperty(this, "renderDownloadLinkText", () => {
      const isMobile = utils_user_agent__WEBPACK_IMPORTED_MODULE_12__["isMobile"]();

      if (isMobile) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "get_app.dontHaveTheMobileApp",
          defaultMessage: 'Don\'t have the Mobile App?'
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "get_app.dontHaveTheDesktopApp",
        defaultMessage: 'Don\'t have the Desktop App?'
      });
    });

    _defineProperty(this, "renderDownloadLinkSection", () => {
      const downloadLink = this.getDownloadLink();

      if (this.state.redirectPage) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "get-app__download-link"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "get_app.openLinkInBrowser",
          defaultMessage: "Or, [open this link in your browser.](!{link})",
          values: {
            link: this.state.location
          }
        }));
      } else if (downloadLink) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "get-app__download-link"
        }, this.renderDownloadLinkText(), '\u00A0', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          href: downloadLink
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "get_app.downloadTheAppNow",
          defaultMessage: "Download the app now."
        })));
      }

      return null;
    });

    _defineProperty(this, "renderDialogHeader", () => {
      const downloadLink = this.getDownloadLink();
      const isMobile = utils_user_agent__WEBPACK_IMPORTED_MODULE_12__["isMobile"]();
      let openingLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "get_app.openingLink",
        defaultMessage: "Opening link in Mattermost..."
      });

      if (this.props.enableCustomBrand) {
        openingLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "get_app.openingLinkWhiteLabel",
          defaultMessage: "Opening link in the Desktop App..."
        });
      }

      if (this.state.redirectPage) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "get-app__launching"
        }, openingLink, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "get-app__alternative".concat(this.state.redirectPage ? ' redirect-page' : '')
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "get_app.redirectedInMoments",
          defaultMessage: "You will be redirected in a few moments."
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), this.renderDownloadLinkText(), '\u00A0', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
          className: "mobile-only"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          href: downloadLink
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "get_app.downloadTheAppNow",
          defaultMessage: "Download the app now."
        }))));
      }

      let viewApp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "get_app.ifNothingPrompts",
        defaultMessage: "You can view {siteName} in the desktop app or continue in your web browser.",
        values: {
          siteName: this.props.enableCustomBrand ? '' : ' Mattermost'
        }
      });

      if (isMobile) {
        viewApp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "get_app.ifNothingPromptsMobile",
          defaultMessage: "You can view {siteName} in the mobile app or continue in your web browser.",
          values: {
            siteName: this.props.enableCustomBrand ? '' : ' Mattermost'
          }
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "get-app__launching"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "get_app.launching",
        defaultMessage: "Where would you like to view this?"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "get-app__alternative"
      }, viewApp));
    });

    _defineProperty(this, "renderDialogBody", () => {
      if (this.state.redirectPage) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "get-app__dialog-body"
        }, this.renderDialogHeader(), this.renderDownloadLinkSection());
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "get-app__dialog-body"
      }, this.renderDialogHeader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "get-app__buttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "get-app__status"
      }, this.renderGoNativeAppMessage()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "get-app__status"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: this.state.location,
        onMouseDown: () => {
          this.setPreference(utils_constants__WEBPACK_IMPORTED_MODULE_10__["LandingPreferenceTypes"].BROWSER, true);
        },
        onClick: () => {
          this.setState({
            navigating: true
          });
        },
        className: "btn btn-default btn-lg get-app__continue"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "get_app.continueToBrowser",
        defaultMessage: "View in Browser"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "get-app__preference"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        className: "get-app__checkbox ".concat(this.state.rememberChecked ? 'checked' : ''),
        onClick: this.handleChecked
      }, this.renderCheckboxIcon()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "get_app.rememberMyPreference",
        defaultMessage: "Remember my preference"
      })), this.renderDownloadLinkSection());
    });

    _defineProperty(this, "renderHeader", () => {
      let header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "get-app__header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: images_logo_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
        className: "get-app__logo"
      }));

      if (this.props.enableCustomBrand && this.props.brandImageUrl) {
        let customLogo;

        if (this.props.brandImageUrl && !this.state.brandImageError) {
          customLogo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
            src: this.props.brandImageUrl,
            onError: this.handleBrandImageError,
            className: "get-app__custom-logo"
          });
        }

        header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "get-app__header"
        }, customLogo, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "get-app__custom-site-name"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, this.props.siteName)));
      }

      return header;
    });

    const location = window.location.href.replace('/landing#', '');
    this.state = {
      rememberChecked: false,
      redirectPage: false,
      location,
      nativeLocation: location.replace(/^(https|http)/, 'mattermost'),
      brandImageError: false,
      navigating: false
    };

    if (utils_utils__WEBPACK_IMPORTED_MODULE_11__["isMobile"]() && !stores_browser_store__WEBPACK_IMPORTED_MODULE_9__["default"].hasSeenLandingPage()) {
      stores_browser_store__WEBPACK_IMPORTED_MODULE_9__["default"].setLandingPageSeen(true);
    }
  }

  componentDidMount() {
    utils_utils__WEBPACK_IMPORTED_MODULE_11__["applyTheme"](this.props.defaultTheme);

    if (this.checkLandingPreferenceApp()) {
      this.openMattermostApp();
    }

    window.addEventListener('beforeunload', this.clearLandingPreferenceIfNotChecked);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.clearLandingPreferenceIfNotChecked);
  }

  render() {
    const isMobile = utils_user_agent__WEBPACK_IMPORTED_MODULE_12__["isMobile"]();

    if (this.checkLandingPreferenceBrowser()) {
      this.openInBrowser();
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "get-app"
    }, this.renderHeader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "get-app__dialog"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "get-app__graphic ".concat(isMobile ? 'mobile' : '')
    }, this.renderGraphic()), this.renderDialogBody()));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(LinkingLandingPage, "propTypes", {
  defaultTheme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  desktopAppLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  iosAppLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  androidAppLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  siteUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  brandImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  enableCustomBrand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LinkingLandingPage, "LinkingLandingPage", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/linking_landing_page/linking_landing_page.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/widgets/icons/checkbox_checked_icon.jsx":
/*!************************************************************!*\
  !*** ./components/widgets/icons/checkbox_checked_icon.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckboxCheckedIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

class CheckboxCheckedIcon extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "18px",
      height: "18px",
      viewBox: "0 0 18 18"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "Developer-Export",
      stroke: "none",
      strokeWidth: "1",
      fillRule: "evenodd"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      transform: "translate(-285.000000, -933.000000)",
      id: "All-Team-Members"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      transform: "translate(245.000000, 698.000000)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "Channel-Administrators",
      transform: "translate(0.000000, 106.000000)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "data-table/column-1",
      transform: "translate(11.000000, 86.000000)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "row-checkbox---Public-Channels",
      transform: "translate(12.000000, 35.000000)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "Stacked-Group",
      transform: "translate(0.000000, 5.000000)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "data-table/1st/row-checkbox-label-base"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "check-on-copy-11",
      transform: "translate(14.000000, 0.000000)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M19,3 L5,3 C3.9,3 3,3.9 3,5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 L19,3 Z M10,17 L5,12.1923077 L6.4,10.8461538 L10,14.3076923 L17.6,7 L19,8.34615385 L10,17 L10,17 Z",
      id: "checkbox---checked"
    })))))))))));
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

  reactHotLoader.register(CheckboxCheckedIcon, "CheckboxCheckedIcon", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/widgets/icons/checkbox_checked_icon.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./images/deep-linking/deeplinking-desktop-img.png":
/*!*********************************************************!*\
  !*** ./images/deep-linking/deeplinking-desktop-img.png ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "files/34c82b247a366d047105491d979556bf.png");

/***/ }),

/***/ "./images/deep-linking/deeplinking-mobile-img.png":
/*!********************************************************!*\
  !*** ./images/deep-linking/deeplinking-mobile-img.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "files/9b0519e1f5fbf82b0548515994fd49d4.png");

/***/ }),

/***/ "./images/logo.svg":
/*!*************************!*\
  !*** ./images/logo.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "files/af9b6341b25687bd266ae48515c11e04.svg");

/***/ })

}]);
//# sourceMappingURL=19.2fb42a2786b5a2252fc4.js.map