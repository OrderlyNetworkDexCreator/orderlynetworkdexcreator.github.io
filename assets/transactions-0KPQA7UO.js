import{v as s,x as c,z as f}from"./localizedRoute-DilH2lxI.js";import{c as a}from"./if-defined-B66pjuvB.js";import"./index-eCh-inki.js";import"./index-CW68vc4o.js";import"./clsx-DLEpvvu_.js";import"./i18n-I9Sn16vh.js";import"./jsx-runtime-D_zvdyIk.js";import"./utils-BE1KBYu-.js";import"./index-DoZFbk36.js";import"./components-fMiyrNvb.js";import"./index-B3k68zlO.js";import"./dayjs.min-DgYdusO-.js";import"./index-DhMHh3kH.js";import"./index-DBlYAJDD.js";import"./index-BdbsM4I0.js";import"./index-CLmIyr5r.js";const d=s`
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
