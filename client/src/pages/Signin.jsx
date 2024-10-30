import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";

// TODO: Make responsive
// TODO: Implement forget password logic
// TODO: Implement form submission logic

function Signin() {
    const [passVisible, setPassVisible] = useState(false);

    const toggle = () => {
        setPassVisible(!passVisible);
    }

    return (
        <>
            <main className="flex flex-col h-screen relative bg-purple-50">
                <div className="absolute inset-44 container mx-auto border-2 bg-white md:w-2/5 md:h-3/5 lg:w-80 lg:h-2/5 xl:w-1/4 xl:h-1/2 rounded-lg shadow-xl">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-center text-2xl font-semibold p-3 pb-1 mb-1">Sign In</h1>
                        <p className="mb-2">Welcome to <span className="text-blue-500 inline font-bold">Soccer Cast.</span></p>
                    
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-800 font-bold text-sm">
                                Email:
                            </label>
                            <input
                                placeholder="Example@gmail.com"
                                type="email"
                                name="username"
                                className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                            />
                        </div>

                        <div className="mb-4 relative">
                            <label htmlFor="passwd" className="block text-gray-800 font-semibold text-sm">
                                Password:
                            </label>
                            <input
                                placeholder="Password"
                                type={ (passVisible === false)? "password": "text"}
                                name="passwd"
                                className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                            />

                            <div className="text-xl absolute top-7 right-5">
                                {
                                    (passVisible === false)? <FaEyeSlash onClick={toggle}/>:
                                    <FaEye onClick={toggle} />
                                }
                            </div>
                        </div>

                        <Link to="" className="mb-4">Forgot Password?</Link>

                        <div className="mb-4">
                            <Link to="" className="cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-20 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" >
                                Login
                            </Link>
                        </div>

                        <div className="">
                            <p className="">Dont have an account? <Link to="/signup"><strong>Sign Up</strong></Link></p>
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    );
}

export default Signin;
