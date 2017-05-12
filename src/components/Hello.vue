<template>
  <div class="hello">
    <div class="shu"> 
    <h1>{{ msg }}</h1>
    <input  v-model = "sd" placeholder = "请输入定时时间"><span>单位/分钟</span>
    <button v-on:click = "begin">倒计时开始</button>
    <p id= "ttt">{{sd}}</p>
    </div>
    <div id ="box">
    <canvas id = "canvas"></canvas>
    <div id = "music" class="music">
    <p>Time's up!!!</p>
    <button id ="stopp" v-on:click = "stopMusic()">stop</button>
    </div>
    </div>
  </div>
</template>

<script>
import Digit from '../digit'

var digit = Digit.fetch(); 
var MARGIN_TOP ;
var MARGIN_LEFT ;
var RADIUS ;
var sdf,sop,sos;
var msm = true;
//const sot =216;
var sot;
var height,width;
var box;
var hours,minutes,seconds;
var curTime,ret,rot,pastTime,sst;
var curHours,curMinutes,curSeconds,pastHours,pastMinutes,pastSeconds;
var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];

//页面变化时，动态获取canvas大小
function resize(){
  box = document.getElementById("box");
  height = box.clientHeight;
  width = box.clientWidth;
  canvas.height = height;
  canvas.width = width;
   MARGIN_LEFT = Math.round(width/10);
   RADIUS = Math.round(width*4/5/108)-1;
   MARGIN_TOP = Math.round(height/5);
}
window.onresize = resize;

//定时时间到达时，通过AJAX请求，播放音乐
var xhr = new XMLHttpRequest();
var ac = new (window.AudioContext||window.webkitAudioContext)();
var gainNode = ac[ac.createGain ? "createGain":"createGainNode"]();
gainNode.connect(ac.destination);
var analyser = ac.createAnalyser();
var size = 64;
analyser.fftSize = size * 2;
analyser.connect(gainNode);

var source = null;
var count = 0;

function musicPlay(url){
  
  var n = ++count;
  source&&source[source.stop ? "stop" : "noteOff"]();
  xhr.abort();
   xhr.open("get",url);
   xhr.responseType = "arraybuffer";
   xhr.onload=function(){
    if(n != count) return;
    ac.decodeAudioData(xhr.response,function(buffer){
    if(n != count) return;
      var bufferSource = ac.createBufferSource();
      bufferSource.buffer = buffer;
      bufferSource.connect(analyser);
      bufferSource[bufferSource.start ? "start":"noteOn"](ac.currentTime,0);
      source = bufferSource;
        },function(err){
      console.log(err);
    });
   
}
   xhr.send();  

}

function stopClock(){

       source[source.stop ? "stop" : "noteOff"](ac.currentTime);

      }

//获取canvas画布，开始绘制
function beginn(){
   msm = false;
   resize();

   sop = document.getElementById("ttt").innerHTML;
   sos = document.getElementById("ttt").innerHTML;
   sot = sop*60;
   sdf = sos*60;

   var canvas = document.getElementById("canvas");
   var context = canvas.getContext("2d");
   pastTime = new Date();
   rot = pastTime.getHours()*3600 + pastTime.getMinutes()*60 + pastTime.getSeconds();

   //设置循环函数，更新canvas画布内容及小球运动状态

   var timer = setInterval(function(){
      render(context);
      update();
      //判断定时时间截止时，停止setInterval循环，并发送AJAX请求
      if(sdf<0){
         clearInterval(timer);
         var music = document.getElementById("music");
         music.className = "dis";
         musicPlay("../../static/T1213121.mp3");
      }

  },50);

}
//更新定时时间，通过new Date()方法获取当前时间，进行比较，计算并更新倒计时时间
function update(){
  
  curTime = new Date();
  ret = curTime.getHours()*3600 + curTime.getMinutes()*60 + curTime.getSeconds();

  sst = sdf;
  sdf = sot - (ret - rot);


   curHours = parseInt(sdf/3600);
   curMinutes = parseInt((sdf-curHours*3600)/60);
   curSeconds = sdf % 60;

    pastHours = parseInt(sst/3600);
    pastMinutes = parseInt((sst - pastHours*3600)/60);
    pastSeconds = sst % 60;

    //判断倒计时时间是否变化，添加小球

      if(parseInt(curSeconds%10)!= parseInt(pastSeconds%10)){
        addBalls(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(curSeconds%10));
      }

      if( parseInt(curHours/10) != parseInt(pastHours/10)){
        addBalls(MARGIN_LEFT+0,MARGIN_TOP,parseInt(curHours/10))
      }
      if(parseInt(curHours%10 != parseInt(pastHours%10))){
         addBalls(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(curHours%10))
      }

      if(parseInt(curMinutes/10)!= parseInt(pastMinutes/10)){
        addBalls(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(curMinutes/10))
      }
      if(parseInt(curMinutes%10) != parseInt(pastMinutes%10)){
         addBalls(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(curMinutes%10))
      }

         if(parseInt(curSeconds/10)!= parseInt(pastSeconds/10)){
        addBalls(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(curSeconds/10))
      }
    
   updateBalls();
  
}

