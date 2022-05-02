/** @format */

import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_PROFILE, ADD_PROFILE } from "./types";

// GET LEADS
export const getProfile = () => (dispatch, getState) => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/profile`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status)),
    );
};

// // DELETE LEAD
// export const deleteLead = (id) => (dispatch, getState) => {
//   axios
//     .delete(`/api/leads/${id}/`, tokenConfig(getState))
//     .then((res) => {
//       dispatch(createMessage({ deleteLead: "Lead Deleted" }));
//       dispatch({
//         type: DELETE_LEAD,
//         payload: id,
//       });
//     })
//     .catch((err) => console.log(err));
// };

// ADD LEAD
export const addProfile = (profile) => (dispatch, getState) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/profile-reg/`,
      profile,
      tokenConfig(getState),
    )
    .then((res) => {
      dispatch(createMessage({ addProfile: "Profile Added" }));
      dispatch({
        type: ADD_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status)),
    );
};
