import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('counter', () => {
  const open = ref(true)

  function toggle() {
    open.value = !open.value
  }

  return { open, toggle }
})
