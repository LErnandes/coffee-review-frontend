import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: false,
  headers: { 
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;