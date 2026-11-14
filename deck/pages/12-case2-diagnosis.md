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
  <div class="decorative-circle" style="width:380px;height:380px;background:radial-gradient(circle,rgba(239,83,80,0.10) 0%,transparent 70%);top:-130px;left:-110px;"></div>
  <div class="decorative-circle" style="width:260px;height:260px;background:radial-gradient(circle,rgba(239,83,80,0.08) 0%,transparent 70%);bottom:-90px;right:-60px;"></div>
  <PageBadge base="18" />
  <div aria-hidden="true" style="position:absolute;top:30px;right:230px;z-index:1;opacity:0.6;font-family:'Montserrat',sans-serif;font-weight:900;font-size:80px;color:#FFEBEE;letter-spacing:4px;line-height:1;">CASE 2</div>
  <header style="position:relative;z-index:10;padding:40px 70px 16px 70px;display:flex;align-items:center;justify-content:space-between;">
    <div style="display:flex;align-items:center;gap:22px;">
      <div style="width:6px;height:70px;background:#EF5350;border-radius:3px;"></div>
      <div>
        <div style="font-family:'PT Serif',serif;font-style:italic;font-size:20px;color:#C62828;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700;line-height:1;">CASE 2 · ДИАГНОЗ</div>
        <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">Vector держит дескрипторы</h1>
      </div>
    </div>
  </header>
  <main style="flex:1;padding:20px 70px 40px 70px;position:relative;z-index:10;display:flex;flex-direction:column;justify-content:center;">
    <div style="background:#FFF5F5;border-radius:16px;padding:32px 36px;border-left:8px solid #EF5350;box-shadow:0 8px 24px rgba(239,83,80,0.10);">
      <div style="display:flex;align-items:center;gap:14px;">
        <FAIcon name="search" :size="32" color="#C62828" />
        <h2 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:26px;color:#424242;margin:0;">Что произошло</h2>
      </div>
      <div style="margin-top:24px;display:flex;flex-direction:column;gap:18px;">
        <div style="display:flex;align-items:flex-start;gap:16px;">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:#EF5350;color:#fff;font-family:'Montserrat',sans-serif;font-weight:800;font-size:18px;flex-shrink:0;">1</span>
          <p style="font-family:'Inter',sans-serif;font-size:21px;color:#424242;line-height:1.5;margin:0;">BFF пишет 50 МБ/с → log-файлы быстро ротируются.</p>
        </div>
        <div style="display:flex;align-items:flex-start;gap:16px;">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:#FFA726;color:#fff;font-family:'Montserrat',sans-serif;font-weight:800;font-size:18px;flex-shrink:0;">2</span>
          <p style="font-family:'Inter',sans-serif;font-size:21px;color:#424242;line-height:1.5;margin:0;">Vector держит fd на старых (deleted) файлах, не освобождая их.</p>
        </div>
        <div style="display:flex;align-items:flex-start;gap:16px;">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:#5C6BC0;color:#fff;font-family:'Montserrat',sans-serif;font-weight:800;font-size:18px;flex-shrink:0;">3</span>
          <p style="font-family:'Inter',sans-serif;font-size:21px;color:#424242;line-height:1.5;margin:0;">Старые файлы физически не удаляются с диска → переполнение.</p>
        </div>
      </div>
    </div>
  </main>
</div>

<!-- notes: Диагноз. BFF начал писать 50 мегабайт в секунду — лог-файлы быстро ротируются. Vector держит файловые дескрипторы на старых файлах, помеченных как deleted, но физически не освобождает их. Старые файлы остаются на диске, и он переполняется. -->
