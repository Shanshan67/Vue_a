<template>
    <div>
        <h1>sum:{{$store.state.sum}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;
        <button @click="increment">+</button>&nbsp;
        <button @click="decrement">-</button>&nbsp;
        <button @click="incrementOdd">odd</button>&nbsp;
        <button @click="incrementWait">wait</button>&nbsp;
    </div>
</template>

<script>
export default {
    name:'MyCount',
    data() {
        return {
            n: 1,
        }
    },
    methods:{
        increment(){
            this.$store.dispatch('jia',this.n)
        },
        decrement(){
            this.$store.dispatch('jian',this.n)
        },
        incrementOdd(){
            if(this.$store.state.sum % 2){
                this.$store.dispatch('jia',this.n)
            }
        },
        incrementWait(){
            
        }
    }
}
</script>
