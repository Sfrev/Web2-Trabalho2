import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

export function Navbar() {
    const [floatMenuShown, setFloatMenuShown] = useState(false);

    const toggleFloatMenuShown = (event) => {
        setFloatMenuShown(!floatMenuShown);
        event.stopPropagation()
    }

    return (
        <nav className="flex flex-wrap  items-center  justify-between w-full text-lg text-gray-700 bg-white p-2">
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
                    </ul>
            </div>
            <label id='label-dropdown-navbar-menu' for='checkbox-dropdown-navbar-menu' class="inline-flex items-center px-4 py-4 text-sm text-gray-500 rounded-lg hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 active:bg-red-500 active:shadow-lg transition duration-150 ease-in-out md:hidden cursor-pointer">
                    <i class='material-symbols-outlined w-6 h-6'>
                        menu
                    </i>
                </label>
                <input type='checkbox' id='checkbox-dropdown-navbar-menu' class="hidden"/>
            <div className="hidden w-full md:flex md:items-center md:w-auto md:justify-between" id="target">
                    <ul className="
                                    text-base text-gray-700
                                    pt-4
                                    md:flex
                                    md:justify-between
                                    md:pt-0">
                        <li>
                            <Link to="/" className="md:p-4 py-2 block hover:text-red-400">
                            Cardápio
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
}