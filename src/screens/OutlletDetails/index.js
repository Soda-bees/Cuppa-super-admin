import React, { useState, useRef, useEffect } from 'react'
import images from '../../assets'
import Modal from 'react-modal';
import { useNavigate, useLocation } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoffeeCarousel from '../../Component/Slider';
import moment from 'moment';

export default function OutletDetails() {
    const scrollRef = useRef(null);
    const eventScrollRef = useRef(null);

    const location = useLocation();
    const item = location.state?.item;

    const [dropDown, setDropDown] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isEventModalOpen, setIsEventModalOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(null);
    const [currentIndexTwo, setCurrentIndexTwo] = useState(null);
    const [orderStatus, setOrderStatus] = useState("All");
    const [cafeDetails, setCafeDetails] = useState()
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => setIsExpanded(!isExpanded);

    const descriptionLimit = 100; // You can adjust this character limit

    const shouldShowReadMore = cafeDetails?.description?.length > descriptionLimit;

    useEffect(() => {
        if (location.state?.item) {
            console.log
                ("location.state.item", item);
            setCafeDetails(item)
        }
    }, [location.state?.item]);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    const navigate = useNavigate()
    let sliderRef = useRef(null);
    let sliderRefTwo = useRef(null);

    const openModal = (item) => {
        setCurrentIndex(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentIndex(null);
    };

    const openEventModal = (item) => {
        setCurrentIndexTwo(item);
        setIsEventModalOpen(true);
    };

    const closeEventModal = () => {
        setIsEventModalOpen(false);
        setCurrentIndexTwo(null);
    };

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const nextTwo = () => {
        sliderRefTwo.slickNext();
    };
    const previousTwo = () => {
        sliderRefTwo.slickPrev();
    };

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

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -300, // Adjust scroll amount
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 300, // Adjust scroll amount
            behavior: 'smooth',
        });
    };

    const eventScrollLeft = () => {
        eventScrollRef.current.scrollBy({
            left: -300, // Adjust scroll amount
            behavior: 'smooth',
        });
    };

    const eventScrollRight = () => {
        eventScrollRef.current.scrollBy({
            left: 300, // Adjust scroll amount
            behavior: 'smooth',
        });
    };

    const getShortId = (id) => {
        if (!id) return '';
        return id.toString().slice(0, 8);
    }

    const formatDate = (date) => {
        return moment(date).format('MMM-DD-YYYY h:mm A');
    };

    return (
        <div className='md:pl-[18%] sm:pl-[19%] pl-[22%] py-6 px-2'>
            <div className='flex  items-center mb-4 md:6 lg:mb-10'>
                <div>
                    <img className='w-6 md:w-8 cursor-pointer active:opacity-50' src={images.backBtn} onClick={() => navigate('/outlets')} />
                </div>
                <div className='text-xl md:text-2xl font-semibold mx-auto'>{`${cafeDetails?.outletName} Details`}</div>
                {/* <div className=' cursor-pointer active:opacity-50 bg-gradient-to-r from-green to-darkerGreen text-white text-xs sm:text-base px-2 md:px-6 py-2 rounded-md font-medium'>
                    Ban Outlet
                </div> */}
            </div>
            <div className='flex flex-col lg:flex-row gap-2 gap-2 lg:gap-6 mb-4 md:mb-6 lg:mb-10'>
                <div>
                    <img className='w-full sm:h-[250px] lg:w-[450px] lg:h-[300px] lg:w-[430px] lg:h-[310px] object-cover rounded-md' src={cafeDetails?.outletCover} />
                </div>
                <div>
                    <div className='text-xl md:text-3xl font-semibold mt-4'>
                        {cafeDetails?.outletName}
                    </div>
                    <div className='flex gap-4 my-2'>
                        <div className='flex items-center gap-2 text-base sm:text-lg md:text-xl text-textColor'>
                            <img className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain' src={images.locationIcon} />
                            {cafeDetails?.location}
                        </div>
                        <div className='flex items-center gap-2 text-base sm:text-lg md:text-xl text-textColor'>
                            <img className='w-4 sm:w-5 md:w-6' src={images.starIcon} />
                            {handleRating(item)}
                        </div>
                    </div>
                    <div className='text-xl md:text-2xl font-semibold mt-10'>About</div>
                    <div className=' text-sm mt-2 w-[300px]'>
                        <p>
                            {isExpanded ? cafeDetails?.description : `${cafeDetails?.description?.slice(0, descriptionLimit)}...`}
                            {shouldShowReadMore && (
                                <span
                                    onClick={toggleExpanded}
                                    className='text-blue-500 cursor-pointer ml-1'
                                >
                                    {isExpanded ? 'Read Less' : 'Read More'}
                                </span>
                            )}
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mb-4  '>
                <div className='text-xl md:text-2xl font-semibold'>Category</div>
                <div className='flex items-center gap-4 mr-4'>
                    <img className='w-6 md:w-8 cursor-pointer active:opacity-50' src={images.backBtn} onClick={scrollLeft} />
                    <img className='w-6 md:w-8 cursor-pointer active:opacity-50' src={images.nextArrow} onClick={scrollRight} />
                </div>
            </div>
            <div className="relative">
                <div
                    ref={scrollRef}
                    className=" flex overflow-x-auto space-x-4 scrollbar-hide"
                >
                    {cafeDetails?.category?.map((item, index) => (
                        <div
                            className="relative cursor-pointer flex-shrink-0 w-60"
                            onClick={() => openModal(item)}
                            key={index}
                        >
                            <img
                                className="rounded-xl h-48 md:h-60 lg:w-[600px]"
                                src={item?.categoryCover}
                                alt={item?.name}
                            />
                            <div className="bg-white absolute left-5 bottom-5 px-3 py-1 rounded-3xl font-medium text-lg">
                                {item?.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-between items-center mb-4 mt-4  '>
                <div className='text-xl md:text-2xl font-semibold'>Events</div>
                <div className='flex items-center gap-4 mr-4'>
                    <img className='w-6 md:w-8 active:opacity-50 cursor-pointer' src={images.backBtn} onClick={eventScrollLeft} />
                    <img className='w-6 md:w-8 active:opacity-50 cursor-pointer' src={images.nextArrow} onClick={eventScrollRight} />
                </div>
            </div>


            <div className='mt-4'>
                <div className="relative">
                    <div
                        ref={eventScrollRef}
                        className=" flex overflow-x-auto space-x-4 scrollbar-hide"
                        style={{ whiteSpace: "nowrap" }}
                    >
                        {cafeDetails?.events?.map((item, index) => (
                            <div className='flex-shrink-0' style={{ width: "340px" }} key={index}>
                                <div className=' flex justify-start gap-2 w-full'>
                                    <img className='h-28 rounded-xl' src={item?.coverPhoto} />
                                    <div className=' '>
                                        <div className='mb-6'>
                                            <div className='text-xl font-semibold'>{item?.title}</div>
                                            <div className='text-textColor'>{item?.date}</div>
                                        </div>
                                        <div className='flex justify-start items-center'>
                                            <div onClick={() => openEventModal(item)}
                                                className='cursor-pointer active:opacity-50 bg-gradient-to-r py-1 px-4 from-green to-darkerGreen text-white rounded-md flex justify-center'>
                                                Read More
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border border-borderColor mx-4 sm:mx-0 lg:mx-4 '></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className='flex items-center gap-2 md:gap-4 w-full mt-10 mb-4'>
                <div className='flex items-center gap-2 md:gap-4 w-full my-4'>
                    <div className='text-md md:text-2xl font-semibold'>
                        {`${cafeDetails?.outletName} Orders`}
                    </div>
                    <div className='rounded-2xl text-md px-2 md:px-4 py-1 text-white bg-gradient-to-r from-green to-darkerGreen'>
                        {`${cafeDetails?.orders?.length} orders`}
                    </div>
                </div>
            </div>
            <div className='hidden lg:block'>
                <div className='border-2 border-borderColor rounded-xl relative'>
                    <div className='grid grid-cols-6 my-2'>
                        <div className='text-lg text-orderColor flex justify-center'>Customer Name</div>
                        <div className='text-lg text-orderColor flex justify-center'>Order Id</div>
                        <div className='text-lg text-orderColor flex justify-center'>Payment Method</div>
                        <div className='text-lg text-orderColor flex justify-center'>Amount</div>
                        <div className='text-lg text-orderColor flex justify-center'>Delivery Time</div>
                        <div className='flex items-center justify-center gap-2'>
                            <div className='text-lg text-orderColor cursor-pointer' onClick={() => setDropDown(!dropDown)}>{orderStatus === "All" ? "Order Status" : orderStatus} </div>
                            <img className="w-4 transition-transform duration-300"
                                style={{ transform: dropDown ? 'rotate(180deg)' : 'rotate(0deg)' }} src={images.downArrow} />
                        </div>
                        {dropDown && (
                            <div className='border-2 border-borderColor rounded-xl absolute right-16 top-10 py-0  bg-white z-10'>
                                <div onClick={() => { setOrderStatus("All"); setDropDown() }} className='flex justify-center items-center gap-2 px-8 py-1 cursor-pointer hover:bg-bgSettings'>
                                    <div className='text-lg'>All</div>
                                </div>
                                <div className='border border-borderColor'></div>
                                <div onClick={() => { setOrderStatus("Pending"); setDropDown() }} className='flex justify-center items-center gap-2 px-8 py-1 cursor-pointer hover:bg-bgSettings'>
                                    <div className='text-lg'>Pending</div>
                                </div>
                                <div className='border border-borderColor'></div>
                                <div onClick={() => { setOrderStatus("Completed"); setDropDown() }} className='flex justify-center items-center gap-2 px-8 py-1 cursor-pointer hover:bg-bgSettings'>
                                    <div className='text-lg'>Completed</div>
                                </div>
                                <div className='border border-borderColor'></div>
                                <div onClick={() => { setOrderStatus("Cancelled"); setDropDown() }} className='flex justify-center items-center gap-2 px-8 py-1 cursor-pointer hover:bg-bgSettings'>
                                    <div className='text-lg'>Cancelled</div>
                                </div>
                                <div className='border border-borderColor'></div>
                                <div onClick={() => { setOrderStatus("Ready"); setDropDown() }} className='flex justify-center items-center gap-2 px-8 py-1 cursor-pointer hover:bg-bgSettings'>
                                    <div className='text-lg'>Ready</div>
                                </div>
                                <div className='border border-borderColor'></div>
                                <div onClick={() => { setOrderStatus("Picked"); setDropDown() }} className='flex justify-center items-center gap-2 px-8 py-1 cursor-pointer hover:bg-bgSettings'>
                                    <div className='text-lg'>Picked</div>
                                </div>
                                <div className='border border-borderColor'></div>
                                <div onClick={() => { setOrderStatus("Preparing"); setDropDown() }} className='flex justify-center items-center gap-2 px-8 py-1 cursor-pointer hover:bg-bgSettings'>
                                    <div className='text-lg'>Preparing</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='border border-borderColor my-2 mx-6'></div>
                    <div className=' h-[40vh] overflow-scroll'>
                        {cafeDetails?.orders
                            .filter(item => orderStatus === "All" || item.status === orderStatus)
                            .map((order, index) => (
                                <div key={index} className='grid grid-cols-6 my-4 mr-4'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <div className='text-lg text-orderColor'>{index + 1}</div>
                                        <div className='text-lg font-semibold'>{order?.customerData?.userName}</div>
                                    </div>
                                    <div className='text-lg text-orderColor flex justify-center'>{getShortId(order?._id)}</div>
                                    <div className='text-lg text-orderColor flex justify-center'>{order?.paymentMethod}</div>
                                    <div className='text-lg text-orderColor flex justify-center'>{`$ ${order?.totalAmount}`}</div>
                                    <div className='text-lg text-orderColor flex justify-center'>{formatDate(order?.createdAt)}</div>
                                    <div className='flex justify-center items-center'>
                                        <div
                                            className={order?.status === "Pending" ? "flex items-center justify-center rounded-md text-md bg-pendingBG text-lightGreen px-5 py-1" :
                                                order?.status === "Ready" ? "flex items-center justify-center rounded-md text-md bg-readyBG text-readyText px-5 py-1" :
                                                    order?.status === "Cancelled" ? "flex items-center justify-center rounded-md text-md bg-cancelBG text-cancleText px-5 py-1" :
                                                        order?.status === "Picked" ? "flex items-center justify-center rounded-md text-md bg-pickedBG text-pickedText px-5 py-1" :
                                                            order?.status === "Completed" ? "flex items-center justify-center rounded-md text-md bg-colpletedBG text-completedText px-5 py-1" :
                                                                order?.status === "Preparing" && "flex items-center justify-center rounded-md text-md bg-preparingBG text-preparingText px-5 py-1"
                                            }
                                        >{order?.status}</div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

            </div>
            <div className='lg:hidden'>
                <div className="border border-borderColor rounded-lg p-4 shadow-sm">
                    {cafeDetails?.orders?.map((order, index) => (
                        <div key={index} className="border-t border-borderColor">
                            <div className='flex gap-2 my-2'>
                                <div className='mt-0.5 sm:text-base md:text-lg text-orderColor'>{index + 1}</div>
                                <div className=' w-full flex flex-col gap-1'>
                                    <div className='flex justify-between'>
                                        <div className='text-lg sm:text-xl md:text-2xl font-semibold'>{order?.customerData?.userName}</div>
                                        <div className='text-lg sm:text-xl md:text-2xl font-semibold'>{`$ ${order?.totalAmount}`}</div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='text-xs sm:text-base md:text-lg text-orderColor'>{formatDate(order?.createdAt)} - {order.paymentMethod}</div>
                                        <div
                                            className={order?.status === "Pending" ? "flex items-center justify-center rounded-md text-sm bg-pendingBG text-lightGreen px-2 py-1" :
                                                order?.status === "Ready" ? "flex items-center justify-center rounded-md text-sm bg-readyBG text-readyText px-2 py-1" :
                                                    order?.status === "Cancelled" ? "flex items-center justify-center rounded-md text-sm bg-cancelBG text-cancleText px-2 py-1" :
                                                        order?.status === "Picked" ? "flex items-center justify-center rounded-md text-sm bg-pickedBG text-pickedText px-2 py-1" :
                                                            order?.status === "Completed" ? "flex items-center justify-center rounded-md text-sm bg-colpletedBG text-completedText px-2 py-1" :
                                                                order?.status === "Preparing" && "flex items-center justify-center rounded-md text-sm bg-preparingBG text-preparingText px-2 py-1"
                                            }
                                        >{order?.status}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                className="outline-none h-[100vh] flex items-center justify-center bg-black bg-opacity-10"
            >
                <div className='bg-white w-[90%] sm:w-[50%] md:w-[45%] lg:w-[35%] xl:w-[20%] rounded-xl p-6'>
                    {currentIndex !== null && (
                        <>
                            <div className='flex items-center gap-[50px] md:gap-[70px] xl:gap-[80px] mt-2 mb-8'>
                                <div>
                                    <img onClick={closeModal} className='w-7 cursor-pointer' src={images.cross} />
                                </div>
                                <div className='text-2xl font-semibold'>
                                    {currentIndex?.name}
                                </div>
                            </div>
                            <div className='text-textColor mb-4'>
                                {`International ${currentIndex?.name}`}
                            </div>
                            <div className='max-h-[40vh] overflow-scroll'>
                                {cafeDetails?.menu?.filter(item => item?.category?._id == currentIndex?._id).map((item, index) => (
                                    <div key={index}>
                                        <div className='flex items-center gap-4 mb-2'>
                                            <div>
                                                <img className='h-24 w-24 rounded-xl' src={item.image} />
                                            </div>
                                            <div >
                                                <div className='text-lg md:text-xl font-semibold my-1'>{item.name}</div>
                                                <div className='text-base md:text-lg font-medium text-green'>${item?.sizes[0]?.price}</div>
                                            </div>
                                        </div>
                                        <div className='border border-borderColor my-2'></div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </Modal>
            <Modal
                isOpen={isEventModalOpen}
                className="outline-none h-[100vh] flex items-center justify-center bg-black bg-opacity-10"
            >
                <div className='bg-white w-[90%] sm:w-[60%] lg:w-[50%] xl:w-[30%] rounded-xl p-4'>
                    {currentIndexTwo !== null && (
                        <>
                            <div className='flex items-center mt-2 mb-4'>
                                <div className='w-[40%]' >
                                    <img onClick={closeEventModal} className='w-6 md:w-8 cursor-pointer' src={images.cross} />
                                </div>
                                <div className='text-xl font-semibold w-[60%]'>
                                    Event
                                </div>
                            </div>
                            <div className='w-full mt-2 mb-2 relative'>
                                <img className='w-[100%] h-[15vh] md:h-[25vh] rounded-xl object-cover' src={currentIndexTwo?.coverPhoto} />
                                <div className='text-white absolute bottom-6 right-4 rounded-xl px-3 text-sm  backdrop-opacity-10 backdrop-invert bg-black/30'>Exclusive To Cuppa Club Members</div>
                            </div>
                            <div className='flex flex-col sm:flex-row items-center justify-between mb-2'>
                                <div className='flex w-full gap-2 justify-between sm:justify-start sm:flex-col md:w-[40%]'>
                                    <div className='text-xl md:text-2xl font-bold '>{currentIndexTwo?.title}</div>
                                    <div className='flex items-center gap-1 md:gap-2 text-md text-textColor' >
                                        <img className='w-3' src={images.locationIcon} />
                                        {cafeDetails?.location}
                                    </div>
                                </div>
                                <div className='flex w-full gap-2 justify-between sm:justify-start sm:flex-col md:w-[50%] xl:w-[40%]'>
                                    <div className='flex items-center gap-1 md:gap-2 text-xs sm:text-base lg:text-lg font-medium'>
                                        <img className='w-4 md:w-6' src={images.calendar} />
                                        {currentIndexTwo?.date}
                                    </div>
                                    <div className='flex items-center gap-1 md:gap-2 text-xs sm:text-base lg:text-lg font-medium'>
                                        <img className='w-4 md:w-6' src={images.clockIcon} />
                                        {currentIndexTwo?.timing}
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2 mb-2 text-sm'>
                                {currentIndexTwo?.description}
                            </div>
                        </>
                    )}
                </div>
            </Modal>
        </div>
    )
}
