import React from 'react';
import clsx from 'classnames';

const Button = (props: any) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={clsx(
        'medium-3 text text-neutral-12 flex items-center justify-center py-[14px] border border-btn-border rounded-[10px] px-4 h-[48px]',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
