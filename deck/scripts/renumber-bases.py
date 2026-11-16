#!/usr/bin/env python3
"""Renumber PageBadge base values after v-click changes.

Reads slides.md to get page order, counts max v-click value per page,
computes new base for each, updates base="N" attribute in each .md file.
"""
import re
import sys
from pathlib import Path

DECK = Path(__file__).resolve().parent.parent
SLIDES_MD = DECK / 'slides.md'
PAGES_DIR = DECK / 'pages'

# 1. Parse slides.md to get ordered list of page files
src = SLIDES_MD.read_text(encoding='utf-8')
page_files = re.findall(r'src:\s*\./pages/([^\s]+)', src)
print(f'Found {len(page_files)} page files in slides.md')

# 2. For each file, find max v-click value and current base
results = []
for fname in page_files:
    fpath = PAGES_DIR / fname
    if not fpath.exists():
        print(f'  MISSING: {fname}', file=sys.stderr)
        continue
    content = fpath.read_text(encoding='utf-8')
    # Find all v-click="N" values
    clicks = [int(m) for m in re.findall(r'v-click="(\d+)"', content)]
    max_click = max(clicks) if clicks else 0
    pages_produced = max_click + 1
    # Find current base (could be base="N" or num="N" for CaseNumber-style)
    base_match = re.search(r'base="(\d+)"', content)
    num_match = re.search(r'<PageBadge\s+num="(\d+)"', content)
    current_base = int(base_match.group(1)) if base_match else (int(num_match.group(1)) if num_match else None)
    results.append({
        'file': fname,
        'path': fpath,
        'content': content,
        'max_click': max_click,
        'pages': pages_produced,
        'current_base': current_base,
        'uses_num': num_match is not None and base_match is None,
    })

# 3. Compute new bases
new_base = 1
total_pages = 0
for r in results:
    r['new_base'] = new_base
    new_base += r['pages']
    total_pages += r['pages']

print(f'Total pages: {total_pages}')

# 4. Update files where base changed
changed = 0
for r in results:
    if r['current_base'] == r['new_base']:
        continue
    old = r['current_base']
    new = r['new_base']
    if r['uses_num']:
        r['path'].write_text(
            r['content'].replace(f'<PageBadge num="{old}"', f'<PageBadge num="{new}"'),
            encoding='utf-8',
        )
    else:
        r['path'].write_text(
            r['content'].replace(f'base="{old}"', f'base="{new}"'),
            encoding='utf-8',
        )
    print(f'  {r["file"]}: base {old} → {new} ({r["pages"]} pages)')
    changed += 1

print(f'\nUpdated {changed} files. Total pages: {total_pages}')

# 5. Update PageBadge default total in component
badge_component = DECK / 'components' / 'PageBadge.vue'
if badge_component.exists():
    bc = badge_component.read_text(encoding='utf-8')
    new_bc = re.sub(r'default: \d+', f'default: {total_pages}', bc)
    if new_bc != bc:
        old_match = re.search(r'default: (\d+)', bc)
        old_val = old_match.group(1) if old_match else '?'
        badge_component.write_text(new_bc, encoding='utf-8')
        print(f'Updated PageBadge.vue default total: {old_val} → {total_pages}')
    else:
        print(f'PageBadge.vue default total already {total_pages}')
