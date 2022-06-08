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
  <MenuList :menus="menus" />
</template>
