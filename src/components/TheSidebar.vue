<script setup lang="ts"></script>

<template>
  <VNavigationDrawer>
    <div class="d-flex justify-center py-8">
      <VBtn color="primary" class="text-none">Import documents</VBtn>
    </div>
    <VListItem title="My Application" subtitle="Vuetify" to="/"></VListItem>
    <VDivider />
    <VListItem link title="List Item 1" to="/page1"></VListItem>
    <VListItem link title="List Item 2" to="/page2"></VListItem>
    <VListItem link title="List Item 3" to="/page3"></VListItem>
  </VNavigationDrawer>
</template>

<style module="classes" lang="scss"></style>
