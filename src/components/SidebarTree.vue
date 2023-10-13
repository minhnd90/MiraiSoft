<script setup lang="ts">
export interface Props {
  items: ItemT[]
  subGroup: Boolean
}
defineProps<Props>()
</script>

<template>
  <VListGroup
    v-for="{ id, name, children } in items"
    :value="name"
    :key="id"
    :subgroup="Boolean(subGroup)"
  >
    <template v-if="children" #activator="{ isOpen, props }">
      <VListItem v-bind="props" :title="name" :to="String(id)">
        <template #prepend>
          <VIcon :icon="isOpen ? 'mdi-folder-open' : 'mdi-folder'" />
        </template>
        <template #append>
          <span>{{ children.length }}</span>
        </template>
      </VListItem>
    </template>
    <SidebarTree v-if="children" :items="children" :sub-group="children.length > 0" />
  </VListGroup>
</template>

<style module="classes" lang="scss"></style>
