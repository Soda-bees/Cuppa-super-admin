import React, { useContext, useEffect, useState } from 'react'
import images from '../../assets'
import { useNavigate } from "react-router-dom";
import Pagination from "../../Component/Pagination";
import { ModalContext } from '../Layout';
import { selectAuthToken } from '../../store/authTokenSlice';
import { useSelector } from 'react-redux';
import { handleGetAllOutlets } from '../../services/config/Api';
import moment from 'moment';

export default function Outlets() {
    const { setIsLoading } = useContext(ModalContext);

    const authToken = useSelector(selectAuthToken)

    const [search, setSearch] = useState("")
    const [dropDown, setDropDown] = useState(false)
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1);

    const [outlet, setOutlet] = useState([
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
        // {
        //     image: images.cafeImg
        // },
    ])

    const handleNavigation = (item) => {
        // navigate(`/outletdetails/${item._id}`);
        navigate(`/outletdetails/${item._id}`, { state: { item } });
    };
    const productsPerPage = 8;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = outlet?.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        getAllOutlets()
    }, [])

    const getAllOutlets = async () => {
        try {
            setIsLoading(true)
            const response = await handleGetAllOutlets(authToken)
            if (response?.success) {
                setIsLoading(false)
                setOutlet(response?.outlets)
            } else {
                setIsLoading(false)
                console.log(response?.message);
            }
        } catch (error) {
            setIsLoading(false)
            console.log("get all cafy", error);
        }
    }

    const handleRating = cafe => {
        if (cafe?.reviews && cafe?.reviews?.length > 0) {
            const totalRating = cafe.reviews.reduce(
                (sum, review) => sum + parseFloat(review.rating),
                0,
            );
            const averageRating = (totalRating / cafe.reviews.length).toFixed(1);
            return averageRating;
        } else {
            return 0;
        }
    };
    const handleStatus = openHours => {
        const [startTime, endTime] = openHours?.split(' - ');
        const currentTime = moment();
        const openTime = moment(startTime, 'hh:mm A');
        let closeTime = moment(endTime, 'hh:mm A');
        if (closeTime?.isBefore(openTime)) {
            closeTime?.add(1, 'day');
        }
        if (
            currentTime.isBetween(openTime, closeTime) ||
            currentTime.isSame(openTime)
        ) {
            return "open"
        } else {
            return 'close'
        }
    };
    return (
        <>
            <div className=' md:pl-[18%] sm:pl-[19%] pl-[22%] py-4 pr-4'>
                <div className=''>
                    <div className='relative mb-4 sm:mb-6 md:mb-10'>
                        <img className='absolute left-2 top-3 md:top-4 w-5 cursor-pointer' src={images.searchIcon} />
                        <input placeholder='search' className='w-[100%] border-2 border-borderColor rounded-xl cursor-pointer bg-transparent p-2 pl-8 text-md md:text-xl outline-none'
                            onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <div className='flex justify-between relative mb-2'>
                        <div className='text-xl sm:2xl md:text-3xl font-semibold'>Outlets</div>
                        {/* <div className='flex items-center gap-2' onClick={() => setDropDown(!dropDown)}>
                            <img className='w-4 sm:w-6 md:w-8' src={images.filterIcon} />
                            <div className='text-xl sm:2xl md:text-3xl font-semibold'>Filter</div>
                        </div>
                        {dropDown && (
                            <div className='border-2 border-borderColor rounded-xl absolute right-4 top-8 p-4 bg-white z-10'>
                                <div className='flex items-center gap-2 my-2'>
                                    <img src={images.addNewOutlet} className='w-6' />
                                    <div className='text-lg'>New Outlets</div>
                                </div>
                                <div className='border border-borderColor'></div>
                                <div className='flex items-center gap-2 my-2'>
                                    <img src={images.updateOutlet} className='w-6' />
                                    <div className='text-lg'>Update</div>
                                </div>
                                <div className='border border-borderColor'></div>
                                <div className='flex items-center gap-2 my-2'>
                                    <img src={images.banOutlet} className='w-6' />
                                    <div className='text-lg'>Banned</div>
                                </div>
                            </div>
                        )} */}
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                        {outlet?.length > 0 && currentProducts?.map((item, index) => (
                            <div className='cursor-pointer border-2 border-borderColor rounded-xl w-full p-4'
                                onClick={() => handleNavigation(item)}
                                >
                                <div className='w-full relative'>
                                    <img className='rounded-xl min-h-[250px] max-h-[250px] object-cover' src={item?.outletCover} />
                                    <div className='flex justify-center items-center gap-1 bg-white rounded-xl absolute left-2 bottom-2 px-2 backdrop-blur-xl bg-white/30'>
                                        <img className='w-4' src={images.starIcon} />
                                        <span className='text-md sm:text-base md:text-lg font-semibold text-white'>{handleRating(item)}</span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center my-2'>
                                    <div className='text-md md:text-xl font-semibold'>{item?.outletName}</div>
                                    <div className='text-md md:text-xl'>{handleStatus(item?.openHours) || ""}</div>
                                </div>
                                <div className='my-2'>
                                    <div className='flex item-center gap-1'>
                                        <img className='w-4 object-contain md:w-5' src={images.locationIcon} />
                                        <div className='text-md md:text-xl text-lightGray'>{item?.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {
                    outlet?.length > 0 &&
                    <div className='fixed bottom-0 left-[50%]'>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={Math.ceil(outlet.length / productsPerPage)}
                            onPageChange={handlePageChange}
                        />
                    </div>
                }
            </div>
        </>
    )
}
