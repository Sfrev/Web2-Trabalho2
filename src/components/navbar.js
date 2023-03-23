import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";


export function Navbar() {
    const [floatMenuShown, setFloatMenuShown] = useState(false);
    const [name, setName] = useState('');

    function toggleFloatMenuShown() {
        setFloatMenuShown(!floatMenuShown);
    }

    useEffect(() => {
        getName()
    }, []);

    const getName = (e) => {

        try {
            const name = localStorage.getItem("nome")
            setName(name)
            return name
        }
        catch (e) {
            console.log(e)
        }
    }

    const logout = (e) => {
        localStorage.removeItem("nome")
        window.location.reload()
    }

    return (
        <nav className="flex flex-wrap  items-center  justify-between w-full text-lg text-gray-700 bg-slate-100 p-2">
            <div>
                {/* Logo */}
                <ul className="text-base text-gray-700 flex justify-between pt-0">
                    <li>
                        <Link to="/">
                            <img src="pizza-logo.png" alt="Logo" class="w-16 h-16" />
                        </Link>
                    </li>
                    <li className="flex justify-content items-center">
                        <a className="font-caveat block ml-3 text-4xl" href="/">
                            Pizzaria Peça Já
                        </a>

                    </li>
                    <li className="flex justify-content items-center">
                        {name &&
                            <a className="font-caveat block ml-3 text-4xl" href="/">
                                Bem vindo, {name}!
                            </a>
                        }
                    </li>
                </ul>
            </div>
            {/* Dropdown Menu */}
            <div className="cursor-pointer">
                <MdMenu onClick={toggleFloatMenuShown}
                    className="text-2xl md:hidden text-gray-500 rounded-lg hover:bg-red-100 focus:outline-none focus:ring-2
                focus:ring-red-200 active:bg-red-500 active:shadow-lg transition duration-150 ease-in-out select-none"/>
                <div className="relative">
                    <div className={`absolute right-0 top-0 flex md:hidden flex-col items-center drop-shadow transition-all duration-500
                    bg-slate-200 border-solid border-2 border-white rounded-xl p-4
                    ${floatMenuShown ? 'visible opacity-100' : 'collapse opacity-0'}`}>

                        <Link onClick={logout} to="/" className="text-base text-gray-700 hover:text-red-400 select-none">
                            Log out
                        </Link>


                        <Link to="/login" className=" hover:text-red-400 text-red-500 select-none">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden w-full md:flex md:items-center md:w-auto md:justify-between">
                <ul className="
                        text-base text-gray-700
                        pt-4
                        md:flex
                        md:justify-between
                        md:pt-0">
                    <li>
                        <Link onClick={logout} to="/" className="md:p-4 py-2 block hover:text-red-400">
                            Log out
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="md:p-4 py-2 block hover:text-red-400 text-red-500">
                            Log in
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
    // return (
    //     <div className="w-full bg-gray-300 dark:bg-slate-800 text-white flex flex-row p-3 justify-between items-center">
    //         <Link to="/" className="text-blue-800 dark:text-blue-400 text-center text-base sm:text-2xl font-black uppercase select-none">Bolão da copa</Link>
    //         <div className="cursor-pointer">
    //             <MdMenu onClick={toggleFloatMenuShown} className="text-2xl sm:hidden text-green-700
    //              dark:text-green-400 dark:hover:text-green-200 hover:text-green-900 select-none" />
    //             <div className="relative">
    //                 <div className={`absolute right-0 top-0 flex sm:hidden flex-col items-center 
    // bg-gray-300 dark:bg-slate-800 border-solid border-2 border-white dark:border-slate-600 rounded-xl p-4 drop-shadow transition-all duration-500 ${floatMenuShown ? 'visible opacity-100' : 'collapse opacity-0'}`}>
    //                     <Link to="/placeBet" className="text-green-700 hover:text-green-900 dark:text-green-400 dark:hover:text-green-200 mb-4 select-none">Palpitar</Link>
    //                     <Link to="/viewBets" className="text-green-700 hover:text-green-900 dark:text-green-400 dark:hover:text-green-200 select-none">Ver</Link>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="hidden sm:flex items-center">
    //             <Link to="/placeBet" className="text-green-700 hover:text-green-900 dark:text-green-400 dark:hover:text-green-200 mr-10 select-none">Palpitar</Link>
    //             <Link to="/viewBets" className="text-green-700 hover:text-green-900 dark:text-green-400 dark:hover:text-green-200 select-none">Ver</Link>
    //         </div>
    //     </div>
    // );
}