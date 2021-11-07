import img from './img/about-us.png'
import company from './img/charlize-birdsinger-7b49gfsgQZY-unsplash.jpg'
import kemendag from './img/kemendag.png'
import kemenkunham from './img/Kemenhukham.png'
import sucofindo from './img/sucofindo.png'
import beacukai from './img/beacukai.png'

const About = () => {
    return (
        <div className="pt-32">
            <div className="container px-6 py-16 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-2xl font-bold text-blue-800 uppercase dark:text-white lg:text-9xl">Our Company
                            </h1>
                            <hr className="w-4/6 bg-blue-800 h-3 mt-8" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 bg-white">
                        <img className=" h-full lg:max-w-2xl p-5" src={img} alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>
            {/* Company Profile */}
            <section className="container mx-auto">
                <div className="flex">
                    <div className="w-1/2">
                        <img src={company} alt="" className="w-4/5 h-4/5 shadow-lg" />
                    </div>
                    <div className="w-1/2">
                        <p className="text-left font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                    <div className="flex flex-row justify-start">
                        <img src={kemendag} className="w-1/6 h-32 mx-7" alt="" />
                        <img src={kemenkunham} className="w-1/6 h-32 mx-7" alt="" />
                        <img src={sucofindo} className="w-1/6 h-32 mx-7" alt="" />
                        <img src={beacukai} className="w-3/5 h-32 mx-7" alt="" />
                    </div>
                </div>
            </section>
            {/* Form and Map */}
            <section className="container mx-auto mt-24 mb-12">
                <div className="flex flex-row">
                    {/* Form */}
                    <div className="w-1/2">
                        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">Get in touch</h2>
                        <p className="mt-3 text-center text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit.</p>
                        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
                            <a href="#" className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="mt-2">121 Street, NY</span>
                            </a>
                            <a href="#" className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="mt-2">+2499999666600</span>
                            </a>
                            <a href="#" className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span className="mt-2">example@example.com</span>
                            </a>
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
                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>
                                <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" defaultValue={""} />
                            </div>
                            <div className="flex justify-center mt-6">
                                <button className="px-4 py-2 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send
                                    Message</button>
                            </div>
                        </div>
                    </div>
                    {/* Map */}
                    <div className="w-1/2">
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

export default About;