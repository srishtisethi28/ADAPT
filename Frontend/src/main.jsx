import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <ToastContainer/>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
