<script setup lang="ts"></script>

<template>
  <div class="container">
    Hello World!
    <br />
    This website is currently under development and will be the new home for my portfolio.
    <br />
    Keep checking back for updates!
    <br />
    ~Autumn
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.container {
  display: flex;
  align-items: center;
  margin: 12% auto 0 auto;
  padding: 20px;
  border-radius: 20px;
  background: rgba(26, 26, 26, 0.95);
  width: 50vw;
  min-width: 350px;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  font-size: 3rem;

  .phone({
    font-size: 1.5rem;
  });
}
</style>
