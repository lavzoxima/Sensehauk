import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Files
import RouterConstants from './RouterConstants';
import Login from '../screens/auth/Login';
import Chat from '../screens/home/Chat';
import Messaging from '../screens/home/Messaging'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouterConstants.Login}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={RouterConstants.Login} component={Login} />
      <Stack.Screen name={RouterConstants.Chat} component={Chat} />
      <Stack.Screen name={RouterConstants.Messaging} component={Messaging} />
    </Stack.Navigator>
  );
};

export default AuthStack;
