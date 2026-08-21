import{a_ as l,aZ as s,aB as c,aJ as u}from"./components-wyVIVVNd.js";import"./index-CXshNW0Q.js";import"./preload-helper-CXGgKzxI.js";import"./dayjs.min-Cj1g8lHF.js";import"./dijkstra-BAW0x3xD.js";import"./browser-ponyfill-2ua6lWTW.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"d48aad66738a791ef83dfa7aaa14e8a9f6f3fdc2"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="320af537-d657-4a22-ad44-6c86e28f06a0",e._sentryDebugIdIdentifier="sentry-dbid-320af537-d657-4a22-ad44-6c86e28f06a0")}catch{}})();const p=l`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var w=function(e,t,n,a){var o=arguments.length,i=o<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,n):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,a);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(i=(o<3?r(i):o>3?r(t,n,i):r(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let d=class extends s{render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};d.styles=p;d=w([u("w3m-transactions-view")],d);export{d as W3mTransactionsView};
