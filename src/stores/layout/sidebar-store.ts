import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useQuasar } from 'quasar'

export const useSidebarStore = defineStore('counter', () => {
  const $q = useQuasar()

  const open = ref($q.screen.gt.md)

  function setOpen(value: boolean) {
    open.value = value
  }

  function toggle() {
    open.value = !open.value
  }

  return { open, setOpen, toggle }
})
