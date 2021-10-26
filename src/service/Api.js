import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://forever21.hungvu.net',
  timeout: 1000,
});

export const getProduct = () => instance.get('/get-products');
