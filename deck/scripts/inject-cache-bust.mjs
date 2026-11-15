#!/usr/bin/env node
/**
 * Inject inline cache-bust script into dist/index.html.
 *
 * Problem: GitHub Pages serves HTML + JS assets with Cache-Control: max-age=600
 * (10 minutes). After a new deploy, old JS bundles (with old hash in filename)
 * are removed — users with cached HTML try to load missing JS → 404 → blank page.
 *
 * Fix: inline <script> in <head> catches script load errors and reloads with
 * ?v=<timestamp> (cache-bust query param). The script itself is tiny (< 500 bytes),
 * always present in cached HTML, fires only on asset 404.
 *
 * Usage: node scripts/inject-cache-bust.mjs [path/to/dist/index.html]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const target = process.argv[2]
  ? resolve(process.argv[2])
  : join(root, 'dist', 'index.html')

if (!existsSync(target)) {
  console.error(`[cache-bust] target not found: ${target}`)
  process.exit(1)
}

const CACHE_BUST_SCRIPT = `<script>window.addEventListener('error',function(e){if(e.target&&e.target.tagName==='SCRIPT'&&e.target.src&&e.target.src.includes('/assets/')){if(!location.search.includes('v=')){location.search='?v='+Date.now()}}},true);</script>`

const html = readFileSync(target, 'utf8')

if (html.includes('cache-bust-auto-reload')) {
  console.log(`[cache-bust] already injected, skipping: ${target}`)
  process.exit(0)
}

// Marker comment for idempotency
const marker = '<!-- cache-bust-auto-reload -->'
const inject = marker + CACHE_BUST_SCRIPT

let updated
if (html.includes('</head>')) {
  updated = html.replace('</head>', inject + '\n</head>')
} else if (html.includes('<body')) {
  updated = html.replace('<body', inject + '\n<body')
} else {
  // Fallback: prepend
  updated = inject + '\n' + html
}

writeFileSync(target, updated, 'utf8')
console.log(`[cache-bust] injected into ${target}`)
