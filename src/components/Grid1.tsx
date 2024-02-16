import React from 'react';
import Button from './Button';
import PeoplesIcon from './icons/PeopleIcon';
import MemberItem from './MemberItem';
import { BackIcon } from './icons/BackIcon';
import ButtonFilled from './ButtonFilled';

const Grid1 = () => {
  return (
    <div className='w-[360px] shrink-0 pt-[74px] h-full'>
      <h1 className='bold-6 text-neutral-12'>Travelling Members</h1>
      <span className='mt-2 regular-4 block text-neutral-11'>
        Are you traveling alone or with someone else?
      </span>
      <div className='flex flex-col mt-8'>
        <Button className='w-full'>Alone</Button>
        <Button className='w-full !border-1 border-neutral-12 mt-2 ring-2 ring-btn-border'>
          With others
        </Button>
      </div>

      <div className='p-4 rounded-[16px] border border-btn-border mt-6'>
        <div className='pb-4 border-b border-btn-border semibold-3 flex items-center'>
          <PeoplesIcon />
          <div className='ml-2'>Travelling members</div>
        </div>

        <ul>
          <li>
            <MemberItem
              title='Legal Spouse'
              desc='Must have marriage certificate'
              count={1}
            />
          </li>
          <li>
            <MemberItem
              title='Children under 18'
              desc='Must have birth certificate'
              count={2}
            />
          </li>
          <li>
            <MemberItem
              title='Pets'
              desc='Must have documents'
              isLast={true}
              count={5}
            />
          </li>
        </ul>
      </div>

      <div className='flex items-center justify-between mt-8'>
        <button className='flex items-center'>
          <BackIcon />
          <span className='block semibold-3'>Back</span>
        </button>

        <ButtonFilled>Continue</ButtonFilled>
      </div>
    </div>
  );
};

export default Grid1;
