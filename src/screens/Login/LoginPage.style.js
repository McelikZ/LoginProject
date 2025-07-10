import { StyleSheet } from "react-native";
import {colors,spacing,fonts} from "../../theme/index"

export default StyleSheet.create({

   mainContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center', 
   },
   headerContainer:{
    flex:2,
    alignItems:'center',
    justifyContent:'center',
   },
   contentContainer: {
  flex: 2,
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: 30,
},

   footerContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
   },
   signInStyle:{
    fontWeight:'bold',
    fontSize:fonts.sizes.xlarge,
    marginBottom:10,
    opacity:0.8,

   },
   enterValidStyle:{
     opacity:0.7,

   }
})