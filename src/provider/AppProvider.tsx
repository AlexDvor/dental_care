import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
};

export default AppProvider;
