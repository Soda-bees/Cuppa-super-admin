import React, { useState } from 'react'
import images from '../../assets'
import { useNavigate } from "react-router-dom";
import Pagination from "../../Component/Pagination";



export default function Outlets() {
    const [search, setSearch] = useState("")
    const [dropDown, setDropDown] = useState(false)
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1);

    const [outlet, setOutlet] = useState([
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
        {
            image: images.cafeImg
        },
    ])

    const handleNavigation = (index) => {
        navigate(`/outletdetails/${index}`);
    };
    const productsPerPage = 12;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = outlet.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <>
            <div className=' md:pl-[18%] sm:pl-[19%] pl-[22%] py-4'>
                <div className='w-[98%]'>
                    <div className='relative mb-4 sm:mb-6 md:mb-10'>
                        <img className='absolute left-2 top-3 md:top-4 w-5 cursor-pointer' src={images.searchIcon}/>
                        <input placeholder='search' className='w-[100%] border-2 border-borderColor rounded-xl cursor-pointer bg-transparent p-2 pl-8 text-md md:text-xl outline-none' 
                        onChange={(e) => setSearch(e.target.value)}/>
                    </div>
                    <div className='flex justify-between relative mb-2'>
                        <div className='text-xl sm:2xl md:text-3xl font-semibold'>Outlets</div>
                        <div className='flex items-center gap-2' onClick={() => setDropDown(!dropDown)}>
                            <img className='w-4 sm:w-6 md:w-8' src={images.filterIcon} />
                            <div className='text-xl sm:2xl md:text-3xl font-semibold'>Filter</div>
                        </div>
                        {dropDown && (
                            <div className='border-2 border-borderColor rounded-xl absolute right-4 top-8 p-4 bg-white z-10'>
                                <div className='flex items-center gap-2 my-2'>
                                    <img src={images.addNewOutlet} className='w-6'/>
                                    <div className='text-lg'>New Outlets</div>
                                </div>
                                <div className='border border-borderColor'></div>
                                <div className='flex items-center gap-2 my-2'>
                                    <img src={images.updateOutlet} className='w-6'/>
                                    <div className='text-lg'>Update</div>
                                </div>
                                <div className='border border-borderColor'></div>
                                <div className='flex items-center gap-2 my-2'>
                                    <img src={images.banOutlet} className='w-6'/>
                                    <div className='text-lg'>Banned</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                        {currentProducts.map((item, index) => (
                            <div className='cursor-pointer border-2 border-borderColor rounded-xl w-full p-4' 
                            onClick={() => handleNavigation(index)}>
                                <div className='w-full relative'>
                                    <img className='rounded-xl' src={item.image}/>
                                    <div className='flex justify-center items-center gap-1 bg-white rounded-xl absolute left-2 bottom-2 px-2 backdrop-blur-xl bg-white/30'>
                                        <img className='w-4' src={images.starIcon}/>
                                        <span className='text-md sm:text-base md:text-lg font-semibold text-white'>5.0</span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center my-2'>
                                    <div className='text-md md:text-xl font-semibold'>Havana Cafe</div>
                                    <div className='text-md md:text-xl'>Open</div>
                                </div>
                                <div className='flex items-center justify-between my-2'>
                                    <div className='flex item-center gap-1'>
                                        <img className='w-4 object-contain md:w-5' src={images.locationIcon}/>
                                        <div className='text-md md:text-xl text-lightGray'>NY,Newyork</div>
                                    </div>
                                    <div>
                                        <img className='h-4 md:h-6' src={images.dotIcon}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(outlet.length / productsPerPage)}
                onPageChange={handlePageChange}
            />
        </>
    )
}
