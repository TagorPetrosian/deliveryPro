import { FETCH_SCHEDULES, FETCH_SCHEDULE } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SCHEDULES:
      return action.payload;
    case FETCH_SCHEDULE:
      return action.payload;
    default:
      return state;
  }
}
