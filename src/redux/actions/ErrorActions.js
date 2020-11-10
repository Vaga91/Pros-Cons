import { SET_ERROR } from "../types";

const setErrorModal = error => {
  return dispatch =>
    dispatch({
      type: SET_ERROR,
      payload: error
    });
};

export { setErrorModal };
