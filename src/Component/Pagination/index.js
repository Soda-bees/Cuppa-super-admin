import React, { useState, useEffect } from "react";
import images from "../../assets";


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // State to track the number of displayed pages
  const [displayPages, setDisplayPages] = useState(10);

  // Effect to update the number of displayed pages based on screen size
  useEffect(() => {
    const updateDisplayPages = () => {
      if (window.innerWidth < 768) {
        // If screen size is smaller than medium (768px)
        setDisplayPages(3);
      } else {
        // If screen size is medium or larger
        setDisplayPages(10);
      }
    };

    // Initial call to set the number of displayed pages
    updateDisplayPages();

    // Event listener to handle screen resize
    window.addEventListener("resize", updateDisplayPages);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", updateDisplayPages);
  }, []);

  const renderPageNumbers = (currentPage, totalPages, onPageChange) => {
    const pageNumbers = [];

    if (totalPages <= displayPages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <li
            key={i}
            className={`  md:flex justify-evenly items-center  inline-block mx-1  cursor-pointer w-6 h-6 text-center rounded-full text-sm   ${
              currentPage === i ? ` bg-textPrice text-white bg-darkerGreen font-medium ` : "font-medium"
            }`}>
            {i}
          </li>
        );
      }
    } else {
      const startPage = Math.max(1, currentPage - Math.floor(displayPages / 2));
      const endPage = Math.min(totalPages, startPage + displayPages - 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <li
            key={i}
            className={`inline-block cursor-pointer w-6 h-6 text-center rounded text-sm  ${
              currentPage === i
                ? " rounded-full bg-textPrice text-white bg-darkerGreen text-center"
                : " "
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </li>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className={`hidden md:flex justify-center items-center m-8  `}>
      <ul className={`flex items-center justify-between`}>
        <li
          className={` flex items-center cursor-pointer h-[20px]`}
          onClick={() => {
            if (currentPage !== 1) {
              onPageChange(currentPage - 1);
            }
          }}
        >
          <img src={images.leftArrow} className={`flex items-center cursor-pointer h-[20px]`} alt="Previous" />
        </li>

        <div className="flex justify-evenly items-center">
          {renderPageNumbers(currentPage, totalPages, onPageChange)}
        </div>

        <li
       className='flex items-center cursor-pointer h-[20px]'
          onClick={() => {
            if (currentPage < totalPages) {
              onPageChange(currentPage + 1);
            }
          }}
        >
          <img src={images.arrowRight} className='flex items-center cursor-pointer h-[20px]' alt="Next" />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;