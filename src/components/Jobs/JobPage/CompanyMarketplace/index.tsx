'use client';

// react
import React, { FC } from 'react';

// constants
import { ICompanyMarketplace } from '@/components/Jobs/JobPage/constants';

// icons
import { RiStore2Line } from '@remixicon/react';

interface ICompanyMarketplaceProps {
  companyData: ICompanyMarketplace;
}

const CompanyMarketplace: FC<ICompanyMarketplaceProps> = ({ companyData }) => {
  const { title, industry, img } = companyData;
  return (
    <div>
      <div
        style={{
          backgroundColor: img,
        }}
        className='size-8 border border-solid border-black/60'
      />
      <p>{title}</p>
      <p className='flex items-center gap-1 text-sm text-black/70'>
        <RiStore2Line className='size-4 text-black/70 mb-[1px]' />
        {industry}
      </p>

      <div className='mt-6 border border-solid border-[#ccc] mb-4 w-1/3' />

      <p className='text-[10px] text-black/60 mt-3 hover:underline hover:text-primary cursor-pointer active:text-primary/70 transition'>
        Show companies like you who list here
      </p>
    </div>
  );
};

export default CompanyMarketplace;
