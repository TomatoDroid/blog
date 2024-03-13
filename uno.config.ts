import { defineConfig, presetUno, presetTypography, presetAttributify,presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography()
  ],
})
