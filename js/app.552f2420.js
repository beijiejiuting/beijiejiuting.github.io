(function(){"use strict";var e={2117:function(e,t,n){var o=n(6848),r=function(){var e=this,t=e._self._c;return t("el-container",[t("el-header",[t("header-view")],1),t("el-container",{staticStyle:{height:"765px"}},[t("el-aside",{staticStyle:{width:"190px"}},[t("frame-view")],1),t("el-main",[t("router-view")],1)],1),t("el-footer",[e._v("Copyright © 2024 NorthStreet. All rights reserved.")])],1)},i=[],l=function(){var e=this,t=e._self._c;return t("el-container",{staticStyle:{height:"100%",border:"1px solid #eee"}},[t("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"100%"}},[t("el-menu",{attrs:{"default-openeds":[]}},[t("el-submenu",{attrs:{index:"1"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-message"}),e._v("导航一")]),t("el-menu-item-group",[t("template",{slot:"title"},[e._v("分组一")]),t("el-menu-item",{attrs:{index:"1-1"}},[e._v("选项1")]),t("el-menu-item",{attrs:{index:"1-2"}},[e._v("选项2")])],2),t("el-menu-item-group",{attrs:{title:"分组2"}},[t("el-menu-item",{attrs:{index:"1-3"}},[e._v("选项3")])],1),t("el-submenu",{attrs:{index:"1-4"}},[t("template",{slot:"title"},[e._v("选项4")]),t("el-menu-item",{attrs:{index:"1-4-1"}},[e._v("选项4-1")])],2)],2),t("el-submenu",{attrs:{index:"2"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-menu"}),e._v("导航二")]),t("el-menu-item-group",[t("template",{slot:"title"},[e._v("分组一")]),t("el-menu-item",{attrs:{index:"2-1"}},[e._v("选项1")]),t("el-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")])],2),t("el-menu-item-group",{attrs:{title:"分组2"}},[t("el-menu-item",{attrs:{index:"2-3"}},[e._v("选项3")])],1),t("el-submenu",{attrs:{index:"2-4"}},[t("template",{slot:"title"},[e._v("选项4")]),t("el-menu-item",{attrs:{index:"2-4-1"}},[e._v("选项4-1")])],2)],2)],1)],1)],1)},a=[],s={data(){return{}},methods:{}},u=s,c=n(1656),d=(0,c.A)(u,l,a,!1,null,null,null),m=d.exports,f=function(){var e=this,t=e._self._c;return t("div",[t("el-dialog",{attrs:{title:"登录",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{attrs:{model:e.loginForm}},[t("el-form-item",{attrs:{label:"账号"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),t("el-form-item",{attrs:{label:"密码"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("确 定")])],1)],1),t("el-header",{staticStyle:{"text-align":"left","font-size":"30px"}},[e._v("教务管理系统 "),t("el-button",{attrs:{id:"login"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("登录")]),t("el-dropdown",[t("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[t("router-link",{staticStyle:{"text-align":"center","font-size":"15px"},attrs:{to:"/about"}},[e._v("关于")])],1),t("el-dropdown-item",[t("router-link",{staticStyle:{"text-align":"center","font-size":"15px"},attrs:{to:"/"}},[e._v("表单")])],1),t("el-dropdown-item",[e._v("删除")])],1)],1)],1)],1)},p=[],v={data(){return{dialogVisible:!1,loginForm:{username:"",password:""}}},methods:{login(){"student"==this.loginForm.username&&"student"==this.loginForm.password||"teacher"==this.loginForm.username&&"teacher"==this.loginForm.password||"admin"==this.loginForm.username&&"admin"==this.loginForm.password?this.$message({type:"success",message:"登录成功!你好,"+this.loginForm.username+"~"}):this.$message({type:"error",message:"登录失败!"}),this.dialogVisible=!1}}},g=v,h=(0,c.A)(g,f,p,!1,null,null,null),b=h.exports,w={components:{FrameView:m,HeaderView:b}},y=w,x=(0,c.A)(y,r,i,!1,null,null,null),_=x.exports,k=n(6178);o["default"].use(k.Ay);const F=[{path:"/",name:"home",component:()=>n.e(151).then(n.bind(n,4151))},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,1417))},{path:"/element",name:"element",component:()=>n.e(151).then(n.bind(n,4151))}],j=new k.Ay({routes:F});var O=j,S=n(9143),C=n.n(S);o["default"].config.productionTip=!1,o["default"].use(C()),new o["default"]({router:O,render:e=>e(_)}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(a=!1,i<l&&(l=i));if(a){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(594===e?"about":e)+"."+{151:"0036fbec",594:"5c2f5415"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vueproject:";n.l=function(o,r,i,l){if(e[o])e[o].push(r);else{var a,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var m=function(t,n){a.onerror=a.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=m.bind(null,a.onerror),a.onload=m.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var l=n.p+n.u(t),a=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",a.name="ChunkLoadError",a.type=i,a.request=l,r[1](a)}};n.l(l,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,l=o[0],a=o[1],s=o[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var c=s(n)}for(t&&t(o);u<l.length;u++)i=l[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkvueproject"]=self["webpackChunkvueproject"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(2117)}));o=n.O(o)})();
//# sourceMappingURL=app.552f2420.js.map