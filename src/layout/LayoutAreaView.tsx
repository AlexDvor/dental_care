import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './LayoutAreaView.style';

type LayoutAreaViewProps = {
  children: ReactNode;
};

const LayoutAreaView = ({ children }: LayoutAreaViewProps) => {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      {children}
    </SafeAreaView>
  );
};

export default LayoutAreaView;
