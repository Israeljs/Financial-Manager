import { REQUEST_KEYS_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // case REQUEST_API_CURRENCY:
  //   return {
  //     ...state,
  //     expenses: [...state.expenses, { ...action.payLoad, id: state.expenses.length }],
  //   };
  case REQUEST_KEYS_CURRENCIES:
    return {
      ...state,
      currencies: action.payLoad,
    };
  default:
    return state;
  }
};

export default walletReducer;
