import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import ordersReducer from "./ordersReducer";
import usersReducer from "./usersReducer";
import trucksReducer from "./trucksReducer";
import driversReducer from "./driversReducer";
import zonesReducer from "./zonesReducer";
import schedulesReducer from "./scheduleReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  orders: ordersReducer,
  users: usersReducer,
  trucks: trucksReducer,
  drivers: driversReducer,
  zones: zonesReducer,
  schedules: schedulesReducer,
  schedule: schedulesReducer,
  order: ordersReducer
});
