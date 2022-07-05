"use strict";(self.webpackChunkcalculatuindemnizacion_api_docs=self.webpackChunkcalculatuindemnizacion_api_docs||[]).push([[7918],{8043:function(e,t,a){a.r(t),a.d(t,{default:function(){return ie}});var n=a(7294),r=a(6010),l=a(1944),i=a(7524),c=a(5281),s=a(7462),o=a(5999),d=a(2244);function m(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(d.Z,(0,s.Z)({},t,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(d.Z,(0,s.Z)({},a,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var u=a(2263),v=a(9960),f=a(143),b=a(373),p=a(4477);var h={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){var t=h[e.versionMetadata.banner];return n.createElement(t,e)}function E(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(v.Z,{to:a,onClick:r},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function L(e){var t,a=e.className,l=e.versionMetadata,i=(0,u.Z)().siteConfig.title,s=(0,f.gA)({failfast:!0}).pluginId,o=(0,b.J)(s).savePreferredVersionName,d=(0,f.Jo)(s),m=d.latestDocSuggestion,v=d.latestVersionSuggestion,p=null!=m?m:(t=v).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(a,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:i,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(E,{versionLabel:v.label,to:p.path,onClick:function(){return o(v.name)}})))}function N(e){var t=e.className,a=(0,p.E)();return a.banner?n.createElement(L,{className:t,versionMetadata:a}):null}function Z(e){var t=e.className,a=(0,p.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function k(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function C(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:c.k.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(_,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(k,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var x=a(6114),H=a(1526),T="lastUpdated_vbeJ";function U(e){return n.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(H.Z,e)))}function y(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(x.Z,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",T)},(a||l)&&n.createElement(C,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function A(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,d=o.length>0,m=!!(a||l||s);return d||m?n.createElement("footer",{className:(0,r.Z)(c.k.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(U,{tags:o}),m&&n.createElement(y,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var w=a(9407),I=a(6043),M=a(3743),B=a(3366),O="tocCollapsibleButton_TO0P",V="tocCollapsibleButtonExpanded_MG3E",S=["collapsed"];function P(e){var t=e.collapsed,a=(0,B.Z)(e,S);return n.createElement("button",(0,s.Z)({type:"button"},a,{className:(0,r.Z)("clean-btn",O,!t&&V,a.className)}),n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var z="tocCollapsible_ETCw",R="tocCollapsibleContent_vkbj",D="tocCollapsibleExpanded_sAul";function j(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,i=e.maxHeadingLevel,c=(0,I.u)({initialState:!0}),s=c.collapsed,o=c.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(z,!s&&D,a)},n.createElement(P,{collapsed:s,onClick:o}),n.createElement(I.z,{lazy:!0,className:R,collapsed:s},n.createElement(M.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})))}var F=a(2503),q=a(8425),G=a(8596),J=a(4996);function Q(e){return n.createElement("svg",(0,s.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var W={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function X(e){var t=e.children,a=e.href,r="breadcrumbs__link";return e.isLast?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(v.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function Y(e){var t=e.children,a=e.active,l=e.index,i=e.addMicrodata;return n.createElement("li",(0,s.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function K(){var e=(0,J.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(v.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",W.breadcrumbsItemLink),href:e},n.createElement(Q,{className:W.breadcrumbHomeIcon})))}function $(){var e=(0,q.s1)(),t=(0,G.Ns)();return e?n.createElement("nav",{className:(0,r.Z)(c.k.docs.docBreadcrumbs,W.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(K,null),e.map((function(t,a){var r=a===e.length-1;return n.createElement(Y,{key:a,active:r,index:a,addMicrodata:!!t.href},n.createElement(X,{href:t.href,isLast:r},t.label))})))):null}var ee=a(3548),te="docItemContainer_Adtb",ae="docItemCol_GujU",ne="tocMobile_aoJ5";function re(e){var t,a=e.content,r=a.metadata,i=a.frontMatter,c=a.assets,s=i.keywords,o=r.description,d=r.title,m=null!=(t=c.image)?t:i.image;return n.createElement(l.d,{title:d,description:o,keywords:s,image:m})}function le(e){var t=e.content,a=t.metadata,l=t.frontMatter,s=l.hide_title,o=l.hide_table_of_contents,d=l.toc_min_heading_level,u=l.toc_max_heading_level,v=a.title,f=!s&&void 0===t.contentTitle,b=(0,i.i)(),p=!o&&t.toc&&t.toc.length>0,h=p&&("desktop"===b||"ssr"===b);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",!o&&ae)},n.createElement(N,null),n.createElement("div",{className:te},n.createElement("article",null,n.createElement($,null),n.createElement(Z,null),p&&n.createElement(j,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:u,className:(0,r.Z)(c.k.docs.docTocMobile,ne)}),n.createElement("div",{className:(0,r.Z)(c.k.docs.docMarkdown,"markdown")},f&&n.createElement("header",null,n.createElement(F.Z,{as:"h1"},v)),n.createElement(ee.Z,null,n.createElement(t,null))),n.createElement(A,e)),n.createElement(m,{previous:a.previous,next:a.next}))),h&&n.createElement("div",{className:"col col--3"},n.createElement(w.Z,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:u,className:c.k.docs.docTocDesktop})))}function ie(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(l.FG,{className:t},n.createElement(re,e),n.createElement(le,e))}},6114:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(5999),l=a(5281),i=a(7462),c=a(3366),s=a(6010),o="iconEdit_eYIM",d=["className"];function m(e){var t=e.className,a=(0,c.Z)(e,d);return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),l=a(9960);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,c=e.isNext;return n.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},9407:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),r=a(3366),l=a(7294),i=a(6010),c=a(3743),s="tableOfContents_bqdL",o=["className"];function d(e){var t=e.className,a=(0,r.Z)(e,o);return l.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},l.createElement(c.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7462),r=a(3366),l=a(7294),i=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,l=(0,r.Z)(e,i);a>=0?t[a].children.push(l):n.push(l)})),n}function s(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}var o=a(6668);function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function u(){var e=(0,l.useRef)(0),t=(0,o.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),a=u();(0,l.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),c=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),s=m(c,{anchorTopOffset:a.current}),o=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===o)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,a])}function f(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(f,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}var b=l.memo(f),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,a=e.className,i=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,f=void 0===u?void 0:u,h=e.minHeadingLevel,g=e.maxHeadingLevel,E=(0,r.Z)(e,p),L=(0,o.L)(),N=null!=h?h:L.tableOfContents.minHeadingLevel,Z=null!=g?g:L.tableOfContents.maxHeadingLevel,_=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,l.useMemo)((function(){return s({toc:c(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:N,maxHeadingLevel:Z});return v((0,l.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:N,maxHeadingLevel:Z}}),[m,f,N,Z])),l.createElement(b,(0,n.Z)({toc:_,className:i,linkClassName:m},E))}},3008:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),l=a(9960),i="tag_zVej",c="tagRegular_sFm0",s="tagWithCount_h2kH";function o(e){var t=e.permalink,a=e.label,o=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(i,o?s:c)},a,o&&n.createElement("span",null,o))}},1526:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),l=a(5999),i=a(3008),c="tags_jXut",s="tag_QGVx";function o(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(c,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{label:t,permalink:a}))}))))}},4477:function(e,t,a){a.d(t,{E:function(){return c},q:function(){return i}});var n=a(7294),r=a(9688),l=n.createContext(null);function i(e){var t=e.children,a=e.version;return n.createElement(l.Provider,{value:a},t)}function c(){var e=(0,n.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);