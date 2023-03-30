<template>
  <div class="hello">
    <ContentSlot :use="$slots.default">
      Hello World
    </ContentSlot>
  </div>
</template>

<style lang="scss" scoped>
.hello {
  color: red;
}
</style>
