import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constants/colors';
import {MainStackParamList} from './MainScreen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const user = {
  username: 'admin',
  password: 'admin',
};

type authScreenProp = NativeStackNavigationProp<MainStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<authScreenProp>();

  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const signIn = (username: string, password: string) => {
    if (username === '' || password === '') {
      return Alert.alert('Error', 'Please enter your username and password.', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK'},
      ]);
    }

    if (username === user.username && password === user.password) {
      console.log(navigation);
      return navigation.replace('Home');
    } else {
      return Alert.alert('Error', 'Username or password wrong.', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK'},
      ]);
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/img/bg.jpeg')}>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>LOGIN</Text>
        <Text style={styles.title}>INNOVANCE</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          placeholderTextColor={Colors.GREY}
          style={styles.input}
          onChange={e => setUsernameInput(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.GREY}
          style={styles.input}
          onChange={e => setPasswordInput(e.nativeEvent.text)}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => signIn(usernameInput, passwordInput)}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.GREY,
  },
  logoContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 20,
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderColor: Colors.LIGHT_GREY,
    borderWidth: 2,
    borderRadius: 25,
  },
  btnText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: '600',
  },
});
