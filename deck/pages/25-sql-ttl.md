---
layout: mtw
titleEn: 'CASE 3 · РЕШЕНИЕ'
titleRu: 'TTL на уровне строки'
badgePage: 25
case: '3'
---
<div style="max-width:900px;margin:0 auto;width:100%;">
<div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;color:#00796B;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px;">SQL-схема ClickHouse</div>
<pre style="background:#0F2942;color:#E3F2FD;border-radius:14px;padding:28px 32px;border-left:5px solid #4DB6AC;font-family:'JetBrains Mono',monospace;font-size:18px;line-height:1.7;box-shadow:0 10px 30px rgba(15,41,66,0.30);margin:0;white-space:pre;overflow:hidden;"><span style="color:#82B1FF;font-weight:600">CREATE TABLE</span> logs.otel_logs (
  ObservedTimestamp <span style="color:#82B1FF;font-weight:600">DateTime64</span>(3),
  LogTTL <span style="color:#82B1FF;font-weight:600">UInt8</span>,
  Body <span style="color:#82B1FF;font-weight:600">String</span>,
  Attributes <span style="color:#82B1FF;font-weight:600">Map</span>(String, String)
) <span style="color:#82B1FF;font-weight:600">ENGINE</span> = MergeTree
  <span style="color:#82B1FF;font-weight:600">ORDER BY</span> (ObservedTimestamp)
  <span style="color:#82B1FF;font-weight:600">TTL</span> <span style="color:#80DEEA">toDateTime</span>(ObservedTimestamp)
    + <span style="color:#80DEEA">toIntervalDay</span>(LogTTL)
  <span style="color:#82B1FF;font-weight:600">SETTINGS</span> <span style="background:rgba(255,167,38,0.18);padding:1px 4px;border-radius:3px;color:#BF360C">ttl_only_drop_parts = 0</span></pre>
</div>

<!--
Решение — встроить TTL прямо в SQL-схему на уровне строки. ClickHouse сам удаляет старые записи через TTL-выражение toDateTime(ObservedTimestamp) + toIntervalDay(LogTTL). Но есть грабли — на следующем слайде.
-->
