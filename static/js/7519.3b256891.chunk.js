"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7519],{47519:function(e,t,n){n.r(t);var r=n(70885),a=n(78983),s=n(74569),c=n.n(s),l=n(72791),i=n(16856),o=n(80184),u="https://yog-seven.vercel.app";t.default=function(){var e=(0,l.useState)(!1),t=(0,r.Z)(e,2),n=t[0],s=t[1],d=(0,l.useState)(""),h=(0,r.Z)(d,2),m=h[0],x=h[1],f=(0,l.useState)(""),j=(0,r.Z)(f,2),p=j[0],b=j[1],N=(0,l.useState)(""),S=(0,r.Z)(N,2),g=S[0],C=S[1],v=(0,l.useState)(!1),k=(0,r.Z)(v,2),y=k[0],_=k[1],T=JSON.parse(localStorage.getItem("user-info")),w=T.token,A=T.user.username,M=(0,l.useState)([]),z=(0,r.Z)(M,2),B=z[0],E=z[1],Z=(0,l.useState)(0),O=(0,r.Z)(Z,2),P=O[0],V=O[1],F={Authorization:"Bearer ".concat(w),"My-Custom-Header":"foobar"};function H(){c().get("".concat(u,"/templateMaster/all"),{headers:{Authorization:"Bearer ".concat(w)}}).then((function(e){console.log(e.data),E(e.data.reverse())})).catch((function(e){console.error(e)}))}(0,l.useEffect)((function(){H()}),[]);return(0,o.jsxs)(a.xH,{className:"mb-3 border-success",children:[(0,o.jsx)(a.bn,{style:{backgroundColor:"#0B5345",color:"white"},children:(0,o.jsx)(a.tj,{children:"Template"})}),(0,o.jsxs)(a.sl,{children:[(0,o.jsxs)(a.lx,{className:"mb-2",children:[(0,o.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{children:(0,o.jsx)(a.rb,{children:(0,o.jsx)(a.b7,{children:(0,o.jsx)(a.u5,{className:"ms-1 mt-2",onClick:function(){return s(!n)},children:n?"close":"Add Template"})})})})]}),n&&(0,o.jsx)("div",{children:(0,o.jsxs)(a.rb,{className:"mt-3",children:[(0,o.jsx)(a.b7,{lg:12,md:12,sm:12,children:(0,o.jsx)(a.jO,{className:"mb-1",type:"text",id:"exampleFormControlInput1",label:"Title",value:p,onChange:function(e){return b(e.target.value)},placeholder:"Enter Category"})}),(0,o.jsx)(a.b7,{lg:12,md:12,sm:12,children:(0,o.jsx)(a.PB,{id:"exampleFormControlTextarea1",label:"SMS Content",value:g,onChange:function(e){return C(e.target.value)},rows:"3",text:"Must be 8-20 words long."})}),(0,o.jsxs)(a.b7,{className:"mt-2",lg:6,md:6,sm:12,children:[(0,o.jsx)(a.rb,{children:(0,o.jsx)(a.b7,{children:(0,o.jsx)(a.kV,{size:"xl",label:"Status",value:y,onChange:function(){return _(!y)},style:{defaultChecked:"false"}})})}),(0,o.jsx)(a.u5,{className:"mt-2",onClick:function(){return function(){if(""!=m)if(""!=p&&""!=g){var e={username:A,templateName:p,content:g,Status:y};c().post("".concat(u,"/templateMaster/update/").concat(m),e,{headers:F}).then((function(e){console.log(e.data),alert("Update Successfully"),H(),s(!1),b(""),C(""),_(!1),x("")})).catch((function(e){return console.log(e)}))}else alert("Enter all details");else if(""!=p&&""!=g){var t={username:A,templateName:p,content:g,Status:y};c().post("".concat(u,"/templateMaster/create"),t,{headers:F}).then((function(e){console.log(e.data),alert("Successfully Added"),H(),s(!1),b(""),C(""),_(!1),x("")})).catch((function(e){return console.log(e)}))}else alert("Enter all details")}()},children:"Save"})]})]})})]}),(0,o.jsxs)(a.Sx,{className:"mt-3",align:"middle",bordered:!0,style:{borderColor:"#0B5345"},hover:!0,responsive:!0,children:[(0,o.jsx)(a.V,{style:{backgroundColor:"#0B5345",color:"white"},children:(0,o.jsxs)(a.T6,{children:[(0,o.jsx)(a.is,{children:"Sr.No"}),(0,o.jsx)(a.is,{children:"Template Name"}),(0,o.jsx)(a.is,{children:"SMS Content"}),(0,o.jsx)(a.is,{children:"Status"}),(0,o.jsx)(a.is,{children:"Action"})]})}),(0,o.jsx)(a.NR,{children:B.slice(10*P,10*P+10).map((function(e,t){return e.username===A&&(0,o.jsxs)(a.T6,{children:[(0,o.jsx)(a.NN,{children:t+1+10*P}),(0,o.jsx)(a.NN,{children:e.templateName}),(0,o.jsx)(a.NN,{className:"text-center",children:e.content}),(0,o.jsx)(a.NN,{children:(0,o.jsx)(a.kV,{size:"xl",style:{cursor:"pointer"},id:e._id,value:e.Status,checked:e.Status,onChange:function(){return function(e,t){var n={Status:t};fetch("".concat(u,"/templateMaster/update/").concat(e),{method:"POST",headers:{Authorization:"Bearer ".concat(w),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){e.json().then((function(e){H()}))}))}(e._id,!e.Status)}})}),(0,o.jsxs)(a.NN,{children:[(0,o.jsx)(i.zmo,{style:{cursor:"pointer",markerStart:"10px"},onClick:function(){x(e._id),b(e.templateName),C(e.content),_(e.Status),s(!0)}})," ",(0,o.jsx)(i.ZkW,{style:{cursor:"pointer",markerStart:"10px"},onClick:function(){return t=e._id,void(confirm("You want to delete this")&&fetch("".concat(u,"/templateMaster/delete/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(w),Accept:"application/json","Content-Type":"application/json"}}).then((function(e){e.json().then((function(e){console.warn(e),H()}))})));var t},size:"20px"})," "]})]},t)}))})]})]}),(0,o.jsxs)(a.E7,{"aria-label":"Page navigation example",align:"center",className:"mt-2",children:[(0,o.jsx)(a.tn,{"aria-label":"Previous",disabled:0==P,onClick:function(){return P>0&&V(P-1)},children:(0,o.jsx)("span",{"aria-hidden":"true",children:"\xab"})}),(0,o.jsx)(a.tn,{active:!0,onClick:function(){return V(0)},children:P+1}),B.filter((function(e){return e.username===A})).length>10*(P+1)&&(0,o.jsx)(a.tn,{onClick:function(){return V(P+1)},children:P+2}),B.filter((function(e){return e.username===A})).length>10*(P+2)&&(0,o.jsx)(a.tn,{onClick:function(){return V(P+2)},children:P+3}),B.filter((function(e){return e.username===A})).length>10*(P+1)?(0,o.jsx)(a.tn,{"aria-label":"Next",onClick:function(){return V(P+1)},children:(0,o.jsx)("span",{"aria-hidden":"true",children:"\xbb"})}):(0,o.jsx)(a.tn,{disabled:!0,"aria-label":"Next",onClick:function(){return V(P+1)},children:(0,o.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})]})]})}}}]);
//# sourceMappingURL=7519.3b256891.chunk.js.map