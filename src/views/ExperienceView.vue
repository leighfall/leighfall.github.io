<script setup lang="ts">
import JobsView from './JobsView.vue';
import FancyLink from '../components/FancyLink.vue';
import { SoftwareExperience, ManagementExperience } from '../constants/JobExperience';
</script>

<template>
  <div class="experience-view">
    <JobsView :job-experience="SoftwareExperience" sectionHeader="Software Experience" />
    <JobsView :job-experience="ManagementExperience" sectionHeader="Management Experience" />
    <div class="resume-link-container">
      <FancyLink
        link="./documents/Resume - Autumn Henderson.pdf"
        link-text="View Full Résumé"
        title-text="Autumn's Resume"
        :new-window="true" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.experience-view {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.resume-link-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}
</style>
