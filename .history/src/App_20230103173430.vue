<template>
  <div id="app">
  <div class="container">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search"/>&nbsp;<button>Search</button>
      </div>
    </section>
    <div class="row">
      <div class="card">
        <a href="https://github.com/reactjs" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
        </a>
        <p class="card-text">reactjs</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  components:{},
 
}
</script>

<style>
 
</style>
