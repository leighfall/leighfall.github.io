<script setup lang="ts">
import Collapsible from '@/components/Collapsible.vue';

defineOptions({ name: 'Contact' });
</script>

<template>
  <div class="contact">
    <Collapsible main-text="Dark Mode" id="dark-mode">I want to do dark mode for you!</Collapsible>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.contact {
  display: flex;
  flex-flow: column;
  width: 100%;
}
</style>
