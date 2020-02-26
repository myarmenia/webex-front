import axios from "axios";

import auth from "./auth";

export const API_VIDEO_URL = "http://webex.am/";

export const API_URL = "http://127.0.0.1:8000/api";

export const API_SIGNIN_URL = API_URL + "/signin";

export const API_SIGNUP_URL = API_URL + "/signup";

export const API_SIGNOUT_URL = API_URL + "/signout";

export const API_USERDATA_URL = API_URL + "/userdata";

export const API_REFRESH_URL = API_URL + "/signin/refresh";

export const API_COURSES_URL = API_URL + "/courses";

export const API_FULL_PACKAGES_URL = API_URL + "/fullPackages";

export const API_LESSONS_URL = API_URL + "/courses_with_lessons";

const axiosInstance = axios.create({
  baseURL: API_URL
});

const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

const requestHandler = request => {
  if (isHandlerEnabled(request)) {
    if (
      auth.isAuthenticated() &&
      request.url !== API_REFRESH_URL &&
      request.url !== API_SIGNIN_URL
    ) {
      request.headers["Authorization"] = `Bearer ${auth.getToken()}`;
    }
  }
  return request;
};

delete axios.defaults.headers.post["Content-Type"];
delete axios.defaults.headers.put["Content-Type"];
delete axios.defaults.headers.patch["Content-Type"];

axios.interceptors.request.use(request => requestHandler(request));

const createAxiosResponseInterceptor = () => {
  const interceptor = axios.interceptors.response.use(
    response => response,
    error => {
      // Reject promise if not 401 error
      if (error.response.status !== 401) {
        return Promise.reject(error);
      }

      /*
       * When response code is 401, try to refresh the token.
       * Remove the interceptor so it doesn't loop in case
       * token refresh causes the 401 response
       */
      axios.interceptors.response.eject(interceptor);

      return axios({
        url: API_REFRESH_URL,
        method: "POST",
        withCredentials: true
      })
        .then(response => {
          auth.setToken(response.data.access_token);
          error.response.config.headers["Authorization"] =
            "Bearer " + response.data.access_token;
          return axios(error.response.config);
        })
        .catch(error => {
          auth.removeToken();
          return Promise.reject(error);
        })
        .finally(createAxiosResponseInterceptor);
    }
  );
};

createAxiosResponseInterceptor();
