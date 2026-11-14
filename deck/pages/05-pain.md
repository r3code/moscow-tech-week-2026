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
  <PageBadge base="7" />
  <div style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:5;">
    <div style="width:6px;height:70px;background:#42A5F5;border-radius:3px;"></div>
    <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:42px;color:#212121;line-height:1.05;">Боль — Elastic пухнет, retention падает</div>
  </div>
  <div style="flex:1;padding:20px 70px 40px 70px;display:flex;gap:30px;position:relative;z-index:5;">
    <div style="flex:1.2;background:#FFFFFF;border-radius:14px;padding:20px;box-shadow:0 8px 24px rgba(0,0,0,0.05);display:flex;flex-direction:column;">
      <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;color:#424242;margin-bottom:12px;">TCO вырос в 4.5×, Retention упал до 5 часов</div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;overflow:hidden;">
        <img src="/images/chart_tco_retention.png" alt="График TCO vs Retention" style="width:100%;height:auto;display:block;max-height:340px;object-fit:contain;">
      </div>
      <div style="display:flex;gap:24px;justify-content:center;margin-top:12px;font-family:'Inter',sans-serif;font-size:21px;color:#757575;align-items:center;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="width:14px;height:14px;background:#EF5350;display:inline-block;border-radius:2px;"></span>
          Стоимость (TCO)
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="width:24px;height:0;border-top:2px dashed #1976D2;display:inline-block;"></span>
          Время хранения
        </div>
      </div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;gap:14px;justify-content:center;">
      <div v-click="1" style="background:#F8F9FA;border-left:5px solid #EF5350;padding:18px 22px;border-radius:10px;display:flex;align-items:center;gap:16px;">
        <FAIcon name="server" :size="24" color="#C62828" />
        <div style="font-family:'Inter',sans-serif;font-size:21px;color:#424242;line-height:1.35;">18 нод Elastic + 2 SRE + DevOps на тушении пожаров<br><span style="font-size:18px;color:#757575;margin-top:6px;display:inline-block;">TCO 810к руб./мес · Retention 5 часов</span></div>
      </div>
      <div v-click="2" style="background:#F8F9FA;border-left:5px solid #EF5350;padding:18px 22px;border-radius:10px;display:flex;align-items:center;gap:16px;">
        <FAIcon name="fire" :size="24" color="#C62828" />
        <div style="font-family:'Inter',sans-serif;font-size:21px;color:#424242;line-height:1.35;">FluentD терял логи при пиковых нагрузках</div>
      </div>
    </div>
  </div>
</div>

<!-- notes: Мы платили премиум за инфраструктуру, которая не выполняла свою базовую функцию — хранить логи дольше 5 часов. За полгода стоимость EFK выросла с 180 до 810 тысяч рублей в месяц, а retention наоборот падал: с 30 дней до 5 часов. Любой инцидент, расследование которого требует логов старше пяти часов, превращался в рулетку. Параллельно два SRE и привлекаемые DevOps постоянно тушили пожары. -->
