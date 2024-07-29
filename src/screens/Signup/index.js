import React, { useState, useEffect } from 'react'
import images from '../../assets'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css' 
import './custom-phone-number-input.css'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "../../store/authTokenSlice";


export default function Signup() {
    const [adminName, setAdminName] = useState("")
    const [Email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [selectedCheckBox, setSeletedCheckBox] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleSignUp = () => {
        const token = "your-auth-token"; // Replace with your actual token logic
        dispatch(setAuthToken(token));
        navigate('/');
      };
    

    return (
        <div
            className='h-[100vh] bg-center bg-no-repeat flex flex-col sm:flex-row gap-8 sm:gap-0 justify-center items-center'
            style={{
                backgroundImage: `url(${images.loginBg})`,

            }}>
            <div className='block sm:hidden' >
                <img className='w-60' src={images.logo} />
            </div>
            <div className='bg-bgLogin w-[90%] sm:w-[90%] md:w-[80%] lg:w-[70%] lg:w-[60%] rounded-xl flex'>
                <div className='sm:w-[50%] hidden sm:flex  bg-cover bg-no-repeat  items-end p-3   '
                    style={{
                        backgroundImage: `url(${images.logoBg})`,
                    }}>
                    <div className='w-full sm:h-[50vh]   flex flex-col items-center justify-between '>
                        <div >
                            <img className='sm:w-60 xl:w-80' src={images.loginLogo} />
                        </div>
                        <div className='sm:w-60 lg:w-72 sm:text-base lg:text-xl text-textColor text-center'>
                            Welcome to the Admin Panel for <span className='text-[#555555] font-medium'>Cuppa!</span>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] sm:w-[50%] flex flex-col items-center p-3'>
                    <div className='text-xl md:text-2xl font-semibold  sm:mt-5 lg:mt-10'>
                        Sign Up
                    </div>

                    <div className='w-full lg:w-[80%] bg-bgSettings rounded-xl mt-4 p-2 '>
                        <div className='text-md lg:text-lg text-textColor'>Admin Name</div>
                        <input className='cursor-pointer w-[100%] bg-bgSettings outline-none text-md  lg:text-lg  rounded-md' type='text' onChange={(e) => setAdminName(e.target.value)} />
                    </div>
                    <div className='w-full lg:w-[80%] bg-bgSettings rounded-xl mt-2 lg:mt-4 p-2 '>
                        <div className='text-md lg:text-lg text-textColor'>Location</div>
                        <input className='cursor-pointer w-[100%] bg-bgSettings outline-none text-md lg:text-lg rounded-md' type='text' />
                    </div>
                    <div className='w-full lg:w-[80%] bg-bgSettings rounded-xl mt-2 lg:mt-4 p-2 '>
                        <div className='text-md lg:text-lg text-textColor'>Email</div>
                        <input className='cursor-pointer w-[100%] bg-bgSettings outline-none text-md lg:text-lg rounded-md' type='text' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='w-full lg:w-[80%] bg-bgSettings rounded-xl mt-2 lg:mt-4 p-2 '>
                        <div className='text-md lg:text-lg text-textColor'>Contact Number </div>
                        <PhoneInput
                            placeholder="Enter phone number"
                            defaultCountry="US"
                             className="phone-input p-2 h-10 w-full outline-none text-sm md:text-lg rounded-md bg-transparent "
                            value={contact}
                            onChange={setContact}
                        />
                    </div>
                    <div className='relative w-full lg:w-[80%] bg-bgSettings rounded-xl mt-2 p-2 '>
                        <div className='text-md lg:text-lg text-textColor'>Password</div>
                        <input className='cursor-pointer w-[100%] bg-bgSettings outline-none text-md lg:text-lg  rounded-md' type='text' onChange={(e) => setPassword(e.target.value)} />
                        <img className='w-6  absolute top-7 md:top-10 right-4' src={images.hidePasswordIcon} />
                    </div>
                    <div className='w-full lg:w-[80%] mt-3 flex items-start gap-2'>
                        <img onClick={() => setSeletedCheckBox(!selectedCheckBox)} className='w-3 md:w-4 mt-1 cursor-pointer ' src={selectedCheckBox ? images.checkBoxSeleted : images.checkBoxNotSeleted} />
                        <div>
                            <div className='text-sm sm:text-base font-medium mb-0.25'>I accept the Terms of Use</div>
                            <div className='text-xs sm:text-sm text-textColor'>By joining, I agree to Cuppa@ Rewards Terms, the application Terms, and have read the Privacy Statement.</div>
                        </div>
                    </div>
                    <div onClick={handleSignUp} className='cursor-pointer active:opacity-50 w-full lg:w-[80%] text-white bg-gradient-to-r from-green to-darkerGreen p-3 rounded-xl text-sm sm:text-lg font-medium  flex items-center justify-between mb-4 mt-4 md:mt-6 lg:mt-8'>
                        Get Started
                        <div className='bg-white p-2 rounded-md   '>
                            <img className='w-3 sm:w-4' src={images.arrow} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
