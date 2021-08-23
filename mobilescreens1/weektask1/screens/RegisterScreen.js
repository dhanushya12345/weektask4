import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';
import Constants from 'expo-constants';
import color from '../app/colors/Config';
import defaultStyles from '../app/colors/defaultStyles';
import TextInputs from '../components/TextInputs';
import LoginButton from '../components/LoginButton';

const RegisterScreen=({icon})=> {
  
  return(
  <View style={styles.container}>
  <TextInputs  icon ='account' placeholder='NAME'/>
  <TextInputs  icon ='email' placeholder='EMAIL'/>
  <TextInputs  icon ='lock' placeholder='PASSWORD' secureTextEntry={true} />
     <LoginButton title="REGISTER" color={color.primary}  />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginTop:'10',
    width:"100%",
    paddingTop: Constants.statusBarHeight,
    alignItems:'center',
    // marginVertical:10,
    backgroundColor:defaultStyles.colors.light
   
  },
  
});


export default RegisterScreen;