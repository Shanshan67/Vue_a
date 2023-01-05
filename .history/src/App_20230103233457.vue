<template>
  <div class="container">
    <router-link to="/" /><!-- <MySearch/> -->
    <router-link to="/mylist" /><!-- <MyList/> -->
  </div>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

