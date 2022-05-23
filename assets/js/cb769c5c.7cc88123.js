"use strict";(self.webpackChunkcalculatuindemnizacion_api_docs=self.webpackChunkcalculatuindemnizacion_api_docs||[]).push([[9235],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},395:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},s="Autenticaci\xf3n",l={unversionedId:"auth",id:"auth",title:"Autenticaci\xf3n",description:"Para utilizar la API como desarrollador, se necesita un _access_token_ con el que realizar las peticiones.",source:"@site/docs/auth.md",sourceDirName:".",slug:"/auth",permalink:"/auth",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/"},next:{title:"Mis datos",permalink:"/general/me"}},p={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"autenticaci\xf3n"},"Autenticaci\xf3n"),(0,o.kt)("p",null,"Para utilizar la API como desarrollador, se necesita un ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"access_token"))," con el que realizar las peticiones. "),(0,o.kt)("p",null,"Cada ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"access_token"))," proporciona acceso a uno o varios m\xf3dulos de la API."),(0,o.kt)("p",null,"El ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"access_token"))," se debe a\xf1adir a las peticiones con la siguiente cabecera: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Authorization: Bearer {access_token}\n")),(0,o.kt)("p",null,"Por ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://calculatuindemnizacion.es/api/me' \\\n--header 'Authorization: Bearer {access_token}'\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Nota")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"En la llamada anterior se debe sustituir ",(0,o.kt)("inlineCode",{parentName:"p"},"{access_token}")," por el valor del ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"access_token"))," real"))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Alerta")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Los ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"access_token"))," son diferentes para los entornos de ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"staging"))," y ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"production"))))))}d.isMDXComponent=!0}}]);