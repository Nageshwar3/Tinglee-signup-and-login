# Copilot Instructions for Tinglee Signup and Login Project

This is a React + Vite dating app with feature-rich profile management. AI agents should understand the multi-view component architecture and localStorage-based state persistence patterns.

---

## Architecture Overview

**App Entry Point**: `src/main.jsx` → `src/App.jsx` (centralized routing)

**Three Distinct Layers**:
1. **Auth Layer** (`src/pages/auth/`): `Login.jsx`, `Register.jsx` - no auth state management yet (stub alerts)
2. **Discovery Layer** (`src/components/Discovery/`): Card-based profile browsing with `ProfileDetails.jsx` for detailed views
3. **User Ecosystem** (`src/components/`): Feature modules (Chat, Matches, Likes, LoveStories, ProfileWizard, Admin)

**Key Architectural Pattern**: Each major feature (Chat, Discovery, Likes, etc.) has its own folder with component + colocated CSS. No context API or state management library—all state is local with localStorage persistence for profile data.

---

## Critical Data Flow Patterns

**Profile Wizard** (`src/components/ProfileWizard.jsx`, 559 lines):
- Multi-view state machine: `view === 1` (Create) → `view === 2` (Profile View) → `view === 3` (Location)
- **localStorage Key**: `"profile_wizard_data_v2"` - persists name, photos, location, bio, interests, prompts
- **Photo System**: `fileInputRef` + `activePhotoIdx` for editing; base64 data stored in localStorage
- **Icon Inline Pattern**: SVG icons defined as React components (IconBack, IconCamera, etc.)

**Discovery** (`src/components/Discovery/Discovery.jsx`):
- Mock profile objects with shape: `{id, name, age, distance, images[], bio, job, location, interests[], prompts[], isMatch, maritalStatus}`
- State: `profiles[]`, `currentIndex`, `userProfileData` (from localStorage)
- Navigation: Uses `useNavigate()` from React Router; no separate routing file for Discovery internals

**Chat** (`src/components/Chat/Chat.jsx`):
- Route pattern: `/chat/:id` (ID pulled from `useParams()`)
- Message structure: `{id, sender ('me'|'them'), type ('text'|'image'), content, time}`
- useRef pattern for scrolling: `useEffect(() => scrollToBottom(), [messages])`

---

## Developer Workflows

**Setup & Running**:
```bash
npm install
npm run dev          # Vite dev server on http://localhost:5173 (with --host binding)
npm run build        # Production build to dist/
npm run lint         # ESLint check (includes React Hooks rules)
```

**Deployment**: Vercel config in `vercel.json` rewrites all routes to `/` (SPA routing)

---

## Code Conventions & Patterns

**State Management**:
- Local `useState()` only; no Redux/Zustand
- Persistent data: Always key-name as `{featureName}_data_v{N}` (e.g., `profile_wizard_data_v2`)
- Load from localStorage in `useEffect(() => { const saved = localStorage.getItem(SAVE_KEY); ... })` on mount

**Component Structure**:
- Functional components + hooks (React 19)
- Colocated CSS files: `ComponentName.jsx` + `ComponentName.css`
- Props for parent-to-child; lift state only to nearest common ancestor

**Routing** (`src/App.jsx`):
```jsx
<Route path="/" element={<LandingPage />} />
<Route path="/login" element={<Login />} />
<Route path="/discovery" element={<Discovery />} />
<Route path="/chat/:id" element={<Chat />} />
<Route path="*" element={<Navigate to="/login" replace />} />  // Catch-all
```

**ESLint Config** (`eslint.config.js`):
- Ignores: `dist/`
- Rules: React Hooks recommended + React Refresh rules
- Exception: `no-unused-vars` ignores PascalCase (for icon components like `IconCamera`)

---

## Integration Points

**Dependencies**:
- `react@19.2.0`, `react-dom@19.2.0`, `react-router-dom@7.9.5`
- `vite@5.1.0`, `eslint@9.39.1`
- `@fortawesome/fontawesome-free@7.1.0` (CSS icons, not actively used in examined components)

**Cross-Component Communication**:
- No Context API observed; use props or pass data via route state if needed
- localStorage for persistent user data across sessions

---

## When Adding Features

1. **New Page**: Create folder in `src/pages/{feature}/`, add `Feature.jsx` + `Feature.css`, then add route to `src/App.jsx`
2. **New Card/Component**: Create in `src/components/{feature}/`, export and import where needed
3. **Persistent Data**: Use `localStorage.setItem(SAVE_KEY, JSON.stringify(data))` on state change; load on component mount
4. **Navigation**: Use `useNavigate()` hook; avoid hardcoded URLs

---

## Notes for AI Agents

- No authentication backend—all auth flows are UI stubs (e.g., `alert("Login Successful")`)
- Mock data prevails (Discovery profiles are hardcoded arrays)
- Image uploads converted to base64 and stored in localStorage (no server integration)
- Inline SVG icons are common; keep pattern consistent if adding new icons
- Vercel deployment expects SPA routing (all 404s redirect to `/`)