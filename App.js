import { StyleSheet,View } from 'react-native'
import CustomButton from './src/components/CustomButton/CustomButton'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
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
