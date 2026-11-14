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
  <div class="decorative-circle" style="width:280px;height:280px;background:#E3F2FD;top:-100px;right:-90px;opacity:0.6;"></div>
  <PageBadge base="3" />
  <div style="padding:50px 70px 20px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:5;">
    <div style="width:6px;height:80px;background:#42A5F5;border-radius:3px;"></div>
    <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:48px;color:#212121;line-height:1.05;">О чем поговорим</div>
  </div>
  <div style="flex:1;padding:30px 70px 50px 70px;display:flex;flex-direction:column;justify-content:center;gap:18px;position:relative;z-index:5;">
    <div style="background:#F8F9FA;border-radius:14px;padding:22px 28px;border-left:6px solid #42A5F5;display:flex;align-items:center;gap:20px;box-shadow:0 2px 6px rgba(0,0,0,0.03);">
      <div style="width:48px;height:48px;border-radius:50%;background:#42A5F5;color:#FFFFFF;font-family:'Montserrat',sans-serif;font-weight:900;font-size:22px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">01</div>
      <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:24px;color:#424242;">Боль от Elastic и эволюция</div>
      <div style="font-family:'PT Serif',serif;font-style:italic;font-size:21px;color:#9E9E9E;margin-left:auto;">почему пришлось менять</div>
    </div>
    <div style="background:#F8F9FA;border-radius:14px;padding:22px 28px;border-left:6px solid #4DB6AC;display:flex;align-items:center;gap:20px;box-shadow:0 2px 6px rgba(0,0,0,0.03);">
      <div style="width:48px;height:48px;border-radius:50%;background:#4DB6AC;color:#FFFFFF;font-family:'Montserrat',sans-serif;font-weight:900;font-size:22px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">02</div>
      <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:24px;color:#424242;">Архитектура сбора логов</div>
      <div style="font-family:'PT Serif',serif;font-style:italic;font-size:21px;color:#9E9E9E;margin-left:auto;">Vector + ClickHouse + Kafka</div>
    </div>
    <div v-click="1" style="background:#F8F9FA;border-radius:14px;padding:22px 28px;border-left:6px solid #5C6BC0;display:flex;align-items:center;gap:20px;box-shadow:0 2px 6px rgba(0,0,0,0.03);">
      <div style="width:48px;height:48px;border-radius:50%;background:#5C6BC0;color:#FFFFFF;font-family:'Montserrat',sans-serif;font-weight:900;font-size:22px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">03</div>
      <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:24px;color:#424242;">4 технических кейса из продакшена</div>
      <div style="font-family:'PT Serif',serif;font-style:italic;font-size:21px;color:#9E9E9E;margin-left:auto;">K8s · Dev · TTL · Пятница</div>
    </div>
    <div v-click="2" style="background:#F8F9FA;border-radius:14px;padding:22px 28px;border-left:6px solid #7E57C2;display:flex;align-items:center;gap:20px;box-shadow:0 2px 6px rgba(0,0,0,0.03);">
      <div style="width:48px;height:48px;border-radius:50%;background:#7E57C2;color:#FFFFFF;font-family:'Montserrat',sans-serif;font-weight:900;font-size:22px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">04</div>
      <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:24px;color:#424242;">ClickStack MCP</div>
      <div style="font-family:'PT Serif',serif;font-style:italic;font-size:21px;color:#9E9E9E;margin-left:auto;">AI-поиск по структурированным логам</div>
    </div>
    <div v-click="2" style="background:#F8F9FA;border-radius:14px;padding:22px 28px;border-left:6px solid #AB47BC;display:flex;align-items:center;gap:20px;box-shadow:0 2px 6px rgba(0,0,0,0.03);">
      <div style="width:48px;height:48px;border-radius:50%;background:#AB47BC;color:#FFFFFF;font-family:'Montserrat',sans-serif;font-weight:900;font-size:22px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">05</div>
      <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:24px;color:#424242;">Что заберете с собой</div>
      <div style="font-family:'PT Serif',serif;font-style:italic;font-size:21px;color:#9E9E9E;margin-left:auto;">SQL-схема, сниппеты, конфиги</div>
    </div>
  </div>
</div>

<!-- notes: Коротко о том, что обсудим. Сначала покажу боль в EFK и почему пришлось менять стек. Потом архитектура сбора логов на Vector и ClickHouse. Четыре технических кейса из реального продакшена. ClickStack MCP — как AI ищет логи. И в конце — что вы заберете с собой: SQL-схема, сниппеты Vector, конфиги Ansible, всё в открытом репозитории. -->
