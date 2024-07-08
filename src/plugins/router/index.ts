import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue";

// 供外部跳轉使用
export const Name = {
  "HELLO_WORLD": "hello_world"
}

const routes: RouteRecordRaw[] = [
  {path: "/", component: HelloWorld, name: Name.HELLO_WORLD}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 路由守衛
router.beforeEach(async (to, from, next) => {
  // 跳轉前
  next()
})
//
router.afterEach((to, from, next) => {
  // 跳轉後
})

export default router
