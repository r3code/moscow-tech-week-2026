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
  <div class="s37-deco-circle" style="width:260px;height:260px;background:rgba(255,167,38,0.05);top:-80px;left:-80px;"></div>
  <div class="s37-deco-circle" style="width:200px;height:200px;background:rgba(239,83,80,0.05);bottom:-60px;right:-60px;"></div>
  <div aria-hidden="true" style="position:absolute;top:30px;right:70px;font-family:'Montserrat',sans-serif;font-weight:900;font-size:80px;color:#FFF8E1;opacity:0.6;z-index:1;line-height:1;pointer-events:none;">CASE 4</div>
  <PageBadge base="46" />
  <header style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
    <div style="width:6px;height:70px;background:#FFA726;border-radius:3px;flex-shrink:0;"></div>
    <div>
      <div style="font-family:'PT Serif',serif;font-style:italic;font-weight:700;font-size:20px;color:#BF360C;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;line-height:1;">CASE 4 · РАССЛЕДОВАНИЕ</div>
      <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">Странный лог в потоке</h1>
    </div>
  </header>
  <main style="flex:1;padding:20px 70px 40px 70px;display:flex;flex-direction:column;justify-content:center;gap:20px;position:relative;z-index:10;">
    <div>
      <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;color:#BF360C;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:10px;">Лог с валидным JSON и датой</div>
      <pre class="s37-code-block"><span class="kw">{</span>
  <span class="str">"timestamp"</span>: <span class="hl">"24-08-02 23:59:43.145224192Z"</span>,
  <span class="str">"level"</span>: <span class="str">"INFO"</span>,
  <span class="str">"msg"</span>: <span class="str">"request completed"</span>
<span class="kw">}</span></pre>
    </div>
  </main>
</div>

<!-- notes: Нашли лог с валидным JSON и датой: 24-08-02 23:59:43.145224192Z. Проверили — при интерпретации как 24 год нашей эры, время правления императора Тиберия, функция to_unix_timestamp в коде VRL падает в panic. Дата хранится с точностью до наносекунд — при преобразовании в int64 произошло переполнение. Один кривой timestamp — и весь конвейер логов останавливается. На следующем слайде — кто этот император. -->
