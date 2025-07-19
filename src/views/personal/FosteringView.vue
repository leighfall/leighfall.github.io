<script setup lang="ts">
import FancyLink from '@/components/FancyLink.vue';
import SectionHeader from '../../components/SectionHeader.vue';
</script>

<template>
  <div class="fostering-view">
    <FancyLink
      link="/personal"
      linkText="← Back to Personal"
      titleText="Return to personal landing page"
      internal />

    <SectionHeader>Fostering Kittens</SectionHeader>
    <p>
      One of my greatest joys is helping rescue kittens find their forever homes through fostering.
      This page will detail my experiences, tips, and stories from my fostering journey. More to
      come soon, including pictures and stories of my foster kittens. In the meantime, check out my
      <a
        href="https://www.amazon.com/hz/wishlist/ls/3B930OLPHZU0V?ref_=wl_share"
        target="_blank"
        rel="noopener noreferrer">
        wants and needs list from Amazon
      </a>
      , or consider donating to
      <a href="https://www.young-williams.org/" target="_blank" rel="noopener noreferrer">
        Young-Williams Animal Center
      </a>
      , whom I currently volunteer for.
    </p>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.fostering-view {
  display: flex;
  flex-direction: column;
}
</style>
