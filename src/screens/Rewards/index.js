import React, { useState } from 'react'
import images from '../../assets'
import Modal from 'react-modal';


export default function Rewards() {
    const [search, setSearch] = useState("")
    const [selectedImage, setSelectedImage] = useState(null);
    const [dropDown, setDropDown] = useState(false)
    const [dropDownIndex, setDropDownIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [rewardName, setRewardName] = useState("")
    const [RequireBeans, setRequireBeans] = useState("")
    const [selectedReward, setSelectedReward] = useState(null);


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
        { id: 1, src: images.rewardsCoffee},
        { id: 2, src: images.rewardsBag },
        { id: 3, src: images.rewardsCup },
    ]);

    const handleDropDownToggle = (index) => {
        setDropDownIndex(dropDownIndex === index ? null : index);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setCards([...cards, { id: cards.length + 1, src: URL.createObjectURL(file)}]);
            setSelectedImage(null);
        }
    };

    return (
        <div className=' md:pl-[18%] sm:pl-[19%] pl-[22%] py-4 '>
            <div className='w-[98%]'>
                <div className='relative mb-4 sm:mb-6 md:mb-10'>
                    <img className='absolute left-2 top-3 md:top-4 w-5 cursor-pointer' src={images.searchIcon} />
                    <input placeholder='search' className='w-[100%] border-2 border-borderColor rounded-xl cursor-pointer p-2 pl-8 text-md md:text-xl outline-none' onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className='text-xl sm:text-2xl font-semibold mb-1'>
                    Rewards
                </div>
                <div className='text-md sm:text-lg text-textColor mb-4 sm:mb-10'>
                    Join our rewards program today and start enjoying the following rewards
                </div>
                <div className='text-xl sm:text-2xl font-semibold mb-4'>
                    Choose Rewards
                </div>
                <div className='grid grid-cols-2 sm:flex flex-wrap justify-start gap-2 mb-10 sm:mb-20'>
                    {cards.map((cards) => (
                        <div key={cards.id} className='bg-white border border-borderColor rounded-xl w-full h-40 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center'>
                            <img className='w-32 sm:w-28 md:w-32' src={cards.src} alt={`cards ${cards.id}`} />
                        </div>
                    ))}
                    <label className='bg-white border-2 border-dashed border-borderColor rounded-xl w-full h-40 sm:w-36 sm:h-36 md:w-40 md:h-40  
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
                    </label>
                </div>
                <div className='text-xl sm:text-2xl font-semibold mb-4'>
                    Active Rewards
                </div>
                <div className='grid grid-cols-2 sm:flex flex-wrap justify-start gap-4'>
                    {rewards.map((reward, index) => (
                        <div key={index} className='bg-white border border-borderColor rounded-xl w-full sm:w-52 p-2 sm:p-4 relative' 
                        onClick={() => setDropDownIndex(null)}>
                            <div className='flex justify-end'>
                                <img className='h-5 sm:h-6 cursor-pointer' src={images.dotIcon} onClick={(e) => {
                                    e.stopPropagation();
                                    handleDropDownToggle(index);
                                }}
                                />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <img className='w-32 sm:w-28' src={reward.image} alt={reward.title} />
                                <div className='text-base sm:text-xl text-textColor text-center'>{reward.title}</div>
                                <div className='flex gap-1 text-center bg-coffeebeansbg px-2 py-1 rounded-2xl text-textColor bg-opacity-50 font-medium mt-2'>
                                    <img className='w-4 sm:w-5' src={images.coffeeBeans} alt='Coffee Beans'/>
                                    {reward.points}
                                </div>
                            </div>
                            {dropDownIndex === index && (
                                <div className='border-2 border-borderColor rounded-xl absolute right-1 top-7 sm:right-3 sm:top-11 p-2 bg-white'>
                                    <div className='flex justify-center items-center my-1 '>
                                        <div onClick={() => {
                                            setSelectedReward(reward);
                                            setIsModalOpen(true);
                                        }} className='text-sm cursor-pointer'>
                                            Edit
                                        </div>
                                    </div>
                                    <div className='border border-borderColor'></div>
                                    <div className='flex justify-center items-center my-1'>
                                        <div className='text-sm cursor-pointer'>Delete</div>
                                    </div>
                                    <div className='border border-borderColor'></div>
                                    <div className='flex justify-center items-center my-1'>
                                        <div className='text-sm cursor-pointer'>Deactivate</div>
                                    </div>
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
                    {selectedReward && (
                        <>
                            <div className='flex flex-col items-center gap-2'>
                                <div key={selectedReward.id} className='bg-white border border-borderColor rounded-xl w-full h-40 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center'>
                                    <img className='w-32 sm:w-28 md:w-32' src={selectedReward.image} alt={selectedReward.title} />
                                </div>
                                <div className='flex gap-2 text-base text-green'>
                                    <img className='w-5 object-contain' src={images.uploadImg} alt='Upload'/>
                                    Change Photo
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div className='ml-1 mb-1 text-textColor'>Reward Name</div>
                                <input className='w-full border border-borderColor rounded-xl p-2 outline-none font-semibold' type='text' defaultValue={selectedReward.title} onChange={(e) => setRewardName(e.target.value)} />
                            </div>
                            <div className='mt-2 relative'>
                                <div className='ml-1 mb-1 text-textColor'>Beans Required</div>
                                <input className='w-full border border-borderColor rounded-xl p-2 outline-none font-semibold' type='text' defaultValue={selectedReward.points} onChange={(e) => setRequireBeans(e.target.value)} />
                                <img className='w-6 absolute top-7 md:top-10 right-4' src={images.coffeeBeans} alt='Coffee Beans' />
                            </div>
                            <div className='mt-4 flex justify-between items-center'>
                                <div onClick={() => setIsModalOpen(false)} className='cursor-pointer active:opacity-50 border border-borderColor text-textColor rounded-xl flex justify-center items-center px-6 py-1'>Cancel</div>
                                <div className='cursor-pointer active:opacity-50 bg-gradient-to-r from-green to-darkerGreen text-white rounded-xl flex justify-center items-center px-6 py-1'>Active</div>
                            </div>
                        </>
                    )}
                </div>
            </Modal>
        </div>
    )
}
