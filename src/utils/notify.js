import { Indicator, Toast } from 'bee-mobile';

const showLoading = (obj = {}) => {
  const val = {
    delay: 100000,
    message: '加载中...',
    size: 'lg',
    type: 'circleRoundFade',
  };
  Object.assign(val, obj);
  setTimeout(() => {
    Indicator.show(val);
  }, 0);
};

const hideLoading = Indicator.close;

const showToast = (obj = {}) => {
  hideLoading();
  if (typeof obj === 'string') {
    obj = {
      message: obj,
    };
  }
  obj.position = obj.position || 'center';
  obj.delay = obj.delay || 1500;
  obj.message = obj.message || '未知错误';
  Toast.show(obj);
};

export { showLoading, hideLoading, showToast };