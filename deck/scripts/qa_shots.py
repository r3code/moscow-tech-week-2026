#!/usr/bin/env python3
"""QA screenshots of Slidev dev server: pilot slides at their click states."""
import asyncio
import sys
from playwright.async_api import async_playwright

BASE = 'http://localhost:3039'
OUT = '/home/z/my-project/mtw2026_repo/deck/qa'
SHOTS = [
    # (route, clicks, filename) — pilot slide order: 1 cover, 2 sql, 3 effects
    ('/1', 0, 'pilot_01_cover.png'),
    ('/2', 0, 'pilot_25_sql.png'),
    ('/3', 0, 'pilot_48_effects_base.png'),
    ('/3', 1, 'pilot_49_effects_revealed.png'),
]

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 720}, device_scale_factor=2)
        import os
        os.makedirs(OUT, exist_ok=True)
        for route, clicks, fname in SHOTS:
            url = f'{BASE}{route}?clicks={clicks}'
            await page.goto(url, wait_until='domcontentloaded')
            await page.wait_for_timeout(3500)
            await page.screenshot(path=f'{OUT}/{fname}')
            print('shot:', fname)
        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
