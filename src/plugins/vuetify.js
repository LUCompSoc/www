import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

/**
 * These colours are taken from the CSS logo.
 */
export const CompsocColours = {
  DarkBlue: '#289ebf',
  Blue: '#53b2cc',
  LightBlue: '#a9d9e5',
};

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: CompsocColours.Blue,
        secondary: CompsocColours.DarkBlue,
        accent: CompsocColours.LightBlue,
        // These colours are taken from https://vuetifyjs.com/en/styles/colors/
        error: colors.red.accent3,
        info: colors.blue,
        success: colors.green,
        warning: colors.orange,
      },
    },
  },
})
