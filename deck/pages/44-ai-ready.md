---
layout: content
canvasWidth: 1280
aspectRatio: 16/9
transition: none
drawings: false
lineNumbers: false
---

<div class="mtw-slide" style="background:#FFFFFF;flex-direction:row;">
  <div class="s44-image-section">
    <img src="/images/ai-dashboard.jpg" alt="AI dashboard">
    <div class="s44-overlay-gradient" aria-hidden="true"></div>
    <div class="s44-decorative-shape" aria-hidden="true"></div>
    <div class="s44-img-caption">
      <div class="s44-cap-1">OTel Logs Data Model</div>
      <div class="s44-cap-2">Поиск логов через ClickStack MCP</div>
    </div>
  </div>
  <div style="flex:1;padding:50px 60px 50px 50px;display:flex;flex-direction:column;justify-content:center;background:#FFFFFF;position:relative;">
    <div style="margin-bottom:22px;display:flex;align-items:center;gap:22px;">
      <div style="width:6px;height:70px;background:#7E57C2;border-radius:3px;"></div>
      <div>
        <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:36px;color:#212121;line-height:1.15;margin:0;">AI-Ready Observability</h1>
        <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:24px;color:#757575;margin-top:6px;">ClickStack MCP</div>
      </div>
    </div>
    <div class="s44-note-card">
      <FAIcon name="info-circle" :size="22" color="#7E57C2" />
      <div class="s44-note-text">Поиск логов стал возможен за счёт стандартизации OTel + ClickStack</div>
    </div>
    <div class="s44-driver-list">
      <div v-click="1" class="s44-driver-card">
        <div class="s44-dc-head">
          <FAIcon name="broom" :size="24" color="#C62828" />
          <h4>Было: неструктурированный хаос</h4>
        </div>
        <p>Каждый сервис пишет логи в своём формате.</p>
      </div>
      <div v-click="2" class="s44-driver-card">
        <div class="s44-dc-head">
          <FAIcon name="project-diagram" :size="24" color="#1565C0" />
          <h4>Стало: OTel Logs Data Model</h4>
        </div>
        <p>Единая схема для 200+ сервисов: Body, Attributes, Resource.</p>
      </div>
      <div v-click="3" class="s44-driver-card">
        <div class="s44-dc-head">
          <FAIcon name="robot" :size="24" color="#7E57C2" />
          <h4>ClickStack MCP</h4>
        </div>
        <p>LLM строит SQL к полям Attributes. Time-to-insight: секунды вместо минут grep.</p>
      </div>
    </div>
  </div>
  <PageBadge base="46" style="top:22px;right:30px;" />
</div>

<!-- notes: AI-Ready Observability — официальный MCP-сервер. Поиск логов стал возможен за счёт стандартизации OTel и применения ClickStack как средства просмотра логов. ClickStack знает схему OTel и строит SQL-запросы по полям Attributes и Resource. MCP-ассистент строит запрос вида SELECT body FROM logs WHERE resource.service_name = 'X'. Не угадывает поля, потому что схема формально описана. -->
