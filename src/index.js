import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


// // authenticate
// export const authenticate=(data, next)=>{
//   if (typeof window !== 'undefined'){
//     localStorage.setItem('jwt', JSON.stringify(data))
//     next()
//   }
// }

// // redirect by user role if authenticated
// export const isAuthenticated=()=>{
//   if(typeof window === undefined){
//     return false
//   }
//   if (localStorage.getItem('jwt')){
//     return JSON.parse(localStorage.getItem('jwt'))
//   }
//   else{
//     return false
//   }
// }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
