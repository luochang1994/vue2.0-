<template>
  <Layout>
    <!-- // 定制化一个路由根据权限指向不同的页面  通过name配置 -->
    <!-- <router-view/> -->

    <router-view  name="two"/>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'

export default {
  components: {
    Layout,
  },
}
</script>
<style lang="less" scoped>
  
</style>
