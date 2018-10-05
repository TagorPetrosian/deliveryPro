import {
  FETCH_ORDERS,
  FETCH_ALL_ORDERS,
  UPDATE_ORDER,
  FETCH_ORDER
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ORDER:
      return action.payload;
    case FETCH_ORDERS:
      return action.payload;
    case FETCH_ALL_ORDERS:
      return action.payload;
    case UPDATE_ORDER:
      return action.payload;
    default:
      return state;
  }
}
