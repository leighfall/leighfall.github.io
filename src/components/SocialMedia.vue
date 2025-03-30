<script setup lang="ts">
import '@/assets/css/brands.css';
import '@/assets/css/fontawesome.css';
import '@/assets/css/solid.css';

defineOptions({ name: 'SocialMedia' });
</script>

<template>
  <div class="socialmedia">
    <a href="https://github.com/leighfall" title="GitHub" target="_blank">
      <i class="fa-brands fa-github first-icon"></i>
    </a>
    <a href="https://www.linkedin.com/in/autumnlhenderson/" title="LinkedIn" target="_blank">
      <i class="fa-brands fa-linkedin icons"></i>
    </a>
    <a href="https://www.facebook.com/autumn.henderson.94" title="Facebook" target="_blank">
      <i class="fa-brands fa-facebook icons"></i>
    </a>
    <a
      href="https://www.youtube.com/channel/UC2_-EnWVBGyD-TOqbx_je5g"
      title="Youtube"
      target="_blank">
      <i class="fa-brands fa-youtube icons"></i>
    </a>
    <a href="https://app.thestorygraph.com/profile/leighfall" title="StoryGraph" target="_blank">
      <i class="fa-solid fa-book-open icons" />
    </a>
    <a href="https://steamcommunity.com/profiles/76561198810817601" title="Steam" target="_blank">
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
  // justify-content: space-around;
}

.icons {
  padding: 0px 8px;
  font-size: 1.8rem;
}

.first-icon {
  font-size: 1.8rem;
  padding: 0px 8px 0px 0;
}
</style>
