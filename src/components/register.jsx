import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faMobile, faUser } from '@fortawesome/free-solid-svg-icons';
import '../components/register.css'
function Register() {
    const [isSignedUp, setIsSignedUp] = useState(false);
    const handleSignUp = () => {
        setIsSignedUp(true);
    }

    return (
        <>
            <div className={`container relative w-[100%] min-h-[100vh] bg-white overflow-hidden max-md:min-h-[800px] max-md:h-[100vh] max-md:before:hidden before:bg-gradient-to-t from-blue-500 via-blue-500 before:absolute before:top-[-10%] before:transform before:-translate-y-1/2 before:w-[2000px] before:h-[2000px] before:rounded-[50%] before:right-1/2 before:transition before:duration-1000 before:ease-in-out ${isSignedUp? 'before:transform before:ease-in-out before:translate-x-[100%] before:-translate-y-1/2 before:right-[55%]':''}`}>
                <div className="absolute w-[100%] h-[100%] top-0 left-0">
                    <div className={`absolute top-[30%] left-[90%] w-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-1 grid-rows-1 z-20 max-md:w-[10%] max-md:left-[50%] max-md:top-[95%] max-md:transform max-md:-translate-x-1/2 max-md:-translate-y-[100%] ${isSignedUp?'left-[40%] transform transition duration-1000 ease-in-out':''}`}>
                        <form className={` absolute flex flex-col justify-center items-center col-span-1 row-span-1 z-10 ${isSignedUp?'hidden transform ease-in-out transition duration-1000 pointer-events-none':''}`}>
                            <div>
                            <h2 className={`text-2xl text-gray-700 mb-3 font-bold ${isSignedUp?'text-white transform ease-in-out transition duration-1000':''}`}>Sign In</h2>
                            <div className="max-w-[300px] w-full h-12 bg-gray-200 my-4 rounded-xl flex items-center">
                                <span className="w-[30px] justify-center ml-4"><FontAwesomeIcon icon={faEnvelope} /></span>
                                <input type="email" placeholder="Email ID" className="w-[250px] h-full bg-transparent outline-none" />
                            </div>
                            <div className="max-w-[300px] w-full h-12 bg-gray-200 my-4 rounded-xl flex items-center">
                                <span className="w-[30px] justify-center ml-4"><FontAwesomeIcon icon={faLock} /></span>
                                <input type="text" placeholder="Password" className="w-[250px] h-full bg-transparent outline-none" />
                            </div>
                            <button type="submit" className={`font-semibold py-2 px-8 rounded-3xl transition-all ease-in-out duration-300 ${isSignedUp? 'bg-white ring-2 ring-white text-blue-500 transform transition ease-in-out duration-1000 hover:ring  hover:scale-105 hover:duration-300 hover:text-white hover:bg-blue-500 hover:font-bold' : 'bg-blue-500 text-white  hover:ring hover:ring-blue-500 hover:bg-white hover:text-blue-500'}`}>Login</button>
                            </div>
                        </form>

                        <form className={`absolute flex flex-col justify-center items-center  col-span-1 row-span-1  opacity-0 pointer-events-none ${isSignedUp?'pointer-events-auto opacity-100 transform transition duration-1000 ease-in-out':''}`}>
                            <div>
                            <h2 className="text-2xl text-gray-700 mb-3 font-bold">Sign Up</h2>
                            <div className="max-w-[300px] w-full h-12 bg-gray-200 my-4 rounded-xl flex items-center">
                                <span className="w-[30px] justify-center ml-4"><FontAwesomeIcon icon={faUser} /></span>
                                <input type="text" placeholder="Full Name" className="w-[250px] h-full bg-transparent outline-none" />
                            </div>
                            <div className="max-w-[300px] w-full h-12 bg-gray-200 my-4 rounded-xl flex items-center">
                                <span className="w-[30px] justify-center ml-4"><FontAwesomeIcon icon={faEnvelope} /></span>
                                <input type="email" placeholder="Email ID" className="w-[250px] h-full bg-transparent outline-none" />
                            </div>
                            <div className="max-w-[300px] w-full h-12 bg-gray-200 my-4 rounded-xl flex items-center">
                                <span className="w-[30px] justify-center ml-4"><FontAwesomeIcon icon={faLock} /></span>
                                <input type="text" placeholder="Password" className="w-[250px] h-full bg-transparent outline-none" />
                            </div>
                            <div className="max-w-[300px] w-full h-12 bg-gray-200 my-4 rounded-xl flex items-center">
                                <span className="w-[30px] justify-center ml-4"><FontAwesomeIcon icon={faMobile} /></span>
                                <input type="number" placeholder="Mobile Number" className="w-[250px] h-full bg-transparent outline-none " />
                            </div>
                            
                            <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-8 rounded-3xl transition-all ease-in-out duration-300 hover:ring hover:ring-blue-500 hover:bg-white hover:text-blue-500">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="absolute w-full h-full top-0 left-0 flex ">
                    <div className={`flex flex-col items-end pt-12 px-12 text-center justify-around  pointer-events-auto ${isSignedUp?'pointer-events-none':''}`}>
                    <div className={`${isSignedUp? 'transform ease-in-out translate-x-[-900px] transition duration-1000':''}`}>
                    <h3 className={`font-bold text-2xl text-white pb-2 `}>New here?</h3>
                    <p className={`text-white pb-4 `}>Welcome to our job portal! 🌟 Sign in and explore a world of possibilities!”</p>
                    <button onClick={handleSignUp} type="submit" className={`border-2 border-white text-white font-semibold py-2 px-8 rounded-3xl transition-all ease-in-out duration-300 hover:ring hover:ring-blue-500 hover:bg-white hover:text-blue-500 ${isSignedUp?'duration:1000 transform transition ring ring-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white ':''}`}>Sign Up</button>
                </div>
                <img src={require('../assets/career_progres.png')} alt="" className={`w-full h-full ${isSignedUp? 'transform translate-x-[-900px] transition duration-1000 ease-in-out':''}`}/>
                </div>

                    <div className={`flex flex-col items-end pt-12 pl-12  text-center justify-around z-0 pointer-events-none${isSignedUp?'pointer-events-auto':''}`}>
                    <div className={`translate-x-[800px] ${isSignedUp?'transform ease-in-out translate-x-2 transition duration-1000':''}`}>
                    <h3 className="font-bold text-2xl pb-2 text-white">One of us?</h3>
                    <p className="w-[87%] pb-4 text-white ml-20">Welcome back! 🌟 Explore new opportunities, connect with employers, and take your career to the next level. Let’s find your dream job together!</p>
                    <button onClick={()=>setIsSignedUp(prev=>!prev)} type="submit" className="border-2 border-white text-white font-semibold py-2 px-8 rounded-3xl transition-all ease-in-out duration-300 hover:ring hover:ring-blue-500 hover:bg-white hover:text-blue-500">Sign In</button>
                </div>
                <img src={require('../assets/Job_hunt.png')} alt="" className={`w-full h-full translate-x-[800px] ${isSignedUp ? 'transform translate-x-2 transition ease-in-out duration-1000':''}`}/>
                </div>
                
                </div>
            </div>
        </>
    );
}

export default Register;
