import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";

import Router from "./router";
import apolloClient from "./graphql/client";

/* global window */
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept();
}

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Router />
  </ApolloProvider>
);

/* global document */
ReactDOM.render(<App />, document.getElementById("root"));
