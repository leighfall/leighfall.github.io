import type { Project } from '@/models/Project';

export const PROJECTS: Project[] = [
  // Add your projects here
  // Example structure:
  {
    Title: 'Portfolio Website',
    Description: [
      'Personal portfolio site built with Vue 3, TypeScript, and Less.',
      'Features dark/light theme toggle, accessible markup, and responsive design.',
    ],
    Date: '2024',
    Link: 'https://github.com/leighfall/leighfall.github.io',
    Tags: ['Vue 3', 'TypeScript', 'Less', 'Pinia'],
    Thumbnail: '/path/to/thumbnail.png',
  },
];
