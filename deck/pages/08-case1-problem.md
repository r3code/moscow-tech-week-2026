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
  <div aria-hidden="true" style="position:absolute;top:80px;right:70px;font-family:'Montserrat',sans-serif;font-weight:900;font-size:80px;color:#FFEBEE;letter-spacing:4px;z-index:1;opacity:0.6;pointer-events:none;line-height:1;">CASE 1</div>
  <PageBadge base="17" />
  <div style="padding:40px 70px 16px 70px;display:flex;align-items:center;justify-content:space-between;position:relative;">
    <div style="display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
      <div style="width:6px;height:70px;background:#EF5350;border-radius:3px;"></div>
      <div>
        <div style="font-family:'PT Serif',serif;font-style:italic;font-weight:700;font-size:21px;color:#C62828;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px;">ПРОБЛЕМА</div>
        <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:38px;color:#212121;line-height:1.05;">Стена аннотаций</div>
      </div>
    </div>
  </div>
  <div style="flex:1;padding:20px 70px 40px 70px;display:flex;flex-direction:column;gap:20px;position:relative;z-index:10;">
    <div style="display:flex;gap:16px;">
      <div style="flex:1;background:#FFFFFF;padding:22px 24px;border-radius:12px;box-shadow:0 4px 15px rgba(0,0,0,0.05);border-bottom:4px solid #EF5350;">
        <div style="font-family:'Inter',sans-serif;font-size:21px;color:#9E9E9E;text-transform:uppercase;letter-spacing:1px;">Лимит K8s</div>
        <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:42px;color:#212121;margin-top:6px;line-height:1;">63 chars</div>
        <div style="font-family:'Inter',sans-serif;font-size:18px;color:#C62828;margin-top:6px;">жёстко в API</div>
      </div>
      <div style="flex:1;background:#FFFFFF;padding:22px 24px;border-radius:12px;box-shadow:0 4px 15px rgba(0,0,0,0.05);border-bottom:4px solid #FFA726;">
        <div style="font-family:'Inter',sans-serif;font-size:21px;color:#9E9E9E;text-transform:uppercase;letter-spacing:1px;">Контейнеров на под</div>
        <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:42px;color:#212121;margin-top:6px;line-height:1;">10</div>
        <div style="font-family:'Inter',sans-serif;font-size:18px;color:#BF360C;margin-top:6px;">×N аннотаций = рутина поддержки</div>
      </div>
      <div style="flex:1;background:#FFFFFF;padding:22px 24px;border-radius:12px;box-shadow:0 4px 15px rgba(0,0,0,0.05);border-bottom:4px solid #5C6BC0;">
        <div style="font-family:'Inter',sans-serif;font-size:21px;color:#9E9E9E;text-transform:uppercase;letter-spacing:1px;">Сервисов</div>
        <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:42px;color:#212121;margin-top:6px;line-height:1;">200+</div>
        <div style="font-family:'Inter',sans-serif;font-size:18px;color:#5C6BC0;margin-top:6px;">имена вида my-very-long-pretty-lovely-continer-name</div>
      </div>
    </div>
    <div style="background:#F5F7FA;color:#1A2A3A;border-radius:12px;padding:22px 26px;border-left:5px solid #EF5350;font-family:'JetBrains Mono',monospace;font-size:18px;line-height:1.6;">
      <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;color:#C62828;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">❌ 2 аннотации на контейнер — превышение лимита</div>
      <div><span style="color:#1565C0;font-weight:600;">metadata</span>:</div>
      <div>&nbsp;&nbsp;<span style="color:#1565C0;font-weight:600;">annotations</span>:</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="background:rgba(255,167,38,0.18);padding:1px 4px;border-radius:3px;color:#BF360C;">containers.vitech.team/my-very-long-pretty-lovely-continer-name.service_name</span>: <span style="color:#558B2F;">"billing-api"</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="background:rgba(255,167,38,0.18);padding:1px 4px;border-radius:3px;color:#BF360C;">containers.vitech.team/my-very-long-pretty-lovely-continer-name.unified_log_model</span>: <span style="color:#558B2F;">"true"</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6B7B8D;font-style:italic;"># 90+ символов — K8s отказывается применять манифест</span></div>
    </div>
  </div>
</div>

<!-- notes: Первый кейс. В Kubernetes ключ аннотации ограничен 63 символами. Когда у вас 200 сервисов и имена вида platform.billing.api.v2 — аннотация легко становится длиннее лимита. K8s просто отказывается применять манифест, и деплой ломается. -->
