# Clone status — mc-complex → Lyra Host

## Routes
| Route | Source | Status |
|---|---|---|
| `/` | Complex browse SPA | Ported `app.jsx` + `theme.css` |
| `/play/vanilla` | `/forums/vanilla/play` | `complex_core_play` CSS + steps + FAQ |
| `/play/pixelmon` | `/forums/pixelmon/play/pixelmon` | CurseForge 4-step + FAQ |
| `/play/cobblemon` | `/forums/pixelmon/play/cobblemon` | CurseForge + Modrinth tabs + FAQ |

## Hub Play wiring
- Survival / Vanilla → `/play/vanilla`
- Vanilla+ / Pixelmon → `/play/pixelmon`
- Creative / Cobblemon → `/play/cobblemon`

## Play fidelity classes
- `play-ip-header`, `play-ip-copy`, `play-progress*`, `play-step-inner has-image`
- `play-install-tabs` (cobblemon)
- `play-faq-section`, `play-discord-help`
- Lightbox on step images

## Assets
- Logo: `/logo.png` (chrome LYRA HOST)
- Step images: `public/images/play/{vanilla,pixelmon,cobblemon}/`
- Original Complex logo kept for audit

## Deploy
- systemd: `lyra-web.service` :3000
- Public: https://lyra.dancode.ink

## Still not cloned (out of hub/play scope)
- Full XenForo forums chrome/nav
- Store pages
- Live Complex API player counts (fallback mock when CORS/API fails)

## Visual verify
Browser automation limited on this host — structure/CSS/content ported from source; user should hard-refresh and compare live.
