import { FETCH_ORDERS, FETCH_ALL_ORDERS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ORDERS:
      return action.payload;
    case FETCH_ALL_ORDERS:
      return action.payload;
    default:
      return state;
  }
}
