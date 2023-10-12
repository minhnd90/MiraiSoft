import { createVuetify, type ThemeDefinition, type VuetifyOptions } from 'vuetify'
import 'vuetify/styles'
// @ts-ignore
import colors from 'vuetify/lib/util/colors.mjs'

const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: colors.blue.accent3
  }
}
const vuetifyOptions: VuetifyOptions = {
  defaults: {
    VBtn: {
      class: 'text-none'
    }
  },
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 480,
      md: 920,
      lg: 1140,
      xl: 1600
    }
  },
  theme: {
    defaultTheme: 'light',
    themes: { light }
  }
}
const vuetify = createVuetify(vuetifyOptions)
export default vuetify
