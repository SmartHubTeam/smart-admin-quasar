<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import MenuGroup from 'components/layout/MenuGroup.vue'

const props = defineProps({
  menus: {
    type: Array as PropType<any[]>,
    required: true,
  },
})
</script>

<template>
  <q-list>
    <template v-for="group in props.menus" :key="group.label">
      <MenuGroup v-bind="group" />
    </template>
  </q-list>
</template>
