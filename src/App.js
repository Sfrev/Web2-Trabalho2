import { Route, BrowserRouter, Routes } from "react-router-dom";

import Layout from "./pages/Layout";
import PaginaPrincipal from "./pages/PaginaPrincipalteste";
import Login from "./pages/Loginteste";


function App() {
  return ( 
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PaginaPrincipal />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
