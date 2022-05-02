/** @format */

/** @format */ // import axios from "axios";

import { GET_IS_WEEKLY, MONTLY_REVENUE, WEEKLY_REVENUE } from "./types";
// GET LEADS
export const updateIsWeekly = (data) => (dispatch) => {
  if (data) {
    dispatch({
      type: WEEKLY_REVENUE,
      payload: data,
    });
  } else {
    dispatch({
      type: MONTLY_REVENUE,
    });
  }
};

export const getIsWeekly = () => (dispatch) =>
  dispatch({
    type: GET_IS_WEEKLY,
    // payload: this.state,
  });
