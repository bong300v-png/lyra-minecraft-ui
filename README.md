# Lyra Minecraft UI

Static Next.js frontend for the **Lyra** Minecraft network — browse hub, play guides, store selection, login/register UI.

## Stack

- Next.js 16 (App Router) · React · Tailwind · Framer Motion
- **Static export** (`output: "export"`) for **Cloudflare Pages**

## Brand

- Logo wordmark: **Lyra** only (no Host / domain on logo)
- Join IP demo: `play.lyra.host`

## Local

```bash
npm install
npm run build   # writes ./out
npx serve out -l 3030
```

## Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy out --project-name lyra-minecraft-ui
```

Or connect this GitHub repo to Cloudflare Pages with:

- Build command: `npm run build`
- Output directory: `out`
- Node: 22+

## Routes

| Path | |
|------|--|
| `/` | Browse hub |
| `/play/vanilla` · `/play/pixelmon` · `/play/cobblemon` | Play guides |
| `/store` · `/store/username` | Store select + username |
| `/login` · `/register` | Account UI (demo) |

## License

UI clone for Lyra network presentation. Not affiliated with third-party brands used as visual reference during development.
