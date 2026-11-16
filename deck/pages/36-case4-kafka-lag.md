---
layout: content
canvasWidth: 1280
aspectRatio: 16/9
transition: none
drawings: false
lineNumbers: false
---

<div class="mtw-slide" style="background:#F8F9FA;">
  <div class="s36-grid-pattern"></div>
  <div class="s36-deco-circle" style="width:280px;height:280px;background:rgba(239,83,80,0.05);top:-90px;left:-90px;"></div>
  <div class="s36-deco-circle" style="width:200px;height:200px;background:rgba(255,167,38,0.05);bottom:-60px;right:-60px;"></div>
  <div aria-hidden="true" style="position:absolute;top:30px;right:70px;font-family:'Montserrat',sans-serif;font-weight:900;font-size:80px;color:#FFEBEE;opacity:0.6;z-index:1;line-height:1;pointer-events:none;">CASE 4</div>
  <PageBadge base="48" />
  <header style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
    <div style="width:6px;height:70px;background:#EF5350;border-radius:3px;flex-shrink:0;"></div>
    <div>
      <div style="font-family:'PT Serif',serif;font-style:italic;font-weight:700;font-size:20px;color:#C62828;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;line-height:1;">CASE 4 · ЛАГ KAFKA</div>
      <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">Лаг Kafka растёт</h1>
    </div>
  </header>
  <main style="flex:1;padding:30px 70px 50px 70px;display:flex;flex-direction:column;justify-content:center;gap:28px;position:relative;z-index:10;">
    <div class="s36-row">
      <div class="s36-stat-card left">
        <div class="s36-stat-head">
          <FAIcon name="database" :size="32" color="#C62828" />
          <div class="s36-stat-head-title">Буфер Kafka</div>
        </div>
        <div class="s36-stat-big red">500M+</div>
        <div class="s36-stat-sub">записей логов в лаге</div>
      </div>
      <div class="s36-stat-card right">
        <div class="s36-stat-head">
          <FAIcon name="hdd" :size="32" color="#BF360C" />
          <div class="s36-stat-head-title">Диск</div>
        </div>
        <div class="s36-stat-big amber">~500M</div>
        <div class="s36-stat-sub">ещё столько — и место кончится</div>
      </div>
    </div>
    <div class="s36-banner">
      <FAIcon name="clock" :size="26" color="#C62828" />
      <div class="s36-banner-text">Время до переполнения диска — полчаса</div>
    </div>
  </main>
</div>

<!-- notes: Лаг Kafka растёт. Уже больше полмиллиарда записей в буфере. Диск заполнен наполовину — ещё столько же записей, и место кончится. Время до переполнения — полчаса. Нужно срочно найти причину, иначе потеряем весь конвейер логов. -->
