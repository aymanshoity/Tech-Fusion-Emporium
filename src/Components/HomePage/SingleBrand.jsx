import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandDetails from "./BrandDetails";


const SingleBrand = () => {
    const { brand } = useParams()
    const loadedData = useLoaderData();
    const [length, setLength] = useState(true)
    const [products, setProducts] = useState(loadedData)

    console.log({ brand }, loadedData, products)
    useEffect(() => {
        if (products.length === 0) {
            setLength(false)
        }
    }, [])
    return (
        <div className="lg:w-[1280px] mx-auto my-20 p-6 bg-base-300">
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/VSHcqY2/pexels-garrett-morrow-682933.jpg" className="w-full lg:w-[1280px] h-[600px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/X7khsQh/domenico-loia-Eh-Tc-C9s-YXsw-unsplash.jpg" className="h-[600px] w-full lg:w-[1280px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/L6dMTdB/luca-bravo-y1y-QQmoz-TBw-unsplash.jpg" className="h-[600px] w-full lg:w-[1280px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            {length?
                <>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                            products.map(product => <BrandDetails key={product.name} product={product}></BrandDetails>)
                        }
                    </div>

                </> : <h2 className="text-4xl my-20 text-center">No Product Available</h2>
            
            }



        </div>
    );
};

export default SingleBrand;

// https://i.ibb.co/b5yNrWF/josh-calabrese-m-Zf9-BZxy-KZE-unsplash.jpg

// https://i.ibb.co/L6dMTdB/luca-bravo-y1y-QQmoz-TBw-unsplash.jpg
//
// https://i.ibb.co/hsP8D5t/freestocks-A11-MXTz-Uh-LE-unsplash.jpg
