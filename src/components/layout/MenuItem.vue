<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, defineProps } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },

  items: {
    type: Array as PropType<any[]>,
  },

  to: {
    type: Object as PropType<any>,
  },

  icon: {
    type: String,
    default: '',
  },

  insetLevel: {
    type: Number,
    default: 0,
  },
})

const route = useRoute()

const active = computed(() =>
  // se for um item
  (props.to && (route?.name as string ?? '').startsWith(props.to.name))
  // se for uma lista de items
  || (props.items?.length && props.items.some(item => (route?.name as string ?? '').startsWith(item.to.name))),
)
</script>

<template>
  <q-expansion-item
    v-if="props.items?.length"
    :icon="props.icon"
    :label="props.label"
    :default-opened="active"
    :header-class="active ? 'text-secondary' : ''"
    class="app-menu-item"
  >
    <MenuItem
      v-for="item in props.items"
      :key="item.label"
      v-bind="item"
      :inset-level="0.6"
    />
  </q-expansion-item>

  <q-item
    v-else
    clickable
    :to="props.to"
    :active="active"
    :inset-level="insetLevel"
    active-class="text-secondary"
    class="app-menu-item"
  >
    <q-item-section
      v-if="props.icon"
      avatar
    >
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>
        {{ props.label }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>
