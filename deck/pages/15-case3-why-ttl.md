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
  <div class="decorative-circle" style="width:380px;height:380px;background:radial-gradient(circle,rgba(255,167,38,0.10) 0%,transparent 70%);top:-130px;left:-110px;"></div>
  <div class="decorative-circle" style="width:260px;height:260px;background:radial-gradient(circle,rgba(255,167,38,0.08) 0%,transparent 70%);bottom:-90px;right:-60px;"></div>
  <PageBadge base="31" />
  <div aria-hidden="true" style="position:absolute;top:30px;right:230px;z-index:1;opacity:0.6;font-family:'Montserrat',sans-serif;font-weight:900;font-size:80px;color:#FFF8E1;letter-spacing:4px;line-height:1;">CASE 3</div>
  <header style="position:relative;z-index:10;padding:40px 70px 16px 70px;display:flex;align-items:center;justify-content:space-between;">
    <div style="display:flex;align-items:center;gap:22px;">
      <div style="width:6px;height:70px;background:#FFA726;border-radius:3px;"></div>
      <div>
        <div style="font-family:'PT Serif',serif;font-style:italic;font-size:20px;color:#BF360C;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700;line-height:1;">CASE 3 · ПРОБЛЕМА</div>
        <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">Нужен разный TTL</h1>
      </div>
    </div>
  </header>
  <main style="flex:1;padding:40px 70px 50px 70px;position:relative;z-index:10;display:flex;flex-direction:column;justify-content:center;gap:28px;">
    <div style="background:#FFFDE7;border-radius:14px;padding:24px 28px;border-left:6px solid #FFA726;display:flex;align-items:center;gap:16px;box-shadow:0 4px 12px rgba(255,167,38,0.08);">
      <FAIcon name="question-circle" :size="28" color="#BF360C" />
      <h2 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:24px;color:#424242;margin:0;">Разным сервисам — разный срок хранения</h2>
    </div>
    <div style="display:flex;gap:20px;">
      <div style="flex:1;background:#FFFFFF;border-radius:16px;padding:32px 28px;border-top:6px solid #42A5F5;display:flex;flex-direction:column;gap:10px;align-items:center;text-align:center;box-shadow:0 4px 14px rgba(0,0,0,0.06);">
        <FAIcon name="bug" :size="36" color="#1565C0" />
        <h3 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:22px;color:#424242;margin:0;">Dev-среды</h3>
        <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:48px;color:#1565C0;line-height:1;">2 дня</div>
        <p style="font-family:'Inter',sans-serif;font-size:18px;color:#616161;margin:0;">отладочные логи</p>
      </div>
      <div style="flex:1;background:#FFFFFF;border-radius:16px;padding:32px 28px;border-top:6px solid #4DB6AC;display:flex;flex-direction:column;gap:10px;align-items:center;text-align:center;box-shadow:0 4px 14px rgba(0,0,0,0.06);">
        <FAIcon name="cog" :size="36" color="#00796B" />
        <h3 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:22px;color:#424242;margin:0;">Операционные</h3>
        <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:48px;color:#00796B;line-height:1;">4–7 дней</div>
        <p style="font-family:'Inter',sans-serif;font-size:18px;color:#616161;margin:0;">бизнес-сервисы</p>
      </div>
      <div style="flex:1;background:#FFFFFF;border-radius:16px;padding:32px 28px;border-top:6px solid #5C6BC0;display:flex;flex-direction:column;gap:10px;align-items:center;text-align:center;box-shadow:0 4px 14px rgba(0,0,0,0.06);">
        <FAIcon name="shield-alt" :size="36" color="#5C6BC0" />
        <h3 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:22px;color:#424242;margin:0;">Аудит</h3>
        <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:48px;color:#5C6BC0;line-height:1;">180 дней</div>
        <p style="font-family:'Inter',sans-serif;font-size:18px;color:#616161;margin:0;">финансовые логи</p>
      </div>
    </div>
  </main>
</div>

<!-- notes: Разным сервисам нужен разный срок хранения. Dev-среды — 2 дня, операционные — 4–7 дней, аудит и финансы — 180 дней. Как это реализовать? На следующем слайде — что мы рассмотрели и изначально имели. -->
