import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Files
import RouterConstants from './RouterConstants';
import Home from '../screens/home/Home';
import HomeDetail from '../screens/home/HomeDetail'

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouterConstants.Home}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={RouterConstants.Home} component={Home} />
      <Stack.Screen name={RouterConstants.HomeDetail} component={HomeDetail} />
    </Stack.Navigator>
  );
};

export default HomeStack;
