"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3765],{15063:function(e,n,r){r.d(n,{t:function(){return c}});var t=r(92997),a=r(74453),i=(0,t.ZF)({apiKey:"AIzaSyDJvzaEbE1dAg22tfnpdk0TnO92m8I1kug",authDomain:"uploadingfile-cb68e.firebaseapp.com",projectId:"uploadingfile-cb68e",storageBucket:"uploadingfile-cb68e.appspot.com",messagingSenderId:"877657240307",appId:"1:877657240307:web:1dfc6f15a2bc1ccaccbd86"}),c=(0,a.cF)(i)},23765:function(e,n,r){r.r(n);var t=r(42982),a=r(70885),i=r(78983),c=r(74569),l=r.n(c),s=r(74453),o=r(72426),u=r.n(o),d=r(72791),h=r(16856),m=r(15063),f=r(54261),p=r(80184),x="https://yog-seven.vercel.app";n.default=function(){var e=(0,d.useState)(!1),n=(0,a.Z)(e,2),r=n[0],c=n[1],o=(0,d.useState)(""),g=(0,a.Z)(o,2),j=g[0],b=g[1],y=(0,d.useState)(""),N=(0,a.Z)(y,2),v=N[0],C=N[1],I=(0,d.useState)(""),S=(0,a.Z)(I,2),k=S[0],D=S[1],U=(0,d.useState)(""),Z=(0,a.Z)(U,2),_=Z[0],w=Z[1],T=(0,d.useState)(""),A=(0,a.Z)(T,2),E=A[0],M=A[1],B=(0,d.useState)(""),F=(0,a.Z)(B,2),z=F[0],O=F[1],Y=(0,d.useState)([]),V=(0,a.Z)(Y,2),G=(V[0],V[1]),H=(0,d.useState)(),J=(0,a.Z)(H,2),R=(J[0],J[1],JSON.parse(localStorage.getItem("user-info"))),L=R.token,K=R.user.username,P=(0,d.useState)([]),W=(0,a.Z)(P,2),X=W[0],q=W[1],Q=(0,d.useState)(0),$=(0,a.Z)(Q,2),ee=$[0],ne=$[1],re={Authorization:"Bearer ".concat(L),"My-Custom-Header":"foobar"},te=(0,s.iH)(m.t,"galleryMaster/");function ae(){l().get("".concat(x,"/galleryMaster/all"),{headers:{Authorization:"Bearer ".concat(L)}}).then((function(e){console.log(e.data),q(e.data.reverse())})).catch((function(e){console.error(e)}))}(0,d.useEffect)((function(){ae(),(0,s.aF)(te).then((function(e){e.items.forEach((function(e){(0,s.Jt)(e).then((function(e){G((function(n){return[].concat((0,t.Z)(n),[e])}))}))}))}))}),[]);return(0,p.jsxs)(i.xH,{className:"mb-3 border-success",children:[(0,p.jsx)(i.bn,{style:{backgroundColor:"#0B5345",color:"white"},children:(0,p.jsx)(i.tj,{children:"Gallery Master"})}),(0,p.jsxs)(i.sl,{children:[(0,p.jsxs)(i.lx,{className:"mb-2",children:[(0,p.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,p.jsx)("div",{}),(0,p.jsx)("div",{children:(0,p.jsx)(i.rb,{children:(0,p.jsx)(i.b7,{children:(0,p.jsx)(i.u5,{className:"ms-1 mt-2",onClick:function(){return c(!r)},children:r?"close":"Add Gallery"})})})})]}),r&&(0,p.jsx)("div",{children:(0,p.jsxs)(i.rb,{className:"mt-3",children:[(0,p.jsx)(i.b7,{lg:6,md:6,sm:12,children:(0,p.jsxs)(i.LX,{label:"Gallery",value:j,onChange:function(e){return b(e.target.value)},children:[(0,p.jsx)("option",{children:"Select"}),(0,p.jsx)("option",{children:"Instagram Url"}),(0,p.jsx)("option",{children:"Facebook Url"}),(0,p.jsx)("option",{children:"Youtube Url"}),(0,p.jsx)("option",{children:"Trainer Image"}),(0,p.jsx)("option",{children:"Center Image"})]})}),(0,p.jsx)(i.b7,{lg:6,md:6,sm:12,children:(0,p.jsx)(i.jO,{className:"mb-1",type:"text",id:"exampleFormControlInput1",label:"Name",value:v,onChange:function(e){return C(e.target.value)},placeholder:"Enter Name"})}),(0,p.jsx)(i.b7,{lg:12,md:12,sm:12,children:(0,p.jsx)(i.jO,{className:"mb-1",type:"text",id:"exampleFormControlInput1",value:k,onChange:function(e){return D(e.target.value)},label:"Description",placeholder:"Enter Description"})}),(0,p.jsxs)(i.b7,{lg:12,md:12,sm:12,children:[("Center Image"===j||"Trainer Image"===j)&&(0,p.jsx)(i.jO,{className:"mb-1 mr-3",type:"file",onChange:function(e){if(e.target.files[0]){var n=e.target.files[0];w(n)}},accept:"image/*"}),"Center Image"!==j&&"Trainer Image"!==j&&(0,p.jsx)(i.jO,{className:"mb-1",type:"url",id:"exampleFormControlInput1",value:z,onChange:function(e){return O(e.target.value)},label:"Url",placeholder:"Enter Url"})]}),(0,p.jsx)(i.b7,{className:"mt-2",lg:6,md:6,sm:12,children:(0,p.jsx)(i.u5,{className:"mt-2",onClick:function(){return function(){if("Center Image"===j||"Trainer Image"===j){var e=(0,s.iH)(m.t,"images/".concat(_.name+(0,f.Z)()));if((0,s.KV)(e,_).then((function(e){(0,s.Jt)(e.ref).then((function(e){M(e),console.log(e)}))})),null!=E){var n={username:K,Name:v,galleryType:j,Description:k,image:E};l().post("".concat(x,"/galleryMaster/create"),n,{headers:re}).then((function(e){console.log(e.data),alert("Successfully Added"),ae(),c(!1),C(""),M(""),D("")})).catch((function(e){return console.log(e)}))}}else{var r={username:K,Name:v,galleryType:j,Description:k,url:z};l().post("".concat(x,"/galleryMaster/create"),r,{headers:re}).then((function(e){console.log(e.data),alert("Successfully Added"),ae(),c(!1),C(""),D("")})).catch((function(e){return console.log(e)}))}}()},children:"Save"})})]})})]}),(0,p.jsxs)(i.Sx,{className:"mt-3",align:"middle",bordered:!0,style:{borderColor:"#0B5345"},hover:!0,responsive:!0,children:[(0,p.jsx)(i.V,{style:{backgroundColor:"#0B5345",color:"white"},children:(0,p.jsxs)(i.T6,{children:[(0,p.jsx)(i.is,{children:"Sr.No"}),(0,p.jsx)(i.is,{children:"Date"}),(0,p.jsx)(i.is,{children:"Name"}),(0,p.jsx)(i.is,{children:"Gallery Type"}),(0,p.jsx)(i.is,{children:"Description"}),(0,p.jsx)(i.is,{children:"Url"}),(0,p.jsx)(i.is,{children:"Image"}),(0,p.jsx)(i.is,{children:"Action"})]})}),(0,p.jsx)(i.NR,{children:X.slice(10*ee,10*ee+10).filter((function(e){return e.username===K})).map((function(e,n){return e.username===K&&(0,p.jsxs)(i.T6,{children:[(0,p.jsx)(i.NN,{children:n+1+10*ee}),(0,p.jsx)(i.NN,{children:u()(e.createdAt).format("MM-DD-YYYY")}),(0,p.jsx)(i.NN,{className:"text-center",children:e.Name}),(0,p.jsx)(i.NN,{children:e.galleryType}),(0,p.jsx)(i.NN,{children:e.Description}),(0,p.jsx)(i.NN,{children:(0,p.jsx)("a",{href:e.url,target:"_blank",children:e.url})}),(0,p.jsx)(i.NN,{children:null!=e.image&&(0,p.jsx)("img",{width:"100px",src:e.image})}),(0,p.jsx)(i.NN,{children:(0,p.jsx)(h.ZkW,{style:{cursor:"pointer",markerStart:"10px"},onClick:function(){return n=e._id,void(confirm("You want to delete this")&&fetch("".concat(x,"/galleryMaster/delete/").concat(n),{method:"DELETE",headers:{Authorization:"Bearer ".concat(L),Accept:"application/json","Content-Type":"application/json"}}).then((function(e){e.json().then((function(e){console.warn(e),ae()}))})));var n},size:"20px"})})]},n)}))})]})]}),(0,p.jsxs)(i.E7,{"aria-label":"Page navigation example",align:"center",className:"mt-2",children:[(0,p.jsx)(i.tn,{"aria-label":"Previous",disabled:0==ee,onClick:function(){return ee>0&&ne(ee-1)},children:(0,p.jsx)("span",{"aria-hidden":"true",children:"\xab"})}),(0,p.jsx)(i.tn,{active:!0,onClick:function(){return ne(0)},children:ee+1}),X.filter((function(e){return e.username===K})).length>10*(ee+1)&&(0,p.jsx)(i.tn,{onClick:function(){return ne(ee+1)},children:ee+2}),X.filter((function(e){return e.username===K})).length>10*(ee+2)&&(0,p.jsx)(i.tn,{onClick:function(){return ne(ee+2)},children:ee+3}),X.filter((function(e){return e.username===K})).length>10*(ee+1)?(0,p.jsx)(i.tn,{"aria-label":"Next",onClick:function(){return ne(ee+1)},children:(0,p.jsx)("span",{"aria-hidden":"true",children:"\xbb"})}):(0,p.jsx)(i.tn,{disabled:!0,"aria-label":"Next",onClick:function(){return ne(ee+1)},children:(0,p.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})]})]})}},54261:function(e,n,r){r.d(n,{Z:function(){return u}});var t,a={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},i=new Uint8Array(16);function c(){if(!t&&!(t="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(i)}for(var l=[],s=0;s<256;++s)l.push((s+256).toString(16).slice(1));function o(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(l[e[n+0]]+l[e[n+1]]+l[e[n+2]]+l[e[n+3]]+"-"+l[e[n+4]]+l[e[n+5]]+"-"+l[e[n+6]]+l[e[n+7]]+"-"+l[e[n+8]]+l[e[n+9]]+"-"+l[e[n+10]]+l[e[n+11]]+l[e[n+12]]+l[e[n+13]]+l[e[n+14]]+l[e[n+15]]).toLowerCase()}var u=function(e,n,r){if(a.randomUUID&&!n&&!e)return a.randomUUID();var t=(e=e||{}).random||(e.rng||c)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,n){r=r||0;for(var i=0;i<16;++i)n[r+i]=t[i];return n}return o(t)}}}]);
//# sourceMappingURL=3765.2243f868.chunk.js.map