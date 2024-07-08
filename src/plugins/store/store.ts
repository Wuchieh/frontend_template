import {defineStore} from "pinia";
import {ref} from "vue";

export const useStore = defineStore('app', () => {
  // 建議使用 storeToRefs 導出
  // const app = useStore()
  // const {count} = storeToRefs(app)
  const count = ref(0)
  const addCount = (num: number = 1) => {
    count.value += num
  }

  return {
    count,
    addCount
  }
})
