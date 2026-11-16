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
  <PageBadge base="55" />
  <div style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:10;">
    <div style="width:6px;height:70px;background:#42A5F5;border-radius:3px;"></div>
    <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:32px;color:#212121;line-height:1.15;margin:0;">Ускорение Time-to-Market для наблюдаемости</h1>
  </div>
  <div style="flex:1;padding:20px 70px 40px 70px;display:flex;flex-direction:column;justify-content:center;position:relative;z-index:10;">
    <div style="background:#F8F9FA;border-radius:12px;overflow:hidden;box-shadow:0 4px 15px rgba(0,0,0,0.06);">
      <div style="display:grid;grid-template-columns:1.2fr 1fr 1.2fr;background:#42A5F5;color:#FFFFFF;font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;text-transform:uppercase;letter-spacing:1px;">
        <div style="padding:16px 22px;">Параметр</div>
        <div style="padding:16px 22px;">Было</div>
        <div style="padding:16px 22px;">Стало с Unified Log Pipeline</div>
      </div>
      <div style="display:flex;align-items:center;border-bottom:1px solid #E0E0E0;">
        <div style="flex:1.2;padding:18px 22px;display:flex;align-items:center;gap:12px;font-family:'Montserrat',sans-serif;font-weight:700;font-size:19px;color:#5C6BC0;"><FAIcon name="clock" :size="22" color="#5C6BC0" /> Время на подключение источника логов</div>
        <div style="flex:1;padding:18px 22px;font-family:'Inter',sans-serif;font-size:19px;color:#C62828;font-weight:600;">5 часов</div>
        <div style="flex:1.2;padding:18px 22px;font-family:'Inter',sans-serif;font-size:19px;color:#00796B;font-weight:600;">10 минут</div>
      </div>
      <div v-click="1" style="display:flex;align-items:center;border-bottom:1px solid #E0E0E0;">
        <div style="flex:1.2;padding:18px 22px;display:flex;align-items:center;gap:12px;font-family:'Montserrat',sans-serif;font-weight:700;font-size:19px;color:#5C6BC0;"><FAIcon name="user-cog" :size="22" color="#5C6BC0" /> Привлечение инженеров</div>
        <div style="flex:1;padding:18px 22px;font-family:'Inter',sans-serif;font-size:19px;color:#C62828;font-weight:600;">SRE+DevOps<br><span style="font-size:16px;color:#9E9E9E;font-weight:400;">вместе пишут VRL</span></div>
        <div style="flex:1.2;padding:18px 22px;font-family:'Inter',sans-serif;font-size:19px;color:#00796B;font-weight:600;">Не пишем<br><span style="font-size:16px;color:#9E9E9E;font-weight:400;">код генерируется</span></div>
      </div>
      <div v-click="2" style="display:flex;align-items:center;border-bottom:1px solid #E0E0E0;">
        <div style="flex:1.2;padding:18px 22px;display:flex;align-items:center;gap:12px;font-family:'Montserrat',sans-serif;font-weight:700;font-size:19px;color:#5C6BC0;"><FAIcon name="code-branch" :size="22" color="#5C6BC0" /> Сложность поддержки кода</div>
        <div style="flex:1;padding:18px 22px;font-family:'Inter',sans-serif;font-size:19px;color:#C62828;font-weight:600;">Ручной код ×N<br><span style="font-size:16px;color:#9E9E9E;font-weight:400;">каждый сервис — свой сниппет</span></div>
        <div style="flex:1.2;padding:18px 22px;font-family:'Inter',sans-serif;font-size:19px;color:#00796B;font-weight:600;">Одинаково<br><span style="font-size:16px;color:#9E9E9E;font-weight:400;">код одинаков для всех сервисов</span></div>
      </div>
      <div v-click="3" style="display:flex;align-items:center;">
        <div style="flex:1.2;padding:18px 22px;display:flex;align-items:center;gap:12px;font-family:'Montserrat',sans-serif;font-weight:700;font-size:19px;color:#5C6BC0;"><FAIcon name="bug" :size="22" color="#5C6BC0" /> Сопровождение и баги</div>
        <div style="flex:1;padding:18px 22px;font-family:'Inter',sans-serif;font-size:19px;color:#C62828;font-weight:600;">Расползание<br><span style="font-size:16px;color:#9E9E9E;font-weight:400;">опечатки копируются</span></div>
        <div style="flex:1.2;padding:18px 22px;font-family:'Inter',sans-serif;font-size:19px;color:#00796B;font-weight:600;">Единый код и тесты<br><span style="font-size:16px;color:#9E9E9E;font-weight:400;">(ULP)</span></div>
      </div>
    </div>
  </div>
</div>

<!-- notes: Побочный эффект. Раньше SRE копировал VRL-сниппет, тратил 5 часов. Сейчас в Unified Log Pipeline разработчик не пишет код — код генерируется одинаково для всех сервисов. Время: 10 минут. SRE освободился от рутины. -->
