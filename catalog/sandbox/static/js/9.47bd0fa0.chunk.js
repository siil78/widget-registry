(this["webpackJsonp@siil78/widget-registry"]=this["webpackJsonp@siil78/widget-registry"]||[]).push([[9],{133:function(e,t,a){"use strict";a.r(t);var s=a(3),i=a(47),n=a(0),r=a.n(n),c=a(46),l=a(45),o=a(41),d=a(59),b=a(92),j=a(118),u=a(126),h=a(127),g=a(134),x=a(131),p=a(130),m=a(73),O=a(79),y=a(80),f=a(83),w=a(71),v=a(76),S=a(78),k=a(82),N=a(77),_=a(72),C=a(74),T=a(51),W=a(75),A=a(15),P=a(129),M=a(115),D=function(e){var t=e.rows,a=e.headers,i=e.descriptions,c=Object(n.useState)(t),l=Object(d.a)(c,2),D=l[0],E=l[1],U=Object(n.useState)(""),L=Object(d.a)(U,2),J=L[0],F=L[1],H=new b.a(t,{keys:["name","owner.name","status"]});function z(e){switch(e.id.split(":")[1]){case"owner":return"object"===typeof e.value?Object(s.jsxs)(j.a,{href:"mailto:".concat(e.value.email),children:[Object(s.jsx)(P.a,{style:{verticalAlign:"middle"}})," ",e.value.name]}):null;case"translations":return e.value?Object(s.jsx)(u.a,{className:"bx--list__langcodes",children:e.value.map((function(e){return Object(s.jsx)(h.a,{children:Object(s.jsx)(g.a,{type:"inline",children:e})},"item-".concat(e))}))}):null;case"websegments":return e.value?Object(s.jsx)(u.a,{className:"bx--list__websegments",children:e.value.map((function(e,t){return Object(s.jsx)(h.a,{children:Object(s.jsx)(g.a,{type:"inline",children:e})},"ws-".concat(t))}))}):null;case"status":return e.value?Object(s.jsx)(g.a,{type:"inline",className:"status--".concat(e.value),children:e.value}):null;case"links":return e.value?Object(s.jsx)(x.a,{id:"default",label:"- Please select -",items:e.value,itemToString:function(e){return e?e.text:""},onChange:function(e){var t=e.selectedItem.id;window.location.href=t}}):null;default:return e.value}}return Object(s.jsx)(p.a,{rows:J?D:t,headers:a,render:function(e){var t=e.rows,a=e.headers,n=e.getHeaderProps,c=e.getRowProps,l=e.getTableProps;return Object(s.jsxs)(m.a,{children:[Object(s.jsx)(O.a,{"aria-label":"data table toolbar",children:Object(s.jsx)(y.a,{children:Object(s.jsx)(f.a,{onChange:function(e){F(e.target.value),E(H.search(e.target.value).map((function(e){return e.item})))}})})}),Object(s.jsxs)(w.a,Object(o.a)(Object(o.a)({},l()),{},{children:[Object(s.jsx)(v.a,{children:Object(s.jsxs)(S.a,{children:[Object(s.jsx)(k.a,{}),a.map((function(e){return Object(s.jsx)(N.a,Object(o.a)(Object(o.a)({},n({header:e,isSortable:e.isSortable})),{},{children:e.header}),"header-".concat(e.key))}))]})}),Object(s.jsx)(_.a,{children:t.map((function(e){var t="".concat(c({row:e}).key);return Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsx)(C.a,Object(o.a)(Object(o.a)({},c({row:e})),{},{children:e.cells.map((function(e){return Object(s.jsx)(T.a,{className:"bx--table-cell__".concat(e.info.header),children:z(e)},e.id)}))})),Object(s.jsxs)(W.a,{colSpan:a.length+1,children:[Object(s.jsx)("h6",{children:"Description"}),Object(s.jsx)("div",{children:i[t]}),Object(s.jsx)("div",{className:"bx--expandable-row--ctas",children:Object(s.jsxs)(A.b,{to:"/widget-type/".concat(t),className:"bx--btn bx--btn--tertiary",children:["More details ",Object(s.jsx)(M.b,{className:"bx--btn__icon"})]})})]})]},e.id)}))})]}))]})}})},E=a(124),U=a(53),L=a(116),J=a(117),F=function(){var e=U.reduce((function(e,t){var a=t.shortcode,s=t.description;return Object.assign(e,Object(i.a)({},a,s))}),{}),t=U.map((function(e){var t;return{id:e.shortcode,name:e.title,description:e.description,version:e.version,status:null!==(t=e.status)&&void 0!==t?t:"",createdAt:e.createdAt?new Date(e.createdAt).toDateString():null,updatedAt:e.updatedAt?new Date(e.updatedAt).toDateString():null,owner:e.owner,translations:e.availableTranslations||null,websegments:e.webSegmentPaths||null,links:[{text:"Demo",id:"https://pages.".concat(e.repositoryUrl.substr(8))},{text:"Repository",id:e.repositoryUrl}],details:Object(s.jsx)(A.b,{to:"/widget-type/".concat(e.shortcode),children:Object(s.jsx)(E.a,{})})}})),a=function(e){return[{key:"name",header:"Name",isSortable:!0},{key:"version",header:"Version",isSortable:!0},{key:"status",header:"Status",isSortable:!0},{key:"createdAt",header:"Created",isSortable:!0},{key:"updatedAt",header:"Modified",isSortable:!0},{key:"translations",header:"Translations",isSortable:!1},{key:"owner",header:"Owner",isSortable:!0},{key:"websegments",header:"Web Segments",isSortable:!1},{key:"links",header:"Links",isSortable:!1},{key:"details",header:"",isSortable:!1}].filter((function(t){return e.reduce((function(e,a){return e||!!a[t.key]}),!1)}))}(t);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(c.a,{}),Object(s.jsxs)("div",{className:"bx--grid bx--grid--full-width landing-page",children:[Object(s.jsx)("div",{className:"bx--row landing-page__banner",children:Object(s.jsxs)("div",{className:"bx--col-lg-16",children:[Object(s.jsxs)(L.a,{noTrailingSlash:!0,children:[Object(s.jsx)(J.a,{href:"/",children:"Home"}),Object(s.jsx)(J.a,{isCurrentPage:!0,href:"/",children:"Widget types"})]}),Object(s.jsx)("h1",{className:"landing-page__heading",children:"Widgets types"}),Object(s.jsx)("div",{children:"The collection of available widget types in the widget repository. Widget types in the repository are available in the CMS integrations without any additional effort."})]})}),Object(s.jsx)("div",{className:"bx--row",children:Object(s.jsx)("div",{className:"bx--col-lg-16",children:Object(s.jsx)(D,{variant:"dark",headers:a,rows:t,descriptions:e})})}),Object(s.jsx)(l.a,{})]})]})};t.default=F},45:function(e,t,a){"use strict";var s=a(3);a(0);var i=function(e){var t=e.className,a=e.children,i=e.heading;return Object(s.jsxs)("section",{className:"bx--row ".concat(t," info-section"),children:[Object(s.jsx)("div",{className:"bx--col-md-8 bx--col-lg-4 bx--col-xlg-3",children:Object(s.jsx)("h3",{className:"info-section__heading",children:i})}),a]})},n=function(e){var t=function(e){var t=e.split(" "),a=t.pop();return[t.join(" "),a]}(e.heading);return Object(s.jsxs)("article",{className:"info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1",children:[Object(s.jsxs)("h4",{className:"info-card__heading",children:["".concat(t[0]," "),Object(s.jsx)("strong",{children:t[1]})]}),Object(s.jsx)("p",{className:"info-card__body",children:e.body}),e.icon]})},r=a(114),c=a(115),l=a(106),o=function(){return Object(s.jsxs)(i,{heading:"The Principles",className:"landing-page__r3",children:[Object(s.jsx)(n,{heading:"Widgets are Configurable",body:'Build once and embed many times. Configure your widgets when embedding to leverage the same widget in multiple situations. "Tweak the widget knobs and stamp".',icon:Object(s.jsx)(r.d,{})}),Object(s.jsx)(n,{heading:"Widgets are Modular",body:"Widgets are designed to work seamlessly with each other in any digital experience. Use them in a website, or an application, as your digital building blocks.",icon:Object(s.jsx)(c.a,{})}),Object(s.jsx)(n,{heading:"Widgets are Consistent",body:"Weather your organization uses a CMS, static HTML, or any other tech widgets stay the same. Feel free to re-platform while keeping your widgets intact. Leverage the CMS integrations for a better editorial experience.",icon:Object(s.jsx)(l.c,{})})]})};t.a=o},46:function(e,t,a){"use strict";var s=a(3),i=(a(0),a(15)),n=a(101),r=a(102),c=a(103),l=a(104),o=a(107),d=a(108),b=a(109),j=a(110),u=a(111),h=a(112),g=a(113),x=function(){return Object(s.jsx)(n.a,{render:function(e){var t=e.isSideNavExpanded,a=e.onClickSideNavExpand;return Object(s.jsxs)(r.a,{"aria-label":"Widget Catalog",children:[Object(s.jsx)(c.a,{}),Object(s.jsx)(l.a,{"aria-label":"Open menu",onClick:a,isActive:t}),Object(s.jsx)(o.a,{element:i.b,to:"/",prefix:"JS Widgets",children:"Widget Catalog"}),Object(s.jsx)(d.a,{"aria-label":"Widget Catalog",children:Object(s.jsx)(b.a,{element:i.b,to:"/widget-types",children:"Widget Types"})}),Object(s.jsx)(j.a,{"aria-label":"Side navigation",expanded:t,isPersistent:!1,children:Object(s.jsx)(u.a,{children:Object(s.jsx)(h.a,{children:Object(s.jsx)(b.a,{element:i.b,to:"/widget-types",children:"Widget Types"})})})}),Object(s.jsx)(g.a,{})]})}})};t.a=x},53:function(e){e.exports=JSON.parse('[{"repositoryUrl":"https://github.com/siil78/react-widgets","shortcode":"example-calculator","version":"v1.0.0","directoryUrl":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-calculator/v1","tarballUrl":"/tmp/widget-definitions-yxo5LE/example-calculator.tar.gz","files":["css/main.css","css/main.css.map","js/main.js","js/main.js.LICENSE.txt","js/main.js.map","thumbnail.svg"],"updatedAt":"2021-03-25T23:27:37.982Z","createdAt":"2021-03-25T23:27:37.982Z","availableTranslations":["en"],"description":"This example contains a calculator.","settingsSchema":{"type":"object","additionalProperties":false,"properties":{"fields":{"type":"object","properties":{"calc-type":{"type":"string","title":"Calculator Type","description":"Choose the type of the calculator.","enum":["basic","scientific","programming"],"examples":["basic","scientific","programming"]}}}}},"externalPeerDependencies":{"react":{"src":"https://unpkg.com/react@^17/umd/react.production.min.js"},"react-dom":{"src":"https://unpkg.com/react-dom@^17/umd/react-dom.production.min.js"}},"title":"Example Calculator","status":"wip","assetManifest":{"files":{"main.css":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-calculator/v1/css/main.css","main.js":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-calculator/v1/js/main.js"},"entrypoints":["static/css/main.843e9450.css","css/main.css","js/main.js"]}}]')}}]);
//# sourceMappingURL=9.47bd0fa0.chunk.js.map