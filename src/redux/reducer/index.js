import { combineReducers } from "redux";
import dataReducer from "./data.reducer";
import generalReducer from "./general.reducer";
import cartReducer from "./cart.reducer";

const rootReducer = combineReducers({
  dataReducer,
  generalReducer,
  cartReducer,
});

export default rootReducer;
