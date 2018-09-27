import { FETCH_CLIENTS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CLIENTS:
      return action.payload;
    default:
      return state;
  }
}
