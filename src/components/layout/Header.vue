<script setup lang="ts">
import { useSidebarStore } from 'stores/layout/sidebar-store'

const sidebarStore = useSidebarStore()
</script>

<template>
  <q-header class="bg-white text-black">
    <q-toolbar>
      <template v-if="$q.screen.lt.md">
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
      </template>

      <q-space v-else />

      <div class="q-gutter-x-md">
        <q-btn flat round dense icon="notifications">
          <q-badge floating color="red">
            2
          </q-badge>
        </q-btn>

        <q-avatar color="teal" size="md" text-color="white">
          L
        </q-avatar>
      </div>
    </q-toolbar>
  </q-header>
</template>

<style scoped lang="scss">
.q-header {
  box-shadow: rgb(100 116 139 / 12%) 0px 1px 4px;
}
</style>
