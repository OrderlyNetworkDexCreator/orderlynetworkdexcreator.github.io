import{r as n,j as e}from"./index-gtzDq4NN.js";/* empty css               */import{u as h,a as x,_ as f,M as y,b as S,S as j}from"./components-CyfABTTb.js";import{b as w,c as g,O as k}from"./index-B6zKOWfM.js";import"./index-Dvs6MNyz.js";/**
 * @remix-run/react v2.16.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:r,...l}){let{isSpaMode:c}=h(),o=w(),u=g();x({getKey:r,storageKey:a});let m=n.useMemo(()=>{if(!r)return null;let t=r(o,u);return t!==o.key?t:null},[]);if(c)return null;let p=((t,d)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let i=JSON.parse(sessionStorage.getItem(t)||"{}")[d||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(s){console.error(s),sessionStorage.removeItem(t)}}).toString();return n.createElement("script",f({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${p})(${JSON.stringify(a)}, ${JSON.stringify(m)})`}}))}function _(){return e.jsxs("html",{lang:"en",className:"h-full",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("link",{rel:"icon",type:"image/webp",href:"/favicon.svg"}),e.jsx("title",{children:"Orderly One"}),e.jsx(y,{}),e.jsx(S,{})]}),e.jsxs("body",{className:"h-full",children:[e.jsx(M,{}),e.jsx(j,{}),e.jsx(k,{})]})]})}export{_ as default};
