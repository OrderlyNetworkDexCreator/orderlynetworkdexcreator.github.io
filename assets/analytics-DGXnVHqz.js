import{d as a}from"./utils-BnGykKSG.js";import{t as r}from"./adminKeyAuth-Iy-Oh0tg.js";import{a as t}from"./campaigns-CH3kU4K-.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"07b7ca12ba0d2283a2567474bcec4fd2e0bda085"};var d=new e.Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="e2e88854-7c04-4c3b-880e-f9cceeada377",e._sentryDebugIdIdentifier="sentry-dbid-e2e88854-7c04-4c3b-880e-f9cceeada377")}catch{}})();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],b=a("database",o);function f(){const e=t(),d=r({skipWalletCheck:!0});return(e==null?void 0:e.role)==="ambassador"?"ambassador":(e==null?void 0:e.brokerId)||(d==null?void 0:d.brokerId)||typeof window<"u"&&window.localStorage.getItem("current_user_broker_id")||void 0}export{b as D,f as g};
