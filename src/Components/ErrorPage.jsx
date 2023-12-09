import { Link } from "react-router-dom";



const ErrorPage = () => {
    return (
        <div className="flex  flex-col justify-center">
            
            <div className="flex  justify-center">

                <img className="h-[600px]" src="https://i.ibb.co/z6YRb5p/Error-Page.jpg" alt="" />

            </div>
            <div className="flex  justify-center">
            <Link className="btn bg-blue-600 text-white" to='/'>Back to Home</Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;