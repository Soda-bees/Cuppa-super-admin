
import React, { useContext, useEffect, useState } from 'react'
import images from '../../assets'
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthToken, selectAuthToken } from '../../store/authTokenSlice';
import { clearAdminData, selectAdminData, setAdminData } from '../../store/adminDataSlice';
import { UpdatePassword, updateProfile } from '../../services/config/Api';
import "react-toastify/dist/ReactToastify.css";
import { handleError } from '../../Component/ShowError';
import Loader from '../../Component/Loader';
import { ModalContext } from '../Layout';


export default function Settings() {
    const { setIsLoading } = useContext(ModalContext);

    const adminData = useSelector(selectAdminData)
    const authToken = useSelector(selectAuthToken)    

    const [adminName, setAdminName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [rememberLogin, setRememberLogin] = useState(false)
    const [twoFactor, setTwoFactor] = useState(false)
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loader, setLaoder] = useState(false)

    useEffect(() => {
        if (adminData) {
            setAdminName(adminData?.name)
            setEmail(adminData?.email)
            console.log(adminData?.name);
            
        }
    }, [])

    const token = useSelector(selectAuthToken)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(clearAuthToken());
        dispatch(clearAdminData())
    };

    const handleUpdatePassword = async () => {
        try {
            if (newPassword !== confirmPassword) {
                return handleError("Password must be same")
            }
            setIsLoading(true)
            const body = { password, newPassword }
            const response = await UpdatePassword(token, body)
            if (response?.success) {
                setIsLoading(false)
                setPassword("")
                setNewPassword("");
                setConfirmPassword('')
                alert("Password update successfully")
            } else {
                setIsLoading(false)
                return handleError(response?.message)
            }
        } catch (error) {
            setIsLoading(false)
            return handleError(error.message)
        }
    }

    const handleUpdateProfile = async () => {
        try {
            if (!adminName) {
                return handleError("Please enter name")
            }
            setIsLoading(true)
            const body = {
                name: adminName
            }
            const response = await updateProfile(authToken, body)
            console.log("update profile-=-=>", response);
            if (response?.success) {
                setIsLoading(false)
                dispatch(setAdminData(response?.updatedAdmin))
                alert("Profile updated successfully")
            } else {
                setIsLoading(false)
                return handleError(response?.message)
            }
        } catch (error) {
            setIsLoading(false)
            handleError(error?.message)
        }
    }


    return (
        <div className="xl:pl-[17%] md:pl-[19%] sm:pl-[19%] pl-[22%] py-4 ">
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold mt-10">
                Settings
            </div>
            <div className="text-sm sm:text-base text-textColor mt-2">
                Update your personal profile and security here
            </div>
            <div className="flex justify-between items-center w-[95%] sm:w-[60%] mt-4 sm:mt-10">
                <div className="flex items-center gap-2 text-lg font-medium">
                    <img className="w-6" src={images.editIcon} />
                    Edit Profile
                </div>
                <div>
                    <div onClick={handleUpdateProfile} className="px-6 py-1 bg-gradient-to-r from-green to-darkerGreen text-white rounded-xl cursor-pointer active:opacity-50">
                        Save
                    </div>
                </div>
            </div>
            <div className="w-[95%] sm:w-[60%] bg-bgSettings py-8 rounded-xl mt-4">
                <div className="flex flex-col items-center md:flex-row md:gap-4 sm:justify-center mb-0 md:mb-4">
                    <div className="w-[95%] md:w-[45%] bg-inputBg rounded-xl mt-2 p-2">
                        <div className="text-sm md:text-base text-textColor">
                            Admin Name
                        </div>
                        <input
                            className="w-[100%] outline-none text-sm md:text-lg rounded-md  bg-inputBg"
                            onChange={(e) => setAdminName(e.target.value)}
                            type="text"
                            value={adminName}
                        />
                    </div>
                    <div className="w-[95%] md:w-[45%] bg-inputBg rounded-xl mt-2 p-2">
                        <div className="text-sm md:text-base text-textColor">Email</div>
                        <input
                            className="bg-inputBg w-[100%] outline-none text-sm md:text-lg rounded-md"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            disabled
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center md:flex-row md:gap-4 sm:justify-center md:mb-4">
                    {/* <div className="w-[95%] md:w-[45%] bg-inputBg rounded-xl mt-2 p-2">
                        <div className="text-sm md:text-base text-textColor">Contact</div>
                        <PhoneInput
                            defaultCountry="US"
                            value={contact}
                            onChange={setContact}
                        />
                    </div> */}
                    {/* <div className="w-[95%] md:w-[45%] bg-inputBg rounded-xl mt-2 p-2">
                        <div className="text-sm md:text-base text-textColor">Location</div>
                        <input
                            className="cursor-pointer w-[100%] bg-inputBg outline-none text-sm md:text-lg rounded-md"
                            type="text"
                        />
                    </div> */}
                </div>
            </div>
            <div className="flex justify-between items-center w-[95%] sm:w-[60%] mt-6">
                <div className="flex items-center gap-2 text-lg font-medium">
                    <img className="w-6" src={images.securityIcon} />
                    Security
                </div>
                <div>
                    <div onClick={handleUpdatePassword} className="px-6 py-1 bg-gradient-to-r from-green to-darkerGreen text-white rounded-xl cursor-pointer active:opacity-50">
                        Save
                    </div>
                </div>
            </div>
            <div className="w-[95%] sm:w-[60%] bg-bgSettings py-8 rounded-xl mt-4">
                <div className="text-md sm:text-xl font-semibold ml-5 md:ml-7 xl:ml-10 mb-2">
                    Create Your New Password
                </div>
                <div className="flex flex-col xl:flex-row gap-2 xl:gap-4 ml-5 md:ml-7 xl:ml-10  ">
                    <div className="w-full flex flex-col items-center xl:w-[45%]">
                        <div className="w-[90%] xl:w-[100%] bg-inputBg rounded-xl xl:mt-2 p-2 relative">
                            <div className="text-sm md:text-base text-textColor">
                                Enter Current Password
                            </div>
                            <input
                                className="cursor-pointer w-[100%] outline-none text-sm md:text-lg rounded-md bg-inputBg"
                                type={showCurrentPassword ? "text" : "password"}
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <img
                                className="w-6 absolute top-7 md:top-10 right-4 cursor-pointer"
                                src={showCurrentPassword ? images.hidePasswordIcon : images.showPassword}
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            />
                        </div>
                        <div className="w-[90%] xl:w-[100%] bg-inputBg rounded-xl mt-2 p-2 relative">
                            <div className="text-smmd:text-base text-textColor">
                                Enter New Password
                            </div>
                            <input
                                className="cursor-pointer w-[100%] outline-none text-sm md:text-lg rounded-md bg-inputBg"
                                type={showNewPassword ? "text" : "password"}
                                onChange={(e) => setNewPassword(e.target.value)}
                                value={newPassword}
                            />
                            <img
                                className="w-6 absolute top-7 md:top-10 right-4 cursor-pointer"
                                src={showNewPassword ? images.hidePasswordIcon : images.showPassword}
                                onClick={() => setShowNewPassword(!showNewPassword)}
                            />
                        </div>
                        <div className="w-[90%] xl:w-[100%] bg-inputBg rounded-xl mt-2 p-2 relative">
                            <div className="text-sm md:text-base text-textColor">
                                Enter Confirm Password
                            </div>
                            <input
                                className="cursor-pointer w-[100%] outline-none text-sm md:text-lg bg-inputBg"
                                type={showConfirmPassword ? "text" : "password"}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                            />
                            <img
                                className="w-6 absolute top-7 md:top-10 right-4 cursor-pointer"
                                src={showConfirmPassword ? images.hidePasswordIcon : images.showPassword}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            />
                        </div>
                    </div>
                    {/* <div className="w-full flex flex-col items-center xl:w-[45%]">
                        <div className="w-[90%] xl:w-[100%] bg-inputBg rounded-xl xl:mt-2 p-4  flex items-center justify-between">
                            <div className="text-xs sm:text-sm md:text-lg font-semibold">
                                Remember Login Details
                            </div>
                            <div
                                className={
                                    rememberLogin
                                        ? "cursor-pointer bg-green flex justify-end items-center w-16 py-1 rounded-2xl"
                                        : " cursor-pointer bg-bgtoggle flex justify-star  w-16 py-1  items-center rounded-2xl "
                                }
                                onClick={() => setRememberLogin(!rememberLogin)}
                            >
                                <div
                                    className={
                                        rememberLogin
                                            ? "cursor-pointer w-5 h-5 md:w-6 md:h-6 rounded-full bg-white mr-1"
                                            : "w-5 h-5 md:w-6 md:h-6 rounded-full bg-white ml-1"
                                    }
                                ></div>
                            </div>
                        </div>
                        <div className="w-[90%] xl:w-[100%] bg-inputBg rounded-xl mt-2 p-4 flex items-center justify-between">
                            <div className="text-xs sm:text-sm md:text-lg font-semibold">
                                Two Factor Authentication
                            </div>
                            <div
                                className={
                                    twoFactor
                                        ? "bg-green flex justify-end items-center w-16  py-1 rounded-2xl"
                                        : "cursor-pointer bg-bgtoggle flex justify-star w-16  py-1 items-center rounded-2xl"
                                }
                                onClick={() => setTwoFactor(!twoFactor)}
                            >
                                <div
                                    className={
                                        twoFactor
                                            ? "w-5 h-5 md:w-6 md:h-6 rounded-full bg-white mr-1"
                                            : "w-5 h-5 md:w-6 md:h-6 rounded-full bg-white ml-1"
                                    }
                                ></div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="w-[95%] sm:w-[60%] flex justify-end mt-4">
                <div
                    onClick={handleLogout}
                    className="cursor-pointer active:opacity-50 px-6 py-2 bg-gradient-to-r from-green to-darkerGreen text-white rounded-xl 
                flex justify-center items-center gap-2 text-base"
                >
                    <img className="w-5" src={images.logoutIcon} />
                    Logout
                </div>
            </div>
        </div>
    );
}
