import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MenuIcon = ({ size, color }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height={size} width={size}>
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4 7h16M4 12h16M4 17h16"
        stroke={color}
        stroke-width="2" // Adjust the stroke width as needed
      />
    </Svg>
  );
};

export default MenuIcon;
