import{a as r}from"./utils-CVj-VFMB.js";import{r as t}from"./adminKeyAuth-BQSdA8hv.js";import{g as o}from"./branding-shared-0o3VgsWD.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"f23328cbf1bd8eb6c62973cc0d709e64bde7fe76"};var d=new e.Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="14fe2184-fe88-4cb0-a6cf-2731dcd7ee54",e._sentryDebugIdIdentifier="sentry-dbid-14fe2184-fe88-4cb0-a6cf-2731dcd7ee54")}catch{}})();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],f=r("database",a);function b(){const e=o(),d=t({skipWalletCheck:!0});return(e==null?void 0:e.role)==="ambassador"?"ambassador":(e==null?void 0:e.brokerId)||(d==null?void 0:d.brokerId)||typeof window<"u"&&window.localStorage.getItem("current_user_broker_id")||void 0}export{f as D,b as g};
