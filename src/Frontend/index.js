import card1 from './img/part/card-icon.png'
import card2 from './img/part/card-icon2.png'
import card3 from './img/part/card-icon3.png'
import owner from './img/part/owner-photo.png'
import bluereact from './img/part/blue-rect.png'
import yellowreact from './img/part/yellow-rect.png'
import ellipse from './img/part/ellipse.png'

import video1 from './img/video1.mp4'
import video2 from './img/video2.mp4'

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
                    }}>
                        <SplideSlide>
                            <div class="navbar">
                                <div class="invisible sm:visible sm:w-2/5 md:w-4/12 lg:w-3/5 sm:max-w-sm lg:max-w-lg text-left absolute left-10 top-16 lg:left-32 lg:top-48 bg-gray-50 bg-opacity-90 shadow-lg p-5 rounded-lg">
                                    <h1 class="w-4/5 font-bold text-blue-800 uppercase dark:text-white lg:text-3xl sm:text-lg md:text-xl"><span
                                        class="text-yellow-500">Selamat Datang! </span>Java Agro Globalindo</h1>
                                    <p class="mt-2 sm:text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400">Memberikan Kualitas produk dengan pelayanan terbaik .</p>
                                    <button
                                        class="w-full px-8 py-4 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-500 rounded-full lg:w-auto hover:bg-yellow-500 focus:outline-none focus:bg-indigo-500">
                                        Shop Now</button>
                                </div>
                                <div class="flex justify-center mx-auto">
                                    <video class="aligns-center w-full h-auto" autoPlay={true} muted loop>
                                        <source src={video1} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="navbar">
                                <div class="invisible sm:visible sm:w-2/5 md:w-4/12 lg:w-3/5 sm:max-w-sm lg:max-w-lg text-left absolute left-10 top-16 lg:left-32 lg:top-48 bg-gray-50 bg-opacity-90 shadow-lg p-5 rounded-lg">
                                    <h1 class="w-4/5 font-bold text-blue-800 uppercase dark:text-white lg:text-3xl sm:text-lg md:text-xl"><span
                                        class="text-yellow-500">Selamat Datang! </span>Java Agro Globalindo</h1>
                                    <p class="mt-2 sm:text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400">Memberikan Kualitas produk dengan pelayanan terbaik .</p>
                                    <button
                                        class="w-full px-8 py-4 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-500 rounded-full lg:w-auto hover:bg-yellow-500 focus:outline-none focus:bg-indigo-500">Shop
                                        Now</button>
                                </div>
                                <div class="flex justify-center mx-auto">
                                    <video class="aligns-center w-full h-auto" autoPlay={true} muted loop>
                                        <source src={video2} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>

            {/* Greetings */}
            <section className="container mx-auto my-4">
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-center text-3xl text-blue-900">All Type Komoditas  <span className="text-yellow-500">with Premium Quality</span></h1>
                    <p className="font-regular text-xl text-center mx-auto w-4/5 sm:w-3/6">Product Quality : Premium Komoditi, Medium Komoditi, Standard Komoditi</p>
                </div>
            </section>
            {/* Card */}
            <section className="container mx-auto flex justify-center mt-24 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="card w-72 h-36 text-center box-border shadow-lg rounded-lg relative">
                        <img src={card1} alt="" className="absolute card-icon" />
                        <h1 className="font-semibold text-blue-800 pt-16 pb-3 text-xl">Kemudahan Pembayaran</h1>
                        {/* <p className="text-based font-regular">Simple and secure control of your organization’s financial and legal
                            transactions. Send customized invoices and contracts</p> */}
                    </div>
                    <div className="card w-72 h-36 text-center box-border shadow-lg rounded-lg relative">
                        <img src={card2} alt="" className="absolute card-icon" />
                        <h1 className="font-semibold text-blue-800 pt-16 pb-3 text-xl">Pengiriman Tepat Waktu</h1>
                        {/* <p className="text-based font-regular">Simple and secure control of your organization’s financial and legal
                            transactions. Send customized invoices and contracts</p> */}
                    </div>
                    <div className="card w-72 h-36 text-center box-border shadow-lg rounded-lg relative">
                        <img src={card3} alt="" className="absolute card-icon" />
                        <h1 className="font-semibold text-blue-800 pt-16 pb-3 text-xl">Produk Bergaransi</h1>
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
                            Komoditas Premium Indonesia<span className="text-yellow-500">, Fokus di kualitas produksi</span>
                        </h1>
                        <p className="font-regular text-lg text-gray-900 mt-5 w-4/5">Kami bermitra dengan supplier komoditas dari seluruh Indonesia, dengan system quality control terbaik.</p>
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
                        <p className="font-regular text-lg mt-5">Mengawasi setiap tahap proses produksi, menjaga proses produksi untuk hasil dengan kualitas terbaik</p>
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
                        <h1 className="text-base font-medium text-blue-800 flex justify-end">Testimonial</h1>
                        <hr className="w-1/12 font-bold mt-3 mx-5" />
                    </div>
                    {/* what they say */}
                    <div className="flex justify-end mr-16">
                        <h1 className="text-3xl sm:text-4xl text-blue-800 font-bold">What They Say?</h1>
                    </div>
                    {/* box */}
                    <Splide>
                        <SplideSlide>
                            <div className="flex justify-center lg:p-16 p-0 mt-8 ">
                                <div className="box-border w-full text-left md:text-base text-sm lg:h-64 sm:h-72 h-96 border-2 border-blue-800 rounded-lg shadow-lg p-10 border-opacity-5">
                                    <p className="-mt-8 lg:mt-0">orem ipsum dolor sit amet, consectetur adipiscing elit. Donec in vestibulum nibh. Morbi euismod
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
                        </SplideSlide>
                        <SplideSlide>
                            <div className="flex justify-center lg:p-16 p-0 mt-8">
                                <div className="box-border w-full text-left md:text-base text-sm lg:h-64 sm:h-72 h-96 border-2 border-blue-800 rounded-lg shadow-lg p-10 border-opacity-5">
                                    <p className="-mt-8 lg:mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in vestibulum nibh. Morbi euismod
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
                            <a href="https://web.whatsapp.com/send?phone=6281216610559&text=Helo Coco, I'm interested in your product .." className="rounded-full bg-green-500 font-bold text-white py-2 px-4 sm:px-6"><i className="fab fa-whatsapp text-white mr-1 sm:mr-3" />
                                Whatsapp</a>
                            <a href="https://www.instagram.com/alvindstr/" className="rounded-full bg-pink-500 font-bold text-white py-2 px-4 sm:px-7"><i className="fab fa-instagram text-white mr-1 sm:mr-3" />
                                Instagram</a>
                            <a href="https://www.facebook.com/santos.dc.nugroho/" className="rounded-full bg-blue-500 font-bold text-white py-2 px-4 sm:px-7"><i className="fab fa-facebook mr-1 sm:mr-3" />
                                Facebook </a>
                            <a href="https://www.youtube.com/c/ANONIMM" className="rounded-full bg-red-500 font-bold text-white py-2 px-4 sm:px-7"><i className=" fab fa-youtube mr-1 sm:mr-3" />
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
    )
}

export default Index