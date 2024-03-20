import { defineConfig, presetUno, presetTypography, presetAttributify,presetIcons, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
    presetTypography({
      cssExtend: {
        'code': {
          'color': '#d1e9ff',
          'background-color': '#3c3a5b',
        },
      }
    })
  ],
  shortcuts: {
    'link': ' text-color-#3451b2 hover:text-color-#6c757d dark:text-color-#66ccff dark:hover:text-color-#ff9933',
    'prose-base': 'prose dark:prose-white',
    'text-base': 'text-#1c1e21  dark:text-#e6e6e6',
    'head-base': 'text-#1c1e21 dark:text-#ffcc66'
  },
  transformers: [
    transformerDirectives()
  ]
})
