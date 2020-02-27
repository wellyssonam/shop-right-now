import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    alert: {
      message: '...',
      variantColor: 'primary',
      showAlert: false,
    },
    menu: {
      showProducts: false,
      showMCart: false,
    },
    pageLoading: false,
  },
  getters: {
    totalAmountCart(state) {
      return state.products
        .map(p => p.product.price * p.quantity)
        .reduce((total, atual) => total + atual, 0)
    },
    getCartProductList(state) {
      return state.products
    },
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product)
    },
    updateCartProductList(state, productList) {
      state.products = productList
    },
    callAlert(state, alert) {
      state.alert = alert
    },
    setPageLoading(state, isLoading) {
      state.pageLoading = isLoading
    },
  },
  actions: {
    addProduct(context, product) {
      context.commit('addProduct', product)
    },
    callAlertSuccess(context, alert) {
      let currentAlert = {
        message: alert.message,
        variantColor: 'success',
        showAlert: true,
      }
      context.commit('callAlert', currentAlert)
      setTimeout(() => {
        currentAlert.showAlert = false
        context.commit('callAlert', currentAlert)
      }, alert.time);
    },
    callAlertError(context, alert) {
      let currentAlert = {
        message: alert.message,
        variantColor: 'danger',
        showAlert: true,
      }
      context.commit('callAlert', currentAlert)
      setTimeout(() => {
        currentAlert.showAlert = false
        context.commit('callAlert', currentAlert)
      }, alert.time);
    },
  },
  modules: {},
})
