import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { Theme } from '../../constants/colors';

const { width } = Dimensions.get('window');

const Wave = () => {
  return (
    <>
      {/* задній шар */}
      <Svg
        width={width}
        height={120}
        viewBox={`0 0 ${width} 120`}
        style={{ position: 'absolute', bottom: -10, opacity: 0.5 }}
      >
        <Path
          d={`
            M0 60 
            Q ${width * 0.25} 20, ${width * 0.5} 60 
            T ${width} 60 
            L ${width} 120 
            L 0 120 
            Z
          `}
          fill="#D1FAE5"
        />
      </Svg>

      {/* основний */}
      <Svg
        width={width}
        height={120}
        viewBox={`0 0 ${width} 120`}
        style={{ position: 'absolute', bottom: -1 }}
      >
        <Path
          d={`
            M0 60 
            Q ${width * 0.25} 0, ${width * 0.5} 40 
            T ${width} 60 
            L ${width} 120 
            L 0 120 
            Z
          `}
          fill={Theme.colors.background.primary}
        />
      </Svg>
    </>
  );
};

export default Wave;
