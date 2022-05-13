import axios from "axios";
import config from "../config/Config.json";

// jest.unmock('axios');
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';



export const axiosDefault = axios.create({
  baseURL: "http://localhost:3007",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3007",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const customAPI = (endpoint) => {
  const dynamicURL = config.urls[endpoint];

  const localvalue = JSON.parse(localStorage.getItem("user"));

  const axiosinstance = axios.create({
    baseURL: dynamicURL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        localStorage.user ? localvalue["user"]["accessToken"] : ""
      }`,
    },
  });

  return axiosinstance;
};
