<script setup lang="ts">
import JobsView from './JobsView.vue';
import { SoftwareExperience, ManagementExperience } from '../constants/JobExperience';
</script>

<template>
  <div class="experience-view">
    <JobsView :job-experience="SoftwareExperience" sectionHeader="Software Experience" />
    <JobsView :job-experience="ManagementExperience" sectionHeader="Management Experience" />
  </div>
</template>
