<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const emit = defineEmits<{
  activeSection: [value: 'home' | 'about' | 'experience'];
}>();

const activeLink = ref<'home' | 'about' | 'experience'>('home');

function setActiveLink(link: 'home' | 'about' | 'experience') {
  activeLink.value = link;
  emit('activeSection', activeLink.value);
}
</script>

<template>
  <nav class="sidenav">
    <RouterLink to="/" class="link" @click="setActiveLink('home')">Home</RouterLink>
    <RouterLink to="#about" class="link" @click="setActiveLink('about')">About</RouterLink>
    <RouterLink to="#experience" class="link" @click="setActiveLink('experience')">
      Experience
    </RouterLink>
    <!-- <RouterLink to="#projects" class="link">Projects</RouterLink>
    <RouterLink to="/blog" class="link">Blog</RouterLink>
    <RouterLink to="/hireme" class="link">Hire Me</RouterLink> -->
  </nav>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.sidenav {
  display: flex;
  flex-flow: column;
  width: 100%;
  margin-top: 70px;
  font-size: 1.3em;
}

.link {
  margin: 0 0 20px 0;
  color: #ffffff;
  border-bottom: 1px solid transparent;
  transition: 0.3s;

  &:hover {
    color: @pink;
    letter-spacing: 4px;
    // border-bottom: 1px solid @pink; FIXME: animate
  }
}
</style>
