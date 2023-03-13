import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./count";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
