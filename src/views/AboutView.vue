<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
</script>

<template>
  <div class="about" @click.self="counter.increment">
    <VTextField variant="outlined" density="compact" label="Clicked" v-model="counter.count" hide-details readonly></VTextField>
    <VTextField variant="outlined" density="compact" label="Doubled" v-model="counter.doubleCount" hide-details readonly></VTextField>
    <VBtn variant="tonal" height="40" density="compact" rounded="0" @click="counter.$patch({ count: 0 })">Reset</VBtn>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
