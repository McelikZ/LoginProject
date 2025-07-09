import { TextInput, Text, View } from "react-native"
import styles from "./CustomTextInput.style"
import React from 'react'

const CustomTextInput = ({
  textTitle = 'default',
  textStyle = {},
  textInputStyle = {},
  handlePlaceHolder = 'Default',
  handleOnchangeText,
  handleValue,
  isSecureText = false,
}) => {
  return (
    <View>
      <Text style={[styles.defaultTextInputText, textStyle]}>
        {textTitle}
      </Text>
      <TextInput
        style={[styles.defaultTextInput, textInputStyle]}
        placeholder={handlePlaceHolder}
        onChangeText={handleOnchangeText}
        value={handleValue}
        secureTextEntry={isSecureText}
      />
    </View>
  )
}

export default CustomTextInput
