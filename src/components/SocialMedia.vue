<script setup lang="ts">
import '@/assets/css/brands.css';
import '@/assets/css/fontawesome.css';
import '@/assets/css/solid.css';

defineOptions({ name: 'SocialMedia' });
</script>

<template>
  <div class="wrapper">
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
  </div>
</template>

<style>
@import '@/assets/main.less';

.wrapper {
  display: flex;
  flex-flow: row;
  margin-top: 20px;
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
