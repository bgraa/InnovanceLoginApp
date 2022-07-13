import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens';

export type MainStackParamList = {
  Home: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
