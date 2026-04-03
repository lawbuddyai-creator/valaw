# GitHub Pages deploy steps

This folder contains the whole patched website for GitHub Pages.

## What was changed
- `vite.config.ts` now includes `base: "/valaw/"`
- `package.json` now includes:
  - `homepage`
  - `predeploy`
  - `deploy`
  - `gh-pages` dev dependency

## Deploy
Run these commands in this folder:

```bash
npm install
npm run deploy
```

Then in GitHub:
- go to **Settings > Pages**
- set the source to the **gh-pages** branch

Your site URL should be:
`https://lawbuddyai-creator.github.io/valaw/`
