import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReduxToastr from 'react-redux-toastr'
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "./store/configureStore";
import ScrollToTop from "./common/utils/scollToTop";
import "semantic-ui-css/semantic.min.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <ReduxToastr
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
