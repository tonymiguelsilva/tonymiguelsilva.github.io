# Agent Rules

- Route boundary components (`errorComponent`, `notFoundComponent`) must be typed with the router's own prop types (e.g. `ErrorComponentProps` from `@tanstack/react-router`) instead of hand-written prop shapes, because the router widens those props across versions and a custom `error: Error` annotation breaks the typecheck after a TanStack upgrade.
- Project images shown in cards are CDN assets referenced through `.asset.json` pointers under `src/assets/`, never binary files committed to the repo, so the checkout stays lightweight.
- Overlay badges on card artwork must be hover-revealed rather than always visible, because the project diagrams carry text right up to their edges and a permanent pill truncates it.
- Engineering project cards support optional platform links and complementary screenshot arrays, so web applications can be included without changing existing repository-only cards.
- The browser-tab icon is the `t.` lettermark in `public/favicon.svg`, built from the same brand tokens as the nav wordmark, with `favicon.png` / `apple-touch-icon.png` rasterized from it and declared in `head().links` of `src/routes/__root.tsx`, because the tab mark must stay crisp at 16px and never drift from the site's visual identity.

