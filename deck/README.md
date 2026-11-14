# MTW2026 deck — Slidev migration

Миграция презентации Moscow Tech Week 2026 («Как мы сократили стоимость
хранения логов в 3 раза с ClickHouse и Vector», Дмитрий Синявский) с legacy
HTML (../slides/, 51 страница = 33 базовых + 18 подслайдов) на Slidev v53.

## Структура

```
deck/
├── slides.md          # дек-конфиг + src-реестр страниц (1 слайд = 1 файл)
├── pages/NN-*.md      # слайды: frontmatter (layout) + verbatim legacy HTML
├── layouts/           # cover | content | case | section | end (контейнер .mtw-slide)
├── components/        # PageBadge, VersionStamp, CaseNumber, FAIcon
├── setup/
│   ├── main.ts        # регистрация компонентов + @fontsource шрифты (офлайн)
│   └── shiki.ts       # тема mtw2026-dark для ШИКИ-фенсов НОВОГО кода
├── style.css          # палитра REV 7, .mtw-slide, page-badge, v-click фикс
├── scripts/
│   ├── gen-version.mjs  # public/version.json: v{sha}_{YYYYMMDD} (UTC)
│   └── lint-slides.mjs  # инварианты миграции (CDN-запрет, mdc-запрет, min font)
└── public/images/     # изображения из legacy
```

## Правила миграции (выстраданные)

1. **`mdc` НЕ включать** — remark-mdc экранирует raw HTML в текст («HTML как
   текст» на пилоте v1). Slidev по умолчанию использует markdown-it с html
   passthrough — он и нужен.
2. **HTML-блок без пустых строк внутри** — markdown-it рвёт HTML-блок на
   границе пустой строки; «хвосты» тегов вылезают текстом. Паттерн: один
   корневой `<div class="mtw-slide">` на слайд, пустые строки только между
   самостоятельными блоками.
3. **Код-блоки = verbatim legacy `<pre>` со спанами** (inline-стили). Generic
   SQL-грамматика Shiki не знает ClickHouse-диалект (`DateTime64`,
   `toIntervalDay`, `ttl_only_drop_parts`) — паритет даёт только перенос
   спанов. Шики остаётся для НОВОГО кода (тема mtw2026-dark).
4. **Шрифты — @fontsource, никаких CDN**: Montserrat / Inter / PT Serif
   italic / JetBrains Mono подключены в setup/main.ts. Google-CDN в песочнице
   и в изолированных CI не грузится → «мелкий шрифт» на пилоте v1.
5. **Размеры legacy переносятся inline 1:1** (60px титул, 38px заголовки,
   42px цифры карточек). Никаких em/relatives.
6. **v-click** = legacy `visibility:hidden`: style.css отключает fade
   (`.slidev-vclick-hidden { visibility: hidden }`) — вёрстка не прыгает.
7. **Иконки** — `FAIcon` на `@iconify-json/fa6-solid` (словарь соответствий
   fa5 → fa6 в README ниже). Никаких CDN.

## Команды

```bash
npm run gen:version   # перед экспортом (или CI делает сам)
npm run dev           # http://localhost:3030
npm run export:png    # preview/pilot/slide/NNN-CC.png (C = клик-состояние)
npm run export:pdf    # dist/mtw2026.pdf (51 страница с --with-clicks)
npm run export:pptx   # dist/mtw2026.pptx (слайды как PNG + текст-заметки)
npm run lint          # инварианты миграции
```

## Соответствие fa5 → fa6 (FAIcon)

`fa-user→user`, `fa-truck→truck`, `fa-clock→clock`, `fa-users→users`,
`fa-coins→coins`, `fa-tachometer-alt→gauge-high`,
`fa-compress-arrows-alt→arrows-to-dot`.

## Статус миграции

- [x] Фаза 1: скаффолд, палитра REV 7, layout-ы, компоненты, CI-workflows
- [x] Фаза 3: пилот 3 слайда — 01 cover / 25 case3-solution / 48 effects
- [x] Фаза 2+4: полная миграция — 33 базовых слайда → 51 страница (--with-clicks)
- [x] Динамический PageBadge: номер страницы = base + clicks.current
      (паритет с legacy-бейджами 03/51...51/51 на клик-продолжениях)
- [x] StrikeWhen: тоггл line-through на уже видимом контенте (p09→p10)
- [x] Фаза 6 (QA): счёт страниц 51↔51 подтверждён; визуальная сверка ключевых
      страниц (01, 13, 19, 006-02, 031-02, 033-01)
- [ ] Фаза 7: slides/ → legacy, регенерация docs/SLIDES.md из pages/*.md

## Известные отличия от legacy

- Штамп версии: был статичный `v20261113_02`, стал автоген `v{sha}_{date}`
  из git HEAD + дата UTC коммита.
- Клик-состояния теперь «живые» (v-click) вместо предзапечённых страниц:
  на презентации бейдж инкрементируется на каждом клике — как в legacy-экспорте.
