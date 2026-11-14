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
  <div class="decorative-circle" style="width:380px;height:380px;background:radial-gradient(circle,rgba(66,165,245,0.10) 0%,transparent 70%);top:-130px;right:-110px;"></div>
  <div class="decorative-circle" style="width:260px;height:260px;background:radial-gradient(circle,rgba(77,182,172,0.10) 0%,transparent 70%);bottom:-90px;left:-60px;"></div>
  <PageBadge base="6" />
  <header style="position:relative;z-index:10;padding:50px 70px 16px 70px;display:flex;align-items:center;gap:22px;">
    <div style="width:8px;height:80px;background:#42A5F5;border-radius:3px;"></div>
    <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:42px;color:#212121;line-height:1.1;margin:0;">Исходные данные на момент трансформации (2024)</h1>
  </header>
  <main style="flex:1;padding:20px 70px 40px 70px;position:relative;z-index:10;display:flex;flex-direction:column;justify-content:center;gap:32px;">
    <div style="text-align:center;">
      <div style="display:inline-flex;align-items:center;gap:12px;background:#E3F2FD;padding:12px 28px;border-radius:24px;border:2px solid #42A5F5;">
        <FAIcon name="building" :size="24" color="#1565C0" />
        <span style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:24px;color:#1976D2;">Кейс ВсеИнструменты.ру</span>
      </div>
    </div>
    <div style="display:flex;gap:24px;">
      <div style="flex:1;background:#FFFFFF;border-radius:16px;padding:36px 28px;border-top:6px solid #42A5F5;display:flex;flex-direction:column;gap:12px;align-items:center;text-align:center;box-shadow:0 8px 24px rgba(66,165,245,0.10);">
        <FAIcon name="users" :size="40" color="#1565C0" />
        <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:52px;color:#1565C0;line-height:1;">1.78 млн</div>
        <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:22px;color:#424242;">уникальных пользователей</div>
        <div style="font-family:'Inter',sans-serif;font-size:18px;color:#757575;">в день</div>
      </div>
      <div style="flex:1;background:#FFFFFF;border-radius:16px;padding:36px 28px;border-top:6px solid #4DB6AC;display:flex;flex-direction:column;gap:12px;align-items:center;text-align:center;box-shadow:0 8px 24px rgba(77,182,172,0.10);">
        <FAIcon name="cubes" :size="40" color="#00796B" />
        <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:52px;color:#00796B;line-height:1;">100+</div>
        <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:22px;color:#424242;">сервисов</div>
        <div style="font-family:'Inter',sans-serif;font-size:18px;color:#757575;">в эксплуатации</div>
      </div>
      <div style="flex:1;background:#FFFFFF;border-radius:16px;padding:36px 28px;border-top:6px solid #FFA726;display:flex;flex-direction:column;gap:12px;align-items:center;text-align:center;box-shadow:0 8px 24px rgba(255,167,38,0.10);">
        <FAIcon name="database" :size="40" color="#BF360C" />
        <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:52px;color:#BF360C;line-height:1;">900 ГБ</div>
        <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:22px;color:#424242;">логов</div>
        <div style="font-family:'Inter',sans-serif;font-size:18px;color:#757575;">ежедневно</div>
      </div>
    </div>
  </main>
</div>

<!-- notes: Это наш масштаб на момент трансформации в 2024 году. Кейс ВсеИнструменты.ру: 1.78 миллиона уникальных пользователей в день, больше 100 сервисов в эксплуатации, 900 гигабайт логов ежедневно. Именно при таком объёме Elastic начал пухнуть, а retention — падать. На следующих слайдах покажу, как мы вышли из этой ситуации. -->
