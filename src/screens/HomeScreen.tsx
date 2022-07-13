import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import UserStore from '../mobx/UserStore';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Colors} from '../constants/colors';
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').label('Name'),
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
});

const HomeScreen = () => {
  const logout = () => {
    UserStore.logout();
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        <Formik
          initialValues={{name: '', email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  autoCorrect={false}
                />
                {errors.name && touched.name && (
                  <Text style={{color: 'red'}}>{errors.name}</Text>
                )}
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <Text style={{color: Colors.RED}}>{errors.email}</Text>
                )}
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  autoCapitalize="none"
                  secureTextEntry
                  textContentType="password"
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <Text style={{color: Colors.RED}}>{errors.password}</Text>
                )}
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={{
                    ...styles.btn,
                    backgroundColor: Colors.WHITE,
                    borderColor: Colors.BLACK,
                  }}
                  onPress={handleSubmit}>
                  <Text style={{...styles.btnText, color: Colors.BLACK}}>
                    Submit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.btn,
                    backgroundColor: Colors.BLACK,
                    borderColor: Colors.BLACK,
                  }}
                  onPress={() => logout()}>
                  <Text style={styles.btnText}>Logout</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 10,
    borderColor: Colors.BLACK,
    borderWidth: 1,
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderColor: Colors.LIGHT_GREY,
    borderWidth: 1,
    borderRadius: 25,
  },
  btnText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: '600',
  },
  btnContainer: {
    marginTop: 20,
  },
});
