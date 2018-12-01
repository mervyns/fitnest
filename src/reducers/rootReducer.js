import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import eventReducer from "./eventReducer";
import authReducer from "./eventReducer";
import modalReducer from "./eventReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer
});
export default rootReducer;
