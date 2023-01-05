<template>
  <div class="container">
    <router-link to="/"></router-link> <!-- <MySearch/> -->
    <!-- <router-link to="/mylist" /><MyList/> -->
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

