import React from 'react'
import images from '../../assets'
import { useLocation, useNavigate } from "react-router-dom";



export default function SideNav() {
  const location = useLocation();
  const activePath = location.pathname;
  const navigate = useNavigate();
  
  return (
    <div className='border-2 border-borderColor rounded-xl h-[90vh] text-black w-[15%] m-4 fixed ' >
      <div className='hidden md:block w-[90%]  mt-12 md:ml-2  lg:ml-4 mb-28' >
      <img onClick={() => navigate("/dashboard")} className='w-[80%] cursor-pointer' src={images.logo}/>
      </div>
      <div className='block md:hidden flex justify-center mt-12  mb-28' >
      <img className='w-[60%] cursor-pointer' src={images.mobLogo} onClick={() => navigate("/")}/>
      </div>
      <div className='   md:ml-2 xl:ml-4 '>
        <div className='flex items-center justify-center md:justify-start gap-2 mb-6 cursor-pointer active:opacity-50'  onClick={() => navigate("/")}>
          <img className='w-8 md:w-4 lg:w-8' src={activePath === "/" ? images.dashboardGreenIcon :images.dashboardIcon}/>
          <div className= {activePath === "/" ? 'md:text-sm lg:text-lg xl:text-xl hidden md:block text-darkerGreen font-medium ':'md:text-sm lg:text-lg xl:text-xl hidden md:block font-medium'}>Dashboard</div>
        </div>
        <div className='flex items-center justify-center md:justify-start gap-2 mb-6 cursor-pointer active:opacity-50 ' onClick={() => navigate("/outlets")}>
          <img className='w-8 md:w-4 lg:w-8' src={activePath === "/outlets" || activePath.startsWith("/outletdetails") ? images.outletGreenIcon : images.outletIcon}/>
          <div className= {activePath === "/outlets" || activePath.startsWith("/outletdetails") ? 'md:text-sm lg:text-lg xl:text-xl hidden md:block text-darkerGreen font-medium':'md:text-sm lg:text-lg xl:text-xl hidden md:block font-medium' }>Outlets</div>
        </div>
        <div className='flex items-center justify-center md:justify-start gap-2 mb-6 cursor-pointer active:opacity-50' onClick={() => navigate("/rewards")}>
          <img className='w-8 md:w-4 lg:w-8' src={activePath === "/rewards" ? images.rewardGreenIcon :images.rewardIcon}/>
          <div className= {activePath === "/rewards" ? 'md:text-sm lg:text-lg xl:text-xl  hidden md:block text-darkerGreen font-medium':'md:text-sm lg:text-lg xl:text-xl hidden md:block font-medium'}>Reward</div>
        </div>
        <div className='flex items-center justify-center md:justify-start gap-2 mb-6 cursor-pointer active:opacity-50 '  onClick={() => navigate("/settings")}>
          <img className='w-8 md:w-4 lg:w-8'src={activePath === "/settings" ? images.settingGreenIcon :images.settingIcon}/>
          <div className= {activePath === "/settings" ? 'md:text-sm lg:text-lg xl:text-xl hidden md:block text-darkerGreen font-medium':'md:text-sm lg:text-lg xl:text-xl hidden md:block font-medium'}>Settings</div>
        </div>
       
      </div>
      <div className='hidden md:block md:flex md:justify-center mt-28'>
      <img className='md:w-24  lg:w-32 xl:w-40' src={images.coffeeLogo}/>
      </div>
    </div>
  )
}