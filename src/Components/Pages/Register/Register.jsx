import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { createUser }=useContext(AuthContext)
    const [errorMessage,setErrorMessage]=useState('')
    const [successMessage,setSuccessMessage]=useState('')
    
    const handleRegister=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        const registeredUser={name,photo,email,password}
        console.log(registeredUser)

        const hasCapitalLetter = /[A-Z]/.test(password);
        const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
        setErrorMessage('')
        setSuccessMessage('')

        if(!hasCapitalLetter || !hasSpecialCharacter || password.length<6){
            return setErrorMessage('Please provide a strong password')
        }else{
            createUser(email,password)
            .then(result=>{
                console.log(result.user)
                updateProfile(result.user,{
                    displayName: name, 
                    photoURL: photo
                })
                .then(()=>{
                    console.log('profile Updated')
                    setSuccessMessage('User Registered Successfully!!!')
                })
                .catch(error=>{
                    console.error(error)
                })
            })
            .catch(error=>{
                if(error.code==='auth/email-already-in-use'){
                    return setErrorMessage('You have already Registered..Please Login')
                }
                console.error(error)
            })
            
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col my-20">
                    <div className="text-center lg:text-left ">
                        <h1 className="text-5xl font-bold text-center">Register now!</h1>
                        <p className="py-6 text-center">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b></p>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <p className="label-text-alt">Already Registered? Go the the <Link to='/login' className="label-text-alt link link-hover text-red-600">Login Page</Link></p>
                                </ label>
                                { errorMessage && <p className="text-red-600">{errorMessage}</p>}
                                {successMessage && <p className="text-red-600">{successMessage}</p>}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-blue-600 text-white">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;