import React from 'react';
import Grid1 from './Grid1';
import GermanyIcon from './icons/GermanyIcon';
import UkraineIcon from './icons/UkraineIcon';
import NumberItem from './NumberItem';

const HomePage = () => {
  return (
    <div className='h-[744px] bg-white flex space-x-[120px] w-full'>
      <Grid1 />
      <div className='grow w-full h-full py-[72px] flex items-center justify-center'>
        <div
          className='w-[444px] h-full bg-card-gradient rounded-[20px] p-5'
          style={{
            boxShadow:
              '0px 0px 0px 4px var(--Neutral-Alpha-5, rgba(0, 0, 48, 0.11)), 0px 1px 2px 0px rgba(0, 0, 0, 0.16)',
          }}
        >
          <div className='flex items-center justify-between pb-5'>
            <div className='flex items-center'>
              <div className='bg-neutral-12 rounded-full w-12 h-12 text-center medium-5 text-white flex items-center justify-center'>
                FT
              </div>

              <div className='text-white-text ml-3'>
                <span className='medium-4 block'> Fellow Traveller</span>
                <span className='block regular-3'>traveleremail@gmail.com</span>
              </div>
            </div>

            <div className='flex items-center'>
              <div>
                <GermanyIcon />
              </div>

              <div className='ml-2'>
                <UkraineIcon />
              </div>
            </div>
          </div>

          <div className='bg-panel-1 rounded-t-[16px] p-5 h-[236px]'>
            <div className='medium-2 text-neutral-11 border-b border-b-neutral-7 border-dashed pb-1 inline-block'>
              Finance Information
            </div>

            <div className='mt-4'>
              <span className='block text-neutral-11 medium-2'>
                Full Remote Job
              </span>
              <span className='block mt-1 text-neutral-12 medium-3'>
                Yes, for over 6 months.
              </span>
            </div>
            <div className='mt-4'>
              <span className='block text-neutral-11 medium-2'>
                Self employed
              </span>
              <span className='block mt-1 text-neutral-12 medium-3'>
                I&apos;m self employed &lt; 3 years business
              </span>
            </div>

            <div className='mt-5 grid grid-cols-2 gap-x-[7px]'>
              <div className='p-3 flex justify-between items-center rounded-[12px] bg-panel-3'>
                <span className='block text-neutral-11 medium-2'>Income</span>
                <span className='text-neutral-12 medium-3'>$1,000</span>
              </div>
              <div className='p-3 flex justify-between items-center rounded-[12px] bg-panel-3'>
                <span className='block text-neutral-11 medium-2'>Savings</span>
                <span className='text-neutral-12 medium-3'>$10,000</span>
              </div>
            </div>
          </div>

          <div className='bg-panel-1 p-5 border-y border-btn-border h-[96px] flex items-center'>
            <div>
              <div className='medium-2 text-neutral-11 border-b border-b-neutral-7 border-dashed pb-1 inline-block'>
                Traveling Members
              </div>
              <div className='mt-4 flex items-center'>
                <div>
                  <NumberItem desc='Legal Spouse' index={1} />
                </div>
                <div className='ml-4'>
                  <NumberItem desc='Children under 18' index={2} />
                </div>
                <div className='ml-4'>
                  <NumberItem desc='Pets' index={5} />
                </div>
              </div>
            </div>
          </div>

          <div className='bg-panel-1 p-5 pb-[56px] rounded-b-[16px] h-[132px] flex items-center'>
            <div>
              <div className='medium-2 text-neutral-11 border-b border-b-neutral-7 border-dashed pb-1 inline-block'>
                Additions
              </div>
              <div className='mt-5 py-1'>
                <div className='bg-bg-alpha-3 w-[145px] h-3 rounded-[24px]'></div>
              </div>
            </div>
          </div>

          <div className='pt-4 text-alpha-10 semibold-2 text-center'>
            Personal Travel Card by Citizen Remote
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
