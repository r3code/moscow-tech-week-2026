---
layout: content
canvasWidth: 1280
aspectRatio: 16/9
transition: none
drawings: false
lineNumbers: false
---

<div class="mtw-slide" style="background:#F8F9FA;">
  <div class="s40-grid-pattern"></div>
  <div class="s40-deco-circle" style="width:280px;height:280px;background:rgba(77,182,172,0.05);top:-90px;left:-90px;"></div>
  <div class="s40-deco-circle" style="width:200px;height:200px;background:rgba(92,107,192,0.05);bottom:-60px;right:-60px;"></div>
  <div aria-hidden="true" style="position:absolute;top:30px;right:70px;font-family:'Montserrat',sans-serif;font-weight:900;font-size:80px;color:#E0F2F1;opacity:0.6;z-index:1;line-height:1;pointer-events:none;">CASE 4</div>
  <PageBadge base="46" />
  <header style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
    <div style="width:6px;height:70px;background:#4DB6AC;border-radius:3px;flex-shrink:0;"></div>
    <div>
      <div style="font-family:'PT Serif',serif;font-style:italic;font-weight:700;font-size:20px;color:#00796B;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;line-height:1;">CASE 4 · ХОТФИКС</div>
      <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.1;margin:0;">40 минут + upstream</h1>
    </div>
  </header>
  <main style="flex:1;padding:20px 70px 40px 70px;display:flex;flex-direction:column;gap:20px;position:relative;z-index:10;">
    <div class="s40-row">
      <div class="s40-case-card s40-card-hotfix">
        <div class="s40-card-head">
          <FAIcon name="bolt" :size="28" color="#00796B" />
          <div class="s40-card-head-title">01:00 — Хотфикс</div>
        </div>
        <div class="s40-feature-list">
          <div class="s40-feature-item"><FAIcon name="wrench" :size="21" color="#00796B" /><span>Ограничили год 4 цифрами</span></div>
          <div class="s40-feature-item"><FAIcon name="clock" :size="21" color="#00796B" /><span>40 минут на фикс</span></div>
          <div class="s40-feature-item"><FAIcon name="shield-alt" :size="21" color="#00796B" /><span>Prod снова пишет логи</span></div>
        </div>
      </div>
      <div v-click="1" class="s40-case-card s40-card-upstream">
        <div class="s40-card-head">
          <FAIcon name="code-branch" :size="28" color="#5C6BC0" />
          <div class="s40-card-head-title">Upstream</div>
        </div>
        <div class="s40-feature-list">
          <div class="s40-feature-item"><FAIcon name="bug" :size="21" color="#5C6BC0" /><span>Репорт в upstream Vector</span></div>
          <div class="s40-feature-item"><FAIcon name="check-double" :size="21" color="#5C6BC0" /><span>Пофикшено в v0.44</span></div>
          <div class="s40-feature-item"><FAIcon name="globe" :size="21" color="#5C6BC0" /><span>Помогли всем пользователям</span></div>
        </div>
      </div>
    </div>
    <div v-click="1" class="s40-lesson-card">
      <FAIcon name="graduation-cap" :size="28" color="#5C6BC0" />
      <div class="s40-lesson-text">Снижение операционных рисков — это не только закрыть у себя, но и предотвратить у всех.</div>
    </div>
  </main>
</div>

<!-- notes: Хотфикс за 40 минут — ограничили год 4 цифрами. Параллельно написали репорт в upstream, и проблема была пофикшена в версии 0.44. Это и есть настоящее снижение операционных рисков: не просто закрыть у себя, а предотвратить у всех. -->
