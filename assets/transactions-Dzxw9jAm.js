import{a_ as l,aZ as s,aB as c,aJ as u}from"./components-CG1RtVbb.js";import"./index-CX50FzN7.js";import"./preload-helper-B8XKTbC2.js";import"./dayjs.min-BRrKAluj.js";import"./dijkstra-C7TCkPn8.js";import"./browser-ponyfill-DYPLiyHV.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"2778c5828739799f4fdbf80f93ddc59dfb2850d9"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f3fe423f-014a-4091-90ac-6d4a249883b0",e._sentryDebugIdIdentifier="sentry-dbid-f3fe423f-014a-4091-90ac-6d4a249883b0")}catch{}})();const p=l`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var b=function(e,t,n,o){var f=arguments.length,i=f<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(f<3?r(i):f>3?r(t,n,i):r(t,n))||i);return f>3&&i&&Object.defineProperty(t,n,i),i};let d=class extends s{render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};d.styles=p;d=b([u("w3m-transactions-view")],d);export{d as W3mTransactionsView};
