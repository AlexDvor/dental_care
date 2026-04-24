import { Dimensions, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppProvider from './src/provider/AppProvider';
import CustomBtn from './src/ui/CustomBtn/CustomBtn';
import MessageItem from './src/components/Chat/MessageItem/MessageItem';
import TreatmentList from './src/components/TreatmentList/TreatmentList';
import { treatmentsList } from './src/constants/treatments';
import { Colors } from './src/constants/colors';
import DentistCard from './src/components/DentistCard/DentistCard';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ServiceScreen from './src/screens/ServiceScreen/ServiceScreen';
import DoctorListScreen from './src/screens/DoctorListScreen/DoctorListScreen';
import SelectDateScreen from './src/screens/SelectDateScreen/SelectDateScreen';

const { width: deviceWidth } = Dimensions.get('window');

const MAX_CONTENT_WIDTH = deviceWidth * 0.9;
const PADDING = (deviceWidth - MAX_CONTENT_WIDTH) / 2;

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
      {/* <TreatmentList data={treatmentsList} />
      <MessageItem
        date="10:30 AM"
        message="Hello John! Your treatme.... "
        name="Dr. Sarah Mitchell"
        avatar={require('./src/assets/images/dr.jpg')}
      />
      <CustomBtn title="Continue" onPress={() => {}} />
      <DentistCard /> */}
      {/* <HomeScreen /> */}
      {/* <ServiceScreen /> */}
      {/* <DoctorListScreen /> */}
      <SelectDateScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING,
    paddingTop: 10,
    backgroundColor: '#E8F3ED',
  },
});

export default App;
