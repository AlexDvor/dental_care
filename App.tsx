import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppProvider from './src/provider/AppProvider';
import CustomBtn from './src/ui/CustomBtn/CustomBtn';
import MessageItem from './src/components/Chat/MessageItem/MessageItem';
import TreatmentList from './src/components/TreatmentList/TreatmentList';
import { treatmentsList } from './src/constants/treatments';

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
      <TreatmentList data={treatmentsList} />
      <MessageItem
        date="10:30 AM"
        message="Hello John! Your treatme.... "
        name="Dr. Sarah Mitchell"
        avatar={require('./src/assets/images/dr.jpg')}
      />
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
