import card1 from './img/part/card-icon.png'
import card2 from './img/part/card-icon2.png'
import card3 from './img/part/card-icon3.png'
import owner from './img/part/owner-photo.png'
import bluereact from './img/part/blue-rect.png'
import yellowreact from './img/part/yellow-rect.png'
import ellipse from './img/part/ellipse.png'

import slider1 from './img/slider1.png'
import briket1 from './img/briket1.jpg'
import briket2 from './img/briket2.jpg'
import briket3 from './img/briket3.jpg'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const Index = () => {
    return (
        <div className="w-screen overflow-x-hidden lg:pt-64 2xl:pt-8">
            <div class="container px-6 py-16 mx-auto ">
                <div class="items-center lg:flex">
                    <Splide options={{
                        rewind: true,
                        gap: '1rem',
                        arrows: 'slider',
                        autoplay: true,
                        type: 'loop',

                    }}>
                        <SplideSlide>
                            <div class="splide__progress">
                                <div class="splide__progress__bar"></div>
                            </div>
                            <div class="navbar">
                                <div class="invisible sm:visible sm:w-2/5 md:w-4/12 lg:w-3/5 sm:max-w-sm lg:max-w-lg text-left absolute left-10 top-16 lg:left-32 lg:top-48 bg-gray-50 bg-opacity-90 shadow-lg p-5 rounded-lg">
                                    <h1 class="w-4/5 font-bold text-blue-800 uppercase dark:text-white lg:text-3xl sm:text-lg md:text-xl"><span
                                        class="text-yellow-500">Welcome! </span>Java Agro Globalindo</h1>
                                    <p class="mt-2 sm:text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400">Give quality products with the best service.</p>
                                    <button
                                        class="w-full px-8 py-4 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-500 rounded-full lg:w-auto hover:bg-yellow-500 focus:outline-none focus:bg-indigo-500">
                                        Shop Now</button>
                                </div>
                                <div class="flex justify-center mx-auto">
                                    <img src={slider1} alt="" />
                                    {/* <video class="aligns-center w-full h-auto" autoPlay={true} muted loop>
                                        <source src={slider1} type="video/mp4" />
                                    </video> */}
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>

            {/* Greetings */}
            <section className="container mx-auto my-4">
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-center text-3xl text-blue-900">All Type Commodities  <span className="text-yellow-500">with Premium Quality</span></h1>
                    <p className="font-regular text-xl text-center mx-auto w-4/5 sm:w-3/6">Product Quality : Premium Commodity, Medium Commodity, Standard Commodity</p>
                </div>
            </section>
            {/* Card */}
            <section className="container mx-auto flex justify-center mt-24 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="card w-72 h-36 text-center box-border shadow-lg rounded-lg relative">
                        <img src={card1} alt="" className="absolute card-icon" />
                        <h1 className="font-semibold text-blue-800 pt-16 pb-3 text-xl">Ease of Payment</h1>
                        {/* <p className="text-based font-regular">Simple and secure control of your organization’s financial and legal
                            transactions. Send customized invoices and contracts</p> */}
                    </div>
                    <div className="card w-72 h-36 text-center box-border shadow-lg rounded-lg relative">
                        <img src={card2} alt="" className="absolute card-icon" />
                        <h1 className="font-semibold text-blue-800 pt-16 pb-3 text-xl">On Time Delivery</h1>
                        {/* <p className="text-based font-regular">Simple and secure control of your organization’s financial and legal
                            transactions. Send customized invoices and contracts</p> */}
                    </div>
                    <div className="card w-72 h-36 text-center box-border shadow-lg rounded-lg relative">
                        <img src={card3} alt="" className="absolute card-icon" />
                        <h1 className="font-semibold text-blue-800 pt-16 pb-3 text-xl">Guaranteed Products</h1>
                        {/* <p className="text-based font-regular">Simple and secure control of your organization’s financial and legal
                            transactions. Send customized invoices and contracts</p> */}
                    </div>
                </div>
            </section>
            {/* VideoPlayer */}
            <section className="container mx-auto mt-28">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="relative w-full text-left ml-14">
                        <img src={ellipse} alt="" className="absolute part-vid-capt" />
                        <h1 className="font-bold text-3xl text-blue-900 w-3/5 z-10">
                            Indonesian Premium Commodities<span className="text-yellow-500">, Focus on production quality</span>
                        </h1>
                        <p className="font-regular text-lg text-gray-900 mt-5 w-4/5">We partner with commodity suppliers from all over Indonesia, with the best quality control system.</p>
                    </div>
                    <div className="relative ml-4 xl:ml-52 lg:mt-0 mt-20">
                        {/* video youtube */}
                        <img src={bluereact} alt="" className="absolute vid-backg" />
                        <iframe width={560} height={315} className="w-11/12 sm:h-80 h-64" src="https://www.youtube.com/embed/RIm6N46ymeA" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        <img src={yellowreact} alt="" className="ml-80 absolute vid-backg-sec" />
                    </div>
                </div>
            </section>
            {/* Owner Said */}
            <section className="container mx-auto mt-24 mb-12">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2">
                    <div className="w-5/6 py-24 ml-14 text-left">
                        <h1 className="text-blue-900 font-bold text-3xl w-3/5 leading-normal"><span className="text-yellow-500">Commitmen</span> to Provide Best Quality</h1>
                        <p className="font-regular text-lg mt-5">Supervise every stage of the production process, maintain the production process for the highest quality results</p>
                    </div>
                    <div className="w-5/6 flex justify-end mr-10">
                        <img src={owner} alt="" className="w-3/4 h-auto" />
                    </div>
                </div>
            </section>
            {/* Testimonial */}
            <section className="container mx-auto mt-24 mb-12">
                <div className="flex flex-col">
                    {/* testimonial phrase */}
                    <div className="flex flex-row justify-end mr-16">
                        <h1 className="text-base font-medium text-blue-800 flex justify-end">Product</h1>
                        <hr className="w-1/12 font-bold mt-3 mx-5" />
                    </div>
                    {/* what they say */}
                    <div className="flex justify-end mr-16">
                        <h1 className="text-3xl sm:text-4xl text-blue-800 font-bold">This is our best product</h1>
                    </div>
                    {/* box */}
                    <Splide options={{
                        rewind: true,
                        gap: '1rem',
                        arrows: 'slider',
                        autoplay: true,
                        type: 'loop',

                    }}>
                        <SplideSlide>
                            <div className="flex justify-center lg:p-16 p-0 mt-8 ">
                                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                    <img class="w-full" src={briket3} alt="Sunset in the mountains" />
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2">Grade A</div>
                                        <p class="text-gray-700 text-base">
                                            Material 100 % Coconut charcoal al Briquettes, calorie value 7000-7200 Kilo calorie, Total Moisture 7%, Ash Contain 2% and white ash, Fixed Carbon 80% - 85%
                                        </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">master box included</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">customized</span>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="flex justify-center lg:p-16 p-0 mt-8 ">
                                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                    <img class="w-full" src={briket2} alt="Sunset in the mountains" />
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2">Medium</div>
                                        <p class="text-gray-700 text-base">
                                            Material 100 % Coconut charchoal, calorie value about 7000 kilo calorie, White Ash and contain 2.5%, Fixed Carbon 80%
                                        </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Size 3.5x2.5x2.5cm</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Size 3x3x3cm</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Size 2.5x2.5x5cm</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Can be Costumized</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Package Master Box 10kg included</span>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="flex justify-center lg:p-16 p-0 mt-8 ">
                                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                    <img class="w-full" src={briket1} alt="Sunset in the mountains" />
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2">Standard</div>
                                        <p class="text-gray-700 text-base">
                                            Material 80% Coco 20% Coco Granul Charchoal, Calorie value about 6500-7000 kilo calorie, Total Moisture 7-10%, White Ash and Contain 4-5%, Fixed Carbon 75%
                                        </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Size 2.5x2.5x2.5cm</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Can be Customized</span>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </section>
            {/* Reach Us */}
            <section className="container mx-auto mt-24 mb-12">
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-3xl text-blue-800 text-center">You can reach us!</h1>
                    <p className="text-base font-light text-center">By Submitting your email here, we can send you our catalog!</p>
                    <div className="flex flex-row justify-center mt-6">
                        <input type="text" placeholder="Write down your email here!" className="border-blue-800 border-2 border-opacity-25 rounded-full py-2 px-2 w-3/12 mr-5" />
                        <button className="bg-blue-800 rounded-full px-5 py-2 text-white font-semibold w-32">Submit</button>
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
        </div >
    )
}

export default Index