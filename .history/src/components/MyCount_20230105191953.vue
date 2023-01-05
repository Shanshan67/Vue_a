<template>
    <div>
        <h1>sum:{{sum}}</h1>
        <h1>10times sum:{{bigSum}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;
        <button @click="JIA(n)">+</button>&nbsp;
        <button @click="JIAN(n)">-</button>&nbsp;
        <button @click="incrementOdd">odd</button>&nbsp;
        <button @click="incrementWait">wait</button>&nbsp;
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
    name:'MyCount',
    data() {
        return {
            n: 1,
        }
    },
    computed:{
        ...mapState(['sum']),
        ...mapGetters(['bigSum'])
    },
    methods:{
        /* increment(){
            this.$store.commit('JIA',this.n)
        },
        decrement(){
            this.$store.commit('JIAN',this.n)
        }, */
        ...mapMutations(['JIA','JIAN']),
        incrementOdd(){
            this.$store.dispatch('jiaOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('jiaWait',this.n)
        }
    }
}
</script>
