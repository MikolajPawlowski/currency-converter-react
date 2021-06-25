(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{17:function(n,e,t){},21:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i,s,d,u,b,l,x,j,p=t(0),h=t.n(p),g=t(9),O=t.n(g),m=(t(17),t(4)),f=t(2),w=t(3),v=w.a.div(r||(r=Object(f.a)(["\n    flex-basis: 800px;\n    margin: 20px;\n    padding: 30px;\n    border-radius: 15px;\n    box-shadow: -2px -1px 2px 0px beige;\n"]))),k=[{short:"USD",name:"Dolar ameryka\u0144ski",rate:3.7386},{short:"BTC",name:"Bitcoin",rate:150655.93},{short:"DOGE",name:"Dogecoin",rate:1.2071}],y=w.a.p(c||(c=Object(f.a)(["\n    color:beige;\n    text-align: center;\n    font-size: 20px;\n"]))),D=t(1),S=function(n){var e=n.result,t=n.currency;return Object(D.jsx)(y,{children:void 0!==e&&Object(D.jsxs)(D.Fragment,{children:[e.sourceAmount.toFixed(2),"\xa0PLN\xa0="," ",Object(D.jsxs)("strong",{children:[e.targetAmount.toFixed("Bitcoin"===t?2:6),"\xa0",e.currency]})]})})},z=(t(21),function(){var n=function(){var n=Object(p.useState)(new Date),e=Object(m.a)(n,2),t=e[0],r=e[1];return Object(p.useEffect)((function(){return setInterval((function(){r(new Date)}),1e3),function(){clearInterval(r)}}),[]),t}().toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"});return Object(D.jsxs)("p",{className:"clock",children:["Dzi\u015b jest ",n]})}),F=w.a.form(a||(a=Object(f.a)(["\n    max-width: 700px;\n    margin: 0 auto;\n"]))),C=w.a.h1(o||(o=Object(f.a)(["\n    text-align: center;\n    color: rgb(223, 206, 206);\n    text-shadow: 2px 2px 2px rgb(80, 79, 79);\n"]))),P=w.a.fieldset(i||(i=Object(f.a)(["\n    background-color: rgba(0, 0, 0, 0.425);\n    border: 2px solid #ccc;\n    padding: 10px;\n    border-radius: 40px;\n    margin: 20px;\n    box-shadow: -1px 1px 2px 0px beige;\n"]))),B=w.a.legend(s||(s=Object(f.a)(["\n    background-color: rgba(0, 128, 128, 0.507);\n    padding: 10px;\n    border: 2px solid beige;\n    border-radius: 30px;\n    font-size: 20px;\n    box-shadow: -1px 1px 2px 0px beige;\n    color: beige;\n"]))),L=w.a.input(d||(d=Object(f.a)(["\n    border: 1px solid #ccc;\n    padding: 10px;\n    max-width: 300px;\n    width: 100%;\n    border-radius: 40px;\n\n    &:required {\n        border-color: 2px solid black;\n    }\n\n    &:invalid {\n        background-color: hsl(9, 100%, 90%);\n    }\n"]))),A=w.a.select(u||(u=Object(f.a)(["\n    border: 1px solid #ccc;\n    padding: 10px;\n    max-width: 300px;\n    width: 100%;\n    border-radius: 40px;\n"]))),I=w.a.label(b||(b=Object(f.a)(["\n    margin: 10px 5px;\n    text-align: left;\n"]))),K=w.a.span(l||(l=Object(f.a)(["\n    width: 100%;\n    max-width: 200px;\n    display: inline-block;\n    margin-right: 5px;\n"]))),E=w.a.button(x||(x=Object(f.a)(["\n    width: 100%;\n    border: none;\n    background-color: rgba(0, 128, 128, 0.507);\n    color: beige;\n    padding: 10px;\n    border-radius: 5px;\n    margin: 10px 0;\n    font-size: 26px;\n\n    &:hover {\n        background-color: hsl(180, 100%, 33%);\n    }\n\n    &:active {\n        background-color: hsl(180, 100%, 39%);\n    }\n"]))),N=w.a.p(j||(j=Object(f.a)(["\n    color: beige;\n"]))),T=function(n){var e=n.calculateResult,t=n.result,r=Object(p.useState)(k[0].short),c=Object(m.a)(r,2),a=c[0],o=c[1],i=Object(p.useState)(""),s=Object(m.a)(i,2),d=s[0],u=s[1];return Object(D.jsxs)(F,{onSubmit:function(n){n.preventDefault(),e(a,d)},children:[Object(D.jsx)(C,{children:"Konwerter kurs\xf3w walutowych"}),Object(D.jsx)(z,{}),Object(D.jsxs)(P,{children:[Object(D.jsx)(B,{children:"Konwerter walut"}),Object(D.jsxs)(N,{children:[Object(D.jsx)("strong",{children:"Pola oznaczone * musz\u0105 by\u0107 wype\u0142nione,\xa0"}),"kursy z dnia 14.06.2021"]}),Object(D.jsx)(N,{children:Object(D.jsxs)(I,{children:[Object(D.jsx)(K,{children:"Kwota w PLN*:"}),Object(D.jsx)(L,{value:d,onChange:function(n){var e=n.target;return u(e.value)},required:!0,type:"number",min:"1",step:"0.01",placeholder:"Podaj wymagan\u0105 kwot\u0119"})]})}),Object(D.jsx)(N,{children:Object(D.jsxs)(I,{children:[Object(D.jsx)(K,{children:"Konwertuj\u0119 walut\u0119 na:"}),Object(D.jsx)(A,{value:a,onChange:function(n){var e=n.target;return o(e.value)},children:k.map((function(n){return Object(D.jsx)("option",{value:n.short,children:n.name},n.short)}))})]})}),Object(D.jsx)(N,{children:Object(D.jsx)(E,{children:"Hit me"})}),Object(D.jsx)(S,{result:t})]})]})};var q=function(){var n=Object(p.useState)(),e=Object(m.a)(n,2),t=e[0],r=e[1];return Object(D.jsx)(v,{children:Object(D.jsx)(T,{result:t,calculateResult:function(n,e){var t=k.find((function(e){return e.short===n})).rate;r({sourceAmount:+e,targetAmount:e/t,currency:n})}})})},J=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))};O.a.render(Object(D.jsx)(h.a.StrictMode,{children:Object(D.jsx)(q,{})}),document.getElementById("root")),J()}},[[22,1,2]]]);
//# sourceMappingURL=main.800b72fe.chunk.js.map