# Exported — финальные PPTX и PDF

Финальные артефакты презентации, версия `v20261113_02`.

| Файл | Размер | Описание |
|---|---|---|
| `MoscowTechWeek2026_ClickHouse_Vector.pptx` | 40 МБ | 51 слайд, собран через `batch_html2pptx.js` из 51 HTML-файлов 1280 × 720 |
| `MoscowTechWeek2026_ClickHouse_Vector.pdf` | 15.4 МБ | 51 страница, собран через Playwright (PNG 2560 × 1440) → `pdf-lib` |

PDF собран как растр, чтобы шрифты (Montserrat, Inter, PT Serif, JetBrains Mono), иконки FontAwesome, QR-коды и графики выглядели идентично HTML-превью. Векторного слоя нет — это намеренно, чтобы избежать подмены шрифтов и пропажи иконок в PowerPoint/Keynote на машине докладчика.
