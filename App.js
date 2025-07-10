import { StyleSheet,View } from 'react-native'
import { CustomButton,CustomTextInput } from './src/components/index'
import { LoginPage } from './src/screens/index'
import React from 'react'

const App = () => {
  return (
    <LoginPage/>
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
