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
  <div class="decorative-circle" style="width:380px;height:380px;background:radial-gradient(circle,rgba(77,182,172,0.12) 0%,transparent 70%);top:-130px;left:-110px;"></div>
  <div class="decorative-circle" style="width:260px;height:260px;background:radial-gradient(circle,rgba(77,182,172,0.10) 0%,transparent 70%);bottom:-90px;right:-60px;"></div>
  <PageBadge base="24" />
  <div aria-hidden="true" style="position:absolute;top:30px;right:230px;z-index:1;opacity:0.6;font-family:'Montserrat',sans-serif;font-weight:900;font-size:80px;color:#E0F2F1;letter-spacing:4px;line-height:1;">CASE 2</div>
  <header style="position:relative;z-index:10;padding:40px 70px 16px 70px;display:flex;align-items:center;justify-content:space-between;">
    <div style="display:flex;align-items:center;gap:22px;">
      <div style="width:6px;height:70px;background:#4DB6AC;border-radius:3px;"></div>
      <div>
        <div style="font-family:'PT Serif',serif;font-style:italic;font-size:20px;color:#00796B;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700;line-height:1;">CASE 2 · РЕШЕНИЕ</div>
        <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">2 параметра Vector</h1>
      </div>
    </div>
  </header>
  <main style="flex:1;padding:30px 70px 50px 70px;position:relative;z-index:10;display:flex;flex-direction:column;justify-content:center;">
    <div style="max-width:800px;margin:0 auto;width:100%;">
      <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;color:#00796B;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:14px;">Vector config</div>
      <pre style="background:#F5F7FA;color:#1A2A3A;border-radius:14px;padding:32px 36px;border-left:5px solid #4DB6AC;font-family:'JetBrains Mono',monospace;font-size:18px;line-height:1.8;box-shadow:0 10px 30px rgba(15,41,66,0.10);margin:0;white-space:pre;overflow:hidden;"><span style="color:#1565C0;font-weight:600">[sources.app_log]</span>
type = <span style="color:#558B2F">"file"</span>
include = <span style="color:#558B2F">"/var/log/containers/*.log"</span>
&nbsp;
<span style="color:#6B7B8D;font-style:italic"># Читать свежие логи блоками по 16 КБ</span>
<span style="background:rgba(255,167,38,0.18);padding:1px 4px;border-radius:3px;color:#BF360C">oldest_first = false</span>
<span style="background:rgba(255,167,38,0.18);padding:1px 4px;border-radius:3px;color:#BF360C">max_read_bytes = 16384</span></pre>
    </div>
  </main>
</div>

<!-- notes: Решение — два параметра. oldest_first: false — чтобы Vector не пытался дочитать старые файлы. max_read_bytes: 16384 — чтобы читать свежие логи блоками по 16 КБ. На следующем слайде — результат. -->
