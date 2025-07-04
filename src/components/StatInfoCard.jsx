import React from 'react';

const StatInfoCard = ({ count, label }) => {
  return (
    <div className='flex-1 flex gap-3 md:gap-5 bg-gradient-to-b from-[#F3F1FD] to-[#ffffff] rounded-[14px] p-5'>
      <h4 className='text-4xl md:text-5xl font-medium text-primary'>{count}</h4>
      <p className='text-sm md:text-[16px] font-normal text-black leading-6 whitespace-pre-line'>{label}</p>
    </div>
  );
};
export default StatInfoCard;
