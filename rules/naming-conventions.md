# Naming Conventions and Coding Standards

## Models & Interfaces (Frontend Only)
- **UI Models** (TypeScript interfaces): Prefix with 'I' and use PascalCase (e.g., `IProject`, `ISkill`, `IExperience`)
- **Property Naming:** Use camelCase for all properties
- **Model Naming:** Always use PascalCase for interface/model names; capitalize both 'I' and the following letter

## Variables and Constants
- **Variables, including Vue refs:** camelCase (e.g., `projectList`, `skillsViewActive`, `resumeUrl`)
- **Static Constants:** UPPER_CASE (e.g., `RESUME_FILENAME`, `DEFAULT_THEME`)

## General Vue & TS Conventions
- **Component File Structure:** In `.vue` files, always use order: `<script setup>` section, then `<template>`, then `<style lang="less">`
- **Imports:**
  - Imported libraries at the top
  - Single empty line
  - Project (relative path) imports next
- **Export Files:** Use `index.ts` to export components, models, or utilities from a folder
- **Entry Points:** Use conventions like `main.ts` for main application entry

## File & Folder Organization
- **Components:** `[ComponentName].vue`
- **Views:** `[SubviewName]View.vue`
- **Assets:** Place static files (images, PDFs) in `src/assets/`
- **Models:** Place interfaces in `src/models/`

## Styling (Less)
- **Style Section:** In `.vue` files, use `<style lang="less">`.  No separate CSS/SCSS/SASS files unless needed for global styles.
- **Class/ID Naming:** Use kebab-case for class names in markup (e.g., `profile-section`, `project-card`).

## Mock Data
- If demo/mock data is needed for sample projects, skills, or experience:
  - Prefix files with `mock` (e.g., `mockProjects.ts`)
  - Prefix exported constants with `mock` (e.g., `mockProjects`)
