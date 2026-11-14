#!/usr/bin/env python3
"""Route test using data-slidev-no marker for the ACTIVE slide."""
import asyncio
from playwright.async_api import async_playwright

JS = '''() => {
    const el = document.querySelector(`[data-slidev-no="${location.pathname.match(/\\\\d+/)?.[0] ?? 1}"]`);
    if (!el) return null;
    const badge = el.querySelector('.page-badge .badge-num')?.textContent?.trim();
    const h1 = el.querySelector('.header-title')?.textContent?.trim() ?? el.querySelector('h1')?.textContent?.trim()?.slice(0, 50);
    const stamp = el.querySelector('.mtw-stamp')?.textContent?.trim();
    return { badge, h1, stamp };
}'''

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 720})
        for r in ['1', '2', '3', '4']:
            await page.goto(f'http://localhost:3039/{r}', wait_until='domcontentloaded')
            await page.wait_for_timeout(1800)
            info = await page.evaluate(JS)
            print(f'route /{r}:', info)
        await browser.close()

asyncio.run(main())
