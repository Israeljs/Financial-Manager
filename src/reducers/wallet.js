import { ADD_EXPENSE, REQUEST_KEYS_CURRENCIES, REQUEST_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencyKeys: [],
  currencies: {},
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payLoad, id: state.expenses.length }],
    };
  case REQUEST_KEYS_CURRENCIES:
    return {
      ...state,
      currencyKeys: action.payLoad,
    };
  case REQUEST_CURRENCIES:
    return {
      ...state,
      currencies: action.payLoad,
    };
  default:
    return state;
  }
};

export default walletReducer;
