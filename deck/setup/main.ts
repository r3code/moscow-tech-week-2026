// setup/main.ts — runs on Vue app init, before anything renders.
// Offline fonts: fontsource packages include latin + cyrillic subsets.
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'
import '@fontsource/montserrat/900.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/pt-serif/400-italic.css'
import '@fontsource/pt-serif/700-italic.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import '@fontsource/jetbrains-mono/700.css'
// FontAwesome 6.5.1 — same glyph set as the legacy CDN version
import '@fortawesome/fontawesome-free/css/all.min.css'

// Slidev 53 requires a default export from setup/main.ts
export default () => {}
