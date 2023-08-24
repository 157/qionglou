import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './index.dark.css'
import { inBrowser, useData } from 'vitepress'
import { watchEffect } from 'vue'
// @ts-ignore
import Editor from '../src/editor/editor.vue'

export default {
  ...DefaultTheme,
  Layout: {
    ...DefaultTheme.Layout
  },
  enhanceApp({ app }: { app: any }) {
    // ...
    app.component('Editor', Editor)
  },
  setup() {
    const { lang } = useData()
    watchEffect(() => {
      if (inBrowser) {
        document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
      }
    })
  }
}
