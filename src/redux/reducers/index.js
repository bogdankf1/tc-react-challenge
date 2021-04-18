import { combineReducers } from "redux";
import { musicDataReducer } from "./musicData";

const rootReducer = combineReducers({
  musicData: musicDataReducer,
});

export default rootReducer;
