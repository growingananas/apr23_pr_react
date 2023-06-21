(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(7),n=c.n(s),i=(c(13),c(14),c(8)),r=c(5),l=(c(15),c(2)),d=c.n(l),o=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],j=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],h=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}],u=c(0),b=function(){var e=Object(a.useState)("All"),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),l=Object(r.a)(n,2),b=l[0],m=l[1],x=Object(a.useState)([]),f=Object(r.a)(x,2),O=f[0],p=f[1],N=h.map((function(e){var t=j.find((function(t){return t.id===e.categoryId})),c=o.find((function(e){return e.id===t.ownerId}));return{id:e.id,name:e.name,category:t.title,icon:t.icon,userName:c.name,sex:c.sex}})),y=b.toLowerCase().trim(),g=N.filter((function(e){var t="All"===c||e.userName===c,a=e.name.toLowerCase().includes(y),s=0===O.length||O.includes(e.category);return t&&a&&s}));return Object(u.jsx)("div",{className:"section",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"title",children:"Product Categories"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsxs)("nav",{className:"panel",children:[Object(u.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(u.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(u.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:d()({"is-active":"All"===c}),onClick:function(){return s("All")},children:"All"}),o.map((function(e){return Object(u.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:d()({"is-active":c===e.name}),onClick:function(){return s(e.name)},children:e.name},e.id)}))]}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:b,onChange:function(e){return m(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(u.jsx)("span",{className:"icon is-right",children:b&&Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return m("")}})})]})}),Object(u.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(u.jsx)("a",{href:"#/","data-cy":"AllCategories",className:d()("button","is-success","mr-6",{"is-outlined":O.length}),onClick:function(){return p([])},children:"All"}),j.map((function(e){return Object(u.jsx)("a",{"data-cy":"Category",onClick:function(){return function(e){O.includes(e)?p((function(t){return t.filter((function(t){return t!==e}))})):p((function(t){return[].concat(Object(i.a)(t),[e])}))}(e.title)},className:d()("button","mr-2","my-1",{"is-info":O.includes(e.title)}),href:"#/",children:e.title},e.id)}))]}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){p([]),m(""),s("All")},children:"Reset all filters"})})]})}),Object(u.jsx)("div",{className:"box table-container",children:0===g.length?Object(u.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}):Object(u.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(u.jsx)("tbody",{children:g.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"Product",children:[Object(u.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(u.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(u.jsxs)("td",{"data-cy":"ProductCategory",children:[e.icon," - ",e.category]}),Object(u.jsx)("td",{"data-cy":"ProductUser",className:d()({"has-text-link":"m"===e.sex,"has-text-danger":"f"===e.sex}),children:e.userName})]})}))})]})})]})})};n.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ced217ac.chunk.js.map