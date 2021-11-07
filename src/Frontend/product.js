import img from './img/download.jfif'
import sun from './img/part/Sun.png'


import Modals from './productModals'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useState } from 'react';
const Product = () => {
    const [modal, setModal] = useState(false)
    return (
        <div className="pt-32">
            {modal && <Modals closeModal={setModal} />}
            <Splide options={{
                rewind: true,
                gap: '1rem',
                arrows: 'slider',
                autoplay: true,
            }}>
                <SplideSlide>
                    <div class="container px-6 py-16 mx-auto">
                        <div class="items-center lg:flex">
                            <div class="w-full lg:w-1/2">
                                <div class="lg:max-w-lg">
                                    <h1 class="text-4xl w-4/5 font-bold text-blue-800 uppercase dark:text-white lg:text-3xl"><span
                                        class="text-yellow-500">Lorem</span> Ipsum Dolor sit Amet</h1>
                                    <p class="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit.Porro beatae error laborum ab amet sunt recusandae?Reiciendis natus
                                        perspiciatis optio.</p>
                                    <button
                                        class="w-full px-8 py-4 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-500 rounded-full lg:w-auto hover:bg-yellow-500 focus:outline-none focus:bg-indigo-500">Shop
                                        Now</button>
                                    <button
                                        class="w-full px-8 py-4 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-500 rounded-full lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-indigo-500">Brochure</button>
                                </div>
                            </div>

                            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                <img class="w-3/5 h-10/12 shadow-lg" src={img} alt="Catalogue-pana.svg" />
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="container px-6 py-16 mx-auto">
                        <div class="items-center lg:flex">
                            <div class="w-full lg:w-1/2">
                                <div class="lg:max-w-lg">
                                    <h1 class="text-4xl w-4/5 font-bold text-blue-800 uppercase dark:text-white lg:text-3xl"><span
                                        class="text-yellow-500">Lorem</span> Ipsum Dolor sit Amet</h1>
                                    <p class="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit.Porro beatae error laborum ab amet sunt recusandae?Reiciendis natus
                                        perspiciatis optio.</p>
                                    <button
                                        class="w-full px-8 py-4 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-500 rounded-full lg:w-auto hover:bg-yellow-500 focus:outline-none focus:bg-indigo-500">Shop
                                        Now</button>
                                    <button
                                        class="w-full px-8 py-4 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-500 rounded-full lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-indigo-500">Brochure</button>
                                </div>
                            </div>

                            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                <img class="w-3/5 h-10/12 shadow-lg" src={img} alt="Catalogue-pana.svg" />
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="container px-6 py-16 mx-auto">
                        <div class="items-center lg:flex">
                            <div class="w-full lg:w-1/2">
                                <div class="lg:max-w-lg">
                                    <h1 class="text-4xl w-4/5 font-bold text-blue-800 uppercase dark:text-white lg:text-3xl"><span
                                        class="text-yellow-500">Lorem</span> Ipsum Dolor sit Amet</h1>
                                    <p class="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit.Porro beatae error laborum ab amet sunt recusandae?Reiciendis natus
                                        perspiciatis optio.</p>
                                    <button
                                        class="w-full px-8 py-4 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-500 rounded-full lg:w-auto hover:bg-yellow-500 focus:outline-none focus:bg-indigo-500">Shop
                                        Now</button>
                                    <button
                                        class="w-full px-8 py-4 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-500 rounded-full lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-indigo-500">Brochure</button>
                                </div>
                            </div>

                            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                <img class="w-3/5 h-10/12 shadow-lg" src={img} alt="Catalogue-pana.svg" />
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
            {/* BreadCrumb */}
            <section className="container mx-auto mt-12 mb-12">
                <h1 className="font-bold text-2xl text-yellow-400"><a href className="no-underline mr-5">Home</a>/<span className="text-blue-900 ml-5">Our Product</span></h1>
                <hr className="w-2/12" />
            </section>
            {/* Title Quality */}
            <section className="container mx-auto mt-12 mb-12">
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-2xl text-center">Premium Quality Bricket</h1>
                    <p className="text-base font-normal text-center">We focus on building premium quality bricket with lower prices
                    </p>
                </div>
            </section>
            {/* Card Quality */}
            <section className="container mx-auto mt-12 mb-12">
                <div className="grid grid-flow-row grid-cols-3 gap-4">
                    <div className="flex border-box border-2 rounded-lg shadow-md border-blue-600 border-opacity-10 p-5">
                        <div className="w-1/4">
                            <img src={sun} alt="" />
                        </div>
                        <div className="w-3/4">
                            <h1 className="font-extrabold text-blue-800 text-xl">Lorem Ipsum</h1>
                            <p className="font-medium text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse et urna </p>
                        </div>
                    </div>
                    <div className="flex border-box border-2 rounded-lg shadow-md border-blue-600 border-opacity-10 p-5">
                        <div className="w-1/4">
                            <img src={sun} alt="" />
                        </div>
                        <div className="w-3/4">
                            <h1 className="font-extrabold text-blue-800 text-xl">Lorem Ipsum</h1>
                            <p className="font-medium text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse et urna </p>
                        </div>
                    </div>
                    <div className="flex border-box border-2 rounded-lg shadow-md border-blue-600 border-opacity-10 p-5">
                        <div className="w-1/4">
                            <img src={sun} alt="" />
                        </div>
                        <div className="w-3/4">
                            <h1 className="font-extrabold text-blue-800 text-xl">Lorem Ipsum</h1>
                            <p className="font-medium text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse et urna </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center p-5">
                    <div className="flex border-box border-2 rounded-lg shadow-md border-blue-600 border-opacity-10 p-5 mx-3 w-4/12">
                        <div className="w-1/4">
                            <img src={sun} alt="" />
                        </div>
                        <div className="w-3/4">
                            <h1 className="font-extrabold text-blue-800 text-xl">Lorem Ipsum</h1>
                            <p className="font-medium text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse et urna </p>
                        </div>
                    </div>
                    <div className="flex border-box border-2 rounded-lg shadow-md border-blue-600 border-opacity-10 p-5 mx-3 w-4/12">
                        <div className="w-1/4">
                            <img src={sun} alt="" />
                        </div>
                        <div className="w-3/4">
                            <h1 className="font-extrabold text-blue-800 text-xl">Lorem Ipsum</h1>
                            <p className="font-medium text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse et urna </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Quality */}
            <section className="container mx-auto mt-24 mb-12">
                <div className="grid grid-flow-row grid-cols-3">
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology
                                    acquisitions 2021</h5>
                            </a>
                            <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of
                                2021 so far, in reverse chronological order.</p>
                            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={() => setModal(true)}>
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology
                                    acquisitions 2021</h5>
                            </a>
                            <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of
                                2021 so far, in reverse chronological order.</p>
                            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={() => setModal(true)}>
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology
                                    acquisitions 2021</h5>
                            </a>
                            <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of
                                2021 so far, in reverse chronological order.</p>
                            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={() => setModal(true)}>
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology
                                    acquisitions 2021</h5>
                            </a>
                            <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of
                                2021 so far, in reverse chronological order.</p>
                            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={() => setModal(true)}>
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology
                                    acquisitions 2021</h5>
                            </a>
                            <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of
                                2021 so far, in reverse chronological order.</p>
                            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={() => setModal(true)}>
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology
                                    acquisitions 2021</h5>
                            </a>
                            <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of
                                2021 so far, in reverse chronological order.</p>
                            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={() => setModal(true)}>
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact */}
            <section className="container mx-auto mt-10">
                <div className="flex justify-start mr-24">
                    <div className="text-center w-5/12">
                        <h1 className=" text-2xl font-bold">PT. Global Coco Perkasa</h1>
                        <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus eget nulla eu
                            elementum. Curabitur
                            lobortis eros egestas pharetra maximus. Donec bibendum neque massa, at consectetur leo volutpat
                            dignissim. In quam quam, blandit sit amet porta eget, convallis iaculis nulla. </p>
                        <div className="button-socmed mt-12">
                            <button className="rounded-full bg-green-500 font-bold text-white py-2 px-9"><i className="fab fa-whatsapp text-white mr-1" />
                                Whatsapp</button>
                            <button className="rounded-full ml-10 bg-gradient-to-r from-white via-pink-400 to-purple-500 font-bold text-white py-2 px-9"><i className="fab fa-instagram text-white mr-1" />
                                Instagram</button>
                            <button className="rounded-full ml-10 bg-blue-500 font-bold text-white py-2 px-9"><i className="fab fa-telegram mr-1" />
                                Telegram </button>
                        </div>
                    </div>
                    <div className="flex justify-end text-left w-7/12 pt-8">
                        <table className="border-0">
                            <tbody><tr>
                                <td className="px-4">Main Office</td>
                                <td className="px-4">: Pasuruan - Indonesia</td>
                            </tr>
                                <tr>
                                    <td className="px-4">Branch Office</td>
                                    <td className="px-4">: Malang Indonesia</td>
                                </tr>
                                <tr>
                                    <td className="px-4">Telp</td>
                                    <td className="px-4">: 0342-6453882</td>
                                </tr>
                                <tr>
                                    <td className="px-4">Email</td>
                                    <td className="px-4">: customer@cocoperkasa.com</td>
                                </tr>
                            </tbody></table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Product;