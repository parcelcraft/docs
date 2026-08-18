# Parcelcraft Documentation

This repository is the source for the [Parcelcraft documentation](https://www.parcelcraft.com/docs) — the Stripe app for shipping labels, powered by EasyPost.

**Read the docs:** <https://www.parcelcraft.com/docs>

## Contributing

Spotted a typo, an outdated instruction, or something confusing? Contributions are welcome:

- **Small fixes** — use the *Edit this page* link at the bottom of any page on the docs site (or GitHub's pencil icon here). GitHub will fork the repo and open a pull request for you.
- **Larger changes or questions** — [open an issue](https://github.com/parcelcraft/docs/issues) and we'll take it from there.

A maintainer reviews every pull request and will merge it or request changes. Merged changes deploy to the live site automatically.

### How the content is organized

- Every page is a Markdown file. A folder with a matching `.md` file (e.g. `getting-started.md` + `getting-started/`) forms a section with sub-pages.
- `_meta.json` files control sidebar order and titles.
- Screenshots and images are hosted in the main Parcelcraft app and referenced by absolute path (`/images/...`). If an image needs updating, please open an issue rather than a pull request.

## Branches

| Branch | Purpose |
| --- | --- |
| `main` | Documentation source (this branch) — rendered at [www.parcelcraft.com/docs](https://www.parcelcraft.com/docs) |
| `redirects` | Redirect config for the old `docs.parcelcraft.com` domain |
| `legacy` | Frozen snapshot of the previous Nextra-based docs site |

## License

MIT — see [LICENSE](LICENSE).
