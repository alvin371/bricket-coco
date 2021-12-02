const footer = () => {
    return (
         <div>
            <footer class="mt-32 w-screen">
                <div class=" bg-gray-800 pt-32 ">
                    <div class="container mx-auto flex lg:flex-row flex-col">
                        <div class="">
                            <h1 class="flex justify-center text-white font-bold text-2xl lg:ml-4">Global Coco Perkasa</h1>
                        </div>
                        <div class="flex flex-col lg:ml-16 xl:ml-56 2xl:ml-80">
                            <div class="flex justify-center text-white font-light text-xs md:text-sm lg:text-base mb-4">
                                <button href="" class="">Careers</button>
                                <span class="px-5">|</span>
                                <button href="">Privacy Policy</button>
                                <span class="px-5">|</span>
                                <button href="">Terms and Conditions</button>
                            </div>
                            <div class="flex justify-center text-white font-light text-base">
                                © 2021 Global Coco Perkasa Inc
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default footer;