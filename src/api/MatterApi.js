/** @format */

// import React, { useState } from "react";
import axios from "axios";

export const CONFIG = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const CreateMatter = (
  contact,
  matter_name,
  matter_type,
  matter_source,
  matter_status,
  assign_to,
  assign_by,
  billing_rate,
  alerts,
  open_date,
  close_date,
  total_days,
  jurisdiction,
  status_limitaion,
  opposing_counsel,
  where,
  when,
  involved,
  witnesses,
  narrative,
) => {
  let status = "";
  const body = JSON.stringify({
    contact,
    matter_name,
    matter_type,
    matter_source,
    matter_status,
    assign_to,
    assign_by,
    billing_rate,
    alerts,
    open_date,
    close_date,
    total_days,
    jurisdiction,
    status_limitaion,
    opposing_counsel,
    where,
    when,
    involved,
    witnesses,
    narrative,
  });

  axios
    .post(`${process.env.REACT_APP_API_URL}/api/new-matter/`, body, CONFIG)
    .then((res) => {
      status = res.statusText;
    })
    .catch((err) => {
      status = err.message;
    });

  return status;
};

export const retrive_matter = () => {};
