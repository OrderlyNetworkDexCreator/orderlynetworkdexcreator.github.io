import{e as s,r as f,x as p}from"./globalDisconnect-AZ1ZUw2f.js";import{c as a}from"./if-defined-B9q11RMQ.js";import"./index-DzeuGQEJ.js";import"./index-gtzDq4NN.js";import"./index-BftLqECp.js";import"./index-CJskuQ6-.js";import"./dayjs.min-DsMxAas2.js";import"./index-DUvbfBDj.js";import"./index-Cwgq5jiW.js";import"./index-DPDbl4MH.js";import"./index-DMEwS98X.js";const d=s`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,e,i,r){var n=arguments.length,t=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var c=o.length-1;c>=0;c--)(l=o[c])&&(t=(n<3?l(t):n>3?l(e,i,t):l(e,i))||t);return n>3&&t&&Object.defineProperty(e,i,t),t};let m=class extends f{render(){return p`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};m.styles=d;m=u([a("w3m-transactions-view")],m);export{m as W3mTransactionsView};
