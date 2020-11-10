import { SET_USER } from "../../types";

const setUser = (state, action) => ({ ...state, user: action.payload });

export default (state = {}, action = {}) => {
  if (action.type === SET_USER) {
    return setUser(state, action);
  }
  return state;
};
