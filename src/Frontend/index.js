import card1 from './img/part/card-icon.png'
import card2 from './img/part/card-icon2.png'
import card3 from './img/part/card-icon3.png'
import owner from './img/part/owner-photo.png'
import bluereact from './img/part/blue-rect.png'
import yellowreact from './img/part/yellow-rect.png'
import ellipse from './img/part/ellipse.png'
import img from './img/download.jfif'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const index = () => {
    return (
        <div className="pt-32">
            <div class="container px-6 py-16 mx-auto">
                <div class="items-center lg:flex">
                    <Splide options={{
                        rewind: true,
                        gap: '1rem',
                    }}>
                        <SplideSlide>
                            <div class="flex flex-row">
                                <div class="w-full pl-32 pt-10 lg:w-1/2">
                                    <div class="lg:max-w-lg text-left">
                                        <h1 class="text-4xl w-4/5 font-bold text-blue-800 uppercase dark:text-white lg:text-3xl"><span
                                            class="text-yellow-500">Lorem</span> Ipsum Dolor sit Amet</h1>
                                        <p class="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus
                                            perspiciatis optio.</p>
                                        <button
                                            class="w-full px-8 py-4 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-500 rounded-full lg:w-auto hover:bg-yellow-500 focus:outline-none focus:bg-indigo-500">Shop
                                            Now</button>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                    <img class="w-3/5 h-10/12 shadow-lg" src={img} alt="Catalogue-pana.svg" />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="flex flex-row">
                                <div class="w-full  pl-32 pt-10 lg:w-1/2">
                                    <div class="lg:max-w-lg text-left">
                                        <h1 class="text-4xl w-4/5 font-bold text-blue-800 uppercase dark:text-white lg:text-3xl"><span
                                            class="text-yellow-500">Lorem</span> Ipsum Dolor sit Amet</h1>
                                        <p class="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus
                                            perspiciatis optio.</p>
                                        <button
                                            class="w-full px-8 py-4 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-500 rounded-full lg:w-auto hover:bg-yellow-500 focus:outline-none focus:bg-indigo-500">Shop
                                            Now</button>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                    <img class="w-3/5 h-10/12 shadow-lg" src={img} alt="Catalogue-pana.svg" />
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>

            {/* Greetings */}
            <section className="container mx-auto my-12">
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-center text-3xl text-blue-900">All Type Bracket <span className="text-yellow-500">with
                        Premium
                        Quality</span></h1>
                    <p className="font-regular text-xl text-center mx-auto w-3/6">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Aenean vel
                        efficitur augue. Etiam lorem mauris, viverra sed pharetra non</p>
                </div>
            </section>
            {/* Card */}
            <section className="container mx-auto flex justify-center mt-24 mb-12">
                <div className="grid grid-cols-3 gap-12">
                    <div className="card w-72 h-72 text-center box-border shadow-lg rounded-lg relative">
                        <img src={card1} alt="" className="absolute card-icon" />
                        <h1 className="font-semibold text-blue-800 pt-16 pb-3 text-xl">Online Billing, Invoicing &amp; Contracts</h1>
                        <p className="text-based font-regular">Simple and secure control of your organization’s financial and legal
                            transactions. Send customized invoices and contracts</p>
                    </div>
                    <div className="card w-72 h-72 text-center box-border shadow-lg rounded-lg relative">
                        <img src={card2} alt="" className="absolute card-icon" />
                        <h1 className="font-semibold text-blue-800 pt-16 pb-3 text-xl">Easy Scheduling & &amp; Shipping Tracking</h1>
                        <p className="text-based font-regular">Simple and secure control of your organization’s financial and legal
                            transactions. Send customized invoices and contracts</p>
                    </div>
                    <div className="card w-72 h-72 text-center box-border shadow-lg rounded-lg relative">
                        <img src={card3} alt="" className="absolute card-icon" />
                        <h1 className="font-semibold text-blue-800 pt-16 pb-3 text-xl">Online Billing, Invoicing &amp; Contracts</h1>
                        <p className="text-based font-regular">Simple and secure control of your organization’s financial and legal
                            transactions. Send customized invoices and contracts</p>
                    </div>
                </div>
            </section>
            {/* VideoPlayer */}
            <section className="container mx-auto mt-28">
                <div className="flex">
                    <div className="relative w-full text-left">
                        <img src={ellipse} alt="" className="absolute part-vid-capt" />
                        <h1 className="font-bold text-3xl text-blue-900 w-3/5 z-10">
                            Lorem ipsum dolor sit amet, consect.<span className="text-yellow-500"> Focus on Quality
                                Production</span>
                        </h1>
                        <p className="font-regular text-based text-gray-900 mt-10 w-4/5">Lorem ipsum dolor sit amet, consectetur
                            adipiscing
                            elit. Donec in vestibulum nibh. Morbi euismod quam
                            purus, et mattis enim blandit vitae. Nullam vel tellus liberopellentesque.</p>
                    </div>
                    <div className="relative">
                        {/* video youtube */}
                        <img src={bluereact} alt="" className="absolute vid-backg" />
                        <iframe width={560} height={315} src="https://www.youtube.com/embed/RIm6N46ymeA" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        <img src={yellowreact} alt="" className="absolute vid-backg-sec" />
                    </div>
                </div>
            </section>
            {/* Owner Said */}
            <section className="container mx-auto mt-24 mb-12">
                <div className="flex w-full text-left">
                    <div className="w-1/2 py-24">
                        <h1 className="text-blue-900 font-bold text-3xl w-3/5 leading-normal"><span className="text-yellow-500">Commitmen</span> to Provide Best Quality</h1>
                        <p className="font-regular text-lg mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
                            vestibulum nibh. Morbi euismod quam
                            purus, et mattis enim blandit vitae. Nullam vel tellus libero. Curabitur non tortor quis ipsum
                            bibendum porta. Nulla auctor est vel nunc imperdiet, ut scelerisque mi pellentesque.</p>
                    </div>
                    <div className="w-1/2 flex justify-end mr-10">
                        <img src={owner} alt="" className="w-3/4 h-auto" />
                    </div>
                </div>
            </section>
            {/* Testimonial */}
            <section className="container mx-auto mt-24 mb-12">
                <div className="flex flex-col">
                    {/* testimonial phrase */}
                    <div className="flex flex-row justify-end mr-16">
                        <h1 className="text-base font-medium text-blue-800 flex justify-end">Testimonial</h1>
                        <hr className="w-1/12 font-bold mt-3 mx-5" />
                    </div>
                    {/* what they say */}
                    <div className="flex justify-end mr-16">
                        <h1 className="text-4xl text-blue-800 font-bold">What They Say?</h1>
                    </div>
                    {/* box */}
                    <div className="flex justify-center mt-12">
                        <div className="box-border w-full text-left h-64 border-2 border-blue-800 rounded-lg shadow-lg p-10 border-opacity-5">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in vestibulum nibh. Morbi euismod
                                quam purus, et mattis enim blandit vitae. Nullam vel tellus libero. Curabitur non tortor quis
                                ipsum bibendum porta. Nulla auctor est vel nunc imperdiet, ut scelerisque mi pellentesque.
                                Praesent sed tincidunt turpis, a congue justo. Nulla facilisi. Nam aliquam cursus velit.
                                Pellentesque placerat ipsum a nisl hendrerit, id dapibus libero tristique</p>
                            <div className="flex flex-row mt-8">
                                <i className="fas fa-star text-yellow-400" />
                                <i className="fas fa-star text-yellow-400" />
                                <i className="fas fa-star text-yellow-400" />
                                <i className="fas fa-star text-yellow-400" />
                                <i className="fas fa-star text-yellow-400" />
                            </div>
                            <div className="flex flex-row mt-2">
                                <h1 className="text-lg font-medium text-blue-800">Alvin Dimas</h1>
                                <hr className="w-1/12 mt-4 ml-5" />
                            </div>
                            <h1 className=" font-light text-lg text-blue-800">Serawak, Malaysia</h1>
                        </div>
                    </div>
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
        </div >
    );
}

export default index;