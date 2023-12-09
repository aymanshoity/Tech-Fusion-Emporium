

const Banner = () => {
    return (
        <div className=" mx-auto ">
            <div className="carousel w-full h-[550px]">
                <div id="slide1" className="carousel-item relative w-full h-[550px]">
                    <div className="flex lg:flex-row flex-col-reverse justify-center items-center">
                        <div className="text-center flex-1">
                            <h2 className="lg:text-4xl text-2xl my-6">QUALITY ELECTRONICS</h2>
                            <p className="lg:text-2xl text-xl mb-6">SMART TECH GADGETS THAT  WILL ASTOUND YOU!</p>
                            <button className="btn bg-blue-600 text-white">Shop Now</button>
                        </div>
                        <div className=" flex-1">
                            <img src="https://i.ibb.co/DMKxLWq/christopher-gower-a-Xa21cf7r-Y-unsplash.jpg" className="w-full  bg-white" />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex lg:flex-row flex-col-reverse justify-center items-center">
                        <div className="text-center flex-1">
                            <h2 className="lg:text-4xl text-2xl my-6">UNIQUE ACCESSORIES</h2>
                            <p className="lg:text-2xl text-xl mb-6">CHOOSE YOUR NEXT FAVORITE ACCESSORY</p>
                            <button className="btn bg-blue-600 text-white">Shop Now</button>
                        </div>
                        <div className=" flex-1">
                            <img src="https://i.ibb.co/k0rrt5J/pixel-bee-u8is-JQ6-Qj-F4-unsplash.jpg" className="w-full bg-white" />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex lg:flex-row flex-col-reverse justify-center items-center">
                        <div className="text-center flex-1">
                            <h2 className="lg:text-4xl text-2xl my-6">BEST SMARTPHONES</h2>
                            <p className="lg:text-2xl text-xl mb-6">ALL KINDS OF GADGETS </p>
                            <p className="lg:text-2xl text-xl mb-6"> FOR DAILY COMMUNICATION</p>
                            <button className="btn bg-blue-600 text-white">Shop Now</button>
                        </div>
                        <div className=" flex-1">
                            <img src="https://i.ibb.co/sjsfnmX/hilthart-pedersen-fvjq-MM6-A5ds-unsplash.jpg" className="w-full bg-white" />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;