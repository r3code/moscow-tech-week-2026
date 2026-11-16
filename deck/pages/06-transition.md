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
  <div class="decorative-circle" style="width:240px;height:240px;background:#E0F2F1;bottom:-100px;right:-80px;opacity:0.5;"></div>
  <PageBadge base="10" />
  <div style="padding:36px 70px 12px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:5;">
    <div style="width:6px;height:60px;background:#42A5F5;border-radius:3px;"></div>
    <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:36px;color:#212121;line-height:1.05;">Переход на Vector+Clickhouse</div>
  </div>
  <div style="flex:1;padding:12px 70px 24px 70px;display:flex;flex-direction:column;gap:16px;position:relative;z-index:5;">
    <div style="background:#F8F9FA;border-radius:12px;padding:18px 24px;border-left:6px solid #4DB6AC;">
      <div style="display:flex;font-family:'Inter',sans-serif;font-size:18px;color:#9E9E9E;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #E0E0E0;">
        <div style="width:34%;">Метрика</div>
        <div style="width:20%;">Было</div>
        <div v-click="1" style="width:25%;">Стало</div>
        <div v-click="1" style="width:21%;text-align:right;">Эффект</div>
      </div>
      <div style="display:flex;align-items:center;padding:10px 0;border-bottom:1px solid #EEEEEE;">
        <div style="width:34%;font-family:'Inter',sans-serif;font-size:18px;color:#424242;line-height:1.3;">Прямые затраты<br><span style="font-size:16px;color:#9E9E9E;">(выделенные ноды), руб./мес</span></div>
        <div style="width:20%;font-family:'Inter',sans-serif;font-weight:600;font-size:19px;color:#C62828;">810 000</div>
        <div v-click="1" style="width:25%;font-family:'Montserrat',sans-serif;font-weight:800;font-size:19px;color:#1976D2;">180 000</div>
        <div v-click="1" style="width:21%;text-align:right;"><span style="background:#E0F2F1;color:#00796B;font-family:'Inter',sans-serif;font-size:18px;font-weight:700;padding:4px 10px;border-radius:12px;">↓×4.5</span></div>
      </div>
      <div style="display:flex;align-items:center;padding:10px 0;border-bottom:1px solid #EEEEEE;">
        <div style="width:34%;font-family:'Inter',sans-serif;font-size:18px;color:#9E9E9E;text-transform:uppercase;">Ресурсы</div>
        <div style="width:20%;font-family:'Inter',sans-serif;font-weight:600;font-size:19px;color:#C62828;">18 нод Elastic</div>
        <div v-click="1" style="width:25%;font-family:'Montserrat',sans-serif;font-weight:800;font-size:19px;color:#1976D2;">9 нод ClickHouse</div>
        <div v-click="1" style="width:21%;text-align:right;"><span style="background:#E0F2F1;color:#00796B;font-family:'Inter',sans-serif;font-size:18px;font-weight:700;padding:4px 10px;border-radius:12px;">−50%</span></div>
      </div>
    </div>
    <div v-click="2" style="display:flex;">
      <div style="flex:1;background:#FFFFFF;border-radius:16px;padding:24px 30px;box-shadow:0 8px 24px rgba(0,0,0,0.07);display:flex;align-items:center;gap:26px;border-left:6px solid #1565C0;">
        <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:52px;color:#1565C0;line-height:1;">↓×3</div>
        <div style="flex:1;">
          <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:22px;color:#424242;">Полный TCO</div>
          <div style="font-family:'Inter',sans-serif;font-size:19px;color:#616161;margin-top:4px;">было 810 тыс. · стало ~270 тыс. руб./мес</div>
          <div style="font-family:'Inter',sans-serif;font-size:16px;color:#9E9E9E;margin-top:2px;">с доп. дисками Kafka и ресурсами агрегаторов</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- notes: Прямые затраты: 810 000 → 180 000 руб./мес (×4.5). Ресурсы: 18 нод Elastic → 9 нод ClickHouse (−50%). Главное — отдельно карточкой: Полный TCO с доп. дисками Kafka и ресурсами агрегаторов: 810 тыс. → ~270 тыс. руб./мес (×3) — цифра из заголовка. Про команду и скорость — на следующем слайде «Эволюция в Unified Log Pipeline». -->
