import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from '../../screens/ChatScreen/ChatScreen';

const Stack = createNativeStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatMain" component={ChatScreen} />
    </Stack.Navigator>
  );
}
