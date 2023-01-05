<template>
    <li>
        <label>
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <!-- <input type="checkbox" v-model="todo.done"/> 不用methods中的handleCheck了-->
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input 
          type="text" 
          v-show="todo.isEdit" 
          :value="todo.title"
          @blur="handleBlur(todo,$event)"
          ref="inputTitle">
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">Edit</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'MyItem',
        props:['todo'],//声明接收todo对象,'checkTodo','deleteTodo'
        methods:{
          handleCheck(id){
            //this.checkTodo(id)
            this.emitter.emit('checkTodo',id)
          },
          handleDelete(id){
            if(confirm('delete?')){
              //this.deleteTodo(id)
              //this.$bus.$emit('deleteTodo',id)
              pubsub.publish('deleteTodo',id)
            }
          },
          handleEdit(todo){
            if(todo.hasOwnProperty.call(todo,'isEdit')){
              todo.isEdit=true
            }else{
              todo['isEdit']=true//this.$set(todo,'isEdit',true)//给todo追加一个属性，名字为'isEdit'，值为true。这样就是响应式的，就是被vue认可的属性
            }
            this.$nextTick(function(){//在下一次DOM更新结束后执行其指定的回调：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行
              this.$refs.inputTitle.focus()
            })
          },
          handleBlur(todo,e){
            todo.isEdit=false
            this.emitter.emit('updateTodo',todo.id,e.target.value)
            //console.log(e.target.value)
          }
        }
    }
</script>

<style scoped>
    /*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color:#ddd;
}

li:hover button{
  display: block;
}
</style>