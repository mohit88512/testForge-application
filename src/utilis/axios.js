import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5010/api"
});

// 🔥 interceptor yaha lagao
instance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default instance;