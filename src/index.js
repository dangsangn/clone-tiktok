import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import GlobalStyle from "@/components/GlobalStyle";
import ModalProvider from "@/contexts/modal/ModalContext";
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
  </React.StrictMode>
);
