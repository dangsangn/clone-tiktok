import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import GlobalStyle from "@/components/GlobalStyle";
import ModalProvider from "@/contexts/modal/ModalContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <ModalProvider>
        <App />
      </ModalProvider>
    </GlobalStyle>
  </React.StrictMode>
);
