import getCurrency from '../services/awesomeapi';

export const SAVE_LOGIN_INFO = 'SAVE_LOGIN_INFO';
export const ADD_EXPENSE = 'ADD_EXPENSE';
// export const REQUEST_KEYS_CURRENCIES = 'REQUEST_KEYS_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';

export const saveLoginInfo = (payLoad) => ({
  type: SAVE_LOGIN_INFO,
  payLoad,
});

export const addExpense = (payLoad) => ({
  type: ADD_EXPENSE,
  payLoad,
});

export const saveCurrencies = (currencies, currencyKeys) => ({
  type: REQUEST_CURRENCIES,
  currencies,
  currencyKeys,
});

// export const saveKeysCurrencies = (payLoad) => ({
//   type: REQUEST_KEYS_CURRENCIES,
//   payLoad,
// });

export const requestApiCurrenciesThunk = () => async (dispatch) => {
  const currencies = await getCurrency();
  const currencyKeys = Object.keys(currencies);

  dispatch(saveCurrencies(currencies, currencyKeys));
};
