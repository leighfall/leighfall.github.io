<script setup lang="ts">
// This component serves as a layout wrapper for personal routes
// It provides a consistent structure for all personal pages
</script>

<template>
  <div class="personal-layout">
    <router-view v-slot="{ Component }">
      <Transition mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.personal-layout {
  width: 100%;
}

// Transition styles - matching HomeView
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
