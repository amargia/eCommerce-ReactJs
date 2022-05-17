import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDQAQpgP2iSLupopZ392DtwIzo1dYWmSxw",
  authDomain: "ecommerce-react-js-8735d.firebaseapp.com",
  projectId: "ecommerce-react-js-8735d",
  storageBucket: "ecommerce-react-js-8735d.appspot.com",
  messagingSenderId: "1073342896251",
  appId: "1:1073342896251:web:8b9f5d10ed11c1f70e6ade"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
      <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();