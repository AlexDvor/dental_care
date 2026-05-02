import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { Theme } from '../../constants/colors';

const { width } = Dimensions.get('window');

const Wave = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      {/* BACK LAYER */}
      <Svg
        width={width}
        height={140}
        viewBox="0 0 375 140"
        preserveAspectRatio="none"
        style={styles.backWave}
      >
        <Path
          d="
            M0,60 
            C60,20 120,20 180,50 
            C240,80 300,80 375,50 
            L375,140 
            L0,140 
            Z
          "
          fill="#D1FAE5"
          opacity={0.6}
        />
      </Svg>

      {/* FRONT LAYER */}
      <Svg
        width={width}
        height={140}
        viewBox="0 0 375 140"
        preserveAspectRatio="none"
        style={styles.frontWave}
      >
        <Path
          d="
            M0,80 
            C70,10 150,10 220,60 
            C290,110 330,100 375,70 
            L375,140 
            L0,140 
            Z
          "
          fill={Theme.colors.background.primary}
        />
      </Svg>
    </View>
  );
};

export default Wave;

const styles = StyleSheet.create({
  backWave: {
    position: 'absolute',
    bottom: 10,
  },

  frontWave: {
    position: 'absolute',
    bottom: 0,
  },
});
