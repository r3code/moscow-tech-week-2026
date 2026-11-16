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
  <PageBadge base="32" />
  <div aria-hidden="true" style="position:absolute;top:30px;right:230px;z-index:1;opacity:0.6;font-family:'Montserrat',sans-serif;font-weight:900;font-size:80px;color:#FFF8E1;letter-spacing:4px;line-height:1;">CASE 3</div>
  <header style="position:relative;z-index:10;padding:40px 70px 16px 70px;display:flex;align-items:center;justify-content:space-between;">
    <div style="display:flex;align-items:center;gap:22px;">
      <div style="width:6px;height:70px;background:#FFA726;border-radius:3px;"></div>
      <div>
        <div style="font-family:'PT Serif',serif;font-style:italic;font-size:20px;color:#BF360C;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700;line-height:1;">CASE 3 · ПРОБЛЕМА</div>
        <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">Что было до</h1>
      </div>
    </div>
  </header>
  <main style="flex:1;padding:20px 70px 40px 70px;position:relative;z-index:10;display:flex;flex-direction:column;justify-content:center;gap:24px;">
    <div style="display:flex;align-items:center;gap:12px;justify-content:center;flex-wrap:wrap;">
      <span style="background:#F5F5F5;padding:8px 16px;border-radius:20px;font-family:'Inter',sans-serif;font-size:18px;color:#616161;">2 дня</span>
      <span style="background:#F5F5F5;padding:8px 16px;border-radius:20px;font-family:'Inter',sans-serif;font-size:18px;color:#616161;">4–7 дней</span>
      <span style="background:#F5F5F5;padding:8px 16px;border-radius:20px;font-family:'Inter',sans-serif;font-size:18px;color:#616161;">180 дней</span>
      <span style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:24px;color:#BF360C;">→</span>
      <span style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:24px;color:#BF360C;">нужна гибкость</span>
    </div>
    <div style="display:flex;gap:20px;">
      <div style="flex:1;background:#F8F9FA;border-radius:14px;padding:28px 30px;border-left:6px solid #BDBDBD;">
        <div style="display:flex;align-items:center;gap:12px;">
          <FAIcon name="history" :size="30" color="#757575" />
          <h3 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:24px;color:#424242;margin:0;">Изначально</h3>
        </div>
        <p style="font-family:'Inter',sans-serif;font-size:21px;color:#424242;line-height:1.5;margin:14px 0 0 0;">TTL на таблицу (встроен в ClickHouse) — все сервисы хранили 7 дней.</p>
        <p style="font-family:'Inter',sans-serif;font-size:18px;color:#9E9E9E;line-height:1.4;margin:10px 0 0 0;">Не подходит: мало для аудита, много для dev</p>
      </div>
      <div v-click="1" style="flex:1;background:#FFF5F5;border-radius:14px;padding:28px 30px;border-left:6px solid #EF5350;">
        <div style="display:flex;align-items:center;gap:12px;">
          <FAIcon name="times-circle" :size="30" color="#C62828" />
          <h3 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:24px;color:#C62828;margin:0;">Рассмотрели VictoriaLogs</h3>
        </div>
        <p style="font-family:'Inter',sans-serif;font-size:21px;color:#424242;line-height:1.5;margin:14px 0 0 0;">Не было гибкого управления TTL на уровне строки.</p>
        <p style="font-family:'Inter',sans-serif;font-size:18px;color:#616161;line-height:1.4;margin:10px 0 0 0;">Отказались — остались на ClickHouse</p>
      </div>
    </div>
  </main>
</div>

<!-- notes: Изначально у нас был простой механизм: TTL на таблицу, встроенный в ClickHouse. Все сервисы хранили 7 дней — и точка. Но этого мало для аудита и много для dev. Мы рассматривали VictoriaLogs как альтернативу, но на момент оценки там не было гибкого управления TTL на уровне строки — пришлось бы плодить таблицы под каждый TTL. Решили остаться на ClickHouse и сделать TTL на уровне строки. -->
