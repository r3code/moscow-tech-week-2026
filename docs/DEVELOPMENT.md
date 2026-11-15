# Разработка и редактирование слайдов

## Быстрый старт

```bash
cd deck
npm ci                 # установка зависимостей
npm run dev            # http://localhost:3030 с hot-reload
npm run lint           # проверка инвариантов
npm run build          # сборка SPA в dist/
npm run build:pages    # сборка с --base /moscow-tech-week-2026/
```

## Структура deck/

```
deck/
├── slides.md          # конфиг колоды + src:-реестр страниц (порядок слайдов)
├── pages/NN-*.md      # один слайд = один файл: frontmatter + HTML-контент
├── layouts/           # cover | content | case | section | end (контейнер .mtw-slide)
├── components/        # PageBadge, CaseNumber, FAIcon, StrikeWhen (Vue SFC)
├── setup/
│   ├── main.ts        # регистрация компонентов + @fontsource шрифты (офлайн)
│   └── shiki.ts       # тема mtw2026-dark для Shiki (новый код)
├── style.css          # палитра, .mtw-slide, код-блоки, v-click фикс
├── scripts/
│   ├── lint-slides.mjs        # инварианты (CDN/mdc/font/HTML-бланк)
│   ├── renumber-bases.py      # авто-пересчёт PageBadge base после изменений
│   └── inject-cache-bust.mjs  # inline cache-bust скрипт в dist/index.html
└── public/images/     # изображения (в /images/ в сборке)
```

## Железные правила

### 1. `mdc: true` НЕ включать

remark-mdc экранирует raw HTML в текст. Slidev по умолчанию использует
markdown-it с html passthrough — он и нужен. Никогда не добавляй `mdc: true`
в frontmatter.

### 2. HTML-блок без пустых строк внутри

markdown-it рвёт HTML-блок на границе пустой строки. Паттерн: один корневой
`<div class="mtw-slide">` на слайд, пустые строки только между блоками вне
корневого div. Внутри — сплошной HTML.

### 3. Код-блоки — `<pre>`, не `<div>`

Vue 3 template compiler конденсирует whitespace между элементами (newline
→ space). CSS `white-space: pre` работает в браузере, но Vue сжимает newline
ДО рендера. `<pre>` тег в whitelist Vue — whitespace сохраняется.

```html
<!-- ПРАВИЛЬНО -->
<pre class="s37-code-block"><span class="kw">{</span>
  <span class="str">"key"</span>: <span class="str">"value"</span>
<span class="kw">}</span></pre>

<!-- НЕПРАВИЛЬНО — newlines между span-ами превратятся в пробелы -->
<div class="s37-code-block"><span class="kw">{</span>
  <span class="str">"key"</span>: <span class="str">"value"</span>
<span class="kw">}</span></div>
```

### 4. Шрифты — @fontsource, никаких CDN

Montserrat / Inter / PT Serif italic / JetBrains Mono подключены в
`setup/main.ts` через `@fontsource/*`. Google Fonts CDN в песочнице и
изолированных CI не грузится → «мелкий шрифт».

### 5. Минимальный размер шрифта — 18px

Lint проверяет `font-size: Npx` — всё меньше 18px запрещено (исключения:
13px circle labels, 14px version-stamp, 16px badges). Это WCAG-правило
для проекторов.

### 6. v-click — visibility:hidden, не display:none

CSS `.slidev-vclick-hidden { visibility: hidden }` + `transition: none` —
вёрстка не прыгает (место резервируется). Не меняй на `display: none`.

Для скрытия карточки целиком (с подложкой) — оборачивай весь `<div>` в
`v-click="N"`, не только внутренний текст:

```html
<!-- ПРАВИЛЬНО — весь блок скрыт -->
<div v-click="1" style="background:#F8F9FA;...">
  <FAIcon name="server" .../>
  <div>Текст</div>
</div>

<!-- НЕПРАВИЛЬНО — фон виден, текст скрыт -->
<div style="background:#F8F9FA;...">
  <FAIcon name="server" .../>
  <div v-click="1">Текст</div>
</div>
```

