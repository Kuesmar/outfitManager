import React from 'react';
import { CiImageOn } from "react-icons/ci";

const SkeletonList = () => {
  return (
    <div className='flex justify-around'>
        <div className='flex justify-center items-center w-20 h-20 border-dashed border-2 border-sky-500'>
            <CiImageOn/>
        </div>
        <div className='flex justify-center items-center w-20 h-20 border-dashed border-2 border-sky-500'>
            <CiImageOn/>
        </div>
        <div className='flex justify-center items-center w-20 h-20 border-dashed border-2 border-sky-500'>
            <CiImageOn/>
        </div>
    </div>
  )
};

export default SkeletonList;
