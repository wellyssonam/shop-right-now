<template>
  <div class="srn-products">
    <CardList :products="products" />
  </div>
</template>

<script>
import ProductService from '../services/product'
import CardList from '@/components/template/CardList'
import axios from 'axios'
import { mapMutations, mapActions } from 'vuex'

// const productService = new ProductService();
export default {
  components: { CardList },
  data: () => ({
    products: [],
  }),
  methods: {
    ...mapActions(['callAlertError']),
    ...mapMutations(['updateCartProductList', 'setPageLoading']),
    fetchProducts(products, items) {
      this.products = products
      this.updateCartProductList(items)
    },
  },
  mounted() {
    this.$store.state.menu = { showProducts: false, showCart: true }
    this.setPageLoading(true)
    axios
      .all([ProductService.list(), ProductService.getCartProductList()])
      .then(response =>
        this.fetchProducts(response[0].data, response[1].data.items)
      )
      .catch(() =>
        this.callAlertError({
          message: this.$t('app.product.warning.error.productList'),
          time: 3000,
        })
      )
      .finally(() => this.setPageLoading(false))
  },
}
</script>

<style lang="scss"></style>
