import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import { reducer as toastrReducer } from 'react-redux-toastr'; 
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'
import eventReducer from "./eventReducer";
import authReducer from "./eventReducer";
import modalReducer from "./eventReducer";
import asyncReducer from "./asyncReducer";


const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: FormReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: toastrReducer 
});
export default rootReducer;
