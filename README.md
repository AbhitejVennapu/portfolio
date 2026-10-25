# Abhitej Vennapu: Portfolio

Personal portfolio for Abhitej Vennapu, a frontend-focused software developer. The site is a terminal-style page that lists experience, education, projects, and contact details. Live at https://abhitejvennapu.github.io/portfolio/

A graphical (GUI) view is planned. For now the GUI option shows a "coming soon" screen.

## Stack

- React 18, built with Vite 8
- Plain CSS for the terminal view (no UI library)
- Geist Mono from Google Fonts
- Deployed to GitHub Pages with `gh-pages`

## Getting started

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev        # local dev server at http://localhost:5173/portfolio/
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite dev server with hot reload. |
| `npm run build` | Builds the production site into `dist/`. |
| `npm run preview` | Serves the built `dist/` locally to check it before deploying. |
| `npm run deploy` | Runs `build`, then publishes `dist/` to the `gh-pages` branch. |

## Deploying

```bash
npm run deploy
```

GitHub Pages serves the `gh-pages` branch at `https://abhitejvennapu.github.io/portfolio/`. It can take a few minutes for a new deploy to appear.

The Vite `base` is set to `/portfolio/` in `vite.config.mjs`. Keep it in line with the Pages path, or the built asset URLs will break.

## Editing the content

Almost all visible text lives in one file: **`src/data/terminal-data.js`**.

- `COMMANDS` and `DESCRIPTIONS`: the commands in the terminal and their help text.
- `EXPERIENCE` and `EDUCATION`: each entry has `role`, `org`, `when`, `where`, optional `now: true` (marks the current job), and `points`. Wrap a term in `**double asterisks**` to highlight it.
- `PROJECTS`: `name`, `kind`, and `desc`.
- `GITHUB_URL`, `LINKEDIN_URL`, `CONTACT_EMAIL`: contact details. Leave `LINKEDIN_URL` or `CONTACT_EMAIL` empty to show a placeholder.

The welcome screen and the `whoami` output are written directly in `src/components/Terminal.jsx`. Edit them there.

## Terminal commands

| Command | Output |
| --- | --- |
| `help` | Lists the commands. |
| `whoami` | Short introduction and key facts. |
| `ls projects` | Selected projects. |
| `cat experience` | Work history, newest first. |
| `cat education` | Degrees. |
| `contact` | GitHub, LinkedIn, and email. |
| `gui` | Switches to the GUI placeholder. Also reachable from the title-bar button. |
| `theme` | Toggles light and dark. |
| `clear` | Clears the transcript. |

Keyboard: Tab completes a command (or lists matches), up and down arrows recall history, and the chip row above the prompt runs a command with one tap.

## Project structure

```
src/
  App.jsx                    Entry component; renders the terminal view
  index.jsx                  React root
  index.css                  Global base styles
  components/
    Terminal.jsx             Terminal view: state, command handling, GUI placeholder
    Terminal.css             Terminal styles, light and dark tokens
  data/
    terminal-data.js         All portfolio content shown in the terminal
    profile-data.json        Earlier data source for the split-screen layout (see docs)
docs/
  architecture.md            How the pieces fit together, and known issues
public/                      Static files: favicon, manifest, robots.txt, icons
vite.config.mjs              Vite config, including the /portfolio/ base path
```

Older split-screen components (`LandingPage`, `Profile`, `Information`, `MUIWrapper`, and the `Resume` and `InformationComponents` folders) are not used by the terminal view. See `docs/architecture.md`.

## Branches

- `main`: the last merged version.
- `terminal-view`: the terminal view. Merge into `main` when it is ready.
- `security/fix-dependency-vulnerabilities`: the earlier move from Create React App to Vite (merged into `main`).

## More

- Architecture, the legacy components, and known issues: [docs/architecture.md](docs/architecture.md)
