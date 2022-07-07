import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  Login: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainScreen = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {isLoggedIn ? (
          <MainStack.Screen name={'Home'} component={HomeScreen} />
        ) : (
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
