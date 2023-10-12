<script setup lang="ts">
import TheSidebar from '@/components/TheSidebar.vue'
</script>

<template>
  <VApp>
    <TheSidebar />
    <VMain><RouterView /></VMain>
  </VApp>
</template>

<style module="classes" lang="scss"></style>
