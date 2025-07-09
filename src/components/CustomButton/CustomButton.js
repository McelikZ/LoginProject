import styles from './CustomButton.style'
import { Pressable, Text } from 'react-native';
import React from 'react'

const CustomButton = ({onPress,buttonText='default',buttonStyle={},buttonTextStyle={}}) => {
  return (
    <Pressable 
      onPress={onPress}
      style={[styles.defaultButton,buttonStyle]}
      >
      <Text
      style={[styles.defaultButtonText,buttonTextStyle]}
      >{buttonText}</Text>        
    </Pressable>
  )
}

export default CustomButton

