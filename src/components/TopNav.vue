<script setup lang="ts">
import { useRoute } from 'vue-router';

defineOptions({ name: 'TopNav' });

const route = useRoute();
</script>

<template>
  <nav class="nav-wrap">
    <router-link to="/" class="nav-link" :class="{ active: route.path === '/' }">Home</router-link>
    <router-link
      to="/experience"
      class="nav-link"
      :class="{ active: route.path === '/experience' }">
      Experience
    </router-link>
    <router-link to="/services" class="nav-link" :class="{ active: route.path === '/services' }">
      Services
    </router-link>
  </nav>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.nav-wrap {
  display: flex;
  flex-flow: row nowrap;
  gap: 1.5rem;
  justify-content: end;
  background-color: @background;
  position: sticky;
  z-index: 10;
  padding: 20px 0;
  width: 100%;
  top: 0;

  .phone({
    top: -1px;
    width: calc(100% + 4px);
    overflow-x: hidden;
  });
}

.nav-link {
  padding-bottom: 5px;
  color: @purple;
  border-bottom: 2px solid transparent;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  padding-left: 0.2rem;

  position: relative;
  display: inline-flex;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: @purple;
    width: 100%;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s ease, transform-origin 0s ease 0.5s;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:not(:hover)::after {
    transform-origin: left;
  }

  &.active {
    color: @pink;

    &::after {
      background-color: @pink;
    }
  }
}
</style>
