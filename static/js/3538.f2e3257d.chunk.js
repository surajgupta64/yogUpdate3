"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3538],{33538:function(e,t,r){r.r(t);var n=r(70885),s=r(72791),a=r(78983),i=r(24846),l=r(25606),o=r(65792),c=r(16856),d=r(39126),u=r(74569),m=r.n(u),x=r(72426),p=r.n(x),h=r(11087),j=r(80184),C="https://yog-seven.vercel.app";t.default=function(){var e=(0,s.useState)(""),t=(0,n.Z)(e,2),r=t[0],u=t[1],x=(0,s.useState)(""),N=(0,n.Z)(x,2),b=N[0],y=N[1],f=(0,s.useState)(""),g=(0,n.Z)(f,2),w=g[0],L=g[1],S=(0,s.useState)(""),v=(0,n.Z)(S,2),I=v[0],k=v[1],F=(0,s.useState)(""),O=(0,n.Z)(F,2),Z=O[0],D=O[1],E=(0,s.useState)(""),_=(0,n.Z)(E,2),H=_[0],A=_[1],W=(0,s.useState)(""),G=(0,n.Z)(W,2),T=G[0],z=G[1],B=(0,s.useState)(""),P=(0,n.Z)(B,2),J=P[0],M=P[1],Y=(0,s.useState)(""),R=(0,n.Z)(Y,2),U=R[0],V=R[1],q=(0,s.useState)(""),K=(0,n.Z)(q,2),Q=K[0],X=K[1],$=JSON.parse(localStorage.getItem("user-info"));console.log($);var ee=$.token,te=$.user.username,re=($.user.centerCode,(0,s.useState)([])),ne=(0,n.Z)(re,2),se=(ne[0],ne[1],(0,s.useState)(0)),ae=(0,n.Z)(se,2),ie=ae[0],le=ae[1];console.log(ee),(0,s.useEffect)((function(){me()}),[]);var oe=(0,s.useState)([]),ce=(0,n.Z)(oe,2),de=ce[0],ue=ce[1];function me(){m().get("".concat(C,"/employeeForm/all"),{headers:{Authorization:"Bearer ".concat(ee)}}).then((function(e){ue(e.data.reverse())})).catch((function(e){console.error(e)}))}function xe(e,t){var r={status:t};fetch("".concat(C,"/employeeForm/update/").concat(e),{method:"POST",headers:{Authorization:"Bearer ".concat(ee),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){e.json().then((function(){me()}))}))}return console.log(de),(0,j.jsx)(a.rb,{children:(0,j.jsx)(a.b7,{lg:12,sm:12,children:(0,j.jsxs)(a.xH,{className:"mb-3 border-success",children:[(0,j.jsx)(a.bn,{style:{backgroundColor:"#0B5345",color:"white"},children:(0,j.jsx)(a.tj,{className:"mt-2",children:"All Employee Profile"})}),(0,j.jsxs)(a.sl,{children:[(0,j.jsxs)(a.rb,{className:"d-flex mb-2",children:[(0,j.jsx)(a.b7,{lg:6,sm:12,className:"mb-2",children:(0,j.jsxs)(a.Z0,{role:"group","aria-label":"Basic example",children:[(0,j.jsxs)(a.u5,{color:"dark",variant:"outline",style:{fontSize:"13px"},children:["Total Employee: ",de.filter((function(e){return e.username===te})).length]}),(0,j.jsxs)(a.u5,{color:"dark",variant:"outline",style:{fontSize:"13px"},children:["Active Employee: ",de.filter((function(e){return e.username===te&&!0===e.status})).length]}),(0,j.jsxs)(a.u5,{color:"dark",variant:"outline",style:{fontSize:"13px"},children:["Left Employee: ",de.filter((function(e){return e.username===te&&!1===e.status})).length]})]})}),(0,j.jsx)(a.b7,{lg:3}),(0,j.jsx)(a.b7,{lg:3,sm:12,children:(0,j.jsxs)(a.Z0,{className:"float-end",children:[(0,j.jsxs)(a.u5,{color:"primary",children:[(0,j.jsx)(i.Z,{icon:l.U})," ","Import"]}),(0,j.jsxs)(a.u5,{color:"primary",children:[(0,j.jsx)(i.Z,{icon:o.z})," ","Export"]})]})})]}),(0,j.jsxs)(a.Sx,{className:"mt-3",align:"middle",bordered:!0,style:{borderColor:"#0B5345"},hover:!0,responsive:!0,children:[(0,j.jsx)(a.V,{style:{backgroundColor:"#0B5345",color:"white"},children:(0,j.jsxs)(a.T6,{children:[(0,j.jsx)(a.is,{children:"Sr.No"}),(0,j.jsx)(a.is,{children:"Name"}),(0,j.jsx)(a.is,{children:"Mobile"}),(0,j.jsx)(a.is,{children:"Email-ID"}),(0,j.jsx)(a.is,{children:"Date Of Birth"}),(0,j.jsx)(a.is,{children:"Gender"}),(0,j.jsx)(a.is,{children:"Employee Id"}),(0,j.jsx)(a.is,{children:"Location"}),(0,j.jsx)(a.is,{children:"Source"}),(0,j.jsx)(a.is,{children:"Department"}),(0,j.jsx)(a.is,{children:"Designation"}),(0,j.jsx)(a.is,{children:"Exp Salary"}),(0,j.jsx)(a.is,{children:"Grade"}),(0,j.jsx)(a.is,{children:"Comment"}),(0,j.jsx)(a.is,{children:"Status"}),(0,j.jsx)(a.is,{children:"Resume"}),(0,j.jsx)(a.is,{children:"Action"}),(0,j.jsx)(a.is,{children:"Edit"})]})}),(0,j.jsxs)(a.NR,{children:[(0,j.jsxs)(a.T6,{children:[(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",style:{minWidth:"60px"},type:"text",disabled:!0,"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",type:"text",style:{minWidth:"90px"},value:r,onChange:function(e){return u(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",style:{minWidth:"120px"},type:"text",disabled:!0,"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",type:"number",style:{minWidth:"100px"},value:Q,onChange:function(e){return X(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",type:"text",style:{minWidth:"120px"},disabled:!0,"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",type:"text",style:{minWidth:"120px"},value:b,onChange:function(e){return y(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",type:"text",value:w,disabled:!0,onChange:function(e){return L(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",type:"text",style:{minWidth:"180px"},value:I,onChange:function(e){return k(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",type:"text",style:{minWidth:"100px"},value:Z,onChange:function(e){return D(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",type:"text",style:{minWidth:"100px"},value:H,onChange:function(e){return A(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",style:{minWidth:"100px"},type:"text",value:T,onChange:function(e){return z(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",style:{minWidth:"80px"},type:"number",value:U,onChange:function(e){return V(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",type:"text",style:{minWidth:"50px"},value:J,onChange:function(e){return M(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",type:"text",value:U,style:{minWidth:"120px"},disabled:!0,onChange:function(e){return V(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",style:{minWidth:"80px"},type:"text",disabled:!0,"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",style:{minWidth:"70px"},type:"text",disabled:!0,"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",style:{minWidth:"100px"},type:"text",disabled:!0,"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.jO,{className:"mb-1",style:{minWidth:"70px"},type:"text",disabled:!0,"aria-describedby":"exampleFormControlInputHelpInline"})})]}),de.slice(10*ie,10*ie+10).filter((function(e){return e.username===te&&"Select"===e.selected&&e.FullName.toLowerCase().includes(r.toLowerCase())&&e.EmailAddress.toLowerCase().includes(b.toLowerCase())&&e.Gander.toLowerCase().includes(w.toLowerCase())&&e.address.toLowerCase().includes(I.toLowerCase())&&e.PayoutType.toLowerCase().includes(Z.toLowerCase())&&e.Department.toLowerCase().includes(H.toLowerCase())&&e.JobDesignation.toLowerCase().includes(T.toLowerCase())&&e.Grade.toLowerCase().includes(J.toLowerCase())&&e.Salary.toString().includes(U.toString())&&e.ContactNumber.toString().includes(Q.toString())})).map((function(e,t){return e.username===te&&(0,j.jsxs)(a.T6,{children:[(0,j.jsx)(a.NN,{children:t+1+10*ie}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(h.rU,{index:-1,style:{textDecoration:"none"},to:"/clients/employee-details/".concat(e._id,"/1"),target:"_black",children:e.FullName})}),(0,j.jsx)(a.NN,{children:e.ContactNumber}),(0,j.jsx)(a.NN,{children:e.EmailAddress}),(0,j.jsx)(a.NN,{children:p()(e.DateofBirth).format("MM-DD-YYYY")}),(0,j.jsx)(a.NN,{children:e.Gander}),(0,j.jsx)(a.NN,{children:e.AttendanceID}),(0,j.jsx)(a.NN,{children:e.address}),(0,j.jsx)(a.NN,{children:e.PayoutType}),(0,j.jsx)(a.NN,{children:e.Department}),(0,j.jsx)(a.NN,{children:e.JobDesignation}),(0,j.jsx)(a.NN,{children:e.Salary}),(0,j.jsx)(a.NN,{children:e.Grade}),(0,j.jsx)(a.NN,{children:e.Comment}),(0,j.jsx)(a.NN,{children:e.status?(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(a.u5,{className:"mt-1",color:"success",onClick:function(){return xe(e._id,!1)},children:"Active"})}):(0,j.jsx)(a.u5,{className:"mt-1",color:"danger",onClick:function(){return xe(e._id,!0)},children:"Inactive"})}),(0,j.jsx)(a.NN,{children:(0,j.jsx)(a.u5,{children:"View"})}),(0,j.jsxs)(a.NN,{className:"text-center",children:[(0,j.jsx)("a",{href:"tel:".concat(e.ContactNumber),target:"_black",children:(0,j.jsx)(c.fFs,{style:{cursor:"pointer",markerStart:"10px"},size:"20px"})}),(0,j.jsx)("a",{href:"https://wa.me/".concat(e.ContactNumber),target:"_black",children:(0,j.jsx)(d.RGt,{style:{marginLeft:"4px",cursor:"pointer",markerStart:"10px"},size:"20px"})}),(0,j.jsxs)("a",{href:"mailto: ".concat(e.EmailAddress),target:"_black",children:[" ",(0,j.jsx)(c.h6V,{style:{cursor:"pointer",markerStart:"10px",marginLeft:"4px"},size:"20px"})]})]}),(0,j.jsx)(a.NN,{className:"text-center",children:(0,j.jsx)(c.ZkW,{style:{cursor:"pointer",markerStart:"10px",marginLeft:"5px"},onClick:function(){return t=e._id,void(confirm("Do you want to delete this")&&fetch("".concat(C,"/employeeForm/delete/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(ee),Accept:"application/json","Content-Type":"application/json"}}).then((function(e){e.json().then((function(e){console.warn(e),me()}))})));var t},size:"20px"})})]},t)}))]})]})]}),(0,j.jsxs)(a.E7,{"aria-label":"Page navigation example",align:"center",className:"mt-2",children:[(0,j.jsx)(a.tn,{"aria-label":"Previous",disabled:0==ie,onClick:function(){return ie>0&&le(ie-1)},children:(0,j.jsx)("span",{"aria-hidden":"true",children:"\xab"})}),(0,j.jsx)(a.tn,{active:!0,onClick:function(){return le(0)},children:ie+1}),de.filter((function(e){return e.username===te&&"Select"===e.selected&&e.FullName.toLowerCase().includes(r.toLowerCase())&&e.EmailAddress.toLowerCase().includes(b.toLowerCase())&&e.Gander.toLowerCase().includes(w.toLowerCase())&&e.address.toLowerCase().includes(I.toLowerCase())&&e.PayoutType.toLowerCase().includes(Z.toLowerCase())&&e.Department.toLowerCase().includes(H.toLowerCase())&&e.JobDesignation.toLowerCase().includes(T.toLowerCase())&&e.Grade.toLowerCase().includes(J.toLowerCase())&&e.Salary.toString().includes(U.toString())&&e.ContactNumber.toString().includes(Q.toString())})).length>10*(ie+1)&&(0,j.jsx)(a.tn,{onClick:function(){return le(ie+1)},children:ie+2}),de.filter((function(e){return e.username===te&&"Select"===e.selected&&e.FullName.toLowerCase().includes(r.toLowerCase())&&e.EmailAddress.toLowerCase().includes(b.toLowerCase())&&e.Gander.toLowerCase().includes(w.toLowerCase())&&e.address.toLowerCase().includes(I.toLowerCase())&&e.PayoutType.toLowerCase().includes(Z.toLowerCase())&&e.Department.toLowerCase().includes(H.toLowerCase())&&e.JobDesignation.toLowerCase().includes(T.toLowerCase())&&e.Grade.toLowerCase().includes(J.toLowerCase())&&e.Salary.toString().includes(U.toString())&&e.ContactNumber.toString().includes(Q.toString())})).length>10*(ie+2)&&(0,j.jsx)(a.tn,{onClick:function(){return le(ie+2)},children:ie+3}),de.filter((function(e){return e.username===te&&"Select"===e.selected&&e.FullName.toLowerCase().includes(r.toLowerCase())&&e.EmailAddress.toLowerCase().includes(b.toLowerCase())&&e.Gander.toLowerCase().includes(w.toLowerCase())&&e.address.toLowerCase().includes(I.toLowerCase())&&e.PayoutType.toLowerCase().includes(Z.toLowerCase())&&e.Department.toLowerCase().includes(H.toLowerCase())&&e.JobDesignation.toLowerCase().includes(T.toLowerCase())&&e.Grade.toLowerCase().includes(J.toLowerCase())&&e.Salary.toString().includes(U.toString())&&e.ContactNumber.toString().includes(Q.toString())})).length>10*(ie+1)?(0,j.jsx)(a.tn,{"aria-label":"Next",onClick:function(){return le(ie+1)},children:(0,j.jsx)("span",{"aria-hidden":"true",children:"\xbb"})}):(0,j.jsx)(a.tn,{disabled:!0,"aria-label":"Next",onClick:function(){return le(ie+1)},children:(0,j.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})]})]})})})}},25606:function(e,t,r){r.d(t,{U:function(){return n}});var n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='272.112 314.481 272.112 128 240.112 128 240.112 314.481 165.059 239.429 142.432 262.056 256.112 375.736 369.793 262.056 347.166 239.429 272.112 314.481' class='ci-primary'/>"]},65792:function(e,t,r){r.d(t,{z:function(){return n}});var n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='142.319 241.027 164.947 263.654 240 188.602 240 376 272 376 272 188.602 347.053 263.654 369.681 241.027 256 127.347 142.319 241.027' class='ci-primary'/>"]}}]);
//# sourceMappingURL=3538.f2e3257d.chunk.js.map