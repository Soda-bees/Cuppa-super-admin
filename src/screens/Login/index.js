import React, { useState } from 'react'
import images from '../../assets'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "../../store/authTokenSlice";
import "react-toastify/dist/ReactToastify.css";
import { handleError } from '../../Component/ShowError';
import { Signin } from '../../services/config/Api';
import Loader from '../../Component/Loader';
import { selectAdminData, setAdminData } from '../../store/adminDataSlice';

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loader, setLaoder] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleSignIn = async () => {
        try {
            if (!email) {
                return handleError('Please enter email')
            }
            if (!password) {
                return handleError('Please enter password')
            }
            setLaoder(true)
            const body = { email, password }
            const response = await Signin(body)
            if (response?.success) {
                setLaoder(false)
                dispatch(setAdminData(response?.adminData))
                dispatch(setAuthToken(response?.token))
            } else {
                setLaoder(false)
                return handleError(response?.message)
            }
        } catch (error) {
            setLaoder(false)
            return handleError(error.message)
        }
    };


    return (
        <div
            className='h-[100vh] bg-center bg-no-repeat flex flex-col sm:flex-row gap-4 sm:gap-0 justify-center items-center'
            style={{
                backgroundImage: `url(${images.loginBg})`,
            }}>
            <div className='block sm:hidden' >
                <img className='w-60' src={images.logo} />
            </div>
            <div className='bg-bgLogin w-[90%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] rounded-xl flex'>
                <div className='w-[50%] hidden bg-cover bg-no-repeat sm:flex items-end p-3   '
                    style={{
                        backgroundImage: `url(${images.logoBg})`,
                    }}>
                    <div className='w-full sm:h-[50vh] flex flex-col items-center justify-between '>
                        <div >
                            <img className='sm:w-60 xl:w-80' src={images.loginLogo} />
                        </div>
                        <div className='sm:w-60 lg:w-72 sm:text-base lg:text-xl text-textColor text-center'>
                            Welcome to the Admin Panel for <span className='text-[#555555] font-medium'>Cuppa!</span>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-[50%] flex flex-col items-center p-3 justify-center'>
                    <div className='text-xl sm:text-2xl font-semibold sm:mt-5 lg:mt-10'>
                        Log In
                    </div>
                    <div className='w-full md:w-68 xl:w-[60%]  text-md lg:text-lg text-center mt-4 '>
                        Offering coffee shop owners a platform to enhance their sales with Cuppa.
                    </div>
                    <div className='w-full  lg:w-[80%] bg-bgSettings rounded-xl mt-4 p-2 '>
                        <div className='text-md lg:text-lg text-textColor'>Username/Email</div>
                        <input className='w-[100%] bg-bgSettings outline-none text-md lg:text-lg  rounded-md' type='text' onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className='relative w-full lg:w-[80%] bg-bgSettings rounded-xl mt-2 p-2 '>
                        <div className='text-md lg:text-lg text-textColor'>Password</div>
                        <input className='w-[100%] bg-bgSettings outline-none text-md lg:text-lg  rounded-md' type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} />
                        <img className={showPassword ? 'cursor-pointer w-6  absolute top-7 md:top-10 right-4' : 'cursor-pointer w-[26px]  absolute top-7 md:top-10 right-4'} src={showPassword ? images.hidePasswordIcon : images.eyeOpen} onClick={() => setShowPassword(!showPassword)} />
                    </div>

                    <div onClick={handleSignIn} className='cursor-pointer active:opacity-50 text-white bg-gradient-to-r from-green to-darkerGreen p-3 rounded-xl text-md lg:text-lg font-medium w-full lg:w-[80%] flex items-center justify-between mt-4'>
                        Sign In
                        <div className='bg-white p-2 rounded-md'>
                            {
                                loader ? <Loader /> : <img className='w-3 sm:w-4' src={images.arrow} />
                            }
                        </div>
                    </div>
                    <div onClick={() => navigate("/forgetpassword")} className='cursor-pointer w-full lg:w-[80%] flex justify-end mt-2  text-md lg:text-lg text-textColor'>
                        Forgot Password?
                    </div>
                    {/* <div className='w-full lg:w-[80%] flex items-center justify-center gap-2   xl:gap-4  mt-2 md:mt-4'>
                        <div className='border border-black w-[31%] sm:w-22 md:w-26 xl:w-32'></div>
                        <div className='text-md lg:text-lg'>Sign In with</div>
                        <div className='border border-black w-[31%] sm:w-22 md:w-26 xl:w-32'></div>
                    </div>
                    <div  className=' cursor-pointer w-full lg:w-[80%] text-md lg:text-lg flex items-center border border-black justify-center gap-4  mt-4 p-3 rounded-md font-medium'>
                        <img className='w-6' src={images.googleIcon} />
                        Continue with google
                    </div>
                    <div className='cursor-pointer w-full lg:w-[80%] text-md lg:text-lg flex items-center border border-black justify-center gap-4  mt-4 p-3 rounded-md font-medium'>
                        <img className='w-6' src={images.fbIcon} />
                        Continue With Facebook
                    </div>
                    <div className='w-full lg:w-[95%] xl:w-[80%] flex justify-center mt-4  text-sm sm:text-base lg:text-lg'>
                        Don’t have an account?&nbsp;<span className='text-green font-medium cursor-pointer' onClick={() => navigate("/signup")}> Sign Up Today!</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
