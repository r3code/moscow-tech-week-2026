---
layout: content
canvasWidth: 1280
aspectRatio: 16/9
transition: none
drawings: false
lineNumbers: false
---

<div class="mtw-slide" style="background:#F8F9FA;">
  <div class="s28-grid-pattern"></div>
  <div class="s28-deco-circle" style="width:280px;height:280px;background:rgba(92,107,192,0.06);top:-100px;right:-80px;"></div>
  <div class="s28-deco-circle" style="width:160px;height:160px;background:rgba(77,182,172,0.06);bottom:-50px;left:-40px;"></div>
  <div class="s28-case-decor" aria-hidden="true">CASE 3</div>
  <PageBadge base="30" />
  <header style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
    <div style="width:6px;height:70px;background:#5C6BC0;border-radius:3px;flex-shrink:0;"></div>
    <div>
      <div style="font-family:'PT Serif',serif;font-style:italic;font-weight:700;font-size:20px;color:#5C6BC0;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;line-height:1;">CASE 3 · ПОТОК</div>
      <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">Как TTL попадает в ClickHouse</h1>
    </div>
  </header>
  <main style="flex:1;padding:20px 70px 40px 70px;display:flex;flex-direction:column;gap:20px;position:relative;z-index:10;">
    <div class="s28-flow-row">
      <div class="s28-stage-card s1">
        <FAIcon name="user" :size="28" color="#1565C0" />
        <div class="s28-stage-title">Разработчик</div>
        <div class="s28-stage-sub">пишет TTL в лог</div>
      </div>
      <FAIcon name="chevron-right" :size="24" color="#BDBDBD" />
      <div class="s28-stage-card s2">
        <FAIcon name="cogs" :size="28" color="#BF360C" />
        <div class="s28-stage-title">Vector Aggregator</div>
        <div class="s28-stage-sub">достаёт TTL из лога, валидация</div>
      </div>
      <FAIcon name="chevron-right" :size="24" color="#BDBDBD" />
      <div class="s28-stage-card s3">
        <FAIcon name="database" :size="28" color="#00796B" />
        <div class="s28-stage-title">ClickHouse</div>
        <div class="s28-stage-sub">пишет в поле LogTTL</div>
      </div>
    </div>
    <div v-click="1" class="s28-code-card"><span class="ttl-title">Поле в логе приложения (JSON)</span><span class="kw">{</span>
  <span class="str">"msg"</span>: <span class="str">"Store me for 14 days!"</span>,
  <span class="hl">"logging.vitech.team/ttl"</span>: <span class="str">"14d"</span>
<span class="kw">}</span>  <span class="com"># 2d · 4d · 7d · 14d · 30d · 180d</span></div>
    <div v-click="2" class="s28-info-row">
      <div class="s28-info-card c1">
        <FAIcon name="user-cog" :size="24" color="#1565C0" />
        <div class="s28-info-title">Ответственность</div>
        <div class="s28-info-text">на разработчиках сервиса</div>
      </div>
      <div class="s28-info-card c2">
        <FAIcon name="check-circle" :size="24" color="#BF360C" />
        <div class="s28-info-title">Валидация</div>
        <div class="s28-info-text">Vector агрегатор проверяет значения</div>
      </div>
      <div class="s28-info-card c3">
        <FAIcon name="chart-line" :size="24" color="#00796B" />
        <div class="s28-info-title">Мониторинг</div>
        <div class="s28-info-text">контролируем отклонения</div>
      </div>
    </div>
  </main>
</div>

<!-- notes: Как TTL попадает в ClickHouse. TTL — это поле в самом логе приложения, в JSON. Разработчик пишет: msg — текст сообщения, и logging.vitech.team/ttl — срок хранения. Допустимые значения: 2d, 4d, 7d, 14d, 30d, 180d. Ответственность за выбор срока — на разработчиках: они знают свой сервис. Риски контролируем двумя механизмами. Первый — валидация при приёме логов: Vector отбрасывает недопустимые значения. Второй — мониторинг: видим отклонения. -->
