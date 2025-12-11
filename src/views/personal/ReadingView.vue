<script setup lang="ts">
import { useRouter } from 'vue-router';

import SectionHeader from '../../components/SectionHeader.vue';
import BookCard from '../../components/BookCard.vue';
import { READING_BOOKS } from '../../constants/ReadingBooks';
import FancyLink from '../../components/FancyLink.vue';

const router = useRouter();
const currentlyReading = READING_BOOKS.filter((b) => b.status === 'currentlyReading');
const wantToRead = READING_BOOKS.filter((b) => b.status === 'wantToRead');
const read = READING_BOOKS.filter((b) => b.status === 'read');

function goToReview(bookId: string) {
  router.push({ name: 'personal-reading-review', params: { bookId } });
}
</script>

<template>
  <div class="reading-view">
    <FancyLink
      link="/personal"
      linkText="← Back to Personal"
      titleText="Return to personal landing page"
      internal />

    <SectionHeader>Reading</SectionHeader>
    <div class="genres-summary">
      <strong>Genres:</strong>
      Self-Help, Personal Growth, Cozy Fantasy, and more. I track my books on Fable and love
      exploring uplifting or magical stories with a dash of real-world wisdom.
    </div>

    <div class="reading-section">
      <h3>Currently Reading</h3>
      <div v-if="currentlyReading.length" class="book-list">
        <BookCard
          v-for="book in currentlyReading"
          :key="book.id"
          v-bind="book"
          :clickable="false" />
      </div>
      <p v-else>No books are being read at the moment.</p>
    </div>

    <div class="reading-section">
      <h3>Want to Read</h3>
      <div v-if="wantToRead.length" class="book-list">
        <BookCard v-for="book in wantToRead" :key="book.id" v-bind="book" :clickable="false" />
      </div>
      <p v-else>No books in this section yet.</p>
    </div>

    <div class="reading-section">
      <h3>Read</h3>
      <div v-if="read.length" class="book-list">
        <BookCard
          v-for="book in read"
          :key="book.id"
          v-bind="book"
          :clickable="true"
          @click="goToReview(book.id)" />
      </div>
      <p v-else>No books have been finished yet.</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.reading-view {
  display: flex;
  flex-direction: column;
}

.genres-summary {
  margin-bottom: 1.8rem;
  color: @white-light;
}

.reading-section {
  & + .reading-section {
    margin-top: 2.5rem;
  }
  h3 {
    color: @purple;
    margin-bottom: 1rem;
  }
  .book-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
}
</style>
