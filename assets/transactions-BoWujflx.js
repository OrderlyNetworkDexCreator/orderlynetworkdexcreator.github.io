import{a_ as l,aZ as s,aB as c,aJ as b}from"./components-DWSKb4h-.js";import"./index-BtJtt-kL.js";import"./i18n-fgUJB7wK.js";import"./languages-vppiBlCs.js";import"./i18nInstance-4f7Kr0BZ.js";import"./dijkstra-DQ7TgEK5.js";import"./browser-ponyfill-BMDBuBWt.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"07b7ca12ba0d2283a2567474bcec4fd2e0bda085"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="aed47beb-d265-4f75-8bc1-0978cc1dd8fa",e._sentryDebugIdIdentifier="sentry-dbid-aed47beb-d265-4f75-8bc1-0978cc1dd8fa")}catch{}})();const u=l`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var p=function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(d=e[a])&&(i=(r<3?d(i):r>3?d(t,n,i):d(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let f=class extends s{render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};f.styles=u;f=p([b("w3m-transactions-view")],f);export{f as W3mTransactionsView};
