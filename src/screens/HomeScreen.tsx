import React, {useLayoutEffect} from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../constants/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/MainStack';
import UserStore from '../mobx/UserStore';

type HomeScreenProps = NativeStackScreenProps<MainStackParamList, 'Home'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const logout = () => {
    UserStore.logout();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => logout()} title="Logout" color={Colors.BLACK} />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
