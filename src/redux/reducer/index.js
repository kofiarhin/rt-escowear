import { combineReducers } from "redux";
import dataReducer from "./data.reducer";
import generalReducer from "./general.reducer";

const rootReducer = combineReducers({
  dataReducer,
  generalReducer,
});

export default rootReducer;
