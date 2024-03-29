import React from 'react';

import {type CommonIconProps} from './types';

export const Eye: React.FC<CommonIconProps> = ({
  height = 24,
  width = 24,
  ...rest
}) => {
  return (
    <svg
      enableBackground='new 0 0 24 24'
      height={height}
      id='Layer_1'
      version='1.1'
      viewBox='0 0 24 24'
      width={width}
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...rest}
    >
      <g>
        <g>
          <path
            clipRule='evenodd'
            d='M12,4C4.063,4-0.012,12-0.012,12S3.063,20,12,20    c8.093,0,12.011-7.969,12.011-7.969S20.062,4,12,4z M12.018,17c-2.902,0-5-2.188-5-5c0-2.813,2.098-5,5-5c2.902,0,5,2.187,5,5    C17.018,14.812,14.92,17,12.018,17z M12.018,9c-1.658,0.003-3,1.393-3,3c0,1.606,1.342,3,3,3c1.658,0,3-1.395,3-3    C15.018,10.392,13.676,8.997,12.018,9z'
            fillRule='evenodd'
          />
        </g>
      </g>
    </svg>
  );
};
