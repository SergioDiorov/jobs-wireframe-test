'use client';

// react
import React, { useEffect, useState } from 'react';

// icons
import {
  RiShareForwardLine,
  RiShieldCheckFill,
  RiMoreLine,
  RiStore2Line,
  RiStarLine,
  RiNewsLine,
  RiQuestionLine,
  RiAddLine,
  RiShareBoxFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowRightLine,
} from '@remixicon/react';

// components
import CompanyMarketplace from '@/components/Jobs/JobPage/CompanyMarketplace';

// constants
import {
  associatedCompanyData,
  companyMarketplaceData,
  ICompanyMarketplace,
} from '@/components/Jobs/JobPage/constants';

const ITEMS_PER_PAGE = 2;

const JobPage = () => {
  const [companyData, setCompanyData] = useState<ICompanyMarketplace[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const start = currentPage * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    setCompanyData(companyMarketplaceData.slice(start, end));
  }, [currentPage]);

  const handleNext = () => {
    if ((currentPage + 1) * ITEMS_PER_PAGE < companyMarketplaceData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='flex flex-col gap-8 h-full bg-white w-full px-6 py-8 overflow-auto'>
      <div className='flex justify-between gap-3 w-full'>
        <div className='flex flex-col gap-3'>
          <p className='mb-1 text-xs text-primary'>
            Rank·<span className='font-semibold'>89</span>
          </p>

          <div className='flex items-center gap-3'>
            <div className='size-8 bg-yellow-400 border border-solid border-black/60' />
            <h3 className='flex items-center text-2xl font-medium'>
              Apolo Integrations
              <RiShieldCheckFill className='size-5 text-black/50 ml-3 mt-[2px]' />
            </h3>
          </div>

          <div className='flex items-center justify-start text-black/60 text-sm'>
            <p>160.000 active buyers</p>
            <span className='mx-[2px]'>·</span>
            <p className='text-xs'>Prev, 135k</p>
            <span className='mx-[2px]'>·</span>
            <p className='text-xs text-green-500'>+5,23%</p>
            <RiQuestionLine className='size-4 ml-1' />
          </div>

          <p className='flex items-center gap-1 text-sm text-black/70'>
            <RiStore2Line className='size-4 text-black/70 mb-[1px]' />
            App & Integration
          </p>
          <p className='flex items-center gap-1 text-sm text-black/70'>
            <RiStarLine className='size-4 text-black/70 mb-[1px]' />
            138 listings · 2 new
          </p>
          <p className='flex items-center gap-1 text-sm text-black/70'>
            <RiNewsLine className='size-4 text-black/70 mb-[1px]' />
            Features: categories, sponsored listings, +5 more
          </p>

          <div className='flex gap-2'>
            <button className='items-center justify-center px-3 py-1 rounded-full text-xs text-black bg-brightGreen border border-solid border-yellow-200/50 flex gap-2 hover:bg-brightGreen/80 active:bg-brightGreen/60 transition'>
              <RiAddLine className='size-4' />
              Track
            </button>
            <button className='items-center justify-center px-3 py-1 rounded-full text-xs text-primary border border-solid border-primary flex gap-2 hover:bg-primary/10 active:bg-primary/20 transition'>
              List Now
              <RiShareBoxFill className='size-4' />
            </button>
          </div>
        </div>

        <div className='flex items-center h-fit gap-5'>
          <div className='w-fit h-fit p-1 hover:bg-primary/20 active:bg-primary/10 transition rounded-full'>
            <RiShareForwardLine className='size-6' />
          </div>
          <div className='w-fit h-fit p-1 hover:bg-primary/20 active:bg-primary/10 transition rounded-full'>
            <RiMoreLine className='size-6' />
          </div>
        </div>
      </div>

      <div className='p-6 rounded-2xl border border-solid border-[#ccc] overflow-hidden min-h-fit'>
        <h6>Where companies on this marketplace also list</h6>
        <p className='text-sm text-black/70'>
          Based on the most popular companies
        </p>
        <div className='text-sm flex gap-3 items-center justify-end py-4'>
          <button
            className={`flex items-center hover:text-black/70 active:text-black/60 transition ${
              currentPage === 0 ? '!text-black/30' : ''
            }`}
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            <RiArrowLeftSLine /> Previous
          </button>
          <button
            className={`flex items-center hover:text-black/70 active:text-black/60 transition ${
              (currentPage + 1) * ITEMS_PER_PAGE >=
              companyMarketplaceData.length
                ? '!text-black/30'
                : ''
            }`}
            onClick={handleNext}
            disabled={
              (currentPage + 1) * ITEMS_PER_PAGE >=
              companyMarketplaceData.length
            }
          >
            Next <RiArrowRightSLine />
          </button>
        </div>

        <div className='border border-solid border-[#ccc] mb-4' />

        <div className='grid grid-cols-2 gap-4'>
          {companyData.map((company, index) => (
            <CompanyMarketplace
              key={company.title + index}
              companyData={company}
            />
          ))}
        </div>
      </div>

      <div className='pt-6 rounded-2xl border border-solid border-[#ccc] overflow-hidden min-h-fit'>
        <div className='px-6'>
          <h6 className='text-xl font-semibold mb-4'>Associated company</h6>

          <div className='flex items-center gap-3 mb-4'>
            <div className='size-9 bg-yellow-400 rounded-full min-w-8 min-h-8' />
            <div>
              <p className='text-sm text-black/90 font-semibold'>Apolo.io</p>
              <p className='text-sm text-black/70 flex items-center'>
                57 marketplaces
                <RiQuestionLine className='size-4 ml-1' />
              </p>
            </div>
          </div>

          {associatedCompanyData.map((item) => (
            <div className='mb-4' key={item.title}>
              <p className='text-sm text-black/90 font-semibold'>
                {item.title}
              </p>
              <p className='text-sm text-black/70'>{item.value}</p>
            </div>
          ))}
        </div>
        <button className='flex text-sm font-semibold items-center justify-center gap-1 w-full py-3 border-t border-solid border-[#ccc] text-primary hover:bg-primary/10 active:bg-primary/20 transition'>
          Show all details <RiArrowRightLine className='size-4' />
        </button>
      </div>
    </div>
  );
};

export default JobPage;
