import React from 'react';
import { Text, StyleSheet, Platform, View, Image } from 'react-native';


function AppText({title,subTitle, children}){
    return (
        // <Text style={styles.text}>{props.children}</Text>
        // <Text style={styles.text}>{props.str}</Text>
        <View style={styles.container}>
          <Text style={styles.title}>{title}{children}</Text>
          <Text style={styles.subtitle}>{subTitle}</Text>
         
        </View>
      
    )
}


export default AppText;

const styles = StyleSheet.create({
    container:{
     width:'100%',
       
    },
    title:{
  fontSize:25,
  marginLeft:10
}
})