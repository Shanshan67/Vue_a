<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    //import pubsub from 'pubsub-js'
    export default {
        name:'MyHeader',
        //props:['addTodo'],
        data(){
            return {
                title:''
            }
        },
        methods:{
            add(event){
                if(!event.target.value.trim()) return alert('unvalid')
                const todoObj={id:nanoid(), title:event.target.value, done:false}//title:this.title
                //this.addTodo(todoObj)
                this.emitter.emit('addTodo',todoObj)
                event.target.value=''
            }
        }
    }
</script>

<style scoped>
    /*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>