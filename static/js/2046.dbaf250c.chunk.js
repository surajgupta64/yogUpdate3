"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2046],{82046:function(e,n,r){r.r(n);var t=r(70885),i=(r(24846),r(78983)),c=r(74569),l=r.n(c),s=r(72791),a=r(16856),o=r(80184),u="https://yog-seven.vercel.app";n.default=function(){var e=(0,s.useState)(!1),n=(0,t.Z)(e,2),r=n[0],c=n[1],d=(0,s.useState)(""),h=(0,t.Z)(d,2),x=h[0],j=h[1],f=(0,s.useState)(""),m=(0,t.Z)(f,2),b=m[0],p=m[1],g=JSON.parse(localStorage.getItem("user-info")),y=g.token,v=g.user.username,N=(0,s.useState)([]),C=(0,t.Z)(N,2),k=C[0],P=C[1],S=(0,s.useState)(0),_=(0,t.Z)(S,2),T=_[0],w=_[1],A={Authorization:"Bearer ".concat(y),"My-Custom-Header":"foobar"};function B(){l().get("".concat(u,"/hrPolicyMaster/all"),{headers:{Authorization:"Bearer ".concat(y)}}).then((function(e){console.log(e.data),P(e.data.reverse())})).catch((function(e){console.error(e)}))}return(0,s.useEffect)((function(){B()}),[]),(0,o.jsx)(i.rb,{children:(0,o.jsx)(i.b7,{lg:12,sm:12,children:(0,o.jsxs)(i.xH,{className:"mb-3 border-success",children:[(0,o.jsx)(i.bn,{style:{backgroundColor:"#0B5345",color:"white"},children:(0,o.jsx)(i.tj,{className:"mt-2",children:"HR Policy Master"})}),(0,o.jsxs)(i.sl,{children:[(0,o.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{children:(0,o.jsx)(i.rb,{children:(0,o.jsx)(i.b7,{children:(0,o.jsx)(i.u5,{className:"ms-1 mt-2",onClick:function(){return c(!r)},children:r?"Close":"Add Policy"})})})})]}),r&&(0,o.jsxs)("div",{children:[(0,o.jsxs)(i.rb,{className:"d-flex mb-2",children:[(0,o.jsx)(i.b7,{lg:12,sm:12,className:"mb-2",children:(0,o.jsx)(i.jO,{type:"text",placeholder:"Title",value:x,onChange:function(e){return j(e.target.value)},label:"Title","aria-label":"Recipient's username","aria-describedby":"button-addon2"})}),(0,o.jsx)(i.b7,{lg:12,sm:12,className:"mb-2",children:(0,o.jsx)(i.PB,{id:"exampleFormControlTextarea1",placeholder:"Enter Policy",value:b,onChange:function(e){return p(e.target.value)},label:"Policy",rows:"5",text:"Must be 8-20 words long."})})]}),(0,o.jsx)(i.u5,{type:"button",color:"primary",onClick:function(){return function(){if(""!=x&&""!=b){var e={username:v,Title:x,Policy:b};l().post("".concat(u,"/hrPolicyMaster/create"),e,{headers:A}).then((function(e){console.log(e.data),alert("Successfully Added"),B(),c(!1),j(""),p("")})).catch((function(e){return console.log(e)}))}else alert("enter lead Source")}()},children:"Save"})]}),(0,o.jsxs)(i.Sx,{className:"mt-3",align:"middle",bordered:!0,style:{borderColor:"#0B5345"},hover:!0,responsive:!0,children:[(0,o.jsx)(i.V,{style:{backgroundColor:"#0B5345",color:"white"},children:(0,o.jsxs)(i.T6,{children:[(0,o.jsx)(i.is,{children:"Sno."}),(0,o.jsx)(i.is,{children:"Title"}),(0,o.jsx)(i.is,{children:"Policy"}),(0,o.jsx)(i.is,{children:"Action"})]})}),(0,o.jsx)(i.NR,{children:k.slice(10*T,10*T+10).filter((function(e){return e.username===v})).map((function(e,n){return(0,o.jsxs)(i.T6,{children:[(0,o.jsx)(i.NN,{children:n+1+10*T}),(0,o.jsx)(i.NN,{children:e.Title}),(0,o.jsx)(i.NN,{children:e.Policy}),(0,o.jsxs)(i.NN,{children:[" ",(0,o.jsx)(a.ZkW,{style:{cursor:"pointer",markerStart:"10px"},size:"20px",onClick:function(){return n=e._id,void(confirm("You want to delete this")&&fetch("".concat(u,"/hrPolicyMaster/delete/").concat(n),{method:"DELETE",headers:{Authorization:"Bearer ".concat(y),Accept:"application/json","Content-Type":"application/json"}}).then((function(e){e.json().then((function(e){console.warn(e),B()}))})));var n}})," "]})]},n)}))})]})]}),(0,o.jsxs)(i.E7,{"aria-label":"Page navigation example",align:"center",className:"mt-2",children:[(0,o.jsx)(i.tn,{"aria-label":"Previous",disabled:0==T,onClick:function(){return T>0&&w(T-1)},children:(0,o.jsx)("span",{"aria-hidden":"true",children:"\xab"})}),(0,o.jsx)(i.tn,{active:!0,onClick:function(){return w(0)},children:T+1}),k.filter((function(e){return e.username===v})).length>10*(T+1)&&(0,o.jsx)(i.tn,{onClick:function(){return w(T+1)},children:T+2}),k.filter((function(e){return e.username===v})).length>10*(T+2)&&(0,o.jsx)(i.tn,{onClick:function(){return w(T+2)},children:T+3}),k.filter((function(e){return e.username===v})).length>10*(T+1)?(0,o.jsx)(i.tn,{"aria-label":"Next",onClick:function(){return w(T+1)},children:(0,o.jsx)("span",{"aria-hidden":"true",children:"\xbb"})}):(0,o.jsx)(i.tn,{disabled:!0,"aria-label":"Next",onClick:function(){return w(T+1)},children:(0,o.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})]})]})})})}}}]);
//# sourceMappingURL=2046.dbaf250c.chunk.js.map