<template>
    <div>
        <h1>persons</h1>
        <h1>count total:{{sum}}</h1>
        <input type="text" placeholder="your name" v-model="name">
        <button @click="add">add</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name:'MyPerson',
    data(){
        return {
            name:''
        }
    },
    computed:{
        personList() {
            return this.$store.state.personList
        },
        sum() {
            return this.$store.state.sum
        }
    },
    methods:{
        add() {
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('ADD_PERSON',personObj)
            this.name=''
        }
    }
}
</script>
