<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import MenuItem from 'components/layout/MenuItem.vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },

  items: {
    type: Array as PropType<any[]>,
    required: true,
  },
})
</script>

<template>
  <q-item-label header>
    {{ props.label }}
  </q-item-label>

  <MenuItem
    v-for="item in props.items"
    :key="item.label"
    v-bind="item"
  />
</template>
