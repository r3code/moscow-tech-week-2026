---
layout: mtw
titleRu: 'Эффекты от внедрения Vector+Clickhouse'
badgePage: 48
---
<div class="effects-grid" style="flex:1;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr 1fr;gap:18px;">
<div class="effect-card" style="background:#E3F2FD;border-left:6px solid #42A5F5;">
<div class="icon-row"><i class="fas fa-truck" style="font-size:32px;color:#1565C0;"></i></div>
<div class="big-num" style="color:#1565C0;">99.98–100%</div>
<div class="label">Доставка логов</div>
<div class="sub">SLA по доставке</div>
</div>
<div class="effect-card" style="background:#E0F2F1;border-left:6px solid #4DB6AC;">
<div class="icon-row"><i class="fas fa-clock" style="font-size:32px;color:#00796B;"></i></div>
<div class="big-num" style="color:#00796B;">&lt; 60 с</div>
<div class="label">RTO при отказе ЦОД</div>
<div class="sub">3 ЦОД, авто-переключение</div>
</div>
<div class="effect-card" style="background:#E8EAF6;border-left:6px solid #5C6BC0;">
<div class="icon-row"><i class="fas fa-compress-arrows-alt" style="font-size:32px;color:#5C6BC0;"></i></div>
<div class="big-num" style="color:#5C6BC0;">10–20×</div>
<div class="label">Расход дисков</div>
<div class="sub">в 10–20 раз меньше</div>
</div>
<div class="effect-card" style="background:#FFF8E1;border-left:6px solid #FFA726;">
<v-click :at="1">
<div class="icon-row"><i class="fas fa-tachometer-alt" style="font-size:32px;color:#BF360C;"></i></div>
<div class="big-num" style="color:#BF360C;">10 мин</div>
<div class="label">Подключение сервиса</div>
<div class="sub">было 3–5 часов</div>
</v-click>
</div>
<div class="effect-card" style="background:#F3E5F5;border-left:6px solid #AB47BC;">
<v-click :at="1">
<div class="icon-row"><i class="fas fa-users" style="font-size:32px;color:#AB47BC;"></i></div>
<div class="big-num" style="color:#AB47BC;">1 SRE</div>
<div class="label">Сопровождение</div>
<div class="sub">без DevOps</div>
</v-click>
</div>
<div class="effect-card" style="background:#FFEBEE;border-left:6px solid #EF5350;">
<v-click :at="1">
<div class="icon-row"><i class="fa fa-coins" style="font-size:32px;color:#C62828;"></i></div>
<div class="big-num" style="color:#C62828;">−78%</div>
<div class="label">TCO</div>
<div class="sub">810к → 180к руб./мес</div>
</v-click>
</div>
</div>

<style>
.effect-card {
  border-radius: 14px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
}
.effect-card .icon-row { display: flex; align-items: center; }
.effect-card .big-num {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 42px;
  line-height: 1.05;
  margin: 2px 0;
}
.effect-card .label {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 21px;
  color: #424242;
  line-height: 1.2;
}
.effect-card .sub {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #616161;
  line-height: 1.3;
}
</style>

<!--
Эффекты от внедрения. Доставка 99.98–100%. RTO < 60с. Сжатие 10–20x. Подключение 10 мин. Команда 1 SRE без DevOps. TCO −78%.
-->
