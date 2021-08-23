import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TextInputs=({title,icon, ...otherProps})=> {
  const [text, setText] = useState('');
  return(

<View style={styles.container}>
{icon ? <MaterialCommunityIcons name={icon} color='black' size={20} style={styles.icon} ></MaterialCommunityIcons> : null }

<TextInput onChangeText={t=>setText(t)} {...otherProps} style={styles.textInput} ></TextInput>

</View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    width:'95%',
    marginTop:"5%", 
    height:44, 
    backgroundColor:'#E8F6EF',
     flexDirection:'row',
     borderWidth:2,
     borderColor:'black',
     borderRadius:40
 
  },
  icon: {
    marginTop:10,
    marginLeft:10,
    marginRight:20
   
  },
  textInput: {
    color: 'black',
    width:'90%'
   },
});
export default TextInputs;