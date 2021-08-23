import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LoginButton({title,color,myPress,style}){
return(

  <TouchableOpacity style={[styles.bgcolor,{ backgroundColor:color},style]} onPress={myPress}>
        <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>


);

}
const styles = StyleSheet.create({
    
  
  text: {
    fontSize: 15,
    color: "white",
    fontSize:20
  },

  bgcolor: {

    alignSelf:'center',
    justifyContent: "center",
    borderRadius: 90,
    marginTop: 15,
    width: "95%",
    height: "18%",
    alignItems: "center",
    
  },



});