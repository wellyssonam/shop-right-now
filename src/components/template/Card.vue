<template>
  <b-col md="3" sm="6" xs="12">
    <div class="srn-card">
      <b-card
        no-body
        style="max-width: 20rem;"
        :img-src="products.imageURL"
        img-alt="Image"
        img-top
      >
        <b-card-body class="content">
          <b-card-text>
            {{ products.name }}
          </b-card-text>
        </b-card-body>

        <b-list-group>
          <b-list-group-item>Price: R$ {{ products.price }}</b-list-group-item>
        </b-list-group>

        <b-card-body>
          <b-button variant="primary">Adicionar</b-button>
        </b-card-body>
      </b-card>
    </div>
  </b-col>
</template>

<script>
export default {
  props: {
    products: {
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
}
</script>

<style lang="scss">
.srn-card {
  max-width: 100%;
  margin: 0px auto 20px auto;
  font-size: 14px;
  .card {
    max-width: unset !important;
    .card-body {
      padding: 10px;
      &.content {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    }
    .card-img-top {
      width: 90%;
      margin: 10px auto;
    }
  }
}

@media (max-width: 576px) {
  .srn-card {
    font-size: 19px;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .card-body {
    &.content {
      height: 100px;
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 769px) and (max-width: 992px) {
  .card-body {
    &.content {
      height: 100px;
    }
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 993px) and (max-width: 1200px) {
  .card-body {
    &.content {
      height: 90px;
    }
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1201px) {
  .card-body {
    &.content {
      height: 65px;
    }
  }
}
</style>
