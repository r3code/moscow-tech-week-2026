---
layout: case
caseNum: 3
canvasWidth: 1280
aspectRatio: 16/9
transition: none
drawings: false
lineNumbers: false
---

<div class="mtw-slide">
  <div class="grid-pattern" aria-hidden="true"></div>
  <div class="decorative-circle" style="width:380px;height:380px;background:radial-gradient(circle,rgba(77,182,172,0.12) 0%,transparent 70%);top:-130px;left:-110px;"></div>
  <div class="decorative-circle" style="width:260px;height:260px;background:radial-gradient(circle,rgba(77,182,172,0.10) 0%,transparent 70%);bottom:-90px;right:-60px;"></div>
  <PageBadge num="30" />
  <CaseNumber num="3" />
  <header style="position:relative;z-index:10;padding:40px 70px 16px 70px;display:flex;align-items:center;justify-content:space-between;">
    <div style="display:flex;align-items:center;gap:22px;">
      <div style="width:6px;height:70px;background:#4DB6AC;border-radius:3px;"></div>
      <div>
        <div style="font-family:'PT Serif',serif;font-style:italic;font-weight:700;font-size:20px;color:#00796B;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;line-height:1;">CASE 3 · РЕШЕНИЕ</div>
        <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">TTL на уровне строки</h1>
      </div>
    </div>
  </header>
  <main style="flex:1;padding:20px 70px 40px 70px;position:relative;z-index:10;display:flex;flex-direction:column;justify-content:center;">
    <div style="max-width:900px;margin:0 auto;width:100%;">
      <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;color:#00796B;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px;">SQL-схема ClickHouse</div>
      <pre style="background:#F5F7FA;color:#1A2A3A;border-radius:14px;padding:28px 32px;border-left:5px solid #4DB6AC;font-family:'JetBrains Mono',monospace;font-size:18px;line-height:1.7;box-shadow:0 10px 30px rgba(15,41,66,0.10);margin:0;white-space:pre;overflow:hidden;"><span style="color:#1565C0;font-weight:600">CREATE TABLE</span> logs.otel_logs (
  ObservedTimestamp <span style="color:#1565C0;font-weight:600">DateTime64</span>(3),
  LogTTL <span style="color:#1565C0;font-weight:600">UInt8</span>,
  Body <span style="color:#1565C0;font-weight:600">String</span>,
  Attributes <span style="color:#1565C0;font-weight:600">Map</span>(String, String)
) <span style="color:#1565C0;font-weight:600">ENGINE</span> = MergeTree
  <span style="color:#1565C0;font-weight:600">ORDER BY</span> (ObservedTimestamp)
  <span style="color:#1565C0;font-weight:600">TTL</span> <span style="color:#00796B">toDateTime</span>(ObservedTimestamp)
    + <span style="color:#00796B">toIntervalDay</span>(LogTTL)
  <span style="color:#1565C0;font-weight:600">SETTINGS</span> <span style="background:rgba(255,167,38,0.18);padding:1px 4px;border-radius:3px;color:#BF360C">ttl_only_drop_parts = 0</span></pre>
    </div>
  </main>
</div>

<!-- notes: Решение — встроить TTL прямо в SQL-схему на уровне строки. ClickHouse сам удаляет старые записи через TTL-выражение toDateTime(ObservedTimestamp) + toIntervalDay(LogTTL). Но есть грабли — на следующем слайде. -->
