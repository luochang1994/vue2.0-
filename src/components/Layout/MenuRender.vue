<template>
  <Menu
    theme="dark"
    width="auto"
    :active-name="activeName"
  >
    <MenuSingle
      v-for="(menu, idx) in menus" :key="idx"
      :menu-item="menu"
    />
  </Menu>
</template>

<script>
import MenuSingle from './MenuSingle'

export default {
  components: {
    MenuSingle,
  },
  props: {
    menus: {
      type: Array,
      default: () => ([]),
    },
    activeName: String,
  },
  created () {
    console.log('menus========', this.menus)
  }
}
</script>
