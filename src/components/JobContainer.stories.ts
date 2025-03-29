import type { Meta, StoryObj } from '@storybook/vue3';

import JobContainer from './JobContainer.vue';
import type { Experience } from '@/models/Experience';
import { SoftwareExperience } from '../constants/JobExperience';

const meta: Meta<typeof JobContainer> = {
  component: JobContainer,
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof JobContainer>;

export const Primary: Story = {
  render: (args) => ({
    components: { JobContainer },
    setup() {
      return { args };
    },
    template: '<JobContainer v-bind="args" />',
  }),
  args: {
    item: SoftwareExperience[0],
  },
};