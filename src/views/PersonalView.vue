<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue';
</script>

<template>
  <div class="personal-view">
    <SectionHeader>Personal</SectionHeader>
    Welcome to my personal space! Here you'll find pages dedicated to my various hobbies and
    interests. Each section represents a different passion of mine outside of software development.

    <div class="hobby-grid">
      <router-link to="/personal/fostering" class="hobby-card">
        <h3>Fostering Kittens</h3>
        <p>Helping rescue kittens find their forever homes through fostering and care.</p>
      </router-link>

      <!-- <router-link to="/personal/gaming" class="hobby-card">
        <h3>Gaming</h3>
        <p>Video games, board games, and everything in between.</p>
      </router-link>



      <router-link to="/personal/fitness" class="hobby-card">
        <h3>Fitness</h3>
        <p>Yoga, rock climbing, and staying active.</p>
      </router-link> -->
      <router-link to="/personal/climbing" class="hobby-card">
        <h3>Rock Climbing</h3>
        <p>Climbing gyms, outdoor adventures, and personal progress videos!</p>
      </router-link>
      <router-link to="/personal/reading" class="hobby-card">
        <h3>Reading</h3>
        <p>Books, articles, and my reading journey.</p>
      </router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.personal-view {
  display: flex;
  flex-direction: column;
}

.hobby-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.hobby-card {
  background: @box-background;
  padding: 0 1.5rem 1.5rem 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease, border-color 0.2s ease;
  text-decoration: none;
  display: block;

  &:hover {
    transform: translateY(-2px);
    border-color: @purple;
  }

  h3 {
    color: @pink;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  p {
    color: @white-light;
    margin-bottom: 0;
    line-height: 1.5;
  }
}

// Remove the old .hobby-link styles since we're not using buttons anymore
</style>
