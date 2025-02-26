import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import { BookProvider } from "./context/BookContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalContextProvider>
        <BookProvider>
          <App />
        </BookProvider>
      </GlobalContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
