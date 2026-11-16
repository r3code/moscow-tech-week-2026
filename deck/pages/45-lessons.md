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
  <PageBadge base="59" />
  <div style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
    <div style="width:6px;height:80px;background:#42A5F5;border-radius:3px;"></div>
    <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:42px;color:#212121;line-height:1.15;margin:0;">Что мы выстрадали и внедрили</h1>
  </div>
  <div class="s45-content-area">
    <div class="s45-lead-line">Проверено на 800+ нод и 200+ сервисах.</div>
    <div class="s45-principles-row">
      <div v-click="1" class="s45-principle-card c1">
        <span class="s45-o-badge b1">01</span>
        <h3 class="s45-o-title">Централизуйте управление</h3>
        <div class="s45-kr-list">
          <div class="s45-kr-item">
            <FAIcon name="ban" :size="22" color="#1565C0" />
            <span>Никаких аннотаций на каждый контейнер</span>
          </div>
          <div class="s45-kr-item">
            <FAIcon name="folder-tree" :size="22" color="#1565C0" />
            <span>Управление через namespace labels</span>
          </div>
        </div>
      </div>
      <div v-click="2" class="s45-principle-card c2">
        <span class="s45-o-badge b2">02</span>
        <h3 class="s45-o-title">Защищайте инфру от логов</h3>
        <div class="s45-kr-list">
          <div class="s45-kr-item">
            <FAIcon name="file-alt" :size="22" color="#00796B" />
            <span>Блочное чтение<br><span class="mono">oldest_first: false, max_read_bytes: 16384</span></span>
          </div>
          <div class="s45-kr-item">
            <FAIcon name="tachometer-alt" :size="22" color="#00796B" />
            <span>Троттлинг на Vector Agent</span>
          </div>
        </div>
      </div>
      <div v-click="3" class="s45-principle-card c3">
        <span class="s45-o-badge b3">03</span>
        <h3 class="s45-o-title">Гибкое хранение</h3>
        <div class="s45-kr-list">
          <div class="s45-kr-item">
            <FAIcon name="clock" :size="22" color="#5C6BC0" />
            <span>Динамический TTL: 2/4/7/180 дней</span>
          </div>
          <div class="s45-kr-item">
            <FAIcon name="exclamation-triangle" :size="22" color="#5C6BC0" />
            <span><span class="mono">ttl_only_drop_parts = 0</span> обязательно</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- notes: Три принципа. Первый — централизуйте управление. Второй — защищайте инфраструктуру от самих логов. Третий — хранение должно быть гибким. Динамический TTL через аннотацию, встроенный в SQL-схему ClickHouse, с обязательным ttl_only_drop_parts=0. -->
