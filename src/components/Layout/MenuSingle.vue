<template>
  <Submenu
    v-if="menuItem.children && menuItem.children.length"
    :name="menuItem.path"
  >
    <div slot="title" class="menu-item">
      <Icon :type="menuItem.icon" />
      <span>{{ menuItem.label }}</span>
    </div>
    <MenuSingle
      v-for="(menu, idx) in menuItem.children" :key="idx"
      :menu-item="menu"
    />
  </Submenu>
  <MenuItem
    v-else
    class="menu-item"
    :name="menuItem.path"
    :to="menuItem.path"
  >
    <Icon :type="menuItem.icon" />
    <span><a class="aHove" :title="menuItem.label">{{ menuItem.label }}</a> </span>
  </MenuItem>
</template>

<script>
export default {
  props: {
    menuItem: Object,
  },
  created (){
    // console.log('aaaaaaa==========',this.menuItem)

  },
}
</script>

<style lang="less" scoped>
.menu-item {
  /deep/ span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  /deep/ i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  a {
    color: white;
  }
  


}
.ivu-menu-item-selected{
    color: #2d8cf0 !important;
  }
  .ivu-menu-item-active{
    color: #2d8cf0 !important;
  }

  .ivu-menu-item-selected a{
    color: #2d8cf0 !important;
  }
  .ivu-menu-item-active a{
    color: #2d8cf0 !important;
  }
</style>
