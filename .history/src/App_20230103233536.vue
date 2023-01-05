<template>
  <div class="container">
    <router-link to="/" /><!-- <MySearch/> -->
    <router-link to="/mylist" /><!-- <MyList/> -->
  </div>
  <div><router-view></router-view></div>
</template>

<script>

export default {
  name: 'App',
}
</script>

