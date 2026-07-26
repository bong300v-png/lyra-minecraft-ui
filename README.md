# Lyra Minecraft UI

Website tĩnh (Next.js) của **Lyra** — server Minecraft Survival Towny Việt Nam, non-P2W. Theme "thiên hà Lyra": Void `#06080f` · Starlight `#E6EBF4` · Vega Violet `#8B5CF6` · font Unbounded + Space Grotesk.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind v4
- **Static export** (`output: "export"`) cho **Cloudflare Pages**
- Design gốc: `docs/design-references/lyra-v2/` (11 trang .dc.html, 26/07/2026)

## Brand

- Logo: chòm sao Lyra (5 node, sao Vega tím) — `public/images/lyra-logo*.svg`
- IP: `play.lyra.host` · cấu hình chung tại `src/lib/site.ts` (TODO: điền link Discord thật)

## Local

```bash
npm install
npm run check   # lint + typecheck + build → ./out
npx serve out -l 3030
```

## Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy out --project-name lyra-minecraft-ui
```

Hoặc nối repo GitHub với Cloudflare Pages: build `npm run build`, output `out`, Node 22+. Gắn custom domain `lyra.host`.

## Routes

| Path | Trang |
|------|------|
| `/` | Landing (canvas sao, 3 thế giới, chòm sao Lyra) |
| `/play/` | Hướng dẫn vào chơi (Java cracked · Bedrock sắp mở) |
| `/store/` | Store — Ủng Hộ · Lyra+ 49k/th · Badge Mùa + cam kết non-P2W |
| `/vote/` | Vote (mở tại beta công khai) |
| `/forums/` | Forums (đọc — thảo luận trên Discord) |
| `/news/` `/rules/` `/staff/` `/bans/` `/terms/` | Tin tức · Nội quy · Đội ngũ · Bảng ban · Điều khoản |
| `/login/` `/register/` | UI tài khoản (demo — game dùng AuthMe in-game) |

## Nguyên tắc nội dung

Website không được hứa thứ chưa có: Bedrock ghi "sắp mở" chừng nào Geyser còn tắt, không số người chơi ảo, giá đúng economy freeze (town $1000/claim $25), cam kết non-P2W in thẳng lên Store.
