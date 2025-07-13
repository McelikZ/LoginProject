import {Text, View,ActivityIndicator} from 'react-native'
import React from 'react'
import styles from "./Loader.style"

const Loader = ({indicatorTextStyle={}}) => {
  return (
 <View style={styles.indicatorContainer}>
  <Text style={[styles.indicatorTextStyle,indicatorTextStyle]}> Loading...</Text>
  <ActivityIndicator
     size="large" color="#242425ff"
  />
 </View>
    
  )
}

export default Loader
