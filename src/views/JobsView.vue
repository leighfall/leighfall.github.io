<script setup lang="ts">
import JobContainer from '@/components/JobContainer.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import { Experience } from '../models/Experience';

defineOptions({ name: 'JobsView' });

defineProps<{
  jobExperience: Experience[];
  sectionDescription?: string;
  sectionHeader?: string;
}>();
</script>

<template>
  <SectionHeader>{{ sectionHeader || 'Experience' }}</SectionHeader>
  <div class="jobs-view">
    <div v-for="job in jobExperience" :key="job.Company" class="job-item">
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
  gap: 3vw;
}
</style>
