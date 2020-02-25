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
  data: () => ({
    productList: [],
  }),
  mounted() {
    ProductService.getCartProductList()
      .then(response => (this.productList = response.data.items))
      .catch(() => console.log('Erro ao listar produtos do carrinho.'))
  },
}
</script>

<style lang="scss"></style>
