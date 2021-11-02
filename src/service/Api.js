import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/api/v5/',
  timeout: 1000,
});
// https://api.thecoffeehouse.com/api/v5/stores/all-pickup
export const getProduct = () => instance.get('stores/all-pickup');
