// MTW2026 deck setup: register components + load offline fonts.
// Fonts are bundled via @fontsource (NO Google Fonts CDN — sandbox/offline safe).
// Weights mirror legacy global.css @import list.
import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'
import '@fontsource/montserrat/900.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/pt-serif/400-italic.css'
import '@fontsource/pt-serif/700-italic.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import '@fontsource/jetbrains-mono/700.css'
import '../style.css'

import { defineAppSetup } from '@slidev/types'
import PageBadge from '../components/PageBadge.vue'
import CaseNumber from '../components/CaseNumber.vue'
import FAIcon from '../components/FAIcon.vue'
import StrikeWhen from '../components/StrikeWhen.vue'

export default defineAppSetup(({ app }) => {
  app.component('PageBadge', PageBadge)
  app.component('CaseNumber', CaseNumber)
  app.component('FAIcon', FAIcon)
  app.component('StrikeWhen', StrikeWhen)
})
