import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const { id } = useParams()
    const loadedProduct = useLoaderData()

    const { photo, name, brand, type, price, ratings } = loadedProduct
    console.log(id, loadedProduct)

    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target;
        const brand = form.brand.value
        const name = form.name.value
        const type = form.type.value
        const photo = form.photo.value
        const price = form.price.value
        // const details=form.details.value
        const ratings = form.rating.value

        const product = { brand, name, type, price, photo, ratings }
        console.log(product)
        fetch(`https://brand-shop-server-rho-lake.vercel.app/products/${brand}/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => { console.log(data) 
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/hsP8D5t/freestocks-A11-MXTz-Uh-LE-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content flex-col my-10">
                <div className="my-10">
                    <h1 className="text-5xl font-bold text-center">Update Product now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdateProduct} className="card-body " >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" name="brand" defaultValue={brand} placeholder="brand" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" defaultValue={photo} placeholder="photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type/Category</span>
                                </label>
                                <input type="text" name="type" defaultValue={type} placeholder="type" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <input type="number" name="rating" defaultValue={ratings} min="1" max="5" placeholder="ratings" className="input input-bordered" />
                            </div>


                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-blue-600 text-white">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;