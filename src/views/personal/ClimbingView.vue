<script setup lang="ts">
import FancyLink from '@/components/FancyLink.vue';
import SectionHeader from '../../components/SectionHeader.vue';
</script>

<template>
  <div class="climbing-view">
    <FancyLink
      link="/personal"
      linkText="← Back to Personal"
      titleText="Return to personal landing page"
      internal />

    <SectionHeader>Rock Climbing</SectionHeader>
    <p>
      Rock climbing is one of my favorite ways to challenge both mind and body. I regularly climb at
      local gyms and occasionally outdoors, always striving for the next grade. Below are a few
      clips from recent climbs—more coming soon!
    </p>

    <div class="video-grid" aria-label="Rock climbing videos">
      <div class="video-embed">
        <iframe
          width="360"
          height="203"
          src="https://www.youtube.com/embed/rmsiZpkl2ng"
          title="Fun V2"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <div class="video-embed">
        <iframe
          width="360"
          height="203"
          src="https://www.youtube.com/embed/rMuwVVdDBJM?feature=share"
          title="V3 Olympic-Like Problem"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <div class="video-embed">
        <iframe
          width="360"
          height="203"
          src="https://www.youtube.com/embed/QdjEKaopb6M?feature=share"
          title="V3 Cave Climb"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <div class="video-embed">
        <iframe
          width="360"
          height="203"
          src="https://www.youtube.com/embed/SJH-sXzdF9Q"
          title="Flowy V2"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.climbing-view {
  display: flex;
  flex-direction: column;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.video-embed {
  background: @box-background;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
