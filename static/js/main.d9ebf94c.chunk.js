(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(4),c=a.n(s),u=(a(9),a(2)),l=(a(10),a(0)),i=function(e){return Object(l.jsx)("button",{className:e.className,onClick:e.onClick,disabled:e.disabled,children:e.title})},o=function(e){return Object(l.jsxs)("div",{className:"counterBox",children:[Object(l.jsx)("div",{className:"counter",children:Object(l.jsx)("div",{children:e.error?Object(l.jsx)("div",{className:"hError",children:e.error}):Object(l.jsx)("div",{className:e.counter>=e.valueMax?"Er":"h",children:e.counter})})}),Object(l.jsxs)("div",{className:"counterButton",children:[Object(l.jsx)(i,{title:"Inc",className:"cButton",onClick:function(){e.setCounter(+e.counter+1)},disabled:!!e.error||e.counter===e.valueMax}),Object(l.jsx)(i,{title:"RESET",className:"cButton",onClick:function(){e.setCounter(e.valueMin)},disabled:!!e.error})]})]})},j=function(e){return Object(l.jsx)("input",{className:e.className,type:"number",value:e.value,onChange:e.onChange})},v=function(e){Object(n.useEffect)((function(){var t=localStorage.getItem("minValue");if(t){var a=JSON.parse(t);e.setValueMin(a)}}),[]),Object(n.useEffect)((function(){var t=localStorage.getItem("maxValue");if(t){var a=JSON.parse(t);e.setValueMax(a)}}),[]);var t=e.valueMin>=e.valueMax||e.valueMax<=e.valueMin;return Object(l.jsxs)("div",{className:"settingBox",children:[Object(l.jsxs)("div",{className:"inputBox",children:["MinValue",Object(l.jsx)(j,{className:e.error?"inputError":"input",value:e.valueMin,onChange:function(t){var a=t.target.value,n=Number(a);e.setValueMin(n),e.setCounter("Press Set"),n>=e.valueMax?e.setError("Incorrect value!"):e.setError(!1)}})]}),Object(l.jsxs)("div",{className:"inputBox",children:["MaxValue",Object(l.jsx)(j,{className:e.error?"inputError":"input",value:e.valueMax,onChange:function(t){var a=t.target.value,n=Number(a);e.setValueMax(n),e.setCounter("Press Set"),n<=e.valueMin?e.setError("Incorrect value!"):e.setError(!1)}})]}),Object(l.jsx)("div",{children:Object(l.jsx)(i,{title:"set",className:"button",disabled:t,onClick:function(){localStorage.setItem("minValue",JSON.stringify(e.valueMin)),localStorage.setItem("maxValue",JSON.stringify(e.valueMax)),e.setCounter(e.valueMin),e.setError(!1)}})})]})};var b=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(0),c=Object(u.a)(s,2),i=c[0],j=c[1],b=Object(n.useState)(!1),x=Object(u.a)(b,2),d=x[0],O=x[1],m=Object(n.useState)("Press Set"),M=Object(u.a)(m,2),f=M[0],h=M[1];return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(v,{error:d,valueMin:a,valueMax:i,setError:O,setValueMin:r,setValueMax:j,setCounter:h}),Object(l.jsx)(o,{error:d,valueMin:a,valueMax:i,setCounter:h,counter:f})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),x()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.d9ebf94c.chunk.js.map