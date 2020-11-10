import { START_LOADING } from "../../types";

// eslint-disable-next-line no-unused-vars
export default (state = false, action = {}) => {
  return action.type === START_LOADING;
};
