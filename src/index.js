import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Necessário fazer as duas importações
import { Provider } from "react-redux";
import store from "./store";

// Veja que usamos o Provider e passamos a store para ele
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
