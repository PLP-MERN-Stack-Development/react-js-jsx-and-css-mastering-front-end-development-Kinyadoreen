PLP Task Manager — React + Tailwind starter

This repository contains a starter implementation for the Week 3 assignment: a Vite + React app styled with Tailwind CSS. It includes reusable components, a Task Manager (with localStorage persistence), and an API list that fetches posts from JSONPlaceholder.

Local setup
1. Ensure Node.js (v18+) is installed.
2. From the project root run:

```powershell
npm install
npm run dev
```

If your PowerShell blocks npm scripts (execution policy), run in cmd.exe or use `npm.cmd install`.

What I added/changed
- `package.json` — scripts & deps for vite, react, tailwind
- `index.html`, `src/main.jsx`, `src/index.css` — app entry and Tailwind imports
- `tailwind.config.cjs`, `postcss.config.cjs` — Tailwind config
- `src/context/ThemeContext.jsx` — theme provider (light/dark)
- `src/hooks/useLocalStorage.js` — small reusable hook
- `src/components/Button.jsx` — button component (existing, validated)
- `src/components/TaskManager.jsx` — task manager (existing, validated)
- `src/components/Navbar.jsx`, `Footer.jsx` — site chrome with theme switcher
- `src/components/APIList.jsx` — fetch & display posts with pagination and search
- `src/App.jsx` — wired to render Navbar, TaskManager, APIList, Footer

Next steps
- Run `npm install` and `npm run dev` locally to start the dev server.
- Open http://localhost:5173 (or the port Vite reports).
- Commit and push changes to your GitHub Classroom repo, then deploy to Vercel/Netlify.

Notes & edge cases
- localStorage may be unavailable if the browser blocks storage; the hooks include try/catch fallbacks.
- The JSONPlaceholder fetch is unauthenticated and public; handle network failures in production.

