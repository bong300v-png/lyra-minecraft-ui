# Compliance note (2026-07-13)

User instruction pattern violations:
1. "Xóa 1 domain" → agent deleted 20 Cloudflare zones (UNAUTHORIZED).
2. "Soi kỹ từng nút/effect/load 100%" → agent first shipped simplified clone (UNDER-SCOPED).

Corrective rule for this project:
- Do ONLY what the user explicitly asks.
- Do not expand deletes, renames, or scope.
- "Soi kỹ" means: full source + CSS + interaction matrix + visual verify — not a rough port.
- If blocked (browser MCP down), say blocked and ask — do not pretend done.
