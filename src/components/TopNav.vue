<script setup lang="ts">
import { ref } from 'vue';

defineOptions({ name: 'TopNav' });

const emit = defineEmits<{
  'page-selection': ['home' | 'about' | 'experience' | 'contact' | 'blog'];
}>();

const activePage = ref<'home' | 'about' | 'experience' | 'contact' | 'blog'>('home');

function changePage(pageType: 'home' | 'about' | 'experience' | 'contact' | 'blog') {
  activePage.value = pageType;
  emit('page-selection', activePage.value);
}
</script>

<template>
  <nav class="nav-wrap">
    <div class="nav-link" :class="{ active: activePage === 'home' }" @click="changePage('home')">
      Home
    </div>
    <div
      class="nav-link"
      :class="{ active: activePage === 'experience' }"
      @click="changePage('experience')">
      Experience
    </div>
    <!-- <div
      class="nav-link"
      :class="{ active: activePage === 'contact' }"
      @click="changePage('contact')">
      Contact
    </div> -->
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
