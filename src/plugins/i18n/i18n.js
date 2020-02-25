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
                            productAlreadyAdded: 'Product already added with that amount. Change the quantity to update the existing order.',
                            updatedCartProduct: 'Updated cart product.',
                            productAddedCart: 'product added to cart.',
                        }
                    }
                },
                shoppingList: {
                    warning: {
                        error: {
                            removeProductCart: 'Error removing product from cart.',
                            listCartProducts: 'Error listing products in the cart.',
                        },
                        success: {
                            removeProductCart: 'Product removed from cart.',
                        },
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
                            productAlreadyAdded: 'Produto já adicionado com essa quantidade. Altere a quantidade para atualizar o pedido já existente.',
                            updatedCartProduct: 'Produto do carrinho atualizado.',
                            productAddedCart: 'Produto adicionado ao carrinho.',
                        }
                    }
                },
                shoppingList: {
                    warning: {
                        error: {
                            removeProductCart: 'Erro ao remover produto(s) do carrinho.',
                            listCartProducts: 'Erro ao listar produtos do carrinho.',
                        },
                        success: {
                            removeProductCart: 'Produto(s) removido(s) com sucesso.',
                        },
                        emptyCart: 'Carrinho encontra-se vazio.',
                    }
                }
            }
        }
    }
})