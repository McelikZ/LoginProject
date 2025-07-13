import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import styles from "./SignUpPage.style";
import { CustomButton, CustomImage, CustomTextInput } from '../../components';

const SignUpPage = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
     
        <View style={styles.headerContainer}>
          <CustomImage
            source={require('../../../assets/Images/SignUpIcon.png')}
            imageStyle={{ width: 300, height: 200,left:15 }}
          />
          <Text style={styles.signUpStyle}>Sign Up</Text>
          <Text style={styles.infoTextSyle}>Use proper information to continue.</Text>
        </View>

        <View style={styles.contentContainer}>
          <CustomTextInput handlePlaceHolder='Full name' />
          <CustomTextInput handlePlaceHolder='Email address' />
          <CustomTextInput handlePlaceHolder='Password' />

          <View style={styles.firstRowContainer}>
            <Text style={styles.textLeft}>By signing up, you agree to our</Text>
            <CustomButton
              onPress={() => console.log("Terms &")}
              buttonTextStyle={{
                color: '#0165ff',
                paddingHorizontal: 5,
                fontSize: 15,
              }}
              buttonText='Terms& '
              isTextOnly={true}
            />
          </View>

          <View style={styles.secondRowContainer}>
            <CustomButton
              buttonTextStyle={{
                color: '#0165ff',
                paddingHorizontal: 5,
                fontSize: 15,
              }}
              buttonText='Conditions and Privacy Policy '
              isTextOnly={true}
              onPress={() => console.log("Privacy Policy")}
            />
          </View>

          <CustomButton
            buttonStyle={{
              backgroundColor: '#0165ff',
              paddingHorizontal: 85,
              paddingVertical: 15,
              borderRadius: 15,
              margin: 25,
            }}
            buttonTextStyle={{ fontSize: 19 }}
            buttonText='Create Account'
            onPress={() => console.log("Create Account")}
          />
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.haventAnyAccountStyle}>
            Already have an Account 
          </Text>
          <CustomButton
            isTextOnly={true}
            buttonTextStyle={{ color: '#0165ff', paddingHorizontal: 5, fontSize: 15 }}
            buttonText='Sign in?'
            onPress={() => console.log("Sign in")}
          />
        </View>

    </SafeAreaView>
  );
};

export default SignUpPage;
