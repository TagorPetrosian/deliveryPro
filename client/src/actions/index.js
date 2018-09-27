import axios from "axios";
import {
  FETCH_USER,
  FETCH_ORDERS,
  FETCH_ALL_ORDERS,
  FETCH_CLIENTS
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchUsers = () => async dispatch => {
  const res = await axios.get("/admin/api/clients");

  dispatch({ type: FETCH_CLIENTS, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitOrder = (values, history) => async dispatch => {
  const res = await axios.post("/api/orders", values);

  history.push("/client/dashboard/thanks");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchOrders = () => async dispatch => {
  const res = await axios.get("/api/orders");
  dispatch({ type: FETCH_ORDERS, payload: res.data });
};

export const fetchAllOrders = () => async dispatch => {
  const res = await axios.get("/admin/api/all_orders");
  dispatch({ type: FETCH_ALL_ORDERS, payload: res.data });
};
