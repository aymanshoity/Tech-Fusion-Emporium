

const AddProduct = () => {
    const handleAddProduct=e=>{
        e.preventDefault()
        const form=e.target;
        const brand=form.brand.value
        const name=form.name.value
        const type=form.type.value
        const photo=form.photo.value
        const price=form.price.value
        const details=form.details.value
        const ratings=form.rating.value

        const product={brand,name,type,price,photo,details,ratings}
        console.log(product)

        fetch('https://brand-shop-server-rho-lake.vercel.app/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    return (
        <div className="hero min-h-screen"  style={{backgroundImage: 'url(https://i.ibb.co/DMKxLWq/christopher-gower-a-Xa21cf7r-Y-unsplash.jpg)'}}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content flex-col my-10">
                <div className="my-10">
                    <h1 className="text-5xl font-bold text-center">Add New Product now!</h1>
                    {/* <img className="lg:w-[500px]" src="https://i.ibb.co/DMKxLWq/christopher-gower-a-Xa21cf7r-Y-unsplash.jpg" alt="" /> */}
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleAddProduct} className="card-body " >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" name="brand" placeholder="brand" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo URL" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type/Category</span>
                                </label>
                                <input type="text" name="type" placeholder="type" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="price" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <input type="number" name="rating" min="1" max="5" placeholder="ratings" className="input input-bordered"  />
                            </div>


                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <textarea name="details" className="textarea textarea-bordered" placeholder="Describe"></textarea>
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn bg-blue-600 text-white">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;