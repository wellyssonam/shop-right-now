<template>
  <div class="srn-card-landscape">
    <b-card
      class="card-landscape"
      no-body
      :img-src="product.product.imageURL"
      img-alt="Image"
      img-top
    >
      <b-container fluid>
        <b-row>
          <b-col md="5">
            <div>{{ product.product.name }}</div>
            <div>SKU: {{ product.product.sku }}</div>
            <div>Categoria: {{ product.product.category }}</div>
            <div>Fabricante: {{ product.product.maker }}</div>
          </b-col>

          <b-col md="5">
            <div>Disponível: {{ product.product.quantityAvailable }}</div>
            <div>Quantidade: {{ product.quantity }}</div>
            <div>
              Price:
              <span class="price">{{ product.product.price | currency }}</span>
            </div>
            <div>
              Total:
              <span class="price">
                {{
                  (product.quantity * product.product.price) | currency
                }}</span
              >
            </div>
          </b-col>

          <b-col md="2">
            <div class="icon-trash">
              <b-icon
                icon="Trash"
                aria-hidden="true"
                :variant="colorTrash"
                @mouseover="colorTrash = 'danger'"
                @mouseleave="colorTrash = 'secondary'"
                @click="removeProductCart(product.product.sku)"
              ></b-icon>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import ProductService from '@/services/product'

export default {
  props: {
    product: {
      type: Object,
    },
  },
  data: () => ({
    quantity: 1,
    colorTrash: 'secondary',
  }),
  methods: {
    removeProductCart(sku) {
      ProductService.removeProductCart(sku)
        .then(() =>
          console.log(
            this.$t('app.shoppingList.warning.success.removeProductCart')
          )
        )
        .catch(() =>
          console.log(
            this.$t('app.shoppingList.warning.error.removeProductCart')
          )
        )
    },
  },
}
</script>

<style lang="scss">
.srn-card-landscape {
  max-width: 100%;
  margin: 0px auto 20px auto;
  font-size: 14px;
  .card-landscape {
    display: flex;
    height: 200px;
    font-size: 16px;
    line-height: 32px;
    flex-direction: row;
    border-left: 7px solid #498a3e;
    .card-img-top {
      width: auto;
      height: 90%;
      margin: 10px;
    }
    .container-fluid {
      border-left: 1px solid rgba(0, 0, 0, 0.125);
      padding: 15px 0px;
      .row {
        margin-left: 0px;
        margin-right: 0px;
        .price {
          color: #69c05b;
          font-weight: bold;
        }
        .icon-trash {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          .bi-trash {
            font-size: 35px;
            &:hover {
              cursor: pointer;
              animation: rubberBand 1s ease;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .card-landscape {
    font-size: 15px !important;
    line-height: 21px !important;
    height: 330px !important;
    .card-img-top {
      height: 90px !important;
    }
    .bi-trash {
      float: right;
      padding-bottom: 5px;
    }
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .card-landscape {
    font-size: 15px !important;
    line-height: 21px !important;
    height: 210px !important;
    .bi-trash {
      float: right;
      padding-bottom: 5px;
    }
  }
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
