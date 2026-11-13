# MTW 2026 deck — Slidev sources

Slidev-презентация «Как мы сократили стоимость хранения логов в 3 раза с ClickHouse и Vector» — Moscow Tech Week 2026.
Докладчик: Дмитрий Синявский (@r3code, @letitkit).

Это единственный источник истины: HTML-архив в `../slides/` — legacy, не редактируется.

## Структура (один слайд = один файл)

* `slides.md` — каркас колоды: глобальный frontmatter + `src:` на страницы
* `pages/` — слайды по файлам: `NN-slug.md` (NN = номер базового состояния в легаси-нумерации NN/51)
* `layouts/mtw.vue` — контентный слайд: шапка сверху (accent-bar + EN eyebrow + RU title), бейдж, grid
* `layouts/mtw-cover.vue` — титульный слайд (без шапки, со стампом версии)
* `components/` — `MtwBadge` (счётчик NN/51 с учётом клик-состояний), `MtwCase` (декоративный CASE-номер), `MtwStamp` (версия = дата + короткий SHA, автоген)
* `styles/index.css` — дизайн-система REV 7 (палитра, паттерны, типографика, min 21/18px)
* `setup/main.ts` — офлайн-шрифты (fontsource: Montserrat/Inter/PT Serif/JetBrains Mono, кириллица включена) + FontAwesome 6.5.1
* `data/pageMap.ts` — генерируется `scripts/build_page_map.py`: маппинг 33 логических слайдов → 51 экспортная страница
* `data/version.ts` — генерируется `scripts/gen-version.mjs` (predev/prebuild/preexport)
* `public/images/` — картинки слайдов (фото, QR, графики)

## Поведение (паритет с легаси)

* Прогрессивное раскрытие: `v-click` — элементы скрыты до клика через visibility, layout не ломается (1:1 к легаси-подслайдам)
* Экспорт `--with-clicks` даёт ровно 51 страницу: 33 базовых + 18 промежуточных состояний
* Бейдж `NN / 51` считает экспортные страницы (база слайда + текущий клик) по `data/pageMap.ts`

## Команды

```
npm install        # один раз
npm run dev        # http://localhost:3030
npm run build      # SPA в ./dist
npm run export:pdf   # ../exported/....pdf  (вектор, текст выделяется; требует Chromium)
npm run export:pptx  # ../exported/....pptx (пиксель-точные картинки страниц, 51 шт.)
npm run export:png   # ./qa/*.png (превью каждого клик-состояния)
npm run gen:pagemap  # пересобрать data/pageMap.ts из легаси-HTML
```

Версия на титуле — автоген `v<ГГГГММДД>.<короткий SHA>` при каждом dev/build/export.
