<script setup lang="ts">
import type { Project } from '@/models/Project';
defineOptions({ name: 'JobContainer' });

defineProps<{
  item: Project;
}>();
</script>

<template>
  <div class="project">
    <div class="left">
      <div class="jobtitle">
        {{ item.Title }}
      </div>
      <div>
        {{ item.Date }}
      </div>
      <!-- <div>
        <img :src="item.Thumbnail" />
      </div> -->
    </div>
    <div class="right">
      <ul>
        <div v-for="description in item.Description" :key="description">
          <li>{{ description }}</li>
        </div>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.project {
  font-size: 16px;
  display: flex;
  flex-flow: row;
  width: 100%;
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 25px;

  &:hover {
    background-color: @grey;
    box-shadow: 2px 4px 6px 0px rgb(125, 2, 207);
  }

  .laptop ({
    flex-flow: column;
    padding: 0;

    &:hover {
      background-color: transparent;
      box-shadow: none;
      border-radius: 0;
    }
  });
}

.left {
  display: flex;
  flex-flow: column;
  width: 30%;
  border-right: 1px solid @white-light;
  margin-left: 4px;

  .laptop({
    width: 100%;
    border: none;
    margin: 0;
    border-bottom: 1px solid @white-light;
    margin-bottom: 4px;
    padding-bottom: 5px;
  });
}

.right {
  display: flex;
  flex-flow: column;
  width: 70%;
  margin-left: 4px;

  ul {
    margin: 0;
  }

  li {
    margin: 7px 0;

    &:first-child {
      margin-top: 0;
    }
  }

  .laptop({
    width: 100%;
    margin-top: 4px;

    ul {
      padding: 0 0 0 15px;
    }
  });
}

.jobtitle {
  font-weight: 600;
}
</style>
