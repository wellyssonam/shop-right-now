import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'pt',
    fallbackLocale: 'pt',
    messages: {
        en: {
            app: {
                name: 'Shop Right Now',
                navbar: {
                    products: 'Products',
                    cart: 'Cart',
                }
            }
        },
        pt: {
            app: {
                name: 'Shop Right Now',
                navbar: {
                    products: 'Produtos',
                    cart: 'Carrinho',
                }
            }
        }
    }
})