import React from 'react';
import {
  Switch,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import { heightPercentageToDP } from 'react-native-responsive-screen';
import { NavigationContainer } from '@react-navigation/native';

// Files
import { persistor, store } from './src/redux/Store';
import { NavigationRef } from './src/routers/RouterServices';
import MainStack from './src/routers/MainStack';
const App = () => {







  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>

        <NavigationContainer ref={NavigationRef}>

          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
