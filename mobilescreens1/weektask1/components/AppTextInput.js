import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './Screen';
import defaultStyles from '../app/colors/defaultStyles'
import AppText from './AppText';
import TextInputs from './TextInputs';

const AppTextInput=({icon,title, ...otherProps})=> {
  
  return(
  <View style={styles.container}>
  {icon ? <MaterialCommunityIcons style={{marginTop:5}} name={icon} color='black' size={35} ></MaterialCommunityIcons> : null }
  {/* <AppText {...otherProps} style={defaultStyles.text, styles.textInput}>{title}</AppText> */}
<TextInputs></TextInputs>
</View>


  )
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flexDirection:'row',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    alignItems:'center',
    borderWidth:1,
    borderRadius:25,
    height:50,
    marginVertical:10,
    backgroundColor:defaultStyles.colors.light
   
  },
  paragraph: {
    margin: 50,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
  textInput: {
    color: 'black',
    borderWidth:1,
    borderRadius:90,
    backgroundColor:defaultStyles.colors.light,
    height:40

   },
});
export default AppTextInput;