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
  <PageBadge base="32" />
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
  <main style="flex:1;padding:20px 70px 40px 70px;position:relative;z-index:10;display:flex;gap:24px;align-items:stretch;">
    <div style="flex:1.3;display:flex;flex-direction:column;">
      <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:16px;color:#00796B;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:10px;">SQL-схема ClickHouse</div>
      <pre style="flex:1;background:#F5F7FA;color:#1A2A3A;border-radius:14px;padding:22px 26px;border-left:5px solid #4DB6AC;font-family:'JetBrains Mono',monospace;font-size:18px;line-height:1.6;box-shadow:0 4px 14px rgba(15,41,66,0.08);margin:0;white-space:pre;overflow:hidden;"><span style="color:#1565C0;font-weight:600">CREATE TABLE</span> logs.otel_logs (
  ObservedTimestamp <span style="color:#1565C0;font-weight:600">DateTime64</span>(3),
  LogTTL <span style="color:#1565C0;font-weight:600">UInt8</span>,
  Body <span style="color:#1565C0;font-weight:600">String</span>,
  Attributes <span style="color:#1565C0;font-weight:600">Map</span>(String, String)
) <span style="color:#1565C0;font-weight:600">ENGINE</span> = MergeTree
  <span style="color:#1565C0;font-weight:600">ORDER BY</span> (ObservedTimestamp)
  <span style="background:rgba(255,167,38,0.18);padding:1px 4px;border-radius:3px;color:#BF360C"><span style="color:#1565C0;font-weight:600">TTL</span> <span style="color:#00796B">toDateTime</span>(ObservedTimestamp)
    + <span style="color:#00796B">toIntervalDay</span>(LogTTL)</span>
  <span style="color:#1565C0;font-weight:600">SETTINGS</span> ttl_only_drop_parts = 0</pre>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;">
      <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:16px;color:#5C6BC0;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:10px;">Поле в логе приложения (JSON)</div>
      <pre style="flex:1;background:#F5F7FA;color:#1A2A3A;border-radius:14px;padding:22px 26px;border-left:5px solid #5C6BC0;font-family:'JetBrains Mono',monospace;font-size:18px;line-height:1.6;box-shadow:0 4px 14px rgba(15,41,66,0.08);margin:0;white-space:pre;overflow:hidden;"><span style="color:#1565C0;font-weight:600">{</span>
  <span style="color:#558B2F">"msg"</span>: <span style="color:#558B2F">"Store me for 14 days!"</span>,
  <span style="background:rgba(255,167,38,0.18);padding:1px 4px;border-radius:3px;color:#BF360C">"logging.vitech.team/ttl"</span>: <span style="color:#558B2F">"14d"</span>
<span style="color:#1565C0;font-weight:600">}</span>
<span style="color:#6B7B8D;font-style:italic"># 2d · 4d · 7d · 14d · 30d · 180d</span></pre>
    </div>
  </main>
</div>

<!-- notes: Решение — встроить TTL прямо в SQL-схему на уровне строки. ClickHouse сам удаляет старые записи через TTL-выражение toDateTime(ObservedTimestamp) + toIntervalDay(LogTTL). Но есть грабли — на следующем слайде. -->
