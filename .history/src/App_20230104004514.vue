<template>
  <div class="container">
    <router-link :to="{path:"/"}">{{ MySearch }}</router-link> <!-- <MySearch/> -->
    <!-- <router-link to="/list" /><MyList/> -->
    <router-view />
  </div>
</template>

<script>
//import MySearch from './components/MySearch';

import MySearch from './components/MySearch.vue';

//import MyList from './components/MyList';
export default {
  name: 'App',
  //components:{MySearch},
 
}
</script>

