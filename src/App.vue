<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header></header>

  <RouterView />
</template>

<style lang="less">
@import '@/assets/main.less';

html {
  color: #ffffff;
  background-image: url('@/assets/images/heroimage.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

/*Overriding webkit*/
*:focus-visible {
  outline-offset: 0px;
  outline: 0px;
}
</style>
