import { StyleSheet} from 'react-native'
import {colors,fonts,spacing} from '../../theme/index'

export default StyleSheet.create({
defaultButton:{
 alignItems:'center',
 justifyContent:'center',
 borderRadius:25,
 backgroundColor:colors.primary,
 paddingVertical:spacing.medium,
 paddingHorizontal:spacing.xlarge,
},
defaultButtonText:{
 color:colors.secondary,
 fontSize:fonts.sizes.medium,
 alignItems:'center',
 justifyContent:'center',
}
})