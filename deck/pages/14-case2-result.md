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
  <div class="decorative-circle" style="width:260px;height:260px;background:radial-gradient(circle,rgba(255,167,38,0.10) 0%,transparent 70%);bottom:-90px;right:-60px;"></div>
  <PageBadge base="22" />
  <div aria-hidden="true" style="position:absolute;top:30px;right:230px;z-index:1;opacity:0.6;font-family:'Montserrat',sans-serif;font-weight:900;font-size:80px;color:#E0F2F1;letter-spacing:4px;line-height:1;">CASE 2</div>
  <header style="position:relative;z-index:10;padding:40px 70px 16px 70px;display:flex;align-items:center;justify-content:space-between;">
    <div style="display:flex;align-items:center;gap:22px;">
      <div style="width:6px;height:70px;background:#4DB6AC;border-radius:3px;"></div>
      <div>
        <div style="font-family:'PT Serif',serif;font-style:italic;font-size:20px;color:#00796B;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700;line-height:1;">CASE 2 · РЕШЕНИЕ</div>
        <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">Результат</h1>
      </div>
    </div>
  </header>
  <main style="flex:1;padding:20px 70px 40px 70px;position:relative;z-index:10;display:flex;flex-direction:column;gap:20px;">
    <div>
      <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:16px;color:#00796B;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Vector config</div>
      <pre style="background:#F5F7FA;color:#1A2A3A;border-radius:10px;padding:18px 22px;border-left:4px solid #4DB6AC;font-family:'JetBrains Mono',monospace;font-size:18px;line-height:1.6;max-height:200px;overflow:hidden;margin:0;white-space:pre;"><span style="color:#6B7B8D;font-style:italic"># Читать свежие логи блоками по 16 КБ</span>
<span style="background:rgba(255,167,38,0.18);padding:1px 4px;border-radius:3px;color:#BF360C">oldest_first = false</span>
<span style="background:rgba(255,167,38,0.18);padding:1px 4px;border-radius:3px;color:#BF360C">max_read_bytes = 16384</span></pre>
    </div>
    <div style="display:flex;gap:20px;">
      <div style="flex:1;background:#E0F2F1;border-radius:14px;padding:22px 26px;border-left:6px solid #4DB6AC;">
        <div style="display:flex;align-items:center;gap:12px;">
          <FAIcon name="check-circle" :size="28" color="#00796B" />
          <h3 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:24px;color:#424242;margin:0;">Результат</h3>
        </div>
        <ul style="font-family:'Inter',sans-serif;font-size:21px;color:#424242;line-height:1.5;margin:14px 0 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:12px;">
          <li style="display:flex;align-items:flex-start;gap:10px;">
            <FAIcon name="check" :size="21" color="#00796B" />
            <span>Диск Dev не переполняется</span>
          </li>
          <li style="display:flex;align-items:flex-start;gap:10px;">
            <FAIcon name="check" :size="21" color="#00796B" />
            <span>Ротация работает корректно</span>
          </li>
          <li style="display:flex;align-items:flex-start;gap:10px;">
            <FAIcon name="check" :size="21" color="#00796B" />
            <span>Паттерн в prod-конфиге</span>
          </li>
        </ul>
      </div>
      <div v-click="1" style="flex:1;background:#FFF8E1;border-radius:14px;padding:22px 26px;border-left:6px solid #FFA726;">
        <div style="display:flex;align-items:center;gap:12px;">
          <FAIcon name="lightbulb" :size="28" color="#BF360C" />
          <h3 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:24px;color:#424242;margin:0;">Урок</h3>
        </div>
        <p style="font-family:'Inter',sans-serif;font-size:21px;color:#424242;line-height:1.5;margin:14px 0 0 0;">Защищайте инфраструктуру от самих логов, не только от приложений.</p>
      </div>
    </div>
  </main>
</div>

<!-- notes: После фикса Dev-контур стабилен, и мы перенесли паттерн в продакшен-конфиг. Урок: всегда защищайте инфраструктуру от самих логов. -->
