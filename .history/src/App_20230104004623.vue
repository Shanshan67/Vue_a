<template>
  <div class="container">
    <router-link :to="{name:MySearch}">{{ MySearch }}</router-link> <!-- <MySearch/> -->
    <!-- <router-link to="/list" /><MyList/> -->
    
  </div>
  <div><router-view /></div>
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

