import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnMbqUjGfFhnXZdz9ad2ffjUf7MfnvTzA",
  authDomain: "digital-hub-dcad9.firebaseapp.com",
  projectId: "digital-hub-dcad9",
  storageBucket: "digital-hub-dcad9.appspot.com",
  messagingSenderId: "16752714966",
  appId: "1:16752714966:web:eac75e6b7df9dccfa4d577"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
