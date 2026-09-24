import{b2 as l,b1 as s,aE as c,aM as b}from"./components-BPyHaav6.js";import"./index-DVmBE5Ad.js";import"./preload-helper-DhdKVgcq.js";import"./dayjs.min-9GguTl5N.js";import"./dijkstra-D3pmIIKo.js";import"./browser-ponyfill-nuzDz0cy.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"f23328cbf1bd8eb6c62973cc0d709e64bde7fe76"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e6d3d907-caf8-4d50-a04a-62b5daaa93ba",e._sentryDebugIdIdentifier="sentry-dbid-e6d3d907-caf8-4d50-a04a-62b5daaa93ba")}catch{}})();const u=l`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var p=function(e,t,n,o){var a=arguments.length,i=a<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i};let f=class extends s{render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};f.styles=u;f=p([b("w3m-transactions-view")],f);export{f as W3mTransactionsView};
