(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35c62b96"],{"0862":function(t,e,i){"use strict";i("b0c0");var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["nut-backtop",{show:t.backTop}],style:t.styles,on:{click:t.goto}},[t._t("default",[i("div",{staticClass:"nut-backtop-main"})])],2)},s=[],o=(i("a9e3"),{name:"nut-backtop",props:{distance:{type:Number,default:200},bottom:{type:Number,default:20},right:{type:Number,default:10},duration:{type:Number,default:1e3},zIndex:{type:Number,default:1111}},data:function(){return{backTop:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0),window.addEventListener("resize",this.handleScroll,!0)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll(),!1),window.removeEventListener("resize",this.handleScroll(),!1)},computed:{styles:function(){return{bottom:"".concat(this.bottom,"px"),right:"".concat(this.right,"px"),"z-index":this.zIndex}}},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.backTop=t>=this.distance},goto:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop(window,t,0,this.duration),this.$emit("click")},scrollTop:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,s=arguments.length>4?arguments[4]:void 0;this.el=t;for(var o=0,a=["webkit","moz"],r=0;r<a.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[a[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a[r]+"CancelAnimationFrame"]||window[a[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var i=(new Date).getTime(),n=Math.max(0,16.7-(i-o)),s=window.setTimeout((function(){t(i+n)}),n);return o=i+n,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var c=Math.abs(e-i),l=Math.ceil(c/n*50);this.scroll(e,i,l,s)},scroll:function(t,e,i,n){var s=this;if(t!==e){var o=t+i>e?e:t+i;t>e&&(o=t-i<e?e:t-i),this.el===window?document.body.scrollTo(o,o):this.el.scrollTop=o,window.requestAnimationFrame((function(){return s.scroll(o,e,i)}))}else n&&n()}}}),a=o,r=i("2877"),c=Object(r["a"])(a,n,s,!1,null,null,null),l=c.exports;i("5537");l.install=function(t){t.component(l.name,l)};e["a"]=l},1325:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return r})),i.d(e,"c",(function(){return l}));var n=i("a142"),s=!1;if(!n["d"])try{var o={};Object.defineProperty(o,"passive",{get:function(){s=!0}}),window.addEventListener("test-passive",null,o)}catch(u){}function a(t,e,i,o){void 0===o&&(o=!1),n["d"]||t.addEventListener(e,i,!!s&&{capture:!1,passive:o})}function r(t,e,i){n["d"]||t.removeEventListener(e,i)}function c(t){t.stopPropagation()}function l(t,e){("boolean"!==typeof t.cancelable||t.cancelable)&&t.preventDefault(),e&&c(t)}},"2bdd":function(t,e,i){"use strict";var n=i("d282");function s(t){return"none"===window.getComputedStyle(t).display||null===t.offsetParent}var o=i("1325");function a(t){function e(){this.binded||(t.call(this,o["b"],!0),this.binded=!0)}function i(){this.binded&&(t.call(this,o["a"],!1),this.binded=!1)}return{mounted:e,activated:e,deactivated:i,beforeDestroy:i}}var r=i("a8c1"),c=i("543e"),l=Object(n["a"])("list"),u=l[0],d=l[1],h=l[2];e["a"]=u({mixins:[a((function(t){this.scroller||(this.scroller=Object(r["a"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:Number,default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,i=t.$el,n=t.scroller,o=t.offset,a=t.direction;e=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var r=e.bottom-e.top;if(!r||s(i))return!1;var c=!1,l=t.$refs.placeholder.getBoundingClientRect();c="up"===a?l.top-e.top<=o:l.bottom-e.bottom<=o,c&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{class:d("loading"),key:"loading"},[this.slots("loading")||t(c["a"],{attrs:{size:"16"}},[this.loadingText||h("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished&&this.finishedText)return t("div",{class:d("finished-text")},[this.finishedText])},genErrorText:function(){var t=this.$createElement;if(this.error&&this.errorText)return t("div",{on:{click:this.clickErrorText},class:d("error-text")},[this.errorText])}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",class:d("placeholder")});return t("div",{class:d(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}})},"543e":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),o=i("d282"),a=i("ea8e"),r=i("ba31"),c=Object(o["a"])("loading"),l=c[0],u=c[1];function d(t,e){if("spinner"===e.type){for(var i=[],n=0;n<12;n++)i.push(t("i"));return i}return t("svg",{class:u("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])}function h(t,e,i){if(i.default){var n=e.textSize&&{fontSize:Object(a["a"])(e.textSize)};return t("span",{class:u("text"),style:n},[i.default()])}}function f(t,e,i,n){var o=e.color,c=e.size,l=e.type,f={color:o};if(c){var v=Object(a["a"])(c);f.width=v,f.height=v}return t("div",s()([{class:u([l,{vertical:e.vertical}])},Object(r["b"])(n,!0)]),[t("span",{class:u("spinner",l),style:f},[d(t,e)]),h(t,e,i)])}f.props={color:String,size:[Number,String],vertical:Boolean,textSize:[Number,String],type:{type:String,default:"circular"}},e["a"]=l(f)},5537:function(t,e,i){},"58e6":function(t,e,i){"use strict";var n=i("d282"),s=i("1325"),o=i("2b0e"),a=10;function r(t,e){return t>e&&t>a?"horizontal":e>t&&e>a?"vertical":""}var c=o["default"].extend({data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||r(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}}),l=i("a8c1"),u=i("543e"),d=Object(n["a"])("pull-refresh"),h=d[0],f=d[1],v=d[2],m=["pulling","loosing","success"];e["a"]=h({mixins:[c],props:{disabled:Boolean,successText:String,pullingText:String,loosingText:String,loadingText:String,value:{type:Boolean,required:!0},successDuration:{type:Number,default:500},animationDuration:{type:Number,default:300},headHeight:{type:Number,default:50}},data:function(){return{status:"normal",distance:0,duration:0}},computed:{untouchable:function(){return"loading"===this.status||"success"===this.status||this.disabled}},watch:{value:function(t){var e=this;this.duration=this.animationDuration,!t&&this.successText?(this.status="success",setTimeout((function(){e.setStatus(0)}),this.successDuration)):this.setStatus(t?this.headHeight:0,t)}},mounted:function(){this.scrollEl=Object(l["a"])(this.$el)},methods:{onTouchStart:function(t){!this.untouchable&&this.getCeiling()&&(this.duration=0,this.touchStart(t))},onTouchMove:function(t){this.untouchable||(this.touchMove(t),!this.ceiling&&this.getCeiling()&&(this.duration=0,this.startY=t.touches[0].clientY,this.deltaY=0),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&(this.setStatus(this.ease(this.deltaY)),Object(s["c"])(t)))},onTouchEnd:function(){var t=this;!this.untouchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,"loosing"===this.status?(this.setStatus(this.headHeight,!0),this.$emit("input",!0),this.$nextTick((function(){t.$emit("refresh")}))):this.setStatus(0))},getCeiling:function(){return this.ceiling=0===Object(l["b"])(this.scrollEl),this.ceiling},ease:function(t){var e=this.headHeight;return Math.round(t<e?t:t<2*e?e+(t-e)/2:1.5*e+(t-2*e)/4)},setStatus:function(t,e){this.distance=t;var i=e?"loading":0===t?"normal":t<this.headHeight?"pulling":"loosing";i!==this.status&&(this.status=i)}},render:function(){var t=arguments[0],e=this.status,i=this.distance,n=this[e+"Text"]||v(e),s={transitionDuration:this.duration+"ms",transform:this.distance?"translate3d(0,"+this.distance+"px, 0)":""},o=this.slots(e,{distance:i})||[-1!==m.indexOf(e)&&t("div",{class:f("text")},[n]),"loading"===e&&t(u["a"],{attrs:{size:"16"}},[n])];return t("div",{class:f()},[t("div",{class:f("track"),style:s,on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[t("div",{class:f("head")},[o]),this.slots()])])}})},7156:function(t,e,i){var n=i("861d"),s=i("d2bb");t.exports=function(t,e,i){var o,a;return s&&"function"==typeof(o=e.constructor)&&o!==i&&n(a=o.prototype)&&a!==i.prototype&&s(t,a),t}},a8c1:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return o}));var n=/scroll|auto/i;function s(t,e){void 0===e&&(e=window);var i=t;while(i&&"HTML"!==i.tagName&&1===i.nodeType&&i!==e){var s=window.getComputedStyle(i),o=s.overflowY;if(n.test(o)){if("BODY"!==i.tagName)return i;var a=window.getComputedStyle(i.parentNode),r=a.overflowY;if(n.test(r))return i}i=i.parentNode}return e}function o(t){return"scrollTop"in t?t.scrollTop:t.pageYOffset}},a916:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("backTop"),t._m(0),i("div",{staticClass:"table-body"},[i("van-pull-refresh",{style:{height:"100%"},on:{refresh:t.onRefresh},model:{value:t.isRefresh,callback:function(e){t.isRefresh=e},expression:"isRefresh"}},[i("van-list",{style:{height:"100%"},attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e){return i("div",{key:e.id,staticClass:"tr"},[i("div",{staticClass:"td"},[t._v(" "+t._s(e.id)+" ")]),i("div",{staticClass:"td"},[t._v(" "+t._s(e.create_time)+" ")]),i("div",{staticClass:"td"},[t._v(" "+t._s(e.online_users)+" ")]),i("div",{staticClass:"td"},[t._v(" "+t._s(e.volatility)+" ")])])})),0)],1)],1)],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-heade"},[i("div",{staticClass:"td"},[t._v(" ID ")]),i("div",{staticClass:"td"},[t._v(" 统计时间 ")]),i("div",{staticClass:"td"},[t._v(" 点击量 ")]),i("div",{staticClass:"td"},[t._v(" 波动值 ")])])}],o=i("2b0e"),a=i("58e6"),r=i("2bdd"),c=function(){return{list:[{id:1,create_time:"2019-11-25 09:27:00",online_users:"305,557,517",volatility:"-165357"},{id:2,create_time:"2019-11-25 09:27:00",online_users:"305,557,517",volatility:"-165357"},{id:3,create_time:"2019-11-25 09:27:00",online_users:"305,557,517",volatility:"-165357"}],isRefresh:!1,loading:!1,finished:!1}},l={onLoad:function(){},onRefresh:function(){}},u=i("0862");o["default"].use(a["a"]).use(r["a"]);var d={data:c,methods:l,components:{backTop:u["a"]},created:function(){},mounted:function(){}},h=d,f=(i("e1e9"),i("2877")),v=Object(f["a"])(h,n,s,!1,null,"3186e9d9",null);e["default"]=v.exports},a9e3:function(t,e,i){"use strict";var n=i("83ab"),s=i("da84"),o=i("94ca"),a=i("6eeb"),r=i("5135"),c=i("c6b6"),l=i("7156"),u=i("c04e"),d=i("d039"),h=i("7c73"),f=i("241c").f,v=i("06cf").f,m=i("9bf2").f,p=i("58a8").trim,g="Number",b=s[g],w=b.prototype,T=c(h(w))==g,y=function(t){var e,i,n,s,o,a,r,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=p(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+l}for(o=l.slice(2),a=o.length,r=0;r<a;r++)if(c=o.charCodeAt(r),c<48||c>s)return NaN;return parseInt(o,n)}return+l};if(o(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var x,S=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof S&&(T?d((function(){w.valueOf.call(i)})):c(i)!=g)?l(new b(y(e)),i,S):y(e)},_=n?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;_.length>E;E++)r(b,x=_[E])&&!r(S,x)&&m(S,x,v(b,x));S.prototype=w,w.constructor=S,a(s,g,S)}},b7bc:function(t,e,i){},e1e9:function(t,e,i){"use strict";var n=i("b7bc"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-35c62b96.b17a56f1.js.map