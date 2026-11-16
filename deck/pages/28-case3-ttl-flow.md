---
layout: content
canvasWidth: 1280
aspectRatio: 16/9
transition: none
drawings: false
lineNumbers: false
---

<div class="mtw-slide" style="background:#F8F9FA;">
  <div class="s28-grid-pattern"></div>
  <div class="s28-deco-circle" style="width:280px;height:280px;background:rgba(92,107,192,0.06);top:-100px;right:-80px;"></div>
  <div class="s28-deco-circle" style="width:160px;height:160px;background:rgba(77,182,172,0.06);bottom:-50px;left:-40px;"></div>
  <div class="s28-case-decor" aria-hidden="true">CASE 3</div>
  <PageBadge base="31" />
  <header style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
    <div style="width:6px;height:70px;background:#5C6BC0;border-radius:3px;flex-shrink:0;"></div>
    <div>
      <div style="font-family:'PT Serif',serif;font-style:italic;font-weight:700;font-size:20px;color:#5C6BC0;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;line-height:1;">CASE 3 · ПОТОК</div>
      <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">Как TTL попадает в ClickHouse</h1>
    </div>
  </header>
  <main style="flex:1;padding:30px 70px 50px 70px;display:flex;flex-direction:column;justify-content:center;position:relative;z-index:10;">
    <div class="s28-flow-row">
      <div class="s28-stage-card s1">
        <FAIcon name="user" :size="28" color="#1565C0" />
        <div class="s28-stage-title">Разработчик</div>
        <div class="s28-stage-sub">пишет TTL в лог</div>
      </div>
      <FAIcon name="chevron-right" :size="24" color="#BDBDBD" />
      <div class="s28-stage-card s2">
        <FAIcon name="cogs" :size="28" color="#BF360C" />
        <div class="s28-stage-title">Vector Aggregator</div>
        <div class="s28-stage-sub">достаёт TTL из лога, валидация</div>
      </div>
      <FAIcon name="chevron-right" :size="24" color="#BDBDBD" />
      <div class="s28-stage-card s3">
        <FAIcon name="database" :size="28" color="#00796B" />
        <div class="s28-stage-title">ClickHouse</div>
        <div class="s28-stage-sub">пишет в поле LogTTL</div>
      </div>
    </div>
  </main>
</div>

<!-- notes: Как TTL попадает в ClickHouse. Разработчик пишет TTL прямо в лог. Vector Aggregator достаёт TTL из лога и валидирует. ClickHouse пишет в поле LogTTL. -->
