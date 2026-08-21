import{a as r}from"./utils-NOPGxEL5.js";import{r as d}from"./adminKeyAuth-DTFvWKie.js";import{g as t}from"./branding-shared-KP5ELB0R.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"d48aad66738a791ef83dfa7aaa14e8a9f6f3fdc2"};var a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="b3517baa-6553-4b3b-a592-cfa4287f935c",e._sentryDebugIdIdentifier="sentry-dbid-b3517baa-6553-4b3b-a592-cfa4287f935c")}catch{}})();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],b=r("database",o);function c(){const e=t(),a=d({skipWalletCheck:!0});return(e==null?void 0:e.role)==="ambassador"?"ambassador":(e==null?void 0:e.brokerId)||(a==null?void 0:a.brokerId)||typeof window<"u"&&window.localStorage.getItem("current_user_broker_id")||void 0}export{b as D,c as g};
