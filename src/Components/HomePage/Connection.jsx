

const Connection = () => {
    return (
        <div className="bg-blue-600 h-[300px] flex lg:flex-row flex-col items-center justify-around my-20">
            <div className="lg:text-left text-center text-white">
                <h2 className="lg:text-6xl text-4xl font-bold">Stay</h2>
                <p className="lg:text-3xl text-xl ">Connected</p>
                <p>Subscribe to our newsletter</p>
            </div>
            <div>
                <label className="text-white">Your Email</label>
            <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <button className="btn bg-white">Subscribe</button>
            </div>
        </div>
    );
};

export default Connection;