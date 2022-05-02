/** @format */

import axios from "axios";
import { createMessage, returnErrors } from "./messages";
// import { tokenConfig } from "./auth";

import {
  CREATE_MEMBER_SUCCESS,
  CREATE_MEMBER_FAIL,
  GET_MEMBER_SUCCESS,
  GET_MEMBER_FAIL,
} from "./types";

export const getMember = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/member`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_MEMBER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status)),
    );
};

export const createMember =
  ({
    f_name,
    m_name,
    l_name,
    c_email,
    role,
    time_zone,
    group,
    job_title,
    bar_no,
    street,
    suite,
    city,
    state,
    zip,
    ext,
    mobile,
    home,
    work_no,
    p_email,
    phone_ext,
  }) =>
  (dispatch, getState) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/member`, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_MEMBER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status)),
      );
  };
