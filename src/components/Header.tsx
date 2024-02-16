import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='side-wrapper h-[56px] flex items-center justify-center relative bg-white rounded-t-[16px]'>
      <div className='absolute left-5 right-9 top-0 bottom-0 flex items-center'>
        <div>
          <Image
            src='/home/logo.svg'
            alt='Citizen remote logo'
            height={28}
            width={157}
          />
        </div>
      </div>

      <div className='space-x-1 relative flex items-center'>
        <button className='w-5 h-5 flex items-center justify-center'>
          <div className='w-2 h-2 rounded-full bg-neutral-4 '></div>
        </button>

        <button className='w-5 h-5 flex items-center justify-center'>
          <div className='w-2 h-2 rounded-full bg-neutral-4 '></div>
        </button>

        <button className='w-5 h-5 flex items-center justify-center'>
          <div className='w-[18px] h-[10px] rounded-[14px] bg-neutral-12'></div>
        </button>

        <button className='w-5 h-5 flex items-center justify-center'>
          <div className='w-2 h-2 rounded-full bg-neutral-4 '></div>
        </button>
      </div>
    </div>
  );
};

export default Header;
