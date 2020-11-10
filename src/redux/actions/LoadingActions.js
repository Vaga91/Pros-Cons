import store from "../store";
import { START_LOADING, STOP_LOADING } from "../types";

const initStopLoading = () => ({
  type: STOP_LOADING
});

const initStartLoading = () => ({
  type: START_LOADING
});

const stopLoading = () => {
  const { loading } = store.getState();
  if (loading) {
    return dispatch => {
      dispatch(initStopLoading());
    };
  }
  return () => {};
};

const startLoading = () => {
  const { loading } = store.getState();
  if (!loading) {
    return dispatch => {
      dispatch(initStartLoading());
    };
  }
  return () => {};
};

export { startLoading, stopLoading };
