---
layout: content
canvasWidth: 1280
aspectRatio: 16/9
transition: none
drawings: false
lineNumbers: false
---

<div class="mtw-slide" style="background:#FFFFFF;flex-direction:column;">
  <div class="grid-pattern" aria-hidden="true"></div>
  <PageBadge base="65" />
  <div style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
    <div style="width:6px;height:80px;background:#4DB6AC;border-radius:3px;"></div>
    <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.15;margin:0;">Эффекты от внедрения Vector+Clickhouse</h1>
  </div>
  <div class="s48-grid">
    <div class="s48-card" style="background:#E3F2FD;border-left:6px solid #42A5F5;">
      <div style="display:flex;align-items:center;"><FAIcon name="truck" :size="32" color="#1565C0" /></div>
      <div class="s48-num" style="color:#1565C0;">99.98–100%</div>
      <div class="s48-label">Доставка логов</div>
      <div class="s48-sub">SLA по доставке</div>
    </div>
    <div class="s48-card" style="background:#E0F2F1;border-left:6px solid #4DB6AC;">
      <div style="display:flex;align-items:center;"><FAIcon name="clock" :size="32" color="#00796B" /></div>
      <div class="s48-num" style="color:#00796B;">&lt; 60 с</div>
      <div class="s48-label">RTO при отказе ЦОД</div>
      <div class="s48-sub">3 ЦОД, авто-переключение</div>
    </div>
    <div class="s48-card" style="background:#E8EAF6;border-left:6px solid #5C6BC0;">
      <div style="display:flex;align-items:center;"><FAIcon name="compress-arrows-alt" :size="32" color="#5C6BC0" /></div>
      <div class="s48-num" style="color:#5C6BC0;">10–20×</div>
      <div class="s48-label">Расход дисков</div>
      <div class="s48-sub">в 10–20 раз меньше</div>
    </div>
    <div v-click="1" class="s48-card" style="background:#FFF8E1;border-left:6px solid #FFA726;">
      <div style="display:flex;align-items:center;"><FAIcon name="tachometer-alt" :size="32" color="#BF360C" /></div>
      <div class="s48-num" style="color:#BF360C;">10 мин</div>
      <div class="s48-label">Подключение сервиса</div>
      <div class="s48-sub">было 5 часов</div>
    </div>
    <div v-click="1" class="s48-card" style="background:#F3E5F5;border-left:6px solid #AB47BC;">
      <div style="display:flex;align-items:center;"><FAIcon name="users" :size="32" color="#AB47BC" /></div>
      <div class="s48-num" style="color:#AB47BC;">1 SRE</div>
      <div class="s48-label">Сопровождение</div>
      <div class="s48-sub">без DevOps</div>
    </div>
    <div v-click="1" class="s48-card" style="background:#FFEBEE;border-left:6px solid #EF5350;">
      <div style="display:flex;align-items:center;"><FAIcon name="coins" :size="32" color="#C62828" /></div>
      <div class="s48-num" style="color:#C62828;">−78%</div>
      <div class="s48-label">TCO</div>
      <div class="s48-sub">810к → 180к руб./мес</div>
    </div>
  </div>
</div>

<!-- notes: Эффекты от внедрения. Доставка 99.98–100%. RTO < 60с. Сжатие 10–20x. Подключение 10 мин. Команда 1 SRE без DevOps. TCO −78%. -->
