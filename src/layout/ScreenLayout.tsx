import React, { ReactNode, useEffect } from 'react';
import {
  Dimensions,
  Platform,
  StatusBar,
  StatusBarStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

import { useIsFocused } from '@react-navigation/native';

import { styles } from './ScreenLayout.style';

const { width: deviceWidth } = Dimensions.get('window');

/**
 * Максимальна ширина контенту
 * Наприклад:
 * якщо екран 400px → контент буде 90% = 360px
 */
const MAX_CONTENT_WIDTH = deviceWidth * 0.9;

/**
 * Розрахунок горизонтального padding
 * щоб контент був по центру
 */
const PADDING = (deviceWidth - MAX_CONTENT_WIDTH) / 2;

type ScreenLayoutProps = {
  children: ReactNode;

  edges?: Edge[];

  style?: StyleProp<ViewStyle>;

  statusBarStyle?: StatusBarStyle;

  statusBarBackgroundColor?: string;

  hiddenStatusBar?: boolean;

  translucent?: boolean;

  defaultPadding?: boolean;
};

const ScreenLayout = ({
  children,

  edges = ['top', 'left', 'right', 'bottom'],

  style,

  statusBarStyle = 'dark-content',

  statusBarBackgroundColor = 'transparent',

  hiddenStatusBar = false,

  translucent = false,

  defaultPadding = false,
}: ScreenLayoutProps) => {
  const isFocused = useIsFocused();

  /**
   * Оновлюємо StatusBar
   * тільки коли screen активний
   */
  useEffect(() => {
    if (isFocused) {
      StatusBar.setBarStyle(statusBarStyle, true);

      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(statusBarBackgroundColor);

        StatusBar.setTranslucent(translucent);
      }

      StatusBar.setHidden(hiddenStatusBar, 'fade');
    }
  }, [
    isFocused,
    statusBarStyle,
    statusBarBackgroundColor,
    translucent,
    hiddenStatusBar,
  ]);

  return (
    <SafeAreaView
      edges={edges}
      style={[
        styles.container,

        style,

        defaultPadding && {
          paddingHorizontal: PADDING,
        },
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

export default ScreenLayout;
