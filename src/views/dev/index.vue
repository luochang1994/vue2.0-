<template lang="">
    <div class='devClass'>
        我是第一个页面的dome设置devdevdevdevdevdevdevdevdevdevdevdevdevdev
        dev
        dev
        dev
        dev
        dev============

    </div>
</template>
<script>
export default {
    data(){
        return {
            aa:'safsdfa',
        }
    },
    created(){
        console.log(this.aa)
        console.log('我是第三')

    },
}
</script>
<style lang="less" scoped>
    .devClass{
        width: 100%;
        height: 100%;
        background: yellow;
    }
</style>