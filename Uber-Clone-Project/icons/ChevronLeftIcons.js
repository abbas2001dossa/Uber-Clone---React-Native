import React from 'react';
import { Svg, Path } from 'react-native-svg';

const ChevronLeftIcon = ({ size, color }) => {
  const svgSize = size || 24; // Default size if 'size' prop is not provided

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox={`0 0 ${svgSize} ${svgSize}`} // Set viewBox based on 'svgSize'
      strokeWidth="1.5"
      stroke={color || 'currentColor'}
      height={svgSize} // Use 'svgSize' for both height and width
      width={svgSize}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </Svg>
  );
};

export default ChevronLeftIcon;
