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

export default {
  components: {
    CardList,
  },
  computed: {
    productList() {
      return this.$store.state.products
    }
  },
  methods: {
    getCartProductListSuccess(items) {
      this.$store.state.products = items;
    }
  },
  mounted() {
    ProductService.getCartProductList()
      .then(response => this.getCartProductListSuccess(response.data.items))
      .catch(() => console.log(this.$t('app.shoppingList.warning.error.listCartProducts')))
  },
}
</script>

<style lang="scss"></style>
