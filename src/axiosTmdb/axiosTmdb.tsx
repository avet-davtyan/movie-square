import axios, { AxiosInstance } from "axios";

const axiosTmdb: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
  },
});

export default axiosTmdb;
