// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { Auth0Provider } from "@auth0/auth0-react";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";

// ReactDOM.render(
//   <Provider store={store}>
//     <Auth0Provider
//       domain={process.env.REACT_APP_DOMAIN_URL}
//       clientId={process.env.REACT_APP_CLIENT_ID}
//       redirectUri={window.location.origin + process.env.REACT_APP_PUBLIC_URL}
//     >
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Auth0Provider>
//   </Provider>,
//   document.getElementById("root")
// );


// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();