import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './LayoutAreaView.style';

type LayoutAreaViewProps = {
  children: ReactNode;
  withHeader?: boolean;
};

const LayoutAreaView = ({ children, withHeader }: LayoutAreaViewProps) => {
  return (
    <SafeAreaView
      style={styles.container}
      edges={
        withHeader
          ? ['left', 'right', 'bottom']
          : ['top', 'left', 'right', 'bottom']
      }
    >
      {children}
    </SafeAreaView>
  );
};

export default LayoutAreaView;
