import React from 'react';
import clsx from 'classnames';

const ButtonFilled = (props: any) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={clsx(
        'medium-3 bg-neutral-12 text text-white-text flex items-center justify-center py-[14px] rounded-[10px] px-4 h-[48px]',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonFilled;
