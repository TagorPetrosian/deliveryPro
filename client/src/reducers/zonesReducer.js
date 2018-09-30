import { FETCH_ZONES } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ZONES:
      return action.payload;
    default:
      return state;
  }
}
