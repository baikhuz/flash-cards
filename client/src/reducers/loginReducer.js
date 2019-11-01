import { FORM_SUBMIT } from "../actions/types";

const initialState = [];

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FORM_SUBMIT:
      return {
        ...state,
        loginInfo: payload
      };
    default:
      return state;
  }
};

export default loginReducer;
