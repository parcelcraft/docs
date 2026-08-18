# docs.parcelcraft.com redirects

Parcelcraft's documentation moved to <https://www.parcelcraft.com/docs>.

This branch is the production branch for the `docs.parcelcraft.com` Vercel
project. It contains only `vercel.json`, which permanently redirects every
path on the old domain to its new home:

- `docs.parcelcraft.com/<page>` → `www.parcelcraft.com/docs/<page>`
- images, sitemap, and robots.txt map to their equivalents on the main site

Looking for the documentation source? It lives on the
[`main`](https://github.com/parcelcraft/docs/tree/main) branch.
The old Nextra site is preserved on the
[`legacy`](https://github.com/parcelcraft/docs/tree/legacy) branch.
