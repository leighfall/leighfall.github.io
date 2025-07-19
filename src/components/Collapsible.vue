<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';

defineOptions({ name: 'Collapsible' });

defineProps<{
  mainText?: string;
  id: string;
}>();

const expanded = ref(false);
const bodyRef = ref<HTMLElement | null>(null);
const height = ref('0px');

const toggle = () => {
  expanded.value = !expanded.value;
};

const style = computed(() => ({
  maxHeight: height.value,
  transition: 'max-height 0.5s ease',
  overflow: 'hidden',
}));

watch(expanded, async () => {
  await nextTick();
  if (expanded.value && bodyRef.value) {
    height.value = `${bodyRef.value.scrollHeight}px`;
  } else {
    height.value = '0px';
  }
});
</script>

<template>
  <div class="collapsing">
    <button
      class="collapsing-header"
      :aria-expanded="expanded"
      :aria-controls="`collapsing-body-${id}`"
      type="button"
      @click="toggle">
      <slot name="header">
        <span class="main-text">{{ mainText }}</span>
      </slot>
      <span class="caret" :class="{ rotated: expanded }" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 18 18" style="display: block">
          <polyline
            points="4,7 9,12 14,7"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </span>
    </button>

    <div
      class="collapsing-body"
      :id="`collapsing-body-${id}`"
      ref="bodyRef"
      :style="style"
      role="region"
      :aria-hidden="!expanded">
      <div class="collapsing-body-inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.collapsing {
  display: flex;
  flex-direction: column;
  width: 100%;

  .collapsing-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: none;
    background: none;
    padding: 1vh 1vh 1vh 0;
    font-size: 1.3rem;
    width: 100%;
    text-align: left;
    color: @white-light;

    &:focus {
      outline: 2px solid @white-light;
    }

    .main-text {
      flex: 1;
    }

    .caret {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 1.5em;
      transition: transform 0.5s ease;
      transform: rotate(0deg);
      transform-origin: 50% 50%;

      &.rotated {
        transform: rotate(180deg);
      }
    }
  }

  .collapsing-body {
    overflow: hidden;

    .collapsing-body-inner {
      padding: 1vh;
      background: @box-backround;
    }
  }
}
</style>
