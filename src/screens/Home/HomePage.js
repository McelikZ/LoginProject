import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'
import styles from './HomePage.style'

const HomePage = () => {
  return (
    <View style={styles.test}>
      <Text
      onPress={()=> console.log("Home")}
      >HomePage</Text>
    </View>
  )
}

export default HomePage