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
    paddingTop:75
   },
   contentContainer: {
    flex: 2,
    alignItems: 'center',
    paddingTop:140
   },
   footerContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'row',
    paddingTop:170,
   },
   bottomTextContainer:{
    flex:1,
    flexDirection: 'row',
   },
   signInStyle:{
    fontWeight:'bold',
    fontSize:fonts.sizes.xlarge,
    marginBottom:0,
    opacity:0.8,
   },
   enterValidStyle:{
     opacity:0.7,
   },
   orContinueWithStyle:{
    margin:20,
    opacity:0.5,
   },
   haventAnyAccountStyle:{
   marginBottom: 60,  
   opacity: 0.8,     
   fontSize: fonts.sizes.medium,  
   fontSize:15,
   }

})