(this.webpackJsonpiamlearning=this.webpackJsonpiamlearning||[]).push([[0],{14:function(t,e,c){},15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(0),n=c(1),a=c.n(n),r=c(7),s=c.n(r),i=(c(14),c(3)),l=(c(15),c(8)),d=function(t){var e=t.inputText,c=t.setInputText,n=t.todoArray,a=t.setTodoArray;t.setFilter;return Object(o.jsxs)("form",{className:"form",children:[Object(o.jsx)("input",{value:e,onChange:function(t){console.log(t.target.value),c(t.target.value)},type:"text",className:"todo-input"}),Object(o.jsx)("button",{onClick:function(t){t.preventDefault(),a([].concat(Object(l.a)(n),[{text:e,completed:!1,id:1e4*Math.random()}])),c("")},className:"todo-button",type:"submit",children:" +"})]})},u=c(6),j=function(t){var e=t.text,c=(t.id,t.todoItem),n=t.todoArray,a=t.setTodoArray;return Object(o.jsxs)("div",{className:"todo-wrapper",children:[Object(o.jsx)("p",{className:"todo todo-item ".concat(c.completed?"completed":""),children:e}),Object(o.jsxs)("div",{className:"button-wrapper",children:[Object(o.jsx)("button",{onClick:function(){a(n.map((function(t){return t.id===c.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(o.jsx)("i",{className:"fas fa-check"})}),Object(o.jsx)("button",{onClick:function(){a(n.filter((function(t){return t.id!==c.id})))},className:"trash-btn",children:Object(o.jsx)("i",{className:"fas fa-trash"})})]})]})},b=function(t){var e=t.todoArray,c=t.setTodoArray;return Object(o.jsx)("div",{className:"todo-container",children:Object(o.jsx)("div",{className:"todo-list",children:e.map((function(t){return Object(o.jsx)(j,{todoItem:t,todoArray:e,setTodoArray:c,id:t.id,text:t.text})}))})})};var f=function(){var t=Object(n.useState)(""),e=Object(i.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)([]),s=Object(i.a)(r,2),l=s[0],u=s[1],j=Object(n.useState)("All"),f=Object(i.a)(j,2),m=f[0],O=f[1],h=Object(n.useState)([]),p=Object(i.a)(h,2),x=(p[0],p[1]);Object(n.useEffect)((function(){g()}),[]),Object(n.useEffect)((function(){y(),v()}),[l]),Object(n.useEffect)((function(){var t=document.querySelector(".circle1");setInterval((function(){t.style.left=Math.floor(80*Math.random())+"%",t.style.top=Math.floor(100*Math.random())+"%"}),6e3)}),[]);var y=function(){switch(m){case"completed":x(l.filter((function(t){return!0===t.completed})));break;case"uncompleted":x(l.filter((function(t){return!1===t.completed})));break;default:x(l)}},v=function(){localStorage.setItem("todoArray",JSON.stringify(l))},g=function(){if(null==localStorage.getItem("todoArray"))localStorage.setItem("todoArray",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todoArray",JSON.stringify(l)));u(t)}};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("div",{className:"strokes-h1",children:Object(o.jsx)("h1",{children:"Yet another notes taking web app"})}),Object(o.jsx)("div",{className:"circle1"}),Object(o.jsx)("div",{className:"solid-h1",children:Object(o.jsx)("h1",{children:"Yet another notes taking web app"})})]}),Object(o.jsx)(d,{inputText:c,todoArray:l,setTodoArray:u,setInputText:a,setFilter:O}),Object(o.jsx)(b,{todoArray:l,setTodoArray:u}),Object(o.jsx)("a",{href:"#",children:Object(o.jsx)("div",{className:"scroll-to-top todo-button",href:"#",children:" ^ "})})]})},m=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,o=e.getFID,n=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),o(t),n(t),a(t),r(t)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.e088caf3.chunk.js.map