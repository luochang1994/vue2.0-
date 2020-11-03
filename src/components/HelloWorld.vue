<template>
  <div class="hello">
    <h1  v-for="item in msg"  :key="item.id">{{ item.goodsName }}</h1>

    <!-- <div class="bbb" v-for="(item,index) in adAd" :key="index">{{item}}</div> -->
        <bbbb :msg1="listA"></bbbb>


  </div>
</template>

<script>
import {
  getList,
  del,
} from '@/api/area.js'
import bbbb from '@/components/bbb.vue'

export default {
  name: "HelloWorld",
  props: {
    msg: Array,

  },
  components: {
    bbbb
  },
  data () {
    return {
     listA:{},
     llll:[
                    {
                        imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595508447236&di=3f01d09ae138d39d9739606d11d3051c&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                        goodsName:'23423rwfw',
                        statusName:'100',
                        goodsNumber:'40*40 颜色：红色',
                        num:'10',
                        id:'1',
                    },
                    {
                        imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595508447236&di=3f01d09ae138d39d9739606d11d3051c&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                        goodsName:'哟哟fsdfsdfsdf哟',
                        statusName:'100',
                        goodsNumber:'40*40 颜色：红色',
                        num:'10',
                        id:'2',
                    },
                    {
                        imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595508447236&di=3f01d09ae138d39d9739606d11d3051c&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                        goodsName:'aggdasdgasfdsd',
                        statusName:'100',
                        goodsNumber:'40*40 颜色：红色',
                        num:'10',
                        id:'3',
                    },
                ],
    }
  },
  mounted() {

    this.listA = this.msg[0];

    this.$emit('update:msg',this.llll)
    // this.getData()
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
  },
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
