#!/usr/bin/env node
// Generates public/version.json: version = v{short-sha}_{YYYYMMDD}
// Date: UTC. SHA: git rev-parse --short HEAD. Fallback sha: "nogit".
import { execSync } from 'node:child_process'
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const date = new Date().toISOString().slice(0, 10).replaceAll('-', '')

let sha = 'nogit'
try {
  sha = execSync('git rev-parse --short HEAD', { cwd: root, encoding: 'utf8' }).trim()
} catch {
  console.warn('[gen-version] git unavailable, using sha="nogit"')
}

const version = `v${sha}_${date}`
mkdirSync(resolve(root, 'public'), { recursive: true })
const file = resolve(root, 'public/version.json')
writeFileSync(file, JSON.stringify({ version, sha, date }, null, 2) + '\n')
console.log(`[gen-version] ${file} -> ${version}`)

// --check: fail CI if version.json is stale relative to HEAD
if (process.argv.includes('--check')) {
  if (!existsSync(file)) { console.error('[gen-version] version.json missing'); process.exit(1) }
  const cur = JSON.parse(readFileSync(file, 'utf8'))
  if (cur.version !== version) { console.error(`[gen-version] stale: ${cur.version} != ${version}`); process.exit(1) }
}
