<script setup lang="ts">
import TopNav from '../components/TopNav.vue';
import SocialMedia from '../components/SocialMedia.vue';
</script>

<template>
  <TopNav />
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <div class="container">
    <div class="sidenav">
      <div class="title">
        <div class="pic">
          <img
            src="../assets/images/profilepicsmall.png"
            alt="Autumn Henderson's profile picture" />
        </div>
        <div class="name">
          Autumn
          <br />
          Henderson
        </div>
      </div>
      <div class="subtext">
        <div class="role">
          <p>Software Engineer</p>
        </div>
        <div class="tagline">
          I build clean, accessible, performant web apps with excellent UX and modern frontend
          architecture. I specialize in converting messy or unfinished ideas into polished, reliable
          products.
        </div>
        <SocialMedia />
      </div>
    </div>
    <div class="content">
      <main id="main-content">
        <div class="section">
          <router-view v-slot="{ Component }">
            <Transition mode="out-in">
              <component :is="Component" />
            </Transition>
          </router-view>
        </div>
      </main>
      <div class="footer" id="footer">
        Built in Visual Studio Code and Cursor using Vue 3, LESS and TypeScript by me. Design
        inspired by
        <a href="https://brittanychiang.com/" target="_blank" title="Brittany Chiang's Portfolio">
          Brittany Chiang's Portfolio
        </a>
        <span>.</span>
        Icons from
        <a href="https://fontawesome.com/" target="_blank" title="Font Awesome">Font Awesome</a>
        <span>.</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: @purple;
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
  transition: top 0.3s;

  &:focus {
    top: 6px;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.container {
  display: flex;
  flex-flow: row;
  margin: 0 auto;
  background: rgba(26, 26, 26, 0.95);
  width: 75vw;
  min-width: 300px;
  color: #ffffff;
  font-size: 18px;
  max-width: 1100px;

  .laptop({
    font-size: 1rem;
    display: flex;
    flex-flow: column;
    width: 100%;
    padding: 0;
  });
}

.sidenav {
  display: flex;
  flex-flow: column;
  width: 40%;
  align-self: start;
  position: sticky;
  height: auto;
  top: 75px;

  .laptop({
    width: 100%;
    align-self: normal;
    position: initial;
    height: auto;
    top: 0;
  });
}

.subtext {
  display: flex;
  flex-flow: column;

  .phone({
     text-align: center;
     align-items: center;
  });
}

.content {
  display: flex;
  flex-flow: column;
  width: 60%;
  margin-left: 40px;

  p {
    margin: 7px 0;
  }

  .laptop({
    display: flex;
    flex-flow: column;
    width: 100%;
    margin: 20px 0 0 0;
  });
}

.section {
  display: flex;
  flex-flow: column;
  margin-bottom: 35px;
  line-height: 1.7;

  p {
    margin: 2vh 0;
  }
}

.footer {
  margin-bottom: 35px;
  font-size: 1rem;
  color: @white-light;
}

.title {
  display: flex;
  flex-flow: row nowrap;

  .pic {
    display: flex;
    flex-flow: column;
    flex-grow: 0;
    flex-shrink: 0;
    width: 95px;
    height: 95px;
    overflow: hidden;
    border-radius: 50%;
  }

  .name {
    display: flex;
    flex-flow: column;
    font-size: 3rem;
    line-height: 3rem;
    margin-left: 10px;
  }
}

.role {
  display: flex;
  flex-flow: row;
  font-size: 1.5rem;
  margin-top: 10px;

  p {
    margin: 0;
  }
}

.tagline {
  font-size: 1.2rem;
  color: @white-light;
  font-weight: 100;
  margin-top: 20px;
}

.vanderbilt {
  color: @vanderbilt-yellow;

  &:hover {
    color: @purple;
  }
}

.target {
  color: @target-red;

  &:hover {
    color: @purple;
  }
}

.ut {
  color: @tn-orange;

  &:hover {
    color: @purple;
  }
}

.kub {
  color: @kub-blue;

  &:hover {
    color: @purple;
  }
}

.uscc {
  color: @uscc-blue;

  &:hover {
    color: @purple;
  }
}

.vue {
  color: @vue-green;

  &:hover {
    color: @purple;
  }
}
</style>
