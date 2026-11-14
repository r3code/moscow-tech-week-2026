---
layout: content
canvasWidth: 1280
aspectRatio: 16/9
transition: none
drawings: false
lineNumbers: false
---

<div class="mtw-slide" style="background:#F8F9FA;">
  <div class="s34-grid-pattern"></div>
  <div class="s34-deco-circle" style="width:280px;height:280px;background:rgba(239,83,80,0.05);top:-90px;right:-90px;"></div>
  <div class="s34-deco-circle" style="width:180px;height:180px;background:rgba(255,167,38,0.06);bottom:-60px;left:-50px;"></div>
  <PageBadge base="34" />
  <header style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
    <div style="width:6px;height:70px;background:#EF5350;border-radius:3px;flex-shrink:0;"></div>
    <div>
      <div style="font-family:'PT Serif',serif;font-style:italic;font-weight:700;font-size:20px;color:#C62828;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;line-height:1;">CASE 4 · ПАНИКА</div>
      <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">Что внутри нас?</h1>
    </div>
  </header>
  <main style="flex:1;padding:20px 70px 30px 70px;display:flex;gap:30px;align-items:center;position:relative;z-index:10;">
    <div class="s34-left-pane">
      <img src="/images/panica.png" alt="Паника">
    </div>
    <div style="flex:1;display:flex;flex-direction:column;gap:18px;">
      <div class="s34-lag-card">
        <div class="s34-lag-head">
          <FAIcon name="exclamation-triangle" :size="28" color="#C62828" />
          <div v-click="1" class="s34-lag-head-title">Лаг Kafka растёт</div>
        </div>
        <div class="s34-lag-big">1/2 млрд записей</div>
        <div class="s34-lag-sub">ещё столько — и место кончится</div>
      </div>
      <div class="s34-emotional">Логи пропадают везде на проде в пятницу вечером — SRE на телефоне, дежурный в панике.</div>
    </div>
  </main>
</div>

<!-- notes: Что внутри нас в этот момент? Паника. Лог-файлы пропадают везде на проде в пятницу вечером. Параллельно — лаг Kafka растёт: уже полмиллиарда записей в буфере, и ещё столько же — место на диске кончится. SRE на телефоне, дежурный в панике. На следующем слайде — что мы нашли. -->
