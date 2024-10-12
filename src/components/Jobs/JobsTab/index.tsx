'use client';

// react
import React, { FC, useEffect, useState } from 'react';

// constants
import { jobsData } from '@/components/Jobs/JobsTab/constants';

// components
import JobItem from '@/components/Jobs/JobsTab/JobItem';

// icons
import { RiStore2Line, RiStarFill } from '@remixicon/react';

interface IJobsTabProps {
  activeHeaderTabName: string | null;
}

const JobsTab: FC<IJobsTabProps> = ({ activeHeaderTabName }) => {
  const [isJobActive, setIsJobActive] = useState<number | null>(null);

  useEffect(() => {
    jobsData.length && setIsJobActive(jobsData[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobsData]);

  return (
    <div className='border-r border-l border-solid border-[#ccc]'>
      <div className='bg-primary w-full p-3 text-white'>
        {activeHeaderTabName && (
          <p className='text-xl font-semibold'>{activeHeaderTabName}</p>
        )}
        <p className='text-sm'>The STARSTUCK Hot100</p>
        <p className='text-xs'>100 results</p>
      </div>

      <div
        className={`!pt-4 p-2 flex gap-2 bg-white border-b border-solid border-[#ccc] transition`}
      >
        <div className='size-14 min-h14 min-w-14 bg-grey-400 flex items-center justify-center border border-solid border-black/60'>
          <RiStore2Line className='size-10 text-black/60 mb-[1px]' />
        </div>
        <div>
          <p className='flex items-center gap-1 text-base text-primary font-semibold'>
            Show the marketplace where you&apos;d be a top seller
          </p>
          <button className='px-3 py-1 rounded-full text-xs text-primary border border-solid border-primary flex gap-2 hover:bg-primary/10 active:bg-primary/20 transition'>
            Sign in to show top picks for you
            <RiStarFill className='size-3 mt-[2px]' />
          </button>
        </div>
      </div>

      <div>
        {jobsData.map((job, index) => (
          <>
            <JobItem
              key={job.name + index.toString()}
              jobData={job}
              isJobActive={isJobActive === job.id}
              setIsJobActive={setIsJobActive}
            />
            <div className='border-b border-solid border-[#ccc]' />
          </>
        ))}
      </div>
    </div>
  );
};

export default JobsTab;
