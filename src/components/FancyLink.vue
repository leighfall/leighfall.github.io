<script setup lang="ts">
defineOptions({ name: 'FancyLink' });

defineProps<{
  link: string;
  linkText: string;
  titleText: string;
  newWindow?: boolean;
  internal?: boolean;
}>();
</script>

<template>
  <div>
    <div class="link-container" :title="titleText">
      <router-link v-if="internal" :to="link" class="items">
        {{ linkText }}
      </router-link>
      <a v-else :href="link" target="_blank" class="items" rel="noopener noreferrer">
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
}

.items {
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease;

  &:hover {
    color: @purple;
  }
}
</style>
