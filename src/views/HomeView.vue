<template>
  <div class="home">
    <h1>Me he hecho caca</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // console.log(`home mounted.`)
})
</script>

<style lang="scss" scoped>
.home {
  h1 {
    font-size: 30px;
  }
}
</style>
