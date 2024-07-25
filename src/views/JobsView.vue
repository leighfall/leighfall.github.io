<script setup lang="ts">
import JobContainer from '@/components/JobContainer.vue';
import { JobExperience } from '../constants/JobExperience';

defineOptions({ name: 'JobsView' });
</script>

<template>
  <div class="jobs-view">
    <div v-for="job in JobExperience" :key="job.Company">
      <JobContainer :item="job" />
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
