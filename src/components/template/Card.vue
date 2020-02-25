<template>
  <b-col md="3" sm="6" xs="12">
    <div class="srn-card">
      <b-card
        no-body
        style="max-width: 20rem;"
        :img-src="product.imageURL"
        img-alt="Image"
        img-top
      >
        <b-card-body class="content">
          <b-card-text>
            {{ product.name }}
          </b-card-text>
        </b-card-body>

        <b-list-group>
          <b-list-group-item class="middle-content">
            <div class="quantity">
              <div class="text">Quantity:</div>
              <div class="value-buttons-content">
                <span class="value">{{ quantity }}</span>
                <b-button
                  size="sm"
                  variant="success"
                  class="mb-2 icon success"
                  :disabled="quantity === product.quantityAvailable"
                  @click="addQuantity()"
                >
                  <b-icon icon="plus" aria-hidden="true"></b-icon>
                </b-button>
                <b-button
                  size="sm"
                  variant="danger"
                  class="mb-2 icon danger"
                  :disabled="quantity === 1"
                  @click="deductQuantity()"
                >
                  <b-icon icon="dash" aria-hidden="true"></b-icon>
                </b-button>
              </div>
            </div>

            <div class="available">
              <div class="text">Available:</div>
              <div class="value">
                {{ product.quantityAvailable }}
              </div>
            </div>

            <div class="price">
              <div class="text">Price:</div>
              <div class="value">
                R$ {{ parseFloat(product.price).toFixed(2) }}
              </div>
            </div>

            <div class="amount">
              <div class="text">Amount:</div>
              <div class="value">
                R$ {{ parseFloat(product.price * quantity).toFixed(2) }}
              </div>
            </div>
          </b-list-group-item>
        </b-list-group>

        <b-card-body class="footer">
          <b-button variant="primary" @click="addProductCart()"
            >Adicionar</b-button
          >
        </b-card-body>
      </b-card>
    </div>
  </b-col>
</template>

<script>
import ProductService from '@/services/product'

export default {
  props: {
    product: {
      default: () => ({
        sku: '',
        name: '',
        imageURL: '',
        category: '',
        maker: '',
        quantityAvailable: 0,
        price: 0.0,
      }),
      type: Object,
    },
  },
  data: () => ({
    quantity: 1,
  }),
  methods: {
    addProductCart() {
      ProductService.insertProductCart({
        quantity: this.quantity,
        sku: this.product.sku,
      })
        .then(() =>
          console.log(this.$t('app.product.warning.success.addProductCart'))
        )
        .catch(() =>
          console.log(this.$t('app.product.warning.error.addProductCart'))
        )
    },
    addQuantity() {
      this.quantity++
    },
    deductQuantity() {
      this.quantity--
    },
  },
}
</script>

<style lang="scss" scope>
.srn-card {
  max-width: 100%;
  margin: 0px auto 20px auto;
  font-size: 14px;
  .card {
    max-width: unset !important;
    .card-body {
      padding: 10px;
      border-radius: 5px;
      &.content {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      &.footer {
        background: #343a40;
      }
    }
    .list-group {
      font-size: 18px;
    }
    .card-img-top {
      width: 90%;
      margin: 10px auto;
    }
    .middle-content {
      padding: 10px;
      border-radius: 0px;
      background: #f4f4f4a1;
      .price,
      .amount,
      .available {
        font-weight: bold;
        .value {
          color: #69c05b;
        }
      }
      .quantity {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        .value-buttons-content {
          display: flex;
          flex-direction: row;
          align-items: baseline;
          .value {
            font-size: 22px;
            margin-right: 10px;
            text-decoration: underline;
          }
        }
        .icon {
          color: #fff;
          font-size: 15px;
          padding: 0px;
          width: 25px;
          height: 25px;
          border-radius: 15px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-left: 5px;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .srn-card {
    font-size: 19px;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .srn-card {
    .card-body {
      &.content {
        height: 100px;
      }
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 769px) and (max-width: 992px) {
  .srn-card {
    .card-body {
      &.content {
        height: 100px;
      }
    }
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 993px) and (max-width: 1200px) {
  .srn-card {
    .card-body {
      &.content {
        height: 90px;
      }
    }
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1201px) {
  .srn-card {
    .card-body {
      &.content {
        height: 65px;
      }
    }
  }
}
</style>
