<script setup lang="ts">
defineOptions({ name: 'FancyLink' });

defineProps<{
  link: string;
  linkText: string;
  titleText: string;
  newWindow?: boolean;
}>();
</script>

<template>
  <div>
    <div class="link-container" :title="titleText">
      <a :href="link" target="_blank" class="items" rel="noopener noreferrer">
        {{ linkText }}
        <i v-if="newWindow" class="fa-solid fa-arrow-up-right-from-square" />
      </a>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.link-container {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 600;
  color: @pink;
  margin: 10px 0;
  padding: 8px;
}

.items {
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  align-items: center;
}
</style>
