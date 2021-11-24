import { SAVE_LOGIN_INFO } from '../actions';

const INITIAL_STATE = {
  email: '',
  // wallet: {
  //   currencies: [],
  //   expenses: [],
  // },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN_INFO:
    return {
      email: action.payLoad,
    };
  default:
    return state;
  }
};

export default userReducer;
