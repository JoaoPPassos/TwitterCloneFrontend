import axios from "axios";

const ApiUrl = "http://127.0.0.1:3333";

export const apiTwitter = axios.create({
  baseURL: `${ApiUrl}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
