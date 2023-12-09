
import Swal from "sweetalert2";


const CartItems = ({ item, product, setProduct }) => {

    console.log(product, setProduct)
    const { photo, name, brand, type, price, ratings, _id } = item
    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: `Are you sure that you want to delete ${name} from your cart?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2563eb',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-rho-lake.vercel.app/storedProducts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data =>{ console.log(data)
                        if (data.deletedCount > 0){
                            Swal.fire(
                                'Deleted!',
                                'Your Chosen Product has been deleted.',
                                'success'
                            )
                            const remaining = product.filter(item => item._id !== _id)
                            setProduct(remaining)
                        }
                        
                    })
                        
                        

            }
        })
    }


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl my-10 flex flex-col lg:flex-row">
                <div>
                    <figure><img src={photo} className="h-[350px] " /></figure>
                </div>
                <div className="card-body my-6">
                    <h2 className="card-title">{brand}</h2>
                    <p>Product Name: <span className="text-blue-600 font-bold">{name}</span></p>
                    <p>Device:{type}</p>
                    <p>Price: <span className="text-blue-600 font-bold">{price} $</span></p>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <div className="card-actions ">
                        <button onClick={() => handleDelete(_id)} className="btn bg-blue-600 text-white">delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;