import getCurrency from '../services/awesomeapi';

export const SAVE_LOGIN_INFO = 'SAVE_LOGIN_INFO';
// export const REQUEST_API_CURRENCY = 'REQUEST_API_CURRENCY';
export const REQUEST_KEYS_CURRENCIES = 'REQUEST_KEYS_CURRENCIES';

export const saveLoginInfo = (payLoad) => ({
  type: SAVE_LOGIN_INFO,
  payLoad,
});

export const saveKeysCurrencies = (payLoad) => ({
  type: REQUEST_KEYS_CURRENCIES,
  payLoad,
});

export function requestApiCurrenciesThunk() {
  return async (dispatch) => {
    const response = await getCurrency();

    dispatch(saveKeysCurrencies(Object.keys(response)));
  };
}
