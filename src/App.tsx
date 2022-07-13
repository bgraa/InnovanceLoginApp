import {NavigationContainer} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import UserStore from './mobx/UserStore';
import AuthStackNavigator from './navigation/AuthStack';
import MainStackNavigator from './navigation/MainStack';

const App = () => {
  useEffect(() => {
    const getUser = async () => {
      await UserStore.getUser();
    };
    getUser();
  }, []);

  return (
    <NavigationContainer>
      {UserStore.user ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default observer(App);
