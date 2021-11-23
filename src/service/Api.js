import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://forever21.hungvu.net/',
  timeout: 1000,
});
// https://api.thecoffeehouse.com/api/v5/stores/all-pickup
export const getProduct = () => instance.get('get-products');
