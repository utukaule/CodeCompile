import axios from "axios";
export const bookBaseUrl = axios.create({
  baseURL: "http://localhost:8000/book",
});

export const userBaseUrl = axios.create({
    baseURL:"http://localhost:8000/user"
})

bookBaseUrl.interceptors.request.use(
  (config) => {
    // get stored session
    const authToken = localStorage.getItem("userAuth");
    const token = JSON.parse(authToken)?.token;

    if (token) {
      // Attach authrization Header
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("auth-req-err", error);
  },
);

// Global Logout Handler
bookBaseUrl.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("userAuth");
      window.location.href = "./login";
    }
  },
);
