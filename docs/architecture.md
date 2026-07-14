# Software Architecture Spec - Sankalp Portfolio

## Architecture Decisions

### 1. Data-Driven Components
To ensure maintainability over the next 5 years, all text, external links, social handles, and structured data are extracted into static constants files under `src/constants`. Adding a new project, changing a social link, or updating skills is a simple object modification.

### 2. Styles
We utilize **Tailwind CSS v4** which simplifies style generation with native CSS variables and lightning-fast compilations. Design system parameters (colors, layouts, borders) are defined as core variables.

### 3. Theme System
Theme toggling uses `next-themes` injected via a Root Provider. By default, dark mode is active.

### 4. Search Engine Optimization (SEO) & Web Accessibility (a11y)
- Next.js Metadata API used on Root Layout.
- Automated `sitemap.ts`, `robots.ts`, and Web manifest (`manifest.ts`) configured.
- Structured data (JSON-LD) injected directly into the HTML to describe the entity as a developer/builder.
- All interactive controls have clear ARIA attributes and are fully accessible via keyboard traversal.
