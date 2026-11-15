# MTW2026 deck

Презентация доклада «Как мы сократили стоимость хранения логов в 3 раза с
ClickHouse и Vector» (Moscow Tech Week 2026, Дмитрий Синявский).

Слайды — [Slidev](https://sli.dev) v53. Один `.md` файл = один слайд.
Сборка в SPA, деплой на GitHub Pages.

**Live:** https://r3code.github.io/moscow-tech-week-2026/

## Структура

```
deck/
├── slides.md          # конфиг колоды + src:-реестр слайдов (порядок)
├── pages/NN-*.md      # слайды: frontmatter (layout) + HTML-контент
├── layouts/           # cover | content | case | section | end
├── components/        # PageBadge, FAIcon, CaseNumber, StrikeWhen
├── setup/
│   ├── main.ts        # регистрация компонентов + @fontsource шрифты
│   └── shiki.ts       # тема mtw2026-dark для Shiki
├── style.css          # палитра, .mtw-slide, код-блоки, v-click фикс
├── scripts/
│   ├── lint-slides.mjs        # инварианты (CDN/mdc/font/HTML-бланк)
│   ├── renumber-bases.py      # авто-пересчёт PageBadge base
│   └── inject-cache-bust.mjs  # cache-bust скрипт в dist/index.html
└── public/images/     # изображения (в /images/ в сборке)
```

## Команды

```bash
npm ci                 # зависимости
npm run dev            # http://localhost:3030 с hot-reload
npm run lint           # проверка инвариантов
npm run build          # сборка SPA в dist/
npm run build:pages    # сборка с --base /moscow-tech-week-2026/ + cache-bust
npm run export:pdf     # dist/mtw2026.pdf (--with-clicks)
npm run export:pptx    # dist/mtw2026.pptx
```

## Документация

- **[docs/DEVELOPMENT.md](../docs/DEVELOPMENT.md)** — полный гайд разработчика:
  структура, 8 железных правил, цветовая палитра, добавление слайдов, v-click
  паттерны, lint.
- **[docs/DEPLOY.md](../docs/DEPLOY.md)** — деплой на GitHub Pages, CI workflows,
  экспорт PDF/PPTX, cache bust.
- **[AGENTS.md](../AGENTS.md)** — контекст для AI-агентов.
