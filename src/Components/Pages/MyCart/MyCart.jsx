import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import CartItems from "./CartItems";

const MyCart = () => {
    const loadedProduct=useLoaderData()
    // console.log(loadedProduct)

    const [product,setProduct]=useState(loadedProduct)

    
    return (
        <div className="lg:w-[1280px] mx-auto my-20 p-6 bg-base-300 rounded-lg">
            <h2 className="text-center text-4xl">My Cart</h2>
            <div>
                {
                    product.map(item=><CartItems key={item._id} product={product} setProduct={setProduct} item={item}></CartItems>)
                }
            </div>
        </div>
    );
};

export default MyCart;