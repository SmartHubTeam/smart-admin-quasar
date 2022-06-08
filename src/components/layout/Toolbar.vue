<script setup lang="ts">
import { useSidebarStore } from 'stores/layout/sidebar-store'

const sidebarStore = useSidebarStore()
</script>

<template>
  <q-toolbar>
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="sidebarStore.toggle"
    />

    <q-toolbar-title>
      Quasar App
    </q-toolbar-title>

    <div>Quasar v{{ $q.version }}</div>
  </q-toolbar>
</template>
