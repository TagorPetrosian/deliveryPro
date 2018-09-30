import { FETCH_DRIVERS, UPDATE_DRIVER } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DRIVERS:
      return action.payload;
    case UPDATE_DRIVER:
      return action.payload;
    default:
      return state;
  }
}
