import { StyleSheet,StatusBar,Platform } from "react-native";
import {colors,spacing,fonts} from "../../theme/index"

export default StyleSheet.create({

   mainContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center', 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
   },
   headerContainer:{
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20
   },
   contentContainer: {
    flex: 2,
    alignItems: 'center',
    paddingTop:120,
   },
   footerContainer:{
    flex:1,
    alignItems:'center',
    flexDirection: 'row',
    paddingTop:100,
   },
   bottomTextContainer:{
    flexDirection: 'row',
    paddingBottom:50,
   },
   signInStyle:{
    fontWeight:'bold',
    fontSize:fonts.sizes.xlarge,
    marginBottom:20,
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
   opacity: 0.8,     
   fontSize: fonts.sizes.smallMedium,  
   }

})