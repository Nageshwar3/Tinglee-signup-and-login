# Copilot Instructions for Tinglee Signup and Login Project

Welcome to the Tinglee Signup and Login project! This document provides essential guidelines for AI coding agents to be productive in this codebase. Follow these instructions to understand the architecture, workflows, and conventions specific to this project.

---

## Project Overview

This project is a React-based web application built with Vite. It includes the following key components:

- **Authentication Pages**: Located in `src/pages/auth/`, these include `Login.jsx` and `Register.jsx` for user authentication.
- **Profile Wizard**: A guided user setup flow implemented in `src/components/ProfileWizard.jsx`.
- **Routing**: Centralized in `src/routes/AppRoutes.jsx` to manage navigation.
- **Styling**: CSS files are colocated with their respective components/pages for modularity.

### Key Directories
- `src/components/`: Reusable UI components.
- `src/pages/`: Page-level components, organized by feature.
- `src/routes/`: Application routing logic.
- `public/`: Static assets.

---

## Developer Workflows

### Building and Running the Project
- **Install dependencies**: `npm install`
- **Start the development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview the production build**: `npm run preview`

### Testing
Currently, no testing framework is integrated. Add tests as needed.

### Debugging
Use browser developer tools and Vite's built-in debugging features.

---

## Project-Specific Conventions

### Component Structure
- Use functional components with hooks.
- Co-locate CSS files with components for modularity (e.g., `ProfileWizard.jsx` and `ProfileWizard.css`).

### Routing
- Define all routes in `src/routes/AppRoutes.jsx`.
- Use React Router for navigation.

### Styling
- Follow the BEM (Block Element Modifier) naming convention for CSS classes.
- Avoid inline styles; use CSS files instead.

---

## Integration Points

### External Dependencies
- **React**: Core library for building UI.
- **Vite**: Development server and build tool.
- **React Router**: For routing.

### Cross-Component Communication
- Use props for parent-to-child communication.
- Lift state to the nearest common ancestor when sharing data between components.

---

## Examples

### Adding a New Page
1. Create a new folder in `src/pages/` (e.g., `src/pages/FeatureX/`).
2. Add the page component (e.g., `FeatureX.jsx`) and its CSS file.
3. Define the route in `src/routes/AppRoutes.jsx`.

### Adding a New Component
1. Create the component in `src/components/`.
2. Add a CSS file for styling.
3. Import and use the component where needed.

---

For any questions or clarifications, refer to the `README.md` or consult the project owner.