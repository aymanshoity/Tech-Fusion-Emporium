import { TbTruckDelivery } from "react-icons/tb"
import { RiCoupon3Line } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
const ChooseUs = () => {
    return (
        <div className="bg-base-200 flex lg:flex-row flex-col justify-center items-center">
            <div className="flex-1 mr-2">
                <img className="lg:h-[600px]" src="https://i.ibb.co/XWvS9VV/choose.png" alt="" />
            </div>
            <div className="flex-1 pt-8">
                <h2 className="lg:text-4xl text-center lg:text-left text-3xl text-blue-600 mx-2 py-6">Why Tech Fusion?</h2>
                <hr />
                <div className="flex items-center bg-white p-6 lg:w-[500px] my-6 mx-2">
                    <div>
                        <GiTakeMyMoney className="lg:text-7xl mr-2"></GiTakeMyMoney>
                    </div>
                    <div>
                        <h2 className="lg:text-3xl text-xl">Low Price</h2>
                        <p >All our products, from laptops to smartphones, are offered at affordable prices for everyone</p>
                    </div>

                </div>
                <div className="flex items-center bg-white p-6 lg:w-[500px] my-6 mx-2">
                    <div>
                        <TbTruckDelivery className="lg:text-7xl mr-2"></TbTruckDelivery>

                    </div>
                    <div>
                        <h2 className="lg:text-3xl text-xl">Free Delivery</h2>
                        <p >We provide free same-day worldwide shipping to all our registered clients and customers.</p>
                    </div>

                </div>
                <div className="flex items-center bg-white p-6 lg:w-[500px] my-6 mx-2">
                    <div>
                        <RiCoupon3Line className="lg:text-7xl mr-2"></RiCoupon3Line>
                    </div>
                    <div>
                        <h2 className="lg:text-3xl text-xl">5% Cash Back</h2>
                        <p >Regular customers of Tech Fusion can get 5% cash back for every purchase at our store.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChooseUs;