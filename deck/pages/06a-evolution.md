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
  <div class="decorative-circle" style="width:280px;height:280px;background:#E8EAF6;bottom:-120px;left:-100px;opacity:0.5;"></div>
  <PageBadge base="13" />
  <div style="padding:36px 70px 12px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:5;">
    <div style="width:6px;height:60px;background:#42A5F5;border-radius:3px;"></div>
    <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:36px;color:#212121;line-height:1.05;">Эволюция в Unified Log Pipeline</div>
  </div>
  <div style="flex:1;padding:24px 70px 44px 70px;display:flex;flex-direction:column;justify-content:center;position:relative;z-index:5;">
    <div v-click="1" style="display:flex;gap:24px;align-items:stretch;">
      <div style="flex:1;background:#FFFFFF;border-radius:16px;padding:32px 28px;box-shadow:0 8px 24px rgba(0,0,0,0.07);border-left:6px solid #4DB6AC;display:flex;flex-direction:column;gap:12px;">
        <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:54px;color:#00796B;line-height:1;">×30</div>
        <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:20px;color:#424242;line-height:1.25;">Скорость подключения</div>
        <div style="font-family:'Inter',sans-serif;font-size:18px;color:#9E9E9E;line-height:1.4;">5 ч → 10 мин</div>
        <div style="margin-top:auto;display:flex;flex-direction:column;align-items:center;gap:5px;padding-top:14px;">
          <div style="display:flex;align-items:flex-end;gap:16px;border-bottom:1px solid #BDBDBD;padding:0 6px;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#C62828;">5 ч</div>
              <div style="width:48px;height:90px;background:#E57373;border-radius:5px 5px 0 0;"></div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#00796B;">10 мин</div>
              <div style="width:48px;height:3px;background:#00796B;border-radius:2px 2px 0 0;"></div>
            </div>
          </div>
          <div style="display:flex;gap:16px;padding:0 6px;">
            <div style="width:48px;font-family:'Inter',sans-serif;font-size:16px;color:#757575;text-align:center;">До</div>
            <div style="width:48px;font-family:'Inter',sans-serif;font-size:16px;color:#757575;text-align:center;">После</div>
          </div>
          <div style="font-family:'Inter',sans-serif;font-size:16px;color:#9E9E9E;">минуты до подключения</div>
        </div>
      </div>
      <div style="flex:1;background:#FFFFFF;border-radius:16px;padding:32px 28px;box-shadow:0 8px 24px rgba(0,0,0,0.07);border-left:6px solid #64B5F6;display:flex;flex-direction:column;gap:12px;">
        <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:54px;color:#1565C0;line-height:1;">↓78%</div>
        <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:20px;color:#424242;line-height:1.25;">Трудозатраты команды</div>
        <div style="font-family:'Inter',sans-serif;font-size:18px;color:#9E9E9E;line-height:1.4;">2 SRE + DevOps → 1 SRE</div>
        <div style="margin-top:auto;display:flex;flex-direction:column;align-items:center;gap:5px;padding-top:14px;">
          <div style="display:flex;align-items:flex-end;gap:16px;border-bottom:1px solid #BDBDBD;padding:0 6px;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#C62828;">100%</div>
              <div style="width:48px;height:90px;background:#E57373;border-radius:5px 5px 0 0;"></div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#00796B;">22%</div>
              <div style="width:48px;height:20px;background:#00796B;border-radius:5px 5px 0 0;"></div>
            </div>
          </div>
          <div style="display:flex;gap:16px;padding:0 6px;">
            <div style="width:48px;font-family:'Inter',sans-serif;font-size:16px;color:#757575;text-align:center;">До</div>
            <div style="width:48px;font-family:'Inter',sans-serif;font-size:16px;color:#757575;text-align:center;">После</div>
          </div>
          <div style="font-family:'Inter',sans-serif;font-size:16px;color:#9E9E9E;">% трудозатрат</div>
        </div>
      </div>
      <div style="flex:1;background:#FFFFFF;border-radius:16px;padding:32px 28px;box-shadow:0 8px 24px rgba(0,0,0,0.07);border-left:6px solid #7986CB;display:flex;flex-direction:column;gap:12px;">
        <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:54px;color:#5C6BC0;line-height:1;">1.5–2<span style="font-size:30px;font-weight:800;"> FTE</span></div>
        <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:20px;color:#424242;line-height:1.25;">Высвобождено инженеров</div>
        <div style="font-family:'Inter',sans-serif;font-size:18px;color:#9E9E9E;line-height:1.4;">Toil → Engineering</div>
        <div style="margin-top:auto;display:flex;flex-direction:column;align-items:center;gap:5px;padding-top:14px;">
          <div style="display:flex;align-items:flex-end;gap:16px;border-bottom:1px solid #BDBDBD;padding:0 6px;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#C62828;">3</div>
              <div style="width:48px;height:90px;background:#E57373;border-radius:5px 5px 0 0;"></div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#00796B;">1</div>
              <div style="width:48px;height:30px;background:#00796B;border-radius:5px 5px 0 0;"></div>
            </div>
          </div>
          <div style="display:flex;gap:16px;padding:0 6px;">
            <div style="width:48px;font-family:'Inter',sans-serif;font-size:16px;color:#757575;text-align:center;">До</div>
            <div style="width:48px;font-family:'Inter',sans-serif;font-size:16px;color:#757575;text-align:center;">После</div>
          </div>
          <div style="font-family:'Inter',sans-serif;font-size:16px;color:#9E9E9E;">FTE на сопровождении</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- notes: Эволюция после перехода на единый пайплайн: подключение нового сервиса ускорилось в 30 раз (5 часов → 10 минут). Трудозатраты команды упали на 78% — вместо 2 SRE + DevOps теперь хватает 1 SRE. Высвобождено 1.5–2 FTE — toil конвертирован в инженерную работу. -->
