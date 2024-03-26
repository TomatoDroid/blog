import { defineConfig, presetUno, presetTypography, presetAttributify,presetIcons, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
    presetTypography()
  ],
  shortcuts: {
    'link': ' text-color-[--vp-c-indigo-1] hover:text-color-[--vp-c-indigo-2] dark:text-color-[--vp-c-indigo-1] dark:hover:text-color-[--vp-c-indigo-2]',
    'text-base': 'text-#1c1e21  dark:text-#e6e6e6',
    'head-base': 'text-#1c1e21 dark:text-#ffcc66'
  },
  transformers: [
    transformerDirectives()
  ]
})
