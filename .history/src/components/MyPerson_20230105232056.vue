<template>
    <div>
        <h1>persons</h1>
        <h1 style="color:blue">count total:{{sum}}</h1>
        <h1>first name:{{firstPersonName}}</h1>
        <input type="text" placeholder="your name" v-model="name">
        <button @click="add">add</button>
        <button @click="addWang">addw</button>
        <button @click="addPersonServer">addasync</button>
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
            return this.$store.state.personAbout.personList
        },
        sum() {
            return this.$store.state.countAbout.sum
        },
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
    },
    methods:{
        add() {
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('personAbout/ADD_PERSON',personObj)
            this.name=''
        },
        addWang (){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.dispatch('personAbout/addPersonWang',personObj)
            this.name=''
        },
        addPersonServer(){
            this.$store.dispatch('personAbout/addPersonServer')
        }
    }
}
</script>
