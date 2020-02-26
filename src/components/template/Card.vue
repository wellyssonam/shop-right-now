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

        <div ref="middle-content-footer">
          <div
            class="warning-message"
            :class="{ start: warningMessageHeight > 0 }"
            :style="{ height: `${warningMessageHeight}px` }"
            v-if="warningMessageHeight > 0"
          >
            <b-button
              size="sm"
              variant="dark"
              class="mb-2 btn-small-icon warning-close"
              @click="warningMessageHeight = 0"
            >
              <b-icon icon="x" aria-hidden="true"></b-icon>
            </b-button>

            <div
              class="warning-content"
              :style="{ height: `${warningMessageHeight}px` }"
            >
              <div class="message" v-if="product.quantityAvailable === 0">
                {{ $t('app.card.warning.outOfStock') }}
              </div>
              <div class="message" v-else>
                {{ $t('app.card.warning.latestUnits') }}
              </div>
            </div>
          </div>

          <b-list-group>
            <b-list-group-item class="middle-content">
              <div class="quantity">
                <div class="text">{{ $t('app.card.quantity') }}</div>
                <div class="value-buttons-content">
                  <span class="value">{{ quantity }}</span>
                  <b-button
                    size="sm"
                    variant="success"
                    class="mb-2 btn-small-icon success"
                    :disabled="
                      quantity === product.quantityAvailable ||
                        product.quantityAvailable === 0
                    "
                    @click="addQuantity()"
                  >
                    <b-icon icon="plus" aria-hidden="true"></b-icon>
                  </b-button>
                  <b-button
                    size="sm"
                    variant="danger"
                    class="mb-2 btn-small-icon danger"
                    :disabled="
                      quantity === 1 || product.quantityAvailable === 0
                    "
                    @click="deductQuantity()"
                  >
                    <b-icon icon="dash" aria-hidden="true"></b-icon>
                  </b-button>
                </div>
              </div>

              <div class="available">
                <div class="text">{{ $t('app.card.available') }}</div>
                <div class="value">
                  {{ product.quantityAvailable }}
                  <span
                    class="icon-envelope"
                    v-if="product.quantityAvailable < 10"
                  >
                    <b-icon
                      icon="envelope-fill"
                      aria-hidden="true"
                      :variant="
                        product.quantityAvailable < 10
                          ? product.quantityAvailable === 0
                            ? 'danger'
                            : 'warning'
                          : 'secondary'
                      "
                      @click="showWarningMessage()"
                    ></b-icon>
                  </span>
                </div>
              </div>

              <div class="price">
                <div class="text">{{ $t('app.card.price') }}</div>
                <div class="value">{{ product.price | currency }}</div>
              </div>

              <div class="amount">
                <div class="text">{{ $t('app.card.amount') }}</div>
                <div class="value">
                  {{ (product.price * quantity) | currency }}
                </div>
              </div>
            </b-list-group-item>
          </b-list-group>

          <b-card-body class="footer">
            <b-button
              variant="primary"
              :disabled="product.quantityAvailable === 0 || buttonLoading"
              @click="addProductCart()"
            >
              <b-spinner small v-if="buttonLoading"></b-spinner>
              <span v-else>{{ $t('app.buttons.add') }}</span>
            </b-button>
          </b-card-body>
        </div>
      </b-card>
    </div>
  </b-col>
</template>

<script>
import ProductService from '@/services/product'
import { mapActions, mapGetters } from 'vuex'

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
    warningMessageHeight: 0,
    buttonLoading: false,
  }),
  methods: {
    ...mapActions(['addProduct', 'callAlertSuccess', 'callAlertError']),
    ...mapGetters(['getCartProductList']),
    addProductCart() {
      this.buttonLoading = true
      ProductService.insertProductCart({
        quantity: this.quantity,
        sku: this.product.sku,
      })
        .then(() => this.addProductCartSuccess())
        .catch(() =>
          this.callAlertError({
            message: this.$t('app.product.warning.error.addProductCart'),
            time: 3000,
          })
        )
        .finally(() => (this.buttonLoading = false))
    },
    addProductCartSuccess() {
      const productFound = this.searchProductCart(this.product.sku)
      if (productFound.length && productFound[0].quantity === this.quantity) {
        this.callAlertError({
          message: this.$t('app.product.warning.success.productAlreadyAdded'),
          time: 5000,
        })
      } else if (
        productFound.length &&
        productFound[0].quantity !== this.quantity
      ) {
        this.getCartProductList().forEach(data => {
          data.quantity = this.quantity
        })
        this.callAlertSuccess({
          message: this.$t('app.product.warning.success.updatedCartProduct'),
          time: 3000,
        })
      } else {
        this.addProduct({
          product: this.product,
          quantity: this.quantity,
        })
        this.callAlertSuccess({
          message: this.$t('app.product.warning.success.productAddedCart'),
          time: 3000,
        })
      }
    },
    showWarningMessage() {
      this.warningMessageHeight = this.$refs[
        'middle-content-footer'
      ].clientHeight
    },
    addQuantity() {
      this.quantity++
    },
    deductQuantity() {
      this.quantity--
    },
    searchProductCart(sku) {
      return this.getCartProductList().filter(data => data.product.sku === sku)
    },
  },
}
</script>

<style lang="scss" scope>
.warning-message {
  background: #fff;
  width: 100%;
  height: 0px;
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.125);
  z-index: 1;
  animation: bounceInDown 1s ease;
  &.start {
    animation: bounceInUp 1s ease;
  }
  .warning-close {
    z-index: 1;
    float: right;
    margin: 10px;
    position: absolute;
    right: 10px;
  }
  .warning-content {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    .message {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-size: 20px;
      font-weight: bold;
    }
  }
}

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
        .btn {
          width: 150px;
        }
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
      .available {
        .icon-envelope {
          position: relative;
          bottom: -3px;
          .bi-envelope-fill {
            font-size: 28px;
            &:hover {
              cursor: pointer;
              animation: rubberBand 1s ease;
            }
          }
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
      }
    }
  }
}

.btn-small-icon {
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
