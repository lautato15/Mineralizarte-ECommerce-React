import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/storeConfig.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaqPk_f_TsJlCxTehde-JSrFWqNOYrUhE",
  authDomain: "mineralizarte-ecommerce.firebaseapp.com",
  projectId: "mineralizarte-ecommerce",
  storageBucket: "mineralizarte-ecommerce.appspot.com",
  messagingSenderId: "831616384760",
  appId: "1:831616384760:web:f29f4a6d0c31027c78050d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
