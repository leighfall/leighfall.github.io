# Stack-Specific Rules

## Development Methodology
- Build with Vue 3 (Composition API, script setup)
- Use TypeScript for all logic and UI models
- Style with Less, in the `<style lang="less">` section of each Vue component
- All new features and bug fixes should maintain high code quality, consistency, and accessibility

## Frontend (Web) - Vue 3
**Experience Level:** Proficient (see programmer-profile.md)

### Vue 3 Specific Rules
- Use Vue 3 with the Composition API and `<script setup>`
- Component file structure order: script → template → style
- Organize all imports: libraries at the top, empty line, project imports next
- Type all variables, refs, props and emitted events using TypeScript

### Styling
- Use Less for all new component styles
- Class/ID naming should use kebab-case
- Attempt to scope component styles unless shared across many components

### State Management
- Use Pinia for state management only if needed
  - If used, prefer Pinia "setup store composition" syntax (defineStore with setup function) to align with Vue Script Setup Composition API
- See programmer-profile.md for experience guidance (Novice)

### Accessibility & Responsive Design
- Ensure all navigation, interactions, buttons, and forms are accessible via keyboard
- Use proper ARIA labels and semantic HTML where appropriate
- Provide descriptive alt text for all non-decorative images
- Make all layouts and components fully responsive (mobile/tablet/desktop) and test at common breakpoints

## General
- No backend, database, or mobile features are present or required
- Do not use Node.js, Prisma, PostgreSQL, Docker, or mobile stacks

## Testing
- Manual UI review and visual testing is acceptable; automated testing is not required unless personally desired
