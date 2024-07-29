import React, { useState } from "react";
import images from "../../assets";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useDispatch } from "react-redux";
import { clearAuthToken } from "../../store/authTokenSlice";

export default function Settings() {
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [currentPasswaord, setCurrentPasswaord] = useState("");
  const [newPasswaord, setNewPasswaord] = useState("");
  const [confirmPasswaord, setConfirmPasswaord] = useState("");
  const [rememberLogin, setRememberLogin] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearAuthToken());
    navigate("/login");
  };

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
          <div className="px-6 py-1 bg-gradient-to-r from-green to-darkerGreen text-white rounded-xl cursor-pointer active:opacity-50">
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
              className="cursor-pointer w-[100%] outline-none text-sm md:text-lg rounded-md  bg-inputBg"
              onChange={(e) => setAdminName(e.target.value)}
              type="text"
            />
          </div>
          <div className="w-[95%] md:w-[45%] bg-inputBg rounded-xl mt-2 p-2">
            <div className="text-sm md:text-base text-textColor">Email</div>
            <input
              className="cursor-pointer bg-inputBg w-[100%] outline-none text-sm md:text-lg rounded-md"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:gap-4 sm:justify-center md:mb-4">
          <div className="w-[95%] md:w-[45%] bg-inputBg rounded-xl mt-2 p-2">
            <div className="text-sm md:text-base text-textColor">Contact</div>
            <PhoneInput
              defaultCountry="US"
              value={contact}
              onChange={setContact}
            />
          </div>
          <div className="w-[95%] md:w-[45%] bg-inputBg rounded-xl mt-2 p-2">
            <div className="text-sm md:text-base text-textColor">Location</div>
            <input
              className="cursor-pointer w-[100%] bg-inputBg outline-none text-sm md:text-lg rounded-md"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-[95%] sm:w-[60%] mt-6">
        <div className="flex items-center gap-2 text-lg font-medium">
          <img className="w-6" src={images.securityIcon} />
          Security
        </div>
        <div>
          <div className="px-6 py-1 bg-gradient-to-r from-green to-darkerGreen text-white rounded-xl cursor-pointer active:opacity-50">
            Save
          </div>
        </div>
      </div>
      <div className="w-[95%] sm:w-[60%] bg-bgSettings py-8 rounded-xl mt-4">
        <div className="text-md sm:text-xl font-semibold ml-5 md:ml-7 xl:ml-10 mb-2">
          Create Your New Password
        </div>
        <div className="flex flex-col xl:flex-row gap-2 xl:gap-4 justify-center">
          <div className="w-full flex flex-col items-center xl:w-[45%]">
            <div className="w-[90%] xl:w-[100%] bg-inputBg rounded-xl xl:mt-2 p-2 relative">
              <div className="text-sm md:text-base text-textColor">
                Enter Current Password
              </div>
              <input
                className="cursor-pointer w-[100%] outline-none text-sm md:text-lg rounded-md bg-inputBg"
                type={showCurrentPassword ? "text" : "password"}
                onChange={(e) => setCurrentPasswaord(e.target.value)}
              />
              <img
                className="w-6 absolute top-7 md:top-10 right-4 cursor-pointer"
                src={images.hidePasswordIcon}
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
                onChange={(e) => setNewPasswaord(e.target.value)}
              />
              <img
                className="w-6 absolute top-7 md:top-10 right-4 cursor-pointer"
                src={images.hidePasswordIcon}
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
                onChange={(e) => setConfirmPasswaord(e.target.value)}
              />
              <img
                className="w-6 absolute top-7 md:top-10 right-4 cursor-pointer"
                src={images.hidePasswordIcon}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center xl:w-[45%]">
            <div className="w-[90%] xl:w-[100%] bg-inputBg rounded-xl xl:mt-2 p-4 flex items-center justify-between">
              <div className="text-xs sm:text-sm md:text-lg font-semibold">
                Remember Login Details
              </div>
              <div
                className={
                  rememberLogin
                    ? "cursor-pointer bg-green flex justify-end items-center w-20 sm:w-16 py-1 rounded-2xl"
                    : " cursor-pointer bg-bgtoggle flex justify-star w-20 sm:w-16 py-1  items-center rounded-2xl "
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
                    ? "bg-green flex justify-end items-center w-20 sm:w-16 py-1 rounded-2xl"
                    : "cursor-pointer bg-bgtoggle flex justify-star w-20 sm:w-16 py-1 items-center rounded-2xl"
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
          </div>
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
