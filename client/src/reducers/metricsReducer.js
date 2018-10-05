import { FETCH_METRICS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_METRICS:
      return action.payload;
    default:
      return state;
  }
}
