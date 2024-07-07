<script setup lang="ts">
import ProjectContainer from '@/components/ProjectContainer.vue';
import { JobExperience } from '../constants/JobExperience';

defineOptions({ name: 'JobsView' });
</script>

<template>
  <div class="jobs-view">
    <div v-for="job in JobExperience" :key="job.Company">
      <ProjectContainer :item="job" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.jobs-view {
  display: flex;
  flex-flow: column;
  width: 100%;
}
</style>
