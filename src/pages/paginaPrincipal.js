import { Navbar } from "../components/Navbar";


function PaginaPrincipal() {
  return (
    <div className="antialiased bg-gradient-to-r from-green-500 via-white to-red-500">
        <header>
            <Navbar />
        </header>

        {/* <!-- Botão de pesquisa --> */}
        <form class="container my-12 mx-auto px-4 md:px-12">   
            <div class="relative flex items-center flex-wrap">
                <div class="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="block w-auto md:w-1/3 p-4 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none" placeholder="Procurar pizzas" required/>
                <button type="submit" class="ml-2 px-4 py-4 text-gray-50  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm">Search</button>
            </div>
        </form>


        {/* <!-- Responsive Cards Grid --> */}
        <div class="container my-12 mx-auto px-4 md:px-12">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
        
                {/* <!-- Column --> */}
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        
                    {/* <!-- Article --> */}
                    <article class="overflow-hidden rounded-lg shadow-lg bg-white">
        
                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="images/pizza-placeholder.jpg"/>
                        </a>
        
                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="font-bold text-xl text-gray-700" href="#">
                                    Presunto e Queijo
                                </a>
                            </h1>
                        </header>
        
                        <p class="text-gray-700 text-base p-2 md:p-4 flex items-center justify-between leading-tight">
                            Molho de tomate, Muçarela e Presunto. 
                        </p>
        
                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline text-black">
                                <p class="text-sm">
                                    R$30,00
                                </p>
                            </a>
                            <span class="material-symbols-outlined cursor-pointer text-grey-darker text-sm">
                                shopping_cart
                            </span>
                        </footer>

                    </article>
                    {/* <!-- END Article --> */}
        
                </div>
                {/* <!-- END Column --> */}
        
                {/* <!-- Column --> */}
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        
                    {/* <!-- Article --> */}
                    <article class="overflow-hidden rounded-lg shadow-lg bg-white">
        
                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="images/pizza-placeholder.jpg"/>
                        </a>
        
                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="font-bold text-xl text-gray-700" href="#">
                                    Marguerita
                                </a>
                            </h1>
                        </header>
        
                        <p class="text-gray-700 text-base p-2 md:p-4 flex items-center justify-between leading-tight">
                            Molho de tomate, Muçarela e Manjericão.                                                            
                        </p>
        
                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline text-black">
                                <p class="text-sm">
                                    R$35,00
                                </p>
                            </a>
                            <span class="material-symbols-outlined cursor-pointer text-grey-darker text-sm">
                                shopping_cart
                            </span>
                        </footer>

                    </article>
                    {/* <!-- END Article --> */}
        
                </div>
                {/* <!-- END Column --> */}
        
                {/* <!-- Column --> */}
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        
                    {/* <!-- Article --> */}
                    <article class="overflow-hidden rounded-lg shadow-lg bg-white">
        
                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="images/pizza-placeholder.jpg"/>
                        </a>
        
                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="font-bold text-xl text-gray-700" href="#">
                                    LBB
                                </a>
                            </h1>
                        </header>
        
                        <p class="text-gray-700 text-base p-2 md:p-4 flex items-center justify-between leading-tight">
                            Molho de tomate, Lombo, Bacon e Banana. 
                        </p>
        
                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline text-black">
                                <p class="text-sm">
                                    R$42,00
                                </p>
                            </a>
                            <span class="material-symbols-outlined cursor-pointer text-grey-darker text-sm">
                                shopping_cart
                            </span>
                        </footer>

                    </article>
                    {/* <!-- END Article --> */}
        
                </div>
                {/* <!-- END Column --> */}
        
                {/* <!-- Column --> */}
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        
                    {/* <!-- Article --> */}
                    <article class="overflow-hidden rounded-lg shadow-lg bg-white">
        
                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="images/pizza-placeholder.jpg"/>
                        </a>
        
                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="font-bold text-xl text-gray-700" href="#">
                                    Strogonoff de Frango
                                </a>
                            </h1>
                        </header>
        
                        <p class="text-gray-700 text-base p-2 md:p-4 flex items-center justify-between leading-tight">
                            Molho de strogonoff, frango e batata palha. 
                        </p>
        
                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline text-black">
                                <p class="text-sm">
                                    R$45,00
                                </p>
                            </a>
                            <span class="material-symbols-outlined cursor-pointer text-grey-darker text-sm">
                                shopping_cart
                            </span>
                        </footer>

                    </article>
                    {/* <!-- END Article --> */}
        
                </div>
                {/* <!-- END Column --> */}
        
                {/* <!-- Column --> */}
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        
                    {/* <!-- Article --> */}
                    <article class="overflow-hidden rounded-lg shadow-lg bg-white">
        
                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="images/pizza-placeholder.jpg"/>
                        </a>
        
                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="font-bold text-xl text-gray-700" href="#">
                                    Calabacon
                                </a>
                            </h1>
                        </header>
        
                        <p class="text-gray-700 text-base p-2 md:p-4 flex items-center justify-between leading-tight">
                            Molho de tomate, Muçarela, Presunto, Calabresa e Bacon. 
                        </p>
        
                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline text-black">
                                <p class="text-sm">
                                    R$40,00
                                </p>
                            </a>
                            <span class="material-symbols-outlined cursor-pointer text-grey-darker text-sm">
                                shopping_cart
                            </span>
                        </footer>

                    </article>
                    {/* <!-- END Article --> */}
        
                </div>
                {/* <!-- END Column --> */}
        
                {/* <!-- Column --> */}
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        
                    {/* <!-- Article --> */}
                    <article class="overflow-hidden rounded-lg shadow-lg bg-white">
        
                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="images/pizza-placeholder.jpg"/>
                        </a>
        
                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="font-bold text-xl text-gray-700" href="#">
                                    Pimenta
                                </a>
                            </h1>
                            <span class="material-symbols-outlined cursor-pointer text-grey-darker text-sm">
                                shopping_cart
                            </span>
                        </header>
        
                        <p class="text-gray-700 text-base p-2 md:p-4 flex items-center justify-between leading-tight">
                            Molho de tomate, Calabresa e pimenta. 
                        </p>
        
                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline text-black">
                                <p class="text-sm">
                                    R$35,00
                                </p>
                            </a>
                            <span class="material-symbols-outlined cursor-pointer text-grey-darker text-sm">
                                shopping_cart
                            </span>
                        </footer>

                    </article>
                    {/* <!-- END Article --> */}
        
                </div>
                {/* <!-- END Column --> */}
        
            </div>
        </div>          

    </div>
  );
}

export default PaginaPrincipal;