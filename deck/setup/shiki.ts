// MTW2026 Shiki theme — mtw2026-dark (legacy .code-block palette)
// bg #0F2942 / fg #E3F2FD / kw #82B1FF bold / str #C5E1A5 /
// num #FFD54F / com #90A4AE italic / fn #80DEEA
import { defineShikiSetup } from '@slidev/types'

const mtw2026Dark = {
  name: 'mtw2026-dark',
  type: 'dark',
  colors: {
    'editor.background': '#0F2942',
    'editor.foreground': '#E3F2FD',
  },
  settings: [
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#90A4AE', fontStyle: 'italic' } },
    { scope: ['string', 'string.quoted'], settings: { foreground: '#C5E1A5' } },
    { scope: ['constant.numeric'], settings: { foreground: '#FFD54F' } },
    { scope: ['keyword', 'keyword.operator', 'storage', 'storage.type'], settings: { foreground: '#82B1FF', fontStyle: 'bold' } },
    { scope: ['entity.name.function', 'support.function'], settings: { foreground: '#80DEEA' } },
    { scope: ['entity.name.tag'], settings: { foreground: '#82B1FF' } },
  ],
}

export default defineShikiSetup(() => ({
  theme: mtw2026Dark,
}))
