<script setup lang="ts">
defineOptions({ name: 'SkillPill' });
</script>

<template>
  <div class="skillpill">
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.skillpill {
  color: @pink;
  background-color: fade(@pink, 15%);
  width: fit-content;
  padding: 4px 10px;
  border-radius: 20px;
  margin: 2px;
  font-family: calibri;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  transition: 0.3s;

  // &:hover {
  //   cursor: pointer;
  //   background-color: fade(@pink, 25%);
  // }

  // &:active {
  //   // color: #000000;
  //   border-color: @pink;
  // }
}
</style>
