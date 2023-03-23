import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import PaginaPrincipal from "../pages/PaginaPrincipal";
import Login from "../pages/Login";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { PaginaPrincipal }  path="/" exact />
           <Route component = { Login }  path="/login" />
       </BrowserRouter>
   )
}

export default Routes;