import{f as m,r as s,x as p}from"./AuthContext-zt4_IK6X.js";import{c as a}from"./if-defined-6iIQC1eS.js";import"./index-BnMnwO-C.js";import"./index-gtzDq4NN.js";import"./index-BftLqECp.js";import"./index-rtrL6hKr.js";import"./dayjs.min-DsMxAas2.js";import"./index-BvTiO5JS.js";import"./index-CJ86gZ09.js";import"./index-CDYoNgYZ.js";import"./index-DJZUN3UK.js";const d=m`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,e,i,r){var n=arguments.length,t=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var c=o.length-1;c>=0;c--)(l=o[c])&&(t=(n<3?l(t):n>3?l(e,i,t):l(e,i))||t);return n>3&&t&&Object.defineProperty(e,i,t),t};let f=class extends s{render(){return p`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};f.styles=d;f=u([a("w3m-transactions-view")],f);export{f as W3mTransactionsView};
