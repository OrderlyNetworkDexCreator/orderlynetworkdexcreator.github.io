import{e as f,f as m,x as p}from"./AuthContext-B1nxM2l3.js";import{c as a}from"./index-DDMhhpQg.js";import"./index-Dy1ARZQU.js";import"./index-gtzDq4NN.js";import"./preload-helper-ClGc2Nmp.js";import"./index-BbE1YwbE.js";import"./dayjs.min-DsMxAas2.js";import"./index-C2yc-CBA.js";import"./index-Bor49Tpf.js";import"./index-B2qy17Ox.js";import"./index-BEWemfiM.js";const d=f`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,e,i,r){var n=arguments.length,t=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var s=o.length-1;s>=0;s--)(l=o[s])&&(t=(n<3?l(t):n>3?l(e,i,t):l(e,i))||t);return n>3&&t&&Object.defineProperty(e,i,t),t};let c=class extends m{render(){return p`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=d;c=u([a("w3m-transactions-view")],c);export{c as W3mTransactionsView};
