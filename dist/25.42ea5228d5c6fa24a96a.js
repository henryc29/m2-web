(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{2319:function(e,t,a){"use strict";a.r(t);var r=a(264),n=a(7),s=a(1149),o=(a(66),a(183),a(106),a(33),a(515),a(125)),i=a.n(o),c=a(5),l=a.n(c),p=a(1129),u=a(280),m=a(1156),d=a(93),h=a(1134);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class w extends l.a.PureComponent{static get propTypes(){return{location:i.a.object.isRequired,actions:i.a.shape({getOAuthAppInfo:i.a.func.isRequired,allowOAuth2:i.a.func.isRequired}).isRequired}}constructor(e){super(e),b(this,"handleAllow",()=>{const e=new URLSearchParams(this.props.location.search),t={responseType:e.get("response_type"),clientId:e.get("client_id"),redirectUri:e.get("redirect_uri"),state:e.get("state"),scope:e.get("store")};this.props.actions.allowOAuth2(t).then(({data:e,error:t})=>{e&&e.redirect?window.location.href=e.redirect:t&&this.setState({error:t.message})})}),b(this,"handleDeny",()=>{const e=new URLSearchParams(this.props.location.search).get("redirect_uri");e.startsWith("https://")||e.startsWith("http://")?window.location.href=e+"?error=access_denied":d.a.replace("/error")}),this.state={}}componentDidMount(){const e=document.getElementById("antiClickjack");e&&e.parentNode.removeChild(e);const t=new URLSearchParams(this.props.location.search).get("client_id");/^[a-z0-9]+$/.test(t)&&this.props.actions.getOAuthAppInfo(t).then(({data:e})=>{e&&this.setState({app:e})})}render(){const e=this.state.app;if(!e)return null;let t,a;return t=e.icon_url?e.icon_url:u.a,this.state.error&&(a=l.a.createElement("div",{className:"prompt__error form-group"},l.a.createElement(m.a,{error:this.state.error}))),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"prompt"},l.a.createElement("div",{className:"prompt__heading"},l.a.createElement("div",{className:"prompt__app-icon"},l.a.createElement("img",{alt:"prompt icon",src:t,width:"50",height:"50"})),l.a.createElement("div",{className:"text"},l.a.createElement(h.b,{id:"authorize.title",defaultMessage:"Authorize **{appName}** to Connect to Your **Mattermost** User Account",values:{appName:e.name}}))),l.a.createElement("p",null,l.a.createElement(h.b,{id:"authorize.app",defaultMessage:"The app **{appName}** would like the ability to access and modify your basic information.",values:{appName:e.name}})),l.a.createElement("h2",{className:"prompt__allow"},l.a.createElement(h.b,{id:"authorize.access",defaultMessage:"Allow **{appName}** access?",values:{appName:e.name}})),l.a.createElement("div",{className:"prompt__buttons"},l.a.createElement("button",{type:"submit",className:"btn btn-link authorize-btn",onClick:this.handleDeny},l.a.createElement(p.a,{id:"authorize.deny",defaultMessage:"Deny"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary authorize-btn",onClick:this.handleAllow},l.a.createElement(p.a,{id:"authorize.allow",defaultMessage:"Allow"}))),a))}}t.default=Object(r.connect)(null,(function(e){return{actions:Object(n.bindActionCreators)({getOAuthAppInfo:s.p,allowOAuth2:s.c},e)}}))(w)}}]);
//# sourceMappingURL=25.42ea5228d5c6fa24a96a.js.map