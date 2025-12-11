<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import SectionHeader from '../../components/SectionHeader.vue';
import { READING_BOOKS } from '../../constants/ReadingBooks';
import FancyLink from '../../components/FancyLink.vue';

const route = useRoute();
const bookId = route.params.bookId as string;

const book = computed(() => READING_BOOKS.find((b) => b.id === bookId));
</script>

<template>
  <div class="review-view">
    <FancyLink
      link="/personal/reading"
      linkText="← Back to Reading"
      titleText="Return to reading page"
      internal />
    <SectionHeader>Book Review</SectionHeader>
    <div v-if="book" class="details">
      <img class="cover" :src="book.coverImage" :alt="book.title + ' cover'" />
      <div class="info">
        <h2>{{ book.title }}</h2>
        <span class="author">by {{ book.author }}</span>
        <p class="summary">{{ book.summary }}</p>
        <hr />
        <div class="review-block">
          <span class="review-label">My Review:</span>
          <div v-if="book.review">
            {{ book.review }}
          </div>
          <div v-else class="placeholder">No review written yet.</div>
        </div>
      </div>
    </div>
    <div v-else class="not-found">
      <p>Sorry, book not found.</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';
.review-view {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.details {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
  .cover {
    width: 120px;
    height: 170px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  .info {
    flex: 1;
    h2 {
      margin: 0;
      color: @pink;
    }
    .author {
      color: @white-light;
      font-size: 1.07em;
    }
    .summary {
      color: @white-light;
      margin-top: 0.6em;
      margin-bottom: 0.9em;
    }
    .review-block {
      margin-top: 2em;
      .review-label {
        font-weight: bold;
        color: @purple;
      }
      .placeholder {
        color: @white-light;
        font-style: italic;
        opacity: 0.7;
        margin-top: 0.8em;
      }
    }
  }
}
.not-found {
  color: @white-light;
  font-size: 1.15em;
  opacity: 0.85;
  margin-top: 2rem;
}
</style>
