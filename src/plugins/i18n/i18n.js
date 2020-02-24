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
                },
                product: {
                    warning: {
                        error: {
                            productList: 'Erro ao listar produtos.',
                            addProductCart: 'Error adding product to cart.',
                        },
                        success: {
                            addProductCart: 'Product was added to the cart.',
                        }
                    }
                },
                shoppingList: {
                    warning: {
                        error: {},
                        success: {},
                        emptyCart: 'Empty Cart.',
                    }
                }
            }
        },
        pt: {
            app: {
                name: 'Shop Right Now',
                navbar: {
                    products: 'Produtos',
                    cart: 'Carrinho',
                },
                product: {
                    warning: {
                        error: {
                            productList: 'Erro ao listar produtos.',
                            addProductCart: 'Erro ao adicionar produto ao carrinho.',
                        },
                        success: {
                            addProductCart: 'Produto foi adicionado ao carrinho.',
                        }
                    }
                },
                shoppingList: {
                    warning: {
                        error: {},
                        success: {},
                        emptyCart: 'Carrinho encontra-se vazio.',
                    }
                }
            }
        }
    }
})