import { SAVE_LOGIN_INFO } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN_INFO:
    return {
      ...state,
      email: action.payLoad.email,
    };
  default:
    return state;
  }
};

export default user;
