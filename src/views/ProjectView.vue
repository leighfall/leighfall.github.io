<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue';
import ProjectContainer from '@/components/ProjectContainer.vue';
import { PROJECTS } from '@/constants/Projects';
import { computed } from 'vue';

defineOptions({ name: 'ProjectView' });

const highlights = computed(() => PROJECTS.filter((p) => p.isHighlight));
const allProjects = computed(() => PROJECTS.filter((p) => !p.isHighlight));
</script>

<template>
  <div class="project-view">
    <template v-if="highlights.length">
      <SectionHeader>Highlights</SectionHeader>
      <div class="projects-list">
        <ProjectContainer v-for="project in highlights" :key="project.Title" :item="project" />
      </div>
    </template>
    <SectionHeader>All Projects</SectionHeader>
    <div v-if="allProjects.length" class="projects-list">
      <ProjectContainer v-for="project in allProjects" :key="project.Title" :item="project" />
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
  margin-bottom: 2rem;
}

.empty-message {
  color: @white-light;
  text-align: center;
  padding: 2rem;
  font-style: italic;
}
</style>
