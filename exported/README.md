# Exported — финальные PPTX и PDF

Финальные артефакты презентации.

| Файл | Версия | Происхождение |
|---|---|---|
| `MoscowTechWeek2026_ClickHouse_Vector.pptx` | `v20261113_02` | LEGACY: собран из HTML через `batch_html2pptx.js` (нативные текст-боксы, редактируемый) |
| `MoscowTechWeek2026_ClickHouse_Vector.pdf` | `v20261113_02` | LEGACY: растровый PDF из HTML (Playwright PNG → pdf-lib) |

## Актуальный пайплайн — Slidev

Дальнейшая разработка презентации ведётся в [`deck/`](../deck/) (Slidev, один слайд = один файл).
Новые артефакты собираются из `deck/` и перезаписывают файлы выше:

```
cd deck
npm install         # один раз
npm run export:pdf    # векторный PDF, текст выделяется, 51 страница (--with-clicks)
npm run export:pptx   # пиксель-точные картинки страниц, 51 слайд
```

Версия на титуле — автоген `v<ГГГГММДД>.<короткий SHA>` при каждом экспорте.
