import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type MainStackParamList = {
  Main: undefined;
  Home: undefined;
  Login: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function getIsLoggedInFromStorage() {
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (loggedIn === 'true') {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      console.log(loggedIn);
    }
    getIsLoggedInFromStorage();
  }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Main">
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
