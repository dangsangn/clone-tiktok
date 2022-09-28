import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import GlobalStyle from "@/components/GlobalStyle";
import ModalProvider from "@/contexts/modal/ModalContext";
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle>
        <ModalProvider>
          <App />
        </ModalProvider>
      </GlobalStyle>
    </Router>
=======
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <ModalProvider>
        <App />
      </ModalProvider>
    </GlobalStyle>
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
  </React.StrictMode>
);
