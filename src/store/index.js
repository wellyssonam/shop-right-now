import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    totalAmountCart(state) {
      return state.products
        .map(p => p.product.price * p.quantity)
        .reduce((total, atual) => total + atual, 0)
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})
