'use client';

// react
import { useState } from 'react';

// components
import TopBar from '@/components/Jobs/TopBar';
import JobsTab from '@/components/Jobs/JobsTab';
import JobPage from '@/components/Jobs/JobPage';

// constants
import { TopBarEnum } from '@/components/Jobs/TopBar/constants';

export default function Home() {
  const [activeHeaderTabName, setActiveHeaderTabName] = useState<string | null>(
    TopBarEnum.FOR_YOU,
  );

  return (
    <main className='min-h-screen max-w-screen'>
      <div className='max-w-6xl w-full h-fit mx-auto px-6'>
        <TopBar setActiveHeaderTabName={setActiveHeaderTabName} />

        <div
          style={{
            height: 'calc(100vh - 59px)',
          }}
          className='flex items-start justify-center w-full'
        >
          <div
            style={{
              maxHeight: 'calc(100vh - 59px)',
              overflow: 'auto',
            }}
            className='w-2/5'
          >
            <JobsTab activeHeaderTabName={activeHeaderTabName} />
          </div>
          <div
            style={{
              height: 'inherit',
            }}
            className='w-3/5'
          >
            <JobPage />
          </div>
        </div>
      </div>
    </main>
  );
}
