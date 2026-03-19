import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#7C3AED',
        secondary: '#2563EB',
        accent: '#5B21B6',
        error: '#EF4444',
        info: '#2563EB',
        success: '#7C3AED',
        warning: '#F59E0B'
      }
    }
  }
})
