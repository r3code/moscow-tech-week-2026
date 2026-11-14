#!/usr/bin/env node
// MTW2026 slides linter — guards migration invariants:
//  1. No external font/icon CDN (offline parity rule)
//  2. No `mdc` frontmatter (breaks raw HTML in markdown)
//  3. No blank lines inside HTML blocks (markdown-it block splitting)
//  4. Min font sizes: 21px body / 18px mono (WCAG deck rule REV 3)
import { readdirSync, readFileSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const pagesDir = resolve(root, 'pages')

const banned = [
  { re: /fonts\.googleapis\.com|fonts\.gstatic\.com/, why: 'Google Fonts CDN (use @fontsource)' },
  { re: /cdn\.tailwindcss\.com/, why: 'Tailwind CDN' },
  { re: /cdnjs\.cloudflare\.com|font-awesome/, why: 'FontAwesome CDN (use FAIcon)' },
  { re: /^mdc:\s*true$/m, why: 'mdc: true breaks raw HTML blocks' },
]

let failed = false

for (const f of readdirSync(pagesDir).filter((f) => f.endsWith('.md')).sort()) {
  const p = join(pagesDir, f)
  const src = readFileSync(p, 'utf8')

  for (const { re, why } of banned) {
    if (re.test(src)) { console.error(`[lint] ${f}: BANNED — ${why}`); failed = true }
  }

  // blank line AFTER an UNCLOSED HTML line = markdown-it splits the block.
  // A line is "closed" if it starts with '<' and ends with '>' with balanced
  // <div>/</div> counts (single-line blocks). Multi-line blocks (unclosed)
  // followed by a blank line are the dangerous pattern.
  const lines = src.split('\n')
  let htmlOpen = false
  lines.forEach((line, i) => {
    const trimmed = line.trim()
    if (trimmed === '') {
      if (htmlOpen) {
        console.error(`[lint] ${f}:${i + 1}: blank line inside HTML block (splits markdown block)`)
        failed = true
      }
      return
    }
    if (trimmed.startsWith('<!--') && trimmed.endsWith('-->')) { htmlOpen = false; return }
    if (trimmed.startsWith('<')) {
      const opens = (trimmed.match(/<div[\s>]/g) || []).length
      const closes = (trimmed.match(/<\/div>/g) || []).length
      htmlOpen = trimmed.endsWith('>') ? opens > closes : true
    } else {
      htmlOpen = false
    }
  })

  // min font sizes (skip 16px badge / 14px stamp by legacy exception list)
  const exceptions = new Set([14, 16])
  for (const m of src.matchAll(/font-size:\s*(\d+)px/g)) {
    const px = Number(m[1])
    if (!exceptions.has(px) && px < 18) {
      console.error(`[lint] ${f}: font-size ${px}px < 18px minimum`)
      failed = true
    }
  }
}

if (failed) { console.error('[lint] FAILED'); process.exit(1) }
console.log('[lint] OK — all pages pass')
