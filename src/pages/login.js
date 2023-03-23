import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { login } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginInvalid, setIsLoginInvalid] = useState(false);

  const handleEmail = (e) => {
    const emailInput = e.target.value
    localStorage.setItem("email", emailInput)
}

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await login({
        email,
        password
      })

      if (response.status !== 200) {
        setIsLoginInvalid(true)
        return
      }

      localStorage.removeItem("email")
      navigate("/")
    } catch (e) {
      setIsLoginInvalid(true)
    }
  }

  return (
    <div className="antialiased bg-gradient-to-r from-green-500 via-white to-red-500">
      <header>
        <Navbar />
      </header>
      <section className="h-full gradient-form md:h-screen ">
        <div className="py-12 px-6 h-full ">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="w-auto">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-20 py-1 md:py-3"
                          src="pizza-logo.png"
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Pizzaria Peça Já</h4>
                      </div>
                      <form>
                        <p className="mb-4">Por favor faça login em sua conta</p>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-500 focus:outline-none"
                            id="usuario"
                            placeholder="Usuário"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-500 focus:outline-none"
                            id="senha"
                            placeholder="Senha"
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button onclick="location.href='/'"
                            className="antialiased inline-block px-6 py-2.5 text-black bg-green-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Log in
                          </button>
                          <a className="text-gray-500" href="#!">Esqueceu sua senha?</a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Não tem uma conta?</p>
                          <button
                            type="button"
                            className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Registre-se
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login; 