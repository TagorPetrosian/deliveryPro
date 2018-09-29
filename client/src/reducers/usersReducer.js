import { FETCH_CLIENTS, UPDATE_CLIENT } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CLIENTS:
      return action.payload;
    case UPDATE_CLIENT:
      return action.payload;
    default:
      return state;
  }
}
