import { useState }  from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Layout from "./pages/Layout";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import Login from "./pages/Login";


function App() {
  const [token, setToken] = useState();

  return ( 
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PaginaPrincipal />} />
                    <Route path="login" element={<Login setToken={setToken} />} />
                </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
