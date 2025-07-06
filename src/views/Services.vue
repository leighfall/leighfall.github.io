<script setup lang="ts">
import Collapsible from '@/components/Collapsible.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import { FreelanceOpps } from '@/constants/FreelanceOpps';

defineOptions({ name: 'Services' });
</script>

<template>
  <div class="services">
    <SectionHeader>Let’s Build Something Great!</SectionHeader>
    I’m currently available for freelance contract work. Below, you’ll find a list of services I
    offer to help improve, enhance, or build your website. If you have something in mind that isn’t
    listed, feel free to reach out. I’m always open to discussing new ideas and seeing how we can
    work together!
    <div v-for="(opp, idx) in FreelanceOpps" :key="idx" class="opp-item">
      <Collapsible :main-text="opp.header" :id="opp.header">{{ opp.info }}</Collapsible>
    </div>
    <div class="get-in-touch">
      <div class="connect">Let's Connect!</div>
      <div>
        <a
          href="mailto:autumn.leigh.henderson@gmail.com"
          title="mailto:autumn.leigh.henderson@gmail.com">
          <i class="fa-solid fa-envelope icons" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.services {
  display: flex;
  flex-flow: column;
  width: 100%;
}

.opp-item {
  display: flex;
  margin: 3vh 0;
}

.get-in-touch {
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 2vh;
  margin: 2vh 0;
}

.connect {
  font-size: 1.6rem;
  letter-spacing: 0.3vw;
}

.icons {
  font-size: 1.8rem;
}
</style>
