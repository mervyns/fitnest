import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import eventReducer from "./eventReducer";
import authReducer from "./eventReducer";
import modalReducer from "./eventReducer";
import asyncReducer from "./asyncReducer";


const rootReducer = combineReducers({
  form: FormReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer
});
export default rootReducer;
