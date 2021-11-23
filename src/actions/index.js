export const SAVE_LOGIN_INFO = 'SAVE_LOGIN_INFO';

export const saveLoginInfo = (payLoad) => ({
  type: SAVE_LOGIN_INFO,
  payLoad,
});

export const REQUEST_API_CURRENCY = 'REQUEST_API_CURRENCY';

export const saveCurrencyInfo = (payLoad) => ({
  type: REQUEST_API_CURRENCY,
  payLoad,
});
