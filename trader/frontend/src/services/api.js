import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

export default instance;
