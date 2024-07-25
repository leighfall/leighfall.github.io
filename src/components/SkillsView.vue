<script setup lang="ts">
import SkillPill from './SkillPill.vue';
import { Tags } from '../constants/Tags';

defineOptions({ name: 'SkillsView' });

const tags = Object.values(Tags);
</script>

<template>
  <div class="skillsview">
    <SkillPill v-for="tag in tags" :key="tag">{{ tag }}</SkillPill>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.skillsview {
  display: flex;
  flex-flow: row wrap;
  margin-top: 20px;
}
</style>
