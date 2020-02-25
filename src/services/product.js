import { $http } from './config';

export default {
    list: () => {
        return $http.get('product')
    },
    insertProductCart: (data) => {
        return $http.post('cart/add', data)
    },
    getCartProductList: () => {
        return $http.get('cart');
    },
    removeProductCart: (sku) => {
        return $http.delete(`cart/remove/${sku}`)
    }
}
