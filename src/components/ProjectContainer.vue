<script setup lang="ts">
import type { Project } from '@/models/Project';
import SkillPill from '@/components/SkillPill.vue';
import { useRouter } from 'vue-router';

defineOptions({ name: 'ProjectContainer' });

const props = defineProps<{
  item: Project;
}>();

const router = useRouter();

const isCaseStudy = props.item.type === 'case-study' && !!props.item.slug;

function handleClick() {
  if (isCaseStudy) {
    router.push(`/projects/${props.item.slug}`);
  } else if (props.item.Link) {
    window.open(props.item.Link, '_blank', 'noopener,noreferrer');
  }
}

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Enter' || e.key === ' ') {
    handleClick();
    e.preventDefault();
  }
}
</script>

<template>
  <div
    class="project-container"
    :class="{ clickable: item.isLink }"
    :tabindex="0"
    role="button"
    :title="item.linkTitle"
    @click="handleClick"
    @keydown="handleKeyDown">
    <img
      v-if="item.Thumbnail"
      class="thumbnail"
      :src="item.Thumbnail"
      :alt="item.Title + ' project thumbnail'" />
    <div class="details">
      <div class="header">
        <h4 class="title">{{ item.Title }}</h4>
        <span class="date">{{ item.Date }}</span>
      </div>
      <div class="description-list">
        <p v-for="(description, index) in item.Description" :key="index">
          {{ description }}
        </p>
      </div>
      <div v-if="item.Tags && item.Tags.length" class="tags">
        <SkillPill v-for="tag in item.Tags" :key="tag">{{ tag }}</SkillPill>
      </div>
      <div class="link-icon-wrapper">
        <i v-if="item.type === 'case-study'" class="fa-solid fa-arrow-right link-icon" />
        <i
          v-else-if="item.type === 'link'"
          class="fa-solid fa-arrow-up-right-from-square link-icon" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.project-container {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  background: @box-background;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  gap: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.15s, border-color 0.15s, transform 0.15s;
  min-width: 0;
  overflow: hidden;

  &.clickable {
    cursor: pointer;

    &:hover,
    &:focus {
      border-color: @purple;
      box-shadow: 0 6px 18px rgba(128, 90, 213, 0.1);
      transform: translateY(-2px);

      .link-icon {
        color: @purple;
      }
    }
  }

  .thumbnail {
    width: 200px;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
    flex-shrink: 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .details {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 1rem;
      gap: 1rem;
      flex-wrap: wrap;

      .title {
        color: @pink;
        margin: 0;
        font-size: 1.3rem;
        font-weight: 600;
      }

      .date {
        color: @white-light;
        font-size: 0.95em;
        white-space: nowrap;
      }
    }

    .link-icon-wrapper {
      display: flex;
      margin-top: auto;
      padding-top: 0.5rem;
      margin-left: auto;
    }

    .link-icon {
      color: @white-light;
      font-size: 0.9em;
    }

    .link-icon-anchor {
      color: @white-light;
      text-decoration: none;

      &:hover {
        color: @purple;
      }
    }

    .description-list {
      padding: 0;
      margin: 0 0 1rem 0;
      color: @white-light;
      line-height: 1.6;

      p {
        margin: 0;
      }
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }

    .link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: @pink;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;
      align-self: flex-start;

      &:hover {
        color: @purple;
      }

      i {
        font-size: 0.85em;
      }
    }
  }

  .laptop({
    max-width: 100%;
    padding: 1.25rem;
    gap: 1.5rem;
  });

  .phone({
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;

    .thumbnail {
      width: 100%;
      height: auto;
      max-height: 200px;
      max-width: 100%;
    }

    .details {
      max-width: 100%;
      overflow: hidden;

      .header {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  });
}
</style>
