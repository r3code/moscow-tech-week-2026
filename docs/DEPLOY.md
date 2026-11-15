# Деплой и публикация

Презентация собирается и публикуется автоматически на GitHub Pages при пуше
в `main`. Экспорт в PDF/PPTX — вручную через GitHub Actions.

## GitHub Pages

**URL:** https://r3code.github.io/moscow-tech-week-2026/

Pages настроены на **Source: GitHub Actions** (Settings → Pages → Source).
Деплой выполняется workflow `deploy.yml` при каждом пуше в `main/master`,
затрагивающем `deck/**`.

### Что делает deploy.yml

1. Checkout кода
2. `npm ci` — установка зависимостей
3. `npm run lint` — проверка инвариантов (до sed-инъекции версии)
4. `sed -i "s/__VERSION__/YYYYMMDD rev. <sha>/g"` — подстановка версии в плейсхолдер
5. `slidev build --base /moscow-tech-week-2026/` — сборка SPA в `deck/dist/`
6. `cp dist/index.html dist/404.html` — SPA-fallback для прямых ссылок
7. `node scripts/inject-cache-bust.mjs` — inline-скрипт для auto-reload при 404 ассетов
8. `actions/upload-pages-artifact` + `actions/deploy-pages` — публикация

Время деплоя: ~2 минуты от push до живого URL.

## Экспорт PDF и PPTX

Запускается вручную через GitHub Actions UI:

1. Откройте [Actions](https://github.com/r3code/moscow-tech-week-2026/actions)
2. Выберите workflow:
   - **Export PDF** — PDF с `--with-clicks` (57 страниц, текст selectable)
   - **Export PPTX (images)** — PNG per click → `python-pptx` собирает `.pptx`
3. Нажмите **Run workflow** (или пушьте тег `v*` для автозапуска)
4. Скачайте артефакт со страницы запуска (retention: PDF/PPTX — 30 дней, PNG — 14 дней)

### Альтернативно: локальный экспорт

```bash
cd deck
npx playwright install chromium   # первый раз
npm run export:pdf                 # dist/mtw2026.pdf
npm run export:pptx                # dist/mtw2026.pptx
```

## Кеширование и cache bust

GitHub Pages отдаёт HTML и JS-ассеты с заголовком `Cache-Control: max-age=600`
(10 минут). После нового деплоя старые JS-бандлы (с старым hash в имени файла)
удаляются — у юзера с кешированным HTML может быть белый экран до 10 минут.

**Решение:** inline-скрипт в `<head>` index.html ловит `error` на `<script>`-
загрузке и автоматически перезагружает страницу с `?v=<timestamp>` (cache-bust).
Скрипт всегда в кешированном HTML, срабатывает только при 404.

```js
// injetced by scripts/inject-cache-bust.mjs
window.addEventListener('error', function(e) {
  if (e.target && e.target.tagName === 'SCRIPT' && e.target.src.includes('/assets/')) {
    if (!location.search.includes('v=')) location.search = '?v=' + Date.now();
  }
}, true);
```

Если белый экран всё же виден — **Ctrl+Shift+R** (hard refresh).

## Версионирование

Формат: `YYYYMMDD rev. <short-sha>` (например, `20261115 rev. 05f5263`).

Плейсхолдер `__VERSION__` в `deck/pages/01-cover.md` заменяется sed-инъекцией
на этапе CI (см. `deploy.yml`, шаг `Generate version string`). Локально в
source-файле остаётся плейсхолдер — это нормально, lint проверяет его наличие.

## Настройка Pages (один раз)

1. Repo → Settings → Pages
2. Source: **GitHub Actions**
3. Больше ничего не настраивать — workflow сам загружает артефакт

Если Pages не настроены, первый деплой упадёт на шаге `deploy-pages`.
