import {Text,View,Image } from 'react-native'
import styles from './CustomImage.style'

const CustomImage = ({imageStyle={},source}) => {
  return (
    <View>
     <Image
     source={source}
     style={[styles.defaultCustomImage,imageStyle]}
     />
    </View>
  )
}

export default CustomImage
