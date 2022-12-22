import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

// Files
import { setLoading, updateInternet } from '../redux/common';
import {
  CustomLoadingModal,
  CustomSeekBar,
  InternetConnection,
} from '../components';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const auth = useSelector((state: any) => state.auth.auth);
  const loading = useSelector((state: any) => state.common.loading);
  const modalStatus = useSelector((state: any) => state.common.modalData);
  const internet = useSelector((state: any) => state.common.is_internet);
  const dispatch = useDispatch();



  return (
    <>
      {loading ? <CustomLoadingModal /> : null}
      {modalStatus.show ? <CustomSeekBar /> : null}

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {auth ? (
          <Stack.Screen name="HomeStack" component={HomeStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
