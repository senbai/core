import store from '~/store'
import Laravel from './modules/Laravel'

export default {

    install: (Vue, options = {}) => {

        store.registerModule('Laravel', Laravel);

        store.dispatch('Laravel/initialize');

        Vue.mixin({

            methods: {

                route(name, args) {

                    return store.getters['Laravel/route'](name, args);

                },

                trans(string, args) {

                    return store.getters['Laravel/translate'](string, args);

                },

                __(string, args) {

                    return store.getters['Laravel/translate'](string, args);

                }

            }

        });

        // Laravel Echo Support
        window.Laravel = {

            csrfToken: window.csrfToken

        };

    }

};