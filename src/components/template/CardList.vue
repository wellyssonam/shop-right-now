<template>
  <div class="card-list">
    <b-row>
      <Card
        :product="product"
        v-for="(product, index) in products"
        :key="index"
      />
    </b-row>
  </div>
</template>

<script>
import Card from './Card'

export default {
  components: { Card },
  data: () => ({
    productList: [],
  }),
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss"></style>
