"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2484],{72484:function(e,n,t){t.r(n);var o=t(70885),a=t(78983),s=t(74569),i=t.n(s),l=t(72791),r=t(16856),c=t(80184),h="https://yog-seven.vercel.app";n.default=function(){var e=(0,l.useState)(!1),n=(0,o.Z)(e,2),t=n[0],s=n[1],u=(0,l.useState)(""),d=(0,o.Z)(u,2),j=d[0],x=d[1],p=(0,l.useState)(""),m=(0,o.Z)(p,2),v=m[0],k=m[1],f=(0,l.useState)(""),g=(0,o.Z)(f,2),N=g[0],y=g[1],M=(0,l.useState)(!1),b=(0,o.Z)(M,2),w=b[0],S=b[1],C=(0,l.useState)(""),D=(0,o.Z)(C,2),_=D[0],P=D[1],W=JSON.parse(localStorage.getItem("user-info"));console.log(W),console.log(_);var Y=W.user.username,A=W.token,T=(0,l.useState)([]),Z=(0,o.Z)(T,2),z=Z[0],B=Z[1];function F(){i().get("".concat(h,"/Package/all"),{headers:{Authorization:"Bearer ".concat(A)}}).then((function(e){B(e.data)})).catch((function(e){console.error(e)}))}(0,l.useEffect)((function(){F()}),[]);return(0,c.jsxs)(a.xH,{className:"mb-3 border-success",children:[(0,c.jsx)(a.bn,{style:{backgroundColor:"#0B5345",color:"white"},children:(0,c.jsx)(a.tj,{children:"Package Master"})}),(0,c.jsxs)(a.sl,{children:[(0,c.jsxs)(a.lx,{className:"mb-2",children:[(0,c.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,c.jsx)("div",{}),(0,c.jsx)("div",{children:(0,c.jsx)(a.rb,{children:(0,c.jsx)(a.b7,{children:(0,c.jsx)(a.u5,{className:"ms-1 mt-2",onClick:function(){return s(!t)},children:t?"close":"Add New Package"})})})})]}),t&&(0,c.jsx)("div",{children:(0,c.jsxs)(a.rb,{className:"mt-3",children:[(0,c.jsx)(a.b7,{lg:6,md:6,sm:12,children:(0,c.jsx)(a.jO,{className:"mb-1",type:"text",id:"exampleFormControlInput1",label:"Package Name",value:j,onChange:function(e){return x(e.target.value)},placeholder:"Enter Package Name"})}),(0,c.jsx)(a.b7,{lg:6,md:6,sm:12,children:(0,c.jsx)(a.jO,{className:"mb-1",type:"number",id:"exampleFormControlInput1",label:"Fees",value:v,onChange:function(e){return k(e.target.value)},placeholder:"Enter Fees"})}),(0,c.jsx)(a.b7,{lg:6,md:6,sm:12,className:"mt-2",children:(0,c.jsxs)(a.YR,{children:[(0,c.jsx)(a.wV,{component:"label",htmlFor:"inputGroupSelect01",children:"Package"}),(0,c.jsxs)(a.LX,{id:"day",value:N,onChange:function(e){return y(e.target.value)},children:[(0,c.jsx)("option",{value:"",children:"Select"}),(0,c.jsx)("option",{value:"1 Day in week",children:"1 Day per week"}),(0,c.jsx)("option",{value:"2 Day in week",children:"2 Day per week"}),(0,c.jsx)("option",{value:"3 Day in week",children:"3 Day per week"}),(0,c.jsx)("option",{value:"4 Day in week",children:"4 Day per week"}),(0,c.jsx)("option",{value:"5 Day in week",children:"5 Day per week"}),(0,c.jsx)("option",{value:"6 Day in week",children:"6 Day per week"}),(0,c.jsx)("option",{value:"7 Day in week",children:"7 Day per week"})]})]})}),(0,c.jsx)(a.b7,{lg:6,md:6,sm:12,className:"mt-2",children:(0,c.jsxs)(a.YR,{children:[(0,c.jsx)(a.wV,{component:"label",htmlFor:"inputGroupSelect01",children:"Duration"}),(0,c.jsxs)(a.LX,{id:"month",value:_,onChange:function(e){return P(e.target.value)},children:[(0,c.jsx)("option",{value:"",children:"Select"}),(0,c.jsx)("option",{value:" 1 Week",children:"1 Week"}),(0,c.jsx)("option",{value:" 2 Week",children:"2 Week"}),(0,c.jsx)("option",{value:" 3 Week",children:"3 Week"}),(0,c.jsx)("option",{value:" 4 Week",children:"4 Week"}),(0,c.jsx)("option",{value:" 5 Week",children:"5 Week"}),(0,c.jsx)("option",{value:" 6 Week",children:"6 Week"}),(0,c.jsx)("option",{value:"1 Month",children:"1 Month"}),(0,c.jsx)("option",{value:"2 Month",children:"2 Month"}),(0,c.jsx)("option",{value:"3 Month",children:"3 Month"}),(0,c.jsx)("option",{value:"4 Month",children:"4 Month"}),(0,c.jsx)("option",{value:"5 Month",children:"5 Month"}),(0,c.jsx)("option",{value:"6 Month",children:"6 Month"}),(0,c.jsx)("option",{value:"7 Month",children:"7 Month"}),(0,c.jsx)("option",{value:"8 Month",children:"8 Month"}),(0,c.jsx)("option",{value:"9 Month",children:"9 Month"}),(0,c.jsx)("option",{value:"10 Month",children:"10 Month"}),(0,c.jsx)("option",{value:"11 Month",children:"11 Month"}),(0,c.jsx)("option",{value:"12 Month",children:"12 Month"}),(0,c.jsx)("option",{value:"13 Month",children:"13 Month"}),(0,c.jsx)("option",{value:"14 Month",children:"14 Month"}),(0,c.jsx)("option",{value:"15 Month",children:"15 Month"}),(0,c.jsx)("option",{value:"1 Year",children:"1 Year"}),(0,c.jsx)("option",{value:"2 Year",children:"2 Year"}),(0,c.jsx)("option",{value:"3 Year",children:"3 Year"}),(0,c.jsx)("option",{value:"4 Year",children:"4 Year"}),(0,c.jsx)("option",{value:"5 Year",children:"5 Year"})]})]})}),(0,c.jsxs)(a.b7,{lg:6,md:6,sm:12,className:"mt-1",children:[(0,c.jsx)(a.kV,{size:"xl",label:"Status",style:{defaultChecked:"false"},value:w,onChange:function(){return S(!w)}}),(0,c.jsx)(a.u5,{className:"mt-2",onClick:function(){var e={username:Y,Package_Name:j,fees:v,packages:N,duration:_,status:w};fetch("".concat(h,"/Package/create"),{method:"POST",headers:{Authorization:"Bearer ".concat(A),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.json().then((function(){alert("successfully submitted"),x(""),k(""),y(""),P(""),S(""),F()}))}))},children:"Save"})]})]})})]}),(0,c.jsxs)(a.Sx,{className:"mt-3",align:"middle",bordered:!0,style:{borderColor:"#0B5345"},hover:!0,responsive:!0,children:[(0,c.jsx)(a.V,{style:{backgroundColor:"#0B5345",color:"white"},children:(0,c.jsxs)(a.T6,{children:[(0,c.jsx)(a.is,{children:"Sr.No"}),(0,c.jsx)(a.is,{children:"Package Name"}),(0,c.jsx)(a.is,{children:"Duration"}),(0,c.jsx)(a.is,{children:"Fees"}),(0,c.jsx)(a.is,{children:"Status"}),(0,c.jsx)(a.is,{children:"Action"})]})}),(0,c.jsx)(a.NR,{children:z.map((function(e,n){return e.username===Y&&(0,c.jsxs)(a.T6,{children:[(0,c.jsx)(a.NN,{children:n+1}),(0,c.jsx)(a.NN,{children:e.Package_Name}),(0,c.jsxs)(a.NN,{children:[e.packages," ",e.duration]}),(0,c.jsx)(a.NN,{children:e.fees}),(0,c.jsx)(a.NN,{children:(0,c.jsx)(a.kV,{size:"xl",style:{cursor:"pointer"},id:e._id,value:e.status,checked:e.status,onChange:function(){return function(e,n){var t={status:n};fetch("".concat(h,"/Package/update/").concat(e),{method:"POST",headers:{Authorization:"Bearer ".concat(A),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){e.json().then((function(e){F()}))}))}(e._id,!e.status)}})}),(0,c.jsxs)(a.NN,{children:[" ",(0,c.jsx)(r.ZkW,{style:{cursor:"pointer",markerStart:"10px"},onClick:function(){return n=e._id,void(confirm("Do you want to delete this")&&fetch("".concat(h,"/Package/delete/").concat(n),{method:"DELETE",headers:{Authorization:"Bearer ".concat(A),Accept:"application/json","Content-Type":"application/json"}}).then((function(e){e.json().then((function(e){console.warn(e),F()}))})));var n},size:"20px"})," "]})]},n)}))})]})]})]})}}}]);
//# sourceMappingURL=2484.9ec45111.chunk.js.map