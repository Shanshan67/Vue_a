<template>
  <div>
    <MyCount/>
  </div>
</template>

<script>
import MyCount from './components/MyCount'
export default {
  name: 'App',
  components:{MyCount},
  mounted() {
    console.log(this)
  },
}
</script>

