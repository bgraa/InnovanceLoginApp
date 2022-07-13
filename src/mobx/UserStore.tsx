import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeAutoObservable, runInAction} from 'mobx';
import User from '../models/User';

class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }
  async login(user: User) {
    if (user.username !== '' && user.password !== '') {
      await AsyncStorage.setItem('user', JSON.stringify(user)).then(() => {
        this.getUser();
      });
    }
  }

  async getUser() {
    try {
      let _user = await AsyncStorage.getItem('user');
      runInAction(() => (this.user = _user ? JSON.parse(_user) : null));
      return this.user;
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    await AsyncStorage.removeItem('user').then(() => {
      this.getUser();
    });
  }
}

export default new UserStore();
