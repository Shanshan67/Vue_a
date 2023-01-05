<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'MySearch',
    data(){
      return {
        keyWord:''
      }
    },
    methods:{
      searchUsers(){
        this.emitter.emit('updateListData',{isFirst:false,isLoading:true,err:'',users:[]})
        axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response=>{this.emitter.emit('updateListData',{isFirst:false,isLoading:false,err:'',users:response.data.items})},
          error=>{this.emitter.emit('updateListData',{isFirst:false,isLoading:false,err:error.message,users:[]})}
        )
        this.$router.push({ path:'/list' })
      }
    }
}
</script>

