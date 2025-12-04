# Project Structure and Organization

## Overview
This project is a single-user web portfolio/personal profile application, structured as a static frontend site with no backend, database, or mobile sub-projects.

Directory structure:
```
leighfall.github.io/
├── src/
│   ├── assets/           # Images, PDFs, and other static project assets
│   │   ├── images/       # Profile, project, and misc images
│   │   ├── css/          # Global or utility CSS/Less if needed
│   │   ├── main.less     # Global Less entry point for styles
│   │   └── webfonts/     # Custom or third-party icon/web font files
│   ├── components/       # Reusable Vue components (e.g., SkillPill, SectionHeader)
│   ├── constants/        # Static TS data (e.g. job list, skill tags)
│   ├── models/           # TypeScript interfaces for UI models (I-prefixed, PascalCase)
│   ├── utilities/        # TS utility functions/helpers
│   ├── views/            # View/page components (e.g., AboutView, ExperienceView)
│   ├── App.vue           # Vue root app component
│   ├── main.ts           # Vite entry point
│   └── router/           # Vue Router config
├── public/
│   ├── 404.html          # Static 404/fallback page
│   ├── documents/        # Resume PDFs, downloadable assets
│   └── ...               # Favicon, meta, and static files
├── docs/                 # Built files for static hosting (e.g., GitHub Pages)
│   └── ...
├── package.json
├── README.md
└── ...
```

## Naming Conventions
- **Folders:** All lowercase, dash-separated if multiple words (e.g., job-examples/)
- **Vue Components:** PascalCase (e.g., ProjectContainer.vue)
- **TypeScript Models:** I-prefixed PascalCase (e.g., IJob.ts, IProject.ts)
- **Assets:** Descriptive, lowercase or kebab-case (e.g., profilepicsmall.png)

## File Placement Conventions
- Profile images & project screenshots: `src/assets/images/`
- Resume/CV PDF: `public/documents/`
- Top-level views/pages: `src/views/`
- Section-specific or reusable UI components: `src/components/`
- TypeScript UI models/interfaces: `src/models/`
- Layout and theme styles: `src/assets/main.less`, optionally component-scoped

## Notes
- There is no backend/API, shared, or mobile application code.
- All files are organized for clarity, easy maintenance, and static web deployment.