### 7. Иконки — FAIcon на @iconify-json/fa6-solid

Никаких CDN FontAwesome. FAIcon грузит SVG-пути из локального JSON.
Соответствие fa5 → fa6: `fa-tachometer-alt→gauge-high`,
`fa-compress-arrows-alt→arrows-to-dot`, остальные — те же имена.
`github` иконка в fa6-solid отсутствует — используй `code-branch`.

### 8. `__VERSION__` плейсхолдер

В `pages/01-cover.md` — `<p class="version-stamp">__VERSION__</p>`. CI
заменяет sed-ом на `YYYYMMDD rev. <sha>`. Lint проверяет наличие плейсхолдера.
Не используй `VersionStamp` компонент или `version.json` fetch.

## Цветовая палитра код-блоков (REV 8 light)

Тёмный фон `#0F2942` заменён на светлый `#F5F7FA` (бликует на проекторах).

| Токен | Цвет | Где |
| --- | --- | --- |
| Background | `#F5F7FA` | `.code-block`, `.s28-code-card`, `.s37-code-block`, inline `<pre>` |
| Base text | `#1A2A3A` | base color |
| Keyword | `#1565C0` | `.kw`, `color:#1565C0` |
| String | `#558B2F` | `.str`, `color:#558B2F` |
| Number | `#F57F17` | `.num` |
| Comment | `#6B7B8D` | `.com`, `color:#6B7B8D` |
| Function | `#00796B` | `.fn`, `color:#00796B` |
| Highlight bg | `rgba(255,167,38,0.18)` | `.hl`, inline `background:rgba(255,167,38,0.18)` |
| Highlight text | `#BF360C` | `.hl`, inline `color:#BF360C` |

Скрипт `scripts/invert-code-colors.py` — массовая замена цветов (если
понадобится вернуться к инверсии).

## Добавление / правка слайдов

### Новый слайд

1. Создай `pages/NN-*.md` (номер = позиция в legacy-нумерации)
2. Frontmatter: `layout: content|cover|case|section|end`, `canvasWidth: 1280`, `aspectRatio: 16/9`, `transition: none`, `drawings: false`, `lineNumbers: false`
3. Контент: один `<div class="mtw-slide">` (без пустых строк внутри)
4. `<PageBadge base="N" />` — номер страницы (см. ниже)
5. Зарегистрируй в `slides.md`: `---\nsrc: ./pages/NN-*.md\n---`
6. Запусти `python3 scripts/renumber-bases.py` — авто-пересчёт всех base

### Перенумерация после изменения кликов

Если добавил/убрал `v-click` — изменилось количество PDF-страниц. Запусти:

```bash
python3 scripts/renumber-bases.py
```

Скрипт читает `slides.md`, считает max v-click per page, вычисляет новые
base, обновляет `base="N"` в каждом файле и `default` total в `PageBadge.vue`.

### fa5 → fa6 mapping

`fa-user→user`, `fa-truck→truck`, `fa-clock→clock`, `fa-users→users`,
`fa-coins→coins`, `fa-tachometer-alt→gauge-high`,
`fa-compress-arrows-alt→arrows-to-dot`. `github` → `code-branch` (brand icon
не в fa6-solid).

## Lint

```bash
npm run lint
```

Проверяет:
- Нет CDN (Google Fonts, Tailwind, FontAwesome, cdnjs)
- Нет `mdc: true` в frontmatter
- Нет пустых строк внутри корневого `<div class="mtw-slide">`
- `font-size` ≥ 18px (исключения: 13, 14, 16)
- `__VERSION__` плейсхолдер в `01-cover.md`
- Нет `VersionStamp` компонента или `version.json` ссылок
