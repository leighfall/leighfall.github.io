<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue';
import ProjectContainer from '@/components/ProjectContainer.vue';
import { PROJECTS } from '@/constants/Projects';

defineOptions({ name: 'ProjectView' });
</script>

<template>
  <div class="project-view">
    <SectionHeader>Projects</SectionHeader>
    <div v-if="PROJECTS.length" class="projects-list">
      <ProjectContainer v-for="project in PROJECTS" :key="project.Title" :item="project" />
    </div>
    <p v-else class="empty-message">No projects to display yet.</p>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.project-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.empty-message {
  color: @white-light;
  text-align: center;
  padding: 2rem;
  font-style: italic;
}
</style>
