<script setup lang="ts">
import '@/assets/css/brands.css';
import '@/assets/css/fontawesome.css';
import '@/assets/css/solid.css';

defineOptions({ name: 'SocialMedia' });
</script>

<template>
  <div class="socialmedia">
    <a
      href="https://github.com/leighfall"
      title="GitHub"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Autumn's GitHub profile">
      <i class="fa-brands fa-github icons"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/autumnlhenderson/"
      title="LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Autumn's LinkedIn profile">
      <i class="fa-brands fa-linkedin icons"></i>
    </a>
    <a
      href="https://www.facebook.com/autumn.henderson.94"
      title="Facebook"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Autumn's Facebook profile">
      <i class="fa-brands fa-facebook icons"></i>
    </a>
    <a
      href="https://www.youtube.com/channel/UC2_-EnWVBGyD-TOqbx_je5g"
      title="Youtube"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Autumn's YouTube channel">
      <i class="fa-brands fa-youtube icons"></i>
    </a>
    <a
      href="https://app.thestorygraph.com/profile/leighfall"
      title="StoryGraph"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Autumn's StoryGraph profile">
      <i class="fa-solid fa-book-open icons" />
    </a>
    <a
      href="https://steamcommunity.com/profiles/76561198810817601"
      title="Steam"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Autumn's Steam profile">
      <i class="fa-brands fa-steam icons" />
    </a>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.socialmedia {
  display: flex;
  flex-flow: row;
  margin-top: 70px;
  font-size: 1.8rem;
  gap: 25px;

  .phone({
    margin-top: 4vh;
    gap: 7vw;
  });
}

.icons {
  font-size: 1.8rem;
}
</style>
