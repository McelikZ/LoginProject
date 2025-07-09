import { StyleSheet} from 'react-native'
import {colors,fonts,spacing} from '../../theme/index'

export default StyleSheet.create({
defaultButton:{
 alignItems:'center',
 justifyContent:'center',
 borderRadius:20,
 backgroundColor:colors.error,
 paddingVertical:spacing.medium,
 paddingHorizontal:spacing.massive,
},
defaultButtonText:{
 color:colors.secondary,
 fontSize:fonts.sizes.large,
}
})