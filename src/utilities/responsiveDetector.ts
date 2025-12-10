import {
  ref,
  type Ref,
  computed,
  onMounted,
  onUnmounted,
  type ComputedRef,
  provide,
  inject,
  readonly,
} from 'vue';
import { debounce } from 'lodash';

const INJECTION_KEY = 'useResponsiveDetector';

type Orientation = 'landscape' | 'portrait';

/* NOTE: These variables MUST stay in sync with those defined in responsive.less */
const WIDTH = {
  MOBILE: 768,
  TABLET: 1023,
  DESKTOP: 1024,
};

export interface ResponsiveDetector {
  screenWidth: Readonly<Ref<number>>;
  screenOrientation: Readonly<Ref<string>>;
  isMobile: ComputedRef<boolean>;
  isTablet: ComputedRef<boolean>;
  isDesktop: ComputedRef<boolean>;
}

export function useResponsiveDetectorRoot(): ResponsiveDetector {
  const screenWidth = ref(window.innerWidth);
  const screenOrientation = ref<Orientation>(getOrientation());

  const isMobile = computed(() => screenWidth.value < WIDTH.MOBILE);
  const isTablet = computed(
    () => screenWidth.value >= WIDTH.MOBILE && screenWidth.value < WIDTH.DESKTOP
  );
  const isDesktop = computed(() => screenWidth.value >= WIDTH.DESKTOP);

  const debouncedResize = debounce(() => {
    updateScreenWidth();
    updateOrientation();
  }, 100);

  onMounted(() => {
    window.addEventListener('resize', debouncedResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', debouncedResize);
  });

  function updateScreenWidth(): void {
    screenWidth.value = window.innerWidth;
  }

  function getOrientation(): Orientation {
    if (window.screen.orientation) {
      return window.screen.orientation.type.includes('portrait') ? 'portrait' : 'landscape';
    }
    // Fallback for older browsers
    return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
  }

  function updateOrientation(): void {
    screenOrientation.value = getOrientation();
  }

  const responsiveDetector = {
    screenWidth: readonly(screenWidth),
    screenOrientation: readonly(screenOrientation),
    isMobile,
    isTablet,
    isDesktop,
  };

  provide(INJECTION_KEY, responsiveDetector);

  return responsiveDetector;
}

export function useResponsiveDetector(): ResponsiveDetector | undefined {
  const ret = inject<ReturnType<typeof useResponsiveDetectorRoot>>(INJECTION_KEY);
  if (ret) {
    return ret;
  } else {
    console.error('useResponsiveDetector not found');
  }
}
