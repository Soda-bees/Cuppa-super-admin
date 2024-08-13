    import React, { useState ,useRef} from 'react'
    import images from '../../assets'
    import Modal from 'react-modal';
    import { useNavigate } from 'react-router-dom';
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

    export default function OutletDetails() {
        const [dropDown, setDropDown] = useState(false)
        const [isModalOpen, setIsModalOpen] = useState(false)
        const [isEventModalOpen, setIsEventModalOpen] = useState(false)
        const [currentIndex, setCurrentIndex] = useState(null);
        const [currentIndexTwo, setCurrentIndexTwo] = useState(null);
        const [orderStatus, setOrderStatus] = useState("Order Status");
        const navigate = useNavigate()

        const openModal = (index) => {
            setCurrentIndex(index);
            setIsModalOpen(true);
        };

        const closeModal = () => {
            setIsModalOpen(false);
            setCurrentIndex(null);
        };

        const openEventModal = (index) => {
            setCurrentIndexTwo(index);
            setIsEventModalOpen(true);
        };

        const closeEventModal = () => {
            setIsEventModalOpen(false);
            setCurrentIndexTwo(null);
        };

        const [coffee, setCoffee] = useState([
            {
                image: images.coffeeIcon
            },
            {
                image: images.coffeeIcon
            },
            {
                image: images.coffeeIcon
            },
            {
                image: images.coffeeIcon
            },
            {
                image: images.coffeeIcon
            },
            {
                image: images.coffeeIcon
            },
            {
                image: images.coffeeIcon
            },
            {
                image: images.coffeeIcon
            },
            {
                image: images.coffeeIcon
            },
        ])
        const [menu, setMenu] = useState([
            {
                image: images.coffee,
                name: "Coffees",
                items: [
                    {
                        image: images.cappuccino,
                        name: "Cappuccino",
                        price: "3.45",

                    },
                    {
                        image: images.flatWhite,
                        name: "Flat White",
                        price: "3.45",

                    },
                    {
                        image: images.caramelLatte,
                        name: "Caramel Latte",
                        price: "3.45",

                    },
                    {
                        image: images.hazelnutLatte,
                        name: "Hazelnut Latte",
                        price: "3.45",

                    },
                ]
            },
            {
                image: images.cookies,
                name: "Cookies",
                items: [
                    {
                        image: images.cappuccino,
                        name: "Cappuccino",
                        price: "3.45",

                    },
                    {
                        image: images.flatWhite,
                        name: "Flat White",
                        price: "3.45",

                    },
                    {
                        image: images.caramelLatte,
                        name: "Caramel Latte",
                        price: "3.45",

                    },
                    {
                        image: images.hazelnutLatte,
                        name: "Hazelnut Latte",
                        price: "3.45",

                    },
                ]
            },
            {
                image: images.sandwiches,
                name: "Sandwiches",
                items: [
                    {
                        image: images.cappuccino,
                        name: "Cappuccino",
                        price: "3.45",

                    },
                    {
                        image: images.flatWhite,
                        name: "Flat White",
                        price: "3.45",

                    },
                    {
                        image: images.caramelLatte,
                        name: "Caramel Latte",
                        price: "3.45",

                    },
                    {
                        image: images.hazelnutLatte,
                        name: "Hazelnut Latte",
                        price: "3.45",

                    },
                ]
            },
            {
                image: images.frappes,
                name: "Frappes",
                items: [
                    {
                        image: images.cappuccino,
                        name: "Cappuccino",
                        price: "3.45",
                    },
                    {
                        image: images.flatWhite,
                        name: "Flat White",
                        price: "3.45",
                    },
                    {
                        image: images.caramelLatte,
                        name: "Caramel Latte",
                        price: "3.45",
                    },
                    {
                        image: images.hazelnutLatte,
                        name: "Hazelnut Latte",
                        price: "3.45",
                    },
                ]
            },
            {
                image: images.desserts,
                name: "Desserts",
                items: [
                    {
                        image: images.cappuccino,
                        name: "Cappuccino",
                        price: "3.45",
                    },
                    {
                        image: images.flatWhite,
                        name: "Flat White",
                        price: "3.45",
                    },
                    {
                        image: images.caramelLatte,
                        name: "Caramel Latte",
                        price: "3.45",
                    },
                    {
                        image: images.hazelnutLatte,
                        name: "Hazelnut Latte",
                        price: "3.45",
                    },
                ]
            },
            {
                image: images.starters,
                name: "Starters",
                items: [
                    {
                        image: images.cappuccino,
                        name: "abc",
                        price: "3.45",
                    },
                    {
                        image: images.flatWhite,
                        name: "Flat White",
                        price: "3.45",
                    },
                    {
                        image: images.caramelLatte,
                        name: "Caramel Latte",
                        price: "3.45",
                    },
                    {
                        image: images.hazelnutLatte,
                        name: "Hazelnut Latte",
                        price: "3.45",
                    },
                ]
            },
            {
                image: images.starters,
                name: "Starters",
                items: [
                    {
                        image: images.cappuccino,
                        name: "abc",
                        price: "3.45",
                    },
                    {
                        image: images.flatWhite,
                        name: "Flat White",
                        price: "3.45",
                    },
                    {
                        image: images.caramelLatte,
                        name: "Caramel Latte",
                        price: "3.45",
                    },
                    {
                        image: images.hazelnutLatte,
                        name: "Hazelnut Latte",
                        price: "3.45",
                    },
                ]
            },
            {
                image: images.starters,
                name: "Starters",
                items: [
                    {
                        image: images.cappuccino,
                        name: "abc",
                        price: "3.45",
                    },
                    {
                        image: images.flatWhite,
                        name: "Flat White",
                        price: "3.45",
                    },
                    {
                        image: images.caramelLatte,
                        name: "Caramel Latte",
                        price: "3.45",
                    },
                    {
                        image: images.hazelnutLatte,
                        name: "Hazelnut Latte",
                        price: "3.45",
                    },
                ]
            },
            {
                image: images.starters,
                name: "Starters",
                items: [
                    {
                        image: images.cappuccino,
                        name: "abc",
                        price: "3.45",
                    },
                    {
                        image: images.flatWhite,
                        name: "Flat White",
                        price: "3.45",
                    },
                    {
                        image: images.caramelLatte,
                        name: "Caramel Latte",
                        price: "3.45",
                    },
                    {
                        image: images.hazelnutLatte,
                        name: "Hazelnut Latte",
                        price: "3.45",
                    },
                ]
            },
            {
                image: images.starters,
                name: "Starters",
                items: [
                    {
                        image: images.cappuccino,
                        name: "abc",
                        price: "3.45",
                    },
                    {
                        image: images.flatWhite,
                        name: "Flat White",
                        price: "3.45",
                    },
                    {
                        image: images.caramelLatte,
                        name: "Caramel Latte",
                        price: "3.45",
                    },
                    {
                        image: images.hazelnutLatte,
                        name: "Hazelnut Latte",
                        price: "3.45",
                    },
                ]
            },

        ])
        const [event, setEvent] = useState([
            {
                image: images.eventImg1,
                name: "Barista Lessons",
                date: "27 Jan 2023",
            },
            {
                image: images.eventImg2,
                name: "Speed Dating Cafe",
                date: "27 Jan 2023",
            },
            {
                image: images.eventImg3,
                name: "Cupping",
                date: "27 Jan 2023",
            },
            {
                image: images.eventImg1,
                name: "Barista Lessons",
                date: "27 Jan 2023",
            },
            {
                image: images.eventImg1,
                name: "Barista Lessons",
                date: "27 Jan 2023",
            },
            {
                image: images.eventImg1,
                name: "Barista Lessons",
                date: "27 Jan 2023",
            },
            {
                image: images.eventImg1,
                name: "Barista Lessons",
                date: "27 Jan 2023",
            },

        ])
        
        
        const NextArrow = (props) => {
            const { className, style, onClick } = props;
            return (
                <div
                    className={className}
                    style={{
                        ...style,
                        right: 10,
                        zIndex: 1,
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                    }}
                    onClick={onClick}
                >
                    {/* Right Arrow Symbol */}
                </div>
            );
        };




        const [orders, setOrders] = useState([
            {
                customerName: "Justin Lipshutz",
                customerId: "Dsukjik414",
                paymentMethod: "Cash on Delivery",
                amount: "2,50",
                timestamp: "Today 05:00PM",
                status: "Completed",
            },
            {
                customerName: "Justin Lipshutz",
                customerId: "Dsukjik414",
                paymentMethod: "Cash on Delivery",
                amount: "2,50",
                timestamp: "Today 05:00PM",
                status: "Pending",
            },
            {
                customerName: "Justin Lipshutz",
                customerId: "Dsukjik414",
                paymentMethod: "Cash on Delivery",
                amount: "2,50",
                timestamp: "Today 05:00PM",
                status: "Completed",
            },
            {
                customerName: "Justin Lipshutz",
                customerId: "Dsukjik414",
                paymentMethod: "Cash on Delivery",
                amount: "2,50",
                timestamp: "Today 05:00PM",
                status: "Pending",
            },
            {
                customerName: "Justin Lipshutz",
                customerId: "Dsukjik414",
                paymentMethod: "Cash on Delivery",
                amount: "2,50",
                timestamp: "Today 05:00PM",
                status: "Completed",
            },
        ])

        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 8,
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
        let settingsTwo = {
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

        let sliderRef = useRef(null);
        const next = () => {
            sliderRef.slickNext();
        };
        const previous = () => {
            sliderRef.slickPrev();
        };
        
        return (
            <div className='md:pl-[18%] sm:pl-[19%] pl-[22%] py-6 px-2'>
                <div className='flex justify-between items-center mb-4 md:6 lg:mb-10'>
                    <div>
                        <img className='w-6 md:w-8 cursor-pointer' src={images.backBtn} onClick={() => navigate('/outlets')} />
                    </div>
                    <div className='text-xl md:text-2xl font-semibold'>Deatails</div>
                    <div className=' cursor-pointer active:opacity-50 bg-gradient-to-r from-green to-darkerGreen text-white text-xs sm:text-base px-2 md:px-6 py-2 rounded-md font-medium'>
                        Ban Outlet
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-2 gap-2 lg:gap-6 mb-4 md:mb-6 lg:mb-10'>
                    <div>
                        <img className='w-full sm:h-[250px] lg:w-[450px] lg:h-[300px] lg:w-[430px] lg:h-[310px]' src={images.cafeImg} />
                    </div>
                    <div>
                        <div className='text-xl md:text-3xl font-semibold mt-4'>
                            Havana Cafe
                        </div>
                        <div className='flex gap-4 my-2'>
                            <div className='flex items-center gap-2 text-base sm:text-lg md:text-xl text-textColor'>
                                <img className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain' src={images.locationIcon} />
                                NY, Newyork
                            </div>
                            <div className='flex items-center gap-2 text-base sm:text-lg md:text-xl text-textColor'>
                                <img className='w-4 sm:w-5 md:w-6' src={images.starIcon} />
                                4.8
                            </div>
                        </div>
                        <div className='flex items-center flex-wrap gap-2 md:gap-10 my-2 md:my-6'>
                            <div className='flex flex-wrap gap-2'>
                                {coffee.map((item, index) => (
                                    <img key={index} className='rounded-[100%] w-8' src={item.image} />
                                ))}
                            </div>
                            <div className='text-xl md:text-2xl font-semibold text-green'>
                                {coffee.length}/10
                            </div>
                        </div>
                        <div className='text-xl md:text-2xl font-semibold mt-10'>About</div>
                        <div className='w-full md:w-[70%] lg:w-[40%] text-sm mt-2'>
                            Havana Cafe IS ONE OF THE WORLD’S BIGGEST PREMIUM COFFEE CHAINS. BASED IN AUSTRALIA, IT OPERATES MORE THAN 1000 OUTLETS...
                            <span className='text-textColor'>Read more</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center mb-4  '>
                <div className='text-xl md:text-2xl font-semibold'>Menu</div>
                <div className='flex items-center gap-4 mr-4'>
                <img className='w-8 active:opacity-50'  src={images.backBtn} onClick={previous} />
                <img className='w-8 active:opacity-50' src={images.nextArrow} onClick={next}/>
            </div>
                </div>
                
            <Slider {...settings}    
                ref={slider => {
            sliderRef = slider;
            }} 
            >
                    {menu.map((item, index) => (
                        <div className='relative cursor-pointer' onClick={() => openModal(index)}>
                            <img className='rounded-xl  h-48 md:h-60 lg:w-52' src={item.image} />
                            <div className='bg-white absolute left-5 bottom-5 px-3 py-1 rounded-3xl font-medium text-lg'>{item.name}</div>
                        </div>
                    ))}
                </Slider>
                <div className='text-2xl font-semibold'>Events</div>
                <div className=' mt-2'>
                    <Slider {...settingsTwo}>
                    {event.map((item, index) => (
                        <div>
                        <div className='flex '>
                            <div className=' flex justify-start gap-2 w-full  '>
                                <img className='h-28 rounded-xl' src={item.image}/>
                                <div className=' '>
                                    <div className='mb-6'>
                                        <div className='text-xl font-semibold'>{item.name}</div>
                                        <div className='text-textColor'>{item.date}</div>
                                    </div>
                                    <div className='flex justify-start'>
                                        <div onClick={() => openEventModal(index)}
                                            className='cursor-pointer active:opacity-50 bg-gradient-to-r py-1 px-4 from-green to-darkerGreen text-white rounded-md flex justify-center'>
                                            Read More
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border border-borderColor mx-4 sm:mx-0 lg:mx-4 '></div>
                        </div>
                        </div>
                    ))}
                    </Slider>
                </div>
                <div className='flex items-center gap-2 md:gap-4 w-full mt-10 mb-4'>
                    <div className='text-md md:text-2xl font-semibold'>
                        Havana Cafe Orders
                    </div>
                    <div className='rounded-2xl text-md px-2 md:px-4 py-1 text-white bg-gradient-to-r from-green to-darkerGreen'>
                        {orders.length} order{orders.length > 1 ? 's' : ''}
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
                                    <div className='text-lg text-orderColor  '>{orderStatus} </div>
                                    <img onClick={() => setDropDown(!dropDown)} className="w-4 transition-transform duration-300"
                                    style={{ transform: dropDown ? 'rotate(180deg)' : 'rotate(0deg)' }} src={images.downArrow} />
                                </div>
                                {dropDown && (
                                <div className='border-2 border-borderColor rounded-xl absolute right-16 top-10  px-6 py-2  bg-white z-10'>
                                    <div className='flex justify-center items-center gap-2 my-2'>
                                        <div onClick= {()=>{setOrderStatus("All");setDropDown()}} className='text-lg'>All</div>
                                    </div>
                                    <div className='border border-borderColor'></div>
                                    <div className='flex justify-center items-center gap-2 my-2'>
                                        <div onClick={()=>{setOrderStatus("Pending");setDropDown()}} className='text-lg'>Pending</div>
                                    </div>
                                    <div className='border border-borderColor'></div>
                                    <div className='flex justify-center items-center gap-2 my-2'>
                                        <div onClick={()=>{setOrderStatus("Completed");setDropDown()}} className='text-lg'>Completed</div>
                                    </div>
                                    <div className='border border-borderColor'></div>
                                    <div className='flex justify-center items-center gap-2 my-2'>
                                        <div onClick={()=>{setOrderStatus("Cancelled");setDropDown()}} className='text-lg'>Cancelled</div>
                                    </div>
                                </div>
                            )}
                                </div>
                                <div className='border border-borderColor my-2 mx-6'></div>
                                <div>
                                    {orders.map((order, index) => (
                                    <div key={index} className='grid grid-cols-6 my-4 mr-4'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <div className='text-lg text-orderColor'>{index + 1}</div>
                                        <div className='text-lg font-semibold'>{order.customerName}</div>
                                    </div>
                                    <div className='text-lg text-orderColor flex justify-center'>{order.customerId}</div>
                                    <div className='text-lg text-orderColor flex justify-center'>{order.paymentMethod}</div>
                                    <div className='text-lg text-orderColor flex justify-center'>{order.amount}</div>
                                    <div className='text-lg text-orderColor flex justify-center'>{order.timestamp}</div>
                                    <div className='flex justify-center'> 
                                        <div className={`flex items-center justify-center rounded-md text-lg 
                                        ${order.status === 'Completed' ? 'bg-lightGreen bg-opacity-10 text-lightGreen px-2' : 'bg-[#FFE6B6] bg-opacity-40 text-[#E5B300] px-5 '}`}>
                                        {order.status === 'pending' ? 'Completed' : order.status}
                                    </div></div>
                                    
                                </div>
                                    ))}
                                </div>
                            </div>
                        
                    </div>
                {/* <div className='hidden lg:block'>
                    <div className='border-2 border-borderColor rounded-xl w-[98%]'>
                        <div className='flex justify-around my-2'>
                            <div className='text-lg text-orderColor'>Customer Name</div>
                            <div className='text-lg text-orderColor'>Order Id</div>
                            <div className='text-lg text-orderColor'>Payment Method</div>
                            <div className='text-lg text-orderColor'>Amount</div>
                            <div className='text-lg text-orderColor'>Delivery Time</div>
                            <div className='flex items-center gap-2'>
                                <div className='text-lg text-orderColor'>Order Status</div>
                                <img onClick={() => setDropDown(!dropDown)} className="transition-transform duration-300"
                                    style={{ transform: dropDown ? 'rotate(180deg)' : 'rotate(0deg)' }} src={images.downArrow} />
                            </div>
                        </div>
                        {dropDown &&
                            <>
                                <div className='border border-borderColor my-2 mx-6'></div>
                                <div>
                                    {orders.map((order, index) => (
                                        <div key={index} className='flex justify-around my-4 mr-4'>
                                            <div className='flex items-center gap-2'>
                                                <div className='text-lg text-orderColor'>{index + 1}</div>
                                                <div className='text-lg font-semibold'>{order.customerName}</div>
                                            </div>
                                            <div className='text-lg text-orderColor'>{order.customerId}</div>
                                            <div className='text-lg text-orderColor'>{order.paymentMethod}</div>
                                            <div className='text-lg text-orderColor'>${order.amount}</div>
                                            <div className='text-lg text-orderColor'>{order.timestamp}</div>
                                            <div className={`flex items-center rounded-md text-lg 
                                                ${order.status === 'Completed' ? 'bg-lightGreen bg-opacity-10 text-lightGreen px-[10px]' : 'bg-[#FFE6B6] bg-opacity-40 text-[#E5B300] px-5'}`}>
                                                {order.status === 'pending' ? 'Completed' : order.status}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        }
                    </div>
                </div> */}
                <div className='lg:hidden'>
                    <div className="border border-borderColor rounded-lg p-4 shadow-sm">
                        {orders.map((order, index) => (
                            <div key={index} className="border-t border-borderColor">
                                <div className='flex gap-2 my-2'>
                                    <div className='mt-0.5 sm:text-base md:text-lg text-orderColor'>{index + 1}</div>
                                    <div className=' w-full flex flex-col gap-1'>
                                        <div className='flex justify-between'>
                                            <div className='text-lg sm:text-xl md:text-2xl font-semibold'>{order.customerName}</div>
                                            <div className='text-lg sm:text-xl md:text-2xl font-semibold'>${order.amount}</div>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div className='text-xs sm:text-base md:text-lg text-orderColor'>{order.timestamp} - {order.paymentMethod}</div>
                                            <div className={`flex items-center rounded-md text-sm sm:text-base md:text-lg ${order.status === 'Completed' ? 'px-2 py-1 bg-lightGreen bg-opacity-10 text-lightGreen' : 'px-5 py-1 bg-[#FFE6B6] bg-opacity-30 text-[#E5B300]'}`}>
                                                {order.status === 'pending' ? 'Completed' : order.status}
                                            </div>
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
                                        {menu[currentIndex].name}
                                    </div>
                                </div>
                                <div className='text-textColor mb-4'>
                                    International Coffees
                                </div>
                                {menu[currentIndex].items.map((item, index) => (
                                    <div key={index}>
                                        <div className='flex items-center gap-4 mb-2'>
                                            <div>
                                                <img className='h-20 rounded-xl' src={item.image} />
                                            </div>
                                            <div >
                                                <div className='text-lg md:text-xl font-semibold my-1'>{item.name}</div>
                                                <div className='text-base md:text-lg font-medium text-green'>${item.price}</div>
                                            </div>
                                        </div>
                                        <div className='border border-borderColor my-2'></div>
                                    </div>
                                ))}
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
                                    <img className='w-[100%] h-[15vh] md:h-[25vh] rounded-xl object-cover ' src={event[currentIndexTwo].image} />
                                    <div className='text-white absolute bottom-6 right-4 rounded-xl px-3 text-sm  backdrop-opacity-10 backdrop-invert bg-black/30'>Exclusive To Cuppa Club Members</div>
                                </div>
                                <div className='flex flex-col sm:flex-row items-center justify-between mb-2'>
                                    <div className='flex w-full gap-2 justify-between sm:justify-start sm:flex-col md:w-[40%]'>
                                        <div className='text-xl md:text-2xl font-bold '>{event[currentIndexTwo].name}</div>
                                        <div className='flex items-center gap-1 md:gap-2 text-md text-textColor' >
                                            <img className='w-3' src={images.locationIcon} />
                                            Havana Cafe
                                        </div>
                                    </div>
                                    <div className='flex w-full gap-2 justify-between sm:justify-start sm:flex-col md:w-[50%] xl:w-[40%]'>
                                        <div className='flex items-center gap-1 md:gap-2 text-xs sm:text-base lg:text-lg font-medium'>
                                            <img className='w-4 md:w-6' src={images.calendar} />
                                            {event[currentIndexTwo].date}
                                        </div>
                                        <div className='flex items-center gap-1 md:gap-2 text-xs sm:text-base lg:text-lg font-medium'>
                                            <img className='w-4 md:w-6' src={images.clockIcon} />
                                            10:00 AM - 01:00 AM
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-2 mb-2 text-sm'>Get ready for an evening of laughter, connection, and perhaps a shot of romance.<br />Our Speed Dating Event is designed for coffee lovers like yourself to meet and greet over the perfect cup.</div>
                                <div className='mt-2 mb-2 font-medium'>How It Works:</div>
                                <div className='mt-1 mb-1 text-sm'>Grab your favorite coffee. </div>
                                <div className='mt-1 mb-1 text-sm'>Rotate through quick, fun, and light-hearted conversations.</div>
                                <div className='mt-1 mb-1 text-sm'> Discover if sparks fly over a shared love for coffee.</div>
                                <div className='mt-1 mb-1 text-sm pr-4'>Whether you find a new coffee buddy or something more, one thing's for sure – it'll be an evening to remember.</div>
                                <div className='mt-1 mb-1 font-medium'>To secure your spot. Limited spaces available!</div>
                                <div className='mt-1 mb-1 font-medium'>5 / 10 M - 7 / 10 F</div>
                            </>
                        )}
                    </div>
                </Modal>
            </div>
        )
    }
