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
    'link': 'text-color-[#3eaf7c] hover:text-color-[#4abf8a]',
    'prose-base': 'prose dark:prose-white',
    'text-base': 'text-gray-900 dark:text-white'
  },
  transformers: [
    transformerDirectives()
  ]
})
