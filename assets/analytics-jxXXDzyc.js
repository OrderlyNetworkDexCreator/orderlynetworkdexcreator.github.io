import{a as r}from"./utils-B7qUQL_A.js";import{r as t}from"./adminKeyAuth-BhEvpiXx.js";import{a as o}from"./campaigns-VOdBltX2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"2778c5828739799f4fdbf80f93ddc59dfb2850d9"};var d=new e.Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="6e67b05b-53b5-4d24-85b0-fd95535587c6",e._sentryDebugIdIdentifier="sentry-dbid-6e67b05b-53b5-4d24-85b0-fd95535587c6")}catch{}})();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],f=r("database",a);function c(){const e=o(),d=t({skipWalletCheck:!0});return(e==null?void 0:e.role)==="ambassador"?"ambassador":(e==null?void 0:e.brokerId)||(d==null?void 0:d.brokerId)||typeof window<"u"&&window.localStorage.getItem("current_user_broker_id")||void 0}export{f as D,c as g};
