<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
</script>

<template>
  <div class="about">
    <VContainer>
      <VRow>
        <VCol>
          <VTextField variant="outlined" density="compact" label="Clicked" hide-details disabled readonly v-model="counter.count"></VTextField>
        </VCol>
        <VCol>
          <VTextField variant="outlined" density="compact" label="Doubled" hide-details disabled readonly v-model="counter.doubleCount"></VTextField>
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VBtn variant="outlined" rounded="0" height="42" color="#34495e" theme="dark" block @click="counter.increment">Add</VBtn>
        </VCol>
        <VCol>
          <VBtn variant="outlined" rounded="0" height="42" color="#34495e" theme="dark" block @click="counter.$patch({ count: 0 })">Reset</VBtn>
        </VCol>
      </VRow>
    </VContainer>
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
