import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import "./style/base.scss";

import AppRouter from "./router/AppRouter";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
