<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="less">
@import '@/assets/main.less';

html {
  color: #FFFFFF;
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
