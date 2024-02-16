import React from 'react';
import clsx from 'classnames';
import MinusIcon from './icons/MinusIcon';
import PlusIcon from './icons/PlusIcon';

const MemberItem = (props: any) => {
  const { title, desc, count, isLast } = props;
  return (
    <div
      className={clsx(
        'py-4 border-btn-border flex items-center justify-between',
        isLast ? 'pb-0' : 'border-b'
      )}
    >
      <div className='max-w-[186px]'>
        <span className='text-neutral-12 medium-3 block'>{title}</span>
        <span className='text-neutral-11 regular-2 mt-1 block'>{desc}</span>
      </div>

      <div className='flex items-center'>
        <div className='h-8 w-8 rounded-[6px] flex items-center justify-center bg-bg-alpha-3'>
          <MinusIcon />
        </div>
        <div className='semibold-4 text-neutral-12 w-[32px] text-center ml-2'>
          {count}
        </div>
        <div className='h-8 w-8 rounded-[6px] flex items-center justify-center bg-bg-alpha-3 ml-2'>
          <PlusIcon />
        </div>
      </div>
    </div>
  );
};

export default MemberItem;
