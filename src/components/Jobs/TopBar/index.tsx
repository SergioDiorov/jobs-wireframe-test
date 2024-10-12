'use client';

// react
import React, { FC, useEffect, useRef, useState } from 'react';

// constants
import { TopBarEnum, topBarItems } from '@/components/Jobs/TopBar/constants';

// icons
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';

interface ITopBarProps {
  setActiveHeaderTabName: (param: string) => void;
}

const TopBar: FC<ITopBarProps> = ({ setActiveHeaderTabName }) => {
  const [activeTab, setActiveTab] = useState<TopBarEnum>(TopBarEnum.FOR_YOU);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth + 5 < scrollWidth);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [scrollContainerRef]);

  useEffect(() => {
    setActiveHeaderTabName(TopBarEnum.FOR_YOU);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='bg-white flex items-center justify-start overflow-hidden shadow-xl z-40 border-black/70 border-b border-solid relative'>
      <div
        className='flex items-center justify-start overflow-hidden no-scrollbar'
        ref={scrollContainerRef}
        style={{ flex: '1', overflowX: 'auto' }}
      >
        {topBarItems.map((item) => (
          <div
            key={item.key}
            onClick={() => {
              setActiveTab(item.key);
              setActiveHeaderTabName(item.title);
            }}
            className={`px-2 py-3 text-center text-sm hover:bg-primary/10 hover:text-black/90 cursor-pointer transition flex items-center justify-center gap-2 overflow-auto text-nowrap w-fit min-w-fit border-transparent border-b-2 border-solid text-black/60 ${
              activeTab === item.key &&
              ' !border-black !font-semibold !text-black/90'
            }`}
          >
            {item.icon}
            {item.title}
          </div>
        ))}
      </div>

      {canScrollLeft && (
        <>
          <button
            onClick={scrollLeft}
            className='p-0 absolute top-0 bottom-0 my-auto left-2 size-8 bg-white rounded-full shadow-xl flex justify-center items-center border border-solid border-black/10 z-20'
          >
            <RiArrowLeftSLine className='text-xl z-20' />
          </button>
          <div className='absolute left-0 top-0 h-full bg-gradient-to-r from-white to-transparent w-20 z-10 pointer-events-none' />
        </>
      )}

      {canScrollRight && (
        <>
          <button
            onClick={scrollRight}
            className='p-0 absolute top-0 bottom-0 my-auto right-2 size-8 bg-white rounded-full shadow-xl flex justify-center items-center border border-solid border-black/10 z-20'
          >
            <RiArrowRightSLine className='text-xl z-20' />
          </button>
          <div className='absolute right-0 top-0 h-full bg-gradient-to-l from-white to-transparent w-20 z-10 pointer-events-none' />
        </>
      )}
    </div>
  );
};

export default TopBar;
