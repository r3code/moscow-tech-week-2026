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
  <PageBadge base="13" />
  <div style="padding:40px 70px 16px 70px;display:flex;align-items:center;gap:22px;position:relative;z-index:5;">
    <div style="width:6px;height:70px;background:#42A5F5;border-radius:3px;"></div>
    <div style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:42px;color:#212121;line-height:1.05;">Архитектура сбора логов</div>
  </div>
  <div style="flex:1;padding:20px 70px 40px 70px;display:flex;align-items:center;justify-content:center;position:relative;z-index:5;">
    <img src="/images/logging-architecture.jpg" alt="Архитектура сбора логов — Vector Agent → Kafka → Vector Aggregator → ClickHouse · 3 ЦОД" style="max-width:100%;max-height:540px;width:auto;height:auto;object-fit:contain;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
  </div>
</div>

<!-- notes: Kafka здесь не для моды, а для гарантии доставки. Vector Agent стоит на каждой ноде и делает грязную работу: читает файлы, парсит, добавляет metadata. Vector Aggregator делает тяжёлую трансформацию через VRL и решает TTL. ClickHouse хранит и сжимает, давая сжатие 10–20x по сравнению с Elastic. Три ЦОД означают, что при отказе одного дата-центра логи продолжают писаться через два других. Конкретные цифры по доставке — на слайде эффектов ближе к концу. -->
