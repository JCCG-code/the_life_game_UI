<template>
  <div class="app-main-wrap">
    <RouterView />
  </div>
</template>

<script setup></script>

<style lang="scss">
@import '@/assets/styles/css/reset.css';
@import '@/assets/styles/css/init.css';

.app-main-wrap {
  min-width: 100vw;
  min-height: 100vh;
}
</style>
