import { Link } from "react-router-dom";


const BrandDetails = ({ product }) => {
    const { photo, name, brand, type, price, ratings,_id } = product
    return (

        <div className="card card-side bg-base-100 shadow-xl my-20">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand}</h2>
                <p>Product Name: <span className="text-blue-600 font-bold">{name}</span></p>
                <p>Device:{type}</p>
                <p>Price: <span className="text-blue-600 font-bold">{price} $</span></p>
                <p>Rating Star: {ratings}/5</p>
                <div className="card-actions justify-start flex flex-col ">
                    <Link to={`/${brand}/${_id}`}  className="btn bg-blue-600 text-white">Details</Link>
                    <Link to={`/${brand}/update/${_id}`} className="btn bg-blue-600 text-white">Update</Link>

                </div>
            </div>
        </div>

    );
};

export default BrandDetails;