import Axios from "axios";

const axios = Axios.create({
  baseURL: "localhost:2017/",
});

axios.interceptors.request.use(async function (config) {
  const userToken = (await localStorage.getItem({ name: "userToken" })) || null;
  console.info({ userToken });
  if (userToken) {
    config.headers.Authorization = `Bearer ${userToken}`;
  }
  return config;
});

export default axios;
