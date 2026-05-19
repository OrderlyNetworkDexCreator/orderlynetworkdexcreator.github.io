import{v as s,x as c,z as f}from"./localizedRoute-BXh1iEn7.js";import{c as a}from"./if-defined-BR1qeihA.js";import"./index-Bczr0DW5.js";import"./index-CW68vc4o.js";import"./clsx-BV2PpTxx.js";import"./i18n-C4pTbKg_.js";import"./jsx-runtime-D_zvdyIk.js";import"./utils-Jcu59Fpt.js";import"./index-DoZFbk36.js";import"./components-fMiyrNvb.js";import"./index-D8yndUeO.js";import"./dayjs.min-DgYdusO-.js";import"./index-DyT72wAx.js";import"./index-fZ1zU2Hn.js";import"./index-C-BzJLcb.js";import"./index-ChTehTMf.js";const d=s`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,i,e,r){var n=arguments.length,t=n<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,e):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,i,e,r);else for(var m=o.length-1;m>=0;m--)(l=o[m])&&(t=(n<3?l(t):n>3?l(i,e,t):l(i,e))||t);return n>3&&t&&Object.defineProperty(i,e,t),t};let p=class extends c{render(){return f`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};p.styles=d;p=u([a("w3m-transactions-view")],p);export{p as W3mTransactionsView};
