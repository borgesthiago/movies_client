import Vue from 'vue'

import VueI18 from 'vue-i18n'

Vue.use(VueI18)

export const i18n = new VueI18({
    locale: 'en',
    fallbackLocale: 'pt',
    messages: {
        en: {
            title: 'Movie Search',
            search: 'Search',
            body: 'Results'
        },
        pt: {
            title: 'Pesquisar Filmes',
            search: 'Procurar',
            body: 'Resultados',
        }
    }
})

