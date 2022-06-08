<script setup lang="ts">
import { useSidebarStore } from 'stores/layout/sidebar-store'
import Sidebar from 'components/layout/Sidebar.vue'
import Toolbar from 'components/layout/Toolbar.vue'

const sidebarStore = useSidebarStore()
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <Toolbar />
    </q-header>

    <q-drawer
      v-model="sidebarStore.open"
      show-if-above
      bordered
    >
      <Sidebar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