//更新添加的小球的运动状态

function updateBalls(){

   for(var i=0;i<balls.length;i++){
      balls[i].x += balls[i].vx;
      balls[i].y += balls[i].vy;
      balls[i].vy += balls[i].g;

  //设置小球碰撞机制，当小球撞击地面时，速度损耗0.75
      if(balls[i].y >= height - RADIUS){
         balls.y = height - RADIUS;
         balls[i].vy = - balls[i].vy*0.75;
      }

   }
//性能优化，通过判断小球是否移出画面，删除小球数组中的部分小球，减小内存压力
  var cnt = 0;
   for (var i = 0; i <balls.length; i++) {
     if(balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < width){
           balls[cnt++] = balls[i];
         }
    }
       while(balls.length > Math.min(800,cnt)){
             balls.pop();
           }

}

//添加小球函数

function addBalls(x,y,num){

 if (sdf < 0) return;

  for(var i=0;i<digit[num].length;i++){
    for(var j=0;j<digit[num][i].length;j++){
      if(digit[num][i][j] === 1){
          var aBall = {
           x:x+j*2*(RADIUS+1)+(RADIUS+1),
           y:y+i*2*(RADIUS+1)+(RADIUS+1),
           g:1.5+Math.random(),
           vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
           vy:-5,
           color:colors[Math.floor(Math.random()*colors.length)]
         }
         balls.push(aBall);
      }
    }
  }
}
//canvas绘制时间及小球运动动画
function render(ctx){

  if(sdf < 0 ){
    sdf = 0;
  };
//绘制时间
  ctx.clearRect(0,0,width,height);
  hours = parseInt(sdf/3600);
  minutes = parseInt((sdf-hours*3600)/60);
  seconds = sdf % 60;
  renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),ctx);
  renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),ctx);
  renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,ctx);
  renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),ctx);
  renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),ctx);
  renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,ctx);
  renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),ctx);
  renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),ctx);

//绘制添加小球
  for(var i = 0; i<balls.length; i++){

    ctx.fillStyle = balls[i].color;

    ctx.beginPath();
    ctx.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI,true);
    ctx.closePath();

    ctx.fill();
  }
}

//canvas绘制时间函数
function renderDigit(x,y,num,ctx){
   ctx.fillStyle = "rgb(0,102,153)";
   for(var i = 0;i<digit[num].length;i++){
       for(var j = 0;j<digit[num][i].length;j++){
        if(digit[num][i][j] === 1 ) {
          ctx.beginPath();
          ctx.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
          ctx.closePath();
          ctx.fill();
        };
       }
   }
}
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome To Your Gorgeous Clock App',
      sd: ""
    }
  },
  updated: function(){
         if( msm ){
           sot = document.getElementById("ttt").innerHTML;
         }
        
  },
  methods:{
    begin: function(){
      beginn();
    },
    stopMusic: function(){
      stopClock();
      alert("时间到！请刷新页面进行下一次体验");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  margin-bottom: 20px;
}
.shu{

  height: 15%;
}
 #box{
  width: 100%;
  height: 85%;
  position: relative;
  background: #333;

}
#ttt{
  display: none;
}
.music{
  display: none; 
}
.dis{
  display: block;
  position: relative;
  top:-70%;
  border:3px solid #666;
  border-radius: 20px;
  background: #ccc;
  width: 20%;
  height: 100px;
  line-height:200%;
  left: 40%;
  padding-top:5px;
}
#stopp{
  width: 30%;
  padding: 0 auto;
  height: 25px;
}
button{
  cursor: pointer;
}
</style>
