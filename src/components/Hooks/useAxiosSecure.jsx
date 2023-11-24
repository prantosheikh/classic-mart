// import axios from "axios";

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

// const useAxiosSecure = () => {
//   const { logOut } = useAuth();
//   const navigate = useNavigate();

//   const axiosSecure = axios.create({
//     baseURL: `${import.meta.env.VITE_API_URL}`,
//   });

//   useEffect(() => {
//     axiosSecure.interceptors.request.use((config) => {
//       const token = localStorage.getItem("access-token");
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     });






//   }, []);

//   return <div></div>;
// };

// export default useAxiosSecure;
