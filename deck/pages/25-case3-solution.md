---
layout: case
caseNum: 3
canvasWidth: 1280
aspectRatio: 16/9
transition: none
drawings: false
lineNumbers: false
---

<div class="mtw-slide"><div class="grid-pattern" aria-hidden="true"></div><div class="decorative-circle" style="width:380px;height:380px;background:radial-gradient(circle,rgba(77,182,172,0.12) 0%,transparent 70%);top:-130px;left:-110px;"></div><div class="decorative-circle" style="width:260px;height:260px;background:radial-gradient(circle,rgba(77,182,172,0.10) 0%,transparent 70%);bottom:-90px;right:-60px;"></div><PageBadge num="25" /><CaseNumber num="3" /><header style="position:relative;z-index:10;padding:40px 70px 16px 70px;display:flex;align-items:center;justify-content:space-between;"><div style="display:flex;align-items:center;gap:22px;"><div style="width:6px;height:70px;background:#4DB6AC;border-radius:3px;"></div><div><div style="font-family:'PT Serif',serif;font-style:italic;font-weight:700;font-size:20px;color:#00796B;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;line-height:1;">CASE 3 · РЕШЕНИЕ</div><h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">TTL на уровне строки</h1></div></div></header><main style="flex:1;padding:20px 70px 40px 70px;position:relative;z-index:10;display:flex;flex-direction:column;justify-content:center;"><div style="max-width:900px;margin:0 auto;width:100%;"><div class="s25-codetitle" style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;color:#00796B;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px;">SQL-схема ClickHouse</div></div></main></div>

```sql
CREATE TABLE logs.otel_logs (
  ObservedTimestamp DateTime64(3),
  LogTTL UInt8,
  Body String,
  Attributes Map(String, String)
) ENGINE = MergeTree
  ORDER BY (ObservedTimestamp)
  TTL toDateTime(ObservedTimestamp)
    + toIntervalDay(LogTTL)
  SETTINGS ttl_only_drop_parts = 0
```

<!-- notes: Решение — встроить TTL прямо в SQL-схему на уровне строки. ClickHouse сам удаляет старые записи через TTL-выражение toDateTime(ObservedTimestamp) + toIntervalDay(LogTTL). Но есть грабли — на следующем слайде. -->
