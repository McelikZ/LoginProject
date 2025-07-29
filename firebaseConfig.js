import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCI8x57ePulTTDra82uRYCXPobYKjbmMeQ",
  authDomain: "loginproject-c176e.firebaseapp.com",
  projectId: "loginproject-c176e",
  storageBucket: "loginproject-c176e.firebasestorage.app",
  messagingSenderId: "299570814041",
  appId: "1:299570814041:web:c9d8350a9c41e5ebc9a548"
};
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export default app