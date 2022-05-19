"use strict";(self.webpackChunkcalculatuindemnizacion_api_docs=self.webpackChunkcalculatuindemnizacion_api_docs||[]).push([[576],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5458:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={sidebar_position:2},s="Estado de la reclamaci\xf3n",p={unversionedId:"whatsapp/status",id:"whatsapp/status",isDocsHomePage:!1,title:"Estado de la reclamaci\xf3n",description:"Para un cliente retorna el estado en que est\xe1 la reclamaci\xf3n",source:"@site/docs/whatsapp/status.md",sourceDirName:"whatsapp",slug:"/whatsapp/status",permalink:"/whatsapp/status",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Validar cliente",permalink:"/whatsapp/validate"},next:{title:"Guardar documentos",permalink:"/whatsapp/documents"}},d=[{value:"URL",id:"url",children:[{value:"Par\xe1metros URL",id:"par\xe1metros-url",children:[]},{value:"Ejemplo",id:"ejemplo",children:[]}]},{value:"Respuesta correcta",id:"respuesta-correcta",children:[{value:"C\xf3digos de estado",id:"status-codes",children:[]}]},{value:"Respuesta incorrecta",id:"respuesta-incorrecta",children:[]}],c={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"estado-de-la-reclamaci\xf3n"},"Estado de la reclamaci\xf3n"),(0,i.kt)("p",null,"Para un cliente retorna el estado en que est\xe1 la reclamaci\xf3n"),(0,i.kt)("h2",{id:"url"},"URL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /whatsapp/clients/{id}/status\n")),(0,i.kt)("h3",{id:"par\xe1metros-url"},"Par\xe1metros URL"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipo"),(0,i.kt)("th",{parentName:"tr",align:null},"Comentarios"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Identificador del usuario. Puede contener n\xfameros y gui\xf3n medio. Obligatorio")))),(0,i.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://calculatuindemnizacion.es/api/whatsapp/clients/{id}/status'  \\\n--header 'Authorization: Bearer {access_token}'\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Nota")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"En la llamada anterior se debe sustituir ",(0,i.kt)("inlineCode",{parentName:"p"},"{access_token}")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"{id}")," por los valores del ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"access_token")),", e ",(0,i.kt)("strong",{parentName:"p"},"id")," real"))),(0,i.kt)("h2",{id:"respuesta-correcta"},"Respuesta correcta"),(0,i.kt)("p",null,"La respuesta retorna los siguientes valores:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipo"),(0,i.kt)("th",{parentName:"tr",align:null},"Comentarios"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"C\xf3digo de estado. Puede ser vac\xedo o alg\xfan valor de entre los ",(0,i.kt)("a",{parentName:"td",href:"#status-codes"},"c\xf3digos de estado")," disponibles.")))),(0,i.kt)("h3",{id:"status-codes"},"C\xf3digos de estado"),(0,i.kt)("p",null,"Los c\xf3digos disponibles son ",(0,i.kt)("inlineCode",{parentName:"p"},"RENUNCIA"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DOCUMENTACION"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SEGUIMIENTO_MEDICO"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVICIOS_MEDICOS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"NEGOCIANDO_CIA"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PAGO_CIA"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RECOBRO"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SIN_CONFORMIDAD"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CIERRE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"VENIA"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MONITORIO"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"FORENSE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"JUDICIAL")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Aviso")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"El c\xf3digo puede tener valor ",(0,i.kt)("strong",{parentName:"p"},"vac\xedo")," ",(0,i.kt)("inlineCode",{parentName:"p"},'""')," si el cliente no est\xe1 en ninguno de los estados disponibles"))),(0,i.kt)("p",null,"Ejemplo (devuelve un c\xf3digo disponible):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",200:!0,className:"language-json",metastring:'title="Status: 200 Ok"',title:'"Status:','Ok"':!0},'{\n    "status": "RENUNCIA"\n}\n')),(0,i.kt)("p",null,"Ejemplo (devuelve vac\xedo):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",200:!0,className:"language-json",metastring:'title="Status: 200 Ok"',title:'"Status:','Ok"':!0},'{\n    "status": ""\n}\n')),(0,i.kt)("h2",{id:"respuesta-incorrecta"},"Respuesta incorrecta"),(0,i.kt)("p",null,"Por ejemplo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",404:!0,className:"language-json",metastring:'title="Status: 404 Not found"',title:'"Status:',Not:!0,'found"':!0},'{\n    "message": "Client not found"\n}\n')))}u.isMDXComponent=!0}}]);