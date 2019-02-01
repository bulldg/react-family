import axios from 'axios';
import history from '../router/history';

console.log(process.env);
const APIHOST = process.env.API_HOST;

const goLogin = () => {
  history.replace('/login');
};

/**
 *
 * @param {*} url
 * @param {*} params
 * @param {*} method
 */

export const fetch = (url, params, method, needToken) => {
  const config = {
    url,
    baseURL: APIHOST,
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  };
  if (method === 'GET' || method === 'DELETE') {
    config.params = params;
  } else {
    config.data = params;
  }
  if (!config.url) {
    return;
  }
  config.data = config.data || {};
  if (config.method === 'DELETE') {
    config.data = {};
  }
  if (needToken) {
    const token = getCookie('ytToken');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
  }
  return new Promise((resolve, reject) => {
    axios(config).then((res) => {
      const data = res.data;
      if (data) {
        if (data.token) {
          setCookie('token', data.token, 30);
        }
        resolve(data);
      }
    }).catch((err) => {
      let error = {message: '网络错误'};
      if (err.response && err.response.statusCode === 401) {
        goLogin();
      }
      if (err && err.response && err.response.data) {
        const d = err.response.data;
        error = {
          message: d.msg,
          httpstatus: err.response.statusCode
        };
      }
      reject(error);
    });
  });
};
