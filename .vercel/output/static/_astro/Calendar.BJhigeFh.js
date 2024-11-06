import{r as c}from"./index.DhYZZe0J.js";var a={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=c,p=Symbol.for("react.element"),m=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,h=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function u(r,e,n){var t,o={},s=null,d=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(d=e.ref);for(t in e)f.call(e,t)&&!_.hasOwnProperty(t)&&(o[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:p,type:r,key:s,ref:d,props:o,_owner:h.current}}l.Fragment=m;l.jsx=u;l.jsxs=u;a.exports=l;var g=a.exports;const E=()=>{const r=c.useRef(null);return c.useEffect(()=>{const e=document.createElement("script");e.src="https://calendar.google.com/calendar/scheduling-button-script.js",e.async=!0;const n=document.createElement("link");return n.href="https://calendar.google.com/calendar/scheduling-button-script.css",n.rel="stylesheet",document.head.appendChild(n),document.body.appendChild(e),e.onload=()=>{window.calendar&&window.calendar.schedulingButton&&window.calendar.schedulingButton.load({url:"https://calendar.google.com/calendar/appointments/schedules/AcZssZ1RgtpzhzWVS8f_AU3_nD-4ukDG6sEaT_my1Srr3Kt9ubj8b8dlBO41hdYmWEgJXCfgBYgRYgZa?gv=true",color:"#039BE5",label:"Book an appointment",target:r.current})},()=>{document.head.removeChild(n),document.body.removeChild(e)}},[]),g.jsx("div",{ref:r})};export{E as default};
