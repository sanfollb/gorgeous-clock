<template>
  <div id="app">
     <hello class ="hel" id = "hell"></hello>
     <div class="newn" id="newnn">
     <h1 v-text="title" class="titled"></h1>
     <button id = "sys" v-on:mousedown="signUp()" v-on:mouseup="signIn(items)">查看todos list</button>
    <input v-model = "newItem" class="inputbox" v-on:keyup.enter="addNew" placeholder="Do what?">
    <ul>
      <li v-for="(item,index) in items">
      <h3 v-bind:class="{finish:item.isFinish}">{{item.label}}</h3>
      <p class="item-status" v-if="item.isFinish" v-bind:class="{finish:item.isFinish}">finished</p>
      <button v-on:click="toggleFinish(item)" class="del" name="butt">设置倒计时</button>
      </li>
    </ul>
    </div>
   </div>
</template>

<script>
import Hello from './components/Hello'
import Store from './store'

//切换todolist页与gorgeous clock页面
function see(){
var helloo = document.getElementById("hell");
helloo.className = "done";
var newnn = document.getElementById("newnn");
newnn.className = "dided";
}

export default {
  name: 'app',
  components: {
    Hello
  },
  data(){
    return{
      title:'todos-list with gorgeous-clock',
      items: [],
      newItem: ""  
    }
  },
  watch:{
     items:{
      handler(items){
        Store.save(items)
      },
      deep:true
     }
  },
   methods:{
    addNew: function(){
      this.items.push({
      label:this.newItem ,
      isFinish:false 
     })
      this.newItem = ""
    },
    toggleFinish: function(item){
      item.isFinish = !item.isFinish
       see();
    },
    signUp:function(){
      this.items=Store.fetch()
    },
    signIn:function(items){    
    var sss=items.length
    var syt=document.getElementsByName("butt")
    for(var i=0;i<sss;i++){
      if(items[i].isFinish){
        syt[i].disabled = true
      }
     }
    }
   }
  }

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body {
  height: 100%;
  width: 100%;
  background: #ddd;
 
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.inputbox{
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
}
.lis{
  cursor: pointer;
  
}
ul{
  text-align: left;
  list-style: none;
  line-height: 60px;
  display: block;
}
li{
  font-size: 20px;
  font-weight: bold;
  display: block;
  height: 40px;
  line-height: 40px;
}
.del{
  display: none ;
}
h3{
  display: inline-block;
}
h1{
  width: 100%;
  overflow: auto;
  margin-top: 10px;
  margin-bottom: 20px;
}
li:hover .del{
display: inline-block;
font-size: 15px;
cursor: pointer;
}
#app .done{
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.newn{
  display: inline-block;
  width: 70%;
  height: 100%;
}
.hel{
  display: none;
}
.dided{
  display: none;
}
.item-status{
  display: inline;
  background: red;
  color: white;
  padding: 0 5px;
  font-size: 12px;
}
.finish{
  text-decoration: line-through;
}
#sys{
  margin-bottom: 5px;
  width: 150px;
  height: 30px;
  font-size: 20px;
}
</style>
