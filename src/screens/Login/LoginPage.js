import {Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import styles from "./LoginPage.style"
import { CustomImage,CustomButton,CustomTextInput } from '../../components/index'
import { colors, fonts } from '../../theme';

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
        handlePlaceHolder='User name'
        />
        <CustomTextInput
         handlePlaceHolder='Password'
         isSecureText={true}
        />
        <CustomButton
        buttonStyle={{ backgroundColor: 'white', alignSelf: 'flex-end',paddingHorizontal:15 }}
        buttonTextStyle={{color:'#0165ff',fontSize:15,}}
        buttonText='Forget password'
        />
        <CustomButton
        buttonStyle={{backgroundColor:'#0165ff',paddingHorizontal:120,paddingVertical:10,borderRadius:15}}
        buttonText='Login'
        />
        <Text style={styles.orContinueWithStyle}>Or Continue with</Text>
        
      </View>
      
      <View style={styles.footerContainer}>
      <CustomButton
      buttonText=''
      buttonStyle={{backgroundColor:'white'}}
      source={require('../../../assets/Images/GoogleIcon.png')}
      imageStyle={{width:50,height:70}}
      onPress={()=> console.log('Google')}
      />
      <CustomButton
      buttonText=''
      buttonStyle={{backgroundColor:'white'}}
      source={require('../../../assets/Images/FacebookIcon.png')}
      imageStyle={{width:50,height:50}}
      onPress={()=> console.log('Facebook')}
      />
      </View>

      <View style={styles.bottomTextContainer}>

      <Text style={styles.haventAnyAccountStyle}>
        Haven't any account 
      </Text>
      <CustomButton
      isTextOnly={true}
      buttonStyle={{ }}
      buttonTextStyle={{color:'#0165ff',paddingHorizontal:5,fontSize:15,}}
      buttonText='Sign up?'
      />
      

      </View>
      
      

    </SafeAreaView>
  );
};
export default LoginPage