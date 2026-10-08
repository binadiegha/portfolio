# binadiegha.xyz

Personal portfolio of Jones Binadiegha Gabriel. React 19 + TypeScript + Vite, with React Router.

## Develop

```bash
npm install
npm run dev
```

## Content

All text, projects, experience and links live in `src/data.ts`. Project images go in `public/images/`.

## Deploy (AWS Amplify)

`amplify.yml` builds with `npm run build` and serves `dist/`. Because this is a single-page app, the Amplify app needs a rewrite rule so routes like `/projects` load `index.html`:

| Source | Target | Type |
| --- | --- | --- |
| `</^[^.]+$\|\.(?!(css\|gif\|ico\|jpg\|jpeg\|js\|png\|txt\|svg\|woff\|woff2\|ttf\|map\|json\|webp\|mp4)$)([^.]+$)/>` | `/index.html` | 200 (Rewrite) |

The previous Next.js version of the site is on the `master` branch history.
