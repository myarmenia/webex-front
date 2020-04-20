import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import './i18n';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={null}>
        <Route path="/" component={App} />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
