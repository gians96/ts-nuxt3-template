// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const myCustomLightTheme = {
    dark: false,
    colors: {
        background: '#bff7de',
        surface: '#FFFFFF',
        primary: '#06d69e',
        'primary-darken-1': '#3700B3',
        'primary-darken-2': '#00E676',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives, theme: {
            defaultTheme: 'myCustomLightTheme',
            themes: {
                myCustomLightTheme
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})