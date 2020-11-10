import { combineReducers } from "redux";

import loadingReducer from "./reducers/loadingReducer";
import commonReducer from "./reducers/commonReducer";
import errorReducer from "./reducers/errorReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  common: commonReducer,
  error: errorReducer
});

export default rootReducer;
