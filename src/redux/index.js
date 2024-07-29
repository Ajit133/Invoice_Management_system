import { combineReducers } from "@reduxjs/toolkit";
import invoicesReducer from "./invoicesSlice";
import updateReducer from "./updateSlice";  

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  bulk: updateReducer
});

export default rootReducer;
