import{k as s,r as f,x as p}from"./globalDisconnect-DVh27luL.js";import{c as a}from"./if-defined-DyVYnqoa.js";import"./index-f9F5Ah8U.js";import"./index-gtzDq4NN.js";import"./clsx-B-dksMZM.js";import"./index-D8-sEWpi.js";import"./dayjs.min-DsMxAas2.js";import"./index-LePeA0n3.js";import"./index-ojxYPk-G.js";import"./index-DKYnegOK.js";import"./index-BMkDagzE.js";const d=s`
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
