import { useState } from "react";
import wa_image from './img/whatspp-icon.png'

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
            <a href="https://web.whatsapp.com/send?phone=6285736656434&text=Helo Coco, I'm interested in your product .."><img src={wa_image} alt="" className="w-24 h-auto bottom-0 right-7 fixed" /></a>
            <header className="absolute z-100 bg-white dark:bg-gray-800 pb-9">
                <nav className={navbar ? 'fixed w-full bg-gray-900 shadow-lg' : 'fixed w-full bg-white-700 shadow-lg'}>
                    <div className="container px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center">
                        <div className="flex items-center justify-between">
                            <div>
                                <a className={navbar ? 'text-2xl font-bold text-white dark:text-white lg:text-3xl hover:text-gray-300 dark:hover:text-gray-300' : 'text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'}
                                    href="#">Global Coco Perkasa</a>
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
                                <a className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0'}
                                    href="index.html">Home</a>
                                <a className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0'}
                                    href="product.html">Our Product</a>
                                <a className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0'}
                                    href="faq.html">FAQ</a>
                                <a className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0'}
                                    href="about.html">About Us</a>
                            </div>

                        </div>
                    </div>
                </nav>
            </header>
        </div >
    );
}

export default Header;