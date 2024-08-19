import React, { useContext, useEffect, useState } from 'react'
import images from '../../assets'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { addNewReward, deleteReward, selectAdminData } from '../../store/adminDataSlice';
import { handleError } from '../../Component/ShowError';
import { addReward, handleDeleteReward, updateReward, uploadRewardImage } from '../../services/config/Api';
import { selectAuthToken } from '../../store/authTokenSlice';
import { ModalContext } from '../Layout';

export default function Rewards() {

    const { setIsLoading } = useContext(ModalContext);

    const dispatch = useDispatch()

    const adminData = useSelector(selectAdminData)
    const authToken = useSelector(selectAuthToken)

    const [search, setSearch] = useState("")
    const [selectedImage, setSelectedImage] = useState(null);
    const [dropDown, setDropDown] = useState(false)
    const [dropDownIndex, setDropDownIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [rewardName, setRewardName] = useState("")
    const [RequireBeans, setRequireBeans] = useState("")
    const [selectedReward, setSelectedReward] = useState(null);
    const [isEdit, setIsEdit] = useState(false)
    const [editId , setEditId] = useState(null)

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup on component unmount or if isLoading changes
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    const [rewards, setRewards] = useState([
        {
            image: images.rewardsCoffee,
            title: 'One Free Coffee',
            points: 100
        },
        {
            image: images.rewardsBag,
            title: 'Pack of Cookies',
            points: 350
        },
        {
            image: images.rewardsCup,
            title: 'Portal Coffee Mug',
            points: 600
        },
    ]);


    const [cards, setCards] = useState([
        { id: 1, src: images.rewardsCoffee },
        { id: 2, src: images.rewardsBag },
        { id: 3, src: images.rewardsCup },
    ]);

    const handleDropDownToggle = (_id) => {
        setDropDownIndex(dropDownIndex === _id ? null : _id);
    };

    const handleImageChange = async (e) => {
        try {
            setIsLoading(true)
            const selectedFile = e.target.files[0];
            if (selectedFile && selectedFile.type === 'image/png') {

                const formData = new FormData();
                formData.append('profile', selectedFile);
                const response = await uploadRewardImage(formData, authToken)
                if (response.success) {
                    setIsLoading(false)
                    setSelectedImage(response?.url)
                } else {
                    setIsLoading(false)
                    handleError(response?.message)
                }
            } else {
                handleError('Please select a valid PNG image.')
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
            console.log(error);
            handleError(error.message)
        }
    };

    const hanleAddReward = async () => {
        if (!selectedImage) {
            return handleError("Please add image")
        }
        if (!rewardName) {
            return handleError("Please add reward name")
        }
        if (!RequireBeans) {
            return handleError("Please add required beans")
        }
        try {
            setIsLoading(true)
            const body = {
                cover: selectedImage,
                title: rewardName,
                numberOfBeans: RequireBeans
            }
            const response = await addReward(authToken, body)
            if (response?.success) {
                alert("Reward addedd sucessfully")
                setIsLoading(false)
                dispatch(addNewReward(response?.newSuperAdminReward))
                setIsModalOpen(false)
                setRewardName('')
                setRequireBeans('')
                setSelectedImage(null)
            } else {
                setIsLoading(false)
                handleError(response?.message)
            }
        } catch (error) {
            setIsLoading(false)
            handleError(error?.message)
        }
    }

    const handleDelete = async (rewardId) => {
        try {
            setIsLoading(true)
            const response = await handleDeleteReward(rewardId, authToken)
            if (response?.success) {
                dispatch(deleteReward(rewardId))
                setIsLoading(false)
                alert("Reward delete successfully")
            } else {
                setIsLoading(false)
                handleError(response?.message)
            }
        } catch (error) {
            setIsLoading(false)
            handleError(error?.message)
        }
    }

    const handleEditTrue = async (reward) => {
        setEditId(reward?._id)
        setIsEdit(true)
        setRewardName(reward?.title)
        setSelectedImage(reward?.cover)
        setRequireBeans(reward?.numberOfBeans)
        setIsModalOpen(true)
    }

    const handleCanclleModal = () => {
        setIsEdit(false)
        setIsModalOpen(false)
        setRewardName('')
        setRequireBeans('')
        setSelectedImage(null)
    }

    const handleUpdateReward = async () => {        
        try {
            const body = {
                rewardId: editId,
                cover: selectedImage,
                title: rewardName,
                numberOfBeans: RequireBeans
            }
            console.log(body);
            
            const response = await updateReward(authToken, body)
            console.log("update response ==>", response);

        } catch (error) {
            setIsLoading(false)
            handleError(error?.message)
        }
    }

    return (
        <div className=' md:pl-[18%] sm:pl-[19%] pl-[22%] py-4  '>
            <div className='w-[98%]'>
                <div className='relative mb-4 sm:mb-6 md:mb-10'>
                    <img className='absolute left-2 top-3 md:top-4 w-5 cursor-pointer' src={images.searchIcon} />
                    <input placeholder='search' className='w-[100%] border-2 border-borderColor rounded-xl bg-transparent cursor-pointer p-2 pl-8 text-md md:text-xl outline-none' onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className='text-xl sm:text-2xl font-semibold mb-1'>
                    Rewards
                </div>
                <div className='text-md sm:text-lg text-textColor mb-4 sm:mb-10'>
                    Join our rewards program today and start enjoying the following rewards
                </div>
                {/* <div className='text-xl sm:text-2xl font-semibold mb-4'>
                    Choose Rewards
                </div> */}
                <div className='grid grid-cols-2 sm:flex flex-wrap justify-start gap-2 mb-10 sm:mb-20'>
                    {/* {cards.map((cards, index) => (
                        <div key={index}
                            onClick={() => {
                                setSelectedReward(cards);
                                setIsModalOpen(true);
                            }}
                            className='bg-white border border-borderColor rounded-xl w-full h-40 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center'>
                            <img className='w-32 sm:w-28 md:w-32' src={cards.src} alt={`cards ${cards.id}`} />
                        </div>
                    ))} */}
                    {/* <label className='bg-white border-2 border-dashed border-borderColor rounded-xl w-full h-40 sm:w-36 sm:h-36 md:w-40 md:h-40  
                    flex flex-col items-center justify-center cursor-pointer'>
                        {selectedImage ? (
                            <img src={selectedImage} alt="Uploaded" className='w-32 h-32' />
                        ) : (
                            <div className='text-textColor text-base sm:text-xl w-20 text-center'>+ Add Rewards</div>
                        )}
                        <input
                            id="img"
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label> */}
                    <div
                        onClick={() => { setIsModalOpen(true) }}
                        className='bg-white border-2 border-dashed border-borderColor rounded-xl w-full h-40 sm:w-36 sm:h-36 md:w-40 md:h-40  
                    flex flex-col items-center justify-center cursor-pointer'>
                        {/* {selectedImage ? (
                            <img src={selectedImage} alt="Uploaded" className='w-32 h-32' />
                        ) : ( */}
                        <div className='text-textColor text-base sm:text-xl w-20 text-center'>+ Add Rewards</div>
                        {/* )} */}
                        {/* <input
                            id="img"
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handleImageChange}
                            className="hidden"
                        /> */}
                    </div>
                </div>
                <div className='text-xl sm:text-2xl font-semibold mb-4'>
                    Active Rewards
                </div>
                <div className='grid grid-cols-2 sm:flex flex-wrap justify-start gap-4'>
                    {adminData && adminData?.superAdminRewards?.map((reward, index) => (
                        <div key={index} className='bg-white border border-borderColor rounded-xl w-full sm:w-52 p-2 sm:p-4 relative'
                            onClick={() => setDropDownIndex(null)}
                            >
                            <div className='flex justify-end'>
                                <img className='h-5 sm:h-6 cursor-pointer px-1' src={images.dotIcon} onClick={(e) => {
                                    e.stopPropagation();
                                    handleDropDownToggle(reward?._id);
                                }}
                                />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <img className='w-32 h-32 sm:w-28 sm:h-28' src={reward.cover} alt={reward.title} />
                                <div className='text-base sm:text-xl text-textColor text-center'>{reward.title}</div>
                                <div className='flex gap-1 text-center bg-coffeebeansbg px-2 py-1 rounded-2xl text-textColor bg-opacity-50 font-medium mt-2'>
                                    <img className='w-4 sm:w-5' src={images.coffeeBeans} alt='Coffee Beans' />
                                    {reward?.numberOfBeans}
                                </div>
                            </div>
                            {dropDownIndex === reward?._id && (
                                <div className='border-2 border-borderColor rounded-md absolute right-1 top-7 sm:right-3 sm:top-11 bg-white'>
                                    <div className='flex justify-center items-center hover:bg-borderColor p-2' onClick={() => handleEditTrue(reward)}>
                                        <div className='text-sm cursor-pointer'>
                                            Edit
                                        </div>
                                    </div>
                                    <div className='border border-borderColor'></div>
                                    <div className='flex justify-center items-center hover:bg-borderColor p-2' onClick={() => handleDelete(reward?._id)}>
                                        <div className='text-sm cursor-pointer'>Delete</div>
                                    </div>
                                    {/* <div className='border border-borderColor'></div>
                                    <div className='flex justify-center items-center my-1 '>
                                        <div className='text-sm cursor-pointer'>Deactivate</div>
                                    </div> */}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                className="outline-none h-[100vh] flex items-center justify-center bg-black bg-opacity-10"
            >
                <div className='bg-white w-[90%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%] rounded-xl p-4'>
                    {/* {selectedReward && ( */}
                    <>

                        <label className='bg-white border-2 border-dashed mx-auto border-borderColor rounded-xl w-full h-40 sm:w-36 sm:h-36 md:w-40 md:h-40  
                    flex flex-col items-center justify-center cursor-pointer'>
                            {/* {selectedImage ? (
                                <img src={selectedImage} alt="Uploaded" className='w-32 h-32' />
                            ) : (
                                <div className='text-textColor text-base sm:text-xl w-20 text-center'>+ Add Rewards</div>
                            )} */}
                            <img className='w-32 sm:w-28 md:w-32' src={
                                selectedImage ? selectedImage : images.upload
                            }
                            />
                            <input
                                id="img"
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </label>

                        {/* <div className='flex flex-col items-center gap-2'>
                            <div
                                className='bg-white border border-borderColor rounded-xl w-full h-40 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center'>
                                <img className='w-32 sm:w-28 md:w-32' src={
                                    selectedImage ? { uri: selectedImage } : images.upload
                                } 
                                 />
                            </div>
                            <div className='flex gap-2 text-base text-green'>
                                Change Photo
                            </div>
                        </div> */}
                        <div className='mt-4'>
                            <div className='ml-1 mb-1 text-textColor'>Reward Name</div>
                            <input className='w-full border border-borderColor rounded-xl p-2 outline-none font-semibold' type='text' value={rewardName} onChange={(e) => setRewardName(e.target.value)} />
                        </div>
                        <div className='mt-2 relative'>
                            <div className='ml-1 mb-1 text-textColor'>Beans Required</div>
                            <input className='w-full border border-borderColor rounded-xl p-2 outline-none font-semibold' type='number' value={RequireBeans} onChange={(e) => setRequireBeans(e.target.value)} />
                            <img className='w-6 absolute top-7 md:top-10 right-4' src={images.coffeeBeans} alt='Coffee Beans' />
                        </div>
                        <div className='mt-4 flex justify-between items-center'>
                            <div onClick={handleCanclleModal} className='cursor-pointer active:opacity-50 border border-borderColor text-textColor rounded-xl flex justify-center items-center px-6 py-1'>Cancel</div>
                            <div onClick={() => isEdit ? handleUpdateReward() : hanleAddReward()} className='cursor-pointer active:opacity-50 bg-gradient-to-r from-green to-darkerGreen text-white rounded-xl flex justify-center items-center px-6 py-1'>Active</div>
                        </div>
                    </>
                    {/* )} */}
                </div>
            </Modal>
        </div>
    )
}
