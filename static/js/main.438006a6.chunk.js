(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,function(e,t,c){e.exports={FeedbackList:"FeedbackOptions_FeedbackList__1Yq4e",FeedbackBtn:"FeedbackOptions_FeedbackBtn__1ChfS"}},,,,function(e,t,c){},function(e,t,c){},function(e,t,c){e.exports={FeedbackList:"Statistics_FeedbackList__2mG8G"}},,,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(6),i=c.n(a),r=(c(15),c(2)),j=c(5),b=c(10),o=c(7),d=c.n(o),l=c(8),u=c.n(l),O=c(0),h=function(e){var t=e.title;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("h2",{className:u.a.Title,children:t})})},x=c(9),k=c.n(x),f=function(e){var t=e.message;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("h2",{children:t})})},p=function(e){var t=e.good,c=e.neutral,n=e.bad,s=e.total,a=e.positive;return Object(O.jsx)(O.Fragment,{children:s?Object(O.jsxs)("ul",{className:k.a.FeedbackList,children:[Object(O.jsxs)("li",{children:["Good:",Object(O.jsxs)("span",{children:[" ",t]})]}),Object(O.jsxs)("li",{children:["Neutral:",Object(O.jsxs)("span",{children:[" ",c]})]}),Object(O.jsxs)("li",{children:["Bad:",Object(O.jsxs)("span",{children:[" ",n]})]}),Object(O.jsxs)("li",{children:["Total:",Object(O.jsxs)("span",{children:[" ",s]})]}),Object(O.jsxs)("li",{children:["Positive feedback:",Object(O.jsxs)("span",{children:[" ",a,"%"]})]})]}):Object(O.jsx)(f,{message:"No feedback given"})})},m=c(3),F=c.n(m),v=function(e){var t=e.onLeaveFeedback,c=e.options.map((function(e){return Object(O.jsx)("button",{type:"button",name:e,className:F.a.FeedbackBtn,onClick:function(){return t(e)},children:e},e)}));return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("ul",{className:F.a.FeedbackList,children:Object(O.jsx)("li",{className:F.a.FeedbackItems,children:c})})})},g=function(){var e=Object(n.useState)({good:0,neutral:0,bad:0}),t=Object(b.a)(e,2),c=t[0],s=t[1],a=function(){return c.good+c.neutral+c.bad},i=Object.keys(c);return Object(O.jsxs)("div",{className:d.a.FeedbackForm,children:[Object(O.jsx)(h,{title:"Please leave feedback"}),Object(O.jsx)(v,{options:i,onLeaveFeedback:function(e){s(Object(j.a)(Object(j.a)({},c),{},Object(r.a)({},e,c[e]+1)))}}),Object(O.jsx)(h,{title:"Statistics"}),Object(O.jsx)(p,{good:c.good,neutral:c.neutral,bad:c.bad,total:a(),positive:function(){var e=c.good,t=a();return Math.round(e/t*100)}()})]})};var N=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(g,{})})};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.438006a6.chunk.js.map