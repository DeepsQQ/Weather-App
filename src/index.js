import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "@fontsource/roboto";
import "reset-css";
import "./index.scss";

import store from "./store";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
