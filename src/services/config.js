import axios from 'axios';

export const $http = axios.create({
    baseURL: 'http://test.cfarma.cc/api/',
})