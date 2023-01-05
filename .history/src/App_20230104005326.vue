<template>
  <div class="container">
    <router-link :to="{name:'MySearch'}">search</router-link> <!-- <MySearch/> -->
    <!-- <router-link to="/list" /><MyList/> -->
    <router-view></router-view>
  </div>
</template>

<script>
//import MySearch from './components/MySearch';
//import MyList from './components/MyList';
export default {
  name: 'App',
  //components:{MySearch},
 
}
</script>

