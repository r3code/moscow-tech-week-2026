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
  <PageBadge base="35" />
  <header style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
    <div style="width:6px;height:70px;background:#5C6BC0;border-radius:3px;flex-shrink:0;"></div>
    <div>
      <div style="font-family:'PT Serif',serif;font-style:italic;font-weight:700;font-size:20px;color:#5C6BC0;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;line-height:1;">CASE 3 · КОНТРОЛЬ</div>
      <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">Как контролировать TTL теперь</h1>
    </div>
  </header>
  <main style="flex:1;padding:30px 70px 50px 70px;display:flex;flex-direction:column;justify-content:center;position:relative;z-index:10;">
    <div class="s28-info-row">
      <div v-click="1" class="s28-info-card c1">
        <FAIcon name="user-cog" :size="24" color="#1565C0" />
        <div class="s28-info-title">Ответственность</div>
        <div class="s28-info-text">на разработчиках сервиса</div>
      </div>
      <div v-click="2" class="s28-info-card c2">
        <FAIcon name="check-circle" :size="24" color="#BF360C" />
        <div class="s28-info-title">Валидация</div>
        <div class="s28-info-text">Vector агрегатор проверяет значения</div>
      </div>
      <div v-click="3" class="s28-info-card c3">
        <FAIcon name="chart-line" :size="24" color="#00796B" />
        <div class="s28-info-title">Мониторинг</div>
        <div class="s28-info-text">контролируем отклонения</div>
      </div>
    </div>
  </main>
</div>

<!-- notes: Как контролировать TTL. Три механизма: ответственность на разработчиках (они знают свой сервис), валидация при приёме логов (Vector отбрасывает недопустимые значения), мониторинг отклонений. -->
