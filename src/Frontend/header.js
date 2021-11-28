import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <div className="relative">
            <a href="https://web.whatsapp.com/send?phone=6285736656434&text=Helo Coco, I'm interested in your product .." className="flex flex-row w-24 h-auto top-28 right-5 fixed bg-green-500 hover:bg-green-400 px-3 py-4 w-44 rounded-tl-full rounded-bl-full rounded-br-full z-100">
                <p className="text-white font-bold text-medium"><i className="fab fa-whatsapp text-xl mx-2"></i>Reach Us Here!</p>
            </a>
            <header className="absolute z-100 bg-white dark:bg-gray-800 pb-9">
                <nav className={navbar ? 'fixed w-full bg-gray-900 shadow-lg' : 'fixed w-full bg-white-700 shadow-lg'}>
                    <div className="container px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center">
                        <div className="flex items-center justify-between">
                            <div>
                                <Link to="/" className={navbar ? 'text-2xl font-bold text-white dark:text-white lg:text-3xl hover:text-gray-300 dark:hover:text-gray-300' : 'text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'}
                                >Global Coco Perkasa</Link>
                            </div>
                            <div className="flex lg:hidden">
                                <button type="button"
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path fill-rule="evenodd"
                                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="items-center lg:flex">
                            <div className="flex flex-col lg:flex-row lg:mx-24">
                                <Link className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0'}
                                    to="/">Home</Link>
                                <Link className={navbar ? 'flex flex-row my-1 text-sm font-medium navbar-text lg:mx-10 lg:my-0 inline-block relative dropdown' : 'my-1 text-sm font-medium navbar-first lg:mx-10 lg:my-0 inline-block relative dropdown'}
                                    to="/product">
                                    <div class="relative z-10 flex items-center ">
                                        <span className="flex flex-row">Our Product </span>
                                        <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <span className="w-1/4">
                                        <ul class="dropdown-menu absolute hidden text-gray-700 mt-4 ">
                                            <li className=""><Link to="" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-6 block whitespace-no-wrap">One</Link></li>
                                            <li className=""><Link to="" className="bg-gray-200 hover:bg-gray-400 py-2 px-6 block whitespace-no-wrap">Two</Link></li>
                                            <li className=""><Link to="" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-6 block whitespace-no-wrap">Three is the magic number</Link></li>
                                        </ul>
                                    </span>
                                </Link>
                                <Link className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0'}
                                    to="/faq">FAQ</Link>
                                <Link className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0'}
                                    to="/about">About Us</Link>
                            </div>
                        </div>
                        <div className="items-end">
                            <Link className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0'}
                                to="/login">Login</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div >
    );
}

export default Header;