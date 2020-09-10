import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Landing from "./pages/Landing";
import ServicesPage from "./pages/ServicesPage";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/services" exact component={ServicesPage} />
      <Route path="/products" exact component={Products} />
      <Route path="/sign-up" exact component={SignUp} />
    </BrowserRouter>
  );
}

export default Routes;
