<template>
  <div>
    <AppTable v-if="productList.length" />
    <div v-else>{{ $t('app.shoppingList.warning.emptyCart') }}</div>
  </div>
</template>

<script>
import AppTable from '../components/template/AppTable'
import ProductService from '../services/product'

export default {
  components: {
    AppTable,
  },
  data: () => ({
    productList: [],
  }),
  mounted() {
    console.log('>>> cart product list')
    ProductService.getCartProductList()
      .then(response => this.productList = response.data.items)
      .catch(() => console.log('Erro ao listar produtos do carrinho.'))
  },
}
</script>

<style lang="scss"></style>
