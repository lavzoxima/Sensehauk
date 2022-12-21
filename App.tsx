import React from 'react';
import {
  Switch,
  Text,
  View,
} from 'react-native';

import { heightPercentageToDP } from 'react-native-responsive-screen';
const App = () => {







  return (
    <View style={{ alignItems: 'center', flex: 1, marginTop: 200 }}>
      <Text>Chat </Text>
      <Switch
      /* value={enabled} 
      onValueChange={setEnabled}  */
      />
      <Text style={{ fontSize: 12 }}>{""}</Text>
    </View>
  );
};

export default App;
