<script setup lang="ts">
import { RouterEnum } from 'src/core/enums'
import MenuList from 'components/layout/MenuList.vue'

const menus = [
  {
    label: 'Conteúdo',
    items: [
      {
        label: 'Páginas',
        icon: 'school',
        items: [
          {
            label: 'Listagem',
            to: { name: RouterEnum.PAGE },
          },
          {
            label: 'Templates',
            to: { name: RouterEnum.PAGE_TEMPLATE },
          },
        ],
      },
    ],
  },
  {
    label: 'Módulos',
    items: [
      {
        label: 'Quiz',
        icon: 'school',
        to: { name: RouterEnum.MODULE_QUIZ },
      },
      {
        label: 'Etapas',
        icon: 'school',
        to: { name: RouterEnum.MODULE_STEP },
      },
    ],
  },
  {
    label: 'Segurança',
    items: [
      {
        label: 'Usuários',
        icon: 'school',
        to: { name: RouterEnum.SECURITY_USER },
      },
      {
        label: 'Grupos',
        icon: 'school',
        to: { name: RouterEnum.SECURITY_GROUP },
      },
    ],
  },
]
</script>

<template>
  <div class="app-sidebar">
    <div class="q-my-lg flex justify-around">
      <q-img src="~assets/logo-white.svg" width="50%" />
    </div>

    <q-separator class="q-my-lg" size="1" />

    <MenuList :menus="menus" class="q-mx-md text-weight-bold" />
  </div>
</template>

<style lang="scss">
.q-drawer--dark {
  .app-sidebar {

    color: #d1d5db;

    .q-item__label--header {
      text-transform: uppercase;
      color: #6b7280;
    }

    .q-item:not(.q-item--active) {
      .q-item__section--side {
        color: #d1d5db;
      }

      .q-item__section--avatar {
        color: #9ca3af;
      }
    }

    .q-separator {
      background: #2d3748;
    }

    .q-item--active.q-hoverable > .q-focus-helper {
      background: #d7d9dd;
      opacity: 0.15;
    }

    .q-item__section--avatar {
      min-width: unset;
    }

    .q-item__section--side {
      padding-right: 8px;
    }

    .q-hoverable > .q-focus-helper {
      border-radius: 8px;
    }

  }
}
</style>
