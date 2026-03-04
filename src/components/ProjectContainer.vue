<script setup lang="ts">
import type { Project } from '@/models/Project';

defineOptions({ name: 'ProjectContainer' });

defineProps<{
  item: Project;
}>();
</script>

<template>
  <div class="project-container">
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
      <ul class="description-list">
        <li v-for="(description, index) in item.Description" :key="index">
          {{ description }}
        </li>
      </ul>
      <div v-if="item.Tags && item.Tags.length" class="tags">
        <span v-for="tag in item.Tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <a v-if="item.Link" :href="item.Link" target="_blank" rel="noopener noreferrer" class="link">
        View Project
        <i class="fa-solid fa-arrow-up-right-from-square" />
      </a>
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
  transition: box-shadow 0.15s, border-color 0.15s;
  min-width: 0;
  overflow: hidden;

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

    .description-list {
      list-style: none;
      padding: 0;
      margin: 0 0 1rem 0;
      color: @white-light;
      line-height: 1.6;

      li {
        margin-bottom: 0.5rem;
        position: relative;
        padding-left: 1.2rem;

        &::before {
          content: '•';
          color: @purple;
          position: absolute;
          left: 0;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;

      .tag {
        background: fade(@purple, 20%);
        color: @purple;
        padding: 0.3rem 0.7rem;
        border-radius: 4px;
        font-size: 0.85em;
        border: 1px solid fade(@purple, 30%);
      }
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
