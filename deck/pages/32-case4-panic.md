---
layout: content
canvasWidth: 1280
aspectRatio: 16/9
transition: none
drawings: false
lineNumbers: false
---

<div class="mtw-slide" style="background:#F8F9FA;">
  <div class="s32-grid-pattern"></div>
  <div class="s32-deco-circle" style="width:300px;height:300px;background:rgba(77,182,172,0.05);top:-90px;left:-80px;"></div>
  <div class="s32-deco-circle" style="width:300px;height:300px;background:rgba(239,83,80,0.05);bottom:-100px;right:-90px;"></div>
  <div aria-hidden="true" style="position:absolute;top:30px;right:70px;font-family:'Montserrat',sans-serif;font-weight:900;font-size:80px;color:#FFEBEE;opacity:0.6;z-index:1;line-height:1;pointer-events:none;">CASE 4</div>
  <PageBadge base="40" />
  <header style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
    <div style="width:6px;height:70px;background:#EF5350;border-radius:3px;flex-shrink:0;"></div>
    <div>
      <div style="font-family:'PT Serif',serif;font-style:italic;font-weight:700;font-size:20px;color:#C62828;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;line-height:1;">ПРОБЛЕМА</div>
      <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">Пятничный сюрприз</h1>
    </div>
  </header>
  <main style="flex:1;padding:20px 70px 40px 70px;display:flex;gap:28px;position:relative;z-index:10;">
    <div class="s32-col">
      <div class="s32-case-card s32-card-ok">
        <div class="s32-card-head">
          <FAIcon name="check-circle" :size="28" color="#00796B" />
          <div class="s32-card-head-title">17:00 — Ретро</div>
        </div>
        <div class="s32-feature-list">
          <div class="s32-feature-item"><FAIcon name="handshake" :size="21" color="#00796B" /><span>Порадовались: неделя без инцидентов</span></div>
          <div class="s32-feature-item"><FAIcon name="smile" :size="21" color="#00796B" /><span>Мониторинг зелёный</span></div>
          <div class="s32-feature-item"><FAIcon name="database" :size="21" color="#00796B" /><span>Логи пишутся стабильно</span></div>
        </div>
      </div>
    </div>
    <div class="s32-col">
      <div v-click="1" class="s32-case-card s32-card-panic">
        <div class="s32-card-head">
          <FAIcon name="fire" :size="28" color="#C62828" />
          <div class="s32-card-head-title">23:54 — Звонок</div>
        </div>
        <div class="s32-feature-list">
          <div class="s32-feature-item"><FAIcon name="bell" :size="21" color="#C62828" /><span>Звонок мониторинга</span></div>
          <div class="s32-feature-item"><FAIcon name="exclamation-triangle" :size="21" color="#C62828" /><span>«Логи не поступают везде на проде!»</span></div>
          <div class="s32-feature-item"><FAIcon name="eye-slash" :size="21" color="#C62828" /><span><strong>0 новых логов</strong></span></div>
        </div>
      </div>
    </div>
  </main>
</div>

<!-- notes: Пятница, 17:00, ретро. Порадовались, что неделя прошла без инцидентов. Мониторинг зелёный, логи пишутся стабильно. В 23:54 — звонок мониторинга: логи не поступают везде на проде. Это катастрофа: мы теряем видимость инфраструктуры в момент, когда что-то пошло не так. На следующем слайде — что внутри нас в этот момент. -->
