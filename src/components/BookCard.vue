<script setup lang="ts">
const props = defineProps({
  coverImage: String,
  title: String,
  author: String,
  summary: String,
  clickable: Boolean,
});

const emit = defineEmits(['click']);

function handleKeyDown(e: KeyboardEvent) {
  if (!props.clickable) return;
  if (e.key === 'Enter' || e.key === ' ') {
    emit('click', e);
    e.preventDefault();
  }
}
</script>

<template>
  <div
    v-if="clickable"
    class="book-card clickable"
    tabindex="0"
    role="button"
    aria-pressed="false"
    @click="$emit('click', $event)"
    @keydown="handleKeyDown">
    <img class="cover" :src="coverImage" :alt="title + ' book cover'" />
    <div class="details">
      <h4 class="title">{{ title }}</h4>
      <span class="author">by {{ author }}</span>
      <p class="summary">{{ summary }}</p>
    </div>
  </div>
  <div v-else class="book-card">
    <img class="cover" :src="coverImage" :alt="title + ' book cover'" />
    <div class="details">
      <h4 class="title">{{ title }}</h4>
      <span class="author">by {{ author }}</span>
      <p class="summary">{{ summary }}</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.book-card {
  width: 100%;
  display: flex;
  align-items: flex-start;
  background: @box-background;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  gap: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.15s, border-color 0.15s;
  min-width: 0;
  // Only show pointer and highlight when clickable
  &.clickable {
    cursor: pointer;
    &:hover,
    &:focus {
      border-color: @purple;
      box-shadow: 0 6px 18px rgba(128, 90, 213, 0.1);
      transform: translateY(-2px);
    }
  }
  // Hide highlight and pointer for non-clickable cards
  &:not(.clickable) {
    cursor: default;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    border-color: rgba(255, 255, 255, 0.1);
  }
  .cover {
    width: 90px;
    height: 130px;
    object-fit: cover;
    border-radius: 5px;
    flex-shrink: 0;
  }
  .details {
    display: flex;
    flex-direction: column;
    .title {
      color: @pink;
      margin: 0 0 0.4rem 0;
    }
    .author {
      color: @white-light;
      font-size: 0.98em;
      margin-bottom: 0.7em;
    }
    .summary {
      color: @white-light;
      font-size: 0.96em;
      margin: 0;
      line-height: 1.5;
    }
  }
}
</style>
