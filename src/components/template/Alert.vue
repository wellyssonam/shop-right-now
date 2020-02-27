<template>
  <div class="srn-alert">
    <b-alert :variant="variantColor" :show="showAlert">
      <a href="#" class="alert-link">{{ message }}</a>
    </b-alert>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: '...',
    },
    variantColor: {
      type: String,
      default: 'success',
    },
    showAlert: {
        type: Boolean,
        default: false,
    }
  },
}
</script>
