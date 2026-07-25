# Deep interaction audit — mc-complex.com

## Source of truth
- Full CSS: 874 lines (`theme.css`) — imported 1:1 as `src/app/complex-theme.css`
- Full App: 617 lines babel React — ported to `LandingApp.tsx` (not surface stub)
- API: live `api.mc-complex.com/servers` + Lyra brand remap

## Loader
- Full-screen black overlay z-index 9999
- Logo scale 0.8→1, opacity 0→1, 0.5s easeOut
- 3 dots #10b981 pulse opacity reverse, delay 0/0.2/0.4
- Text "Loading servers..." fade+y, delay 0.3s
- Exit overlay opacity 0.5s when data ready

## Header
- motion y:-20→0, 0.6s
- Left nav: Discord/Twitter/YouTube icons (visibility:hidden in original — kept)
- Center: logo (Lyra SVG) + green-dot global online count
- Right: Store pill + arrow SVG (visibility:hidden in original — kept)
- Logo wrap absolute bottom -50px

## Cards (per server)
- CSS var `--primary-color` drives glow ::before radial + IP tint + play btn
- Side marquee vertical text: left scroll-up 25s, right scroll-down 35s
- H1 60px (50px tablet, 40px mobile)
- IP click → clipboard + green toast 3s
- Forums link with link icon SVG
- Play: framer scale hover 1.05 / tap 0.95 + open play URL
- Discord: brand #5865F2 hover #4752C4
- Store/Forums secondary cards

## Modal gamemodes
- backdrop + container scale 0.95→1 blur 12px
- list modes with icons, PLAY copies IP
- Guides section

## Breakpoints
- ≤768: stack cards, hide marquee/nav arrows/player-count desktop bits, full-width buttons
- 769–1280: h1 50px

## What was wrong before (user callout)
Previous clone was a **simplified** reimplementation (missing many SVGs/icon classes, incomplete modal/header fidelity).  
This pass is a **direct port of the original babel App + full theme.css**.
