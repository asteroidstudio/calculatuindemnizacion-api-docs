"use strict";(self.webpackChunkcalculatuindemnizacion_api_docs=self.webpackChunkcalculatuindemnizacion_api_docs||[]).push([[671],{9881:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),s=["components"],i={sidebar_position:1,slug:"/"},l="Introducci\xf3n",c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introducci\xf3n",description:"La API de calculatuindemnizaci\xf3n.es es un servicio web restful que permite a los desarrolladores acceder a los datos y las funcionalidades de la plataforma.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/calculatuindemnizacion-api-docs/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Autenticaci\xf3n",permalink:"/calculatuindemnizacion-api-docs/auth"}},u=[{value:"Entornos",id:"entornos",children:[]},{value:"Estructura",id:"estructura",children:[]}],p={toc:u};function d(e){var a=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,o.kt)("p",null,"La API de calculatuindemnizaci\xf3n.es es un ",(0,o.kt)("strong",{parentName:"p"},"servicio web restful")," que permite a los desarrolladores acceder a los datos y las funcionalidades de la plataforma. "),(0,o.kt)("h2",{id:"entornos"},"Entornos"),(0,o.kt)("p",null,"Existen 2 entornos en la API: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"staging"))," y ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"production")),". El entorno ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"staging"))," se usa durante la fase de desarrollo y testeo. Es tambi\xe9n donde se probar\xe1n las nuevas caracter\xedsticas de la API. El entorno ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"production"))," es el que se usa en fase de producci\xf3n. "),(0,o.kt)("p",null,"Cada entorno tiene su propia URL base para acceder a la API:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"staging")),": ",(0,o.kt)("a",{parentName:"li",href:"https://staging.calculatuindemnizacion.es/api"},"https://staging.calculatuindemnizacion.es/api")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"production")),": ",(0,o.kt)("a",{parentName:"li",href:"https://calculatuindemnizacion.es/api"},"https://calculatuindemnizacion.es/api"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Nota")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"En los ejemplo utilizaremos la URL base de ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"production")),", pero debe ser reemplazada por la del entorno que se quiera usar."))),(0,o.kt)("h2",{id:"estructura"},"Estructura"),(0,o.kt)("p",null,"La API se estructura en varios m\xf3dulos a los que pueden tener acceso los diferentes desarrolladores. "),(0,o.kt)("p",null,"Las acciones de un m\xf3dulo tiene su propia URL, a las que se accede haciendo una petici\xf3n ",(0,o.kt)("strong",{parentName:"p"},"https")," a la URL base del entorno al que queremos acceder, seguido de la URL de dicha acci\xf3n. "),(0,o.kt)("p",null,"La respuesta de la API es en formato ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"JSON")),". "),(0,o.kt)("p",null,"Si la respuesta de la petici\xf3n es correcta se devolver\xe1 un ",(0,o.kt)("a",{parentName:"p",href:"https://httpstatuses.com/"},"c\xf3digo de estado HTTP")," ",(0,o.kt)("strong",{parentName:"p"},"200"),". "),(0,o.kt)("p",null,"Si la respuesta es incorrecta se devolver\xe1 un ",(0,o.kt)("a",{parentName:"p",href:"https://httpstatuses.com/"},"c\xf3digo de estado HTTP")," ",(0,o.kt)("strong",{parentName:"p"},"4xx"),", dependiendo del error. En el campo ",(0,o.kt)("strong",{parentName:"p"},"message")," de la respuesta, se proporciona m\xe1s informaci\xf3n acerca del error. "),(0,o.kt)("p",null,"Por ejemplo, accediendo a una acci\xf3n inexistente:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://calculatuindemnizacion.es/api/hello'\n")),(0,o.kt)("p",null,"Se obtiene como respuesta"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",404:!0,className:"language-json",metastring:'title="Status: 404 Not Found"',title:'"Status:',Not:!0,'Found"':!0},'{\n    "message": "Not Found"\n}\n')))}d.isMDXComponent=!0}}]);