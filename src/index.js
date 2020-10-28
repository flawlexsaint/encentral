import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from "./store/store";
import axios from "axios";
import AuthenticationContext from "./auth/Authentication";

axios.defaults.baseURL = "https://eblog-api.encentrals.com/api/";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <AuthenticationContext>
          <App />
        </AuthenticationContext>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
