import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, ProgressViewIOSComponent} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import LoginButton from './components/LoginButton';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import Card from './components/Card';
import ListDetailScreen from './screens/ListDetailScreen';
import AccountScreen from './screens/AccountScreen';
import ListingScreen from './screens/ListingScreen';
import ListItem from './components/ListItem';
import AppTextInput from './components/AppTextInput';
import TextInputs from './components/TextInputs';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
export default function App() {

  console.log(useDimensions())
  console.log(useDeviceOrientation());
const {landscape} = useDeviceOrientation()


  return (
    <SafeAreaView style={styles.container}>
      {/* <RegisterScreen></RegisterScreen> */}
      <LoginScreen></LoginScreen>
      {/* <TextInputs icon='email'></TextInputs> */}
      {/* <AppTextInput icon='email'></AppTextInput> */}
      {/* <AccountScreen></AccountScreen> */}
      {/* <ListingScreen></ListingScreen> */}
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <LoginButton></LoginButton> */}
{/* <Card title='Red Jacket For Sale' 
subtitle='$70' 
image={require("./assets/jacket.jpg")}></Card> */}
{/* <ListDetailScreen></ListDetailScreen> */}
{/* <ListItem title='name1' subtitle='name2' image={require('./assets/icon.png')}> </ListItem> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop:Platform.OS==='android'?StatusBar.currentHeight:StatusBar.currentHeight+3,
 
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:'wrap',
    alignContent:'stretch',
   
  },
});
