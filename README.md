# Moscow Tech Week 2026 — deck

Slidev v53 migration of the talk
**«Как мы сократили стоимость хранения логов в 3 раза с ClickHouse и Vector»**
by Дмитрий Синявский ([@r3code](https://github.com/r3code)).

Source of the migrated deck lives in [`deck/`](./deck). See
[`deck/README.md`](./deck/README.md) for migration rules, structure and local
commands.

## Live

Once pushed, the deck is auto-built and published by GitHub Actions to:

> https://r3code.github.io/moscow-tech-week-2026/

(First push enables Pages under **Settings → Pages → Source: GitHub Actions**.)

## CI

| Workflow | Trigger | What it does |
| --- | --- | --- |
| [`deploy.yml`](./.github/workflows/deploy.yml) | push to `main`/`master` (changes in `deck/**`) + `workflow_dispatch` | `npm ci` → `gen:version` → `lint` → `slidev build --base /moscow-tech-week-2026/` → deploy SPA to Pages |
| [`lint.yml`](./.github/workflows/lint.yml) | PR / push touching `deck/slides.md`, `deck/pages/**`, `deck/scripts/lint-slides.mjs` | migration invariants: no CDN, no `mdc:true`, no `<18px` fonts, no blank lines inside HTML blocks |
| [`export-pdf.yml`](./.github/workflows/export-pdf.yml) | `workflow_dispatch` + tag `v*` | PDF export with `--with-clicks` (51 pages) → artifact `mtw2026-pdf` (30d) |
| [`export-pptx.yml`](./.github/workflows/export-pptx.yml) | `workflow_dispatch` + tag `v*` | PNG export per click → `python-pptx` assembles `mtw2026.pptx` → artifact `mtw2026-pptx` (30d) + `mtw2026-png` (14d) |

## Local

```bash
cd deck
npm ci
npm run gen:version        # public/version.json: v{sha}_{YYYYMMDD}
npm run lint               # migration invariants
npm run dev                # http://localhost:3030
npm run export:pdf         # dist/mtw2026.pdf (--with-clicks)
npm run export:pptx        # dist/mtw2026.pptx
```

## Repository layout

```
.
├── .github/workflows/   # 4 workflows (see CI table above)
├── deck/                # source — see deck/README.md
│   ├── slides.md        # deck config + src: registry (33 base pages → 51 with clicks)
│   ├── pages/           # one .md per slide
│   ├── layouts/         # cover | content | case | section | end
│   ├── components/      # PageBadge, VersionStamp, CaseNumber, FAIcon
│   ├── setup/           # main.ts (offline fonts) + shiki.ts (mtw2026-dark theme)
│   ├── scripts/         # gen-version.mjs + lint-slides.mjs
│   ├── style.css        # palette REV 7, .mtw-slide, v-click fix
│   └── public/images/   # legacy images
└── README.md            # this file
```
