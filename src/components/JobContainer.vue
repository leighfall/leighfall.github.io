<script setup lang="ts">
import type { Experience } from '@/models/Experience';
import SkillPill from './SkillPill.vue';

defineOptions({ name: 'JobContainer' });

defineProps<{
  item: Experience;
}>();
</script>

<template>
  <div class="project">
    <div class="left">
      <div class="jobtitle">
        {{ item.JobTitle }}
      </div>
      <div class="company">
        {{ item.Company }}
      </div>
      <div class="dates">
        {{ item.Date }}
      </div>
    </div>
    <div class="right">
      <ul>
        <div v-for="description in item.Description" :key="description">
          <li>{{ description }}</li>
        </div>
      </ul>
      <div class="skills">
        <SkillPill v-for="skill in item.Tags" :key="skill">{{ skill }}</SkillPill>
      </div>
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
  transition: 0.3s;

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
  });;
}

.left {
  display: flex;
  flex-flow: column;
  width: 30%;
  border-right: 1px solid @white-light;
  margin-left: 4px;

  .laptop({
    flex-flow: row;
    width: 100%;
    border: none;
    margin: 0;
    border-bottom: 1px solid @white-light;
    margin-bottom: 4px;
    padding-bottom: 5px;
  });

  .phone ({
    flex-flow: column;
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

  .laptop({
    padding-right: 10px;
    border-right: 1px solid @white-light;
  });

  .phone ({
    padding: 0;
    border: none;
  });
}

.company {
  .laptop ({
    margin-left: 10px;
  });

  .phone ({
    margin: 0;
  });
}

.dates {
  .laptop ({
    margin-left: auto;
  });

  .phone ({
    margin: 0;
  });
}

.skills {
  display: flex;
  flex-flow: row wrap;
  margin: 20px 0 0 20px;

  .laptop({
    margin: 20px 0 0 0;
  });
}
</style>
