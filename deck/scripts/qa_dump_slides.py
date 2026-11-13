#!/usr/bin/env python3
"""Dump all mounted slides with their no, layout, badge, first heading."""
import asyncio
import json
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 720})
        await page.goto('http://localhost:3039/2', wait_until='domcontentloaded')
        await page.wait_for_timeout(3000)
        info = await page.evaluate('''() => {
            const out = [];
            document.querySelectorAll('[data-slidev-no]').forEach(el => {
                out.push({
                    no: el.getAttribute('data-slidev-no'),
                    layout: el.className?.slice(0, 80),
                    badge: el.querySelector('.page-badge .badge-num')?.textContent?.trim() ?? null,
                    h1: el.querySelector('h1')?.textContent?.trim()?.slice(0, 55) ?? null,
                    hasStamp: !!el.querySelector('.mtw-stamp'),
                    hasCase: !!el.querySelector('.mtw-case'),
                    hasGrid: !!el.querySelector('.effects-grid'),
                    hasPre: !!el.querySelector('pre'),
                });
            });
            return out;
        }''')
        print(json.dumps(info, indent=1))
        await browser.close()

asyncio.run(main())
