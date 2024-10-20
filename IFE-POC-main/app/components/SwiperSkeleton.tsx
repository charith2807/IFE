import React from "react";

const CardSkeleton = () => {
  return (
    <div className='w-80 ml-4 mr-8 border p-4 shadow-lg rounded-xl bg-white dark:bg-slate-800 dark:text-white animate-pulse'>
      <div className='h-8 bg-gray-200 rounded w-3/4 mt-2'></div>
      <div className='h-6 bg-gray-200 rounded mt-2 mb-2'></div>
      <div className='h-72 bg-gray-200 rounded'></div>
      <div className='h-12 bg-white dark:bg-slate-800'></div>
    </div>
  );
};

const SwiperSkeleton = ({ count = 5 }) => {
  return (
    <div className='swiper-container'>
      <div className='h-12 w-1/4 mb-6 mt-6 bg-gray-200 rounded animate-pulse'></div>
      <div className='flex flex-row justify-between mb-8'>
        {[...Array(count)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default SwiperSkeleton;
