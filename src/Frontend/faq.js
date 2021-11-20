import img from './img/faq.png'

const minArrow = () => {
    return (
        <div>
            <span className="h-6 w-6 flex items-center justify-center text-teal-500">
                <svg className="w-3 h-3 fill-current" viewBox="0 -192 469.33333 469" xmlns="http://www.w3.org/2000/svg">
                    <path d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0" />
                </svg>
            </span>

        </div>
    )
}

const Faq = () => {
    return (
        <div className="pt-32">
            <div className="container px-6 py-16 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-2xl font-bold text-blue-800 uppercase dark:text-white lg:text-9xl">FAQ</h1>
                            <hr className="w-4/6 bg-blue-800 h-3 mt-8" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 bg-white">
                        <img className=" h-full lg:max-w-2xl p-5" src={img} alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>

            {/* Accordion */}
            <section className="container mx-auto">
                <div className="flex justify-center">
                    <h1 className="text-xl text-gray-900 font-bold">We've rounded up some of the most frequently asked questions
                    </h1>
                </div>
                <div className="flex justify-center">
                    <div className="bg-white mx-auto p-6">
                        <div className="mb-4">
                            <div className="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300">
                                Lorem ipsum dolor sit amet?
                                <span className="h-6 w-6 flex items-center justify-center text-teal-500">
                                    <minArrow />
                                </span>
                            </div>
                            <div className="p-3">
                                <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Pellentesque sed nulla porttitor, porttitor arcu ut, dictum augue. Vestibulum consequat in
                                    urna in bibendum. Praesent sed magna risus. Nunc elementum in mauris ac pharetra. Ut blandit
                                    ut lorem sit amet rutrum. Vivamus ut purus fringilla, euismod nibh ut, blandit.</p>
                                <p className="text-gray-600">Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat tortor.
                                    Nulla consectetur commodo justo. Pellentesque eget ornare quam. Pellentesque sodales metus
                                    non semper luctus. Praesent non ornare tellus, eget vulputate tellus. Donec luctus non
                                    sapien sed semper.</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300">
                                Lorem ipsum dolor sit amet?
                                <span className="h-6 w-6 flex items-center justify-center text-teal-500">
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 469.33333 469.33333" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300">
                                Lorem ipsum dolor sit amet?
                                <span className="h-6 w-6 flex items-center justify-center text-teal-500">
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 469.33333 469.33333" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Ask */}
            <section className="container mx-auto">
                <div className="flex justify-center">
                    <h1 className="text-xl font-bold text-gray-800 text-center w-4/12">In case you don't find what question you
                        want,
                        you can send
                        us an inquiry in the form below</h1>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                            <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="flex w-2/3 mx-auto px-8 items-end">
                        <div className="relative flex-grow w-full mx-5">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Question</label>
                            <textarea type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue={""} />
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Ask
                            Question</button>
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
                            <button className="rounded-full bg-green-500 font-bold text-white py-2 px-9"><i className="fab fa-whatsapp text-white mr-3" />
                                Whatsapp</button>
                            <button className="rounded-full ml-10 bg-pink-500 font-bold text-white py-2 px-9"><i className="fab fa-instagram text-white mr-3" />
                                Instagram</button>
                            <button className="rounded-full ml-10 bg-blue-500 font-bold text-white py-2 px-9"><i className="fab fa-facebook mr-3" />
                                Facebook </button>
                        </div>
                        <div className="button-socmed mt-12">
                            <button className="rounded-full ml-10 bg-red-500 font-bold text-white py-3 px-9 w-2/5"><i className="fab fa-youtube mr-3" />
                                Youtube </button>
                            <button className="rounded-full ml-10 bg-gray-700 font-bold text-white py-3 px-9 w-2/5"><i className="fab fa-tiktok mr-3" />
                                Tiktok </button>
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

export default Faq;