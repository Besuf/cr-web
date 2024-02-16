import React from 'react';

const NumberItem = (props: any) => {
  const { index, desc } = props;
  return (
    <div className='flex items-center'>
      <div className='w-5 h-5 flex items-center justify-center text-center rounded-full bg-neutral-3 semibold-2 text-neutral-12'>
        {index}
      </div>
      <span className='block medium-3 text-neutral-12 ml-2'>{desc}</span>
    </div>
  );
};

export default NumberItem;
