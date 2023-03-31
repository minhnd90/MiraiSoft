<template>
  <div class="hello">
    <ContentSlot :use="$slots.default" />
  </div>
</template>

<style lang="scss" scoped>
.hello {
  color: red;
}
</style>
