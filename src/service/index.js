import { fetch } from '../utils/fetch';

const getIndex = params => fetch('/api/index', params, 'GET');

export {
  getIndex
}