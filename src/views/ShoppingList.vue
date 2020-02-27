<template>
  <div class="srn-shopping-list">
    <CardList
      :products="productList"
      :landscape="true"
      v-if="productList.length"
    />
    <div v-else>{{ $t('app.shoppingList.warning.emptyCart') }}</div>
  </div>
</template>

<script>
import CardList from '@/components/template/CardList'
import ProductService from '../services/product'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  components: {
    CardList,
  },
  computed: {
    productList() {
      return this.getCartProductList()
    },
  },
  methods: {
    ...mapActions(['callAlertError']),
    ...mapMutations(['updateCartProductList', 'setPageLoading']),
    ...mapGetters(['getCartProductList']),
    getCartProductListSuccess(items) {
      this.updateCartProductList(items)
    },
    getCartProductListError() {
      this.updateCartProductList([])
      this.callAlertError({
        message: this.$t('app.shoppingList.warning.error.listCartProducts'),
        time: 3000,
      })
    },
  },
  mounted() {
    this.$store.state.menu = { showProducts: true, showCart: false }
    this.setPageLoading(true)
    ProductService.getCartProductList()
      .then(response => this.getCartProductListSuccess(response.data.items))
      .catch(() => this.getCartProductListError())
      .finally(() => this.setPageLoading(false))
  },
}
</script>

<style lang="scss"></style>
