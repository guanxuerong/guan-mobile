import axios from 'axios';
import { Dialog } from 'vant';
import { storage,ShowLoading,HideLoading } from './util.js';

axios.defaults.timeout = 50000;

//http request 拦截器

axios.interceptors.request.use(
  config => {
    const user = storage.getStorage('user');
    if (user) {
      config.headers = {
        Authorization: 'Bearer ' + user.token
      };
    }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);

//统一处理返回结果
export function callbackData(response, that, callback) {
  let code = response.data.code;
  switch (code) {
    case 10000: //成功回调
      return '10000';
      break;
    default: // 其他情况
      Dialog.alert({ title: '提示', message: response.data.msg });
      break;
  }
}

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {},callback,that,loading=true) {
  return new Promise((resolve, reject) => {
    if (loading) {
       ShowLoading('加载中');
    }
    axios
      .get(window.base + url, {
        params: params
      })
      .then(response => {
        HideLoading();
        let code = callbackData(response, that,callback);
        if (code == '10000' || code == '20004') {
          resolve(response.data);
        }
      })
      .catch(err => {
        Dialog.alert({ title: '提示', message: '请求失败，请稍候再试！' });
      })
      .finally(err => {
				HideLoading();
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}, callback, that,loading=true) {
  return new Promise((resolve, reject) => {
    if (loading) {
      ShowLoading('加载中');
    }
    axios
      .post(window.base + url, data)
      .then(response => {
        HideLoading();
        let code = callbackData(response, that, callback);
        if (code == '10000' || code == '20004') {
          resolve(response.data);
        }
      })
      .catch(err => {
        Dialog.alert({ title: '提示', message: '请求失败，请稍候再试！' });
      })
      .finally(err => {
				HideLoading();
      });
  });
}
