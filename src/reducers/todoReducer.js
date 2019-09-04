import { RECIEVE_API_DATA } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_API_DATA:
      return action.payload;
    default:
      return state;
  }
};