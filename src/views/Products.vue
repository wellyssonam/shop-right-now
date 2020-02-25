<template>
  <div class="srn-products">
    <CardList :products="products" />
  </div>
</template>

<script>
import ProductService from '../services/product'
import CardList from '@/components/template/CardList'
import axios from 'axios'

// const productService = new ProductService();
export default {
  components: { CardList },
  data: () => ({
    products: [],
  }),
  methods: {
    fetchProducts(products, items) {
      this.products = products;
      this.$store.state.products = items
    }
  },
  mounted() {
    axios
      .all([ProductService.list(), ProductService.getCartProductList()])
      .then(response => this.fetchProducts(response[0].data, response[1].data.items))
      .catch(() =>
        console.log(this.$t('app.product.warning.error.productList'))
      )
  },
}
</script>

<style lang="scss"></style>
