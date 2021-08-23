import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import color from '../app/colors/Config';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";


export default function Card({title,subtitle,image}){
    console.log(useDimensions())
    console.log(useDeviceOrientation());
    const {landscape} = useDeviceOrientation()
    

    return(
//  <View style={[styles.container]}>
<View style={[styles.box1,{marginTop:landscape?'1%':'5%'}]}>

<View style={[styles.box2,{borderRadius:15,backgroundColor:'white',marginTop:'5%',}]}>
<Image  style={[styles.image,{marginTop:landscape?'1%':'0%',height:landscape?270:180,borderRadius:10}]} source={image}></Image>
<Text style={styles.text} >{title}</Text>
<Text style={[styles.text,{color:color.secondary}]}>{subtitle}</Text>
</View>


</View>
//  </View>


    );
}


const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor:'#f8f4f4',
    width:'100%',
    height:'100%', 
    borderRadius:40,
    
},

box1: {
    flex:0.5,
    // width:'100%',
    // height:'70%', 
    backgroundColor:'#f8f4f4',
    justifyContent:'flex-start',
    alignItems:'center',
    // marginTop:'1%',
    
},

box2:{
width:'90%',

    
},

text:{
marginLeft:'10%'

},

 image :{
  width:'100%',
  flexWrap:'wrap',
  alignContent:'stretch',
  alignItems:'center',
  alignSelf:'center'

         },

        })