import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue";
import Wrapper from '../views/Wrapper.vue'
import dev from '../views/dev/index.vue'
import dome from '../views/dome/index.vue'
import home from '../views/home/index.vue'
import devDome2 from '../views/devDome2/index.vue'
import egg from '../views/egg/index.vue'
import body from '../views/body/index.vue'


const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

// const originalPush:any = VueRouter.prototype.push

VueRouter.prototype.push = function push (location, onResolve, onReject) {
  // if (onResolve || onReject) {
  //   return originalPush.call(this, location, onResolve, onReject)
  // }
  // return originalPush.call(this, location).catch((err) => err)
  
  return originalPush.call(this, location).catch(err => err)
}
// 直接定位到某个组件用法this.$router.replace('/device/list')
VueRouter.prototype.replace = function replace (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalReplace.call(this, location, onResolve, onReject)
  }
  return originalReplace.call(this, location).catch((err) => err)
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: login
  },
  {
    path: '/',
    redirect: '/home',
    name: 'HomeW',
    component: Wrapper,
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: { title: '首页' },
        // component: () => import('@/views/home/index.vue'),
        components:{
          default: home,
          'dome': home,
          'two':dome
        },
      },
      {
        path: 'dev',
        name: 'Dev',
        meta: { title: '页面1' },
        // component: () => import('@/views/dev/index.vue'),
        // component: () => import('@/views/dev/index.vue'),
        // 定制化一个路由根据权限指向不同的页面  通过name配置
        // <router-view  name="dome"/>  //wrapper.vue文件配置
        // 好像使用啦路由name以后components和component引入方式不可以同时使用
        components:{
          default: dev,
          'dome': dev,
          'two':egg
        },
      },
      {
        path: 'devDome2',
        name: 'DevDome2',
        meta: { title: '页面二' },
        // component: () => import('@/views/devDome2/index.vue'),
        components:{
          default: devDome2,
          'dome': devDome2,
          'two':body
        },
      },
    ],
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {   
    //scrollBehavior 方法接收 to 和 from 路由对象。第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    // console.log('savedPosition==========',savedPosition)
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
});
// 通过全局导航钩子获取到没个组件的title名称
router.beforeEach((to, from, next) => {
  // waltz.navigator.hide()
  // console.log(to.name)
  // console.log(from.name)
  if(from.name == 'Login'){

  }

  const { meta } = to
  if (meta && meta.title) {
    document.title = meta.title
  }

  next()
})

router.onError((error) => {
  console.error(error)
  console.log('路由报错啦')
})

export default router;
