webpackJsonp([0],[,function(t,e,n){n(11);var s=n(0)(n(3),n(14),null,null);t.exports=s.exports},,function(t,e,n){"use strict";function s(){document.getElementById("hell").className="done",document.getElementById("newnn").className="dided"}Object.defineProperty(e,"__esModule",{value:!0});var a=n(13),o=n.n(a),i=n(7);e.default={name:"app",components:{Hello:o.a},data:function(){return{title:"todos-list with gorgeous-clock",items:[],newItem:""}},watch:{items:{handler:function(t){i.a.save(t)},deep:!0}},methods:{addNew:function(){this.items.push({label:this.newItem,isFinish:!1}),this.newItem=""},toggleFinish:function(t){t.isFinish=!t.isFinish,s()},signUp:function(){this.items=i.a.fetch()},signIn:function(t){for(var e=t.length,n=document.getElementsByName("butt"),s=0;s<e;s++)t[s].isFinish&&(n[s].disabled=!0)}}}},function(t,e,n){"use strict";function s(){y=document.getElementById("box"),w=y.clientHeight,_=y.clientWidth,canvas.height=w,canvas.width=_,f=Math.round(_/10),v=Math.round(4*_/5/108)-1,p=Math.round(w/5)}function a(t){var e=++$;W&&W[W.stop?"stop":"noteOff"](),R.abort(),R.open("get",t),R.responseType="arraybuffer",R.onload=function(){e==$&&J.decodeAudioData(R.response,function(t){if(e==$){var n=J.createBufferSource();n.buffer=t,n.connect(U),n[n.start?"start":"noteOn"](J.currentTime,0),W=n}},function(t){console.log(t)})},R.send()}function o(){W[W.stop?"stop":"noteOff"](J.currentTime)}function i(){D=!1,s(),h=document.getElementById("ttt").innerHTML,g=document.getElementById("ttt").innerHTML,I=60*h,m=60*g;var t=document.getElementById("canvas"),e=t.getContext("2d");E=new Date,B=3600*E.getHours()+60*E.getMinutes()+E.getSeconds();var n=setInterval(function(){if(u(e),r(),m<0){clearInterval(n);document.getElementById("music").className="dis",a("static/T1213121.mp3")}},50)}function r(){x=new Date,F=3600*x.getHours()+60*x.getMinutes()+x.getSeconds(),P=m,m=I-(F-B),S=parseInt(m/3600),N=parseInt((m-3600*S)/60),k=m%60,T=parseInt(P/3600),A=parseInt((P-3600*T)/60),H=P%60,parseInt(k%10)!=parseInt(H%10)&&l(f+93*(v+1),p,parseInt(k%10)),parseInt(S/10)!=parseInt(T/10)&&l(f+0,p,parseInt(S/10)),parseInt(S%10!=parseInt(T%10))&&l(f+15*(v+1),p,parseInt(S%10)),parseInt(N/10)!=parseInt(A/10)&&l(f+39*(v+1),p,parseInt(N/10)),parseInt(N%10)!=parseInt(A%10)&&l(f+54*(v+1),p,parseInt(N%10)),parseInt(k/10)!=parseInt(H/10)&&l(f+78*(v+1),p,parseInt(k/10)),c()}function c(){for(var t=0;t<G.length;t++)G[t].x+=G[t].vx,G[t].y+=G[t].vy,G[t].vy+=G[t].g,G[t].y>=w-v&&(G.y=w-v,G[t].vy=.75*-G[t].vy);for(var e=0,t=0;t<G.length;t++)G[t].x+v>0&&G[t].x-v<_&&(G[e++]=G[t]);for(;G.length>Math.min(800,e);)G.pop()}function l(t,e,n){if(!(m<0))for(var s=0;s<j[n].length;s++)for(var a=0;a<j[n][s].length;a++)if(1===j[n][s][a]){var o={x:t+2*a*(v+1)+(v+1),y:e+2*s*(v+1)+(v+1),g:1.5+Math.random(),vx:4*Math.pow(-1,Math.ceil(1e3*Math.random())),vy:-5,color:L[Math.floor(Math.random()*L.length)]};G.push(o)}}function u(t){m<0&&(m=0),t.clearRect(0,0,_,w),b=parseInt(m/3600),C=parseInt((m-3600*b)/60),M=m%60,d(f,p,parseInt(b/10),t),d(f+15*(v+1),p,parseInt(b%10),t),d(f+30*(v+1),p,10,t),d(f+39*(v+1),p,parseInt(C/10),t),d(f+54*(v+1),p,parseInt(C%10),t),d(f+69*(v+1),p,10,t),d(f+78*(v+1),p,parseInt(M/10),t),d(f+93*(v+1),p,parseInt(M%10),t);for(var e=0;e<G.length;e++)t.fillStyle=G[e].color,t.beginPath(),t.arc(G[e].x,G[e].y,v,0,2*Math.PI,!0),t.closePath(),t.fill()}function d(t,e,n,s){s.fillStyle="rgb(0,102,153)";for(var a=0;a<j[n].length;a++)for(var o=0;o<j[n][a].length;o++)1===j[n][a][o]&&(s.beginPath(),s.arc(t+2*o*(v+1)+(v+1),e+2*a*(v+1)+(v+1),v,0,2*Math.PI),s.closePath(),s.fill())}Object.defineProperty(e,"__esModule",{value:!0});var p,f,v,m,h,g,I,w,_,y,b,C,M,x,F,B,E,P,S,N,k,T,A,H,O=n(5),j=O.a.fetch(),D=!0,G=[],L=["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];window.onresize=s;var R=new XMLHttpRequest,J=new(window.AudioContext||window.webkitAudioContext),z=J[J.createGain?"createGain":"createGainNode"]();z.connect(J.destination);var U=J.createAnalyser();U.fftSize=128,U.connect(z);var W=null,$=0;e.default={name:"hello",data:function(){return{msg:"Welcome To Your Gorgeous Clock App",sd:""}},updated:function(){D&&(I=document.getElementById("ttt").innerHTML)},methods:{begin:function(){i()},stopMusic:function(){o(),alert("时间到！请刷新页面进行下一次体验")}}}},function(t,e,n){"use strict";var s=[[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],[[0,0,0,1,1,0,0],[0,1,1,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[1,1,1,1,1,1,1]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,0,1,1,1,0],[0,0,1,1,1,1,0],[0,1,1,0,1,1,0],[1,1,0,0,1,1,0],[1,1,1,1,1,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,1,1]],[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,1,1,0,0,0,0]],[[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]];e.a={fetch:function(){return s}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),a=n(1),o=n.n(a);s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:o.a}})},function(t,e,n){"use strict";var s=n(8),a=n.n(s);e.a={fetch:function(){return JSON.parse(window.localStorage.getItem("todos-vuejs")||"[]")},save:function(t){window.localStorage.setItem("todos-vuejs",a()(t))},deletesa:function(t){var e=JSON.parse(window.localStorage.getItem("todos-vuejs")),n=(e.splice(t,1),a()(e),a()(e));window.localStorage.setItem("todos-vuejs",n)}}},,,,function(t,e){},function(t,e){},function(t,e,n){n(12);var s=n(0)(n(4),n(15),"data-v-952d3922",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("hello",{staticClass:"hel",attrs:{id:"hell"}}),t._v(" "),n("div",{staticClass:"newn",attrs:{id:"newnn"}},[n("h1",{staticClass:"titled",domProps:{textContent:t._s(t.title)}}),t._v(" "),n("button",{attrs:{id:"sys"},on:{mousedown:function(e){t.signUp()},mouseup:function(e){t.signIn(t.items)}}},[t._v("查看todos list")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem,expression:"newItem"}],staticClass:"inputbox",attrs:{placeholder:"Do what?"},domProps:{value:t.newItem},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.addNew(e)},input:function(e){e.target.composing||(t.newItem=e.target.value)}}}),t._v(" "),n("ul",t._l(t.items,function(e,s){return n("li",[n("h3",{class:{finish:e.isFinish}},[t._v(t._s(e.label))]),t._v(" "),e.isFinish?n("p",{staticClass:"item-status",class:{finish:e.isFinish}},[t._v("finished")]):t._e(),t._v(" "),n("button",{staticClass:"del",attrs:{name:"butt"},on:{click:function(n){t.toggleFinish(e)}}},[t._v("设置倒计时")])])}))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"shu"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.sd,expression:"sd"}],attrs:{placeholder:"请输入定时时间"},domProps:{value:t.sd},on:{input:function(e){e.target.composing||(t.sd=e.target.value)}}}),n("span",[t._v("单位/分钟")]),t._v(" "),n("button",{on:{click:t.begin}},[t._v("倒计时开始")]),t._v(" "),n("p",{attrs:{id:"ttt"}},[t._v(t._s(t.sd))])]),t._v(" "),n("div",{attrs:{id:"box"}},[n("canvas",{attrs:{id:"canvas"}}),t._v(" "),n("div",{staticClass:"music",attrs:{id:"music"}},[n("p",[t._v("Time's up!!!")]),t._v(" "),n("button",{attrs:{id:"stopp"},on:{click:function(e){t.stopMusic()}}},[t._v("stop")])])])])},staticRenderFns:[]}}],[6]);
//# sourceMappingURL=app.77b43967350b27bef00f.js.map