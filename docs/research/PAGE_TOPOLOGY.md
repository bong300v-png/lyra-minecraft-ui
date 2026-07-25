# Page Topology — mc-complex.com full clone

## Click graph

```
/  (Browse hub — React SPA + theme.css + api.mc-complex.com/servers)
├── Play (card) → /play/vanilla | /play/pixelmon | /play/cobblemon
├── Store (card/header) → /store
│   └── store card → /store/username?store=<mode>
├── Log in → /login  (XenForo login UI demo)
└── Register → /register
```

## Source URLs

| Route | Live source |
|-------|-------------|
| `/` | https://www.mc-complex.com/ |
| `/play/vanilla` | https://www.mc-complex.com/forums/vanilla/play |
| `/play/pixelmon` | https://www.mc-complex.com/forums/pixelmon/play/pixelmon |
| `/play/cobblemon` | https://www.mc-complex.com/forums/pixelmon/play/cobblemon |
| `/store` | https://www.mc-complex.com/forums/pixelmon/store/ |
| `/store/username` | https://www.mc-complex.com/forums/pixelmon/store/username |
| `/login` | https://www.mc-complex.com/forums/pixelmon/login/ |
| `/register` | https://www.mc-complex.com/forums/pixelmon/register/ |

## Brand

Keep **COMPLEX** wordmark + Complex product names/IPs. No Lyra rebrand for this deliverable.

## Honest gaps

- Real XenForo auth/session, basket checkout/Tebex payment not faked
- Full forums boards / every guide deep page not cloned
- Login/Register = UI parity + deep-link official for real accounts
