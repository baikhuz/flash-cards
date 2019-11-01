import { FORM_SUBMIT } from "./types";

export const increment = val => dispatch => {
  dispatch({
    type: FORM_SUBMIT,
    payload: val
  });
};
