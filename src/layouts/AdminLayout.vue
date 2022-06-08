<script setup lang="ts">
import { useSidebarStore } from 'stores/layout/sidebar-store'
import Sidebar from 'components/layout/Sidebar.vue'
import Header from 'components/layout/Header.vue'

const sidebarStore = useSidebarStore()
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <Header />

    <q-drawer
      v-model="sidebarStore.open"
      show-if-above
      bordered
      :width="280"
      dark
    >
      <Sidebar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.q-layout {
  background-color: #F9FAFC;
}
</style>
