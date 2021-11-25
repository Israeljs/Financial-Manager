import { ADD_EXPENSE, REQUEST_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencyKeys: {},
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payLoad, id: state.expenses.length }],
    };
  // case REQUEST_KEYS_CURRENCIES:
  //   return {
  //     ...state,
  //     currencyKeys: action.payLoad,
  //   };
  case REQUEST_CURRENCIES:
    return {
      ...state,
      currencyKeys: action.currencies,
      currencies: action.currencyKeys,
    };
  default:
    return state;
  }
};

export default wallet;
