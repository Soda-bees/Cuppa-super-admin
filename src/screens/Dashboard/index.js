import React, { useContext, useEffect, useState } from 'react'
import images from '../../assets'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import { selectAdminData } from '../../store/adminDataSlice';
import { selectAuthToken } from '../../store/authTokenSlice';
import { handleGetAllOutlets } from '../../services/config/Api';
import { ModalContext } from '../Layout';

export default function Dashboard() {
    const { setIsLoading } = useContext(ModalContext);

    const adminData = useSelector(selectAdminData)
    const authToken = useSelector(selectAuthToken)

    const [search, setSearch] = useState("")
    const [sales, setSales] = useState(0)
    const [orders, setOrders] = useState(0)
    const [outlets, setOutlets] = useState(0)
    const [newOutlets, setNewOutlets] = useState(5)
    const [oldOutlets, setOldOutlets] = useState(150)

    const [dropDown, setDropDown] = useState(false)
    const [selectedCafe, setSelectedCafe] = useState();

    const [orderStatus, setOrderStatus] = useState("All");

    const [cafes, setCafes] = useState([
        // {
        //     name: 'Havana Cafe',
        //     image: images.cafeImg,
        //     rating: 5.0,
        //     status: 'open',
        //     location: 'NY, Newyork',
        //     orders: [
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //     ]
        // },
        // {
        //     name: 'Havana Cafe',
        //     image: images.cafeImg,
        //     rating: 4.0,
        //     status: 'open',
        //     location: 'NY, Newyork',
        //     orders: [
        //         {
        //             customerName: "dsjfsd fsdfsd",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //     ]
        // },
        // {
        //     name: 'Havana Cafe',
        //     image: images.cafeImg,
        //     rating: 4.5,
        //     status: 'open',
        //     location: 'NY, Newyork',
        //     orders: [
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //     ]
        // },
        // {
        //     name: 'Havana Cafe',
        //     image: images.cafeImg,
        //     rating: 5.0,
        //     status: 'open',
        //     location: 'NY, Newyork',
        //     orders: [
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //     ]
        // },
        // {
        //     name: 'Havana Cafe',
        //     image: images.cafeImg,
        //     rating: 5.0,
        //     status: 'open',
        //     location: 'NY, Newyork',
        //     orders: [
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //     ]
        // },
        // {
        //     name: 'Havana Cafe',
        //     image: images.cafeImg,
        //     rating: 5.0,
        //     status: 'open',
        //     location: 'NY, Newyork',
        //     orders: [
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //     ]
        // },
        // {
        //     name: 'Havana Cafe',
        //     image: images.cafeImg,
        //     rating: 5.0,
        //     status: 'open',
        //     location: 'NY, Newyork',
        //     orders: [
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //     ]
        // },
        // {
        //     name: 'Havana Cafe',
        //     image: images.cafeImg,
        //     rating: 5.0,
        //     status: 'open',
        //     location: 'NY, Newyork',
        //     orders: [
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //     ]
        // },
        // {
        //     name: 'Havana Cafe',
        //     image: images.cafeImg,
        //     rating: 5.0,
        //     status: 'open',
        //     location: 'NY, Newyork',
        //     orders: [
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //     ]
        // },
        // {
        //     name: 'Havana Cafe',
        //     image: images.cafeImg,
        //     rating: 5.0,
        //     status: 'open',
        //     location: 'NY, Newyork',
        //     orders: [
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //     ]
        // },
        // {
        //     name: 'Havana Cafe',
        //     image: images.cafeImg,
        //     rating: 5.0,
        //     status: 'open',
        //     location: 'NY, Newyork',
        //     orders: [
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Pending",
        //         },
        //         {
        //             customerName: "Justin Lipshutz",
        //             customerId: "Dsukjik414",
        //             paymentMethod: "Cash on Delivery",
        //             amount: "$2,50",
        //             timestamp: "Today 05:00PM",
        //             status: "Completed",
        //         },
        //     ]
        // },

    ]);

    const handleClick = (item) => {
        setSelectedCafe(item);
    };

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        getAllOutlets()
    }, [])

    const getAllOutlets = async () => {
        try {
            setIsLoading(true)
            const response = await handleGetAllOutlets(authToken)
            console.log("get all cafy", response);
            if (response?.success) {
                setIsLoading(false)
                setOutlets(response?.outlets?.length)
                calculateAllOrders(response?.outlets)
                calculateTotalSales(response?.outlets)
                setCafes(response?.outlets)
            } else {
                setIsLoading(false)
                console.log(response?.message);
            }
        } catch (error) {
            setIsLoading(false)
            console.log("get all cafy", error);
        }
    }

    const calculateAllOrders = async (outlets) => {
        const totalOrders = outlets.reduce((total, outlet) => {
            return total + (outlet.orders ? outlet.orders.length : 0);
        }, 0);
        setOrders(totalOrders)
    }

    const calculateTotalSales = async (outlets) => {
        // Use reduce to calculate the total sales amount
        const totalSales = outlets.reduce((total, outlet) => {
            // Sum up the totalAmount for each order in the outlet
            const outletTotal = outlet.orders
                ? outlet.orders.reduce((sum, order) => sum + parseFloat(order.totalAmount), 0)
                : 0;

            return total + outletTotal;
        }, 0);

        // return totalSales;
        console.log(totalSales);
        setSales(totalSales)
    };

    return (
        <div className='md:pl-[18%] sm:pl-[19%] pl-[22%] py-4 box-border'>
            <div className='w-[98%]'>
                <div className='relative'>
                    <img className='absolute left-2 top-4 w-5  cursor-pointer' src={images.searchIcon} />
                    <input placeholder='Search' className='w-[100%] border-2 border-borderColor rounded-xl cursor-pointer bg-transparent p-2 pl-8 text-xl outline-none'
                        onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className=' mt-4 sm:mt-6 md:mt-10 mb-4'>
                    <div className='text-xl sm:text-2xl md:text-3xl'>
                        <span className='font-semibold'>Welcome,</span> {adminData?.name}
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 w-full gap-2 mb-3 lg:mb-6'>
                    <div className='border-2 border-borderColor rounded-xl w-full p-4 sm:p-6 md:p-4 lg:p-2 xl:p-6'>
                        <div className='w-full flex items-center gap-4 lg:gap-2 xl:gap-4 my-1 sm:my-2'>
                            <img className=' w-8 sm:w-10 lg:w-14 xl:w-16' src={images.salesIcon} />
                            <span className='font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-darkerBlue'>${sales}</span>
                        </div>
                        <div className='text-lg font-medium sm:text-xl xl:text-2xl my-1 sm:my-2 text-gray'>Total Sales</div>
                        {/* <div className='text-md my-1 sm:my-2 text-lightGray'>+8% from yesterday</div> */}
                    </div>
                    <div className='border-2 border-borderColor rounded-xl w-full p-4 sm:p-6 md:p-4 lg:p-2 xl:p-6'>
                        <div className='w-full flex items-center gap-4 lg:gap-2 xl:gap-4 my-1 sm:my-2'>
                            <img className=' w-8 sm:w-10 lg:w-14 xl:w-16' src={images.orderIcon} />
                            <span className='font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-darkerBlue'>{orders}</span>
                        </div>
                        <div className='text-lg font-medium sm:text-xl xl:text-2xl my-1 sm:my-2 text-gray'>Total Order</div>
                        {/* <div className='text-md my-1 sm:my-2 text-lightGray'>+5% from yesterday</div> */}
                    </div>
                    <div className='border-2 border-borderColor rounded-xl w-full p-4 sm:p-6 md:p-4 lg:p-2 xl:p-6'>
                        <div className='w-full flex items-center gap-4 lg:gap-2 xl:gap-4 my-1 sm:my-2'>
                            <img className=' w-8 sm:w-10 lg:w-14 xl:w-16' src={images.newOutletIcon} />
                            <span className='font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-darkerBlue'>{outlets}</span>
                        </div>
                        <div className='text-lg font-medium sm:text-xl xl:text-2xl my-1 sm:my-2 text-gray'>Total Outlets</div>
                        {/* <div className='text-md my-1 sm:my-2 text-lightGray'>+1.2% from yesterday</div> */}
                    </div>
                    <div className='border-2 border-borderColor rounded-xl w-full p-4 sm:p-6 md:p-4 lg:p-2 xl:p-6'>
                        <div className='w-full flex items-center gap-4 lg:gap-2 xl:gap-4 my-1 sm:my-2'>
                            <img className=' w-8 sm:w-10 lg:w-14 xl:w-16' src={images.newOutletIcon} />
                            <span className='font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-darkerBlue'>{newOutlets}</span>
                        </div>
                        <div className='text-lg font-medium sm:text-xl xl:text-2xl my-1 sm:my-2 text-gray'>New Outlets</div>
                        <div className='text-md my-1 sm:my-2 text-lightGray'>In past seven days</div>
                    </div>
                    <div className='border-2 border-borderColor rounded-xl w-full p-4 sm:p-6 md:p-4 lg:p-2 xl:p-6'>
                        <div className='w-full flex items-center gap-4 lg:gap-2 xl:gap-4 my-1 sm:my-2'>
                            <img className='w-8 sm:w-10 lg:w-14 xl:w-16' src={images.newOutletIcon} />
                            <span className='font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-darkerBlue'>{oldOutlets}</span>
                        </div>
                        <div className='text-lg font-medium sm:text-xl xl:text-2xl my-1 sm:my-2 text-gray'>Active Outlets</div>
                        {/* <div className='text-md my-1 sm:my-2 text-lightGray'>0.5% from yesterday</div> */}
                    </div>
                </div>
                <div className='text-xl md:text-2xl font-semibold mb-4'>Outlets</div>
                <Slider {...settings} >
                    {cafes.map((item, index) => (
                        <div key={index}
                            className={`cursor-pointer border-2 rounded-xl p-4 ${selectedCafe?._id === item?._id ? 'border-darkerGreen' : 'border-borderColor'}`}
                            onClick={() => handleClick(item)}
                        >
                            <div className='w-full relative'>
                                <img className='rounded-xl w-[100%] min-h-[240px] object-cover' src={item?.outletCover} alt={item?.outletName} />
                                <div className='flex justify-center items-center gap-1 bg-white rounded-xl absolute left-2 bottom-2 px-2 backdrop-blur-xl bg-white/30'>
                                    <img className='w-3 md:w-4' src={images.starIcon} alt='Star Icon' />
                                    <span className='text-xs sm:text-sm md:text-lg font-semibold text-white'>{"item.rating"}</span>
                                </div>
                            </div>
                            <div className='flex justify-between items-center mt-2'>
                                <div className='text-md sm:text-lg md:text-xl font-semibold'>{item?.outletName}</div>
                                <div className='text-md sm:text-lg md:text-xl'>{"item.status"}</div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img className='h-4 sm:h-5 md:h-6' src={images.locationIcon} alt='Location Icon' />
                                <span className='text-sm sm:text-md md:text-lg text-textColor'>{item.location}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
                {
                    selectedCafe &&
                    <div>
                        <div className='flex items-center gap-2 md:gap-4 w-full my-4'>
                            <div className='text-md md:text-2xl font-semibold'>
                                {/* Outlet {selectedCafe + 1} : Orders */}
                                {`${selectedCafe?.outletName} Orders`}
                            </div>
                            <div className='rounded-2xl text-md px-2 md:px-4 py-1 text-white bg-gradient-to-r from-green to-darkerGreen'>
                                {/* {cafes[selectedCafe]?.orders?.length} order{cafes[selectedCafe].orders.length > 1 ? 's' : ''} */}
                                {`${selectedCafe?.orders?.length} orders`}
                            </div>
                        </div>
                        <div className='hidden lg:block'>
                            {selectedCafe !== null && (
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
                                            </div>
                                        )}
                                    </div>
                                    <div className='border border-borderColor my-2 mx-6'></div>
                                    <div className=' h-[40vh] overflow-scroll'>
                                        {selectedCafe?.orders
                                            .filter(item => orderStatus === "All" || item.status === orderStatus)
                                            .map((order, index) => (
                                                <div key={index} className='grid grid-cols-6 my-4 mr-4'>
                                                    <div className='flex items-center justify-center gap-2'>
                                                        <div className='text-lg text-orderColor'>{index + 1}</div>
                                                        <div className='text-lg font-semibold'>{order?.customerName}</div>
                                                    </div>
                                                    <div className='text-lg text-orderColor flex justify-center'>{order?._id                                                    }</div>
                                                    <div className='text-lg text-orderColor flex justify-center'>{order?.paymentMethod}</div>
                                                    <div className='text-lg text-orderColor flex justify-center'>{`$ ${order?.totalAmount}`}</div>
                                                    <div className='text-lg text-orderColor flex justify-center'>{order?.timestamp}</div>
                                                    <div className='flex justify-center'>
                                                        <div
                                                            // className={order?.status === "Pending" ? "" : order?.status === "" ? "" : order?.status === "" && ""}
                                                        >{order?.status}</div>
                                                        {/* <div className={`flex items-center justify-center rounded-md text-lg 
                                                    ${order.status === 'Completed' ? 'bg-lightGreen bg-opacity-10 text-lightGreen px-2' : 'bg-[#FFE6B6] bg-opacity-40 text-[#E5B300] px-5 '}`}>
                                                            {order.status === 'pending' ? 'Completed' : order.status}
                                                        </div> */}
                                                    </div>

                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                }
                <div className='lg:hidden'>
                    {selectedCafe !== null && (
                        <div className="border border-borderColor rounded-lg p-4 shadow-sm">
                            {cafes[selectedCafe]?.orders.map((order, index) => (
                                <div key={index} className="border-t border-borderColor">
                                    <div className='flex gap-2 my-2'>
                                        <div className='mt-0.5 sm:text-base md:text-lg text-orderColor'>{index + 1}</div>
                                        <div className=' w-full flex flex-col gap-1'>
                                            <div className='flex justify-between'>
                                                <div className='text-base sm:text-lg md:text-2xl font-semibold'>{order.customerName}</div>
                                                <div className='text-lg sm:text-xl md:text-2xl font-semibold'>{order.amount}</div>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <div className='text-xs sm:text-base md:text-lg text-orderColor'> {order.timestamp} - {order.paymentMethod}</div>
                                                <div className={`flex items-center rounded-md text-sm sm:text-base md:text-lg ${order.status === 'Completed' ? 'px-2 py-1 bg-lightGreen bg-opacity-10 text-lightGreen' : 'px-5 py-1 bg-[#FFE6B6] bg-opacity-30 text-[#E5B300]'}`}>
                                                    {order.status === 'pending' ? 'Completed' : order.status}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}