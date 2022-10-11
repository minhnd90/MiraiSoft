<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
</script>

<template>
  <div class="about">
    <VBtn flat @click="counter.increment">Clicked: {{ counter.count }}</VBtn>
    <p class="text-right">Doubled: {{ counter.doubleCount }}</p>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;

    p {
      flex: 1;
    }
  }
}
</style>
