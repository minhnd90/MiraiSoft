<script setup lang="ts">
import SidebarTree from '@/components/SidebarTree.vue'
import { useFoldersStore } from '@/stores/folders'
const { folders } = useFoldersStore()
</script>

<template>
  <VNavigationDrawer>
    <div class="d-flex justify-center py-8">
      <VBtn color="primary" class="text-none font-weight-bold" size="large">Import documents</VBtn>
    </div>
    <VList density="compact" nav mandatory>
      <SidebarTree :items="folders" :sub-group="false" />
    </VList>
  </VNavigationDrawer>
</template>

<style module="classes" lang="scss"></style>
