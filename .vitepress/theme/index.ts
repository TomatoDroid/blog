// https://vitepress.dev/guide/custom-theme
import Layout from './components/Layout.vue'
import type { Theme } from 'vitepress'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import './style.css'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme

