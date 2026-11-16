# AGENTS.md

Контекст для AI-агентов (Cursor, Claude, Copilot, Gemini) работающих с этим
репозиторием. Progressive disclosure: краткие правила здесь, детали — в docs/.

## Что это

Презентация доклада «Как мы сократили стоимость хранения логов в 3 раза с
ClickHouse и Vector» (Moscow Tech Week 2026, Дмитрий Синявский). Слайды —
Slidev v53, один `.md` файл на слайд, сборка в SPA на GitHub Pages.

**57 PDF-страниц** (34 базовых + 23 клик-состояния).

## Key files

```
README.md                    → карточка доклада (не трогать техдетали)
AGENTS.md                    → этот файл
deck/slides.md               → реестр слайдов (порядок src: импортов)
deck/pages/NN-*.md           → слайды (1 файл = 1 слайд)
deck/style.css               → палитра, код-блоки, v-click фикс
deck/setup/main.ts           → компоненты + @fontsource шрифты
deck/components/             → PageBadge, FAIcon, CaseNumber, StrikeWhen
deck/scripts/lint-slides.mjs → инварианты (запускать перед коммитом)
.github/workflows/           → deploy, lint, export-pdf, export-pptx
docs/DEPLOY.md               → деплой, Pages, cache bust
docs/DEVELOPMENT.md          → полный гайд разработчика
```

## Перед изменениями — прочитай

- [`docs/DEVELOPMENT.md`](./docs/DEVELOPMENT.md) — структура, конвенции, все 8 правил
- [`docs/DEPLOY.md`](./docs/DEPLOY.md) — если правишь CI или deploy

## Железные правила (нарушение = сломанный деплой)

1. **`mdc: true` НЕ включать** — remark-mdc экранирует raw HTML. Slidev
   по умолчанию использует markdown-it с html passthrough.

2. **Код-блоки — `<pre>`, не `<div>`** — Vue 3 конденсирует whitespace между
   элементами (newline → space). `<pre>` в whitelist Vue. Если контент
   код-блока на одной строке вместо разных — меняй `<div>` на `<pre>`.

3. **Шрифты — `@fontsource/*`, никаких CDN** — Google Fonts CDN не грузится
   в изолированных CI/песочницах → «мелкий шрифт».

4. **`font-size` ≥ 18px** — lint запрещает меньше (исключения: 13, 14, 16).
   WCAG-правило для проекторов.

5. **v-click для скрытия карточки целиком** — оборачивай весь `<div>` в
   `v-click="N"`, не только внутренний текст. Иначе «подложка видна, текст
   скрыт». CSS: `.slidev-vclick-hidden { visibility: hidden }` (не display:none).

6. **`__VERSION__` плейсхолдер** — в `pages/01-cover.md`. CI sed-инъекция
   заменяет на `YYYYMMDD rev. <sha>`. Не использовать `VersionStamp` или
   `version.json`.

7. **Иконки — `FAIcon`** на `@iconify-json/fa6-solid`. Никаких CDN.
   `github` нет в fa6-solid → используй `code-branch`.

8. **HTML-блок без пустых строк внутри** — markdown-it рвёт блок на пустой
   строке. Один корневой `<div class="mtw-slide">`, внутри — сплошной HTML.

## Команды

```bash
cd deck
npm ci                 # зависимости
npm run lint           # инварианты — запускать ПЕРЕД коммитом
npm run dev            # http://localhost:3030
npm run build          # сборка SPA
python3 scripts/renumber-bases.py   # после изменения v-click кол-ва
```

## Цвета код-блоков (REV 8 light)

Светлый фон `#F5F7FA`, тёмный текст `#1A2A3A`. Тёмный фон `#0F2942` запрещён
(бликует на проекторах). Полная палитра — в `docs/DEVELOPMENT.md`.

## CI

4 CI workflow в `.github/workflows/`:
- `deploy.yml` — push в main → Pages (с cache-bust инъекцией)
- `lint.yml` — PR / push → инварианты
- `export-pdf.yml` — push в main → PDF artifact + **GitHub Release `latest`** (заменяет предыдущий)
- `export-pptx.yml` — manual / tag v* → PPTX artifact

Lint запускается ДО sed-инъекции версии (проверяет `__VERSION__` плейсхолдер).
