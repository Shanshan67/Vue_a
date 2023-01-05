<template>
  <div class="container">
    <router-link to="/">MySearch</router-link><!-- <MySearch/> -->
    <router-link to="/mylist">MyList</router-link><!-- <MyList/> -->
  </div>
</template>

<script>
import MySearch from './components/MySearch.vue';
import MyList from './components/MyList.vue';
export default {
  name: 'App',
  components:{MySearch,MyList},
 
}
</script>

