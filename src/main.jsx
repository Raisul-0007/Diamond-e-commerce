import React from "react";
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import  {ApiData}  from './components/ApiData.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiData>
    <App />
    </ApiData>
  </React.StrictMode>
)
