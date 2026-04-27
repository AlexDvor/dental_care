import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
