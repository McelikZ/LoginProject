import { Text, View, SafeAreaView, StatusBar, Platform, Easing } from 'react-native';
import React,{useState} from 'react';
import styles from './ForgotPasswordPage.style';
import { CustomButton, CustomImage, CustomTextInput } from '../../components/index';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../redux/user/userThunks';

const ForgotPasswordPage = ({navigation}) => {
  const [email, setEmail] = useState('')
  const dispatch=useDispatch();
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
          iconSource={require('../../../assets/Images/EmailIcon.png')}
          placeholder='Email Address'
          onChangeText={setEmail}
          value={email}
          />
          <CustomButton
            onPress={()=> dispatch(resetPassword(email))}
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
         
           onPress={()=> navigation.navigate("LoginPage")}
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
