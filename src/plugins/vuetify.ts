import '@mdi/font/css/materialdesignicons.css'
import {
  createVuetify,
  type DisplayThresholds,
  type ThemeDefinition,
  type VuetifyOptions
} from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
// @ts-ignore
import colors from 'vuetify/lib/util/colors.mjs'

const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: colors.blue.accent3
  }
}
const thresholds: Partial<DisplayThresholds> = {
  xs: 0,
  sm: 480,
  md: 720,
  lg: 920,
  xl: 1440,
  xxl: 1600
}
const icons = {
  defaultSet: 'mdi',
  aliases,
  sets: { mdi }
}
const vuetifyOptions: VuetifyOptions = {
  display: { thresholds },
  theme: { themes: { light } },
  icons
}
export default createVuetify(vuetifyOptions)
