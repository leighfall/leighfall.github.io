<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';
import FancyLink from '@/components/FancyLink.vue';
import { PROJECTS } from '@/constants/Projects';

defineOptions({ name: 'CaseStudyView' });

const route = useRoute();
const slug = route.params.slug as string;

const project = PROJECTS.find((p) => p.slug === slug);
const content = ref('');
const notFound = ref(false);

const modules = import.meta.glob('@/content/*.md', { query: '?raw', import: 'default' });

onMounted(async () => {
  const key = `/src/content/${slug}.md`;
  if (modules[key]) {
    const raw = (await modules[key]()) as string;
    content.value = await marked(raw);
  } else {
    notFound.value = true;
  }
});
</script>

<template>
  <div class="case-study-view">
    <FancyLink link="/projects" linkText="← Back to Projects" titleText="Return to projects" internal />
    <div v-if="notFound" class="not-found">
      <p>Case study not found.</p>
    </div>
    <article v-else class="markdown-body" v-html="content" />
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.case-study-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.not-found {
  color: @white-light;
  font-style: italic;
  margin-top: 2rem;
}

.markdown-body {
  color: @white;
  line-height: 1.7;
  margin-top: 1.5rem;

  :deep(h1) {
    color: @pink;
    font-family: calibri;
    font-size: 1.7rem;
    font-weight: 400;
    letter-spacing: 4px;
    text-align: right;
    padding-bottom: 12px;
    margin: 0 0 2vh 0;
  }

  :deep(h2) {
    color: @pink;
    font-family: calibri;
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 2px;
    margin: 2vh 0 1vh 0;
  }

  :deep(h3) {
    color: @pink;
    font-family: calibri;
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 2vh 0 1vh 0;
  }

  :deep(p) {
    margin: 2vh 0;
  }

  :deep(ul),
  :deep(ol) {
    padding-left: 1.5rem;
    margin: 2vh 0;

    li {
      margin-bottom: 0.5rem;
    }
  }

  :deep(hr) {
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin: 2vh 0;
  }

  :deep(strong) {
    color: rgba(255, 255, 255, 0.9);
  }

  :deep(a) {
    color: @pink;
    text-decoration: none;

    &:hover {
      color: @purple;
    }
  }

  :deep(code) {
    background: rgba(255, 255, 255, 0.08);
    color: @pink;
    padding: 0.15em 0.4em;
    border-radius: 4px;
    font-size: 0.9em;
  }

  :deep(pre) {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 1.25rem;
    overflow-x: auto;
    margin: 2vh 0;

    code {
      background: none;
      padding: 0;
      font-size: 0.88em;
    }
  }

  :deep(.muted) {
    color: @white-light;
  }

  :deep(img) {
    max-width: 100%;
    border-radius: 6px;
    display: block;
    margin: 2vh auto;
  }
}
</style>
