<template lang="">
    <div>
        我是home首页123456 11456 {{$log(aa)}}{{num}}
        <p v-html="valueLog"></p>


        <div @click="add">点击++</div>
        <!-- 监听子组件的生命周期 -->
        <dev :msg="aa"  @hook:updated="updatedA"></dev>
    </div>
    
    <!-- <div v-html="valueLog"></div> -->
</template>
<script>
import dev from '@/components/ccc';

export default {
    components: {
        dev
    },
    data(){
        return {
            aa:'homehomehomehomehomehomehome',
            valueLog:'',
            num:1,
        }
    },
    created(){
        

    },
    methods:{
        updatedA(){
            console.log('你说我执行啦吗')
        },
        aab () {
            this.aab = ()=>{
                console.log(2222)
            }
        },
        bbb(){
            console.log('mmm')
            this.aab()
        },
        upData (arr, index) {
            console.log('555')
        },
        add(){
            this.num++;
        },
    },
    mounted(){
        console.log('我可是挂载哇')
        this.$once('hook:beforeDestroy',()=>{
            console.log('我可是监听到啦销毁哇')
        })
    },
    updated(){
        console.log('我变化啦他也耶耶耶')
    },
    beforeDestroy(){
        console.log('我被销毁啦')
    }

}
</script>
<style  scope>
    .aaa{
        background: gainsboro;
        color: white;
    }
</style>