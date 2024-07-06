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
  background-color: rgb(26, 26, 26);
  font-family: calibri;
  width: 98%;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: @pink;

  &:hover {
    color: @purple;
  }
}

/*Overriding webkit*/
*:focus-visible {
  outline-offset: 0px;
  outline: 0px;
}
</style>
