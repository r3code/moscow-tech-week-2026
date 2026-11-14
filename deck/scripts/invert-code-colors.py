#!/usr/bin/env python3
"""Invert dark code-block colors to light palette in page .md files.

Replaces inline <pre> styles + span color values that were tuned for
dark background (#0F2942) to a light-background palette (#F5F7FA).
"""
import re
from pathlib import Path

PAGES = Path(__file__).resolve().parent.parent / 'pages'

# Mapping: dark → light palette (used inside <pre> code blocks)
REPLACEMENTS = [
    # <pre> background + base text color
    ('background:#0F2942;color:#E3F2FD', 'background:#F5F7FA;color:#1A2A3A'),
    ('background:#0F2942;color:#E3F2FD;', 'background:#F5F7FA;color:#1A2A3A;'),
    # standalone bg/color occurrences inside pre style attrs
    ('background:#0F2942;', 'background:#F5F7FA;'),
    ('color:#E3F2FD;', 'color:#1A2A3A;'),
    ('color:#E3F2FD"', 'color:#1A2A3A"'),
    # box-shadow: lighten (was for dark bg, too heavy on light)
    ('rgba(15,41,66,0.30)', 'rgba(15,41,66,0.10)'),
    ('rgba(15,41,66,0.25)', 'rgba(15,41,66,0.08)'),
    ('rgba(15,41,66,0.20)', 'rgba(15,41,66,0.08)'),
    # span color tokens (dark-bg palette → light-bg palette)
    ('color:#82B1FF', 'color:#1565C0'),   # keyword: light blue → dark blue
    ('color:#80DEEA', 'color:#00796B'),   # function: light teal → dark teal
    ('color:#90A4AE', 'color:#6B7B8D'),   # comment/prompt: light gray → darker gray
    ('color:#C5E1A5', 'color:#558B2F'),   # string: light green → dark green
    ('color:#FFD54F', 'color:#F57F17'),   # number: light amber → dark amber
    ('color:#FFE082', 'color:#BF360C'),   # highlight text: light yellow → dark amber
    # terminal dots title color (lsof/df slides)
    ('color:#9FA8DA', 'color:#5C6BC0'),
]

# Spans that should NOT be touched (already dark, work on light bg too):
# - color:#C62828 (red errors)
# - color:#BF360C (dark amber highlight)
# - color:#00796B (dark teal — already in light palette)
# - color:#1565C0 (dark blue — already in light palette)

changed_files = []
for f in sorted(PAGES.glob('*.md')):
    src = f.read_text(encoding='utf-8')
    original = src
    # Only apply replacements to lines inside <pre> blocks (heuristic: whole file is fine
    # because these specific color tokens only appear in code contexts, but be careful
    # with decorative uses of #E3F2FD).
    for old, new in REPLACEMENTS:
        src = src.replace(old, new)
    if src != original:
        f.write_text(src, encoding='utf-8')
        changed_files.append(f.name)

print(f'Updated {len(changed_files)} files:')
for name in changed_files:
    print(f'  {name}')
