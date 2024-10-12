/* eslint-disable @next/next/no-img-element */

'use client';

// react
import React, { FC } from 'react';

// constants
import { IJobData } from '../constants';

// icons
import { RiShieldCheckFill, RiStore2Line } from '@remixicon/react';

interface IJobItemProps {
  jobData: IJobData;
  isJobActive: boolean;
  setIsJobActive: (param: number) => void;
}

const JobItem: FC<IJobItemProps> = ({
  jobData,
  isJobActive,
  setIsJobActive,
}) => {
  const { id, name, industry, activeBuyers } = jobData;

  return (
    <div
      className={`!pt-4 p-2 flex gap-2 bg-white border-l-2 border-solid border-transparent cursor-pointer hover:bg-[#f5f5f5] transition ${
        isJobActive && ' !border-darkGreen !bg-[#f6f4ff]'
      }`}
      onClick={() => setIsJobActive(id)}
    >
      <div className='size-14 bg-yellow-400 border border-solid border-black/60' />
      <div>
        <p className='flex items-center gap-1 text-base text-primary font-semibold'>
          {name} <RiShieldCheckFill className='size-3 text-black/50 mt-[2px]' />
        </p>
        <p className='flex items-center gap-1 text-xs text-black/80'>
          <RiStore2Line className='size-3 text-black/80 mb-[1px]' />
          {industry}
        </p>
        <p className='text-xs text-black/60'>{activeBuyers} active buyers</p>
        <p className='text-[10px] text-black/60 mt-3 hover:underline hover:text-primary active:text-primary/70 transition'>
          Show companies like you who list here
        </p>
      </div>
    </div>
  );
};

export default JobItem;
