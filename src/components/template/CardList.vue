<template>
  <div class="card-list">
    <div v-if="landscape">
      <transition-group tag="div" enter-active-class="animated fadeInUp" appear>
        <CardLandscape
          :product="product"
          :key="`teste-${index}`"
          v-for="(product, index) in products"
        />
      </transition-group>

      <b-card class="card-list-landscape">
        <b-container fluid>
          <b-row>
            <b-col md="12">
              <div class="price">
                <span class="text">{{ $t('app.card.amount') }}</span>
                <span class="value">{{ totalAmountCart | currency }}</span>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </div>
    <div v-else>
      <b-row>
        <Card
          :product="product"
          :indexItem="index"
          :key="index"
          v-for="(product, index) in products"
        />
      </b-row>
    </div>
  </div>
</template>

<script>
import Card from './Card'
import CardLandscape from './CardLandscape'
import { mapGetters } from 'vuex'

export default {
  components: { Card, CardLandscape },
  data: () => ({
		productList: [],
  }),
	computed: {
		...mapGetters(['totalAmountCart']),
	},
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    landscape: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>

<style lang="scss">
.card-list-landscape {
  display: flex;
  height: auto;
  font-size: 16px;
  line-height: 26px;
  text-align: right;
  flex-direction: row;
  border-left: 7px solid #498a3e;
  .card-body {
    padding: 0px;
  }
  .container-fluid {
    border-left: 1px solid rgba(0, 0, 0, 0.125);
    padding: 15px 0px;
    .row {
      margin-left: 0px;
      margin-right: 0px;
      .price {
        font-size: 24px;
        font-weight: bold;
        .text {
          margin-right: 10px;
        }
        .value {
          color: #69c05b;
        }
      }
    }
  }
}

@media (max-width: 576px) {
}

@media (min-width: 577px) and (max-width: 768px) {
}

// Medium devices (tablets, 768px and up)
@media (min-width: 769px) and (max-width: 992px) {
}

// Large devices (desktops, 992px and up)
@media (min-width: 993px) and (max-width: 1200px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1201px) {
}
</style>
