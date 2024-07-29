import images from '../../assets'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "../../store/authTokenSlice";


export default function ResetPassword() {
    const [newPasswaord, setNewPasswaord] = useState("")
    const [confirmPasswaord, setConfirmPasswaord] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleResetPassword = () => {
        const token = "your-auth-token"; // Replace with your actual token logic
        dispatch(setAuthToken(token));
        navigate('/');
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
            <div className='bg-bgLogin w-[90%] sm:w-[90%] md:w-[80%] lg:w-[70%] lg:w-[60%] rounded-xl flex'>
                <div className='w-[50%] hidden bg-cover bg-no-repeat sm:flex items-end p-3   '
                    style={{
                        backgroundImage: `url(${images.logoBg})`,
                    }}>
                    <div className='w-full sm:h-[30vh] lg:h-[40vh]  flex flex-col items-center justify-between'>
                        <div >
                            <img className='sm:w-60 xl:w-80' src={images.loginLogo} />
                        </div>
                        <div className='sm:w-60 lg:w-72 sm:text-base lg:text-xl text-textColor text-center'>
                            Welcome to the Admin Panel for <span className='text-[#555555] font-medium'>Cuppa!</span>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-[50%] h-[50vh] lg:h-[70vh] flex flex-col justify-between items-center p-3'>
                    <div className='text-xl sm:text-2xl font-semibold sm:mt-5 lg:mt-10'>
                        Reset Password
                    </div>
                    <div className='w-full lg:w-[80%] '>
                        <div className='text-center'>Enter a new password </div>
                        <div className='w-full bg-bgSettings rounded-xl mt-4 p-2 relative' >
                            <div className='text-sm md:text-lg text-textColor'>Enter New Password</div>
                            <input className='cursor-pointer w-[100%] bg-bgSettings outline-none text-md lg:text-lg  rounded-md' type='text' onChange={(e) => setNewPasswaord(e.target.value)} />
                            <img className='w-6  absolute top-7 md:top-10 right-4' src={images.hidePasswordIcon} />
                        </div>
                        <div className='w-full bg-bgSettings rounded-xl mt-4 p-2 relative'>
                            <div className='text-sm md:text-lg text-textColor'>Confirm Passwaord </div>
                            <input className='cursor-pointer w-[100%] bg-bgSettings outline-none text-md lg:text-lg  rounded-md' type='text' onChange={(e) => setConfirmPasswaord(e.target.value)} />
                            <img className='w-6  absolute top-7 md:top-10 right-4' src={images.hidePasswordIcon} />
                        </div>
                    </div>


                    <div onClick={handleResetPassword} className='cursor-pointer active:opacity-50 text-white bg-gradient-to-r from-green to-darkerGreen p-3 rounded-xl text-md lg:text-lg font-medium w-full lg:w-[80%] flex items-center justify-between mt-4'>
                      Save
                        <div className='bg-white p-2 rounded-md   '>
                            <img className='w-3 sm:w-4' src={images.arrow} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
