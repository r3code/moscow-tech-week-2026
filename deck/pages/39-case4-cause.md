---
layout: content
canvasWidth: 1280
aspectRatio: 16/9
transition: none
drawings: false
lineNumbers: false
---

<div class="mtw-slide" style="background:#F8F9FA;">
  <div class="s37-grid-pattern"></div>
  <div class="s37-deco-circle" style="width:260px;height:260px;background:rgba(255,167,38,0.05);top:-80px;right:-80px;"></div>
  <div class="s37-deco-circle" style="width:180px;height:180px;background:rgba(239,83,80,0.05);bottom:-50px;left:-50px;"></div>
  <div aria-hidden="true" style="position:absolute;top:30px;right:70px;font-family:'Montserrat',sans-serif;font-weight:900;font-size:80px;color:#FFF8E1;opacity:0.6;z-index:1;line-height:1;pointer-events:none;">CASE 4</div>
  <PageBadge base="41" />
  <header style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
    <div style="width:6px;height:70px;background:#FFA726;border-radius:3px;flex-shrink:0;"></div>
    <div>
      <div style="font-family:'PT Serif',serif;font-style:italic;font-weight:700;font-size:20px;color:#BF360C;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;line-height:1;">CASE 4 · ПРИЧИНА</div>
      <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">Найдена причина</h1>
    </div>
  </header>
  <main style="flex:1;padding:20px 70px 40px 70px;display:flex;flex-direction:column;justify-content:center;gap:20px;position:relative;z-index:10;">
    <div>
      <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;color:#BF360C;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:10px;">00:24 — Найдена причина</div>
      <div class="s37-code-block"><span class="com"># timestamp в логе:</span>
<span class="str">"2024-08-02T00:00:00Z"</span>
&nbsp;
<span class="com"># VRL парсил как:</span>
<span class="hl">"24-08-02" → 24 год н. э.</span>
&nbsp;
<span class="com"># правление императора Тиберия</span>
&nbsp;
<span class="fn">to_unix_timestamp()</span> → <span class="kw">panic</span></div>
    </div>
    <div class="s39-banner">
      <FAIcon name="exclamation-triangle" :size="28" color="#BF360C" />
      <div class="s39-banner-text">24 год н.э. вызвал переполнение int64 из-за наносекундной точности</div>
    </div>
  </main>
</div>

<!-- notes: За 30 минут нашли причину. В логе был timestamp вида 24-08-02. VRL-функция to_unix_timestamp интерпретировала это как 24 год нашей эры. Дата хранится с точностью до наносекунд — при преобразовании в int64 произошло переполнение, и функция упала в panic. Один кривой timestamp — и весь конвейер логов останавливается. -->
