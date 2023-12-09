


import { Link } from 'react-router-dom';

const AllBrands = () => {

    


    return (

        <div className='lg:w-[1280px] mx-auto my-20 p-6'>
            <h2 className='text-4xl text-center my-10 underline underline-offset-8'>Our Brands</h2>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">


                <Link to='/Apple'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[350px]" src="https://i.ibb.co/ZgGbVFg/xavier-wendling-e2d-Dvd-H3l-IY-unsplash.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">Apple</h2>
                        </div>
                    </div>
                </Link>
                <Link to='/Google'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[350px]" src="https://i.ibb.co/0GBRHNk/mitchell-luo-jz4ca36o-J-M-unsplash.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">Google</h2>
                        </div>
                    </div>
                </Link>
                <Link to='/Samsung'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[350px]" src="https://i.ibb.co/St6qGDR/kote-puerto-ILQoi-HMJMME-unsplash-1.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">Samsung</h2>
                        </div>
                    </div>
                </Link>
                <Link to='/Lenovo'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[350px]" src="https://i.ibb.co/L5z7hmy/pexels-olena-bohovyk-5998486.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">Lenovo</h2>
                        </div>
                    </div>
                </Link>

                <Link to='/Sony'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[350px]" src="https://i.ibb.co/8j5gw4z/james-feaver-cv3wn-Erx7w-unsplash.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">Sony</h2>
                        </div>
                    </div>
                </Link>
                <Link to='/Xiaomi'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[350px]" src="https://i.ibb.co/S5QDtdM/christian-salas-s-7eu-Md-Fyw-A-unsplash.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">Xiaomi</h2>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    );
};

export default AllBrands;
