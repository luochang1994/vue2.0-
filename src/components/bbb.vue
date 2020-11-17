<template>
  <div class="hello">
    <h1>{{ msg1.goodsName }}123456=========</h1>

        <div @click="add">点击++{{num}}</div>

  </div>
</template>

<script>
import {
  getList,
  del,
} from '@/api/area.js'
export default {
  name: "HelloWorld",
  props: {
    msg1: Object,
  },
  data(){
        return {
            num:1,
        }
    },
  mounted() {


  },
  methods: {
    async getData (query) {
      var that = this
      const { success, data } = await getList({
        page: 1,
        limit: 20,
        usernames: '',
      })
    },
    add(){
      this.num++
    },
  },
  updated(){
    console.log('我更新啦')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.bbb{
  color:@clr-danger;
}
</style>
