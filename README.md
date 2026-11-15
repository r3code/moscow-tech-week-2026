# Как мы сократили стоимость хранения логов в 3 раза с ClickHouse и Vector

Доклад на Moscow Tech Week 2026.

**Дмитрий Синявский** · Независимый эксперт · [@r3code](https://github.com/r3code) · TG: [@letitkit](https://t.me/letitkit)

---

## Аннотация

Из финансовой ловушки — к управляемой наблюдаемости. Как переход с Elastic-стека
на связку ClickHouse и Vector сократил TCO на 78% и поднял retention с 5 часов
до 30 дней. Архитектура сбора логов на 800+ нодах и 200+ сервисах, четыре
технических кейса из продакшена (K8s labels, ротация логов, построчный TTL,
пятничный panic от одного кривого timestamp) и ClickStack MCP для AI-поиска
по структурированным логам.

**TCO −78% · Retention 5ч → 30д · 1 SRE без DevOps · Подключение сервиса 10 мин.**

---

## Презентация

**Live:** https://r3code.github.io/moscow-tech-week-2026/

---

## Документация

| Раздел | Для кого | Файл |
| --- | --- | --- |
| Деплой и публикация | Докладчик, организатор | [`docs/DEPLOY.md`](./docs/DEPLOY.md) |
| Разработка и редактирование слайдов | Разработчик, контрибьютор | [`docs/DEVELOPMENT.md`](./docs/DEVELOPMENT.md) |
| Контекст для AI-агентов | Cursor / Claude / Copilot | [`AGENTS.md`](./AGENTS.md) |

---

## Контакты

- **Дмитрий Синявский** — [@r3code](https://github.com/r3code) · TG: [@letitkit](https://t.me/letitkit)
- **Сообщество Vector** — [@vectordev_ru](https://t.me/vectordev_ru)
- **Презентация** — [clck.ru/3X2fC4](https://clck.ru/3X2fC4)
