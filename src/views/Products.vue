<template>
  <div class="srn-products">
    <CardList :products="products" />
  </div>
</template>

<script>
import ProductService from '../services/product'
import CardList from '@/components/template/CardList'

// const productService = new ProductService();
export default {
  components: { CardList },
  data: () => ({
    products: [],
  }),
  mounted() {
    ProductService.list()
      .then(response => (this.products = response.data))
      .catch(() => console.log(this.$t('app.product.warning.error.productList')))
  },
}
</script>

<style lang="scss"></style>
