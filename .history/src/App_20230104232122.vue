<template>
  <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @addTodo="addTodo"/>
      <MyList :todos="todos" /><!-- :checkTodo="checkTodo" :deleteTodo="deleteTodo" -->
      <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
    </div>
  </div>
</div>
</template>

<script>
import pubsub from 'pubsub-js'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components:{MyHeader, MyList, MyFooter},
  data(){
          return{
              todos:/* [//初始化
              {id:'01',title:'food',done:true},
              {id:'02',title:'code',done:true}
              ] */
              JSON.parse(localStorage.getItem('todos')) || []//从loaclStorage读出来
          }
        },
  methods:{
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id===id) todo.done=!todo.done
      }
      )
    },
    updateTodo(id,title){
      
      this.todos.forEach((todo)=>{
        if(todo.id===id) todo.title=title
      }
      )
      //console.log(id,title)
    },
    deleteTodo(_,id){
      this.todos=this.todos.filter(todo=>todo.id !== id)
    },
    checkAllTodo(done){
      this.todos.forEach(todo=>todo.done=done)
    },
    clearAllTodo(){
      this.todos=this.todos.filter(todo=>!todo.done)
    }
  },
  watch:{
    /* todos(value){//只监视第一层，不是深度监视
      localStorage.setItem('todos',JSON.stringify(value))
    } */
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  },
  mounted(){
    this.emitter.on('checkTodo',this.checkTodo)
    this.emitter.on('updateTodo',this.updateTodo)
    this.emitter.on('addTodo',this.addTodo)
    this.pubId=pubsub.subscribe('deleteTodo',this.deleteTodo)
  },
  beforeDestroy(){
    this.emitter.off('checkTodo')
    this.emitter.off('updateTodo')
    this.emitter.off('addTodo')
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style>
  /*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid skyblue;
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
