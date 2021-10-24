import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {
  get: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) return JSON.parse(value);

      return value;
    } catch (err) {
      console.error(`AsyncStorage Get Failed: ${key}`, err);
    }
  },
  set: (key: string, value: any) => {
    try {
      return AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(`AsyncStorage Set Failed: ${key}`, err);
    }
  },
  remove: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      console.error(`AsyncStorage Clear Failed: ${key}`, err);
    }
  }
}

export default Storage;
