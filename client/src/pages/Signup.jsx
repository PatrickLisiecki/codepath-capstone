import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";

// TODO: Add email and password validation (regex pattern)
// TODO: Make responsive
// TODO: Implement forget password logic
// TODO: Implement form submission logic

function Signup() {
    const [passVisible, setPassVisible] = useState(false);
    const [passVisible2, setPassVisible2] = useState(false);

    const toggle = () => {
        setPassVisible(!passVisible);
    }

    const toggle2 = () => {
        setPassVisible2(!passVisible2);
    }

    return (
        <>
            <main className="flex flex-col h-screen relative bg-purple-50">
                <div className="absolute md:inset-32 inset-44 container mx-auto border-2 bg-white md:w-2/5 md:h-3/4 lg:w-80 lg:h-3/5 xl:w-1/4 xl:h-2/3 rounded-lg shadow-xl">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-center text-2xl font-bold p-3 pb-1 mb-1">Sign Up</h1>
                        <p className="mb-2">Welcome to <span className="text-blue-500 inline font-bold">Soccer Cast.</span></p>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-800 font-semibold text-sm">
                                Full Name:
                            </label>
                            <input
                                placeholder="John Doe"
                                type="text"
                                name="name"
                                className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                            />
                        </div>
                    
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-800 font-semibold text-sm">
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

                        <div className="mb-8 relative">
                            <label htmlFor="re-passwd" className="block text-gray-800 font-semibold text-sm">
                                Confirm Password:
                            </label>
                            <input
                                placeholder="Password"
                                type={ (passVisible2 === false)? "password": "text"}
                                name="re-passwd"
                                className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                            />

                            <div className="text-xl absolute top-7 right-5">
                                {
                                    (passVisible2 === false)? <FaEyeSlash onClick={toggle2}/>:
                                    <FaEye onClick={toggle2} />
                                }
                            </div>
                        </div>

                        <div className="mb-6">
                            <Link to="" className="cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-20 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" >
                                Sign Up
                            </Link>
                        </div>

                        <div>
                            <p>Already have an account? <Link to="/signin"><strong>Sign In</strong></Link></p>
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    );
}

export default Signup;