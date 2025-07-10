import {Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import styles from "./LoginPage.style"
import { CustomImage,CustomButton,CustomTextInput } from '../../components/index'

const LoginPage = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>

      <View style={styles.headerContainer}>
        <CustomImage
         source={require('../../../assets/Images/LoginIcon.png')} 
         />
        <Text style={styles.signInStyle}>Sign In</Text>
        <Text style={styles.enterValidStyle}> Enter valid user name & password to continue</Text>
      </View>

      <View style={styles.contentContainer}>
        <CustomTextInput
        textTitle=''
        handlePlaceHolder='User name'
         
        />
        <CustomTextInput
         textTitle=''
         handlePlaceHolder='Password'
         textInputStyle={{ marginBottom: 45 }}

        />
        
      </View>

      <View style={styles.footerContainer}>
        <Text>deneme</Text>
      </View>

    </SafeAreaView>
  );
};
export default LoginPage