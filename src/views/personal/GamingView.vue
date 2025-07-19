<script setup lang="ts">
import SectionHeader from '../../components/SectionHeader.vue';
</script>

<template>
  <div class="gaming-view">
    <SectionHeader>Gaming</SectionHeader>
    <p>
      Gaming has been a passion of mine for as long as I can remember. From classic RPGs to modern
      indie games, I love exploring new worlds and stories through interactive experiences.
    </p>
    
    <div class="gaming-content">
      <div class="game-section">
        <h3>Current Games</h3>
        <ul>
          <li>Baldur's Gate 3</li>
          <li>Cyberpunk 2077</li>
          <li>Stardew Valley</li>
        </ul>
      </div>
      
      <div class="game-section">
        <h3>Favorite Genres</h3>
        <ul>
          <li>RPGs</li>
          <li>Strategy Games</li>
          <li>Indie Games</li>
          <li>Visual Novels</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.gaming-view {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.gaming-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.game-section {
  background: @box-backround;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: @pink;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: @white-light;
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style> 