# Moscow Tech Week 2026 — Как мы сократили стоимость хранения логов в 3 раза с ClickHouse и Vector

Доклад для **Moscow Tech Week 2026**.

**Докладчик:** Дмитрий Синявский · SRE · Платформа наблюдаемости · ВсеИнструменты.ру
- GitHub: [`r3code`](https://github.com/r3code)
- Telegram: [`@letitkit`](https://t.me/letitkit)

**Версия презентации:** `v20261113_02`

## Что внутри

| Путь | Содержание |
|---|---|
| [`docs/SLIDES.md`](docs/SLIDES.md) | Подробное Markdown-описание всех 51 слайда: дизайн-система, по-слайдовое содержание, тексты, изображения, речь докладчика |
| [`slides/`](slides/) | Исходники слайдов в HTML (1280 × 720 px) + `global.css` — дизайн-система |
| [`images/`](images/) | Локальные изображения, используемые слайдами (фото докладчика, графики, иллюстрации) |
| [`design/slides_brief.json`](design/slides_brief.json) | Структурированный манифест контента (33 содержательных слайда + правила оформления) |
| [`exported/`](exported/) | Готовые финальные артефакты — PPTX и PDF |

## Финальные артефакты

- [`exported/MoscowTechWeek2026_ClickHouse_Vector.pptx`](exported/MoscowTechWeek2026_ClickHouse_Vector.pptx) — 51 слайд, 40 МБ
- [`exported/MoscowTechWeek2026_ClickHouse_Vector.pdf`](exported/MoscowTechWeek2026_ClickHouse_Vector.pdf) — 51 страница, 15.4 МБ

PDF собран через Playwright (PNG-рендер 2560 × 1440 → `pdf-lib`), поэтому шрифты, QR-коды и иконки сохраняются как растр и выглядят идентично HTML-превью.

## Структура доклада (33 содержательных слайда → 51 с подслайдами)

1. **Титул** и **Обо мне**
2. **О чем поговорим** — 5 блоков
3. **Исходные данные на момент трансформации (2024)** — масштаб, команда, объём
4. **Боль — Elastic пухнет, retention падает**
5. **Переход на Vector + ClickHouse**
6. **Архитектура сбора логов** — Vector → Kafka → ClickHouse
7. **CASE 1 — Проблема / Решение**
8. **CASE 2 — Что может произойти? / Подсказка от `lsof` / Диагноз / Решение / Результат**
9. **CASE 3 — Зачем гибкий TTL / Что было / SQL TTL на строке / Грабли и фикс / Как TTL попадает в ClickHouse**
10. **CASE 4 — Пятничный panic / Что внутри? / Лаг Kafka / Странный лог / Император Тиберий / Найдена причина / Хотфикс**
11. **Ускорение Time-to-Market для наблюдаемости**
12. **AI-Ready Observability / ClickStack MCP**
13. **Что мы выстрадали и внедрили** — итоги и 3 принципа
14. **Эффекты от внедрения Vector + ClickHouse**
15. **Заберите наши наработки** — QR на [`vseinstrumentiru/unified-log-pipeline`](https://github.com/vseinstrumentiru/unified-log-pipeline)
16. **Время услышать ответы на ваши вопросы**

Подслайды (18 шт.) реализуют прогрессивное раскрытие через `visibility:hidden` — при пошаговом показе контент «появляется» на тех же координатах, не ломая layout.

## Дизайн-система

- **Стиль:** Corporate Tech — Sky Blue + Mint (REV 7)
- **Палитра:** основной `#42A5F5` (→ текст `#1565C0`), акцент `#4DB6AC` (→ текст `#00796B`)
- **Шрифты:** Montserrat 900 (заголовки), Inter (body ≥ 21 px), PT Serif italic (субтитры), JetBrains Mono (код ≥ 18 px)
- **Контраст:** WCAG AA ≥ 4.5:1 для всего текста
- **Layout:** шапка слайда сверху на всю ширину — accent-bar (вертикальная 6–8 px) + EN-subtitle (PT Serif italic) + RU-title (Montserrat 900). `.page-badge` в правом верхнем углу.
- **Без брендинга Vi.Tech.** Тема «не доверяй ИИ» убрана. Слова «онбординг» и «Active-Active» запрещены (последнее заменено на «3 ЦОД»).

Полные правила и по-слайдовое описание — в [`docs/SLIDES.md`](docs/SLIDES.md).

## Лицензия

Контент доклада — © Дмитрий Синявский, 2026. Код и конфиги из open-source пайплайна — см. [`vseinstrumentiru/unified-log-pipeline`](https://github.com/vseinstrumentiru/unified-log-pipeline).
