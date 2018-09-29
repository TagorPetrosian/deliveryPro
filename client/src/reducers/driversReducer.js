import { FETCH_DRIVERS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DRIVERS:
      return action.payload;
    default:
      return state;
  }
}
