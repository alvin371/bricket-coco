import img from './img/about-us.png'
import company from './img/charlize-birdsinger-7b49gfsgQZY-unsplash.jpg'
import kemendag from './img/kemendag.png'
import kemenkunham from './img/Kemenhukham.png'
import sucofindo from './img/sucofindo.png'
import beacukai from './img/beacukai.png'
import Founder from './img/user-icon.png'
import Elsa from './img/elsa.jpg'
import Revo from './img/revo.jpg'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const About = () => {
    return (
        <div className="pt-32 w-screen overflow-x-hidden">
            <div class="container px-6 py-2 mx-auto ">
                <div class="items-center lg:flex">
                    <Splide options={{
                        rewind: true,
                        gap: '1rem',
                        arrows: 'slider',
                        autoplay: true,
                    }}>
                        <SplideSlide>
                            <div class="navbar">
                                <div class="w-4/5 sm:max-w-lg text-left absolute left-11 md:left-32 md:top-24 sm:top-20 top-2 bg-gray-50 bg-opacity-90 shadow-lg md:p-5 p-2 rounded-lg">
                                    <h1 class="w-4/5 font-bold text-blue-800 uppercase dark:text-white lg:text-3xl sm:text-lg md:text-xl"><span
                                        class="text-yellow-500">Welcome!</span><br /> Java Agro Globalindo</h1>
                                    <p class="text-xs sm:text-sm lg:text-base mt-2 text-gray-600 dark:text-gray-400">Providing quality products with the best service.</p>
                                    <button
                                        class="w-full px-8 sm:py-4 py-2 sm:mt-6 mt-2 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-500 rounded-full lg:w-auto hover:bg-yellow-500 focus:outline-none focus:bg-indigo-500">Shop
                                        Now</button>
                                </div>
                                <div class="flex justify-center mx-auto">
                                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 bg-white">
                                        <img className=" h-full lg:max-w-2xl p-5" src={img} alt="Catalogue-pana.svg" />
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="navbar">
                                <div class="w-4/5 sm:max-w-lg text-left absolute left-11 md:left-32 md:top-24 sm:top-20 top-2 bg-gray-50 bg-opacity-90 shadow-lg md:p-5 p-2 rounded-lg">
                                    <h1 class="w-4/5 font-bold text-blue-800 uppercase dark:text-white lg:text-3xl sm:text-lg md:text-xl"><span
                                        class="text-yellow-500">Welcome!</span><br /> Java Agro Globalindo</h1>
                                    <p class="text-xs sm:text-sm lg:text-base mt-2 text-gray-600 dark:text-gray-400">Providing quality products with the best service.</p>
                                    <button
                                        class="w-full px-8 sm:py-4 py-2 sm:mt-6 mt-2 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-500 rounded-full lg:w-auto hover:bg-yellow-500 focus:outline-none focus:bg-indigo-500">Shop
                                        Now</button>
                                </div>
                                <div class="flex justify-center mx-auto">
                                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 bg-white">
                                        <img className=" h-full lg:max-w-2xl p-5" src={img} alt="Catalogue-pana.svg" />
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
            {/* Company Profile */}
            <section className="container mx-auto">
                <div className="grid grid-cols-1 sm:flex">
                    <div className=" sm:w-1/2 m-5">
                        <img src={company} alt="" className="sm:w-5/5 lg:w-4/5 mx-auto h-auto shadow-lg" />
                    </div>
                    <div className=" sm:w-1/2 mx-5">
                        <p className="text-left font-normal text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin venenatis sed magna at pharetra. Nulla
                            hendrerit, libero sed rhoncus hendrerit, felis mi volutpat tellus, ut efficitur mi est id lectus.
                            Nullam et auctor nisi, id placerat augue. Donec vitae metus at augue luctus porttitor. Vestibulum
                            elit odio, placerat ut odio vitae, luctus feugiat erat. Morbi et imperdiet est, eget feugiat dolor.
                            Pellentesque vel diam id ex venenatis ultrices. Mauris malesuada vel massa ut egestas. Vivamus
                            fringilla magna dolor, sit amet aliquam dolor consectetur eget. </p>
                    </div>
                </div>
            </section>
            {/* Registered At */}
            <section className="container mx-auto my-10">
                <div className="flex flex-col">
                    <div className>
                        <h1 className="font-bold text-4xl text-center mb-10">We Are Registered On</h1>
                    </div>
                    <div className="xl:flex xl:flex-row xl:justify-center grid grid-cols-6 lg:grid-cols-2">
                        <img src={kemendag} className="col-start-2 col-span-4 lg:col-auto xl:w-auto xl:h-32 xl:m-5 " alt="" />
                        <img src={kemenkunham} className="col-start-1 col-span-3 lg:col-auto xl:w-auto xl:h-32 xl:m-5" alt="" />
                        <img src={sucofindo} className="col-end-6 col-span-2 lg:col-auto xl:w-auto xl:h-32 xl:m-5" alt="" />
                        <img src={beacukai} className="col-start-2 col-span-5 lg:col-auto xl:w-auto xl:h-32 xl:m-5" alt="" />
                    </div>
                </div>
            </section>
            {/* Founder */}
            <section className="container mx-auto mt-24 mb-12">
                <div class="grid grid-cols-1 lg:flex lg:flex-row lg:justify-center justify-items-center">
                    <div class="flex flex-col justified-center my-5">
                        <img src={Founder} alt="" className="rounded-full mx-auto sm:mx-10 w-64 h-64 object-cover" />
                        <h1 className="drop-shadow-2xl text-center font-semibold text-lg mt-4">Founder</h1>
                        <button className="rounded-lg bg-red-500 hover:bg-red-400 px-10 flex flex-row py-2 mx-auto"><p className="text-white font-semibold">Yasa Wahyudi</p></button>
                    </div>
                    <div class="flex flex-col justified-center my-5">
                        <img src={Revo} alt="" className="rounded-full mx-auto sm:mx-10 w-64 h-64 object-cover" />
                        <h1 className="drop-shadow-2xl text-center font-semibold text-lg mt-4">Product Development And Logistics</h1>
                        <button className="rounded-lg bg-red-500 hover:bg-red-400 px-10 flex flex-row py-2 mx-auto"><p className="text-white font-semibold">Revoliansyah Nur Rasyid</p></button>
                    </div>
                    <div class="flex flex-col justified-center my-5">
                        <img src={Elsa} alt="" className="rounded-full mx-auto sm:mx-10 w-64 h-64 object-cover" />
                        <h1 className="drop-shadow-2xl text-center font-semibold text-lg mt-4">Bussiness And Legal</h1>
                        <button className="rounded-lg bg-red-500 hover:bg-red-400 px-10 flex flex-row py-2 mx-auto"><p className="text-white font-semibold">Elsa Ansori</p></button>
                    </div>
                </div>
            </section>
            {/* Form and Map */}
            <section className="container mx-auto mt-24 mb-12">
                <div className="flex flex-row justify-center">
                    {/* Form */}
                    <div className="lg:w-1/2 md:w-3/4 w-5/6">
                        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">Get in touch</h2>
                        <p className="mt-3 text-center text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit.</p>
                        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
                            <button className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="mt-2">121 Street, NY</span>
                            </button>
                            <button className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="mt-2">+2499999666600</span>
                            </button>
                            <button className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span className="mt-2">example@example.com</span>
                            </button>
                        </div>
                        <div className="mt-6 ">
                            <div className="items-center -mx-2 md:flex">
                                <div className="w-full mx-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>
                                    <input className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text" />
                                </div>
                                <div className="w-full mx-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">E-mail</label>
                                    <input className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" />
                                </div>
                            </div>
                            <div className="w-full mt-4 mx-2 sm:mx-0">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>
                                <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" defaultValue={""} />
                            </div>
                            <div className="flex justify-center mt-6">
                                <button className="px-4 py-2 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send
                                    Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="container mx-auto mt-10">
                <div className="grid grid-cols-1 lg:flex lg:justify-start lg:mr-24 mr-0">
                    <div className="text-center w-full lg:w-7/12 lg:mx-0 xl:mx-8 ">
                        <h1 className=" text-2xl font-bold">PT. JAVA AGRO GLOBALINDO</h1>
                        <p className="mt-6 m-2">We also continue to update the information about the company through social media, for the latest information you can follow our social media.  </p>
                        <div class="grid grid-cols-3 text-xs sm:text-base gap-2 mt-10 mx-3">
                            <a href="https://web.whatsapp.com/send?phone=6281216610559&text=Helo Java Agro Global Indo, I'm interested in your product .." className="rounded-full bg-green-500 font-bold text-white py-2 px-4 sm:px-6"><i className="fab fa-whatsapp text-white mr-1 sm:mr-3" />
                                Whatsapp</a>
                            <a href=" " className="rounded-full bg-pink-500 font-bold text-white py-2 px-4 sm:px-7"><i className="fab fa-instagram text-white mr-1 sm:mr-3" />
                                Instagram</a>
                            <a href=" " className="rounded-full bg-blue-500 font-bold text-white py-2 px-4 sm:px-7"><i className="fab fa-facebook mr-1 sm:mr-3" />
                                Facebook </a>
                            <a href=" " className="rounded-full bg-red-500 font-bold text-white py-2 px-4 sm:px-7"><i className=" fab fa-youtube mr-1 sm:mr-3" />
                                Youtube </a>
                            <button href="" className="rounded-full bg-gray-700 font-bold text-white py-2 px-6 sm:px-9"><i className="flex justify-center fab fa-tiktok mr-1 sm:mr-3" />
                                Tiktok
                            </button>
                        </div>
                    </div>
                    <div className="flex lg:justify-center justify-center w-full lg:w-5/12 pt-8">
                        <table className="border-0 text-left text-xs sm:text-base">
                            <tbody><tr>
                                <td className="px-4">Main Office</td>
                                <td className="px-4">: Pasuruan - Jawa Timur</td>
                            </tr>
                                <tr>
                                    <td className="px-4">Branch Office</td>
                                    <td className="px-4">: Pasuruan Indonesia</td>
                                </tr>
                                <tr>
                                    <td className="px-4">Call</td>
                                    <td className="px-4">:+62 812-1661-0559</td>
                                </tr>
                                <tr>
                                    <td className="px-4">Email</td>
                                    <td className="px-4">: ptjavaagroglobalindo@gmail.com</td>
                                </tr>
                            </tbody></table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About