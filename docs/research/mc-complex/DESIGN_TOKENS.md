# MC-Complex → Lyra clone research

## Target
- URL: https://www.mc-complex.com/
- Title: Complex Gaming — Browse
- Stack: React 18 UMD + Babel standalone + Framer Motion 5 + custom `theme.css`
- Font: Stack Sans Text (Google)
- API: `GET https://api.mc-complex.com/servers`

## Visual system
- Background: pure black `#000`
- Cards: `rgb(26,26,26)`, radius 25px, primary radial glow via CSS var `--primary-color`
- Vertical marquee side text (`scroll-up` 25s / `scroll-down` 35s)
- Loader: logo scale-in + 3 green dots pulse + "Loading servers..."
- Toast: copy IP feedback, green
- Desktop: 3 cards + prev/next; Mobile: stack all

## Interactions extracted
| Element | Behavior |
|---|---|
| Server IP click | clipboard copy + toast 3s |
| Play | open play URL + expand gamemodes modal |
| Discord | external invite |
| Store / Forums | external links |
| Prev/Next | carousel index shift (desktop) |
| Modal backdrop | close expand |
| Hover buttons | scale 1.05 (framer) |

## Servers (API shape)
name, url, className, primaryColor, discordInvite, forumsUrl, iconUrl, gameModes[], guides[]

## Logo
- Original Complex: `logo.png` 557×159 RGBA → saved as `public/images/complex-logo-original.png`
- **Lyra recreation:** constellation mark (Lyra star pattern) + wordmark `LYRA` / `NETWORK` → `public/logo.svg`

## Rebrand
Complex Gaming → **Lyra Network**; domain `*.mc-complex.com` → `*.lyra.host`
