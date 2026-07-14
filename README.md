# Sankalp Portfolio (Sankalp Digital Headquarters)

Version 0.1.0 — **Foundation**

This is the production-grade, highly structured personal website of Sankalp S. It positions Sankalp as an AI Engineer, Software Developer, Researcher, and Product Builder. Designed with a minimal, premium aesthetic inspired by Apple, OpenAI, Anthropic, Raycast, and Linear.

## Core Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (Dark Mode by Default)
- **Animations**: Framer Motion
- **Theme**: `next-themes`
- **Icons**: Lucide React

## Project Architecture

The project enforces a strict, modular layout and separation of concerns:

- `src/constants/`: Single source of truth for all personal data, projects, skills, and links.
- `src/components/sections/`: Isolated, section-specific layout components (Hero, About, Projects, etc.).
- `src/components/layout/`: Common structural containers like Header and Footer.
- `src/components/ui/`: Reusable, atomic visual components.
- `src/components/shared/`: Shared wrapper/grid layouts.
- `src/components/animations/`: Standardized Framer Motion wrappers.

## Running Locally

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start the development server:
   ```bash
   pnpm dev
   ```
3. Build for production:
   ```bash
   pnpm build
   ```

## License

This project is licensed under the MIT License.
