import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import PaginaPrincipal from "../pages/PaginaPrincipalteste";
import Login from "../pages/Loginteste";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { PaginaPrincipal }  path="/" exact />
           <Route component = { Login }  path="/login" />
       </BrowserRouter>
   )
}

export default Routes;