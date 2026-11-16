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
  <PageBadge base="53" />
  <div style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
    <div style="width:6px;height:70px;background:#42A5F5;border-radius:3px;"></div>
    <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:32px;color:#212121;line-height:1.15;margin:0;">Ускорение Time-to-Market для наблюдаемости</h1>
  </div>
  <div class="s42-compare-area">
    <div class="s42-col-headers">
      <div class="s42-col-header left">Было</div>
      <div class="s42-col-header right">Сейчас (Unified Log Pipeline)</div>
    </div>
    <div class="s42-compare-row">
      <div class="s42-side-left">
        <span class="s42-keyword left">5 часов</span>
      </div>
      <div class="s42-side-right">
        <span class="s42-keyword right">10 минут</span>
      </div>
      <div class="s42-dimension-circle">
        <FAIcon name="clock" :size="24" color="#00796B" />
        <div class="s42-label">На новый<br>источник</div>
      </div>
    </div>
    <div v-click="1" class="s42-compare-row">
      <div class="s42-side-left">
        <span class="s42-keyword left">SRE+DevOps</span>
        <span class="s42-desc left">вместе пишут VRL</span>
      </div>
      <div class="s42-side-right">
        <span class="s42-keyword right">Не пишем</span>
        <span class="s42-desc right">код генерируется</span>
      </div>
      <div class="s42-dimension-circle">
        <FAIcon name="user-cog" :size="24" color="#00796B" />
        <div class="s42-label">Кто пишет</div>
      </div>
    </div>
    <div v-click="2" class="s42-compare-row">
      <div class="s42-side-left">
        <span class="s42-keyword left">Ручной код ×N</span>
        <span class="s42-desc left">каждый сервис — свой сниппет</span>
      </div>
      <div class="s42-side-right">
        <span class="s42-keyword right">Одинаково</span>
        <span class="s42-desc right">код одинаков для всех сервисов</span>
      </div>
      <div class="s42-dimension-circle">
        <FAIcon name="code-branch" :size="24" color="#00796B" />
        <div class="s42-label">Поддержка</div>
      </div>
    </div>
    <div v-click="3" class="s42-compare-row">
      <div class="s42-side-left">
        <span class="s42-keyword left">Расползание</span>
        <span class="s42-desc left">опечатки копируются</span>
      </div>
      <div class="s42-side-right">
        <span class="s42-keyword right">Единый код и тесты</span>
        <span class="s42-desc right">(ULP)</span>
      </div>
      <div class="s42-dimension-circle">
        <FAIcon name="bug" :size="24" color="#00796B" />
        <div class="s42-label">Баги</div>
      </div>
    </div>
  </div>
</div>

<!-- notes: Побочный эффект. Раньше SRE копировал VRL-сниппет, тратил 5 часов. Сейчас в Unified Log Pipeline разработчик не пишет код — код генерируется одинаково для всех сервисов. Время: 10 минут. SRE освободился от рутины. -->
