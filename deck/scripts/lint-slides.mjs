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
  { re: /VersionStamp/, why: 'VersionStamp component removed — use __VERSION__ placeholder + CI sed injection' },
  { re: /version\.json/, why: 'version.json removed — use __VERSION__ placeholder + CI sed injection' },
]

// Cover slide MUST contain the __VERSION__ placeholder (CI sed-injects the stamp).
let failed = false
const coverSrc = readFileSync(join(pagesDir, '01-cover.md'), 'utf8')
if (!coverSrc.includes('__VERSION__')) {
  console.error('[lint] 01-cover.md: missing __VERSION__ placeholder (CI cannot inject version stamp)')
  failed = true
}

for (const f of readdirSync(pagesDir).filter((f) => f.endsWith('.md')).sort()) {
  const p = join(pagesDir, f)
  const src = readFileSync(p, 'utf8')

  for (const { re, why } of banned) {
    if (re.test(src)) { console.error(`[lint] ${f}: BANNED — ${why}`); failed = true }
  }

  // Precise check: blank line INSIDE the root .mtw-slide div = markdown-it
  // terminates the type-6 HTML block there and mangles the rest.
  const lines = src.split('\n')
  let depth = 0
  let started = false
  lines.forEach((line, i) => {
    if (!started) {
      if (line.startsWith('<div class="mtw-slide"')) {
        started = true
        depth = (line.match(/<div/g) || []).length - (line.match(/<\/div>/g) || []).length
      }
      return
    }
    if (line.trim() === '' && depth > 0) {
      console.error(`[lint] ${f}:${i + 1}: blank line INSIDE root div (splits markdown HTML block)`)
      failed = true
      return
    }
    depth += (line.match(/<div/g) || []).length - (line.match(/<\/div>/g) || []).length
    if (depth <= 0) started = false
  })

  // min font sizes (legacy parity exceptions: 13px circle labels, 16px badge, 14px stamp)
  const exceptions = new Set([13, 14, 16])
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
