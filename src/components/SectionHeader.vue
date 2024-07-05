<script setup lang="ts">
defineOptions({ name: 'SectionHeader' });
</script>

<template>
  <div class="header">
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.header {
  color: @pink;
  width: 100%;
  padding-bottom: 12px;
  font-family: calibri;
  font-size: 1.7rem;
  font-weight: 400;
  letter-spacing: 4px;
  text-align: right;
}
</style>
