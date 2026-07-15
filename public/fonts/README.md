# Effra font files

The licensed **Effra** typeface is self-hosted from this directory via `@font-face`
in `app/globals.css`. Drop the commercially licensed files here using the exact
names below (`.woff2` preferred, `.woff` as a fallback for older browsers):

| Weight            | CSS `font-weight` | Files                                       |
| ----------------- | ----------------- | ------------------------------------------- |
| Effra Light       | 300               | `effra-light.woff2`, `effra-light.woff`       |
| Effra Regular     | 400               | `effra-regular.woff2`, `effra-regular.woff`   |
| Effra SemiBold    | 600               | `effra-semibold.woff2`, `effra-semibold.woff` |
| Effra ExtraBold   | 800               | `effra-extrabold.woff2`, `effra-extrabold.woff` |

If your license only ships `.otf`/`.ttf`, convert to `.woff2` (+ `.woff`) or
update the `src` URLs and `format()` hints in `app/globals.css` to match.

These are licensed assets — do not commit them to a public repository unless the
license permits redistribution.
