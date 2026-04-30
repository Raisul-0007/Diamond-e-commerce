import React from "react";
import './index.css'
import App from './App.jsx'
import ReactDOM, { createRoot } from "react-dom/client";
import  {ApiData}  from './components/ApiData.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ApiData>
    <App />
    </ApiData>
  </Provider>
)
