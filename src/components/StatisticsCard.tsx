import React from 'react';
import CircularProgressBar from './CircularProgress';

const StatisticsCard = () => {
  return (
    <div className='bg-white h-[300px] p-4'>
      <div className='flex flex-col md:flex-row justify-between gap-5 md:px-10 pt-4'>
        <CircularProgressBar sqSize={160} strokeWidth={12} percentage={25} count={6} title="Assessment Taken" />
        <CircularProgressBar sqSize={160} strokeWidth={12} percentage={35} count={27} title="Questions Solved"/>
      </div>
      <hr className='w-full md:w-3/4 my-4' />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <h3 className='text-center md:text-left md:pl-20'>Badges</h3>
        <hr className='hidden md:block md:h-full'/> 
        <h3 className='text-center md:text-right md:mr-20'>Focused Area</h3>
      </div>
    </div>
  );
};

export default StatisticsCard;
