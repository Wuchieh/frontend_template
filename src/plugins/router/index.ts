import {createMemoryHistory, createRouter, RouteRecordRaw} from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue";


const routes: RouteRecordRaw[] = [
  {path: "/", component: HelloWorld}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
