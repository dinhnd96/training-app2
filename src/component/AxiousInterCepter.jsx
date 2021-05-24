import axios from "axios";
import { config } from "@/config";

const axiosInstance = axios.create({
  baseURL: "localhost:2017/",
});

axiosInstance.interceptors.request.use(async function (config) {
  const userToken = (await localStorage.getItem({ name: "userToken" })) || null;
  console.info({ userToken });
  if (!!userToken) {
    config.headers.Authorization = `Bearer ${userToken}`;
  }
  return config;
});

export default axiosInstance;
