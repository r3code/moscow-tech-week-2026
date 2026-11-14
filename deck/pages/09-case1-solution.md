---
layout: content
canvasWidth: 1280
aspectRatio: 16/9
transition: none
drawings: false
lineNumbers: false
---

<div class="mtw-slide" style="background:#FFFFFF;flex-direction:column;position:relative;">
  <div class="grid-pattern" aria-hidden="true"></div>
  <div aria-hidden="true" style="position:absolute;top:80px;right:70px;font-family:'Montserrat',sans-serif;font-weight:900;font-size:80px;color:#E0F2F1;letter-spacing:4px;z-index:1;opacity:0.6;pointer-events:none;line-height:1;">CASE 1</div>
  <PageBadge base="14" />
  <div style="padding:40px 70px 16px 70px;display:flex;align-items:center;justify-content:space-between;position:relative;">
    <div style="display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
      <div style="width:6px;height:70px;background:#4DB6AC;border-radius:3px;"></div>
      <div>
        <div style="font-family:'PT Serif',serif;font-style:italic;font-weight:700;font-size:21px;color:#00796B;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px;">РЕШЕНИЕ</div>
        <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.05;">Namespace labels</div>
      </div>
    </div>
  </div>
  <div style="flex:1;padding:20px 70px 40px 70px;display:flex;flex-direction:column;gap:20px;position:relative;z-index:10;">
    <div style="display:flex;gap:20px;flex:1;">
      <div style="flex:1;background:#FFFFFF;border-radius:14px;padding:22px 24px;box-shadow:0 6px 16px rgba(0,0,0,0.06);display:flex;flex-direction:column;gap:12px;border-left:5px solid #EF5350;">
        <div style="display:flex;align-items:center;gap:12px;">
          <FAIcon name="times" :size="26" color="#C62828" />
          <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;color:#C62828;">Было</div>
        </div>
        <div style="background:#F5F5F5;padding:12px 14px;border-radius:6px;font-family:'JetBrains Mono',monospace;font-size:18px;color:#546E7A;line-height:1.6;">
          <div><span style="color:#C62828;">containers.vitech.team/my-very-long-pretty-lovely-continer-name.service_name</span></div>
          <div style="color:#9E9E9E;"># 90+ char — overflow</div>
        </div>
      </div>
      <div style="flex:1;background:#FFFFFF;border-radius:14px;padding:22px 24px;box-shadow:0 6px 16px rgba(0,0,0,0.06);display:flex;flex-direction:column;gap:12px;border-left:5px solid #4DB6AC;">
        <div style="display:flex;align-items:center;gap:12px;">
          <FAIcon name="check" :size="26" color="#00796B" />
          <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;color:#00796B;">Стало</div>
        </div>
        <div style="background:#F5F5F5;padding:12px 14px;border-radius:6px;font-family:'JetBrains Mono',monospace;font-size:18px;color:#546E7A;line-height:1.6;">
          <div><span style="color:#00796B;">tags.vitech.team/service_name</span></div>
          <div style="color:#9E9E9E;"># 31 char — валиден</div>
        </div>
      </div>
    </div>
    <div style="background:#E0F2F1;border-radius:12px;padding:22px 26px;border-left:6px solid #4DB6AC;display:flex;align-items:center;gap:16px;">
      <FAIcon name="bolt" :size="30" color="#00796B" />
      <div v-click="1" style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;color:#424242;">Одна правка для всех сервисов в namespace</div>
    </div>
  </div>
</div>

<!-- notes: Решение — namespace labels. Поле tags.vitech.team/service_name — 31 символ, валидно по схеме K8s. Одна правка в namespace применяется ко всем сервисам в нём. -->
