import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,buttonText,buttonStyle={},buttonTextStyle={}}) => {
  return (
    <Pressable 
      onPress={onPress}
      style={[styles.defaultButton,buttonStyle]}
      >
      <Text
      style={[styles.defaultButtonText,buttonTextStyle]}
      >{['Default',buttonText]}</Text>        
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  defaultButton: {
  borderRadius: 50,
  backgroundColor: 'black',
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 10,
  paddingHorizontal: 120,
},
  defaultButtonText:{
   color:'white',
   fontSize:25,
  }
})