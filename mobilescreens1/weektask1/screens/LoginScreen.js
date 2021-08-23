import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../app/colors/Config';
import defaultStyles from '../app/colors/defaultStyles';
import AppText from '../components/AppText';
import TextInputs from '../components/TextInputs';
import LoginButton from '../components/LoginButton';

const LoginScreen=({icon})=> {
  
  return(
  <View style={styles.container}>
  <Image  style={{height:150, width:150}} source={require('../assets/download.jpg')}></Image>
  <TextInputs  icon ='email' placeholder='EMAIL'/>
  <TextInputs  icon ='lock' placeholder='PASSWORD' secureTextEntry={true} />
   <LoginButton title="LOGIN" color={color.secondary}  />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    // paddingTop: Constants.statusBarHeight,
    alignItems:'center',
    marginVertical:10,
    backgroundColor:defaultStyles.colors.light
   
  },
  
});


export default LoginScreen;