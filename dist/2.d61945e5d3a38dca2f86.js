(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./components/audit_table/audit_table.tsx":
/*!************************************************!*\
  !*** ./components/audit_table/audit_table.tsx ***!
  \************************************************/
/*! exports provided: AuditTable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditTable", function() { return AuditTable; });
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");






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




const holders = Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["defineMessages"])({
  sessionRevoked: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.sessionRevoked'),
    defaultMessage: 'The session with id {sessionId} was revoked'
  },
  channelCreated: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.channelCreated'),
    defaultMessage: 'Created the {channelName} channel'
  },
  establishedDM: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.establishedDM'),
    defaultMessage: 'Established a direct message channel with {username}'
  },
  nameUpdated: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.nameUpdated'),
    defaultMessage: 'Updated the {channelName} channel name'
  },
  headerUpdated: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.headerUpdated'),
    defaultMessage: 'Updated the {channelName} channel header'
  },
  channelDeleted: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.channelDeleted'),
    defaultMessage: 'Archived the channel with the URL {url}'
  },
  userAdded: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.userAdded'),
    defaultMessage: 'Added {username} to the {channelName} channel'
  },
  userRemoved: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.userRemoved'),
    defaultMessage: 'Removed {username} to the {channelName} channel'
  },
  attemptedRegisterApp: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedRegisterApp'),
    defaultMessage: 'Attempted to register a new OAuth Application with ID {id}'
  },
  attemptedAllowOAuthAccess: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedAllowOAuthAccess'),
    defaultMessage: 'Attempted to allow a new OAuth service access'
  },
  successfullOAuthAccess: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullOAuthAccess'),
    defaultMessage: 'Successfully gave a new OAuth service access'
  },
  failedOAuthAccess: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.failedOAuthAccess'),
    defaultMessage: 'Failed to allow a new OAuth service access - the redirect URI did not match the previously registered callback'
  },
  attemptedOAuthToken: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedOAuthToken'),
    defaultMessage: 'Attempted to get an OAuth access token'
  },
  successfullOAuthToken: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullOAuthToken'),
    defaultMessage: 'Successfully added a new OAuth service'
  },
  oauthTokenFailed: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.oauthTokenFailed'),
    defaultMessage: 'Failed to get an OAuth access token - {token}'
  },
  attemptedLogin: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedLogin'),
    defaultMessage: 'Attempted to login'
  },
  authenticated: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.authenticated'),
    defaultMessage: 'Successfully authenticated'
  },
  successfullLogin: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullLogin'),
    defaultMessage: 'Successfully logged in'
  },
  failedLogin: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.failedLogin'),
    defaultMessage: 'FAILED login attempt'
  },
  updatePicture: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.updatePicture'),
    defaultMessage: 'Updated your profile picture'
  },
  updateGeneral: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.updateGeneral'),
    defaultMessage: 'Updated the general settings of your account'
  },
  attemptedPassword: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedPassword'),
    defaultMessage: 'Attempted to change password'
  },
  successfullPassword: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullPassword'),
    defaultMessage: 'Successfully changed password'
  },
  failedPassword: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.failedPassword'),
    defaultMessage: 'Failed to change password - tried to update user password who was logged in through OAuth'
  },
  updatedRol: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.updatedRol'),
    defaultMessage: 'Updated user role(s) to '
  },
  member: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.member'),
    defaultMessage: 'member'
  },
  accountActive: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.accountActive'),
    defaultMessage: 'Account activated'
  },
  accountInactive: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.accountInactive'),
    defaultMessage: 'Account deactivated'
  },
  by: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.by'),
    defaultMessage: ' by {username}'
  },
  byAdmin: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.byAdmin'),
    defaultMessage: ' by an admin'
  },
  sentEmail: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.sentEmail'),
    defaultMessage: 'Sent an email to {email} to reset your password'
  },
  attemptedReset: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedReset'),
    defaultMessage: 'Attempted to reset password'
  },
  successfullReset: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullReset'),
    defaultMessage: 'Successfully reset password'
  },
  updateGlobalNotifications: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.updateGlobalNotifications'),
    defaultMessage: 'Updated your global notification settings'
  },
  attemptedWebhookCreate: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedWebhookCreate'),
    defaultMessage: 'Attempted to create a webhook'
  },
  succcessfullWebhookCreate: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullWebhookCreate'),
    defaultMessage: 'Successfully created a webhook'
  },
  failedWebhookCreate: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.failedWebhookCreate'),
    defaultMessage: 'Failed to create a webhook - bad channel permissions'
  },
  attemptedWebhookDelete: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedWebhookDelete'),
    defaultMessage: 'Attempted to delete a webhook'
  },
  successfullWebhookDelete: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullWebhookDelete'),
    defaultMessage: 'Successfully deleted a webhook'
  },
  failedWebhookDelete: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.failedWebhookDelete'),
    defaultMessage: 'Failed to delete a webhook - inappropriate conditions'
  },
  logout: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.logout'),
    defaultMessage: 'Logged out of your account'
  },
  verified: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.verified'),
    defaultMessage: 'Successfully verified your email address'
  },
  revokedAll: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.revokedAll'),
    defaultMessage: 'Revoked all current sessions for the team'
  },
  loginAttempt: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.loginAttempt'),
    defaultMessage: ' (Login attempt)'
  },
  loginFailure: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.loginFailure'),
    defaultMessage: ' (Login failure)'
  },
  attemptedLicenseAdd: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedLicenseAdd'),
    defaultMessage: 'Attempted to add new license'
  },
  successfullLicenseAdd: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullLicenseAdd'),
    defaultMessage: 'Successfully added new license'
  },
  failedExpiredLicenseAdd: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.failedExpiredLicenseAdd'),
    defaultMessage: 'Failed to add a new license as it has either expired or not yet been started'
  },
  failedInvalidLicenseAdd: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.failedInvalidLicenseAdd'),
    defaultMessage: 'Failed to add an invalid license'
  },
  licenseRemoved: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.licenseRemoved'),
    defaultMessage: 'Successfully removed a license'
  }
});
class AuditTable extends react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent {
  componentDidMount() {
    const ids = this.props.audits.map(audit => audit.user_id);
    this.props.actions.getMissingProfilesByIds(ids);
  }

  render() {
    const {
      audits,
      showUserId,
      showIp,
      showSession
    } = this.props;
    const accessList = [];

    for (const [i, audit] of audits.entries()) {
      const auditInfo = this.formatAuditInfo(audit);
      let uContent;

      if (showUserId) {
        uContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          className: "word-break--all"
        }, auditInfo.userId);
      }

      let iContent;

      if (showIp) {
        iContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          className: "whitespace--nowrap word-break--all"
        }, auditInfo.ip);
      }

      let sContent;

      if (showSession) {
        sContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          className: "whitespace--nowrap word-break--all"
        }, auditInfo.sessionId);
      }

      let descStyle = '';

      if (auditInfo.desc.toLowerCase().indexOf('fail') !== -1) {
        descStyle = ' color--error';
      }

      accessList[i] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        key: audit.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "whitespace--nowrap word-break--all"
      }, auditInfo.timestamp), uContent, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: 'word-break--all' + descStyle
      }, auditInfo.desc), iContent, sContent);
    }

    let userIdContent;

    if (showUserId) {
      userIdContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "audit_table.userId",
        defaultMessage: "User ID"
      }));
    }

    let ipContent;

    if (showIp) {
      ipContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "audit_table.ip",
        defaultMessage: "IP Address"
      }));
    }

    let sessionContent;

    if (showSession) {
      sessionContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "audit_table.session",
        defaultMessage: "Session ID"
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("table", {
      className: "table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "audit_table.timestamp",
      defaultMessage: "Timestamp"
    })), userIdContent, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "audit_table.action",
      defaultMessage: "Action"
    })), ipContent, sessionContent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", {
      "data-testid": "auditTableBody"
    }, accessList));
  }

  formatAuditInfo(audit) {
    const {
      formatMessage
    } = this.props.intl;
    const actionURL = audit.action.replace(/\/api\/v[1-9]/, '');
    let auditDesc = '';

    if (actionURL.indexOf('/channels') === 0) {
      const channelInfo = audit.extra_info.split(' ');
      const channelNameField = channelInfo[0].split('=');
      let channelURL = '';
      let channelObj;
      let channelName = '';

      if (channelNameField.indexOf('name') >= 0) {
        channelURL = channelNameField[channelNameField.indexOf('name') + 1];
        channelObj = this.props.getByName(channelURL);

        if (channelObj) {
          channelName = channelObj.display_name;
        } else {
          channelName = channelURL;
        }
      }

      switch (actionURL) {
        case '/channels/create':
          auditDesc = formatMessage(holders.channelCreated, {
            channelName
          });
          break;

        case '/channels/create_direct':
          if (channelObj) {
            auditDesc = formatMessage(holders.establishedDM, {
              username: this.props.getDirectTeammate(channelObj.id).username
            });
          }

          break;

        case '/channels/update':
          auditDesc = formatMessage(holders.nameUpdated, {
            channelName
          });
          break;

        case '/channels/update_desc': // support the old path

        case '/channels/update_header':
          auditDesc = formatMessage(holders.headerUpdated, {
            channelName
          });
          break;

        default:
          {
            let userIdField = [];
            let userId = '';
            let username = '';

            if (channelInfo[1]) {
              userIdField = channelInfo[1].split('=');

              if (userIdField.indexOf('user_id') >= 0) {
                userId = userIdField[userIdField.indexOf('user_id') + 1];
                const profile = this.props.getUser(userId);

                if (profile) {
                  username = profile.username;
                }
              }
            }

            if (/\/channels\/[A-Za-z0-9]+\/delete/.test(actionURL)) {
              auditDesc = formatMessage(holders.channelDeleted, {
                url: channelURL
              });
            } else if (/\/channels\/[A-Za-z0-9]+\/add/.test(actionURL)) {
              auditDesc = formatMessage(holders.userAdded, {
                username,
                channelName
              });
            } else if (/\/channels\/[A-Za-z0-9]+\/remove/.test(actionURL)) {
              auditDesc = formatMessage(holders.userRemoved, {
                username,
                channelName
              });
            }

            break;
          }
      }
    } else if (actionURL.indexOf('/oauth') === 0) {
      const oauthInfo = audit.extra_info.split(' ');

      switch (actionURL) {
        case '/oauth/register':
          {
            const clientIdField = oauthInfo[0].split('=');

            if (clientIdField[0] === 'client_id') {
              auditDesc = formatMessage(holders.attemptedRegisterApp, {
                id: clientIdField[1]
              });
            }

            break;
          }

        case '/oauth/allow':
          if (oauthInfo[0] === 'attempt') {
            auditDesc = formatMessage(holders.attemptedAllowOAuthAccess);
          } else if (oauthInfo[0] === 'success') {
            auditDesc = formatMessage(holders.successfullOAuthAccess);
          } else if (oauthInfo[0] === 'fail - redirect_uri did not match registered callback') {
            auditDesc = formatMessage(holders.failedOAuthAccess);
          }

          break;

        case '/oauth/access_token':
          if (oauthInfo[0] === 'attempt') {
            auditDesc = formatMessage(holders.attemptedOAuthToken);
          } else if (oauthInfo[0] === 'success') {
            auditDesc = formatMessage(holders.successfullOAuthToken);
          } else {
            const oauthTokenFailure = oauthInfo[0].split('-');

            if (oauthTokenFailure[0].trim() === 'fail' && oauthTokenFailure[1]) {
              auditDesc = formatMessage(holders.oauthTokenFailed, {
                token: oauthTokenFailure[1].trim()
              });
            }
          }

          break;

        default:
          break;
      }
    } else if (actionURL.indexOf('/users') === 0) {
      const userInfo = audit.extra_info.split(' ');

      switch (actionURL) {
        case '/users/login':
          if (userInfo[0] === 'attempt') {
            auditDesc = formatMessage(holders.attemptedLogin);
          } else if (userInfo[0] === 'success') {
            auditDesc = formatMessage(holders.successfullLogin);
          } else if (userInfo[0] === 'authenticated') {
            auditDesc = formatMessage(holders.authenticated);
          } else if (userInfo[0]) {
            auditDesc = formatMessage(holders.failedLogin);
          }

          break;

        case '/users/revoke_session':
          auditDesc = formatMessage(holders.sessionRevoked, {
            sessionId: userInfo[0].split('=')[1]
          });
          break;

        case '/users/newimage':
          auditDesc = formatMessage(holders.updatePicture);
          break;

        case '/users/update':
          auditDesc = formatMessage(holders.updateGeneral);
          break;

        case '/users/newpassword':
          if (userInfo[0] === 'attempted') {
            auditDesc = formatMessage(holders.attemptedPassword);
          } else if (userInfo[0] === 'completed') {
            auditDesc = formatMessage(holders.successfullPassword);
          } else if (userInfo[0] === 'failed - tried to update user password who was logged in through oauth') {
            auditDesc = formatMessage(holders.failedPassword);
          }

          break;

        case '/users/update_roles':
          {
            const userRoles = userInfo[0].split('=')[1];
            auditDesc = formatMessage(holders.updatedRol);

            if (userRoles.trim()) {
              auditDesc += userRoles;
            } else {
              auditDesc += formatMessage(holders.member);
            }

            break;
          }

        case '/users/update_active':
          {
            const updateType = userInfo[0].split('=')[0];
            const updateField = userInfo[0].split('=')[1];
            /* Either describes account activation/deactivation or a revoked session as part of an account deactivation */

            if (updateType === 'active') {
              if (updateField === 'true') {
                auditDesc = formatMessage(holders.accountActive);
              } else if (updateField === 'false') {
                auditDesc = formatMessage(holders.accountInactive);
              }

              const actingUserInfo = userInfo[1].split('=');

              if (actingUserInfo[0] === 'session_user') {
                const actingUser = this.props.getUser(actingUserInfo[1]);
                const user = this.props.currentUser;

                if (user && actingUser && Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["isSystemAdmin"])(user.roles)) {
                  auditDesc += formatMessage(holders.by, {
                    username: actingUser.username
                  });
                } else if (user && actingUser) {
                  auditDesc += formatMessage(holders.byAdmin);
                }
              }
            } else if (updateType === 'session_id') {
              auditDesc = formatMessage(holders.sessionRevoked, {
                sessionId: updateField
              });
            }

            break;
          }

        case '/users/send_password_reset':
          auditDesc = formatMessage(holders.sentEmail, {
            email: userInfo[0].split('=')[1]
          });
          break;

        case '/users/reset_password':
          if (userInfo[0] === 'attempt') {
            auditDesc = formatMessage(holders.attemptedReset);
          } else if (userInfo[0] === 'success') {
            auditDesc = formatMessage(holders.successfullReset);
          }

          break;

        case '/users/update_notify':
          auditDesc = formatMessage(holders.updateGlobalNotifications);
          break;

        default:
          break;
      }
    } else if (actionURL.indexOf('/hooks') === 0) {
      const webhookInfo = audit.extra_info;

      switch (actionURL) {
        case '/hooks/incoming/create':
          if (webhookInfo === 'attempt') {
            auditDesc = formatMessage(holders.attemptedWebhookCreate);
          } else if (webhookInfo === 'success') {
            auditDesc = formatMessage(holders.succcessfullWebhookCreate);
          } else if (webhookInfo === 'fail - bad channel permissions') {
            auditDesc = formatMessage(holders.failedWebhookCreate);
          }

          break;

        case '/hooks/incoming/delete':
          if (webhookInfo === 'attempt') {
            auditDesc = formatMessage(holders.attemptedWebhookDelete);
          } else if (webhookInfo === 'success') {
            auditDesc = formatMessage(holders.successfullWebhookDelete);
          } else if (webhookInfo === 'fail - inappropriate conditions') {
            auditDesc = formatMessage(holders.failedWebhookDelete);
          }

          break;

        default:
          break;
      }
    } else if (actionURL.indexOf('/license') === 0) {
      const licenseInfo = audit.extra_info;

      switch (actionURL) {
        case '/license/add':
          if (licenseInfo === 'attempt') {
            auditDesc = formatMessage(holders.attemptedLicenseAdd);
          } else if (licenseInfo === 'success') {
            auditDesc = formatMessage(holders.successfullLicenseAdd);
          } else if (licenseInfo === 'failed - expired or non-started license') {
            auditDesc = formatMessage(holders.failedExpiredLicenseAdd);
          } else if (licenseInfo === 'failed - invalid license') {
            auditDesc = formatMessage(holders.failedInvalidLicenseAdd);
          }

          break;

        case '/license/remove':
          auditDesc = formatMessage(holders.licenseRemoved);
          break;

        default:
          break;
      }
    } else if (actionURL.indexOf('/admin/download_compliance_report') === 0) {
      auditDesc = Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["toTitleCase"])(audit.extra_info);
    } else {
      switch (actionURL) {
        case '/logout':
          auditDesc = formatMessage(holders.logout);
          break;

        case '/verify_email':
          auditDesc = formatMessage(holders.verified);
          break;

        default:
          break;
      }
    }
    /* If all else fails... */


    if (!auditDesc) {
      /* Currently not called anywhere */
      if (audit.extra_info.indexOf('revoked_all=') >= 0) {
        auditDesc = formatMessage(holders.revokedAll);
      } else {
        let actionDesc = '';

        if (actionURL && actionURL.lastIndexOf('/') !== -1) {
          actionDesc = actionURL.substring(actionURL.lastIndexOf('/') + 1).replace('_', ' ');
          actionDesc = Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["toTitleCase"])(actionDesc);
        }

        let extraInfoDesc = '';

        if (audit.extra_info) {
          extraInfoDesc = audit.extra_info;

          if (extraInfoDesc.indexOf('=') !== -1) {
            extraInfoDesc = extraInfoDesc.substring(extraInfoDesc.indexOf('=') + 1);
          }
        }

        auditDesc = actionDesc + ' ' + extraInfoDesc;
      }
    }

    const date = new Date(audit.create_at);
    const timestamp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedDate"], {
      value: date,
      day: "2-digit",
      month: "short",
      year: "numeric"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedTime"], {
      value: date,
      hour: "2-digit",
      minute: "2-digit"
    })));
    const auditProfile = this.props.getUser(audit.user_id);
    const userId = auditProfile ? auditProfile.email : audit.user_id;
    const desc = auditDesc;
    const ip = audit.ip_address;
    const sessionId = audit.session_id;
    return {
      timestamp,
      userId,
      desc,
      ip,
      sessionId
    };
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(AuditTable, "propTypes", {
  intl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,
  audits: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any).isRequired,
  showUserId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  showIp: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  showSession: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  currentUser: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,
  getUser: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  getByName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    getMissingProfilesByIds: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
  }).isRequired,
  getDirectTeammate: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
});

