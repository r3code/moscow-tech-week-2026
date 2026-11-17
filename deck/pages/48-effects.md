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
  <PageBadge base="67" />
  <div style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
    <div style="width:6px;height:80px;background:#4DB6AC;border-radius:3px;"></div>
    <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.15;margin:0;">Эффекты от внедрения Vector+ClickHouse</h1>
  </div>
  <div style="flex:1;padding:20px 70px 40px 70px;display:flex;flex-direction:column;gap:18px;position:relative;z-index:10;">
    <div style="flex:0 0 auto;background:#E3F2FD;border-left:6px solid #42A5F5;border-radius:14px;padding:14px 26px;display:flex;align-items:center;gap:20px;">
      <FAIcon name="truck" :size="30" color="#1565C0" />
      <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:40px;color:#1565C0;line-height:1;">99.98–100%</div>
      <div>
        <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;color:#424242;">Доставка логов</div>
        <div style="font-family:'Inter',sans-serif;font-size:18px;color:#616161;margin-top:2px;">SLA по доставке</div>
      </div>
    </div>
    <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:18px;">
      <div class="s48-card" style="background:#E8EAF6;border-left:6px solid #5C6BC0;flex-direction:row;align-items:center;gap:20px;">
        <div style="flex:1;">
          <div style="display:flex;align-items:center;gap:14px;">
            <FAIcon name="compress-arrows-alt" :size="30" color="#5C6BC0" />
            <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:42px;color:#5C6BC0;line-height:1;">↓×10–20</div>
          </div>
          <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;color:#424242;margin-top:10px;">Расход дисков</div>
          <div style="font-family:'Inter',sans-serif;font-size:18px;color:#616161;margin-top:4px;">в 10–20 раз меньше</div>
        </div>
        <div style="flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:5px;">
          <div style="display:flex;align-items:flex-end;gap:14px;border-bottom:1px solid #BDBDBD;padding:0 6px;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#C62828;">1×</div>
              <div style="width:44px;height:80px;background:#E57373;border-radius:4px 4px 0 0;"></div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#00796B;">~1/15×</div>
              <div style="width:44px;height:5px;background:#00796B;border-radius:2px 2px 0 0;"></div>
            </div>
          </div>
          <div style="display:flex;gap:14px;padding:0 6px;">
            <div style="width:44px;font-family:'Inter',sans-serif;font-size:16px;color:#757575;text-align:center;">До</div>
            <div style="width:44px;font-family:'Inter',sans-serif;font-size:16px;color:#757575;text-align:center;">После</div>
          </div>
          <div style="font-family:'Inter',sans-serif;font-size:16px;color:#9E9E9E;">объём хранения</div>
        </div>
      </div>
      <div class="s48-card" style="background:#FFF8E1;border-left:6px solid #FFA726;flex-direction:row;align-items:center;gap:20px;">
        <div style="flex:1;">
          <div style="display:flex;align-items:center;gap:14px;">
            <FAIcon name="tachometer-alt" :size="30" color="#BF360C" />
            <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:42px;color:#BF360C;line-height:1;">↓×30</div>
          </div>
          <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;color:#424242;margin-top:10px;">Подключение сервиса</div>
          <div style="font-family:'Inter',sans-serif;font-size:18px;color:#616161;margin-top:4px;">быстрее в 30 раз, было 5 часов</div>
        </div>
        <div style="flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:5px;">
          <div style="display:flex;align-items:flex-end;gap:14px;border-bottom:1px solid #BDBDBD;padding:0 6px;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#C62828;">5 ч</div>
              <div style="width:44px;height:80px;background:#E57373;border-radius:4px 4px 0 0;"></div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#00796B;">10 мин</div>
              <div style="width:44px;height:3px;background:#00796B;border-radius:2px 2px 0 0;"></div>
            </div>
          </div>
          <div style="display:flex;gap:14px;padding:0 6px;">
            <div style="width:44px;font-family:'Inter',sans-serif;font-size:16px;color:#757575;text-align:center;">До</div>
            <div style="width:44px;font-family:'Inter',sans-serif;font-size:16px;color:#757575;text-align:center;">После</div>
          </div>
          <div style="font-family:'Inter',sans-serif;font-size:16px;color:#9E9E9E;">время до подключения</div>
        </div>
      </div>
    </div>
    <div v-click="1" style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:18px;">
      <div class="s48-card" style="background:#F3E5F5;border-left:6px solid #AB47BC;flex-direction:row;align-items:center;gap:20px;">
        <div style="flex:1;">
          <div style="display:flex;align-items:center;gap:14px;">
            <FAIcon name="users" :size="30" color="#AB47BC" />
            <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:42px;color:#AB47BC;line-height:1;">1 SRE</div>
          </div>
          <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;color:#424242;margin-top:10px;">Сопровождение</div>
          <div style="font-family:'Inter',sans-serif;font-size:18px;color:#616161;margin-top:4px;">без DevOps · экономия 1–1.5 FTE</div>
        </div>
        <div style="flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:5px;">
          <div style="display:flex;align-items:flex-end;gap:14px;border-bottom:1px solid #BDBDBD;padding:0 6px;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#C62828;">3</div>
              <div style="width:44px;height:80px;background:#E57373;border-radius:4px 4px 0 0;"></div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#00796B;">1</div>
              <div style="width:44px;height:27px;background:#00796B;border-radius:4px 4px 0 0;"></div>
            </div>
          </div>
          <div style="display:flex;gap:14px;padding:0 6px;">
            <div style="width:44px;font-family:'Inter',sans-serif;font-size:16px;color:#757575;text-align:center;">До</div>
            <div style="width:44px;font-family:'Inter',sans-serif;font-size:16px;color:#757575;text-align:center;">После</div>
          </div>
          <div style="font-family:'Inter',sans-serif;font-size:16px;color:#9E9E9E;">FTE на сопровождении</div>
        </div>
      </div>
      <div class="s48-card" style="background:#FFEBEE;border-left:6px solid #EF5350;flex-direction:row;align-items:center;gap:20px;">
        <div style="flex:1;">
          <div style="display:flex;align-items:center;gap:14px;">
            <FAIcon name="coins" :size="30" color="#C62828" />
            <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:42px;color:#C62828;line-height:1;">↓×3</div>
          </div>
          <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;color:#424242;margin-top:10px;">Полный TCO</div>
          <div style="font-family:'Inter',sans-serif;font-size:18px;color:#616161;margin-top:4px;">810 тыс. → 270 тыс. руб./мес</div>
        </div>
        <div style="flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:5px;">
          <div style="display:flex;align-items:flex-end;gap:14px;border-bottom:1px solid #BDBDBD;padding:0 6px;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#C62828;">810</div>
              <div style="width:44px;height:80px;background:#E57373;border-radius:4px 4px 0 0;"></div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#00796B;">~270</div>
              <div style="width:44px;height:27px;background:#00796B;border-radius:4px 4px 0 0;"></div>
            </div>
          </div>
          <div style="display:flex;gap:14px;padding:0 6px;">
            <div style="width:44px;font-family:'Inter',sans-serif;font-size:16px;color:#757575;text-align:center;">До</div>
            <div style="width:44px;font-family:'Inter',sans-serif;font-size:16px;color:#757575;text-align:center;">После</div>
          </div>
          <div style="font-family:'Inter',sans-serif;font-size:16px;color:#9E9E9E;">тыс. руб./мес</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- notes: Эффекты от внедрения. Доставка 99.98–100% (баннер). Диски ↓×10–20: объём хранения 1× → ~1/15× (середина диапазона 10–20×). Подключение ↓×30: 10 мин вместо 5 часов. Сопровождение 1 SRE без DevOps: 3 → 1 FTE. Полный TCO ↓×3: 810 тыс. → ~270 тыс. руб./мес. -->
