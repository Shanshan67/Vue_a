<template>
    <div>
        <h1>sum:{{sum}}</h1>
        <select>
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
            sum:0
        }
    },
    methods:{
        increment(){
            this.sum +=this.n
        },
        decrement(){
            this.sum -=this.n
        },
        incrementOdd(){
            if(this.sum % 2 !== 0){
                this.sum +=this.n
            }
        },
        incrementWait(){
            this.sum=this.n
        }
    }
}
</script>