const _default = Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["injectIntl"])(AuditTable);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(holders, "holders", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/audit_table/audit_table.tsx");
  reactHotLoader.register(AuditTable, "AuditTable", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/audit_table/audit_table.tsx");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/audit_table/audit_table.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/audit_table/index.ts":
/*!*****************************************!*\
  !*** ./components/audit_table/index.ts ***!
  \*****************************************/
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
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/channels */ "./node_modules/mattermost-redux/selectors/entities/channels.js");
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var _audit_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audit_table */ "./components/audit_table/audit_table.tsx");
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
    currentUser: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__["getCurrentUser"])(state),
    getUser: userId => Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__["getUser"])(state, userId),
    getByName: channelName => Object(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_4__["getChannelByName"])(state, channelName),
    getDirectTeammate: channelId => Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["getDirectTeammate"])(state, channelId)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      getMissingProfilesByIds: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["getMissingProfilesByIds"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_audit_table__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/audit_table/index.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/audit_table/index.ts");
  reactHotLoader.register(_default, "default", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/audit_table/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/color_input.tsx":
/*!************************************!*\
  !*** ./components/color_input.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorInput; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/lib/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_3__);


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



class ColorInput extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "colorPicker", void 0);

    _defineProperty(this, "colorInput", void 0);

    _defineProperty(this, "checkClick", e => {
      if (!this.colorPicker.current || !this.colorPicker.current.contains(e.target)) {
        this.setState({
          isOpened: false
        });
      }
    });

    _defineProperty(this, "togglePicker", () => {
      if (!this.state.isOpened && this.colorInput.current) {
        this.colorInput.current.focus();
      }

      this.setState({
        isOpened: !this.state.isOpened
      });
    });

    _defineProperty(this, "handleColorChange", newColorData => {
      this.props.onChange(newColorData.hex);
    });

    _defineProperty(this, "onChange", event => {
      const value = event.target.value;
      const color = tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(value);
      const normalizedColor = '#' + color.toHex();

      if (color.isValid()) {
        this.props.onChange(normalizedColor);
      }

      this.setState({
        value
      });
    });

    _defineProperty(this, "onFocus", event => {
      this.setState({
        focused: true
      });

      if (event.target) {
        event.target.setSelectionRange(1, event.target.value.length);
      }
    });

    _defineProperty(this, "onBlur", () => {
      const value = this.state.value;
      const color = tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(value);
      const normalizedColor = '#' + color.toHex();

      if (color.isValid()) {
        this.props.onChange(normalizedColor);
        this.setState({
          value: normalizedColor
        });
      } else {
        this.setState({
          value: this.props.value
        });
      }

      this.setState({
        focused: false
      });
    });

    _defineProperty(this, "onKeyDown", event => {
      // open picker on enter or space
      if (event.key === 'Enter' || event.key === ' ') {
        this.togglePicker();
      }
    });

    this.colorPicker = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.colorInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.state = {
      focused: false,
      isOpened: false,
      value: props.value
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.focused && props.value !== state.value) {
      return {
        value: props.value
      };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      isOpened: prevIsOpened
    } = prevState;
    const {
      isOpened
    } = this.state;

    if (isOpened !== prevIsOpened) {
      if (isOpened) {
        document.addEventListener('click', this.checkClick);
      } else {
        document.removeEventListener('click', this.checkClick);
      }
    }
  }

  render() {
    const {
      id
    } = this.props;
    const {
      isOpened,
      value
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "color-input input-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      id: "".concat(id, "-inputColorValue"),
      ref: this.colorInput,
      className: "form-control",
      type: "text",
      value: value,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onKeyDown: this.onKeyDown,
      maxLength: 7,
      disabled: this.props.isDisabled
    }), !this.props.isDisabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      id: "".concat(id, "-squareColorIcon"),
      className: "input-group-addon color-pad",
      onClick: this.togglePicker
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      id: "".concat(id, "-squareColorIconValue"),
      className: "color-icon",
      style: {
        backgroundColor: value
      }
    })), isOpened && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      ref: this.colorPicker,
      className: "color-popover",
      id: "".concat(id, "-ChromePickerModal")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_2__["ChromePicker"], {
      color: value,
      onChange: this.handleColorChange,
      disableAlpha: true
    })));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(ColorInput, "propTypes", {
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ColorInput, "ColorInput", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/color_input.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/form_error.tsx":
/*!***********************************!*\
  !*** ./components/form_error.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormError; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



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
 // accepts either a single error or an array of errors

class FormError extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  render() {
    const {
      error = null,
      errors = [],
      iconClassName,
      margin,
      textClassName,
      type
    } = this.props;

    if (!error && errors.length === 0) {
      return null;
    } // look for the first truthy error to display


    let message = error;

    if (!message) {
      for (const err of errors) {
        if (err) {
          message = err;
        }
      }
    }

    if (!message) {
      return null;
    }

    if (type === 'modal') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "col-sm-12 has-error"
      }, message));
    }

    if (type === 'backstage') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "pull-left has-error"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "control-label"
      }, message));
    }

    if (margin) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form-group has-error"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "control-label"
      }, message));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-sm-12 ".concat(textClassName || 'has-error')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "fa ".concat(iconClassName || 'fa-exclamation-circle')
    }), " ", message));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(FormError, "propTypes", {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  textClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  iconClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node)
});

_defineProperty(FormError, "defaultProps", {
  error: null,
  errors: []
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormError, "FormError", "/home/huychu/Desktop/Project/UET2021I/mattermost/mattermost-webapp/components/form_error.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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

/***/ })

}]);
//# sourceMappingURL=2.d61945e5d3a38dca2f86.js.map