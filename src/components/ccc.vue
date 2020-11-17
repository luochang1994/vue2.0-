<template>
    <div @click="add">8888888888888{{num}}{{msg}}</div>
</template>
<script>
export default {
    props:{
        msg:String
    },
    data(){
        return{
            num:1,
        }
    },
    mounted(){

    },
    methods:{
        add(){
            console.log('我点击啦')
            this.num++
        },
    },
    updated(){
        console.log('我======跟新啦')
    },
}
</script>