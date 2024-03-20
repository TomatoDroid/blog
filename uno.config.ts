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
    'link': 'text-color-#66ccff hover:text-color-#ff9933 dark:text-color-#dc3545 hover:dark:text-color-#6c757d ',
    'prose-base': 'prose dark:prose-white',
    'text-base': 'text-#333333  dark:text-#e6e6e6',
    'head-base': 'text-#0077b6 dark:text-#ffcc66'
  },
  transformers: [
    transformerDirectives()
  ]
})
