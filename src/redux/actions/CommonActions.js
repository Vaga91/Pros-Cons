import * as types from "../types";

const setUser = user => {
  return dispatch =>
    dispatch({
      type: types.SET_USER,
      payload: user
    });
};

export { setUser };
