<template>
    <div>
        <h1>persons</h1>
        <input type="text" placeholder="your name">
        <button>add</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'MyPerson',
    computed:{
        personList() {
            return this.$store.state.personList
        }
    }
}
</script>
