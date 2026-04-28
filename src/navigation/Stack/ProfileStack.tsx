import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Theme } from '../../constants/colors';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={{
          headerStyle: { backgroundColor: Theme.colors.background.accent },
          headerTitle: 'Profile',
          headerTitleStyle: { color: Theme.colors.text.inverted },
        }}
      />
    </Stack.Navigator>
  );
}
