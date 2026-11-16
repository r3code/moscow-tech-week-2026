---
layout: content
canvasWidth: 1280
aspectRatio: 16/9
transition: none
drawings: false
lineNumbers: false
---

<div class="mtw-slide" style="background:#FFFFFF;">
  <div class="grid-pattern" aria-hidden="true"></div>
  <div class="decorative-circle" style="width:380px;height:380px;background:radial-gradient(circle,rgba(255,167,38,0.10) 0%,transparent 70%);top:-120px;left:-120px;"></div>
  <div class="decorative-circle" style="width:260px;height:260px;background:radial-gradient(circle,rgba(255,167,38,0.08) 0%,transparent 70%);bottom:-90px;right:-60px;"></div>
  <PageBadge base="24" />
  <div aria-hidden="true" style="position:absolute;top:30px;right:230px;z-index:1;opacity:0.6;font-family:'Montserrat',sans-serif;font-weight:900;font-size:80px;color:#FFF8E1;letter-spacing:4px;line-height:1;">CASE 2</div>
  <header style="position:relative;z-index:10;padding:40px 70px 16px 70px;display:flex;align-items:center;justify-content:space-between;">
    <div style="display:flex;align-items:center;gap:22px;">
      <div style="width:6px;height:70px;background:#FFA726;border-radius:3px;"></div>
      <div>
        <div style="font-family:'PT Serif',serif;font-style:italic;font-size:20px;color:#BF360C;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700;line-height:1;">CASE 2 · ВОПРОС</div>
        <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">Что может произойти на ноде?</h1>
      </div>
    </div>
  </header>
  <main style="flex:1;padding:30px 70px 50px 70px;position:relative;z-index:10;display:flex;flex-direction:column;justify-content:center;gap:24px;">
    <div style="background:#FFFDE7;border-radius:16px;padding:36px 40px;border-left:8px solid #FFA726;box-shadow:0 8px 24px rgba(255,167,38,0.10);">
      <div style="display:flex;align-items:center;gap:14px;">
        <FAIcon name="bell" :size="32" color="#BF360C" />
        <h2 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:26px;color:#424242;margin:0;">Сценарий</h2>
      </div>
      <div style="margin-top:24px;display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap;">
          <FAIcon name="check-circle" :size="28" color="#00796B" />
          <span style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;color:#546E7A;">Обычно:</span>
          <span style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:42px;color:#00796B;line-height:1;">2 МБ/с</span>
          <span style="font-family:'Inter',sans-serif;font-size:21px;color:#616161;">логов с BFF</span>
        </div>
        <div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap;">
          <FAIcon name="fire" :size="28" color="#C62828" />
          <span style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;color:#C62828;">Сейчас:</span>
          <span style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:42px;color:#C62828;line-height:1;">50 МБ/с</span>
          <span style="font-family:'Inter',sans-serif;font-size:21px;color:#616161;">логов с BFF</span>
        </div>
      </div>
    </div>
  </main>
</div>

<!-- notes: Второй кейс — интерактивный. Приложение BFF вдруг начало писать логи со скоростью 50 мегабайт в секунду вместо обычных двух. Что может произойти на ноде? Подумайте. Следующий слайд — подсказка от lsof. -->
