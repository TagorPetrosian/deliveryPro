import { FETCH_SCHEDULES } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SCHEDULES:
      return action.payload;
    default:
      return state;
  }
}
