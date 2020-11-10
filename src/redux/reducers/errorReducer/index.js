import { SET_ERROR } from "../../types";

const initialState = {
  show: false,
  title: undefined,
  message: "",
  closeTxt: undefined
};

export default (state = initialState, action = {}) => {
  if (action.type === SET_ERROR) {
    return { ...state, ...action.payload };
  }
  return state;
};
