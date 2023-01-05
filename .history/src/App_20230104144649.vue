<template>
  <div class="container">
    <!-- <router-link :to="{name:'MySearch'}">search</router-link> <MySearch/> -->
    <!-- <router-link to="/list" /><MyList/> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  //components:{MySearch},
 
}
</script>

