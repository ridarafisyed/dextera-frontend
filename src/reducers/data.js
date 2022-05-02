/** @format */

import {
  GET_IS_WEEKLY,
  MONTLY_REVENUE,
  WEEKLY_REVENUE,
} from "../actions/types";

const initialState = {
  isWeekly: "daily",
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_IS_WEEKLY:
      return {
        ...state,
        isWeekly: action.payload,
      };
    case MONTLY_REVENUE:
      return {
        ...state,
        isWeekly: action.payload,
      };
    case WEEKLY_REVENUE:
      return {
        ...state,
        isWeekly: action.payload,
      };

    default:
      return state;
  }
}
