import React, { useRef } from 'react';

const CoffeeCarousel = ({ coffee }) => {
  const scrollRef = useRef(null);

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

  return (
    <div className="relative">
      <button
        onClick={scrollLeft}
        className="absolute bg-red-500 left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full"
      >
        ←
      </button>

      <div
        ref={scrollRef}
        className="bg-red-500 flex overflow-x-auto space-x-4 scrollbar-hide"
      >
        {coffee?.map((item, index) => (
          <div
            className="relative cursor-pointer flex-shrink-0 w-60" // Adjust width as needed
            // onClick={() => openModal(item._id)}
            key={index}
          >
            <img
              className="rounded-xl h-48 md:h-60 lg:w-[600px]"
              src={item?.image}
              alt={item?.name}
            />
            <div className="bg-white absolute left-5 bottom-5 px-3 py-1 rounded-3xl font-medium text-lg">
              {item?.name}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full"
      >
        →
      </button>
    </div>
  );
};

export default CoffeeCarousel;
