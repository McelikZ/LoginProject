import { StyleSheet,View } from 'react-native'
import { CustomButton,CustomTextInput } from './src/components/index'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      
      <CustomTextInput/>
      <CustomTextInput
      isSecureText={true}
      />

      <CustomButton
      onPress={()=> console.log("calisti...")}
      buttonText='Login'
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
  }
})
