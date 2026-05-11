import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Theme } from '../../constants/theme';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import MedicationsListScreen from '../../screens/MedicationsListScreen/MedicationsListScreen';
import { HomeStackParamList } from '../types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: Theme.colors.background.soft },
        }}
      />
      <Stack.Screen
        name="MedicationsList"
        component={MedicationsListScreen}
        options={{
          headerStyle: { backgroundColor: Theme.colors.background.soft },
        }}
      />
    </Stack.Navigator>
  );
}
