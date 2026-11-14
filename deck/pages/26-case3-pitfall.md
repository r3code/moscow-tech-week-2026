---
layout: content
canvasWidth: 1280
aspectRatio: 16/9
transition: none
drawings: false
lineNumbers: false
---

<div class="mtw-slide" style="background:#FFFFFF;">
  <div class="grid-pattern" aria-hidden="true"></div>
  <div class="decorative-circle" style="width:380px;height:380px;background:radial-gradient(circle,rgba(77,182,172,0.12) 0%,transparent 70%);top:-130px;left:-110px;"></div>
  <div class="decorative-circle" style="width:260px;height:260px;background:radial-gradient(circle,rgba(239,83,80,0.08) 0%,transparent 70%);bottom:-90px;right:-60px;"></div>
  <PageBadge base="26" />
  <div aria-hidden="true" style="position:absolute;top:30px;right:230px;z-index:1;opacity:0.6;font-family:'Montserrat',sans-serif;font-weight:900;font-size:80px;color:#E0F2F1;letter-spacing:4px;line-height:1;">CASE 3</div>
  <header style="position:relative;z-index:10;padding:40px 70px 16px 70px;display:flex;align-items:center;justify-content:space-between;">
    <div style="display:flex;align-items:center;gap:22px;">
      <div style="width:6px;height:70px;background:#4DB6AC;border-radius:3px;"></div>
      <div>
        <div style="font-family:'PT Serif',serif;font-style:italic;font-size:20px;color:#00796B;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700;line-height:1;">CASE 3 · РЕШЕНИЕ</div>
        <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">Грабли и фикс</h1>
      </div>
    </div>
  </header>
  <main style="flex:1;padding:20px 70px 40px 70px;position:relative;z-index:10;display:flex;flex-direction:column;gap:18px;">
    <div>
      <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:16px;color:#00796B;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;">SQL</div>
      <pre style="background:#0F2942;color:#E3F2FD;border-radius:10px;padding:16px 20px;border-left:4px solid #4DB6AC;font-family:'JetBrains Mono',monospace;font-size:18px;line-height:1.6;max-height:180px;overflow:hidden;margin:0;white-space:pre;"><span style="color:#82B1FF;font-weight:600">TTL</span> <span style="color:#80DEEA">toDateTime</span>(ObservedTimestamp) + <span style="color:#80DEEA">toIntervalDay</span>(LogTTL)
<span style="color:#82B1FF;font-weight:600">SETTINGS</span> <span style="background:rgba(255,167,38,0.18);padding:1px 4px;border-radius:3px;color:#BF360C">ttl_only_drop_parts = 0</span></pre>
    </div>
    <div style="display:flex;gap:20px;">
      <div style="flex:1;background:#FFF5F5;border-radius:14px;padding:22px 26px;border-left:6px solid #EF5350;">
        <div style="display:flex;align-items:center;gap:12px;">
          <FAIcon name="exclamation-triangle" :size="26" color="#C62828" />
          <h3 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;color:#C62828;margin:0;">Грабли</h3>
        </div>
        <p style="font-family:'Inter',sans-serif;font-size:21px;color:#424242;line-height:1.5;margin:10px 0 0 0;">По умолчанию <span style="font-family:'JetBrains Mono',monospace;background:#F5F5F5;padding:2px 6px;border-radius:4px;font-size:18px;">ttl_only_drop_parts = 1</span> — партиция живёт по самому долгому TTL.</p>
        <p style="font-family:'Inter',sans-serif;font-size:18px;color:#616161;line-height:1.4;margin:8px 0 0 0;">Партиция с TTL=2 дня будет ждать 180 дней из-за одной записи рядом.</p>
      </div>
      <div style="flex:1;background:#E0F2F1;border-radius:14px;padding:22px 26px;border-left:6px solid #4DB6AC;">
        <div v-click="1" style="display:flex;align-items:center;gap:12px;">
          <FAIcon name="check" :size="26" color="#00796B" />
          <h3 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;color:#00796B;margin:0;">Решение</h3>
        </div>
        <p style="font-family:'Inter',sans-serif;font-size:21px;color:#424242;line-height:1.5;margin:10px 0 0 0;"><span style="font-family:'JetBrains Mono',monospace;background:#F5F5F5;padding:2px 6px;border-radius:4px;font-size:18px;">= 0</span> — не ожидать истечения всех TTL в партиции.</p>
        <p style="font-family:'Inter',sans-serif;font-size:18px;color:#616161;line-height:1.4;margin:8px 0 0 0;">TTL применяется построчно, корректное хранение.</p>
      </div>
    </div>
  </main>
</div>

<!-- notes: Грабли: по умолчанию ttl_only_drop_parts = 1 — партиция удаляется целиком только когда истёк TTL у всех записей. Для нашего сценария это критично: партиция с TTL=2 дня будет ждать 180 дней из-за одной записи с TTL=180 рядом. Решение — поставить ttl_only_drop_parts = 0: не ожидать истечения всех TTL в партиции, TTL применяется построчно. -->
