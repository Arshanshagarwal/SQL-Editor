(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(2),r=a.n(c);a(9);var s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"left-text"},l.a.createElement("a",{className:"AA-link link",href:"https://github.com/Arshanshagarwal"},"A A")),l.a.createElement("div",{className:"right-text"},l.a.createElement("a",{className:"github-link link",title:"Github Repo",href:"https://github.com/Arshanshagarwal/SQL-Editor"},l.a.createElement("i",{className:"fab fa-github"})))))},i=a(3);a(10);var m=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useRef)();return l.a.createElement("div",{className:"content-box"},l.a.createElement("div",{className:"content-left"},l.a.createElement("div",{className:"left-title"},l.a.createElement("div",{className:"heading"},"Input"),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{onClick:function(){"show tables;"===r.current.value?c("categorie\ncustomers\nemployee_territories\nemployees\norder_details\norders\nproducs\nregions\nshippers\nsuppliers\nterritories"):"SELECT * from Shippers;"===r.current.value?c("shipperID| companyName\t| phone\n\n1  \t| Speedy Express|\t(503) 555-9831\n2   \t| United Package | (503) 555-3199 \n3 \t | Federal Shipping | (503) 555-9931"):c("Syntax error in SQL statement"),console.log(a)},className:"run-button",title:"Run"},l.a.createElement("i",{className:"fas fa-play"})),l.a.createElement("button",{onClick:function(){r.current.value="",c("")},className:"run-button",title:"Delete"},l.a.createElement("i",{className:"fas fa-trash"})),l.a.createElement("button",{onClick:function(){var e=r.current.value,t=new Blob([e],{type:"text/plain"}),a=URL.createObjectURL(t),n=document.createElement("a");n.download="Code.sql",n.href=a,n.click()},className:"run-button",title:"Download input"},l.a.createElement("i",{className:"fas fa-download"})))),l.a.createElement("div",{className:"left-input"},l.a.createElement("div",{className:"left-text-box-header"},l.a.createElement("i",{className:"fas fa-circle circle-red circle"}),l.a.createElement("i",{className:"fas fa-circle circle-yellow circle"}),l.a.createElement("i",{className:"fas fa-circle circle-green circle"})),l.a.createElement("textarea",{placeholder:"Write your SQL command here.",ref:r,id:"highlighting","aria-hidden":"true",className:"left-input-area language-js prism-live"}))),l.a.createElement("div",{className:"content-right"},l.a.createElement("div",{className:"right-title"},l.a.createElement("div",{className:"heading"},"Ouput"),l.a.createElement("button",{onClick:function(){var e=r.current.value,t=new Blob([e],{type:"text/plain"}),a=URL.createObjectURL(t),n=document.createElement("a");n.download="OutputCode.txt",n.href=a,n.click()},className:"run-button",title:"Download input"},l.a.createElement("i",{className:"fas fa-download"}))),l.a.createElement("div",{className:"right-output"},l.a.createElement("code",null,a))))};a(11);var o=function(){return l.a.createElement("div",{className:"content1"},l.a.createElement("div",{className:"page-title"},"SQL Editor"),l.a.createElement("div",{className:"help-div"},l.a.createElement("div",{className:"left-help"},l.a.createElement("div",{className:"title"},"What does this Web App do?"),l.a.createElement("div",{className:"help-content"},l.a.createElement("div",{className:"point first top"},"1. This is a SQL editor view made in ReactJS."),l.a.createElement("div",{className:"point second"},"2. It takes an SQL command as input and gives the required output."),l.a.createElement("div",{className:"point third"},"3. It can also download the input as well as the output file if required."),l.a.createElement("div",{className:"point fourth"},"4. Currently it works with only 2 commands."))),l.a.createElement("div",{className:"right-help"},l.a.createElement("div",{className:"title"},"Working SQL commands"),l.a.createElement("div",{className:"help-content"},l.a.createElement("div",{className:"point first top"},"1. show tables;"),l.a.createElement("div",{className:"point second"},"2. SELECT * from Shippers;")))),l.a.createElement("div",{className:"background-changing-div"}))};a(12);function d(){return l.a.createElement("div",{className:"App"},l.a.createElement(s,null)," ",l.a.createElement(o,null),l.a.createElement(m,null))}var u=document.getElementById("root");r.a.render(l.a.createElement(d,null),u)}],[[4,1,2]]]);
//# sourceMappingURL=main.bc89d724.chunk.js.map