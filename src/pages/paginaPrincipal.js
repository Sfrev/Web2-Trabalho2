import { Navbar } from "../components/Navbar";


function PaginaPrincipal() {
    return (
        <div className="antialiased bg-gradient-to-r from-green-500 via-white to-red-500 scroll-smooth">
            {/* <!-- Navbar --> */}
            <header>
                <Navbar/>
            </header>
        
            {/* <!-- Botão de pesquisa --> */}
            <form className="container my-12 mx-auto px-4 md:px-12">
                <div className="relative flex items-center flex-wrap">
                    <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block w-auto md:w-1/3 p-4 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none" placeholder="Procurar pizzas" required />
                    <button type="submit" className="ml-2 px-4 py-4 text-gray-50  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm">Search</button>
                </div>
            </form>

            {/* <!-- Responsive Cards Grid --> */}
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex items-stretch flex-wrap -mx-1 lg:-mx-4">

                    {/* <!-- Column --> */}
                    <div className="my-1 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                        {/* <!-- Article --> */}
                        <article className="overflow-hidden rounded-lg shadow-lg bg-white">

                            <a href="#">
                                <img alt="Placeholder" className="block h-auto w-full" src="images/pizza-placeholder.jpg" />
                            </a>

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a className="font-bold text-xl text-gray-700" href="#">
                                        Presunto e Queijo
                                    </a>
                                </h1>
                            </header>

                            <p className="text-gray-700 text-base p-2 md:p-4 flex items-center justify-between leading-tight">
                                Molho de tomate, Muçarela e Presunto.
                            </p>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <a className="flex items-center no-underline text-black">
                                    <p className="text-sm">
                                        R$30,00
                                    </p>
                                </a>
                                <span className="material-symbols-outlined cursor-pointer text-grey-darker text-sm">
                                    shopping_cart
                                </span>
                            </footer>

                        </article>
                        {/* <!-- END Article --> */}

                    </div>
                    {/* <!-- END Column --> */}

                    {/* <!-- Column --> */}
                    <div className="my-1 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                        {/* <!-- Article --> */}
                        <article className="overflow-hidden rounded-lg shadow-lg bg-white">

                            <a href="#">
                                <img alt="Placeholder" className="block h-auto w-full" src="images/pizza-placeholder.jpg" />
                            </a>

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a className="font-bold text-xl text-gray-700" href="#">
                                        Marguerita
                                    </a>
                                </h1>
                            </header>

                            <p className="text-gray-700 text-base p-2 md:p-4 flex items-center justify-between leading-tight">
                                Molho de tomate, Muçarela e Manjericão.
                            </p>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <a className="flex items-center no-underline text-black">
                                    <p className="text-sm">
                                        R$35,00
                                    </p>
                                </a>
                                <span className="material-symbols-outlined cursor-pointer text-grey-darker text-sm">
                                    shopping_cart
                                </span>
                            </footer>

                        </article>
                        {/* <!-- END Article --> */}

                    </div>
                    {/* <!-- END Column --> */}

                    {/* <!-- Column --> */}
                    <div className="my-1 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                        {/* <!-- Article --> */}
                        <article className="overflow-hidden rounded-lg shadow-lg bg-white">

                            <a href="#">
                                <img alt="Placeholder" className="block h-auto w-full" src="images/pizza-placeholder.jpg" />
                            </a>

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a className="font-bold text-xl text-gray-700" href="#">
                                        LBB
                                    </a>
                                </h1>
                            </header>

                            <p className="text-gray-700 text-base p-2 md:p-4 flex items-center justify-between leading-tight">
                                Molho de tomate, Lombo, Bacon e Banana.
                            </p>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <a className="flex items-center no-underline text-black">
                                    <p className="text-sm">
                                        R$42,00
                                    </p>
                                </a>
                                <span className="material-symbols-outlined cursor-pointer text-grey-darker text-sm">
                                    shopping_cart
                                </span>
                            </footer>

                        </article>
                        {/* <!-- END Article --> */}

                    </div>
                    {/* <!-- END Column --> */}

                    {/* <!-- Column --> */}
                    <div className="my-1 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                        {/* <!-- Article --> */}
                        <article className="overflow-hidden rounded-lg shadow-lg bg-white">

                            <a href="#">
                                <img alt="Placeholder" className="block h-auto w-full" src="images/pizza-placeholder.jpg" />
                            </a>

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a className="font-bold text-xl text-gray-700" href="#">
                                        Strogonoff de Frango
                                    </a>
                                </h1>
                            </header>

                            <p className="text-gray-700 text-base p-2 md:p-4 flex items-center justify-between leading-tight">
                                Molho de strogonoff, frango e batata palha.
                            </p>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <a className="flex items-center no-underline text-black">
                                    <p className="text-sm">
                                        R$45,00
                                    </p>
                                </a>
                                <span className="material-symbols-outlined cursor-pointer text-grey-darker text-sm">
                                    shopping_cart
                                </span>
                            </footer>

                        </article>
                        {/* <!-- END Article --> */}

                    </div>
                    {/* <!-- END Column --> */}

                    {/* <!-- Column --> */}
                    <div className="my-1 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                        {/* <!-- Article --> */}
                        <article className="overflow-hidden rounded-lg shadow-lg bg-white">

                            <a href="#">
                                <img alt="Placeholder" className="block h-auto w-full" src="images/pizza-placeholder.jpg" />
                            </a>

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a className="font-bold text-xl text-gray-700" href="#">
                                        Calabacon
                                    </a>
                                </h1>
                            </header>

                            <p className="text-gray-700 text-base p-2 md:p-4 flex items-center justify-between leading-tight">
                                Molho de tomate, Muçarela, Presunto, Calabresa e Bacon.
                            </p>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <a className="flex items-center no-underline text-black">
                                    <p className="text-sm">
                                        R$40,00
                                    </p>
                                </a>
                                <span className="material-symbols-outlined cursor-pointer text-grey-darker text-sm">
                                    shopping_cart
                                </span>
                            </footer>

                        </article>
                        {/* <!-- END Article --> */}

                    </div>
                    {/* <!-- END Column --> */}

                    {/* <!-- Column --> */}
                    <div className="my-1 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                        {/* <!-- Article --> */}
                        <article className="overflow-hidden rounded-lg shadow-lg bg-white">

                            <a href="#">
                                <img alt="Placeholder" className="block h-auto w-full" src="images/pizza-placeholder.jpg" />
                            </a>

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a className="font-bold text-xl text-gray-700" href="#">
                                        Pimenta
                                    </a>
                                </h1>
                            </header>

                            <p className="text-gray-700 text-base p-2 md:p-4 flex items-center justify-between leading-tight">
                                Molho de tomate, Calabresa e pimenta.
                            </p>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <a className="flex items-center no-underline text-black">
                                    <p className="text-sm">
                                        R$35,00
                                    </p>
                                </a>
                                <span className="material-symbols-outlined cursor-pointer text-grey-darker text-sm">
                                    shopping_cart
                                </span>
                            </footer>

                        </article>
                        {/* <!-- END Article --> */}

                    </div>
                    {/* <!-- END Column --> */}

                </div>
            </div>

            <div className="flex justify-center"/>
        </div>
    );
}

export default PaginaPrincipal;