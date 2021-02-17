import axios from "axios";
import { endpoint, handleError } from "config";

export const instanceAxios = axios.create({
  baseURL: endpoint,
});

// instanceAxios.interceptors.request.use(
//   async (config) => {
//     console.log("req config", config);
//     var Auth = true;
//     if (config.url.includes("/schedule?country=")) {
//       //api -> without token
//       Auth = false;
//     }
//     const value = await localStorage.getItem("token");
//     const token = JSON.parse(value);
//     config.headers = {
//       ...(Auth ? { Authorization: `Bearer ${token}` } : {}),
//       Accept: "application/json",
//       "Access-Control-Allow-Origin": "*",
//     };
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

instanceAxios.interceptors.response.use(
  (response) => {
    // console.log("response", response);
    return response;
  },
  (error) => handleError(error)
);

// export const fetchAllMovies = (lang) => {
//   return fetch(`${endpoint}/schedule?country=${lang}`);
// };

export const fetchAllMovies = (lang) => {
  return instanceAxios
    .get(`/schedule?country=${lang}`)
    .catch((error) => ({ error }));
};

export const fechSingleMovie = (id) => {
  return instanceAxios.get(`/shows/${id}`).catch((error) => ({ error }));
};
