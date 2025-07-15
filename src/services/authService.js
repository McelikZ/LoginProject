import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut,sendPasswordResetEmail } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginService = async (email, password) => {
  const auth = getAuth();
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  const token = user.stsTokenManager.accessToken;
  await AsyncStorage.setItem("userToken", token);
  return { user, token };
};

export const registerService = async (email, password) => {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  const token = user.stsTokenManager.accessToken;
  await AsyncStorage.setItem("userToken", token);
  return { user, token };
};

export const logoutService = async () => {
  const auth = getAuth();
  await signOut(auth);
  await AsyncStorage.removeItem("userToken");
  return true;
};

export const autoLoginService = async () => {
  const token = await AsyncStorage.getItem("userToken");
  if (!token) throw new Error("No token found");
  return token;
};

export const resetPasswordService=async(email)=>{

  const auth = getAuth();
  try {
    await sendPasswordResetEmail(auth, email);
    return "Password reset email sent";
  } catch (error) {
    console.log("ResetPasswordError:", error);
    throw error;
  }
};
