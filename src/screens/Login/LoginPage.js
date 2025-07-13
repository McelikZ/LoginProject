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
         imageStyle={{width:225,height:225}}
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
        onPress={()=> console.log("Forget Password")}
        />
        <CustomButton
        buttonStyle={{backgroundColor:'#0165ff',paddingHorizontal:115,paddingVertical:10,borderRadius:15}}
        buttonText='Login'
        onPress={()=> console.log("Login")}
        />
        <Text style={styles.orContinueWithStyle}>Or Continue with</Text>
        
      </View>
      
      <View style={styles.footerContainer}>

      <CustomButton
      source={require('../../../assets/Images/GoogleIcon.png')}
      onPress={()=> console.log('Google')}
      buttonStyle={{paddingHorizontal:0,paddingVertical:0,marginHorizontal:5}}
      imageStyle={{width:70,height:65}}
      showText={false}

      />
      
       <CustomButton
      source={require('../../../assets/Images/FacebookIcon.png')}
      buttonStyle={{paddingHorizontal:0,paddingVertical:0,marginHorizontal:20}}
      onPress={()=> console.log('Facebook')}
      imageStyle={{width:45}}
      showText={false}
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
      onPress={()=> console.log("Sign Up")}
      />
      </View>
      
    </SafeAreaView>
  );
};
export default LoginPage