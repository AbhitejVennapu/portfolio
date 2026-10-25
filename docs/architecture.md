# Architecture

This page explains how the portfolio is put together and lists the known issues. For setup and editing, see the [README](../README.md).

## Overview

The app is a single React page. `index.jsx` mounts `App`, which renders `Terminal`. There is no router, no global state library, and no UI component library in the terminal view.

```
index.html
└─ src/index.jsx          React root, global CSS
   └─ src/App.jsx          renders <Terminal />
      └─ src/components/Terminal.jsx
           ├─ reads        src/data/terminal-data.js
           └─ styled by    src/components/Terminal.css
```

## Terminal view (`src/components/Terminal.jsx`)

`Terminal` is one component with a small amount of state:

| State | Purpose |
| --- | --- |
| `entries` | The transcript. Each entry is `{ id, echo, body }`, where `body` is the JSX output for one command. |
| `booting`, `bootShown` | Drive the boot sequence shown on load. The sequence is skipped when the user prefers reduced motion. |
| `view` | `'terminal'` or `'gui'`. The GUI view replaces the terminal entirely. |
| `value` | The current text in the prompt. |

Refs hold the screen, the latest transcript entry (used to scroll to new output), the input, the next entry id, and the command history.

### How a command runs

1. `run(raw)` normalises the input (trim, lowercase, collapse spaces) and pushes it to history.
2. `gui` switches `view` to `'gui'` and returns. It adds no transcript entry, so repeated clicks do not duplicate output.
3. `clear` empties `entries`.
4. `theme` toggles `data-theme` on `<html>` and prints the new value.
5. Every other known command produces its JSX via `outputFor(cmd)`. Unknown input prints a "command not found" line with the closest match, if one exists.
6. The result is appended with `addEntry`. An effect then scrolls the newest output to the top of the screen.

### Keyboard and touch

- **Enter** runs the command.
- **Tab** completes a single match, or prints all matches when there are several.
- **Up and down arrows** move through history.
- The **ghost text** shows the first matching command as you type. It is visual only.
- On desktop, clicking the transcript focuses the prompt unless text is selected.
- On phones, the command chips in `.rail` are the main way in. The prompt font is 16px so iOS does not zoom on focus.

### Views

- **Terminal:** the default view, described above.
- **GUI:** a placeholder with a "coming soon" message and a button back to the terminal. When the GUI view is built, it should replace the `if (view === 'gui')` branch in `Terminal.jsx`.

## Styling (`src/components/Terminal.css`)

- Colours are CSS custom properties on `:root`: `--bg`, `--fg`, `--muted`, `--line`, `--accent`, `--accent-soft`, `--bar`.
- Dark values are defined twice: once under `prefers-color-scheme: dark` (unless `data-theme="light"` is set) and once for `data-theme="dark"`. The toggle therefore works whether the choice comes from the OS or from the user.
- Typography is Geist Mono throughout.
- The layout is a flex column: title bar, scrolling transcript, command rail, prompt row. Safe-area insets are added to the side padding for phones with notches.

## Content data (`src/data/terminal-data.js`)

This file is the single source for everything the terminal prints. The fields are documented in the README. Two rules keep it safe to edit:

- Use `**text**` for highlights. The renderer splits on this pattern and wraps matches in `<b>`. The strings are hard-coded content, not user input.
- The contact fields are rendered as text or as links to the URLs you set. Do not add `mailto:` links. Show the address as selectable text instead, because mail links often do nothing inside sandboxed views.

## Legacy split-screen code

The earlier version of the site was a two-column layout built with Material UI. It is still in the repo, but the terminal view does not use it:

- `src/views/LandingPage.jsx`: the two-column layout.
- `src/components/Profile.jsx`, `Profile.css`: the left column (photo, name, links).
- `src/components/Information.jsx` and `src/components/InformationComponents/*`: the right column with tabs and carousel.
- `src/components/Resume/*`: a resume layout.
- `src/components/MUIWrapper.jsx`: the Material UI theme provider and dark-mode toggle.
- `src/components/common/ContentTemplate.jsx`: a shared layout helper.
- `src/data/profile-data.json`: the data for the legacy components.

On `main`, `App.jsx` still renders the legacy `LandingPage`. Once `terminal-view` is merged, these files can be removed, or kept for the GUI view if its layout reuses them.

## Known issues

- **Placeholders on the live site.** `LINKEDIN_URL` and `CONTACT_EMAIL` are empty in `terminal-data.js`, so the contact section shows placeholder text until they are filled in.
- **Duplicate resume.** A copy of `Resume.pdf` lives in both `src/assets/` and `src/components/InformationComponents/`. Keep one and update the import.
- **Unused legacy code.** See the list above. It adds to the bundle only if something imports it.
- **Uncommitted lock file.** `package-lock.json` has local changes that are not part of any commit yet.
- **GUI view not built.** The placeholder is intentional.
- **Checks.** The project has no automated tests and no linter configured.
