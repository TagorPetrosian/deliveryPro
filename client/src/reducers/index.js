import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import ordersReducer from "./ordersReducer";
import usersReducer from "./usersReducer";
import trucksReducer from "./trucksReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  orders: ordersReducer,
  users: usersReducer,
  trucks: trucksReducer
});
