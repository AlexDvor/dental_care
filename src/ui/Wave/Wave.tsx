import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { Theme } from '../../constants/theme';
import { SparkleProps } from './Wave.interface';

const { width } = Dimensions.get('window');

const Sparkle = ({ x, y, size, opacity }: SparkleProps) => (
  <Path
    d={`
      M ${x} ${y - size}
      L ${x + size * 0.3} ${y - size * 0.3}
      L ${x + size} ${y}
      L ${x + size * 0.3} ${y + size * 0.3}
      L ${x} ${y + size}
      L ${x - size * 0.3} ${y + size * 0.3}
      L ${x - size} ${y}
      L ${x - size * 0.3} ${y - size * 0.3}
      Z
    `}
    fill="#D1FAE5"
    opacity={opacity}
  />
);

const Wave = () => {
  return (
    <View style={styles.container} pointerEvents="none">
      <Svg
        width={width}
        height={180}
        viewBox="0 0 375 180"
        preserveAspectRatio="none"
        style={styles.sparkles}
      >
        <Sparkle x={70} y={40} size={4} opacity={0.4} />
        <Sparkle x={155} y={5} size={6} opacity={0.7} />
        <Sparkle x={300} y={60} size={9} opacity={0.9} />
      </Svg>

      <Svg
        width={width}
        height={120}
        viewBox="0 0 375 120"
        preserveAspectRatio="none"
        style={[styles.wave, styles.airWave]}
      >
        <Path
          d="M0,50 C80,10 160,20 240,50 C320,80 350,70 375,60"
          stroke="#A7F3D0"
          strokeWidth={12}
          opacity={0.15}
          fill="none"
        />
      </Svg>

      <Svg
        width={width}
        height={140}
        viewBox="0 0 375 140"
        preserveAspectRatio="none"
        style={[styles.wave, styles.backWave]}
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

      <Svg
        width={width}
        height={140}
        viewBox="0 0 375 140"
        preserveAspectRatio="none"
        style={[styles.wave, styles.frontWave]}
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
          fill={Theme.colors.background.main}
        />
      </Svg>
    </View>
  );
};

export default Wave;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 220,
  },

  sparkles: {
    position: 'absolute',
    top: 30,
  },

  wave: {
    position: 'absolute',
    left: 0,
  },

  airWave: {
    bottom: 60,
  },

  backWave: {
    bottom: 10,
  },

  frontWave: {
    bottom: 0,
  },
});
