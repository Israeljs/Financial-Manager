import { REQUEST_API_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API_CURRENCY:
    return {
      ...state,
      currencies: [...currencies, action.payLoad.currencies],
      expenses: [...expenses, action.payLoad.expenses],
      email: action.payLoad.email,
    };
  default:
    return state;
  }
};

export default walletReducer;
