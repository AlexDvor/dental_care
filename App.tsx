import { Dimensions, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppProvider from './src/provider/AppProvider';
import RootNavigator from './src/navigation/RootNavigator';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

// const { width: deviceWidth } = Dimensions.get('window');

// const MAX_CONTENT_WIDTH = deviceWidth * 0.9;
// const PADDING = (deviceWidth - MAX_CONTENT_WIDTH) / 2;

function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <StatusBar />
        <RootNavigator />
      </AppProvider>
    </SafeAreaProvider>
  );
}

// function AppContent() {
//   return (
//     <View style={styles.container}>
//       <HomeScreen />
//       {/* <ServiceScreen /> */}
//       {/* <DoctorListScreen /> */}
//       {/* <SelectDateScreen /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: PADDING,
//     paddingTop: 10,
//     backgroundColor: '#E8F3ED',
//   },
// });

export default App;
