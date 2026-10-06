# Manisha Mishra — Portfolio

Personal portfolio built with React + Vite.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Editing content

All text (profile, experience, skills, projects, education) lives in [`src/data.js`](src/data.js).
Projects listed in `featuredProjects` are shown as cards; any other public GitHub repos are fetched live and listed under "More on GitHub".

## Deploy to GitHub Pages

The repo `Manisha-Mishra/Manisha-Mishra.github.io` serves at https://manisha-mishra.github.io.

1. `npm run build`
2. Push the contents of `dist/` to that repo (or to a `gh-pages` branch and point Pages at it).

Vercel or Netlify also work: build command `npm run build`, output directory `dist`.
