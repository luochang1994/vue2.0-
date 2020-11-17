<template>
  <el-container class="layout">
    <el-header class="headerT">
      <div class="titleHeader">星聚客</div>
      <el-dropdown class="dropdownHover" @command="handleCommand">
        <!-- <i class="el-icon-setting" style="margin-right: 15px"></i> -->
        <span class="glo-nowrap">luochang</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </el-header>
    <el-container style="height: calc(100vh - 60px);">
      <el-aside width="210px" class="leftMenu" >
        <el-menu 
        class="menuBackground"
        :default-active="this.$route.path"  
        router
        :unique-opened=true
        >
          <el-menu-item index="/home">
            <i class="el-icon-setting"></i>
            <span slot="title">我的首页</span>
          </el-menu-item>
          <el-submenu index="1" >
            <template slot="title"><i class="el-icon-message"></i>系统设置</template>
            <el-menu-item-group class="menuBackgroundItem">
              <el-menu-item index="/dev">设置</el-menu-item>
              <el-menu-item index="/devDome2">个人</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>组织架构</template>
            <el-menu-item-group class="menuBackgroundItem">
              <el-menu-item index="2-1">部门</el-menu-item>
              <el-menu-item index="2-2">人员</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>人员管理</template>
            <el-menu-item-group class="menuBackgroundItem">
              <el-menu-item index="3-1">删除人员</el-menu-item>
              <el-menu-item index="3-2">添加人员</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>

      </el-aside>
      <el-main>
        <bbb :msg.sync="list" @hook:updated="$_handleSelectUpdated"></bbb>
        <div @click="up">上</div>
        <div @click="down">下</div>
        <slot />

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {
  mapState,
} from 'vuex'
import Vue from 'vue'
import _ from 'lodash'
import MenuSingle from './MenuSingle'
import bbb from '@/components/HelloWorld.vue'

var swapItems = function(arr, index1, index2){
    　　arr[index1] = arr.splice(index2,1,arr[index1])[0]
    　　return arr
    }
    var newArr = [];
export default {
  components: {
    bbb
  },
  data () {
    return {
     list:[
                    {
                        imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595508447236&di=3f01d09ae138d39d9739606d11d3051c&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                        goodsName:'哟哟哟',
                        statusName:'100',
                        goodsNumber:'40*40 颜色：红色',
                        num:'10',
                        id:'1',
                    },
                    {
                        imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595508447236&di=3f01d09ae138d39d9739606d11d3051c&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                        goodsName:'哟哟哟',
                        statusName:'100',
                        goodsNumber:'40*40 颜色：红色',
                        num:'10',
                        id:'2',
                    },
                    {
                        imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595508447236&di=3f01d09ae138d39d9739606d11d3051c&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                        goodsName:'哟哟哟',
                        statusName:'100',
                        goodsNumber:'40*40 颜色：红色',
                        num:'10',
                        id:'3',
                    },
                ],
    }
  },
  created () {



    

    // var arr = [1,2,3]
    // this.upData(arr,1)

  },
  mounted () {
    // console.log()
    this.up(1)
  },

  computed: {
    ...mapState([
    
    ]),
 
  },

  watch: {

  },

  methods: {
    $_handleSelectUpdated() {
      console.log('custom-select组件的updated钩子函数被触发')
    },
    updatedA(){
      console.log('监听到啦hook')
    },

    up(index) {
        if(index === 0) {
          return
        }
        //在上一项插入该项
        this.list.splice(index - 1, 0, (this.list[index]))
        //删除后一项
        this.list.splice(index + 1, 1)

        // this.save();
        console.log(this.list)
    },
    down(index) {
        if (index === (this.list.length-1)) {
          return
        }
        // 在下一项插入该项
        this.list.splice(index + 2, 0, (this.list[index]))
        // 删除前一项
        this.list.splice(index, 1)

        // this.save();
        console.log(this.list)

    },
    upData (arr, index) {
    　　if (arr.length > 1 && index !== 0) {
    　　　　newArr = swapItems(arr, index, index - 1)
            console.log(newArr)
    　　}
    },
    downData (arr, index) {
    　　if (this.arr.length > 1 && index !== (this.arr.length - 1)) {
    　　　　newArr = swapItems(this.arr, index, index + 1)
    　　}
    },
     handleCommand(command) {
       console.log(command)
       switch (command) {
         case 'logout':
            this.$message('click on item ' + command);
            this.$router.replace('/login')
            break;
       }
      }
  },
}
</script>

<style lang="less" scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .layout{
    height:100vh;
  }
  .leftMenu{
    text-align: left;
    background: #515a6e;
    overflow-x: hidden;
  }
  .menuBackground{
    width: 211px;
    background: #515a6e;
  }
  
  .menuBackgroundItem{
    background: #515a6e;
    
  }
  /deep/ .el-submenu__title{
    color: #a6acb3 !important;

  }
  /deep/ .el-menu-item {
    color: #a6acb3 ;

  }
  .headerT{
    background: #424958;
    color: white;
    position: relative;
  }
  .titleHeader{
    line-height: 60px;
    float: left;
    font-size: @padding-tit;
    font-weight: bold;
    font-family: '宋体';
  }
  .dropdownHover{
    float: right;
    span{
      color: white;
      // display: inline-block;
      float: right;
      max-width: 100px;
      cursor: pointer;
    }
  }
</style>
