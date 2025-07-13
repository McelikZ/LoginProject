import { Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import React from 'react';
import styles from './ForgotPasswordPage.style';
import { CustomButton, CustomImage, CustomTextInput } from '../../components/index';

const ForgotPasswordPage = () => {
  return (
    <SafeAreaView
    style={styles.mainContainer}
    >
      <View style={styles.mainContainer}>

        <View style={styles.headerContainer}>
          <CustomImage
            source={require('../../../assets/Images/ForgotPasswordIcon.png')}
            imageStyle={{ width: 200, height: 220 }}
          />
          <Text style={styles.forgetPasswordText}>
            Forget Password
          </Text>

          <Text style={styles.dontWorryText}>
            Don't worry it happens. Please enter the address
          </Text>

          <Text style={styles.dontWorryText}>
            associated with your account.
          </Text>
        </View>

        <View style={styles.contentContainer}>
          <CustomTextInput
            handlePlaceHolder='Email Address'
            textInputStyle={{ margin: 15 }}
          />

          <CustomButton
            onPress={()=> console.log("Send OTP")}
            buttonStyle={{
              paddingHorizontal: 113,
              paddingVertical: 17,
              backgroundColor: '#0165ff',
            }}
            buttonTextStyle={{ fontSize: 15 }}
            buttonText='Send OTP'
          />
        </View>

        <View style={styles.footerContainer}>
          <Text>You remember your password?</Text>
          <CustomButton
         
           onPress={()=> console.log("Sign in")}
            buttonTextStyle={{
              color: '#0165ff',
              paddingHorizontal: 5,
              fontSize: 15,
            }}
            buttonText='Sign in'
            isTextOnly={true}
          />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordPage;
