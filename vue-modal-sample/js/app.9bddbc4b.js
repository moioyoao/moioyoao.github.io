(function(t){function e(e){for(var o,a,i=e[0],s=e[1],c=e[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&d.push(l[a][0]),l[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==l[s]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},l={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-modal-sample/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),l=n.n(o);l.a},"414f":function(t,e,n){"use strict";var o=n("e447"),l=n.n(o);l.a},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h2",[t._v("Modal Samples")]),n("p",[t._v("アラートボタン")]),n("AlertButton",[t._v("show alert")]),n("p",[t._v("アラートリンク")]),n("AlertLink",[t._v("show alert")]),n("p",[t._v("確認ボタン")]),n("ConfirmButton",[t._v("confirm")]),n("p",[t._v("確認リンク")]),n("ConfirmLink",[t._v("confirm")])],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:t.show}},[t._t("default")],2),n("Alert",{ref:"alert",attrs:{title:"alert title",content:"alert content","hide-label":"hide"}})],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{ref:"modal"},[n("template",{slot:"header"},[t._v(" "+t._s(t.title)+" ")]),n("template",{slot:"content"},[t._v(" "+t._s(t.content)+" ")]),n("template",{slot:"footer"},[n("button",{on:{click:t.hide}},[t._v(t._s(t.hideLabel))])])],2)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.modal?n("transition",{attrs:{name:"modal",appear:""}},[n("div",{staticClass:"modal-backdrop",on:{click:t.hide}},[n("div",{staticClass:"modal-window"},[n("div",{staticClass:"modal-header"},[t._t("header")],2),n("div",{staticClass:"modal-content"},[t._t("content")],2),n("footer",{staticClass:"modal-footer"},[t._t("footer")],2)])])]):t._e()},f=[],d={data(){return{modal:!1}},methods:{show(){this.modal=!0},hide(){this.modal=!1}}},h=d,p=(n("414f"),n("2877")),m=Object(p["a"])(h,u,f,!1,null,"17a617a8",null),v=m.exports,_={props:["title","content","hideLabel"],components:{Modal:v},methods:{show(){this.$refs.modal.show()},hide(){this.$refs.modal.hide()}}},b=_,w=Object(p["a"])(b,s,c,!1,null,null,null),k=w.exports,O={components:{Alert:k},methods:{show(){this.$refs.alert.show()}}},$=O,j=Object(p["a"])($,a,i,!1,null,null,null),y=j.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"#"},on:{click:t.show}},[t._t("default")],2),n("Alert",{ref:"alert",attrs:{title:"alert title",content:"alert content","hide-label":"hide"}})],1)},x=[],C={components:{Alert:k},methods:{show(){this.$refs.alert.show()}}},L=C,A=Object(p["a"])(L,g,x,!1,null,null,null),M=A.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:t.show}},[t._t("default")],2),n("Confirm",{ref:"confirm",attrs:{title:"confirm title",content:"confirm content","cancel-label":"cancel","ok-label":"ok"},on:{ok:t.ok}})],1)},P=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{ref:"modal"},[n("template",{attrs:{bind:t.title},slot:"header"},[t._v(" "+t._s(t.title)+" ")]),n("template",{slot:"content"},[t._v(" "+t._s(t.content)+" ")]),n("template",{slot:"footer"},[n("button",{on:{click:t.cancel}},[t._v(t._s(t.cancelLabel))]),n("button",{on:{click:t.ok}},[t._v(t._s(t.okLabel))])])],2)},B=[],T={props:["title","content","okLabel","cancelLabel"],components:{Modal:v},methods:{show(){this.$refs.modal.show()},hide(){this.$refs.modal.hide()},ok(){this.$emit("ok","something"),this.hide()},cancel(){this.hide()}}},J=T,q=Object(p["a"])(J,S,B,!1,null,null,null),z=q.exports,D={components:{Confirm:z},methods:{show(){this.$refs.confirm.show()},ok(t){console.log("result:",t)}}},F=D,G=Object(p["a"])(F,E,P,!1,null,null,null),H=G.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"#"},on:{click:t.show}},[t._t("default")],2),n("Confirm",{ref:"confirm",attrs:{title:"confirm title",content:"confirm content","cancel-label":"cancel","ok-label":"ok"},on:{ok:t.ok}})],1)},K=[],N={components:{Confirm:z},methods:{show(){this.$refs.confirm.show()},ok(t){console.log("result:",t)}}},Q=N,R=Object(p["a"])(Q,I,K,!1,null,null,null),U=R.exports,V={name:"App",components:{AlertButton:y,AlertLink:M,ConfirmButton:H,ConfirmLink:U}},W=V,X=(n("034f"),Object(p["a"])(W,l,r,!1,null,null,null)),Y=X.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(Y)}}).$mount("#app")},"85ec":function(t,e,n){},e447:function(t,e,n){}});
//# sourceMappingURL=app.9bddbc4b.js.map