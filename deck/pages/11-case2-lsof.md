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
  <div class="decorative-circle" style="width:380px;height:380px;background:radial-gradient(circle,rgba(92,107,192,0.10) 0%,transparent 70%);top:-130px;left:-110px;"></div>
  <div class="decorative-circle" style="width:260px;height:260px;background:radial-gradient(circle,rgba(92,107,192,0.08) 0%,transparent 70%);bottom:-90px;right:-60px;"></div>
  <PageBadge base="21" />
  <div aria-hidden="true" style="position:absolute;top:30px;right:230px;z-index:1;opacity:0.6;font-family:'Montserrat',sans-serif;font-weight:900;font-size:80px;color:#E8EAF6;letter-spacing:4px;line-height:1;">CASE 2</div>
  <header style="position:relative;z-index:10;padding:40px 70px 16px 70px;display:flex;align-items:center;justify-content:space-between;">
    <div style="display:flex;align-items:center;gap:22px;">
      <div style="width:6px;height:70px;background:#5C6BC0;border-radius:3px;"></div>
      <div>
        <div style="font-family:'PT Serif',serif;font-style:italic;font-size:20px;color:#5C6BC0;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700;line-height:1;">CASE 2 · ПОДСКАЗКА</div>
        <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">Подсказка от lsof</h1>
      </div>
    </div>
  </header>
  <main style="flex:1;padding:20px 70px 40px 70px;position:relative;z-index:10;display:flex;flex-direction:column;justify-content:center;gap:20px;">
    <div style="background:#F5F7FA;border-radius:14px;padding:28px 32px;border-left:5px solid #5C6BC0;box-shadow:0 10px 30px rgba(15,41,66,0.10);">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px;">
        <span style="width:12px;height:12px;border-radius:50%;background:#FF5F56;display:inline-block;"></span>
        <span style="width:12px;height:12px;border-radius:50%;background:#FFBD2E;display:inline-block;"></span>
        <span style="width:12px;height:12px;border-radius:50%;background:#27C93F;display:inline-block;"></span>
        <span style="font-family:'Montserrat',sans-serif;font-weight:600;font-size:16px;color:#6B7B8D;margin-left:8px;">lsof | grep deleted</span>
      </div>
      <pre style="font-family:'JetBrains Mono',monospace;font-size:18px;color:#1A2A3A;line-height:1.8;margin:0;white-space:pre-wrap;overflow:hidden;"><span style="color:#6B7B8D">$</span> lsof | grep deleted
<span style="color:#00796B">vector</span>  1234  mem  REG  /var/log/containers/bff-7c4f6b8d4-xkq2m_bff_app-1.log  <span style="background:rgba(255,167,38,0.20);color:#BF360C;padding:2px 6px;border-radius:3px">(deleted)</span>
<span style="color:#00796B">vector</span>  1234  42r  REG  /var/log/containers/bff-7c4f6b8d4-xkq2m_bff_app-2.log  <span style="background:rgba(255,167,38,0.20);color:#BF360C;padding:2px 6px;border-radius:3px">(deleted)</span>
<span style="color:#00796B">vector</span>  1234  43r  REG  /var/log/containers/bff-7c4f6b8d4-xkq2m_bff_app-3.log  <span style="background:rgba(255,167,38,0.20);color:#BF360C;padding:2px 6px;border-radius:3px">(deleted)</span>
<span style="color:#6B7B8D">...</span></pre>
    </div>
  </main>
</div>

<!-- notes: Подсказка. lsof показывает, что Vector держит файловые дескрипторы на ротированных лог-файлах K8s подов. Они помечены как deleted, но процесс всё ещё ссылается на них. df показывает, что диск заполнен на 100%. -->
