import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppProvider from './src/provider/AppProvider';
import CustomBtn from './src/components/CustomBtn/CustomBtn';

function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <StatusBar />
        <AppContent />
      </AppProvider>
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <CustomBtn title="Continue" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
