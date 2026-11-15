# Как мы сократили стоимость хранения логов в 3 раза с ClickHouse и Vector

Доклад на Moscow Tech Week 2026.

**Дмитрий Синявский** · Независимый эксперт · [@r3code](https://github.com/r3code) · TG: [@letitkit](https://t.me/letitkit)

---

## Аннотация

Из финансовой ловушки — к управляемой наблюдаемости. История перехода с EFK
на связку ClickHouse и Vector: от боли с растущей стоимостью хранения и
падающим retention до архитектуры, которая выдерживает 800+ нод и 200+
сервисов. Четыре технических кейса из продакшена — от гибкого TTL на уровне
строки до пятничного panic, вызванного одним кривым timestamp. В завершение —
ClickStack MCP и AI-Ready Observability.

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
